import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import '../index.css';
import { getCurrency } from '../redux';

function Home() {
    const currentState = useSelector(state => state.home)
    const dispatch = useDispatch()
    const [base, setBase] = useState("")
    const [convert, setConvert] = useState("")


    const handleFetch = (e) => {
        e.preventDefault()
        dispatch(getCurrency(base))
    }
    

}
export default Home
