import Rx from 'rxjs/Rx'
import { createSubscriber } from './lib/util'

// Rx.Observable.range(1, 110)
//     .bufferCount(25)
//     .subscribe(createSubscriber('bufferCount'))

// Rx.Observable.interval(500)
//     .bufferTime(2000)
//     .subscribe(createSubscriber('bufferTime'))

// Rx.Observable.interval(500)
//     .buffer(Rx.Observable.interval(2000))
//     .subscribe(createSubscriber('buffer'))

// const stopSubject$ = new Rx.Subject()
// Rx.Observable.interval(500)
//     .buffer(stopSubject$)
//     .subscribe(createSubscriber('buffer'))

// setTimeout(() => {
//     stopSubject$.next()
// }, 3000)

Rx.Observable.range(1, 10)
    .toArray()
    .subscribe(createSubscriber('range'))

Rx.Observable.range(1, 10)
    .merge(Rx.Observable.range(25,5))
    .toArray()
    .subscribe(createSubscriber('range'))