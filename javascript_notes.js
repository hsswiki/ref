/*
 * JavaScript ES6 Notes
 *
 * TODO
 *   - [A re-introduction to JavaScript (JS tutorial)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript)
 *
 * To run the script:
 *
 * 1. Change the main function to the function you'd like to run
 * 1. Run with
 *   - VSCode's Code Runner extension (alt+t)
 *   - `node "FILEPATH.js"`
 *   - `node` in terminal for interactive JS console.
 *
 * Style guide based on Google JS Style Guide
 *
 * https://google.github.io/styleguide/jsguide.html
 *
 * ```
 * 'single quote for strings'
 * varName
 * CONST_NAME
 * constantInFunctionScope
 * funcName()
 * ClassName
 *
 * privateMethodEndsWithUnderscore_
 *
 * TypeName
 * EnumName
 *
 * packageName
 *
 * testMethodName_state_expectedOutcome
 * ```
 *
 * - Terminate statements with semicolon
 * - 2 spaces for block indentation
 * - 4 spaces for line continuation
 */

// ############################################################################
//   Main
// ############################################################################

test_();


function helloWorld() {
  console.log('hello', 'world' + '!');
  // window.alert('');
  // window.confirm('Confirm message');
}  // Don't need `;` after `}`


function test_() {  // `test` is a reserved keyword
  console.log(2);

  console.log(1);
}

// ############################################################################
//   Data types and data structures
// ############################################################################

function dataTypesAndDataStructures() {

// ========================================================================
//   Variable declaration
// ========================================================================

  const CONSTANT = 1;  // Remember to add `;` at the end of each command.
  // Rule of thumb: use `const` initially. When need to re-assign, change to
  // `let`. Never use `var` in production.

  // var variables can be updated and re-declared within its scope; let
  // variables can be updated but not re-declared; const variables can neither
  // be updated nor re-declared.

  let v = 1;
  v = 2;
  console.assert(v == 2);
  // `==` Double equality operator allows type coercion. `===` strict
  // comparison prevents it.

  // Template Literal / Template String
  `1 + 1 = ${1 + 1}`;

  'Line continuation' +
    'with plus operators';

  // Conditional/ternary operator
  v = true? 1 : 2;
  console.assert(v == 1);


//  Destructuring: multiple assignment
// --------------------------------------------------------------------

  // Destructuring with array
  var [v1, v2, v3] = [1, 2, 3];
  [v1, , v3] = [1, 2, 3];  // Can ignore values
  console.assert(v1 == 1);

  // Destructuring with JavaScript object (map)
  let obj = {
    property_name_1: 'Property value 1',
    property_name_2: 'Property value 2',
    property_name_3: 'Property value 3',
  }
  let {property_name_1, property_name_2} = obj;
  // Will only assign to eponymous variables

  console.assert(property_name_1 == 'Property value 1');

//  Spread/rest operator `...`: unpack iterables
// --------------------------------------------------------------------

  const a1 = [1]
  const a2 = [2]
  console.assert([...a1, ...a2].toString() == [1, 2].toString());
  // `.toString` turns array into '1,2' for comparison.

  var [v1, ...vArr] = [1, 2, 3];
  v1 == 1;
  console.assert(vArr.toString() == [2, 3].toString());

// ========================================================================
//   JavaScript primitives and data structures
// ========================================================================

  // JavaScript primitives

  1;
  typeof(1) == 'number';

  1.114.toFixed(2) == 1.11;
  1.115.toFixed(2) == 1.12;

  Math.max(1, 2, 3) == 3;  // Not taking array as argument


  'a';
  Number('1') === 1;
  'A'.toLowerCase();
  1 + 'a' == '1a';
  'ab'.includes('a');  // Return boolean

  true;
  false;
  !true;
  true && true;
  true || true;
  true === true;

  null;

  undefined;  // Variable not exist, or data type not assigned.

//   String
// --------------------------------------------------------------------

  // String formatting
  v = 1;
  console.assert(`${v}, ${v + 1}` == '1, 2');

//   Array
// --------------------------------------------------------------------

  let arr = [1, 2];
  // Discouraged: arr = Array(1, 2);  // `new` constructor not needed for Array

  arr.length;

  [1].push(1) == [1, 1].length;  // Append in place.
  arr.forEach(_ => _);

  [1].pop() == 1;  // Also modify in place.
  var a = arr.join(' ');
  [1, 2].filter(v => v == 1) == [1];
  [1, 2].find(v => v == 1) == 1;  // Return a object reference
  [1, 1].map(v => v) == [1, 1];

  [].concat(1) == [1];  // Return [1], not in-place
  [].concat([1]) == [1];  // Still return [1] instead of [[1]]

  [].includes(1) === false;

  // Sum
  [1, 2, 3].reduce((a, b) => a+b);

  // Make a SHALLOW copy of an array
  [...[1]]

//   Set
// --------------------------------------------------------------------

  let set = new Set([1, 2]);  // `new` constructor needed for Set

  // Use spread operator to turn set into array
  [...set];

  new Set([1]).add(2);  // Return set {1, 2}
  new Set([1]).add(1);  // Return set {1}
  new Set([1]).delete(1);
    // Return true if item in set. The set was modified in place.
  new Set([1]).clear();  // Clear set in place

  new Set([1]).size;

  new Set([1]).has(1);
  // set.values(); == set.keys(); == [1, 2]

//   JavaScript object
// --------------------------------------------------------------------

  var jsObject = {
    propertyName: 'property value',
    '': '',
    1: '',
  }

  jsObject.newProperty = '';

  jsObject.propertyName;
  jsObject['propertyName'];

  Object.keys(jsObject).length;
  Object.entries(jsObject);  // Array of key, value pairs

  // Opject Spread: make a deep copy
  newJsObj = {
    ...jsObject,
    propertyName: 'Updated value',
  }

  // Check object equality
  // https://www.joshbritz.co/posts/why-its-so-hard-to-check-object-equality/
  JSON.stringify({a: 1, b: 2}) === JSON.stringify({a: 1, b: 2})
    // Keys need to be in the same order

  // Shorthand property names
  var a = 1;
  {a};  // == {a: a}

//   Map: key-value pairs
// --------------------------------------------------------------------

  const map = new Map();

  map.set('key', 'value');
  map.get('key');

  map.delete('key');
  map.has('key');
  map.clear();

  map.size;
}

