import style from './App.module.css'
import Navbar from './components/navbar/Navbar'
import Header from './components/header/Header'

function App() {
  return (
    <div className={style.parent}>
      <Navbar />
      <Header />
    </div>
  )
}

export default App