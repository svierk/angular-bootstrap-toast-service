# 🍞 Angular 13 Toast Service with Bootstrap 5

The idea of the project was to create a service that allows displaying different types of toast notifications to the user, e.g. success or error toasts.

The application consists of essentially three components: A toast component that represents a single toast notification, a toaster component that maintains and stacks all current toasts, and the toast service.

## Getting started

To check out the toast application, there is a live version deployed on Heroku:  
https://ng-bootstrap-toast-service.herokuapp.com/

To get the toast service up and runnning locally, all you need to do is open the repository with VS Code and install all the recommended extensions.

Run

- `npm install` to install all required dependencies

## Development Server

Run

- `npm start` for a dev server. Navigate to `http://localhost:4200/`.

## Linter and Prettier

Run

- `npm run lint` to check for _ESLint_ issues
- `npm run lint:fix` to automatically fix _ESLint_ issues
- `npm run prettier` to check for _Prettier_ issues
- `npm run prettier:fix` to automatically fix _Prettier_ issues

## Unit Tests

Run

- `npm run test` to execute the unit tests in watch mode for development
- `npm run test:coverage` to execute all unit tests with code coverage

## Build

Run

- `npm run build` to run the production build
