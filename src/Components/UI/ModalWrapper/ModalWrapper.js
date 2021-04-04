import React, { Fragment } from 'react'
import { Modal, ModalBody } from 'reactstrap';
//import './ModalWrapper.css'

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
					zIndex="250" className="modal-wrapper">
				<ModalBody>
					{props.children}
				</ModalBody>			
			</Modal>

		</Fragment>
	)
}

export default ModalWrapper