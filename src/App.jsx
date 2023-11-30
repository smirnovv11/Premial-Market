import Header from "./components/header/Header"
import styles from "./App.module.css"
import Footer from "./components/footer/Footer"
import Main from "./components/main/Main"

function App() {

  return (
    <div className={styles.container}>
      <Header/>
      <div className={styles.content}>
        <Main/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
