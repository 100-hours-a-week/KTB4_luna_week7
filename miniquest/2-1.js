const arr = [1,2,3,4,5];

const sum = arr.reduce((total, number)=> {
    return total + number;
}, 0);

console.log(sum);