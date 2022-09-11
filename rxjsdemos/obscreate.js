import { Observable } from "rxjs";


let obs2 = new Observable((subscribe)=>{
    console.log(`Welcome`);
    subscribe.next("apple");
    subscribe.next("orange");
    setTimeout(()=>subscribe.next("blueberry"),5000);
    subscribe.next("kiwi");
    // subscribe.error(new Error());
    subscribe.next("grapes");
    subscribe.next("banana");
    setTimeout(()=>{
        console.log(`Waiting....`);
        subscribe.next("kacha badham");
        console.log(`leaving.....`);
    },3000)
    // subscribe.complete();
    subscribe.next("watermelon");
    console.log(`Fruits...`);
});
console.log(`Hello....`);
obs2.subscribe({
    next:(data)=>{console.log(`inside next`);console.log(data);},
    error:(error)=>console.log(error),
    complete:()=>console.log(`Completed...`)
})