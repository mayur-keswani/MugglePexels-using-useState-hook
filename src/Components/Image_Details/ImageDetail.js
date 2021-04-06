
import React, { Fragment, useEffect, useState } from 'react'
import { Card , CardBody , CardImg , CardTitle , CardText} from 'reactstrap'
const ImageDetail = () =>{
	const [imageDetails,setImageDetails]=useState(null)
	useEffect(()=>{
		const item=JSON.parse(localStorage.getItem("item"))
		setImageDetails(item)
	},
	[])
	return(
		<Fragment>
			{
				(imageDetails)?<Card  className="card-imgDetail" style={{width:"50%"}}>
        			<CardImg top width="80%"  className="img-thumbnail"  src={imageDetails.small_image} 
						alt="Card image cap" />
        			<CardBody>
          				<CardTitle className="h5 text-muted">{`ID: ${imageDetails.id}`}</CardTitle>
          				<CardText>{imageDetails.picture_description}</CardText>
          				<CardText>
            				<small className="text-muted">Image By: {imageDetails.artist} (unsplash.com)</small>
          				</CardText>
       				</CardBody>
     			</Card>:<Card>
					 <CardBody>Sorry!, No post-selected :(</CardBody>
				 </Card>
			}
			
		</Fragment>
	)
}

export default ImageDetail