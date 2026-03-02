function outerfunction(){
    function innerfunction(){
        console.log('This is the inner function')
    }
    return innerfunction;
}

const output = outerfunction();
output();
console.log(output)

function counter(owner){
    let count = 0;
    function increment(){
        count=count+1;
        console.log('value of count', owner, count);
        // count++;
    }
    return increment;
}

const count1 = counter('rahim');
// console.log(count1)
// count1();
count1();
count1();
count1();