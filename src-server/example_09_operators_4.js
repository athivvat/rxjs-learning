import Rx from 'rxjs/Rx'
import { createSubscriber } from './lib/util'

// function arrayReduce(array, accumulator, startValue) {
//     let value = startValue 
//     for (let item of array) {
//         value = accumulator(value, item)
//     }

//     return value;
// }

// const values = [451, 232, 333, 52, 62, 356]
// const sum = arrayReduce(values, (acc, i) => acc + i, 0)
// console.log(sum)

// const max = arrayReduce(
//     values,
//     function (acc, value) {
//         if (value > acc)
//             return value
        
//         return acc
//     },
//     -1
// )

// const max2 = arrayReduce(values, Math.max, -1)

// console.log(max)
// console.log(max2)

Rx.Observable.range(1, 10)
    .reduce((acc, value) => acc + value)
    .subscribe(createSubscriber('reduce'))

Rx.Observable.range(1, 10)
    .scan((acc, value) => acc + value)
    .subscribe(createSubscriber('scan_1'))

Rx.Observable.range(1, 10)
    .map(i => i * i)
    .scan(([last, _], current) => [current, last], [])
    .subscribe(createSubscriber('scan_2'))
