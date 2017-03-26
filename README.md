# Redux Simple Starter

Sourced from [Redux Simple Starter](https://github.com/StephenGrider/ReduxSimpleStarter).

## Installation

```bash
$ git clone https://github.com/mottaquikarim/react-redux-starter my_awesome_project
$ cd my_awesome_project
$ npm install
```

## Folder Structure

Breaking stuff up was **such** a pain with redux I decided to go *feature* based.

```
> src
  > index.js            [starting point]
  > components          [UI components]
    > app.js
  > feature-auth        [feature A]
    > authStore.js
    > authActions.js
    > authReducer.js
  > feature-formatter   [feature B]
    > formatterStore.js
    > formatterActions.js
    > formatterReducer.js
> node_modules
> package.json
> webpack.config.js
```

## Adding Features

To add a new feature, create a new **feature-** folder. It should have at least three files:

1. [feature_name]Store.js
2. [feature_name]Actions.js
3. [feature_name]Reducer.js

In your `index.js` file, do this:

```js
// feature-auth
import authStore from './feature-auth/authStore';
import authReducer from './feature-auth/authReducer';
import authActions from './feature-auth/authActions';

// add to features list
features.push({
    store: { authStore, },
    reducer: { authStore: authReducer, },
    actions: { authActions, }
});
```

Just replace `auth` with your feature name. You can access actions from inside the app directly through `this.props.actions`.

Remember to include the **`featuers.push`** block, this is what incorporates your store, actions, and reducer functions into the App automatically.

## References and Resources

1. [Redux Docs](http://redux.js.org/)
2. [Simple/Easy Redux Tutorial](https://medium.com/@firasd/quick-start-tutorial-using-redux-in-react-apps-89b142d6c5c1#.cad4xl8w8)
