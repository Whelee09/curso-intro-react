import './ToDoItem.css';
import {CompleteIcon} from '../CompleteIcon/CompleteIcon.jsx'
import { DeleteIcon} from '../Icon/DeleteIcon.jsx'

function ToDoItem(props){
    return(
      <li className='ToDoItem'>
        <CompleteIcon
          className = {` Icon Icon-check Icon-check 
          ${props.completed ? 'Icon-check--active': ''}` }
          completed = {props.completed}
          onClick = {props.onComplete}
        />

        <p className={`ToDoItem-p ${props.completed && 'Todo-Item-p--completed'}`}>  
          {props.text}
        </p>
        <DeleteIcon
        className = 'Icon Icon-delete '
          onClick={props.onDelete}
        />
      </li>
    );

}


export {ToDoItem};