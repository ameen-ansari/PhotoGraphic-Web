import style from './App.module.css'
import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header'

function App() {
  return (
    <div className={style.parent}>
      <Navbar />
      <Header />
    </div>
  )
}

export default App