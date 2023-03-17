import style from './App.module.css'
import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header'
// import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div className={style.parent}>
      <Navbar />
      <Header />
      {/* <Footer /> */}
    </div>
  )
}

export default App