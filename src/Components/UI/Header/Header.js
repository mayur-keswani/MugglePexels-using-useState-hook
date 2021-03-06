import React, { useState , useEffect} from 'react'
import Navigation from '../Navigation/Navigation'

import './Header.css'
import {BsSearch} from 'react-icons/bs'
import { Form , Col ,FormGroup  ,InputGroup, Input ,InputGroupAddon, Button, Row } from 'reactstrap'




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
		<div id="header" style={{backgroundImage:`url("https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")`}}>

			<Navigation/>

			<div className="jumbotron" style={{backgroundColor:"transparent"}}>
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
			</div>
		   

			
	
		</div>
	)
}

export default Header