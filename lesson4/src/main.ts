// Type Aliases 
type stringOrNumber = string | number

type stringOrNumberArray = (string | number)[]

type Guitarist = {
    name?: string,
    active: boolean,
    albums: stringOrNumberArray
}

type UserId = stringOrNumber

// Literal types
let myName: 'Dave'

let userName: 'Dave' | 'John' | 'Amy'
userName = 'Amy'

// Functions

const add =(num1:number,num2:number):number=>{
    return num1+num2
}

const messagePrint=(message:any):void=>{
    console.log(message);
}

