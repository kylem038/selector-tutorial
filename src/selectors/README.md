# Exploring The Benefits Of Selectors

This repo was created to explore a bit of what the selector pattern provides when managing state.
This pattern allows you to manage state in such a way that builds on itself. A good example of its
usefulness comes into play where the data coming from a backend or other source does not change,
but the way you display that data does. 

As a simple example I've created a counter. We can extend the initial selector to show
the count but doubled. 

## Example Use Case

To extrapolate this a bit more let's say we have a selector that decides whether or not a User can
view a certain page. We've decided decided to say that a User can only view a page if they've
enabled a certain setting on their profile. This becomes rather simple in that we can:
1. create a selector to get the property on their profile
2. add this selector to the selector that decides whether or not a user can view a page
3. modify the logic and... voila! It just works. 

## Performance

- Performance can be an issue seeing as a selector will be re-run after every action. 
- `useSelector` relies on a `===` reference check to determine when to re-render. Operations like *map* and *filter*, which always return a new array, can be big offenders of this. 
- This creates a need for memoization.
- Packages like “Reselect” or the “Redux Toolkit” offer a “createSelector” function, which allows for memoization out of the box.
- NOTE: “createSelector” will only memoize the most recent parameters. 
- Thus input selectors should *always* accept the same types of parameters.

Resource link [here] (https://redux.js.org/usage/deriving-data-selectors#writing-memoized-selectors-with-reselect).

## Input vs. Output Selectors

- Input selectors and output selectors should be distinct. 
- Input selectors should be regular functions
    - Input selectors should extract and return values
- Output selectors do some sort of transformation
    - Output selectors should use “createSelector” to leverage memoization

Example of an input selector
```
const selectCounter = createSelector(store.getState, state => state.counter);
```

Example of an output selector
```
export const selectDoubleCount = createSelector(selectCount, count => count * 2);
```

## Best practices

- It is recommended to prefix all selectors with “select”
- `useSelector` from react-redux is a nice package to help with writing your selectors.
- You don’t need a library though, and selectors can be written using regular functions or arrow functions
- Selectors can be used anywhere you have access to the root state.
- Define selectors alongside reducers
    - Most define selectors at the UI level, which can cause issues when other parts of the app want to use the same lookups. 
    - Additionally, usually if a selector needs updated so does the reducer so keeping things close makes sense.  
- Globalize selectors if needed.
    - Slice reducers usually only know about a piece of state. 
    - Selectors usually want the root state
    - For larger apps you may want to have it so the selectors don’t know where slice state is kept - it is passed to them. 
    - “Globalized” selectors accepts take the root state and figure out where to find the right slice
    - “Localized” selectors get a slice of state and don’t care about the root state.

## Pitfalls

- Note about null checks
- Adding separate selector function for every single field is not a good idea!
- Don’t memoize every selector either. Generally if you’re using map or filter it’s a good idea to memoize it.

## Resources

Many of these recommendations come directly from the Redux documentation found [here] (https://redux.js.org/usage/deriving-data-selectors#deriving-data). 