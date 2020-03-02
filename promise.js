
function fetchEmployeeDetailsUsingPromise()
{

  const emp_details=fetch("http://dummy.restapiexample.com/api/v1/employees");
  emp_details.then(response=>
    {
     const result= response.json();
     console.log(result);
     let emp_arr=[];
     result.then(data=>
        {
     emp_arr.push(data);  
     
     console.log(JSON.stringify(emp_arr));

        });
    }).catch(handleError)
}

function handleError(err) 
{
  console.log('Ohh noooo!!');
  console.log(err);
}
