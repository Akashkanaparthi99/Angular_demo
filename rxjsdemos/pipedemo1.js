import { filter, from, Observable } from "rxjs";

const books = [
    {
    title: 'javascript',
    cost: 5000,
    author: 'Swathi'
    },
    {
        title: 'Spring',
        cost: 8000,
        author: 'Madhu'
    },
    {
        title: 'Java',
        cost: 6000,
        author: 'Baba'
    },
    {
        title: 'Secret World',
        cost: 500,
        author: 'Remo'
    }
];

from(books).pipe( filter(x => x.author == 'Baba'))
.subscribe({
    next: data => console.log(data)
})