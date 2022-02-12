import { v4 as uuidv4} from 'uuid';
import { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";

const AddExpenseForm = () => {
	const [ name, setName ] = useState('');
	const [ cost, setCost ] = useState('');

	const {dispach} = useContext(AppContext);

	const onSubmit = (e)=>{
		e.preventDefault();

		const expense = {
			id: uuidv4(),
			name: name,
			cost: parseInt(cost)
		}

		dispach({
			type: 'ADD_EXPENSE',
			payload: expense 
		});

		setName('');
		setCost('');
	}

    return ( 
        <form onSubmit={onSubmit}>
			<div className='row'>
				<div className='col-sm col-lg-4'>
					<label htmlFor='name'>Name</label>
					<input
						required='required'
						type='text'
						className='form-control'
						id='name'
						value={name}
						onChange={(e)=> setName(e.target.value)}
					/>
				</div>
				<div className='col-sm col-lg-4'>
					<label htmlFor='cost'>Cost</label>
					<input
						required='required'
						type='number'
						className='form-control'
						id='cost'
						value={cost}
						onChange={(e)=> setCost(e.target.value)}
					/>
				</div>
			</div>
			<div className='row mt-3'>
				<div className='col-sm'>
					<button type='submit' className='btn btn-primary'>Save</button>
				</div>
			</div>
		</form>
     );
}
 
export default AddExpenseForm;