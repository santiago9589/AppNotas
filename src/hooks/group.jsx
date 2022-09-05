import { useState} from "react"

export const useGroup = (nameInit,membersInit) => {

    const [group, setGroup] = useState({
        name: nameInit || "",
        members: membersInit || 0,
    })

    const { name, members } = group

    const handleChange = (e) => {
        e.preventDefault()
        let { name, value } = e.target
        setGroup({ ...group, [name]: value })
    }

    const handleMembers= (e) => {
        e.preventDefault()
        setGroup({ ...group, members: members+1})
    }

    return {name,members,handleChange,group,handleMembers}
}