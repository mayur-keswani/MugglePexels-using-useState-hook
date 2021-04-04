import React, { Fragment , useState } from 'react'
import { Link } from 'react-router-dom';

import { Button, Modal, ModalBody, Container } from 'reactstrap';
import { Row, Col , Form, FormGroup , Input, } from 'reactstrap';
import Logo from '../UI/Logo/Logo';
import './Login.css'

const Login = () =>{
	const [modal, setModal] = useState(true);
  	const toggle = () => setModal(!modal);
	return(
	 <Fragment>
	  <div className="text-white" style={{zIndex:"200",position:"absolute",top:"0",right:"0"}} >
	  	New to MugglePexel ? 
		  <Link to="/signup">
		  	<Button size="lg" className="text-dark" style={{backgroundColor:"#f1f1f1"}}>Join</Button>
		  </Link>
	  </div>
	  <Container id="login-section" style={{zIndex:"50"}}>
		<div toggle={toggle}><Logo height="100px"/></div>
     	<Modal  isOpen={modal} 
		 			centered={true}
			  		modalTransition={{ timeout: 500 }} 
					backdropTransition={{ timeout: 700 }}
        			toggle={toggle}
					trapFocus={true}
					zIndex="100">

       		 <ModalBody>
				<Col lg={12} sm={12}>
				  <Form>

				  	<Row>
						<Col sm={12} className="h3 text-weight-bolder text-center">Welcome back to MugglePexels</Col>
						<Col sm={12} className="p-3 text-center">
							<Button size="lg" style={{backgroundColor:"#4267B2",width:"100%"}}>Login via Facebook</Button>
						</Col>
						<Col sm={12} className="p-3 text-center">
							<Button size="lg"  style={{background:"linear-gradient(-120DEG,#4285F4,#34A853,#FBBC05,#EA4335)",width:"100%"}}>Login via Google</Button>
						</Col>
					</Row>

					<hr></hr>
					<Row>
						<Col className="h4 text-muted text-center" sm={12}><i>OR</i></Col>
					</Row>
					<hr></hr>

      				<FormGroup row>
       			     	<Col sm={12}>
          			   		<Input type="email" name="email" id="exampleEmail" placeholder="Email" />
        			 	</Col>
     				</FormGroup>
      				<FormGroup row>
        			 	<Col sm={12}>
          			   		<Input type="password" name="password" 
								 id="examplePassword" placeholder="Password " />
        			 	</Col>
					</FormGroup>
					<FormGroup row>
        			 	<Col sm={12}>
						 <Button size="lg" className="w-100" color="info">Login</Button>
        			 	</Col>
					</FormGroup>
	   			  </Form>
				</Col>
 

        	 </ModalBody>
        	{/* <ModalFooter>
          		<Button color="primary" onClick={toggle}>Do Something</Button>{' '}
        	</ModalFooter> */}
      	</Modal>
	  </Container>
	  </Fragment>
	)
}

export default Login