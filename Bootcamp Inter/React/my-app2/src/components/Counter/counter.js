function Counter() {
    let quantity = 0; 
    
    function upQantity(){
        quantity = quantity + 1
        console.log(quantity)
        document.getElementById("counter-box").innerHTML = quantity

    }
    return(
        <>
        <h2>Contador Simples</h2>
            <h2 id="counter-box"> {quantity}</h2>
            <button onClick={upQantity} className="button button-green">Aumentar</button>
        </>
    )
}

export default Counter