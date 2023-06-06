

export default async({ params: { userId } }: { params: { userId: string } }) => {
    return (
        <div>User: {userId}</div>
    )
}