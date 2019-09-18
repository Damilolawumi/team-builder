import React, { useState } from 'react';
import App from './App'

const initialFormValues = {
    name: '',
    email: '',
    role: '',
};



function Form() {
    // passed in initialFormValues to the useState so that my state variable would use it as the initial value
    const [formValues, setFormValues] = useState(initialFormValues);

    const onNameChange = (e) => {
        setFormValues({
            ...formValues,
            name: e.target.value,
        })
    }

    const onEmailChange = (e) => {
        setFormValues({
            ...formValues,
            email: e.target.value,
        })
    }

    const onRoleChange = (e) => {
        setFormValues({
            ...formValues,
            role: e.target.value,
        })
    }

    const OnFormSubmit = (e) => {
        e.preventDefault();
    }

    return (<form onSubmit={OnFormSubmit} >

        <label htmlFor='nameinput'>Name</label>
        <input
            value={formValues.name}
            onChange={onNameChange}
        />


        <label htmlFor='emailInput'>Email</label>
        <input

            value={formValues.email}
            onChange={onEmailChange} />


        <label htmlFor='roleInput'>Role</label>
        <input
            value={formValues.role}
            onChange={onRoleChange} />


        <button>Submit</button>
        
    </form>
    )
}

export default Form;