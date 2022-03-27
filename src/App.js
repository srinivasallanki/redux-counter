import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, reset, logIn, logOut } from './State/actions'

function App() {
  const { count } = useSelector((state) => state.counter)
  const { isLogin } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  return (
    <div className='App'>
      <h3>Counter {count}</h3>

      <button onClick={() => dispatch(increment(5))}>Increase</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <button onClick={() => dispatch(decrement(1))}>Decrease</button>

      <h2>For Logged in users only</h2>

      <button onClick={() => dispatch(logIn())}>Login</button>
      <button onClick={() => dispatch(logOut())}>Logout</button>
      {isLogin ? <h1>your entered into awesome code</h1> : ''}
    </div>
  )
}

export default App
