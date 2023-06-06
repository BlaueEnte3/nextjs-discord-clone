import { string } from "@/types/Router";

export default async({ params: { userId } }: { params: { userId: string } }) => {
    return (
        <div>User: {userId}</div>
    )
}