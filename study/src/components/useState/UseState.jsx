import React, {useState} from 'react';
import cl from './useState.module.css'
import Form from "./Form";
import Counter from "./Counter";

const UseState = () => {

    return (
        <div>
            <h1 style={{textAlign: 'center', color: "#8e85ff"}}>UseState...</h1>
            <hr/>
            <Counter />
            <Form />
            <h1 style={{textAlign: 'center', color: "#8e85ff"}}>useEffect...</h1>
            <hr/>
        </div>
    );
};

export default UseState;