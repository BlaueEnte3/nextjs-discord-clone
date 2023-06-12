'use client'

import { ClickAwayListener } from '@mui/base'
import { Dispatch, SetStateAction } from 'react'
export default function Dropdown({ open, setOpen, children }: { open: boolean, setOpen: Dispatch<SetStateAction<boolean>>, children: React.ReactNode }) {

    if (!open) return null
    return (
        <div className={"absolute mt-1 w-full"}>
            <ClickAwayListener onClickAway={() => setOpen(false)}>
                <div className="rounded-md h-max w-11/12 mx-auto bg-brand-dark p-2">
                    {children}
                </div>
            </ClickAwayListener>
        </div>
    )
}   