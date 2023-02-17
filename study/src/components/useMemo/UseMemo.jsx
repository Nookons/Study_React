import React, {useMemo, useState} from 'react';
import cl from './useMemo.module.css';
const UseMemo = () => {
    const sum = n => {
        return n * n
    };

    const [num, setNum] = useState(1);
    const [isGreen, setIsGreen] = useState(false);
    const result = useMemo(() => sum(num), [num]);

    return (
        <div className={cl.UseMemo}>
            <h1>Example</h1>
            <hr/>
            <h2 style={{ color: isGreen ? "green" : "red", cursor: isGreen ? "pointer" : "alias" }}>
                Sum {result}
            </h2>
            <hr/>
            <button onClick={() => setIsGreen(!isGreen)}>Change color</button>
            <button onClick={() => setNum(num + 1)}>➕</button>
        </div>
    );
};

export default UseMemo;