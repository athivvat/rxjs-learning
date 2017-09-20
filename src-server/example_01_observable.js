import Rx from 'rxjs/Rx'
// --------------------
// Part 1
const simple$ = new Rx.Observable(observer => {
    console.log('Generating obserable')
    observer.next('An item')
    setTimeout(() => {
        observer.next('Another item')
        observer.complete()
    }, 1000)
})

const error$ = new Rx.Observable(observer => {
    observer.error(new Error('STUFF'));
})

simple$.subscribe(
    item => console.log(`one.next ${item}`), // next
    error => console.log(`one.error ${error}`), // error
    () => console.log("one.complete")); // complete

error$.subscribe(
    item => console.log(`one.next ${item}`), // next
    error => console.log(`one.error ${error.stack}`), // error
    () => console.log("one.complete")); // complete
    

setTimeout(() => {
    simple$.subscribe({
        next: item => console.log(`two.next ${item}`),
        error(error) {
            console.log(`two.error ${error}`)
        },
        complete: function() {
            console.log('two.complete')
        }
    })
});