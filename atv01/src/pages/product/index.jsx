
//Coloque isso no terminal: npm install --save bootstrap-4-react
import React, { useState } from 'react'
import { Form, Button, Row, Col } from 'bootstrap-4-react';
import { db } from '../../components/services/firebaseConnection';
import {addDoc, collection, getDocs} from 'firebase/firestore'

const MyProduct = () => {


  const [nome, setNome] = useState()
  const [preco, setPreco] = useState()
  const [quantidade, setQuantidade] = useState()


  async function registerProduto(e) {
    e.preventDefault()
    
    try {
      const docRef = await addDoc(collection(db,"corpcapsula"),{
        nome:nome,
        preco:preco,
        quantidade:quantidade
      })

      setNome('')
     setPreco('')
     setQuantidade('')
      alert('Salvo no banco de dados')

    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div className='container'>
      
      <form onSubmit={registerProduto}>
        <Form.Group>
          <Row>
            <Col col="sm-6">
            <label>Nome</label>
          <Form.Input type="text" placeholder="Produto" value ={nome} onChange={(e)=>setNome(e.target.value)} />
          <Form.Text text="muted">Nome do produto</Form.Text>
            </Col>
          </Row>
        </Form.Group>

        <Form.Group>
          <Row>
            <Col col="sm-6">
            <label>Preço</label>
          <Form.Input type="text" placeholder="Digite o Preço" value ={preco} onChange={(e)=>setPreco(e.target.value)} />
          <Form.Text text="muted">Quantos cruzados custa? </Form.Text>
            </Col>
          </Row>
        </Form.Group>

        <Form.Group>
          <Row>
            <Col col="sm-6">
            <label>Quantidade</label>
          <Form.Input type="text" placeholder="Digite sua quantidade" value ={quantidade} onChange={(e)=>setQuantidade(e.target.value)}/>
          <Form.Text text="muted">Só isso? Coloca mais ai</Form.Text>
        
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

export default MyProduct