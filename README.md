# Welcome to Tom's Cool Library - modom.js

## Instructions

1. Clone or download repository
2. Include modom.js in your html document.
3. Reference methods using the md namespace.

## Methods and Example Code References

* one(): Find one matching element using any CSS selector

 ```javascript
 md.one('.active')
 ```
* all(): Find all matching elements using any CSS selector

```javascript
md.all('tr')
```
* remove(): Remove an element
```javascript
md.remove('table')
```

* addClass(): Add a CSS class to an element
```javascript
md.addClass('.sub-header', 'bg-success')
```

* removeClass(): Remove a CSS class from an element
```javascript
md.removeClass('.sub-header','bg-success')
```

* hasClass(): Return true if an element contains a CSS class in it's CSS attribute (see classList documentation)
```javascript
md.hasClass('h1', 'page-header')
```

* getAttr(): Get an HTML attribute from an element

```javascript
md.getAttr('img:first-child', 'width')
```

* setAttr(): Set an HTML attribute on an element

```javascript
md.setAttr('img:first-child', 'alt', 'my first pic')
```

* setHTML(): Set the innerHTML of an element

```javascript
md.setHTML('h1', 'Tom\'s Cool Header')
```

* getHTML(): Get the innerHTML of an element

```javascript
md.getHTML('h1')
```
