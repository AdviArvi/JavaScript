
function fetchEmployeeDetailsUsingCallback(results)
{
  try{
      const result=fetch('http://dummy.restapiexample.com/api/v1/employees')
      .then(function(result) 
      {
      return result.json();
      })
      .then(function(funCallback) 
      {
    
      let emparr=[];
      funCallback.data.map((r)=>emparr.push(r));
      console.log(JSON.stringify(emparr));
      })
     }

catch(e)
    {
      console.log("error");    
    }
}
