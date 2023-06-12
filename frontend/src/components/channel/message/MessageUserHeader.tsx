import Image from "next/image"

export default function MessageUserHeader() {
    const AuthorUserName = () => {
        return (
            <div
                style={{ color: "#7289da" }}
                className={`hover:underline duration-200 ease-in-out text-base font-semibold`}
            >
                {"test"}
            </div>
        )
    }

    const Timestap = () => {
        return <div className="text-xs text-content-secondary">1.1.2023</div>
    }
    return (
        <div className="flex flex-row w-full justify-between space-x-2 items-center">
            <div className="flex flex-row items-center space-x-1">
                <AuthorUserName />
                <div className=" cursor-pointer">
                    <Image
                        className="rounded-full w-4 h-4"
                        width={16}
                        height={16}
                        alt=""
                        src={`/blaueente.png`}
                    />

                </div>

            </div>
            <Timestap />
        </div>
    )
}