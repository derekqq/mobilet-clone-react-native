# Mobile clone

It's clone real app - moBiLet. This project is the first approach to React Native. 
Project was bootstrapped with [Expo](https://expo.io/)/


#### App structure: (in progress)

- components (react components)
- helpers (helpers functions)
- mocked-data (mocked data keept in json file)
- pages (react components that build app pages)
- routing (app routing functionality + ProtectedRoute helper component)
- slices (Redux Toolkit slices)
- types (custom data types)
- services (services to connect firebase)

#### To run on local machine

Rename sample configuration files.

```
 mv .env.sample .env
```

Next, edit these files depending on your environment.

Then,

```javascript
yarn
```

next:

```javascript
yarn start
```

#### To run test:

```javascript
yarn test
```
