import Table from 'react-bootstrap/Table';
import "./Home.css"

import CelularList from './CelularList';

import { useEffect, useState } from 'react';
import axios from "axios"


const Home = () => {

    const [celulares, setCelulares] = useState([])

    const [error, setError] = useState(null)

    const getCelulares = async () => {

        try {

            const res = await axios.get("http://localhost:8080/listar")
            
            setCelulares(res.data)
            
            
        } catch (error) {

            setError(error.message)
            
        }

    }



    useEffect(() => {

        getCelulares()

    }, [])

return (

    <div className="container">

        {error && <p>{error}</p>}

<Table striped bordered hover>
      <thead>
        <tr>
          <th className="p-4">#</th>
          <th className="p-4">Marca</th>
          <th className="p-4">Modelo</th>
          <th className="p-4">Preço</th>
          <th className="p-4">Cor</th>
          <th className="p-4">Opções</th>
        </tr>
      </thead>
      <tbody>
        
        {celulares.map((celular, i) => (

        <CelularList key={i} id={celular.id} marca={celular.marca} modelo={celular.modelo} preco={celular.preco} cor={celular.cor} />

        ))}
        
      </tbody>
    </Table>
       
    </div>

)

}

export default Home