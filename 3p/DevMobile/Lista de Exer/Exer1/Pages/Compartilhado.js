import { Children, createContext, useContext, useState } from "react"

const Contexto = createContext();
const useContexto = () => {

    return useContext(Contexto);
}


const Compartilhado = ({ children }) => {
    const [carro,setCarro]=useState();
    const [itensAdicionais, setItensAdicionais] = useState("");
    const [potenciaEscolhida, setPotencia] = useState("");

    const pegaDado = (tipoCarro,itensAdicionais,potenciaEcolhida) => {
        
     setCarro(tipoCarro);
     setItensAdicionais(itensAdicionais)
     setPotencia(potenciaEcolhida)
    }


    return (
        <Contexto.Provider value={{pegaDado,carro,itensAdicionais,potenciaEscolhida}}>
            {children}
        </Contexto.Provider>
    )
}
export {useContexto,Contexto,Compartilhado}