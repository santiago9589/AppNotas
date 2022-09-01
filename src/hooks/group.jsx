import { useState} from "react"

export const useGroup = () => {

    const [group, setGroup] = useState({
        name: "",
        members: "",
    })

    const { name, members } = group

    const handleChange = (e) => {
        e.preventDefault()
        let { name, value } = e.target
        setGroup({ ...group, [name]: value })
    }

    return {name,members,handleChange,group}
}