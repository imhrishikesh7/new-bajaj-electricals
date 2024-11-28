import './App.css'
import 'font-awesome/css/font-awesome.min.css';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './Components/Footer/Footer'
import ChartInt from './Components/Investor-chart/ChartInt'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home';

function App() {

  return (
    <div>
      <Navbar />
      <Home />
      <Footer />

      {/* <ChartInt/> */}

    </div>
  )
}

export default App
