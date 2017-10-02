import Rx from 'rxjs/Rx'
import { createSubscriber } from './lib/util' 

// function arrayZip(array1, array2, selector) {
//     const count = Math.min(array1.length, array2.length)
//     const results = [];

//     for (let i = 0; i < count; i++) {
//         const combined = selector(array1[i], array2[i]);
//         results.push(combined)
//     }

//     return results
// }

// const array1 = [23, 35, 43, 67, 78]
// const array2 = [1, 3, 4, 6, 8, 3, 4, 53, 56, 3, 0]

// const results = arrayZip(array1, array2, (letf, right) => left * right)

// console.log(results)

// Rx.Observable.range(1, 10)
//     .zip(Rx.Observable.interval(500), (left, right) => `item: ${left}, at ${right * 500}`)
//     .subscribe(createSubscriber('zip'))

// Rx.Observable.interval(1000)
//     .withLatestFrom(Rx.Observable.interval(500))
//     .subscribe(createSubscriber('withLatestFrom'))

// Rx.Observable.interval(1000)
//     .combineLatest(Rx.Observable.interval(500))
//     .take(3)
//     .subscribe(createSubscriber('combineLatest_1'))

// Rx.Observable.interval(1000)
//     .combineLatest(Rx.Observable.interval(500), (left, right) => left * right)
//     .take(3)
//     .subscribe(createSubscriber('combineLatest_2'))

const currentUser$ = new Rx.BehaviorSubject({ isLoggedIn: false })

Rx.Observable.interval(1000)
    .combineLatest(currentUser$)
    .filter(([i, user]) => user.isLoggedIn)
    .subscribe(createSubscriber('withLatestFrom'))

setTimeout(() => {
    currentUser$.next({ isLoggedIn: true })
}, 5000)