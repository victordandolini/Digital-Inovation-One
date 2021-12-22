import Item from "./item"
import Card from "./card"

const App = () => {
    return (
        //Sintaxe curta <></> para React Fragments. Um padrão comum no React é que um componente pode retornar múltiplos elementos. Os Fragmentos permitem agrupar uma lista de filhos sem adicionar nós extras ao DOM
        <> 
            <h1>Minhas primeiras aplicações com React</h1>
            <ul>
                <Item>
                    1
                </Item>
                <Item>
                    2
                </Item>
                <Item>
                    3
                </Item>
            </ul>
            <Card/>            
        </>
    )

}
export default App