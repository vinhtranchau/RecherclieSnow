# RecherclieSnow

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.6.
And this project is showing how to build android project from scratch.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Hosting server
https://lucky-bruce.github.io/angular-tutorial-hero/

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Development

### Pipeline

We have very basic pipeline configured for the development. The main branch for the development is `develop` and `master` branch is directly connected with the hosting server.
Automatic hosting service is running through the GitHub Pipeline, we are using GitHub Pages for the hosting.

#### Workflows
* Push to the `develop` for the normal development
* Create PR and merge into `master` for the deployment
