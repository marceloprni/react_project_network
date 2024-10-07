import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'

import styles from './App.module.css'
import './Global.css'



function App() {
  return (
    <div>
       <Header />
       <div className={styles.wrapper}>
        <Sidebar />
      </div>
    </div>
  )
}

export default App
