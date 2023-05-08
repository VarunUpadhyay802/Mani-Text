import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar'
import TextForm from './Components/TextForm';
function App() {
  return (
     <>   
    <Navbar title={"texttutils"}/>
    <div className='container'>
    <TextForm heading={"Enter the text to analyze"}/>
    </div>
    
    </>
      );
}

export default App;
