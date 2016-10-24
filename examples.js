// Your test code examples go here. Make sure you console.log() results.
// one(): Find one matching element using any CSS selector
console.log(md.one('.active'))
// all(): Find all matching elements using any CSS selector
console.log(md.all('tr'))
// remove(): Remove an element
md.remove('table')
// addClass(): Add a CSS class to an element
md.addClass('.sub-header', 'bg-success')
// removeClass(): Remove a CSS class from an element
md.removeClass('.sub-header','bg-success')
// hasClass(): Return true if an element contains a CSS class in it's CSS attribute (see classList documentation)
console.log(md.hasClass('h1', 'page-header'))
// getAttr(): Get an HTML attribute from an element
console.log(md.getAttr('img:first-child', 'width'))
// setAttr(): Set an HTML attribute on an element
md.setAttr('img:first-child', 'alt', 'my first pic')
// setHTML(): Set the innerHTML of an element
md.setHTML('h1', 'Tom\'s Cool Header')
// getHTML(): Get the innerHTML of an element
console.log(md.getHTML('h1'))

// Add an ajax() function that fetches API data.
md.ajax('http://swapi.co/api/people', function(data){
    console.log(data)
})

// Add a getProp() function that gets an element's object property value.
console.log(md.getProp('h1', 'nodeName'))

// Add a setProp() function that sets an element's object property value.
md.setProp('h1', 'hidden', true)

// Add a setValue() function that sets an form field's value attribute.
md.setValue('input', 'tom')

// Add a getValue() function that gets an form field's value attribute.
console.log(md.getValue('input'))
