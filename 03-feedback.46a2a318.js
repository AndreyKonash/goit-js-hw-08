!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in a)return a[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return a[e]=o,t.call(o.exports,o,o.exports),o.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o);var r=o("1WSnx"),l={form:document.querySelector(".feedback-form"),emailInput:document.querySelector('input[name="email"]'),messageInput:document.querySelector('textarea[name="message"]')};l.form.addEventListener("input",e(r).throttle((function(){var e={email:l.emailInput.value,message:l.messageInput.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500)),document.addEventListener("DOMContentLoaded",(function(){var e=JSON.parse(localStorage.getItem("feedback-form-state"));e&&l.emailInput&&l.messageInput&&(l.emailInput.value=e.email,l.messageInput.value=e.message)})),l.form.addEventListener("submit",(function(e){e.preventDefault();var t={email:l.emailInput.value,message:l.messageInput.value};localStorage.removeItem("feedback-form-state"),l.emailInput.value="",l.messageInput.value="",console.log(t)}))}();
//# sourceMappingURL=03-feedback.46a2a318.js.map
