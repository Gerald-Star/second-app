import {useState} from 'react';
import {useRef} from 'react'




function TextFocusButton(){
    const inputEL = useRef(null);
    const onButtonClick = () => {
        inputEL.current.focus();
    }
    return(
        <div>
            <input ref={inputEL} type="text" />
            <button onClick={onButtonClick}>Focus the input</button>
        </div>

    );
};


function RegisterForm(){

    const [form, setForm] = useState({
        firstName: 'John',
        secondName: 'Lucas',
        email: 'John@Lucas.com',
    });

    return (
        <div className='RegisgerForm'>
            <TextFocusButton />
            <label>
                First name:
                <input value={form.firstName} onChange={e => 
                        {setForm ({...form, firstName: e.target.value});}}/>
            </label>

            <label>
                Second Name:
                <input value={form.secondName} onChange={e => 
                    {setForm ({...form, secondName: e.target.value});}}/>

            </label>

            <label>
                Email:
                <input value={form.email} onChange={e => 
                    {setForm ({...form, email: e.target.value});}}/>
            </label>

            <p>
                {form.firstName}{' '}
                {form.lastName}{' '}
                ({form.email})
            
            </p>

        </div>

    );
};

export default RegisterForm;