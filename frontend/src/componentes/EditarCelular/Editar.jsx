import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import axios from "axios"

import { useState, useEffect } from "react"

import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"

const Editar = () => {


        const [marca, setMarca] = useState("")
        const [modelo, setModelo] = useState("")
        const [preco, setPreco] = useState("")
        const [cor, setCor] = useState("")
        const [error, setError] = useState(false)

        const {id} = useParams()

        const navigate = useNavigate()


        const getById = async () => {

            try {

                const res = await axios.get("http://localhost:8080/listar/" + id)

                setMarca(res.data.marca)
                setModelo(res.data.modelo)
                setPreco(res.data.preco)
                setCor(res.data.cor)
                
            } catch (error) {

                console.log(error)
                
            }

        }


        useEffect(() => {

            getById()

        }, [id])


        const handleAtualizar = async (e) => {

            e.preventDefault()

            try {

                const res = await axios.put("http://localhost:8080/atualizar", {id, marca, modelo, preco, cor})
                console.log(res)

                navigate("/")


            } catch (error) {

                console.log(error)
                
            }

        }


        const handleCancel = () => {
            navigate("/")
        }


  return (
    <div className="container">

<Form className='form' onSubmit={handleAtualizar}>
      <Form.Group className="mb-3">
        <Form.Label>Marca</Form.Label>
        <Form.Control type="text" placeholder="marca do celular" value={marca} onChange={(e) => setMarca(e.target.value)} />
       
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Modelo</Form.Label>
        <Form.Control type="text" placeholder="modelo do celular" value={modelo} onChange={(e) => setModelo(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Preço</Form.Label>
        <Form.Control type="number" placeholder="preço do celular" value={preco} onChange={(e) => setPreco(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Cor</Form.Label>
        <Form.Control type="text" placeholder="modelo do celular" value={cor} onChange={(e) => setCor(e.target.value)} />
      </Form.Group>

      {error && <p className="text-danger">Todos os campos são obrigatórios.</p>}
      <Button variant="primary" type="submit">
        Atualizar Celular
      </Button>
       
      <Button variant="primary" onClick={handleCancel} >
        Cancelar
      </Button>
    </Form>
      
    </div>
  )
}

export default Editar
