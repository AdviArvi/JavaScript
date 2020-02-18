console.log("Hi")
// const pic=document.querySelector('.nice');
// pic.alt="Cute Pup";
// console.log(pic.alt);

// const custom=document.querySelector(".custom");
// console.log(custom.dataset);

// const para=document.createElement('p')

// para.textContent='Hi I am Shital';
// console.log(para);

// const image=document.createElement('img');
// image.src='https://picsum.photos/200';
// image.alt="Very Nice";

// const myDiv=document.createElement('div');
// myDiv.classList.add("wrapper");
// console.log(myDiv);

// document.body.appendChild(myDiv);
// myDiv.appendChild(para);
// myDiv.appendChild(image);

// const heading=document.createElement('h2');
// heading.textContent='cool things';
// myDiv.insertAdjacentElement("afterend",heading);

//create unordered list

const list=document.createElement('ul');
const li=document.createElement('li');
li.textContent='Three';
list.append(li);

document.body.insertAdjacentElement('afterbegin', list);

const li5=document.createElement('li');
li5.textContent='Five';
list.append(li5);

const li1=li5.cloneNode(true);
li1.textContent='One';
list.insertAdjacentElement('afterbegin', li1);

const li4=document.createElement('li');
li4.textContent='Four';
li5.insertAdjacentElement("beforebegin",li4);

const li2=document.createElement('li');
li2.textContent='Two';
li1.insertAdjacentElement('afterend',li2);





