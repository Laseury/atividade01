
//Coloque isso no terminal: npm install --save bootstrap-4-react
import React, { useState } from 'react'
import { Form, Button, Row, Col } from 'bootstrap-4-react';
import { db } from '../../components/services/firebaseConnection';
import {addDoc, collection, getDocs} from 'firebase/firestore'

const MyClient = () => {
  
  const [nome, setNome] = useState()
  const [sobrenome, setSobrenome] = useState()
  const [idade, setIdade] = useState()
  const [cpf, setCPF] = useState()

  async function registerCliente(e) {
    e.preventDefault()
    
    try {
      const docRef = await addDoc(collection(db,"corpcapsula"),{
        nome:nome,
        sobrenome:sobrenome,
        idade:idade,
        cpf:cpf,
  
      })

      setNome('')
      setCPF('')
      setIdade('')
      setSobrenome('')

      alert('Salvo no banco de dados')

    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div className='container'>
      
      <form onSubmit={registerCliente}>
        <Form.Group>
          <Row>
            <Col col="sm-6">
            <label>Nome</label>
          <Form.Input type="text" placeholder="Digite seu nome" value ={nome} onChange={(e)=>setNome(e.target.value)} />
          <Form.Text text="muted">Seu nome é legal</Form.Text>
            </Col>
          </Row>
        </Form.Group>

        <Form.Group>
          <Row>
            <Col col="sm-6">
            <label>Sobrenome</label>
          <Form.Input type="text" placeholder="Digite seu sobrenome" value ={sobrenome} onChange={(e)=>setSobrenome(e.target.value)} />
          <Form.Text text="muted">Seu sobrenome é legal</Form.Text>
            </Col>
          </Row>
        </Form.Group>

        <Form.Group>
          <Row>
            <Col col="sm-6">
            <label>Idade</label>
          <Form.Input type="date" placeholder="Digite sua idade" value ={idade} onChange={(e)=>setIdade(e.target.value)} />
          <Form.Text text="muted">Não minta sua idade</Form.Text>
            </Col>
          </Row>
        </Form.Group>

        <Form.Group>
          <Row>
            <Col col="sm-6">
            <label>CPF</label>
          <Form.Input type="text" placeholder="Digite seu cpf" value ={cpf} onChange={(e)=>setCPF(e.target.value)}/>
          <Form.Text text="muted">Não iremos divulgar seu cpf para ninguém</Form.Text>
            </Col>
          </Row>
        </Form.Group>
        
        <Form.Group>

          <Form.Check>
            <Form.CheckInput type="checkbox" id="exampleCheck1" />
            <Form.CheckLabel htmlFor="exampleCheck1">Check me out</Form.CheckLabel>
          </Form.Check>
        </Form.Group>
        <Button primary type="submit">Submit</Button>
      </form>
     
    </div>
  )
}

export default MyClient