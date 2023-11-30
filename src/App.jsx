import Header from "./components/header/Header"
import styles from "./App.module.css"
import Footer from "./components/footer/Footer"
import Main from "./components/main/Main"
import About from "./components/about/About"

function App() {

  return (
    <div className={styles.container}>
      <Header/>
      <div className={styles.content}>
        <Main/>
        <About/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
