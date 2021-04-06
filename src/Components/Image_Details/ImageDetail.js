import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react'
import { Card , CardBody , CardImg , CardTitle , CardText , Button, Row , Col} from 'reactstrap'


const ImageDetail = () =>{
	const [imageDetails,setImageDetails]=useState(null)
	useEffect(()=>{
		const item=JSON.parse(localStorage.getItem("item"))
		setImageDetails(item)
	},[])

	var downloadImage = async (uri)=>{

			const {data}=await axios.get(uri,{
				responseType:"blob"
			})
			console.log(data)
			const url=window.URL.createObjectURL(new Blob([data]))
			const link=document.createElement('a')
			link.href=url
			link.setAttribute('download','image.jpeg');
			document.body.appendChild(link)
			link.click()
	  };
	return(
		<Fragment>
			
			{
				
				(imageDetails)?
				<>
				<Row className="w-100 m-0 p-0">
					<Col lg={4} className="offset-lg-8 text-center ">
					<div id="btn-download" className="float-right">
					 <Button outline color="light" size="md"
					 	className="text-dark" 
						onClick={()=>
						downloadImage(imageDetails.small_image)}>
							Download
			  	 	 </Button>
					</div>
					</Col>
				</Row>
			
				<Card  className="card-imgDetail" >
        			<CardImg top width="80%"  className="img-thumbnail img-fluid"  src={imageDetails.small_image} 
						alt="Card-image cap" />
        			<CardBody>
          				<CardTitle className="h5 text-muted">{`ID: ${imageDetails.id}`}</CardTitle>
          				<CardText>{imageDetails.picture_description}</CardText>
          				<CardText>
            				<small className="text-muted">Image By: {imageDetails.artist} (unsplash.com)</small>
          				</CardText>
       				</CardBody>
     			</Card>
				
				 </>:<Card>
					 <CardBody>Sorry!, No post-selected :(</CardBody>
				 </Card>
				
			}
			
		</Fragment>
	)
}

export default ImageDetail