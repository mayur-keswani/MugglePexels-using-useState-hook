import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import {v4} from 'uuid'
import './Products.css'

import Product from '../Product/Product'

const Products = ({addInLocalStorage,searchedProduct}) => {

	const [products,setProducts]=useState([]);

	let cancelToken;
	const fetchProducts=async()=>{

		if(typeof cancelToken !== typeof undefined){
			cancelToken.cancel("Cancel previous token")
		}
		cancelToken=axios.CancelToken.source();
		const {data}=await axios.get(`https://api.unsplash.com/photos/random?count=25&query=${searchedProduct}`,{
								cancelToken:cancelToken.token,
								headers:{
									Authorization: 	`Client-ID ${process.env.REACT_APP_UNSPLASH_API_KEY}`
								}
							})
		// const {photos}=data;
		const results=data;
		// console.log(results)
		const updatedPhotos=results.map(photo=> {
			return{
					id:v4(),
					small_image:photo.urls.small,
					medium_image:photo.urls.small,
					picture_description:photo.alt_description,
				}
		})
		setProducts(updatedPhotos);
	};

	useEffect(() => {

		fetchProducts();
	
	},[searchedProduct])

	
	let content = products.map(product=>
				<Product key={product.id} productDetail={product} addInLocalStorage={(prod)=>addInLocalStorage(prod)}/>
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
