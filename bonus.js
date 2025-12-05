/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let newinit = init;

   return {
       increment: function() {
           return newinit=newinit+=1;
       },
       decrement: function() {

           return newinit=newinit-=1;
       },
       reset: function() {
           return newinit=init;
       }
   };
};


const counter = createCounter(5)
counter.increment(); // 6
counter.reset(); // 5
counter.decrement(); // 4
