exports.sumAndCheck =  async (req, res) => {
    let numbers, sum;
   
    try {
        numbers = await req.params.numbers;
        
        sum = arraysSum(numbers.split(","))
        
    } catch (error) {
        res.send({Result:"Something went wrong"})
    }

    res.json({Result: sum, isPrime:isPrime(sum)})
} 

exports.checkPrime = async (req, res) => {
    let number;
    try {
        number = await pareInt(req.params.number);
        
    } catch (error) {
        
    }
    res.send({isPrime: isPrime(number)})
}
 

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