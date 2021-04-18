import React from 'react';
import TextField from './components/TextField';
import DynamicForm from './components/DynamicForm';
import NumberField from './components/NumberField';
import EmailField from './components/EmailField';
export default function App() {
    // const [inputList, setInputList] = useState([{ fName: "", age: "",email:"" }]);
    return (
        <div>
            
            <DynamicForm />
            {/* <TextField source="name" required/> 
            <NumberField source="age" max={100} required  /> 
            <EmailField source="email" />
            </DynamicForm> */}
            
        </div>
    )
}
