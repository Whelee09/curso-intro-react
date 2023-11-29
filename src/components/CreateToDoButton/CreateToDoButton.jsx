import './CreateToDoButton.css'
function CreateToDoButton(){
    return(
       <button className= 'CreateToDoButton'
        onClick={ 
            (event) =>{
                console.log("HIII")
                console.log(event)
            } 
                
        } 
       >+</button>
    );
}

export {CreateToDoButton};