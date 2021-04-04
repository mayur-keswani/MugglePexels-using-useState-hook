import React, { Fragment , useState } from 'react'
import { Link } from 'react-router-dom';
import {BsSearch} from 'react-icons/bs'
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	Form,
	FormGroup  ,
	InputGroup,
	Input ,
	InputGroupAddon,
	Button
  } from 'reactstrap';
  
const Navigation = ({setCriterion}) =>{
	const [isOpen, setIsOpen] = useState(false);
	const [searchInput,setSearchInput] = useState("")
	const toggle = () => setIsOpen(!isOpen);
	return(
		<Fragment>
			<Navbar  dark expand="md" className="m-0 p-0 fixed-top bg-dark d-flex align-items-center" 
				style={{zIndex:"-1",boxSizing:"border-box"}}>
        		<NavbarBrand href="/"  className="text-white mx-2 p-0">MugglePexels</NavbarBrand>
        		<NavbarToggler onClick={toggle} className="m-0 p-0"/>
        		<Collapse isOpen={isOpen} navbar>
				<Form className="m-0 p-0 d-flex align-items-center" 
					 style={{width:"80%",boxSizing:"border-box"}}>
						<FormGroup style={{width:"100%"}}>
							<InputGroup  size="md"  >
								<Input type="text"
									value={searchInput} onChange={(e)=>setSearchInput(e.target.value)}></Input>
								<InputGroupAddon addonType="prepend">
									<Button  color="light" onClick={()=>setCriterion(searchInput)}>
										<BsSearch color="light"/>
									</Button>
								</InputGroupAddon>
							</InputGroup>
						</FormGroup>
				</Form>
          			<Nav className="ml-auto text-white" navbar>
            			<NavItem >
            		  		<NavLink tag={Link} to="/signup" className="text-white">Signup</NavLink>
           				</NavItem>
           				<NavItem >
             		  		<NavLink tag={Link} to="/signin" className="text-white">Signin</NavLink>
            			</NavItem>
         			</Nav>
    		    </Collapse>
      		</Navbar>
		</Fragment>
	)
}

export default Navigation