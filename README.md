# Project Details
## Organization of components
The Components I'm using are as follows:
* Doctor Card
* Favorites Side Bar
* Sort Dropdown
* Tags Table
## How data is passed down through components & How user interactions can trigger changes in the state of components
The backbone I am using to pass data is [Redux](https://redux.js.org/) https://redux.js.org/ - essentially it's a state that is accessible by any component, where components can update the state or subscribe to changes of a variable in the state. This approach lets me pass data both downstream and upstream through components. So for example, each card has a button to add the card to the aggregated list. If the button is pressed, the page needs to react to it and rerender the cards on the screen, meaning this action needs to travel upstream. Instead of using a hack-y solution like passing a reference to a function through props, each card is connect to redux such that, when the button is pressed, the card will call an action in the redux state to update the aggregated list that's saved in the redux state. Since this list changes, the page will rerender, now using the updated aggregated list. This also applies to: changing the page, filtering tags, and sorting.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
