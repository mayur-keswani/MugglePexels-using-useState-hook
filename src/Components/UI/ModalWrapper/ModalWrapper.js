import React, { Fragment } from 'react'
import { Modal,ModalHeader , ModalBody } from 'reactstrap';



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
				<ModalHeader className="p-2" toggle={props.toggleModal}></ModalHeader>
				<ModalBody className="d-flex p-1 justify-content-center align-items-center flex-column">
					{props.children}
				</ModalBody>			
			</Modal>

		</Fragment>
	)
}

export default ModalWrapper