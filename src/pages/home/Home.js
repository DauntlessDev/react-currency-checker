import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getSpecificCurrency } from '../../redux';


function Home() {
    const currentState = useSelector(state => state.home)
    const dispatch = useDispatch()
    const [fromCurrency, setFromCurrency] = useState('USD')
    const [toCurrency, setToCurrency] = useState('USD')
    const [exchangeRate, setExchangeRate] = useState(1)
    const [amount, setAmount] = useState(0)

    useEffect(() => {
        setAmount(0)
        setToCurrency('USD')
        setFromCurrency('USD')
        dispatch(getSpecificCurrency(fromCurrency))
    }, [])

    useEffect(() => {
        dispatch(getSpecificCurrency(fromCurrency))
        setAmount(1)
        setToCurrency('n')
        setExchangeRate(1)

    }, [fromCurrency, dispatch])

    useEffect(() => {
        try {
            if (currentState.data.rates)
                setExchangeRate(currentState.data.rates[toCurrency])
        } catch {
            console.log('no currency selected')
        }
    }, [currentState.data.rates, toCurrency])

    const handleFromAmountChange = (e) => {
        e.preventDefault()
        setAmount(e.target.value)
    }


    return (
        currentState.loading ?
            <div>Loading</div> :
            currentState.error ?
                <div>{currentState.error}</div> :
                currentState.rates ?
                    <>
                        <h1>Convert</h1>
                        <div>
                            <input type="number" className="input" value={amount} onChange={handleFromAmountChange} />
                            <select value={fromCurrency} onChange={e => setFromCurrency(e.target.value)}>
                                {currentState.rates.map((option =>
                                    <option key={option + Math.random(9999)} value={option}>{option}</option>
                                ))}
                            </select>
                        </div>
                        <div className="equals">=</div>
                        <div>
                            <input type="number" className="input" value={amount * exchangeRate} onChange={() => { }} />
                            <select value={toCurrency} onChange={e => setToCurrency(e.target.value)}>
                                {currentState.rates.map((option =>
                                    <option key={option + Math.random(9999)} value={option}>{option}</option>
                                ))}
                            </select>
                        </div>
                    </>
                    : <div>No Data</div>
    )

}
export default Home
