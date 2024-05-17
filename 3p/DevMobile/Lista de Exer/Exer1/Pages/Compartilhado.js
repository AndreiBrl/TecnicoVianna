import { Children, createContext, useContext, useState } from "react"

const Contexto = createContext();
const useContexto = () => {

    return useContext(Contexto);
}


const Compartilhado = ({ children }) => {
    const [carro, setCarro] = useState([]);
    const [itensAdicionais, setItensAdicionais] = useState([]);
    const [potenciaEscolhida, setPotencia] = useState([]);
    // dados exer3
    const [horasTrab, setHorasTrab] = useState();
    const [salarioHora, setSalarioHora] = useState();
    const [dependentes, setDependentes] = useState();

    const pegaDado = (tipoCarro, itensAdicionais, potenciaEcolhida) => {
        
            setCarro(tipoCarro);
            setItensAdicionais(itensAdicionais)
            setPotencia(potenciaEcolhida)
        
    }
    const dadosExer3 = (horasTrabs, salarioEmHora, dependentesUsu) => {
        setHorasTrab(horasTrabs)
        setSalarioHora(salarioEmHora)
        setDependentes(dependentesUsu)

    }


    return (
        <Contexto.Provider value={{ pegaDado, carro, itensAdicionais, potenciaEscolhida, dadosExer3, horasTrab, salarioHora, dependentes }}>
            {children}
        </Contexto.Provider>
    )
}
export { useContexto, Contexto, Compartilhado }