import { useState,useEffect } from "react"

export const useList = (members) => {

    const [list, setList] = useState({})

    const change = (number) => {
        setList({})
        for (let i = 0; i < parseInt(number); i++) {
            setList({ ...list, [number]: "" })
        }
    }

    useEffect(() => {
        change(members)
    }, [members])

    const handleChangeNames = (e) => {
        e.preventDefault()
        if(!e.target.value) return
        let { name, value } = e.target
        setList({ ...list, [name]: value })
    }

    let names = Object.values(list)

    return {names,handleChangeNames}
}