'use client'
import Dropdown from "@/components/dropdown/Dropdown";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function GuildInfoHeader() {
    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false)
    return (
        <div className="relative h-12 w-60 cursor-pointer">
            <div onClick={() => setDropdownOpen(!dropdownOpen)} className="h-12 w-full px-4 py-3 bg-brand-secondary justify-between flex items-center border-b border-b-brand-dark">
                <div className="text-content-primary">test</div>
                <FontAwesomeIcon icon={dropdownOpen ? faChevronUp : faChevronDown} size="sm" className="text-content-secondary duration-300 transition-all ease-in-out" />
            </div>
            <Dropdown open={dropdownOpen} setOpen={setDropdownOpen}>
                Das ist ein dropdown
            </Dropdown>
        </div>
    )
}