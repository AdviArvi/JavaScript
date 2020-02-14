function cal(){
    console.log("Hi how are you");

    const a=101+20;
    console.log(a);//It will give answer 121
    
}

cal();
console.log(a);//It will show undefined as const is blocked scope


//So we have to return the result and store in other variable


function cal2()
{
    const b=3213/20;
    return b;
}

const bb=cal2();
// console.log(bb);//Now we can get the result

console.log(`Your result is $${bb}`);





