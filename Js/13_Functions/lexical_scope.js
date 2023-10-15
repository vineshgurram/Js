// LEXICAL SCOPE
function myOuterFunction(){
  console.log("outer function");
  let outerVar = "value1";

  const myInnerFunction = function(){
    let innerVar = "value2";
    console.log("inner function",outerVar);

    const myInInnerFunction = () =>{
      console.log("inner and inner function",outerVar)
    }
    myInInnerFunction();
  }
  myInnerFunction();
}

myOuterFunction();
