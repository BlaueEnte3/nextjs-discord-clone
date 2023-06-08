
import {Dispatch, SetStateAction} from 'react'
export default function Dropdown({ open, setOpen, children }: { open: boolean, setOpen: Dispatch<SetStateAction<boolean>>, children: React.ReactNode }) {
    if (!open) return null
    return (
        <div className={"absolute mt-1 w-full"}>
            <div className="rounded-md h-10 w-11/12 mx-auto bg-brand-dark">
                {children}
            </div>
        </div>
    )
}   