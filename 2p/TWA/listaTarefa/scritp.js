var input = document.querySelector('input');
var btn = document.querySelector('button');
var ul = document.querySelector('ul');


btn.addEventListener('click',function(event){

    // var li = document.createElement('li');
    console.log(event.targe.id);

    ul.innerHTML+="<li>"+input.value+"</li>";
    
    
    //  ul.appendChild(li);
    //  input.value="";
    

});
