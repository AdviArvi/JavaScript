
function fetchEmployeeDetails(results)
{
  try{
      const response=fetch('http://dummy.restapiexample.com/api/v1/employees')
      .then(function(response) 
      {
      return response.json();
      })
      .then(function(myJson) 
      {
    
      let emparr=[];
      myJson.data.map((r)=>emparr.push(r));
      console.log(JSON.stringify(emparr));
      })
     }

catch(e)
    {
      console.log("error");    
    }
}
