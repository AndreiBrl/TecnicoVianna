import React, {useState, useEffect} from 'react';

const Clique = (props) => {
    const [cliques, setCliques] = useState(0);
    const [objeto, setObjeto] = useState({nome:'', sobrenome:''});

    //componentDidMount
    //componentDidUpdate
    //componentDidUnmount

    useEffect(() => {
        document.title = `Você clicou ${cliques} vezes.`;
        console.log("Executou o useEffect");
    },[cliques]);

    const alterarInput = (e) => {
        let obj = {...objeto};
        obj[e.target.name] = e.target.value;
        setObjeto(obj);
    };

    return (
        <div>
            <button onClick={() => setCliques(cliques + 1)}>Clique aqui</button>
            <p>Cliques: {cliques}</p>

            <div>
                <label htmlFor='nome'>Nome</label>
                <input 
                    id='nome' 
                    name='nome'
                    type='text' 
                    value={objeto.nome} 
                    onChange={e => alterarInput(e)}
                />
            </div>

            <div>
                <label htmlFor='sobrenome'>Sobrenome</label>
                <input 
                    id='sobrenome' 
                    name='sobrenome'
                    type='text' 
                    value={objeto.sobrenome} 
                    onChange={e => alterarInput(e)}
                />
            </div>

            <p>Olá {objeto.nome} {objeto.sobrenome}!</p>
        </div>
    );
}

export default Clique;
