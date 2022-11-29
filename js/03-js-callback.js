
// const fun = (arg) => {
//     console.log(arg.city);
// };

// fun({city: 'Hyderabad'});

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
// --------------------------

// console.log('Start');

// const getPrice = () => {
//     setTimeout(() => {
//         return { phonePrice: 100 };
//     }, 2000);
// };

// const currentPrice = getPrice();

// console.log(currentPrice.phonePrice);

// TypeError: Cannot read properties of undefined (reading 'phonePrice')


// Solution 1 : callback function 
// ------------------------------


console.log('Start');

const getPrice = (arg) => {
    console.log('getPrice called');
    setTimeout(() => {
        arg({ phonePrice: 100 });
    }, 2000);
};

getPrice((abc) => {
    console.log(abc.phonePrice);
});
