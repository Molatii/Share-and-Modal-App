import { useState } from 'react';
import Modal from './Modal';
import './popUp.css';
import Backdrop from './Backdrop';

function PlayButton(){
    const [modalIsOpen, setModalIsOpen] =  useState(false);

function deleteHandler(){  
setModalIsOpen(true);
}

function closeModalHandler(){
    setModalIsOpen(false);
}
return (
      <div className="card">   
       
       <button className='btn-play' onClick={deleteHandler}>Play</button>       

        {modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />}
        {modalIsOpen && <Backdrop onCancel={closeModalHandler}/>}      
      
      </div>
   );   

}

export default PlayButton;