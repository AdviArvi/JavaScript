const shital=document.querySelector('.shital');

shital.addEventListener('click',function(event){
    console.log('You Clicked It');
    event.preventDefault();
    const shouldChangePage=confirm('This is not valid website, do you want to proceed?');
    
    
    if(shouldChangePage){
        window.location=event.currentTarget.href;
    }
    console.log(shouldChangePage);
});

const signupForm=document.querySelector('[name="signup');

signupForm.addEventListener('submit',function(event)
{
    console.log(event);
    
    const name=event.currentTarget.name.value;
    if(name.includes('chad'))
    {
        alert('Sorry Bro');
        event.preventDefault();
    }
});

function logEvent(event){
    console.log(event.type);
    console.log(event.currentTarget.value);
}
signupForm.name.addEventListener('keyup',logEvent);
signupForm.name.addEventListener('keydown',logEvent);
