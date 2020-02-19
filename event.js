console.log("Hi");

const butts=document.querySelector('.butts');
const cool1=document.querySelector('.cool1');

//function
function handel()
{
    console.log("Hi I am Shital");
}

butts.addEventListener('click',handel);

// butts.removeEventListener('click',handel);

//Arrow function
const hoorey=()=>console.log('HOOREY');
cool1.addEventListener('click',hoorey);

//Mutiple buttons
const buyButton=document.querySelectorAll('button.buy');

function buyItem()
{
    console.log("I am item1");
}

// buyButton.forEach(function(buyBut){
//     console.log("Binding the buttons");
//     buyBut.addEventListener('click',buyItem);
// });
function handel(buyBut){
        console.log("Binding the buttons");
      buyBut.addEventListener('click',buyItem);
     };

buyButton.forEach(handel);