/*
 * JavaScript ES6 Notes
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
 */

// ############################################################################
//   Main
// ############################################################################

test_();


function helloWorld() {
  console.log('hello world');
}  // Don't need `;` after `}`


function test_() {  // `test` is a reserved keyword
  class  {
    constructor(calories = 250) {
      this.calories = calories;
    }
  }  // No comma in the end.

  // class IceCream extends Dessert {
  //   constructor(flavor, calories, toppings = []) {
  //     super(calories);
  //     this.flavor = flavor;
  //     this.toppings = toppings;
  //   }
  //   // No semicolon between methods

  //   addTopping(topping) {
  //     this.toppings.push(topping);
  //   }

  //   static staticMethod() {}
  // }

  // const ice = new IceCream('vanilla');
  // IceCream.staticMethod();

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

  // Conditional/ternary operator
  v = true? 1 : 2;
  console.assert(v == 1);


//  Destructuring: multiple assignment
// --------------------------------------------------------------------

  // Destructuring with array
  let [v1, v2, v3] = [1, 2, 3];
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

  [v1, ...v2] = [1, 2, 3];
  // v1, v2 has been declared before. Otherwise declaration is needed.
  console.assert(v1 == 1);
  console.assert(v2.toString() == [2, 3].toString());

// ========================================================================
//   JavaScript primitives and data structures
// ========================================================================

  // JavaScript primitives

  // Number: integer or floating point
  v = 1;
  typeof(v);

  // String
  v = 'a';

  // Boolean
  v = true;

  // Null
  v = null;

  // Undefined: variable does not exist, or data type not assigned.
  v = undefined;

//   String
// --------------------------------------------------------------------

  // String formatting
  v = 1;
  console.assert(`${v}, ${v + 1}` == '1, 2');

//   Array
// --------------------------------------------------------------------

  let arr = [1, 2];
  // Discouraged: arr = Array(1, 2);  // `new` constructor not needed for Array
  console.assert(arr[0] == 1);

  console.assert(
    arr.join(' ') == '1 2'
  );

//   Set
// --------------------------------------------------------------------

  let set = new Set([1, 2]);  // `new` constructor needed for Set

  // Use spread operator to turn set into array
  console.assert([...set].toString() == [1, 2].toString());

  set.add(3);  // Will return the set
  set.add(1);
  set.delete(3);
  set.clear();

  set.size;

  set.has(1);
  // set.values(); == set.keys(); == [1, 2]

//   JavaScript object: dictionary
// --------------------------------------------------------------------

  const jsObject = {
    propertyName: 'property value',
  }
  console.assert(jsObject.propertyName == 'property value');

  Object.keys(jsObject).length

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
  let obj = {
    k1: 'v1',
    k2: 'v2',
  }
  for (const key in obj) {
    console.assert(obj[key] == 'v1');
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

  // Conventional function declaration
  function func(arg) {
    return arg;
  }
  console.assert(func(1) == 1);

  // Arrow function expression
  func = arg => arg;
  console.assert(func(1) == 1);

  func = (arg1, _arg2) => arg1;  // Parenthesis is a must for multiple args.
  console.assert(func(1, 2) == 1);

  // Block body syntax of arrow function
  func = arg => {
    arg = arg + 1;
    return arg - 1;
  }
  console.assert(func(1) == 1);

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

  function named_para_func({named_para1=1, positional_para2}={}) {
    // Can put positional parameters after keyword parameters.
    // Note that here we use `=` instead of `:` for object properties.
    // Logic: An empty object `{}` was set as a default parameter, and its
    // property values were updated before use.
    return named_para1;
  }
  console.assert(named_para_func() == 1);

  // Can omit positional parameters
  console.assert(named_para_func({named_para1: 2}) == 2);

}

// ############################################################################
//   Class
// ############################################################################

function class_() {
  class Dessert {
    constructor(calories = 250) {
      this.calories = calories;
    }
  }  // No comma in the end.

  class IceCream extends Dessert {
    constructor(flavor, calories, toppings = []) {
      super(calories);
      this.flavor = flavor;
      this.toppings = toppings;
    }
    // No semicolon between methods

    addTopping(topping) {
      this.toppings.push(topping);
    }

    static staticMethod() {}
  }

  const ice = new IceCream('vanilla');
  IceCream.staticMethod();
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

> `var`, `let`, and `constant`

```javascript
{
  var varVar = 1;
}
// varVar can be used here

{
  let letVar = 1;
  const constVar = 1;
}
// letVar and constVar cannot be used here
```

var variables can be updated and re-declared within its scope; let variables can be updated but not re-declared; const variables can neither be updated nor re-declared.

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


function test() {

}
