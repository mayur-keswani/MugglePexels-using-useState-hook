import React, { Fragment  } from 'react'
import {Button, Row , Col} from 'reactstrap'	
import CollectionItem from './CollectionItem.js'
import './Collection.css'
const Collection = ({collectionList,createCollection,addInCollection}) =>{

	let collectionRowItems;	
	if(Object.keys(collectionList).length>0){
		let collectionIDArray = Object.keys(collectionList)
		console.log(collectionIDArray)
		collectionRowItems=collectionIDArray.map((row,index)=> 
					<CollectionItem key={collectionIDArray[index]} 
							collection_items={ collectionList[collectionIDArray[index]] }
							addInCollection={()=>addInCollection(collectionIDArray[index])}/> )
	
	}else{
		collectionRowItems=(<p>You have no collection saved!</p>)
	}

	return(
		<Fragment>
			<div id="collection-section" className="p-0 m-0">
			 <Row>
				<Col sm={4} >
					<div className="collection-header p-1">
						<h4>Save to Collection</h4>
					</div>
				</Col>
				<Col sm={4} className="text-right offset-sm-4" >
					<Button color="success" onClick={createCollection}>Create New-Collection</Button>
				</Col>
			 </Row>
			 <Row>
				<Col>
				 <div className="collection-body p-5">			  	
					 {collectionRowItems}	
				 </div>
				</Col>
			 </Row>	
				
			</div>
			
		</Fragment>
	)
}

export default Collection