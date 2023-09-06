import React from "react";
import Pagina1 from "./Pagina1"
import Pagina2 from "./Pagina2"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./Layout";

const App = () => {
    return (
        <BrowserRouter>
            <Routes >

                    <Route path="/" element={<Layout />}>
                    <Route index element={Pagina1}/>
                    <Route path="pagina1" element={<Pagina1 />} />
                    <Route path="pagina2" element={<Pagina2 />} />


                </Route>


            </Routes>

        </BrowserRouter>


    );
}