// ############################################################################
//   Control flows
// ############################################################################

function controlFlow() {

  // break;
  // continue;

  // Switch
  switch (1) {
    // Shared case
    case 1:
    case 2:
      // If don't break, the switch will go on.
    case 3:
      break;
    default:
      // pass
  }

  // For loop
  const arr = [0, 1, 2];

  // Conventional For loop
  for (let i=0; i<arr.length; i++) {
    console.assert(arr[i] == i);
  }

  // For Of loop for iterating over values
  for (const v of arr) {
    console.assert(v == 0);
    break;
  }

  // For In loop for iterating over index
  for (const i in arr) {
    console.assert(arr[i] == i);
  }

  // For In loop can also loop objects, while For Of loop and conventional loop
  // can't.
  var obj = {
    k1: 'v1',
    k2: 'v2',
  }
  for (const key in obj) {
    obj[key] == 'v1';
    break;
  }

  // While loop
  // while () {}

}

// ############################################################################
//   Function
// ############################################################################

function function_() {

// ========================================================================
//   Function declaration
// ========================================================================

  // Function Statement
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/functions#the_function_declaration_function_statement
  console.assert(func(1) == 1);
  // Only functions declared in this way can be called before definition.
  // (Hoisting)
  function func(a) {
    return a;
  }

  // Function Expression
  var func = function(a) {return a;}

  // Arrow Function Expression
  var func = a => a + 1;

  var func = (a1, a2) => {
    // Parentheses required for multiple args.
    // Braces required for multiple expressions.
    a1;
    return a2;
  }

  // Self-executing function: start running immediately after declaration
  (_ => console.assert(true))();
  // Note the two parentheses and their usages

// ========================================================================
//   Default and named parameters: keyword arguments
// ========================================================================

  function default_para_func(default_para1, default_para2=2) {
    console.assert(default_para2 == 2);
    return default_para1;
  }
  // Seems can't reuse name `func`, though redefined. Weirdly returns NaN.
  console.assert(default_para_func(named_para_wont_work_here=3) == 3);
  // Note that named parameters won't work. It only works in a positional way.

//   Named parameters
// --------------------------------------------------------------------

  // Named parameters can be created on top of object destruction
  // https://stackoverflow.com/a/11796776
  function namedParaFunc(
      positionalPara,
      positionalParaWithDefault='positional default',
      {
        namedPara,
        namedParaWithDefault='named default',
        namedParaPlacedAfterDefaultAlsoWorks,
      }={}) {
    console.log(`Positional para: ${positionalPara}`);
    console.log(`Positional para with default: ${positionalParaWithDefault}`);
    console.log(`Named para: ${namedPara}`);
    console.log(`Named para with default: ${namedParaWithDefault}`);
  }

  namedParaFunc();
  namedParaFunc('positional');
  namedParaFunc('pos', 'positional override');
  namedParaFunc('pos', paraNameLikeThisWillBeIgnored='pos override');
  namedParaFunc('pos', {namedPara: 'actually still positional override'});
  namedParaFunc('pos', 'pos override', {namedPara: 'named'});
  namedParaFunc('pos', 'pos2', {namedParaWithDefault: 'named override'});

  // Logic: the named para js object is actually a positional para with default
  // = {}. When an js object is passed as an arg to this positional para, those
  // named para variables will be updated when eponymous properties exist in
  // the arg by Object Destruction.
  //
  // The named para vars use `=` instead of `:` for defaults since {a, b=1} is
  // not an object like {a: 1, b: 2}. Instead, it's a Shorthand Property
  // Initializer, which equals to variable declaration a=a (undefined) and b=1,
  // and var a and b are available in the outer scope.

}

