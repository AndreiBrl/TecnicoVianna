// import React, {useState, useEffect} from 'react';
// import ReactDOM from 'react-dom/client';
// import { faker } from '@faker-js/faker';
// // import App from "./App"
// import Evento from './Evento';
// //import Clique from './Clique';
// import axios from 'axios'

// const App = (props) => {
//   const [eventos, setEventos] = useState([]);
//   const [carregado, setCarregado] = useState(false);

//   useEffect(() => {
//     axios.get("http://localhost:3004/Feeds").then(

//     (resp) => {
//       setEventos(resp.data);
//       setCarregado(true)
//     }
//     );
//       // setTimeout(() => {
//       //   setEventos(feeds);
//       //   setCarregado(true);
//       // }, 2000);
//   },[carregado]);


//   return (
//       <div className="ui feed">
//         {
//           eventos.map(x => {
//             return (
//               <Evento 
//                 key={x.id}
//                 foto={x.foto}
//                 usuario={x.usuario}
//                 tempo={x.tempo}
//                 likes={x.likes}
//               />
//             );
//           })
//         }        
//       </div>
//   );
// }

// const feeds = [
//   {
//     id:1,
//     foto:faker.image.avatar(),
//     usuario:faker.person.firstName(),
//     tempo:`Há ${faker.number.int(10)} hora(s)`,
//     likes:faker.number.int(10),
//   },
//   {
//     id:2,
//     foto:faker.image.avatar(),
//     usuario:faker.person.firstName(),
//     tempo:`Há ${faker.number.int(10)} hora(s)`,
//     likes:faker.number.int(10),
//   },
//   {
//     id:3,
//     foto:faker.image.avatar(),
//     usuario:faker.person.firstName(),
//     tempo:`Há ${faker.number.int(10)} hora(s)`,
//     likes:faker.number.int(10),
//   },
//   {
//     id:4,
//     foto:faker.image.avatar(),
//     usuario:faker.person.firstName(),
//     tempo:`Há ${faker.number.int(10)} hora(s)`,
//     likes:faker.number.int(10),
//   },
//   {
//     id:5,
//     foto:faker.image.avatar(),
//     usuario:faker.person.firstName(),
//     tempo:`Há ${faker.number.int(10)} hora(s)`,
//     likes:faker.number.int(10),
//   }
// ];

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
  
//     <App />
//     //<Clique />
  
// );
