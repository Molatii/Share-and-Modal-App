import './popUp.css';

function Modal(props){
//let history = useHistory();  

function cancelHandler(){

   props.onCancel();
}
return (

    <div className='model'>
  
           <p className="title">Testing Modal</p>
           <br/>
           <button className="close-popUp" onClick={cancelHandler}>Close</button>
           
    </div>

);

}

export default Modal;