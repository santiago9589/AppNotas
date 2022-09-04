import React, { useContext } from 'react'
import { ContextApp } from '../../context/context';
import { useNavigate } from "react-router-dom";
import Group from '../pure/Group';

const ListGroup = () => {

  const { data } = useContext(ContextApp)
  const navigate = useNavigate()

  return (
    data.map((element,index) => {
      return (
        <Group key={index} group={element} navigate={navigate}/>
      )
    })
  )
}


export default ListGroup;