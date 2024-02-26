
import { Provider } from 'react-redux'
import './App.css'
import Body from './components/Body'
import appStore from './utils/appStore'

function App() {
 // console.log(movies)
    // if (!movies || movies.length === 0) {
    //     return <div>Loading...</div>; // Placeholder for when movies is null or empty
    //   }

  return (
    
   
    <Provider  store={appStore}>
   <Body/>
   </Provider>
   
   
  )
}

export default App
