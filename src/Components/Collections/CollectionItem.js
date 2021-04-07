import React , {Fragment} from 'react'
import { Button , Row  } from 'reactstrap'
// import {IoIosRemoveCircle} from 'react-icons/io'

const CollectionItem = ({collection_items,addInCollection}) =>{

	let content=null
	console.log(collection_items.items)

	if(typeof collection_items.items.length !== typeof undefined){

		content=(collection_items.items.map(prod=>{
				if(prod)
					return (
							<img src={prod.small_image}
								 className="img-thumbnail img-fluid p-2"
								 alt={prod.id} 
								 width="220px" 
								 height="300px"/>
						
					)
				else	
					return null
			}))
	}else{
		content=(<h2>No items in this collection</h2>)
	}
	return(
		<Fragment>
		<Row>	 
		  <div>
		 	<label>{collection_items.name}</label> 
			 <Button color="info" onClick={addInCollection} className="btn-add p-2" >Add Here</Button>
			 <span className="triangle-topright"></span>
		  </div>
		  <div className="collection-row" >
		  	
			{ 
				content
			}
		  </div>
		</Row>
		</Fragment>
	)
}

export default CollectionItem