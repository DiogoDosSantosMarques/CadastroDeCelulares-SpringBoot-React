import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from "axios"

import "./Cadastrar.css"


const Cadastrar = () => {


        const [marca, setMarca] = useState("")
        const [modelo, setModelo] = useState("")
        const [preco, setPreco] = useState("")
        const [cor, setCor] = useState("")
        const [error, setError] = useState(false)

        const navigate = useNavigate()


        const cadastrarCelular = async (e) => {

            e.preventDefault()

            if(!marca || !modelo || !preco || !cor){
                setError(true)
                return;
            }


            try {

                const res = await axios.post("http://localhost:8080/cadastrar",{
                    marca,
                    modelo,
                    preco,
                    cor
                })
                console.log(res)
                navigate("/")
                
                
            } catch (error) {

                setError(true)

                console.error(error)
                
            }

        }


    return(

        <div className="container">

<Form onSubmit={cadastrarCelular} className='form'>
      <Form.Group className="mb-3">
        <Form.Label>Marca</Form.Label>
        <Form.Control type="text" placeholder="marca do celular" onChange={(e) => setMarca(e.target.value)} />
       
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Modelo</Form.Label>
        <Form.Control type="text" placeholder="modelo do celular" onChange={(e) => setModelo(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Preço</Form.Label>
        <Form.Control type="number" placeholder="preço do celular" onChange={(e) => setPreco(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Cor</Form.Label>
        <Form.Control type="text" placeholder="modelo do celular" onChange={(e) => setCor(e.target.value)} />
      </Form.Group>

      {error && <p className="text-danger">Todos os campos são obrigatórios.</p>}
      <Button variant="primary" type="submit">
        Cadastrar Celular
      </Button>
    </Form>
                
        </div>

    )
}

export default Cadastrar