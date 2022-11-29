
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


const someFun = (arg) => {
    console.log('someFun called');
    arg();
};

const anotherFun = () => {
    console.log('anotherFun called');
};

someFun(anotherFun);




