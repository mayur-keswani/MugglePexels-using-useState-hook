import React, { Fragment, useEffect, useState } from 'react' 



// css/styling components
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// react functional component
import Products from './Components/Products/Products';
import Header from './Components/UI/Header/Header';
import Collection from './Components/Collections/Collection';
import Signup from './Pages/Signup/Signup';
import Login from './Pages/Login/Login';
import ModalWrapper from './Components/UI/ModalWrapper/ModalWrapper';
import ImageDetail from './Components/Image_Details/ImageDetail';
// some dependencies
import { v4 } from 'uuid';
import UserContext from './Context/UserContext'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import firebase from 'firebase/app'
import 'firebase/auth'
import firebaseConfig from './Config/firebaseConfig'
firebase.initializeApp(firebaseConfig)


function App() {
  // state hook
  const [user,setUser]=useState(null)
  const [collections,setCollections]=useState({});                         
  const [ criterion , setCriterion]=useState("products");
  const [modalIsOpen, setModalOpen] = useState(false);
  const [showImageDetail,setShowFullImage]=useState(false)
  useEffect(()=>{
    const localUser=localStorage.getItem("user")
    if(typeof localUser !== typeof undefined){
      setUser(JSON.parse(localUser))
    }
  },[])

  const toggleModal = () => setModalOpen(!modalIsOpen);

  const createCollection=()=>{
    // fetching items from localStorage
    const item=JSON.parse(localStorage.getItem("item"))
    localStorage.removeItem("item")
    //generating unique id from new-collection object
    let  newId=v4().toString();
    // Storing item into object
    let object;
    if(item){
       object={ name:"",items:[{...item}] }
    }else{
       object={ name:"",items:[]}
    }
    // Creating copy of prev. collections
    let collections_Copy=collections
    collections_Copy[newId]=object    
    setCollections({...collections_Copy}) 
  }



  const addInCollection=(id)=>{
    // getting item from local storage 
    const item=JSON.parse(localStorage.getItem("item"))
    localStorage.removeItem("item")
    
    // creating copy of collections
    const collections_Copy={...collections}
    const selected_collection={...collections_Copy[id]}

    // push new item into collections->items array
    selected_collection.items.push(item);
    collections_Copy[id]=selected_collection

    setCollections({...collections_Copy})
  }


  const addInLocalStorage=(item,action)=>{
    // adding item into localStorage for temporary
    localStorage.setItem("item",JSON.stringify(item))
      setModalOpen(true)
    if(action==="show-image-detail"){
      // console("Show full image ")
      setShowFullImage(true)

    }

    // setCollectionVisible(true);
  }


  return (
   <Fragment>

      <BrowserRouter>
          <ToastContainer/>
          <UserContext.Provider value={{user:user,setUser:setUser}}>

             

              <Switch>
                  <Route path="/signup" exact render={()=>
                    <>
                      <Signup/>
                    </>
                  }>  
                  </Route>
                  <Route path="/signin" exact render={()=>
                    <>
                      <Login/>
                    </>
                  }>  
                  </Route>
                  <Route path="/"  render={()=>
                    <>
                     
                      <Header setCriterion={(value)=>setCriterion(value)} toggleModal={toggleModal}/>
                      {/* <Navigation setCriterion={(value)=>setCriterion(value)}/> */}
                      <Products 
                        addInLocalStorage={(item,action)=>addInLocalStorage(item,action)} 
                        searchedProduct={criterion}/>

                      <ModalWrapper show={modalIsOpen} toggleModal={toggleModal} 
                        closeImgDetails={()=>setShowFullImage(false)}>
                        {
                          showImageDetail?
                           <ImageDetail/>:
                           <Collection 
                              collectionList={collections}
                              createCollection={createCollection}
                              addInCollection={(id)=>addInCollection(id)}/>
                        }
                        
                      </ModalWrapper>

                    </>
                  }>  
                  </Route>
              </Switch>
                
             
                
          </UserContext.Provider>
      </BrowserRouter>

       

   </Fragment>
  );
}

export default App;
