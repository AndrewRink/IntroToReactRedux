import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { newItem, removeItem, clearList } from './features/todoSlice';

function ToDo () {
    const items = useSelector((state) => state.todo.items)
    const dispatch = useDispatch()
    const [input, setInput] = useState('')

    const renderItems = items.map((item, index) => <li key = {index} onClick={() => dispatch(removeItem(index))}>{item}</li>)

    const submitItem = (e) => {
        e.preventDefault()
        dispatch(newItem(input))
    }

    return(
        <div>
            <form onSubmit={(e) => submitItem(e)}>
                <input type="text" onChange={(e) => setInput(e.target.value)}/>
                <button type='submit'>Submit</button>
            </form>
            <ul>
                {renderItems}
            </ul>
            <button onClick={()=> dispatch(clearList())}>Clear</button>
        </div>
    )
 }

 export default ToDo