import Rx from 'rxjs/Rx'
import { createSubscriber } from './lib/util'

// const interval$ = Rx.Observable.interval(1000)
//     .take(10)
//     .publish()

// interval$.connect()

// setTimeout(() => {
//     interval$.connect()
// }, 5000)

// setTimeout(() => {
//     interval$.subscribe(createSubscriber('one'))
// }, 1200)

// setTimeout(() => {
//     interval$.subscribe(createSubscriber('two'))
// }, 3200)

// ===============
// const socket = { on: () => {} }

// const chatMessage$ = new Rx.Observable(observer => {
//     console.log('subscripbed')
//     socket.on('chat:message', message => observer.next(message))
// }).publish()

// chatMessage$.connect()

// chatMessage$.subscribe(createSubscriber('one'))
// chatMessage$.subscribe(createSubscriber('two'))

// ===============
const simple$ = new Rx.Observable(observer => {
    observer.next('one')
    observer.next('two')
    observer.next('three')
    observer.complete()

    return () => console.log('Disposed')
})

const published$ = simple$.publishReplay(2).refCount()

const sub1 = published$.subscribe(createSubscriber('one'))
const sub2 = published$.subscribe(createSubscriber('two'))

sub1.unsubscribe()
sub2.unsubscribe()