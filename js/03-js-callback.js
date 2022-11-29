
// const fun = (arg) => {
//     console.log(arg.city);
// };

// // fun({city: 'Hyderabad'});

// fun();


// setTimeout(arg1, arg2); // pauses code execution for some time 
// setTimeout(callback Fun, time in ms);
// setTimeout(() => { }, 2000);


// Asynchronous JS - 

// let phonePrice;

// console.log('One');

// setTimeout(() => {
//     phonePrice = 100;
// }, 2000);

// console.log(phonePrice);


// Problem of asynchronous JS 

console.log('Start');

const getPrice = () => {
    return { phonePrice: 100 };
};

const currentPrice = getPrice();

console.log(currentPrice.phonePrice);









