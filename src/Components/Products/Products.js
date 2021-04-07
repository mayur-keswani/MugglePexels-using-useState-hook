import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import {v4} from 'uuid'
import './Products.css'

import Product from '../Product/Product'

const Products = ({addInLocalStorage,searchedProduct}) => {

	const [products,setProducts]=useState([]);
	
	const fetchProducts=async(CancelToken)=>{
			
		const {data}=await axios.get(`https://api.unsplash.com/photos/random?count=20&query=${searchedProduct}`,{
								cancelToken:CancelToken.token,
								headers:{
									Authorization: 	`Client-ID ${process.env.REACT_APP_UNSPLASH_API_KEY}`
								}
							})

		const results=data;
		
		const updatedPhotos=results.map(photo=> {
			return{
					id:v4(),
					small_image:photo.urls.small,
					medium_image:photo.urls.small,
					picture_description:photo.alt_description,
					artist:photo.user.first_name + " " + photo.user.last_name
				}
		})
		setProducts(updatedPhotos);
	};

	useEffect(() => {
		let CancelToken=axios.CancelToken.source();
		fetchProducts(CancelToken);
		return () => {
			CancelToken.cancel(`Previous Request Cancelled${searchedProduct}]`) // <-- 3rd step
		  }
	},[searchedProduct])

	
	let content = products.map(product=>
				<Product 
					key={product.id} 
					productDetail={product} 
					addInLocalStorage={(item,action)=>addInLocalStorage(item,action)}/>
			)
	return(
		<Fragment>
		 <div className="container">
			{content}
		 </div>
		</Fragment>
	)
}


export default Products
