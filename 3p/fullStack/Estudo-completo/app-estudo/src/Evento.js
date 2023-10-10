import React from "react";
import ReactDOM from "react-dom/client";
import { faker } from '@faker-js/faker';

const Event = props => {

    return (


        <div class="event">
            <div class="label">
                <img src={props.fotoPerfil} />
            </div>
            <div class="content">
                <div class="summary">
                    <a class="user">
                       {props.usuario}
                    </a> {props.mensagem}
                    <div class="date">
                       {props.tempo}
                    </div>
                </div>
                <div class="meta">
                    <a class="like">
                        <i class="like icon"></i> {props.likes}

                    </a>
                </div>
            </div>
        </div>
       
   )


}
export default Event