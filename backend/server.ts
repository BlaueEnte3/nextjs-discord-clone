import express, { Request, Response, NextFunction } from 'express';
import http from 'http';
import { Server, Socket } from 'socket.io';
import mongoose, { Schema, Document } from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

interface IMessage extends Document {
  content: string;
  sender: string;
  receiver?: string;
  timestamp: Date;
}

const MessageSchema: Schema = new Schema({
  content: { type: String, required: true },
  sender: { type: Schema.Types.ObjectId, ref: 'User' },
  receiver: { type: Schema.Types.ObjectId, ref: 'User' },
  timestamp: { type: Date, default: Date.now },
});

const Message = mongoose.model<IMessage>('Message', MessageSchema);

interface IUser extends Document {
  username: string;
  password: string;
}

const UserSchema: Schema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
});

const User = mongoose.model<IUser>('User', UserSchema);

const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.use(async (socket: Socket, next: NextFunction) => {
  const token = socket.handshake.auth.token;
  if (!token) {
    return next(new Error('Authentication failed'));
  }

  try {
    const decoded: any = jwt.verify(token, 'secret_key');
    socket['userId'] = decoded.userId; 
    next();
  } catch (error) {
    return next(new Error('Authentication failed'));
  }
});

io.on('connection', (socket: Socket) => {
  console.log('User connected');

  socket.on('joinRoom', (roomId: string) => {
    socket.join(roomId);
    console.log(`User ${socket['userId']} joined room ${roomId}`);
  });

  socket.on('leaveRoom', (roomId: string) => {
    socket.leave(roomId);
    console.log(`User ${socket['userId']} left room ${roomId}`);
  });

  socket.on('message', async (data: { roomId: string; content: string }) => {
    const { roomId, content } = data;

    try {
      const message = new Message({ content, sender: socket['userId'] });
      await message.save();

      io.to(roomId).emit('message', message);
    } catch (error) {
      console.error(error);
    }
  });

  socket.on('privateMessage', async (data: { receiverId: string, content: string }) => {
    const { receiverId, content } = data;

    try {
      const message = new Message({ content, sender: socket['userId'], receiver: receiverId });
      await message.save();

      const receiverSocket = io.sockets.sockets.get(receiverId);
      if (receiverSocket) {
        receiverSocket.emit('privateMessage', message);
      }

      socket.emit('privateMessageSent', message);
    } catch (error) {
      console.error(error);
    }
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

app.use(express.json());

app.post('/signup', async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: 'Username already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hashedPassword });

    await user.save();

    res.sendStatus(201);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

app.post('/login', async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user._id }, 'secret_key');
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

app.get('/profile', async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req['userId']); // Retrieve user ID from custom property
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({ username: user.username });
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

app.get('/users', async (req: Request, res: Response) => {
  try {
    const users = await User.find().select('username');
    res.json(users);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

app.get('/messages', async (req: Request, res: Response) => {
  try {
    const messages = await Message.find()
      .sort({ timestamp: 1 })
      .populate('sender', 'username');
    res.json(messages);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
