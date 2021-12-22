// A Desestruturação é uma expressão JavaScript que possibilita extrair dados de arrays ou objetos em variáveis distintas.
const Item = ({children}) => {
    return (
        <a href="/" className="list-group-item list-group-item-action list-group-item-dark" >
            {children}
        </a>
    )
}
export default Item
// Aqui utilizei o children, mas poderia ter feito uma atribuição na tag do componente utilizando como por exemplo um {props.value}