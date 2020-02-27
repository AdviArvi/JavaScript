function ask(options){
    return new Promise(function(resolve)
    {
        //First we need to create a popup with all the fields in it
        const popup=document.createElement('form')
        popup.classList.add("popup");
        popup.insertAdjacentElement(`'afterbegin',
        <fieldset>
            <lable>${options.title}</lable>
        </fieldset>`
        );
        //check if they want cancel button
        if(options.cancel)
        {
            const skipButton=document.createElement('button');
            skipButton.type='button';
            skipButton.textContent='Cancel';
        }
    })
}