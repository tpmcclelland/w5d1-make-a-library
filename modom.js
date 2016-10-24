// Your DOM library code goes here inside of an IIFE and must set a global variables called md.

(function() {
    'use strict'

    var one = function(selector) {
        return document.querySelector(selector)
    }

    var all = function (selector) {
        return document.querySelectorAll(selector)
    }

    var remove = function (element) {
        one(element).remove()
    }

    var addClass = function (element, cssClass) {
        one(element).classList.add(cssClass)
    }

    var removeClass = function (element, cssClass) {
        one(element).classList.remove(cssClass)
    }

    var hasClass = function (element, cssClass) {
        return one(element).classList.contains(cssClass)
    }

    var getAttr = function (element, attr) {
        return one(element).getAttribute(attr)
    }

    var setAttr = function (element, attr, value) {
        one(element).setAttribute(attr, value)
    }

    var setHTML = function (element, html) {
        one(element).innerHTML = html;
    }

    var getHTML = function (element) {
        return one(element).innerHTML
    }

    var ajax = function (url, callback) {
        fetch(url)
            .then(response => response.json())
            .then(callback)
    }

    var getProp = function (element, prop) {
        return one(element)[prop]
    }

    var setProp = function (element, prop, value) {
        one(element)[prop] = value
    }

    var getValue = function (element) {
        return one(element).value
    }

    var setValue = function (element, value) {
        one(element).value = value
    }

    window.md = {
        one,
        all,
        remove,
        addClass,
        removeClass,
        hasClass,
        getAttr,
        setAttr,
        setHTML,
        getHTML,
        ajax,
        getProp,
        setProp,
        getValue,
        setValue
    }
}())
