
function fetchEmployeeDetailsUsingPromise()
{

  const promise=fetch("http://dummy.restapiexample.com/api/v1/employees");
  promise.then(resp=>
    {
     const result= resp.json();
     console.log(result);
     let emp_arr=[];
     result.then(response2=>
        {
     emp_arr.push(response2);  
     console.log(emp_arr);
     console.log(JSON.stringify(emp_arr));

        });
    }).catch(handleError)
}

function handleError(err) 
{
  console.log('Ohh noooo!!');
  console.log(err);
}
