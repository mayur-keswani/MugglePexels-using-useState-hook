import React, { useState , useEffect} from 'react'
import './Header.css'
import Logo from '../Logo/Logo'

import {BsSearch} from 'react-icons/bs'
import {MdCollectionsBookmark} from 'react-icons/md'
import {Container , Form , Col ,FormGroup  ,InputGroup, Input ,InputGroupAddon, Button, Row } from 'reactstrap'
import { Link } from 'react-router-dom';



const Header = ({setCriterion,toggleModal}) =>{
	const [searchInput,setSearchInput] = useState("")
	//const [bgPicture,setBGPicture]= useState("")

	// const fetchPhoto = async() =>{
	// 	const {data}=await axios.get(`https://api.unsplash.com/photos/random?count=0&query=nature`,{
	// 		headers:{
	// 			Authorization: 	`Client-ID ${api_key}`
	// 		}
	// 	})
	// 	const photo=data[0]
	// 	setBGPicture(photo.urls.raw)
	// }
	
	// useEffect(()=>{
	// 	fetchPhoto();
	// },[])

	useEffect(()=>{
		setCriterion(searchInput)
	},[searchInput])
	
	
	return(
		<Container fluid id="header" className="m-0 p-0"  style={{backgroundImage:`url("https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")`}}>
		    <Row className="company-logo w-100 p-0 m-0 ">
				<Col lg={10} md={10} sm={10} xs={10} className="m-0 d-flex flex-row">
					<div><Logo height="50px"/></div>
					<div className="companyName font-weight-bold">MugglePexels</div>
				</Col>
				<Col lg={2} md={2} sm={2} xs={2} className="p-0 m-0  d-flex justify-content-around text-center">
					<i className="m-1 bg-dark px-2 font-weight-bold"
					 	onClick={toggleModal}><MdCollectionsBookmark/></i>
					<div><Link to="/signup"><Button color="info" size="lg">Join</Button></Link></div>
				</Col>
			</Row>

			<Row className="search-box">
				<Col lg={5} md={12} sm={10}  className="p-auto">
					<p style={{fontSize:"1.5rem"}}>The best free stock photos & videos shared by talented creators.</p>
					<Form className="m-0 p-3">
						<FormGroup>
							<InputGroup  size="lg" >
								<Input type="text"
									value={searchInput} onChange={(e)=>setSearchInput(e.target.value)}></Input>
								<InputGroupAddon addonType="prepend">
									<Button  color="light" onClick={()=>setCriterion(searchInput)}>
										<BsSearch color="light"/>
									</Button>
								</InputGroupAddon>
							</InputGroup>
							<span className="text-muted">Suggested:car  washing machine  appliances  refrigerator  male  kitchen appliances  more</span>
						</FormGroup>
					</Form>
				</Col>
			</Row>
				
	
		</Container>
	)
}

export default Header