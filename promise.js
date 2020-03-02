
function testPromise()
{

  const Promise=fetch("http://dummy.restapiexample.com/api/v1/employees");
  Promise.then(response=>
    {
     const data= response.json();
     console.log(data);
     let emp_arr=[];
     data.then(response2=>
        {
     emp_arr.push(response2);  
     console.log(emp_arr);

        });
    }).catch(handleError)
}

function handleError(err) 
{
  console.log('Ohh noooo!!');
  console.log(err);
}
