// Recursion of the Factorial numbers:

// Step: 01(Factorial)
//5! = 1*2*3*4*5
function factorial(num){
    var fact = 1;
    for(var i = 1; i <= num; i++){
        fact = fact * i;
    }
    return fact;
}

// Step: 02(Recursion)
// 5! = 5*4*3*2*1
function factorialRecursive(num){
    if (num == 1) {
        console.log(num);
        return 1;
    }else{
        console.log(num, num - 1);
        return num * factorialRecursive(num - 1);
    }
}

var result = factorialRecursive(5);
console.log('result', result);

// 

