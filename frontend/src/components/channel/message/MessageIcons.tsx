import { faCopy, faEdit, faListDots, faPenAlt, faTrashAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"

export default function MessageIcons() {

    const onMessageDelete = () => {
        alert("test")
    }

    const iconValues = [
        { icon: faEdit, tooltip: "Delete message", action: () => onMessageDelete() },
        { icon: faCopy, tooltip: "Delete message", action: () => onMessageDelete() },
        { icon: faListDots, tooltip: "Delete message", action: () => onMessageDelete() },
        { icon: faTrashAlt, tooltip: "Delete message", action: () => onMessageDelete(), color: "text-red-500" }
    ]

    return (
        <div className="group-hover:flex hidden items-center w-max h-max space-x-1 p-1 bg-brand-secondary rounded-md absolute -top-5 right-0 ml-5">
            {iconValues.map((value, index) => {
                return (
                    <div onClick={value.action} key={index} className={`p-1 hover:bg-brand-primary flex items-center justify-center ${value.color ?? "text-content-secondary"}`}>
                        <FontAwesomeIcon icon={value.icon} />
                    </div>
                )
            })}
        </div>
    )
}