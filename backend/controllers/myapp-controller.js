//Takes multiple integers as input, calculates the sum, and returns the sum including information whether the sum is a prime number or not.
exports.sumAndCheck =  async (req, res) => {
    let numbers, sum;
    numbers = await req.params.numbers;    
    sum = arraysSum(numbers.split(","));
    if(checkInput(sum)) {
        res.send({error: "Wrong input"});
        return;
    }
    res.send({result: sum, isPrime:isPrime(sum)});

  
} 


// Takes one integer as input, and returns information whether the sum is a prime number or not.
exports.checkPrime = async (req, res) => {
    let number;
    number = await parseInt(req.params.number);
    if(checkInput(number)) {
        res.send({error: "Wrong input"});
        return;
    }
    res.send({isPrime: isPrime(number)});
}

//Return error for not found endpoints.
exports.notFound = ('*', function(req, res) {
    res.send({error: "Page does not exist"}); 
});

const checkInput = (number) =>{
    if(isNaN(number) || number <= 0){ 
        return true;
    }
    return false;
}
 
//Takes an array and return sum of all integers in the array
const arraysSum = (arr)=>{
    let sum = 0;
    arr.forEach(num => {
        sum += parseInt(num);
    });
    return sum;
}

const isPrime = (num) =>{
    if(num ==1 || num == 2){
        return true;
    } 
    if(num % 2 == 0){
        return false;
    }
    for(let i = 3; i < num/2; i+=2 ){
        if(num % i == 0){
            return false;
        }
    }
    return true;
}