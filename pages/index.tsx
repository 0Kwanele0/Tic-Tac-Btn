import type { NextPage } from 'next';
import { useEffect, useRef, useState } from 'react';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
    const box1 = useRef<HTMLButtonElement>(null);
    const box2 = useRef<HTMLButtonElement>(null);
    const box3 = useRef<HTMLButtonElement>(null);
    const box4 = useRef<HTMLButtonElement>(null);
    const box5 = useRef<HTMLButtonElement>(null);
    const box6 = useRef<HTMLButtonElement>(null);
    const box7 = useRef<HTMLButtonElement>(null);
    const box8 = useRef<HTMLButtonElement>(null);
    const box9 = useRef<HTMLButtonElement>(null);

    const b1 = box1.current?.style.backgroundColor;
    const b2 = box2.current?.style.backgroundColor;
    const b3 = box3.current?.style.backgroundColor;
    const b4 = box4.current?.style.backgroundColor;
    const b5 = box5.current?.style.backgroundColor;
    const b6 = box6.current?.style.backgroundColor;
    const b7 = box7.current?.style.backgroundColor;
    const b8 = box8.current?.style.backgroundColor;
    const b9 = box9.current?.style.backgroundColor;
    const refList = [box1, box2, box3, box4, box5, box6, box7, box8, box9];

    let [x, setX] = useState(false);
    let [winner, setWinner] = useState(false);
    let [message, setMessage] = useState(
        'Start playing! make your first move!'
    );

    const play = (e: any) => {
        if (!winner) {
            if (e.target.style.backgroundColor == 'black') {
                setMessage('Choose an empty box');
            } else {
                if (x) {
                    e.target.style.backgroundColor = 'black';
                    setMessage('Next Move!');
                    setX(!x);
                } else {
                    e.target.style.backgroundColor = 'yellow';
                    setMessage('Next Move!');
                    setX(!x);
                }
            }
        }
    };
    function checkWinne() {
        if ((b1 == 'black' || b1 == 'yellow') && b1 == b5 && b5 == b9) {
            setWinner(true);
            setMessage('Game over! You won!');
        } else if ((b1 == 'black' || b1 == 'yellow') && b1 == b4 && b7 == b4) {
            setWinner(true);
            setMessage('Game over! You won!');
        } else if ((b1 == 'black' || b1 == 'yellow') && b1 == b2 && b2 == b3) {
            setWinner(true);
            setMessage('Game over! You won!');
        } else if ((b2 == 'black' || b2 == 'yellow') && b2 == b5 && b5 == b8) {
            setWinner(true);
            setMessage('Game over! You won!');
        } else if ((b3 == 'black' || b3 == 'yellow') && b3 == b5 && b7 == b5) {
            setWinner(true);
            setMessage('Game over! You won!');
        } else if ((b3 == 'black' || b3 == 'yellow') && b3 == b6 && b6 == b9) {
            setWinner(true);
            setMessage('Game over! You won!');
        } else if ((b5 == 'black' || b5 == 'yellow') && b5 == b4 && b5 == b6) {
            setWinner(true);
            setMessage('Game over! You won!');
        } else if ((b7 == 'black' || b7 == 'yellow') && b7 == b8 && b7 == b9) {
            setWinner(true);
            setMessage('Game over! You won!');
        } else {
        }
    }

    function reset() {
        setWinner(false);
        setMessage('Start playing! make your first move!');
        for (let i = 0; i < refList.length; i++) {
            refList[i].current.style.backgroundColor = 'dodgerblue';
        }
    }
    useEffect(() => {
        checkWinne();
    }, [x]);

    return (
        <div className={styles.container}>
            <p>Hello Ti-Tac-Btn</p>
            <h3>{message}</h3>
            <main className={styles.game}>
                <div className={styles.row}>
                    <button
                        className={styles.btn}
                        ref={box1}
                        onClick={play}
                    ></button>
                    <button
                        className={styles.btn}
                        ref={box2}
                        onClick={play}
                    ></button>
                    <button
                        className={styles.btn}
                        ref={box3}
                        onClick={play}
                    ></button>
                </div>
                <div className={styles.row}>
                    <button
                        className={styles.btn}
                        ref={box4}
                        onClick={play}
                    ></button>
                    <button
                        className={styles.btn}
                        ref={box5}
                        onClick={play}
                    ></button>
                    <button
                        className={styles.btn}
                        ref={box6}
                        onClick={play}
                    ></button>
                </div>
                <div className={styles.row}>
                    <button
                        className={styles.btn}
                        ref={box7}
                        onClick={play}
                    ></button>
                    <button
                        className={styles.btn}
                        ref={box8}
                        onClick={play}
                    ></button>
                    <button
                        className={styles.btn}
                        ref={box9}
                        onClick={play}
                    ></button>
                </div>
            </main>
            <div>
                <button onClick={reset} className={styles.reset}>
                    Reset Game
                </button>
            </div>
        </div>
    );
};

export default Home;
