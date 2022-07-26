

let age:number;

age = 18;

let names: string[];

names = ['1','2', '3']


let sports:{name: string, place: string, amount: number[]}[]

sports = [{name: 'football', place: 'indoor & outdoor', amount: [5, 7, 11]}]


type arr = {
cay: string,
cao: number
};


let ten:arr[];

ten = [{cay: 'asd', cao: 9}]


function addd(a:number, b:number) {
  return a + b;
}

function insertt<T>(arr: T[], value: T) {
  return [value, ...arr]
}

const arrr = [1, 2, 3, 'string', true]

const udArr = insertt(arrr, false)