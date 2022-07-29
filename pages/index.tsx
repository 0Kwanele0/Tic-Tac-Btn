import type {NextPage} from 'next'
import {useRef, useState} from 'react'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const box1 = useRef<HTMLButtonElement>(null)
  const box2 = useRef<HTMLButtonElement>(null)
  const box3 = useRef<HTMLButtonElement>(null)
  const box4 = useRef<HTMLButtonElement>(null)
  const box5 = useRef<HTMLButtonElement>(null)
  const box6 = useRef<HTMLButtonElement>(null)
  const box7 = useRef<HTMLButtonElement>(null)
  const box8 = useRef<HTMLButtonElement>(null)
  const box9 = useRef<HTMLButtonElement>(null)

  let [x, setX] = useState(false)

  const play = (e: any) => {
    if (!checkWinne()) {
      if (e.target.style.backgroundColor == 'yellow' ||
        e.target.style.backgroundColor == 'black') {
        alert('Choose an empty box')
      } else {
        if (x) {
          e.target.style.backgroundColor = 'black'
          setX(!x)
          checkWinne()
        } else {
          e.target.style.backgroundColor = 'yellow'
          setX(!x)
          checkWinne()
        }
      }
    }
  }
  function checkWinne() {
    const b1 = box1.current?.style.backgroundColor
    const b2 = box2.current?.style.backgroundColor
    const b3 = box3.current?.style.backgroundColor
    const b4 = box4.current?.style.backgroundColor
    const b5 = box5.current?.style.backgroundColor
    const b6 = box6.current?.style.backgroundColor
    const b7 = box7.current?.style.backgroundColor
    const b8 = box8.current?.style.backgroundColor
    const b9 = box9.current?.style.backgroundColor
    if ((b1 == 'black' || b1 == 'yellow') && (b1 == b5 && b5 == b9)) {
      alert('winnnn')
      return true
    } else if ((b1 == 'black' || b1 == 'yellow') && b1 == b4 && b7 == b4) {
      alert('winnnn')
      return true
    } else if ((b1 == 'black' || b1 == 'yellow') && b1 == b2 && b2 == b3) {
      alert('winnnn')
      return true
    } else if ((b2 == 'black' || b2 == 'yellow') && b2 == b5 && b5 == b8) {
      alert('winnnn')
      return true
    } else if ((b3 == 'black' || b3 == 'yellow') && b3 == b5 && b7 == b5) {
      alert('winnnn')
      return true
    } else if ((b3 == 'black' || b3 == 'yellow') && b3 == b6 && b6 == b9) {
      alert('winnnn')
      return true
    } else if ((b5 == 'black' || b5 == 'yellow') && b5 == b4 && b5 == b6) {
      alert('winnnn')
      return true
    } else if ((b7 == 'black' || b7 == 'yellow') && (b7 == b8 && b7 == b9)) {
      alert('winnnn')
      return true
    }
    else {
      return false
    }
  }

  return (
    <div className={styles.container}>
      <p>Hello Ti-Tac-Btn</p>
      <main className={styles.game}>
        <div className={styles.row}>
          <button className={styles.btn} ref={box1} onClick={play}></button>
          <button className={styles.btn} ref={box2} onClick={play}></button>
          <button className={styles.btn} ref={box3} onClick={play}></button>
        </div>
        <div className={styles.row}>
          <button className={styles.btn} ref={box4} onClick={play}></button>
          <button className={styles.btn} ref={box5} onClick={play}></button>
          <button className={styles.btn} ref={box6} onClick={play}></button>
        </div>
        <div className={styles.row}>
          <button className={styles.btn} ref={box7} onClick={play}></button>
          <button className={styles.btn} ref={box8} onClick={play}></button>
          <button className={styles.btn} ref={box9} onClick={play}></button>
        </div>
      </main>
    </div>
  )
}

export default Home
