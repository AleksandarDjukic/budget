import React, { useContext } from 'react';
import {TiDelete} from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
	const { dispach } = useContext(AppContext); 

	const handleDelete = () => {
		dispach({
			type: 'DELETE_EXPENSE',
			payload: props.id,
		});
	};
    return ( 
        <li className='list-group-item d-flex justify-content-between align-items-center'>
			{props.name}
			<div className="d-flex justify-content-between align-items-center">
                <span>${props.cost}</span>
				<TiDelete size='1.5em' onClick={handleDelete}/>
			</div>
		</li>
     );
}
 
export default ExpenseItem;