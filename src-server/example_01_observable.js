import Rx from 'rxjs/Rx'
import { createSubscriber } from './lib/util'
// --------------------
// Part 1
// const simple$ = new Rx.Observable(observer => {
//     console.log('Generating obserable')
//     observer.next('An item')
//     setTimeout(() => {
//         observer.next('Another item')
//         observer.complete()
//     }, 1000)
// })

// const error$ = new Rx.Observable(observer => {
//     observer.error(new Error('STUFF'));
// })

// simple$.subscribe(
//     item => console.log(`one.next ${item}`), // next
//     error => console.log(`one.error ${error}`), // error
//     () => console.log("one.complete")); // complete

// error$.subscribe(
//     item => console.log(`one.next ${item}`), // next
//     error => console.log(`one.error ${error.stack}`), // error
//     () => console.log("one.complete")); // complete
    

// setTimeout(() => {
//     simple$.subscribe({
//         next: item => console.log(`two.next ${item}`),
//         error(error) {
//             console.log(`two.error ${error}`)
//         },
//         complete: function() {
//             console.log('two.complete')
//         }
//     })
// });

// --------------------
// Part 2
export function createInterval$(time) {
    return new Rx.Observable(observer => {
        let index = 0;
        let interval = setInterval(() => {
            console.log(`Generating ${index}`)
            observer.next(index++)
        }, time)

        return () => {
            clearInterval(interval)
        }
    })
}

function take$(sourceOubscription$, amount) {
    return new Rx.Observable(observer => {
        let count = 0
        const subscription = sourceOubscription$.subscribe({
            next(item) {
                observer.next(item)
                if (++count >= amount)
                    observer.complete()
            },
            error(error) { observer.error(error) },
            complete() { observer.complete() }
        })

        return () => subscription.unsubscribe()
    })
}

const everySecond$ = createInterval$(1000);
const firstFiveSeconds$ = take$(everySecond$, 5);
const subscriptionOne = firstFiveSeconds$.subscribe(createSubscriber("two"))

// const subscriptionTwo = everySecond$.take(3).subscribe(createSubscriber("one"))

// setTimeout(() => {
//     subscription.unsubscribe();
// }, 3000)