
//Coloque isso no terminal: npm install --save bootstrap-4-react
 
import React, { useState } from 'react'
import { Form, Button, Row, Col } from 'bootstrap-4-react';
import { db } from '../../components/services/firebaseConnection';
import {addDoc, collection, getDocs} from 'firebase/firestore'

const MyUser = () => {

  const [nome, setNome] = useState()
  const [idade, setIdade] = useState()
  const [cpf, setCPF] = useState()
  const [email, setEmail] = useState()
  const [senha, setSenha] = useState()

  async function registerUser(e) {
    e.preventDefault()
    
    try {
      const docRef = await addDoc(collection(db,"corpcapsula"),{
        nome:nome,
        idade:idade,
        cpf:cpf,
        email:email,
        senha:senha
      })

      setNome('')
      setCPF('')
      setIdade('')
      setEmail('')
      setSenha('')
      alert('Salvo no banco de dados')

    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div className='container'>
      
      <form onSubmit={registerUser}>
        <Form.Group>
          <Row>
            <Col col="sm-6">
            <label>Nome</label>
          <Form.Input type="text" placeholder="Digite seu nome" value ={nome} onChange={(e)=>setNome(e.target.value)} />
          <Form.Text text="muted">Digite seu nome completo</Form.Text>
            </Col>
          </Row>
        </Form.Group>

        <Form.Group>
          <Row>
            <Col col="sm-6">
            <label>Idade</label>
          <Form.Input type="date" placeholder="Digite sua idade" value ={idade} onChange={(e)=>setIdade(e.target.value)} />
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
          <Row>
            <Col col="sm-6">
            <label htmlFor="exampleInputEmail1">Digite seu Email</label>
          <Form.Input type="email" id="exampleInputEmail1" placeholder="Digite seu email" value ={email} onChange={(e)=>setEmail(e.target.value)} />
          <Form.Text text="muted">Não iremos divulgar seu Email para ninguém</Form.Text>
            </Col>
          </Row>
        </Form.Group>

        <Form.Group>
        <Row>
            <Col col="sm-6">
          <label htmlFor="exampleInputPassword1">Digite sua senha</label>
          <Form.Input type="password" id="exampleInputPassword1" placeholder="Senha" value ={senha} onChange={(e)=>setSenha(e.target.value)} />
          <Form.Text text="muted">Sua senha deve conter letra maiuscula, caracteres especial e numeros</Form.Text>
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

export default MyUser