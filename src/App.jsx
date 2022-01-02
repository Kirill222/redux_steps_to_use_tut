import logo from './logo.svg'
import './App.css'
import {useSelector, useDispatch} from 'react-redux'
import {depositMoney, withdrawMoney} from './state/action-creators'

function App() {

  const account = useSelector(state => state.account)
  console.log(account)

  const dispatch = useDispatch()  

  return (
    <div className="App">
      <h1>{account}</h1>
      <button onClick={() => dispatch(depositMoney(100))}>Deposit</button>
      <button onClick={() => dispatch(withdrawMoney(100))}>Withdraw</button>
    </div>
  );
}

export default App;
