// 1. First class Function 

// ****************Start ***************




 //what is an anonymous function ?(interview Q)
 //What are first class function ? (interview Q)
 // function statement vs expression vs declaration please explain it ? 

 //Function statement :
 function aFunction(){              // this is the way to create a function statement  
                                    // function statement and declaretion are same 

 }

 //Function expression : 
 const aFuncExpression = function (){       // If we assign an anonymous function inside a variable 
                                            //this is the way to create a function expression 
                                            // here function act like a value 
 }

 // so what is the difference between staement and expression ?? 
 // answer : the diffference is in "Hoisting"  



 //Anonymous Function : 
 //function (){   }   // this is the way to create an anonymous function . 
                    // But if we create or use  like this it will gives us an error .

                    //we can use it when we have to passed a function as a value .
                    // we can also use it when we passed a function as an argument . 



//Named Function:

const testFunction = function testIt(){ }  // this is a named function expression 
                                            //at the place of anonymous function if we use 
                                         //a function staement inside varibale . It will be a named functrion 
      // noticeable thing is that if we want to use 'testIt' Function outside the 'testFunction' it will gives us a syntext error . It is just because of SCOPE .                                   


//Some example of First Class Function :
 
//1. function uses as an argument of another function :
function testOneFirstClass(parameterOne){
    console.log(parameterOne) // this console will print function defination  
    console.log(parameterOne()) // this console will call the function that is passed as argument 
}


testOneFirstClass(function(){return 'Hello';})



//2. function returned from an function :
function testTwoFirstClass(parameterTwo){
    return function (){ 'returned function' };
}

console.log(testTwoFirstClass());

//************************************END************************ */

// 2. Higher Order Function 
// 3. Reduce 
// 4. Object loop 

