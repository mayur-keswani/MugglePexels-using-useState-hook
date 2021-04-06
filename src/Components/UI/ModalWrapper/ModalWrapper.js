import React, { Fragment } from 'react'
import { Modal, ModalBody } from 'reactstrap';


const ModalWrapper = (props) =>{
	return(
		<Fragment>
		  
			<Modal  isOpen={props.show} 
		 			centered={true}
					size="lg"
			  		modalTransition={{ timeout: 500 }} 
					backdropTransition={{ timeout: 700 }}
        			toggle={props.toggleModal}
					trapFocus={true}
					zIndex="250"
					onClosed={()=>props.closeImgDetails(false)}>
				<ModalBody className="d-flex justify-content-center">
					{props.children}
				</ModalBody>			
			</Modal>

		</Fragment>
	)
}

export default ModalWrapper