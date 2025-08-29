What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
ans: getElementById: Selects a single element based on its unique id attribute. getElementsByClassName: Selects all elements that possess a specific class name. 
querySelector: Selects the first element that matches a given CSS selector. querySelectorAll: Selects all elements that match a given CSS selector.

How do you create and insert a new element into the DOM?
ans:The document.createElement() method is used to create a new HTML element.

What is Event Bubbling and how does it work?
ans: Event bubbling is a browser mechanism where a triggered DOM event on a child element propagates or "bubbles up" through its ancestors (parent, grandparent, etc.) 
in the DOM tree, eventually reaching the document's root.

What is Event Delegation in JavaScript? Why is it useful?
ans: Event delegation is a powerful pattern in JavaScript that improves both the performance and maintainability of your code, especially when dealing with dynamic content or 
a large number of elements. By leveraging event bubbling, you can reduce the number of event listeners and streamline your code.

What is the difference between preventDefault() and stopPropagation() methods?
ans: preventDefault(): This method prevents the default action associated with an event from occurring.
stopPropagation(): This method prevents the event from propagating (bubbling up or capturing down) through the DOM hierarchy.
