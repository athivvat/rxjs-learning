import Rx from 'rxjs/Rx'
import { createSubscriber } from './lib/util'

Rx.Observable.interval(500)
    .take(5)
    .subscribe(createSubscriber("interval"))

Rx.Observable.timer(1000, 500)
    .take(3)
    .subscribe(createSubscriber("timer"))

Rx.Observable.of("hello, world", 42, "whao")
    .subscribe(createSubscriber("of"))

Rx.Observable.from(["this array", "hey"])
    .subscribe(createSubscriber("from"))

Rx.Observable.throw(new Error("Hey"))
    .subscribe(createSubscriber("error"))

Rx.Observable.throw(3423423434)
    .subscribe(createSubscriber("error"))

Rx.Observable.empty()
    .subscribe(createSubscriber("empty"))

let sideEffect = 0;
const defer$ = Rx.Observable.defer(() => {
    sideEffect++;
    return Rx.Observable.of(sideEffect);
})

defer$.subscribe(createSubscriber("derfer$.one"))
defer$.subscribe(createSubscriber("derfer$.two"))
defer$.subscribe(createSubscriber("derfer$.three"))

Rx.Observable.never()
    .subscribe(createSubscriber("never"))

Rx.Observable.range(10, 30)
    .subscribe(createSubscriber("range"))