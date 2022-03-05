//Takes multiple integers as input, calculates the sum, and returns the sum including information whether the sum is a prime number or not.
exports.sumAndCheck =  async (req, res) => {
    let numbers, sum;
    numbers = await req.params.numbers;    
    sum = arraysSum(numbers.split(","))
    if(isNaN(sum) || sum <= 0){
        res.send({Result: "Wrong input"})
        return
    }
    res.send({Result: sum, isPrime:isPrime(sum)})

  
} 


// Takes one integer as input, and returns information whether the sum is a prime number or not.
exports.checkPrime = async (req, res) => {
    let number;
    number = await parseInt(req.params.number);
    if(isNaN(number) || number <= 0){
        res.send({Result: "Wrong input"}); 
        return
    }
    res.send({isPrime: isPrime(number)})
}

//Return error for not found endpoints.
exports.notFound = ('*', function(req, res) {
    res.send({Error: "Page does not exist"})
  });
 
//Takes an array and return sum of all integers in the array
const arraysSum = (arr)=>{
    let sum = 0;
    arr.forEach(num => {
        sum += parseInt(num)
    });
    return sum;
}

//Checks is an integer prime number or not.
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