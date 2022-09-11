import { BehaviorSubject, Observable, Subject } from "rxjs";

// // this i s an obsevable
// const obs = new Observable(
//     (subscriber)=>{
//         subscriber.next(200);
//         subscriber.next(300);
//         subscriber.next(400);
//         subscriber.next(500);
//     }
// )

// // subscribe to an observable
// // observer object has next , error , and complete
// obs.subscribe(
//     {
//         next:data => console.log(data)
//     }
// )

// // this ia like an Observable
// const sub = new Subject()


// console.log(`Sub 1`);
// sub.subscribe({
//     next:data =>console.log(data)
// })


// // this is like a observer
// sub.next('Hello world')
// sub.next('Have a nice day')

// console.log(`Sub 2`);
// sub.subscribe({
//     next:data =>console.log(data)
// })



const sub1 = new BehaviorSubject('Hop');


console.log(`Sub 1`);
sub1.subscribe({
    next:data =>console.log(data),
    complete:() => console.log(`Completed`)
})


// this is like a observer
sub1.next('Hello world')
sub1.complete();
sub1.next('Have a nice day')

console.log(`Sub 2`);
sub1.subscribe({
    next:data =>console.log(data),
    complete:() => console.log(`Completed 2 `)

})

sub1.next('bye');