const arr = [1,2,3,4,5];
const sumArray = (numbers) => {
    var sum = 0;
    for(var i of numbers){
        sum += i;
    }
    return sum;
}
const total = sumArray(arr);
console.log(total);