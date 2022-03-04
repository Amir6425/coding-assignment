//Takes params and return sum of numbers and true/flase for isPrime(sum).
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


//Takse parmas and return true/false for isPrami(number).
exports.checkPrime = async (req, res) => {
    let number;
    number = await parseInt(req.params.number);
    if(isNaN(number) || number <= 0){
        res.send({Result: "Wrong input"}); 
        return
    }
    res.send({isPrime: isPrime(number)})
}


exports.notFound = ('*', function(req, res) {
    res.send({Error: "Page does not exist"})
  });
 

const arraysSum = (arr)=>{
    let sum = 0;
    arr.forEach(num => {
        sum += parseInt(num)
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