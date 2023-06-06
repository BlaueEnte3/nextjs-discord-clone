import Sidebar from "@/components/navigation/sidebar/Sidebar"
import MemberSidebar from "@/components/navigation/sidebar/membersidebar/MemberSidebar"

export default ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex w-full h-full">
            <div className="flex flex-grow">
                {children}
            </div>
            <MemberSidebar />
        </div>
    )
}