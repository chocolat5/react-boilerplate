import React from 'react'

import Header from './Header'

import styles from './App.scss'

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <p>Hello React Application!</p>
        </div>
      </main>
    </div>
  )
}

export default App
