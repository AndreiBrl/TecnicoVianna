let input = document.querySelectorAll("input");

function pega() {
    let x = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
    const data = x;
    const url = 'https://jsonplaceholder.typicode.com/posts/' + data;

    fetch(url, {
        method: 'GET'

    })
        .then(r => r.json())
        .then(data => {


            input[0].value = data.userId;
            input[1].value = data.id;
            input[2].value = data.title;
            input[3].value = data.body;
        })




}
pega();

let btn = document.querySelector(".btn").addEventListener("click",  () => {

    const url = 'https://jsonplaceholder.typicode.com/posts/' + input[1].value;
    

    
    fetch(url, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },

        body: JSON.stringify({
            userId: input[0].value,
            id: input[1].value,
            title: input[2].value,
            body: input[3].value
        })
    })
        .then(r => r.json())
        .then((json) => console.log(json));




})