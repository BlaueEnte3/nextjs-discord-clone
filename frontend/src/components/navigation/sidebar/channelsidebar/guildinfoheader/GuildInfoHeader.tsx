'use client'
import Dropdown from "@/components/dropdown/Dropdown";
import { faChevronDown, faChevronUp, faCog, faPlusCircle, faSignOutAlt, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function GuildInfoHeader() {
    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false)

    const onChannelCreate = () => {

    }
    const onLeaveGuild = () => {

    }
    const onInviteCreate = () => { }

    const onOpenSettings = () => { }
    const GuildDropdown = () => {
        const dropdownKeys = [
            { label: "Create channel", icon: faPlusCircle, action: () => onChannelCreate() },
            { label: "Create invite", icon: faUserPlus, action: () => onInviteCreate() },
            { label: "Settings", icon: faCog, action: () => onOpenSettings() },
            {},
            { label: "Leave guild", icon: faSignOutAlt, action: () => onLeaveGuild(), displayRed: true }

        ]
        return (
            <Dropdown open={dropdownOpen} setOpen={setDropdownOpen}>
                <div className="flex flex-col space-y-1">
                    {dropdownKeys.map((value, index) => {
                        const isDivider = !value.label
                        if (isDivider) return <div className="w-full h-px bg-brand-primary" />
                        return (
                            <div key={index} onClick={value.action} className={`${value.displayRed ? "text-red-500" : "text-content-secondary"} flex items-center w-full p-2 hover:bg-brand-secondary hover:bg-opacity-25 rounded-md`}>
                                <FontAwesomeIcon icon={value.icon} className="mr-2" />
                                {value.label}
                            </div>
                        )
                    })}
                </div>
            </Dropdown>
        )
    }
    return (
        <div className="relative h-12 w-60 cursor-pointer">
            <div onClick={() => setDropdownOpen(!dropdownOpen)} className="h-12 w-full px-4 py-3 bg-brand-secondary justify-between flex items-center border-b border-b-brand-dark">
                <div className="text-content-primary">test</div>
                <FontAwesomeIcon icon={dropdownOpen ? faChevronUp : faChevronDown} size="sm" className="text-content-secondary duration-300 transition-all ease-in-out" />
            </div>
            <GuildDropdown />
        </div>
    )
}