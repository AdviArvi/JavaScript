let button=document.getElementById("submit");
let result=document.getElementById("result");


let odd_even=()=>{
    let n1=document.getElementById('num1').value;

    let modul=ode(n1);
    console.log(modul); 
    console.log(result);
    
    result.innerHTML=`Number ${n1} is ${modul}`;

}
 button.addEventListener('click',odd_even);

 function ode(n1){
    if(n1%2=='0')
    {
        return "even";
    }
    else
    {
        return "odd";
    }
 }


  