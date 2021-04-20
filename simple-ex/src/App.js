import React from 'react'
import DynamicForm from './contexts/DynamicContext';
import TextField from './comp/TextField';
import NumberField from './comp/NumberField';
import EmailField from './comp/EmailField';

export default function App() {

    const onClickhandler =(data)=>{
        alert(JSON.stringify(data));    
    }

    return (
        <DynamicForm onSubmit={onClickhandler}>
            <TextField source="name" required />
            <NumberField source="age" max={100} required/>
            <EmailField source="email" />
        </DynamicForm>
    )
}
