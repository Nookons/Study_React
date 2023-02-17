import React, {useCallback, useEffect, useState} from 'react';
import cl from './useEffect.module.css'

const UseEffect = () => {

    const [name, setName] = useState("Tom");
    const [age, setAge] = useState(36);

    useEffect(() => {
        // Изменяем заголовок html-страницы
        document.title = `Привет ${name}`;
        console.log("useEffect");
    }, [name]); // эффект срабатывает только при изменении name

    const changeName = (event) => setName(event.target.value);
    const changeAge = (event) => setAge(event.target.value);


    return (
        <div className={cl.UseEffect}>
            <h3>Имя: {name}</h3>
            <h3>Возраст: {age}</h3>

            <div>
                <p>Имя: <input type="text" value={name} onChange={changeName}/></p>
                <p>Возраст: <input type="number" value={age} onChange={changeAge}/></p>
            </div>
        </div>
    );
};
export default UseEffect;