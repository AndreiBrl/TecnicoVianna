import Pagina1 from "./pagina1";
import Pagina2 from "./pagina2";
import Layout from "./Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";



const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <route index element={<Pagina1 />}></route>
                    <route path="pagina1" element={<Pagina1 />}></route>
                    <route path="pagina2" element={<Pagina2 />}></route>


                </Route>
            </Routes>

        </BrowserRouter>
    )
}

export default App;