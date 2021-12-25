import { useState, useEffect, useRef } from 'react'



function SmartCounter() {
    const [btnDiminui, setbtnDiminui] = useState(false);
    const [btnAumentar, setbtnAumentar] = useState(false);
    const [quantity, setQuantity] = useState(0)
    
    const Aumentar = () => {        
        setQuantity(quantity + 1)    
    };
    const Diminuir = () => {        
        
        if (quantity > 0) {
            setQuantity(quantity - 1)              
        }        
    } 
    
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

    
    return (
        
        <>
            <h2>Contador com useState</h2>
            <h2>{quantity}</h2>
            <button className="button button-red" onClick={Diminuir} onMouseDown={() => setbtnDiminui(true)}
                onMouseUp={() => setbtnDiminui(false)}>Diminuir</button>
            <button className="button button-green" onClick={Aumentar} onMouseDown={() => setbtnAumentar(true)}
                onMouseUp={() => setbtnAumentar(false)}>Aumentar</button>
        </>
    )
}

export default SmartCounter