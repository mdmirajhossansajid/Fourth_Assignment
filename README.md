....------------------------------1.------------------------------...

All  methods are of the JavaScript DOM API used to select elements from HTML.
getElementById()        :   Selects a single element using its unique id.
getElementsByClassName():   Selects multiple elements with the same class name (returns HTMLCollection).
querySelector()         :   Selects the first element that matches a CSS selector.
querySelectorAll()      :   Selects all elements that match a CSS selector (returns NodeList).

------------------------------2.------------------------------

To create and insert a new element at first
Create element using document.createElement()  then
Add content using innerText or innerHTML and last
Insert it using appendChild()

Example:
let p = document.createElement("p");
p.innerText = "Hello World";
document.body.appendChild(p);

------------------------------3.------------------------------

Event Bubbling is a process where an event starts from the target element and then moves upward to its parent elements.

Example:
If a button inside a div is clicked:

First button event runs
Then div event runs
Then body event runs

So, the event flows from child → parent.

------------------------------4.----------------------------

Event Delegation is a technique where a single event listener is added to a parent element to handle events of its child elements.
1.Reduces number of event listeners
2.Improves performance
3.Works for dynamically added elements

------------------------------5.------------------------------

preventDefault(): Stops the default behavior of an element (e.g., prevents form submission or link navigation).
stopPropagation(): Stops the event from moving to parent elements (stops bubbling).
