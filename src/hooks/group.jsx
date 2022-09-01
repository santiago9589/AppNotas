import { useState} from "react"

export const useGroup = (nameInit,membersInit) => {

    const [group, setGroup] = useState({
        name: nameInit || "",
        members: membersInit || "",
    })

    const { name, members } = group

    const handleChange = (e) => {
        e.preventDefault()
        let { name, value } = e.target
        setGroup({ ...group, [name]: value })
    }

    return {name,members,handleChange,group}
}