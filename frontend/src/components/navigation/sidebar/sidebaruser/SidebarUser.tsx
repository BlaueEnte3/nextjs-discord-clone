import SidebarUserAvatar from "./SidebarUserAvatar";
import SidebarUserIcons from "./SidebarUserIcons";
import SidebarUserName from "./SidebarUserName";

export default function SidebarUser() {
    return (
    <div className="mt-auto h-14 w-full bg-brand-tertiary flex items-center px-3">
            <div className="flex space-x-1 rounded p-0.5 hover:bg-blue-500">
                <SidebarUserAvatar />
                <SidebarUserName />
            </div>
            <SidebarUserIcons />
        </div>
    )
}