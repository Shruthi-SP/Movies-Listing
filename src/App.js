import './App.css';
//import { useDispatch, useSelector } from 'react-redux'
//import { inc } from './actions/countAction';
import MoviesContainer from './components/MoviesContainer'

function App(props) {
  return(
    <div>
      <h1>My Big Movie List App</h1>
      <MoviesContainer />
    </div>
  )
}
export default App

// function App() {
//   const dispatch = useDispatch()
//   const count = useSelector((state)=>{
//     return state.count
//   })
//   const handleInc = () => {
//     dispatch(inc())
//   }
//   return (
//     <div>
//       <h1>Setting App</h1>
//       <h2>Count - {count}<button onClick={handleInc}>inc</button></h2>
//     </div>
//    )
// }
// export default App;
