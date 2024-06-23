const product = {
    name : "ball Pen",
    rating : 3,
    offer : 2,
    price : 300,

};
console.log(product)

const profile = {
    username : "sohail",
    isfollow : false , 
    followers : 500,
    following : 300 , 
    ismessage : true,


};
console.log(typeof profile)







const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Enter Your Name: ', (input) => {
    console.log(`Your Name is : ${input}`);
    rl.close();
});
//const score = prompt ("enter your score")
//console.log(score)
let score = 100

if (score>=90 && score<=100)
    console.log("grade A")
else if (score<=89 && score>=70)
    console.log("grade B")
else if (score<=69 && score>=40)
    console.log("grade C")
else if (score > 100)
    console.log("invalid score")
else {
    console.log("fail")
}
