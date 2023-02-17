import React, {useState} from 'react';
import cl from "./useState.module.css";

const Counter = () => {
    const [count, setCount] = useState(0)


    function changeCount(e) {
        const type = e.target.innerText

        if (type === "Add") {
            setCount(count + 1)
        } else {
            if (!count <= 0) {
                setCount(count - 1)
            }
        }
    }

    return (
        <div className={cl.Counter}>
            <h1>Counter</h1>
            <h3>You cont : <span>{count}</span></h3>
            {count <= 0
                ?
                <div>
                    <h4>You can't minus now</h4>
                </div>
                :
                <div>

                </div>
            }
            <button
                onClick={changeCount}
            >
                Add
            </button>
            <button
                onClick={changeCount}
            >
                Minus
            </button>
        </div>
    );
};

export default Counter;