/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    let db = new Map() ; 
    return function(...args) { 
        let key = args.join('.')  ; 
        if (db.has(key)) {
            return db.get(key) ; 
        }
        const ans =  fn(...args) ; 
        db.set(key , ans) ; 
        return ans ;  
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */
