# prayer-praise-app

Fully containerized HapiJS + ReactJS app for Berlin Church to share prayers and praise cards with the whole church

## Local setup requirements

- NodeJS (6/8)
- Yarn (node package manager)
- docker
- docker-compose
- Make sure PostgreSQL is not running locally otherwise there may be a port conflict with the DB started by the docker setup

## To run locally

1. Run ```yarn install``` inside web and api projects to make sure you have npm and yarn setup correctly (_techinally optional, just docker-compose should be enough to get this project running)._
2. __For the first time setup do - ```docker-compose up --build``` after that you do not need the '--build' flag__
3. DB migrations can be done with - ```docker-compose exec main-api npm run migrate-latest```
4. DB can be seeded with some data using - ```docker-compose exec main-api npm run seed-data```
5. Run tests as usual (individually in web and api project using ```npm run test```), since the test DB also runs inside docker / docker-compose, please run _docker-compose up_ command before running the tests (or setup a local PostgreSQL test DB).

## Notes

- The application runs as a ReactJS web application, with a Node+HapiJS REST API backend.

## Important

- The application uses Auth0 for user login, the Auth0 token is not checked into the git repo, please create your own Auth0 client for testing / local installation (it's very simple)
- Copy and change the .env.sample file to ```.env``` and update the values for Auth0 there
