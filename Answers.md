# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React JS solves the problem of having to write everything in HTML. React relies heavily on the fact that pages hold repeating templates with only the information going in to them changing. This way, uniformity is everything and less code can be written.

1. What does it mean to think in react?

It means to think in functional programming way. By simply taking a look at a webstie, one could see where templates are repeated and where React can thrive the most. Suppose you were in charge of making 100 staff cards in the About Me page. It would be crazy to consider doing this by hand in HTML. Even if you could copy and paste, any changes to the template would require and update for them all! However, thinking in react means creating one template to map all the information required into said template.

1. Describe state.

State refers to the information (data going in) that is changing when working with React. Setting two variables to a useState() will yield a variable that is assigned the current state and a function that passes a new state in its parameter. This become especially important with useEffect.

1. Describe props.

Props are a little like parameters in the sense that a component looks for that information when passing it to the JSX. Then when the function is referenced in another file, the appropriate data must be assigned to what the props are looking for.

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

Side effects are ready to fire when its second parameter, some form of data inside in an array, changes. It makes the site very dynamic and allows for axios get request to run and retrieve information from a new link ONLY when the second parameter changes. This logic allows for one to create scripts according to this rule.