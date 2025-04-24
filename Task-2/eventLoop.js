//gets sync executed first
console.log('1: Sync start');

//setTimeout will get into the macrotask queue continue reading
setTimeout(() => {
  console.log('2: setTimeout 0ms');
}, 0);

//promise gets into the microtask queue continue reading
Promise.resolve().then(() => {
  console.log('3: Promise.then');
});

//IIFE will be invoked immediately, after that the console log gets executed and await gets into the microtask queue exiting the async continue reading
(async () => {
  console.log('4: async function start');
  await null;
  console.log('5: async after await');
})();

//setTimeout will get into the macrotask queue continue reading
setTimeout(() => {
  console.log('6: setTimeout 100ms');
}, 100);

//gets sync executed second
console.log('7: Sync end');

//At the moment 3 console logs executed
//Macro Task order: first timeout, second timeout
//Micro Task order: first promise, async code after await

//Final order:
//sync console 1
//sync console of the async function until await 4
//sync console 7
//first promise console 3
//async code after await 5
//first timeout 0ms 2
//second timeout 100ms 6
