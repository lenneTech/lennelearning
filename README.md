# Acaedmy

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.7.

## Install Pimcore
`docker exec -it academy_pimcore_1 bash`

`COMPOSER_MEMORY_LIMIT=-1 composer create-project pimcore/skeleton tmp`

`mv tmp/.[!.]* .`

`mv tmp/* .`

`rmdir tmp`

run installer (need database credential, creates admin user)
`./vendor/bin/pimcore-install --mysql-host-socket=mysql --mysql-username=pimcore --mysql-password=pimcore --mysql-database=pimcore`

Install data-hub
`docker exec -it academy_pimcore_1 bash`
`composer require pimcore/data-hub`
`php bin/console pimcore:bundle:enable PimcoreDataHubBundle`
`php bin/console pimcore:bundle:install PimcoreDataHubBundle`
`php bin/console pimcore:bundle:list`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
