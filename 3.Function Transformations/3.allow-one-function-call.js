/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let  flaged = 0 ; 
    let ans = 0 ; 
    return function(...args){
        if (!flaged) {
            ans = fn(...args)  ; 
            flaged = 1 ; 
            return ans ; 
        }

        return undefined ; 
            
        

    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
