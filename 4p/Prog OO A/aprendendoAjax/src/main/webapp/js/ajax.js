form1 = document.querySelector(".form1");
result =  document.querySelector(".Result")


form1.addEventListener('submit', (e) => {
    e.preventDefault();
    let numA = document.querySelector(".numA").value;
    let numB = document.querySelector(".numB").value;
    let params = new URLSearchParams();
    params.append('numA',numA);
    params.append('numB',numB);
 fetch('/primeiro',{

     method: 'POST',
 }).then(resp => resp.text()).then(data =>{

     result.innerHTML = data;
 }).catch(error =>{
     console.error("erro" +error)

 })


    //     var formData = new FormData(e.target);
    //     var xhr = new XMLHttpRequest();

    // xhr.open("POST", "/br/edu/vianna/ServLet1", true);


    // xhr.onreadystatechange = () => {
    //     if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
    //         document.querySelector(".Result").innerHTML = xhr.responseText;
    //     }
    // }
    // xhr.send(formData)
})
