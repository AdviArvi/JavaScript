

function sub() {
        const n1 = parseInt(document.getElementById("num1").value);
        console.log(n1);
        const n2 = parseInt(document.getElementById("num2").value);
        console.log(n2);
        const oper = document.getElementById("operator").value;
        if(isNaN(n1)||isNaN(n2))
        {
          alert("Enter valid number")
        }

        else if (oper === "+") {
          document.getElementById("result").value = n1 + n2;
          console.log(n1+n2);
        } else if (oper === "-") {
          document.getElementById("result").value = n1 - n2;
          console.log(n1-n2);
        } else if (oper === "/") {

          if(n2=='0'&& n1=='0'||n2=='0')
          {
            alert("Unable to divide");
          }
          else
          {
          document.getElementById("result").value = n1 / n2;
          console.log(n1/n2);
          }
        } 
        else if (oper === "*") {
          document.getElementById("result").value = n1 * n2;
          console.log(n1*n2);
        }
        else if(oper==='%'){
            document.getElementById("result").value = n1 % n2;
            document.write("The modulus of " +n1+ " and " +n2+ " is " +n1%n2);
            
        }
      }
    
