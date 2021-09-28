## Moonshot

Project for viewing launches.

## How to set up:

To start the app you need to clone repository to your local machine.

Then you need to install modules:

`yarn install`

For running app:

`yarn start`

For running tests:

`yarn test`

## Tech stack:

As a main framework: `React`

React was chosen because of flexibility and its lightweight.

As a language: `Typescript`

Typescript provides a strict type mode that allows us to avoid typed mistakes.

For testing:
- `Jest`
- `Enzyme`

Jest is a powerful library that provides a lot of utils methods out of the box.
Enzyme provides easy way to get shallow/mounted copy of React component.

For displaying map:
`google-maps-react`

Google maps is a standart in industry. This library provides an easy react-wrapper for google maps.

For date range picker: 
`@wojtekmaj/react-daterange-picker`

react-daterange-picker provides easy mechanism with less code to integrate Date Picker into the app. 

## How would I improve my solution:

I have not done a point selection.

I have not done displaying launches agencies.

I have not done filtering launches based on they were successful.

I would provide more types, especially for launches response type.
Also I would apply more styles to make it more UI attractive.
I would add more tests to components and for service.
