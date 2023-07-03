import React, { useState, useCallback } from 'react'

const Input = () => {
    // const [numberA, setNumberA] = useState();
    // const [numberB, setNumberB] = useState();

    // khai báo: number = {a: '', b: ''}
    const [number, setNumber] = useState({
        a: '',
        b: ''
    });

    const [result, setResult] = useState(0);

    // const handleOnChangeNumberA = (e) => {
    //     setNumberA(parseInt(e.target.value));
    // }

    // const handleOnChangeNumberB = (e) => {
    //     setNumberB(parseInt(e.target.value));
    // }

    // const handleOnChange = (e, key) => {
    //     let twinNumber = { ...number };
    //     twinNumber[key] = parseInt(e.target.value);
    //     setNumber({
    //         ...twinNumber
    //     });
    // }

    const handleOnChange = useCallback(e => {
        const { name, value } = e.target; // const name = e.target.name && const value = e.target.value
        setNumber({ ...number, [name] : parseInt(value) });
    });

    const handleOnClick = () => {
        setResult(number.a + number.b)
    }

    return (
        <>
            <div className="form">
                <input
                    type="text"
                    name="a"
                    placeholder="Nhập vào số a"
                    onChange={ e => handleOnChange(e) }
                />
                <br />
                <input
                    type="text"
                    name="b"
                    placeholder="Nhập vào số b"
                    onChange={ e => handleOnChange(e) }
                />
                <br />
                <button onClick={ handleOnClick }>+</button>
                <span>= { result }</span>
            </div>
        </>
    )
}

export default Input