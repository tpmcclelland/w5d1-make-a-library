// Your DOM library code goes here inside of an IIFE and must set a global variables called md.

(function() {
    'use strict'

    var one = function(selector) {
        return document.querySelector(selector)
    }

    var all = function (selector, array = false) {
        var results = document.querySelectorAll(selector)
        if (array) {
            return Array.from(results)
        } else {
            return results
        }
    }

    var remove = function (element) {
        document.querySelector(element).remove()
    }

    var addClass = function (element, cssClass) {
        document.querySelector(element).classList.add(cssClass)
    }

    var removeClass = function (element, cssClass) {
        document.querySelector(element).classList.remove(cssClass)
    }

    var hasClass = function (element, cssClass) {
        return document.querySelector(element).classList.contains(cssClass)
    }

    var getAttr = function (element, attr) {
        return document.querySelector(element).getAttribute(attr)
    }

    var setAttr = function (element, attr, value) {
        document.querySelector(element).setAttribute(attr, value)
    }

    var setHTML = function (element, html) {
        document.querySelector(element).innerHTML = html;
    }

    var getHTML = function (element) {
        return document.querySelector(element).innerHTML
    }

    var ajax = function (url, callback) {
        fetch(url)
            .then(response => response.json())
            .then(callback)
    }

    var getProp = function (element, prop) {
        return document.querySelector(element)[prop]
    }

    var setProp = function (element, prop, value) {
        document.querySelector(element)[prop] = value
    }

    var getValue = function (element) {
        return document.querySelector(element).value
    }

    var setValue = function (element, value) {
        document.querySelector(element).value = value
    }

    var addEvent = function(element, event, callback) {
        document.querySelector(element).addEventListener(event, callback)
    }

    var removeEvent = function(element, event, callback) {
        document.querySelector(element).removeEventListener(event, callback)
        return true
    }

    var clone = function (element) {
        return document.querySelector(element).cloneNode(true)
    }

    var getStyle = function (element) {
        return getComputedStyle(document.querySelector(element))
    }

    var setStyle = function (element, prop, value) {
        document.querySelector(element).style[prop] = value
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
        setValue,
        addEvent,
        removeEvent,
        clone,
        getStyle,
        setStyle
    }
}())
