function wait(ms=0){
return new Promise(resolve=>setTimeout(resolve,ms));
}

function getRandomBetween(min=20,max=100)
{
    return Math.floor(Math.random()*(max-min)+min);
}
// //async for of loop
// async function draw(el)
// {
//     const text=el.textContent;
//     let soFar='';
//     for(const letter of text)
//     {
//         console.log(letter);
//         soFar+=letter;
//         console.log(soFar);
//         el.textContent=soFar;

//         //wait for some amount of time
//         await wait(10);
//         const { typeMin, typeMax } = el.dataset;
//     const amountOfTimeToWait = getRandomBetween();
//     await wait(amountOfTimeToWait);

//     }
// }

//recursion

async function draw(el){
    let index=1;
    const text=el.textContent;
    const { typeMin, typeMax } = el.dataset;
    async function drawLetter()
    {
        el.textContent=text.slice(0,index);
        index+=1;
        //exit condition
        await wait(10);
        if(index<=text.length)
        {
            drawLetter();
        }
    }
    //when this function draw() runs ,kick off drawLetter
    drawLetter();
}


document.querySelectorAll('[data-type]').forEach(draw);