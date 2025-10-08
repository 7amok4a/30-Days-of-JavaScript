/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let x = init ; 
    let object = { 
        increment : () => {
            return ++x  ; 
        } , 
        decrement : () => {
            return --x ; 
        } , 
        reset : () => {
            return x = init ; 
        }


    }

    return object ; 
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
