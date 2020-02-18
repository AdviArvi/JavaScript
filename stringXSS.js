console.log("it works")
const item=document.querySelector('.item');

const width=500;
const src='https://picsum.photos/200';
const desc='Cute Pup';

const myHTML=`
<div class='wrapper'>
<h2>Cute ${desc}</h2>
<img src="${src}" alt="${desc}"/>
</div>
`;
// console.log(typeof myHTML);

// item.innerHTML=myHTML;
// console.log(item.innerHTML);

// const itemImage=document.querySelector('.wrapper img');

// console.log(itemImage);

// Turning string into a DOM element
const myFragment=document.createRange().createContextualFragment(myHTML);
console.log(myFragment);
document.body.appendChild(myFragment);


