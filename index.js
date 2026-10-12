
console.log(a);
///hoisting
//Global scope
var a=10;
console.log(a);
//let
//block scope
//console.log(b);
//TDZ(Temporal Dead Zone)
let b=20;
console.log(b);
//{
    //var a="Hello";
//console.log(a);
//var b="Hi";
//console.log(b);
//}
//console.log(a);
//console.log(b);
//const c=30;
//console.log(c);
//a();
//1.Named Function
function a(){
    console.log("Hello World 1");
     console.log("Hello World 2");
      console.log("Hello World 3");
       console.log("Hello World 4");

}








{
    Function(){
        console.log("ITFE and CallBack");
    }
}();
{()=>{
    console.log("ITf and CallBack")
}}();
fuction sumofTwo(parameter1=2, para)