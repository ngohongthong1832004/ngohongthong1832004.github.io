import { Form, Col, Row } from 'react-bootstrap'
import { useRef, useEffect } from 'react'


import './login.css'



const Login:React.FC = () => {

    const emailRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        emailRef.current?.focus()  
    }, [])

    return (
        <div className='modalCustom'>
            <Form>
                <h2 className='mb-4'>LOGIN</h2>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label column sm="2">
                    Email
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control ref= {emailRef} type="email" placeholder="email" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                    Password
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control type="password" placeholder="Password" />
                    </Col>
                </Form.Group>
            </Form>
        </div>
    )
}


export default Login