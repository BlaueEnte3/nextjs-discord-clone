import { PageParam } from "@/types/Router";

export default function DirectMessagePage({ params: { userId } }: { params: { userId: PageParam } }) {
    return (
        <div>{userId}</div>
    )
}