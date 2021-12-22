// Importando apenas o useState 
import { useState } from "react"
import Button from "../buttom"


const Card = () => {
    // useState é um Hook que te permite adicionar o state do React a um componente de função. Ele retorna um par de valores: o state atual (valor) e uma função (setValor) que atualiza o state, e seu argumento é o valor inicial do state.
    const [valor, setValor] = useState(0)

    function Adicionar() {
        setValor(valor + 1)
    }

    function Remover() {
        setValor(valor - 1)
    }

    return (
        <div className="card">
            <div className="card-header">
                Meu Primeiro Card
            </div>
            <div className="card-body">
                <Button
                    className="btn btn-success"
                    onClick={Adicionar}
                >
                    Adicionar
                </Button>
                <Button
                    className="btn btn-danger"
                    onClick={Remover}
                >
                    Remover
                </Button>
                <p>{valor}</p>

            </div>
        </div>
    )
}
export default Card