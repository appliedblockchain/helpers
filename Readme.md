## Summary

No dependency, single file helpers. Skewed towards ethereum.

## Usage

    npm i @appliedblockchain/helpers

## Api

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

#### Table of Contents

-   [addressOfPrivateKey](#addressofprivatekey)
    -   [Parameters](#parameters)
-   [addressOfPublicKey](#addressofpublickey)
    -   [Parameters](#parameters-1)
-   [blockHashOf](#blockhashof)
    -   [Parameters](#parameters-2)
-   [booleanOfString](#booleanofstring)
    -   [Parameters](#parameters-3)
-   [bufferOfHexOrHex0x](#bufferofhexorhex0x)
    -   [Parameters](#parameters-4)
-   [catchOf](#catchof)
    -   [Parameters](#parameters-5)
-   [defaultCmp](#defaultcmp)
    -   [Parameters](#parameters-6)
-   [eachPromise](#eachpromise)
    -   [Parameters](#parameters-7)
-   [eventuallyTrue](#eventuallytrue)
    -   [Parameters](#parameters-8)
-   [flagOfBoolean](#flagofboolean)
    -   [Parameters](#parameters-9)
    -   [Examples](#examples)
-   [heightOf](#heightof)
    -   [Parameters](#parameters-10)
-   [hex0xOfNumber](#hex0xofnumber)
    -   [Parameters](#parameters-11)
-   [isLikeDateString](#islikedatestring)
    -   [Parameters](#parameters-12)
-   [isPending](#ispending)
    -   [Parameters](#parameters-13)
-   [isSafeNonNegative](#issafenonnegative)
    -   [Parameters](#parameters-14)
-   [isSafePositive](#issafepositive)
    -   [Parameters](#parameters-15)
-   [makeRetrace](#makeretrace)
-   [noop](#noop)
-   [randomUint32](#randomuint32)
-   [shSync](#shsync)
    -   [Parameters](#parameters-16)
-   [sortedDifference](#sorteddifference)
    -   [Parameters](#parameters-17)
-   [sortedIntersection](#sortedintersection)
    -   [Parameters](#parameters-18)
-   [defaultTimeout](#defaulttimeout)
-   [spread](#spread)
    -   [Parameters](#parameters-19)
-   [stopOfMonitor](#stopofmonitor)
    -   [Parameters](#parameters-20)

### addressOfPrivateKey

#### Parameters

-   `privateKey` **[Buffer](https://nodejs.org/api/buffer.html)** 

Returns **[Buffer](https://nodejs.org/api/buffer.html)** ethereum address of provided `privateKey`.

### addressOfPublicKey

Returns ethereum address of provided public key.

#### Parameters

-   `publicKey` **[Buffer](https://nodejs.org/api/buffer.html)** 

Returns **[Buffer](https://nodejs.org/api/buffer.html)** 

### blockHashOf

#### Parameters

-   `url` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 
-   `blockNumberOrTag` **(`"earliest"` \| `"latest"` \| `"pending"` \| [number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number))**  (optional, default `'latest'`)
-   `timeout` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)**  (optional, default `defaultTiemout`)

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?>** block hash as hex0x string or null from provided ethereum jsonrpc endpoint `url` in specified `timeout`; `null` if timeout has been reached.

### booleanOfString

Parses string and returns `true` for `"true"`, `"on"`, `"yes"` and `"1"` strings, `false` otherwise.

#### Parameters

-   `value` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 

Returns **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

### bufferOfHexOrHex0x

Returns `Buffer` representation of provided hex (ie. `"ff"`) or hex0x (ie. `"0xff"`) string.

#### Parameters

-   `value` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 


-   Throws **any** TypeError On invalid input.

### catchOf

#### Parameters

-   `message` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 
-   `result` **T** 

Returns **function (error: [Error](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error)): T** 

### defaultCmp

-   **See: <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#Description>**

Default comparision function.

#### Parameters

-   `x` **any** 
-   `y` **any** 

Returns **(`-1` \| `0` \| `1`)** 

### eachPromise

Similar to `Promise.all` but yields after each promise settlement.
Exceptions are captured and results are yielded as `[ err, result, i ]` tuple.

#### Parameters

-   `promises` **[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;T>>** 

Returns **AsyncGenerator&lt;\[[Error](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error)?, T?, [number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)], any, any>** 

### eventuallyTrue

Retries up to `n` times (roughtly seconds) call to `f` waiting for `true` result, which breaks the loop and returns
`true`. If `f` didn't return `true` throws last result value.

#### Parameters

-   `f` **function (): [Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;R>** 
-   `n` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)**  (optional, default `30`)

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;(`true` | R)>** 

### flagOfBoolean

Returns boolean value of command line argument.

#### Parameters

-   `name` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 

#### Examples

```javascript
const flagOfBoolean = require('@appliedblockchain/helpers/flag-of-boolean')
console.log(flagOfBoolean('--bar'))
// node foo.js
// false
// node foo.js --bar
// true
```

### heightOf

#### Parameters

-   `url` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 
-   `timeout` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)**  (optional, default `defaultTiemout`)

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)>** Height of the chain from provided ethereum jsonrpc endpoint `url` or `NaN` if timeout has been reached or any other problem occured.

### hex0xOfNumber

#### Parameters

-   `value` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** 

Returns **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 0x-prefixed hex string representation of a safe, non-negative integer number.

### isLikeDateString

Checks if `value` looks like `YYYY-MM-DD` date string.

#### Parameters

-   `value` **any** 

Returns **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

### isPending

Returns `true` if promise has not settled yet, `false` otherwise.

#### Parameters

-   `value` **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;any>** 

Returns **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

### isSafeNonNegative

Returns `true` if value is safe integer greater than or equal to zero, `false` otherwise.

#### Parameters

-   `value` **any** 

Returns **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

### isSafePositive

#### Parameters

-   `value` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** 

Returns **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** `true` if value is safe integer greater than zero, `false` otherwise.

### makeRetrace

Captures extra stack trace, usage `await foo().catch(makeRetrace())`.
`err` argument is being modified with new stack value.

### noop

Identity function.

### randomUint32

Returns **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** random unsigned integer that fits 32 bits.

### shSync

Executes simple shell command.

#### Parameters

-   `cmd` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 
-   `$1` **any**  (optional, default `{}`)
    -   `$1.trim`   (optional, default `true`)

### sortedDifference

Computes xs - ys difference in linear time between two, unique, ascending arrays of values.
Comparision function can be flipped for descending arrays.
Leaks values of arrays in thrown error.

#### Parameters

-   `xs` **[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;T>** 
-   `ys` **[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;T>** 
-   `cmp` **function (T, T): (`-1` \| `0` \| `1`)**  (optional, default `defaultCmp`)

Returns **[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;T>** 

### sortedIntersection

Computes intersection in linear time between two, unique, ascending arrays of values.
Comparision function can be flipped for descending arrays.
Leaks values of arrays in thrown error.

#### Parameters

-   `xs` **[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;T>** 
-   `ys` **[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;T>** 
-   `cmp` **function (T, T): (`-1` \| `0` \| `1`)**  (optional, default `defaultCmp`)

Returns **[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;T>** 

### defaultTimeout

Expire cached nonces after 1 minute.

### spread

Spread `n` calls to `f` function `ms` milliseconds apart.

#### Parameters

-   `n` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** 
-   `ms` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** 
-   `f` **function (): [Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;any>** 

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;any>>** 

### stopOfMonitor

Creates monitor similar to `setInterval` but allows single execution at a time only. Concurrent invocation attempts
are ignored.

#### Parameters

-   `f` **function (): [Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;any>** 
-   `milliseconds` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)**  (optional, default `1*1000`)

Returns **any** stop function.

## License

MIT License

Copyright 2019 Applied Blockchain

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
