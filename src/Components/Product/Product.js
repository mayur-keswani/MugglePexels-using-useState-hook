import React from 'react'
import {Card ,Button } from 'reactstrap'
import {FaExpandAlt} from 'react-icons/fa'
import {MdCollections} from 'react-icons/md'
import './Product.css'

const Product = ({productDetail , addInLocalStorage}) => {
	return(
		
		 <Card className="box" >
		 		<Card body className="p-0">
        			<img className="card-img" width="100%"  src={productDetail.small_image} alt="prod_img" />
					<div className="card-footer" >
						<Button id="icon-expand" onClick={()=>addInLocalStorage(productDetail,"show-image-detail")}>
						 	View-In-Detail  &nbsp; &nbsp; <FaExpandAlt/>
						</Button>

						<Button id="icon-add" onClick={()=>addInLocalStorage(productDetail,"add-into-collection")}>
						 	Add-To-Collection  &nbsp; &nbsp; <MdCollections/>
						</Button>
					</div>
		        </Card>
	   	</Card>
	  
	)

}


export default Product;