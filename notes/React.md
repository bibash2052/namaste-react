## React.createElement()
#
## It is creating an html tag inside react. It is an object.
### This function will take three argument:
    1. First argument is html tag to be created.
    2. Second argument is an object or it can be null where we will be providing attributes of the corresponding tag.
    3. Third argument is content of html tag

    For eg:-
    React.createElement("h1", {id: "heading"}, "Hellow World!");
    React.createElement("h1", null, "Hello World!");


### createElement returns a React element object with a few properties:

    1. type: The type you have passed.

    2. props: The props you have passed except for ref and key. If the type is a component with legacy type.defaultProps, then any missing or undefined props will get the values from ```type.defaultProps```.

    3. ref: The ref you have passed. If missing, null.
    
    4. key: The key you have passed, coerced to a string. If missing, null.

    Usually, you’ll return the element from your component or make it a child of another element. Although you may read the element’s properties, it’s best to treat every element as opaque after it’s created, and only render it.

#
## ReactDOM.createRoot()
#
## It will create the container to hold all the element created by createElement in react to render.




#
## render()
#
## It will render the content created by createElement.