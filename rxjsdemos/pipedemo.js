import { interval, map,filter, Observable, of, take,reduce, skip, first, skipLast } from "rxjs";


let obs = interval(1000).pipe(take(10));
obs.subscribe({
    next: (data) => {
        console.log(data);
    }
})

let os = of(1,2,3,4,5,6,7,8).pipe(take(3),map(v=>v*10));
os.subscribe({next: (data) => {console.log(data);}})

// create an observable of string 5 courses and convert them to uppercase and print it
// creat an observable of numbers and print only the even numbers - use filter method


let courses = of("Javascript", "Angular", "Java","Spring", "HTML").subscribe({
    next: (data) => {console.log(data.toUpperCase());}
})

let numbers = of(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17)
.pipe(
    filter(x => x%2 == 0),
    reduce((acc,value) => acc+value,0)
    )
.subscribe({
    next: (data) => {console.log(data)}
})


const fruits = of("apple", "orange", "mango", "pineapple", "pear", "peach", "grapes", "banana", "watermelon");
fruits.pipe(
    filter(fruit => fruit.includes('p')),
    skip(1)
    )
.subscribe({
    next: (data) => {console.log(data);}
})

fruits.pipe(
    // first(2)
    skipLast()
)
.subscribe({next: (data)=> {console.log(data)}})