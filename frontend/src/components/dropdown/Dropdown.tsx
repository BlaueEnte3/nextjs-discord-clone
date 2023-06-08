export default function Dropdown({ open, setOpen }: { open: boolean, setOpen: any }) {
    if (!open) return null
    return (
        <div className="absolute mt-1 w-full">
            <div className="rounded-md h-10 w-11/12 mx-auto bg-brand-dark"></div>
        </div>
    )
}   