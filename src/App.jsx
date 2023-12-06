import Header from "./components/header/Header"
import styles from "./App.module.css"
import Footer from "./components/footer/Footer"
import Main from "./components/main/Main"
import About from "./components/about/About"
import Services from "./components/services/Services"
import Contacts from "./components/contacts/Contacts"

function App() {

  return (
    <div className={styles.container}>
      <Header/>
      <div className={styles.content}>
        <Main/>
        <About/>
        <Services/>
        <Contacts/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
