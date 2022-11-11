import {useState} from 'react';
// import {word, useState} from 'react';

function Food(props){
    return (
        <h1>{props.message}</h1>

    )
}

function InputComponent(){

    const [inputText, setText] = useState('hello');
    const [word] = useState('Eat');

function handleChange(e){
    setText(e.target.value);
}

    return(
        <div>
            <input value={inputText} onChange={handleChange}/>
            <p>You typed: {inputText}</p>
            <button onClick={() => setText('hello')} >Reset</button>

            <Food message={word + " at Little Lemon"}/>

        </div>
    );

};

export default InputComponent;
