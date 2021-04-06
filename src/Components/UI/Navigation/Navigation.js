import React, { Fragment , useState , useContext} from 'react'

import Logo from '../Logo/Logo'
import UserContext from '../../../Context/UserContext'
import { Link } from 'react-router-dom';
// import {BsSearch} from 'react-icons/bs'
// import {MdCollectionsBookmark} from 'react-icons/md'
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	Button,
	NavbarText
  } from 'reactstrap';
  
const Navigation = () =>{
	const [isOpen, setIsOpen] = useState(false);
	// const [searchInput,setSearchInput] = useState("")
	const context=useContext(UserContext)

	const toggle = () => setIsOpen(!isOpen);

	return(
		<Fragment>
			<Navbar dark className="m-0 p-0" expand="sm">
			<div><Logo height="50px"/></div>
			<NavbarBrand href="/" className="companyName font-weight-bold">MugglePexels</NavbarBrand>
			<NavbarToggler onClick={toggle}  />

			<Collapse 
				isOpen={isOpen} 
				className="collapse-navbar" navbar  
				style={{backgroundColor:(isOpen && window.innerWidth<576) ?"#242B2E":"transparent"}}>
			<NavbarText>{context.user?`Hello ${context.user.email}`:"Hello Muggle !!"}</NavbarText>
				<Nav className="ml-auto p-3 auto text-white" navbar>
					{
						context.user?
							(<NavItem >
             		  			<NavLink tag={Link} to="/" className="text-white"
								   onClick={()=>{
										   localStorage.removeItem("user");
										   context.setUser(null)
									   }}>
							   		{isOpen?"Logout":
									   <Button color="info" size="lg">
									   	Logout
									   </Button>}
								</NavLink>
            				</NavItem>):
							(<NavItem >
            		  			<NavLink tag={Link} to="/signup" className="text-white">
							  		{isOpen?"Join":<Button color="info" size="lg">Join</Button>}		
								</NavLink>
           					</NavItem>)

					}		
         		</Nav>
			</Collapse>
			</Navbar>
		</Fragment>
	)
}

export default Navigation