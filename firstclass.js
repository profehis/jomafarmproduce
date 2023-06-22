console.log("JOMA")
const y=2
const x= "boris johnson"
const w= false
let f;
let s = null

//const x=5
//console.log("type of W =", typeof y )
//console.log("type of F =", typeof F )
//console.log("type of S=", typeof w )


let dob = document.getElementById ('dob').value = "2023-02-02" 
//primitive data types
//Number
//String
//Boolean
//null

Array
let myArr =["john ", "joe" , "mary", 2, 4.]
console.log(myArr[2])
console.log(myArr[myArr.length-1])
//document.querySelector('dob').value="2023-02-02".
//unshift array method 
console.log(myArr)

//myArr.unshift('JOY')
//console.log(myArr)

console.log(['joy',...myArr,'joy'])
//function display() {}
const cities =["benin", "delta", "ondo", "lagos", "abuja"]
console.log("before silicing", cities)
const newcities = cities.slice(2)
console.log("after slicing", newcities)

const startEndOption =  cities.slice(2, 4)
console.log("start and end option", startEndOption)

//slice()array method 
const month = ['jan',  'march', 'april' , 'june']
console.log.apply("original array", month)
 month.slice(1,0, "feb")
 console.log("splice with three param", month)
 month.splice(4,0,"may")
console.log("adding may", month)


//looping through an arry
const  Numbers= [1,,2,3,4,5,6,7,8,9,10]


for(let i=0; i<Number.length; i++) {
    if(Numbers [i] % 3===0){

        console.log(number[i])

    }
}


const myString= "patience"
//console.log( myString.toUpperCase())

function addition(){
    let addNum= 4+3
    return addNum
}