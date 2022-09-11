import { AsyncSubject } from "rxjs";


const sub1 = new AsyncSubject();


console.log(`Sub 1`);
sub1.subscribe({
    next:data =>console.log(data),
    error:err =>console.log(err),
    complete:() => console.log(`Completed`)
})


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
sub1.complete();