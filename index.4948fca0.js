!function(){function e(e,r,n,t){Object.defineProperty(e,r,{get:n,set:t,enumerable:!0,configurable:!0})}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=r.parcelRequireabb0;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var r=t[e];delete t[e];var o={id:e,exports:{}};return n[e]=o,r.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,r){t[e]=r},r.parcelRequireabb0=o),o.register("eWrZJ",(function(r,n){e(r.exports,"fetchBreeds",(function(){return i})),e(r.exports,"fetchCatByBreed",(function(){return a}));var t="live_7fYGs8U6VUkhmH1EqJASCr4Nmw0HkzTBzlgKAS2FSbzKYbdew6oxdDDr9DQgAfwP",o="https://api.thecatapi.com/v1";function i(){return fetch("".concat(o,"/breeds"),{headers:{"x-api-key":t}}).then((function(e){if(!e.ok)throw new Error("Oops! Something went wrong! Try reloading the page!");return e.json()}))}function a(e){return fetch("".concat(o,"/images/search?breed_id=").concat(e),{headers:{"x-api-key":t}}).then((function(e){if(!e.ok)throw new Error("Oops! Something went wrong! Try reloading the page!");return e.json()}))}})),o("eWrZJ")}();
//# sourceMappingURL=index.4948fca0.js.map
