import { Link } from "react-router-dom"
import axios from "axios";
import Button from 'react-bootstrap/Button';
import { useState } from "react";

const CelularList = ({id, marca, modelo, preco, cor}) => {
  

    const handleDelete = async (id) => {

      try {

        await axios.delete("http://localhost:8080/deletar/" + id)

        window.location.reload()
        
      } catch (error) {
        console.log(error)
      }

    }

  return (
    <tr>
          <td className="p-4">{id}</td>
          <td className="p-4">{marca}</td>
          <td className="p-4">{modelo}</td>
          <td className="p-4">{preco}</td>
          <td className="p-4">{cor}</td>
          <td className="p-4"> <Link to={`/editar/${id}`} className="btn btn-success">Editar</Link> <Button onClick={() => handleDelete(id)} variant="danger">Deletar</Button></td>
        </tr>
  )
}

export default CelularList
