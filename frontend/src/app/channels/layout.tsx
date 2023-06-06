import Sidebar from "@/components/navigation/sidebar/Sidebar"

export default ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-screen w-screen flex">
            <Sidebar />
            {children}
        </div>
    )
}