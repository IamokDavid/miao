var iamokdavid = function() {
    function chunk(array, size = 1) {
        let result = []
        for (let i = 0; i < array.length; i += size) {
            result.push(array.slice(i, i + size))
        }
        return result
    }

    function compact(array) {
        let result = []
        for (item of array) {
            item && result.push(item)
        }
        return result
    }

    function difference(array, ...values) {
        function sameValueZero(x, y) {
            if (typeof x === 'number' && typeof y === 'number') {
                return x === y || (x !== x && y !== y)
            }
            return x === y
        }

        let result = []
        let comparison = values.reduce((pv, cur) => pv.concat(cur))
        for (let check_item of array) {
            let include = false
            for (let item of comparison) {
                    sameValueZero(check_item, item) && (include = true)
                }
            !include && result.push(check_item)
        }
        return result
    }

    function differenceBy(array, values, iteratee) {
        function sameValueZero(x, y) {
            if (typeof x === 'number' && typeof y === 'number') {
                return x === y || (x !== x && y !== y)
            }
            return x === y
        }

        function fun() {
            if (typeof iteratee === 'string') {
                return function (value) {
                    return value[iteratee]
                }
            }
            if (typeof iteratee === 'function') {
                return iteratee
            }
        }

        let f = fun()

        let result = []
        for (let check_item of array) {
            let include = false
            for (let item of values) {
                sameValueZero(f(check_item), f(item)) && (include = true)
            }
            !include && result.push(check_item)
        }
        return result
    }

    function differenceWith(array, values, comparator) {
        let result = []
        for (let check_item of array) {
            let include = false
            for (let item of values) {
                comparator(check_item, item) && (include = true)
            }
            !include && result.push(check_item)
        }
        return result
    }

    function drop(array, n = 1) {
        return array.slice(n)
    }

    function dropRight(array, n = 1) {
        n = n > array.length ? array.length : n
        return array.slice(0, array.length - n)
    }

    function dropRightWhile(array, predicate) {
        function fun() {
            if (typeof predicate === 'function') {
                return predicate
            }
            if (typeof predicate === 'string') {
                return function (value) {
                    return value[predicate]
                }
            }
            if (Array.isArray(predicate)) {
                return function (value) {
                    return value[predicate[0]] === predicate[1]
                }
            }
            if (typeof predicate === 'object') {
                return function (value) {
                    let keys = Object.keys(predicate)
                    for (let key of keys) {
                        if (value[key] !== predicate[key]) {
                            return false
                        }
                    }
                    return true
                }
            }
        }

        let f = fun()
        for (let i = array.length - 1; i > -1; i--) {
            if (!f(array[i])) {
                return array.slice(0, i + 1)
            }
        }
        return []
    }



    function dropWhile(array, predicate) {
        function fun() {
            if (typeof predicate === 'function') {
                return predicate
            }
            if (typeof predicate === 'string') {
                return function (value) {
                    return value[predicate]
                }
            }
            if (Array.isArray(predicate)) {
                return function (value) {
                    return value[predicate[0]] === predicate[1]
                }
            }
            if (typeof predicate === 'object') {
                return function (value) {
                    let keys = Object.keys(predicate)
                    for (let key of keys) {
                        if (value[key] !== predicate[key]) {
                            return false
                        }
                    }
                    return true
                }
            }
        }

        let f = fun()
        for (let i = 0; i < array.length; i++) {
            if (!f(array[i])) {
                return array.slice(i)
            }
        }
        return []
    }

    function fill(array, value, start = 0, end = array.length) {
        for (let i = start; i < end; i++) {
            array[i] = value
        }
        return array
    }

    function findIndex(array, predicate, fromIndex = 0) {
        function fun() {
            if (typeof predicate === 'function') {
                return predicate
            }
            if (typeof predicate === 'string') {
                return function (value) {
                    return value[predicate]
                }
            }
            if (Array.isArray(predicate)) {
                return function (value) {
                    return value[predicate[0]] === predicate[1]
                }
            }
            if (typeof predicate === 'object') {
                return function (value) {
                    let keys = Object.keys(predicate)
                    for (let key of keys) {
                        if (value[key] !== predicate[key]) {
                            return false
                        }
                    }
                    return true
                }
            }
        }

        let f = fun()
        for (let i = 0; i < array.length; i++) {
            if (f(array[i])) {
                return i
            }
        }
        return -1
    }

    function findLastIndex(array, predicate, fromIndex = array.length - 1) {
        function fun() {
            if (typeof predicate === 'function') {
                return predicate
            }
            if (typeof predicate === 'string') {
                return function (value) {
                    return value[predicate]
                }
            }
            if (Array.isArray(predicate)) {
                return function (value) {
                    return value[predicate[0]] === predicate[1]
                }
            }
            if (typeof predicate === 'object') {
                return function (value) {
                    let keys = Object.keys(predicate)
                    for (let key of keys) {
                        if (value[key] !== predicate[key]) {
                            return false
                        }
                    }
                    return true
                }
            }
        }

        let f = fun()
        for (let i = fromIndex; i > -1; i--) {
            if (f(array[i])) {
                return i
            }
        }
        return -1
    }

    function flatten(array) {
        let result = []
        for (let item of array) {
            if (Array.isArray(item)) {
                result = result.concat(item)
            } else {
                result.push(item)
            }
        }
        return result
    }

    function flattenDeep(array) {
        let result = []
        for (let item of array) {
            if (!Array.isArray(item)) {
                result.push(item)
            } else {
                result = result.concat(flattenDeep(item))
            }
        }
        return result
    }

    function flattenDepth(array, depth = 1) {
        function rec(array, current_deep) {
            let result = []
            for (let item of array) {
                if (!Array.isArray(item)) {
                    result.push(item)
                } else {
                    if (current_deep !== depth) {
                        result = result.concat(rec(item, current_deep + 1))
                    } else {
                        result.push(item)
                    }
                }
            }
            return result
        }
        return rec(array, 0)
    }

    function fromPairs(pairs) {
        let result = {}
        for (let pair of pairs) {
            result[pair[0]] = pair[1]
        }
        return result
    }

    function head(array) {
        return array[0]
    }

    function indexOf(array, value, fromIndex=0) {
        function sameValueZero(a, b) {
            if (typeof a === 'number' && typeof b === 'number') {
                return a === b || (a !== a && b !== b)
            }
            return a === b
        }
        if (fromIndex >= 0) {
            for (let i = fromIndex; i < array.length; i++) {
                if (sameValueZero(value, array[i])) {
                    return i
                }
            }
        } else {
            fromIndex += array.length
            for (let i = fromIndex; i > -1; i--) {
                if (sameValueZero(value, array[i])) {
                    return i
                }
            }
        }
    }

    function initial(array) {
        return array.slice(0, array.length - 1)
    }

    function intersection(...array) {
        function sameValueZero(a, b) {
            if (typeof a === 'number' && typeof b === 'number') {
                return a === b || (a !== a && b !== b)
            }
            return a === b
        }
        let check_array = array[0].slice()
        let rest_array = array.slice(1).reduce((pv, cur) => pv.concat(cur))
        let result = []
        for (let check_item of  check_array) {
            let include = false
            for (let item of rest_array) {
                if (sameValueZero(check_item, item)) {
                    include = true
                    break
                }
            }
            include && result.push(check_item)
        }
        return result
    }

    function isEqual(a, b) {
        if (typeof a != 'object' && typeof b != 'object') {
            return a === b
        }
        let keys = Object.keys(a)
        for (let key of keys) {
            if (!b[key] || !isEqual(a[key], b[key])) {
                return false
            }
        }
        return true
    }

    return {
        chunk,
        compact,
        difference,
        differenceBy,
        differenceWith,
        drop,
        dropRight,
        dropRightWhile,
        dropWhile,
        fill,
        findIndex,
        findLastIndex,
        flatten,
        flattenDeep,
        flattenDepth,
        fromPairs,
        head,
        indexOf,
        initial,
        intersection
    }
}()