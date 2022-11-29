
const myStuff = [10, 20, 25.5, 'abc', false];

console.log('show array elements using for of loop:');
for (const elem of myStuff) {
    console.log(elem);
}

console.log('show array indices using for in loop:');
for (const elem in myStuff) {
    console.log(elem);
}

