import {Row, Form, Col} from 'react-bootstrap'

import './auth.css'


const Auth:React.FC = ()  => {
    return (
        <div>
            <Form>
                <h2 className='titleLogin mb-4'>LOGIN</h2>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label column sm="2">
                    Email
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control type="email" placeholder="email" />
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


export default Auth