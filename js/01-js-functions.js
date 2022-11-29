
// let anyVar; // undefined 
// console.log(typeof (anyVar));
// console.log(anyVar);

// anyVar = 10; // number 
// console.log(typeof (anyVar));
// console.log(anyVar);

// anyVar = 'abc'; // string 
// console.log(typeof (anyVar));
// console.log(anyVar);


// const someFun = (arg) => {
//     let output = arg + 10;
//     console.log(output)
// };

// someFun(10);

// number, string, boolean, array, object, function   

// const someFun = (arg) => { 
//     let output = arg + 10;
//     console.log(output)
// };

// someFun(10);

// let num = 15;
// someFun(num);


// const someFun = (arg) => {
//     console.log('someFun called');
//     arg();
// };

// const anotherFun = () => {
//     console.log('anotherFun called');
// };

// // call 1 - using named function 
// someFun(anotherFun);

// // call 2 - using anonymous function 
// someFun(() => { 
//     console.log(`yet another function called`);
// });

const funWithCallBack = (callBack) => {
    console.log('funWithCallBack called');
    callBack(10); // callback
};

// callback function 
const callBackFun = (abc) => {
    console.log('callBackFun called');
    console.log(abc);
};

funWithCallBack(callBackFun);

// use this as standard ->

funWithCallBack((abc) => {
    console.log('callBackFun called');
    console.log(abc);
});

// In JS a function can take another function as argument.
// that another function is called as callback function.
// generally, in argument an anonymous function is passed as callback function.


