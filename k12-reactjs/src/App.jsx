import React, { useState } from 'react' //alias
import InputNumber from './components/Day39/InputNumber'
import Button from './components/Day39/Button'
import Result from './components/Day39/Result'

//App máy tính
const App = () => {
    const [number, setNumber] = useState();
    const [sum, setSum] = useState();

    const handleSetNumber = (value) => {
        setNumber(value)
    }

    const handleSetSum = (sumValue) => {
        setSum(sumValue)
    }

    return (
        <>
            <InputNumber handleSetNumber={ handleSetNumber } />
            <Button number={ number }
                handleSetSum={ handleSetSum } />
            <Result />
        </>
    )
}

export default App