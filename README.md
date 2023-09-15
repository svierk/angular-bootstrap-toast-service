# 🍞 Angular Toast Service with Bootstrap

![GitHub CI](https://github.com/svierk/angular-bootstrap-toast-service/actions/workflows/ci.yaml/badge.svg)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=svierk_angular-bootstrap-toast-service&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=svierk_angular-bootstrap-toast-service)
[![codecov](https://codecov.io/gh/svierk/angular-bootstrap-toast-service/branch/main/graph/badge.svg?token=WWLC0MVTI8)](https://codecov.io/gh/svierk/angular-bootstrap-toast-service)
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fsvierk%2Fangular-bootstrap-toast-service.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2Fsvierk%2Fangular-bootstrap-toast-service?ref=badge_shield)

![Angular](https://img.shields.io/badge/angular-%23DD0031.svg?logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?logo=typescript&logoColor=white)
![RxJS](https://img.shields.io/badge/rxjs-%23B7178C.svg?logo=reactivex&logoColor=white)
![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?logo=bootstrap&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%234300.svg?logo=vercel&logoColor=white)

## About the project

The idea of the project was to create a service that allows displaying different types of toast notifications to the user, e.g. success or error toasts.

The application consists of essentially three components: A toast component that represents a single toast notification, a toaster component that maintains and stacks all current toasts, and the toast service. How the solution was built and works in detail is also explained in the following Medium post:

[How to Create a Toast Service Using Angular 14 and Bootstrap 5](https://medium.com/better-programming/how-to-create-a-toast-service-using-angular-13-and-bootstrap-5-494e5c66627)

## Getting started

To get the toast service up and runnning locally, all you need to do is open the repository with VS Code and install all the recommended extensions.

Run

- `npm install` to install all required dependencies

## Development Server

Run

- `npm start` for a local dev server. Navigate to `http://localhost:4200/`.

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
