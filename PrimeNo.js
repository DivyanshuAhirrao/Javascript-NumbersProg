
let div = document.getElementById('info');


function primeNo() {
  let num = parseInt(prompt('Enter the Positive number : '));

  if(num == 1 ){
    document.write('1 is not a Prime number nor a composite number.');
  }
  else if(num > 1) {

    let isPrime = true;

    for (let i=2;i<num;i++) {
        if(num%i==0){
            isPrime = false;
            break;
        }
    }

    if(isPrime) {
        div.innerHTML += `${num} is a Prime Number !`
    }

    else{
        div.innerHTML += `${num} is not a Prime Number !`
    }   
  }
}


function fibonacci() {
    let num = parseInt(prompt('Enter the max limit Number for your fibonacci series !!'));
    let a=0, b=1;
    let fn = a+b;
    div.innerHTML += `Fibonacci Series is :- <br>`
    div.innerHTML += `${a} `
    while(fn<=num){
        div.innerHTML += `${fn} `
        fn=a+b;
        a=b;
        b=fn;
    }

}

function armstrongNo(){
    let num = parseInt(prompt('Enter the positive Number !!'));
    var sum = 0;
    var tempNum = num;
    while(tempNum>0) {
        let y =  tempNum%10;
        
        sum += y**3;
        tempNum = parseInt(tempNum/10);
    }
    if(num == sum){
       div.innerHTML += `${num} is a Armstrong Number`
    }
    else{
        div.innerHTML += `${num} is not a Armstrong Number`
    }
}

function reverseNo(){
    let str = parseInt(prompt("Enter any number to find its reversed no."));
    
    let join = 0;
    let rev = str;
    let y;

    while(rev > 0){
        y = rev%10;
        join = (join*10)+y;
        rev = parseInt(rev/10);
    }

    div.innerHTML += `Reverse of ${str} is :- ${join}`;
    
}

function pallindrome(){
    let str = parseInt(prompt("Enter any number to find Pallindrome no."));
    
    let join = 0;
    let rev = str;
    let y;

    while(rev > 0){
        y = rev%10;
        debugger;
        join = (join*10)+y;
        rev = parseInt(rev/10);
    }
    if(str == join) { 
       div.innerHTML += `${str} is a Pallindrome Number`;
    }
    else {
        div.innerHTML += `${str} is not a Pallindrome Number`;
    }
}