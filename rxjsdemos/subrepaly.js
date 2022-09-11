import { ReplaySubject } from "rxjs";


const sub1 = new ReplaySubject(2);


console.log(`Sub 1`);
sub1.subscribe({
    next:data =>console.log(data),
    error:err =>console.log(err),
    complete:() => console.log(`Completed`)
})


// this is like a observer
sub1.next('Hello world')
sub1.next('Akash')
sub1.next('Have a nice day')

console.log(`Sub 2`);
sub1.subscribe({
    next:data =>console.log(data),
    error:err =>console.log(err),
    complete:() => console.log(`Completed 2 `)

})

sub1.next('bye');