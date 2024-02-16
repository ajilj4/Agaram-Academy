import React,{ useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { decrement, increment, incrementByAmount } from './user'
import axios from 'axios'


export default function Counter() {
  const count = useSelector(state => state.counter.value)
  const email = useSelector(state=> state.user.loginuser)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(()=>{
    const data= axios.get("https://14d0cf84-3ed0-489d-8c01-906c16d4c734.mock.pstmn.io/user")
    console.log(email)
  },[])

  return (
    <div>
     
      <div>
      <h1>welcome {JSON.stringify(email.email)}</h1>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button><br/>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch((incrementByAmount(100)))}
        >
          Decrement
        </button>
        <button type='button' onClick={()=>{
          localStorage.removeItem("authTokn")
          navigate('/')
        }}>signout</button>
      </div>
    </div>
  )
}