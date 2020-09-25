import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCurrency } from '../../redux';
import CurrencyRow from './parts/CurrencyRow';

function Home() {
    const currentState = useSelector(state => state.home)
    const dispatch = useDispatch()
    const [fromCurrency, setFromCurrency] = useState()
    const [toCurrency, setToCurrency] = useState()

    const [fromAmount, setFromAmount] = useState(1)
    const [toAmount, setToAmount] = useState(1)
    const [exchangeRate, setExchangeRate] = useState()
    const [amount, setAmount] = useState(1)
    const [amountInFromCurrency, setAmountInFromCurrency] = useState(true)

    useEffect(() => {

        setToCurrency(currentState.data[0])
        setFromCurrency(currentState.data[2])

        if (amountInFromCurrency) {
            setFromAmount(amount)
            setToAmount(amount * exchangeRate)
        } else {
            setFromAmount(amount / exchangeRate)
            setToAmount(amount)
        }
    }, [currentState])


    useEffect(() => {
        console.log('curreent data', currentState.data)
        dispatch(getCurrency())
    }, [])

    const handleFromAmountChange = (e) => {
        e.preventDefault()
        setAmount(e.target.value)
        setAmountInFromCurrency(true)
    }
    const handleToAmountChange = (e) => {
        e.preventDefault()
        setAmount(e.target.value)
        setAmountInFromCurrency(false)
    }
    return (
        currentState.loading ?
            <div>Loading</div> :
            currentState.error ?
                <div>{currentState.error}</div> :
                currentState.data ?
                    <>
                        <h1>Convert</h1>
                        <CurrencyRow
                            currencyOptions={currentState.data}
                            selectedCurrency={fromCurrency}
                            onChangeAmount={handleFromAmountChange}
                            onChangeCurrency={e => setFromCurrency(e.target.value)}
                            amount={fromAmount}
                        />
                        <div className="equals">=</div>
                        <CurrencyRow
                            currencyOptions={currentState.data}
                            selectedCurrency={toCurrency}
                            onChangeAmount={handleToAmountChange}
                            onChangeCurrency={e => setToCurrency(e.target.value)}
                            amount={toAmount} />

                    </>
                    : <div>No Data</div>
    )

}
export default Home
