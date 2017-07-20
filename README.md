# `local-redux-devtools` [![npm version](https://badge.fury.io/js/local-redux-devtools.svg)](https://badge.fury.io/js/local-redux-devtools)
> Standalone Local Redux DevTools

This is a composition of `remote-redux-devtools` and `remotedev-server`. They have been setup to provide a simple standalone local Redux DevTools experience.

*NOTE: Use of `unpkg.com`'s `remotedev-app` breaks the Settings modal's cancel button with the following error: `Uncaught Error: addComponentAsRefTo(...): Only a ReactOwner can have refs. You might be adding a ref to a component that was not created inside a component's render method, or you have multiple copies of React loaded`. This is due to [`ReactTransitionGroup`'s usage of `react-with-addons` loading a separate copy of `react`](https://github.com/facebook/react/issues/7874#issuecomment-251607410).*

### Installation

```
npm install --save-dev local-redux-devtools;
```

### Usage

1. [Follow out the usage instructions from `remote-redux-devtools`](https://github.com/zalmoxisus/remote-redux-devtools#usage).
2. Start the server with `redux-server`.
2. Start the app with `redux-devtools`.
