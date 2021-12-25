import React, { useState, useEffect, useRef } from 'react'
import '../Ifood Counter/Ifood Counter.css'

export default function IfoodCounter() {
    const price = 2.75;
    // useState declara um variável state
    const [value, setValue] = useState(1)
    const [btnDiminui, setbtnDiminui] = useState(false);
    const [btnAumentar, setbtnAumentar] = useState(false);
    const [buttonStyle, setButtonStyle] = useState("counter-button-minus-active")
    const totalPrice = price * value

    // useEffect diz ao React que o componente precisa fazer algo apenas depois da renderização, ele monitora uma mudança na variavel e com dispara um efeito.
    useEffect(() => {
        document.getElementById("totalPrice").innerHTML = `R$ ${totalPrice.toFixed(2)}`
    }, [value])


    function useInterval(callback, delay) {
        const savedCallback = useRef();

        useEffect(() => {
            savedCallback.current = callback;
        }, [callback]);

        useEffect(() => {
            function tick() {
                savedCallback.current();
            }
            if (delay !== null) {
                let id = setInterval(tick, delay);
                return () => clearInterval(id);
            }
        }, [delay]);

    }

    useInterval(Diminuir, btnDiminui ? 200 : null);
    useInterval(Aumentar, btnAumentar ? 200 : null);

    function Diminuir() {

        if (value <= 1) {
            setButtonStyle("counter-button-minus-desactive")
        }

        if (value > 0) {
            setValue(value - 1)
        }

    }
    function Aumentar() {
        setValue(value + 1)
        setButtonStyle("counter-button-minus-active")
    }

    return (
        <>
            <h2>Contador completo com Hooks</h2>
            <div id='container'>
                <div className='counter-wrapper'>
                    <button
                        className={buttonStyle}
                        onClick={Diminuir} onMouseDown={() => setbtnDiminui(true)}
                onMouseUp={() => setbtnDiminui(false)}                        
                    > - </button>
                    <p>{value}</p>
                    <button
                        className='counter-button-plus-active'
                        onClick={Aumentar} onMouseDown={() => setbtnAumentar(true)}
                onMouseUp={() => setbtnAumentar(false)}                        
                    > + </button>
                </div>
                <div id='totalPrice'></div>
            </div>
        </>
    )
}
