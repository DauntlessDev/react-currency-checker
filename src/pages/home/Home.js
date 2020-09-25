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
        dispatch(getSpecificCurrency('USD'))
    }, [])

    useEffect(() => {
        dispatch(getSpecificCurrency(fromCurrency))
        setToCurrency(fromCurrency)
    }, [fromCurrency])

    useEffect(() => {
        try {
            setExchangeRate(currentState.data.rates[toCurrency])
            console.log('rates', exchangeRate)
            console.log('real rate', currentState.data.rates[toCurrency])
            console.log('amount', amount)
            console.log('from', fromCurrency)
            console.log('to', toCurrency)
        } catch {
            console.log('rates', exchangeRate)
            console.log('amount', amount)
            console.log('from', fromCurrency)
            console.log('to', toCurrency)
        }
    }, [toCurrency, fromCurrency])

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
