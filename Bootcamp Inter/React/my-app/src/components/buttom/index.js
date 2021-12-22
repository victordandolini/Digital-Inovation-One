// Criando um botão com atributos a serem capturados
const Button = ({children, className, onClick})=>{
    return(
        <button
                    type="button"
                    className={className}
                    onClick={onClick}
                >
                    {children}
                </button>
    )
}

export default Button