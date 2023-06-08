import TextChannelHeader from "@/components/channel/header/TextChannelHeader"
import Sidebar from "@/components/navigation/sidebar/Sidebar"
import MemberSidebar from "@/components/navigation/sidebar/membersidebar/MemberSidebar"

export default ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col w-full h-full">
            <TextChannelHeader />
            <div className="flex" style={{ height: "calc(100vh - 48px)" }}>
                <div className="flex flex-grow">
                    {children}
                </div>
                <MemberSidebar />
            </div>
        </div>
    )
}