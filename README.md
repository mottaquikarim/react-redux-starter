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
