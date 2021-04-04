import React from 'react'
import {Card ,Button } from 'reactstrap'
import {RiAddCircleFill} from 'react-icons/ri'
import './Product.css'

const Product = ({productDetail , addInLocalStorage}) => {
	return(
		
		 <Card className="box" >
		 		<Card body className="p-0">
        			<img className="card-img" width="100%"  src={productDetail.small_image} alt="prod_img" />
					<div className="card-footer" onClick={()=>addInLocalStorage(productDetail)}>
						<Button id="icon-add" onClick={()=>addInLocalStorage(productDetail)}><RiAddCircleFill/></Button>
					</div>
		        </Card>
	   	</Card>
	  
	)

}


export default Product;