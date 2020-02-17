const shital={
    name: "shital thorat",
    sayHi: function() {
      console.log("Hey shital");
      return "Hey shital";
    }}

const button=document.querySelector('.clickMe');
function handel()
{
    console.log("Great Working")
}
button.addEventListener('click',handel);

//Timer Function

setTimeout(function(){console.log("Done");},1000);