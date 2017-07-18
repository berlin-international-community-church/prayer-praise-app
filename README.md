# prayer-praise-app

Fully containerized HapiJS + ReactJS app for Berlin Church to share prayers and praise cards with the whole church

## Local setup requirements

- NodeJS (6/8)
- Yarn (node package manager)
- docker
- docker-compose
- Make sure PostgreSQL is not running locally otherwise there may be a port conflict with the DB started by the docker setup

## To run locally

1. Run ```yarn install``` inside web and api projects to make sure you have npm and yarn setup correctly
2. For the first time setup do - ```docker-compose up --build``` after that you do not need the '--build' flag
3. Run tests as usual (individually in web and api project using ```npm run test```)
4. DB migrations can be done with ```docker-compose exec main-api npm run migrate-latest```

## Notes

- The application runs as a ReactJS web application, with a Node+HapiJS REST API backend.
- The application also uses Auth0 for user login, the Auth0 token is not checked into the git repo, please create your own Auth0 client for testing / local installation (it's very simple)
  - Copy and change the .env.sample file to ```.env``` and update the values there