// ############################################################################
//   Class
// ############################################################################

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

function class_() {
  // Class Declaration
  class ClassName {
    static staticProperty = 'a';

    constructor(constructorParam, optionalParam='a') {
      this.instanceProperty = constructorParam;
    }

    instanceMethod(param='a') {
      this.instanceProperty;
    }

    static staticMethod() {
      // In static methods, `this` refers to ClassName, while in instance
      // methods, `this` refers to the instance.
      this.staticProperty;
    }
  }  // No comma here.

  const instance = new ClassName('a', optionalParam='b');

  instance.instanceProperty;
  instance.instanceMethod();

  ClassName.staticProperty;
  ClassName.staticMethod();

}

// ############################################################################
//   Client-side JavaScript: accompanies with HTML
// ############################################################################

function clientSideJS() {
  const d = document;
  d.getElementById('id');
  d.getElementsByTagName('img');
}

// ############################################################################
//   NEXT
// ############################################################################

/*
## Asynchronous JavaScript Requests: Udacity

### L1 AJAX with XHR

AJAX: Async JS and XML(HTTPRequest)


XHR: XMLHttpRequest

```javascript

const asyncRequestObject = new XMLHttpRequest();
asyncRequestObject.open('GET', 'https://unsplash.com');

function handleSuccess () {
  console.log( this.responseText );
// the HTML of https://unsplash.com/
}

function handleError () {   // error as argument?
  console.log( 'An error occurred \uD83D\uDE1E' );
}

asyncRequestObject.onload = handleSuccess;
asyncRequestObject.onerror = handleError;
asyncRequestObject.send();

// myAsyncRequest.open('GET', 'https://udacity.com/', false);
// The third argument is `async=true`. If false, then blocking the execution.

function handleSuccess () {
  const data = JSON.parse( this.responseText ); // convert data from JSON to a JavaScript object
  console.log( data );

}

asyncRequestObject.onload = handleSuccess;
```

The way to circumvent the same-origin policy is with CORS (Cross-Origin Resource Sharing).

```javascript
const searchedForText = 'hippos';
const unsplashRequest = new XMLHttpRequest();

unsplashRequest.open('GET', `https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`);
unsplashRequest.onload = addImage;
unsplashRequest.setRequestHeader('Authorization', 'Client-ID <your-client-id>');
unsplashRequest.send();

function addImage(){
  const dataArr = JSON.parse(this.responseText);
  debugger;
}
```

### L2 jQuery

Skipped 2020-02-18

### L3 AJAX with Fetch

```javascript
fetch(
  `https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`,
  {
    headers: { 'Content-Type': 'text/plain' }
    method: 'POST'
  }
).then(response => response.json())  // If JSON is used. Note the Arrow syntax.
// Or use function(response) {return response.json();}
.then(addImage)
.catch(e => requestError(e, 'image'))
;

function addImage(data) {
    let htmlContent = '';
    const firstImage = data.results[0];

    if (firstImage) {
        htmlContent = `<figure>
            <img src='${firstImage.urls.small}' alt='${searchedForText}'>
            <figcaption>${searchedForText} by ${firstImage.user.name}</figcaption>
        </figure>`;
    } else {
        htmlContent = 'Unfortunately, no image was returned for your search.'
    }

    responseContainer.insertAdjacentHTML('afterbegin', htmlContent);
}

function requestError(e, part) {
    console.log(e);
    responseContainer.insertAdjacentHTML('beforeend', `<p class='network-warning'>Oh no! There was an error making a request for the ${part}.</p>`);
}
```
*/
