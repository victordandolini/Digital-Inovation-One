import Counter from "../Counter/counter"
import IfoodCounter from "../Ifood Counter/Ifood Counter"
import SmartCounter from "../Smart Counter/Smart Counter"
import '../app/App.css'


const App = () => {
    return (
        <>
            <h1>Meus primeiros Contadores</h1>
            <Counter/>
            <SmartCounter/>
            <IfoodCounter/>
            
        </>
    )

}
export default App