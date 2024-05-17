btnLogar = document.querySelector(".container button");

btnLogar.addEventListener("click", () => {
    const params = new URLSearchParams();
    params.append('logar', 'logar');


    fetch('/home?' + params.toString(), {
        method: 'GET'
    })
        .then(resp => resp.text())
        .then(data => {
        })
        .catch(error => {
            console.error("Erro: " + error);
        });
});