
import Header from './components/Header/Header'
import { Sidebar } from './components/Sidebar/Sidebar'


import styles from './App.module.css'

import './global.css'


function App() {


  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <h1>Ola mundo</h1>
        </main>
      </div>

    </div>
    
  )
}

export default App
