# Back-end Code Challenge

This challenge consists of creating a RESTful API capable of managing projects and monitoring data on [Regen Registry](http://registry.regen.network/).

The goal here is for us to get a basic understanding of how you code, so it's not meant to be very difficult. Ideally you shouldn't spend more than a few hours on it.

This is based on [Express](https://expressjs.com/) and [PostgreSQL](https://www.postgresql.org/).

## Setup

Make sure you have [NodeJS](https://nodejs.org/en/), [Yarn](https://yarnpkg.com/en/), and [Docker](https://www.docker.com) installed.

### Starting PostgreSQL locally

1. Install [docker-compose](https://docs.docker.com/compose/install/)
2. Run `docker-compose up`

### Starting a development server

1. Install all dependencies with `yarn`
2. Start a development server with `yarn start`

### Database migrations

[Flyway](https://flywaydb.org) is used to run migrations:
```sh
yarn migrate
```

Currently, it only has one migration `sql/V1_0__init.sql` that adds `uuid-ossp` extension and creates some `user` table.
This command should be run everytime new migrations are added.

## Instructions

1. Create a new `project` table as part of a new migration file `sql/V1_1__project.sql`.
A project should have an id, a name and a project developer that is an existing user from the `user` table.

Your API should be able to:
- create a new project
- list all projects
- query project by id

2. For a given project, we want to add some monitoring data. This can happen as part of multiple monitoring rounds.
Create a new `monitoring_round` table as part of a new migration file `sql/V1_2__monitoring_round.sql`.
A monitoring round should have an id, a date, some metadata stored as JSON and a monitor that is an existing user from the `user` table.

Your API should be able to:
- create a new monitoring round
- list all monitoring rounds for a given project

3. Complete **one of** the following tasks:

  a. In particular, monitoring round metadata can hold the following information:
   - sampling depth
   - list of soil samples with location and total carbon percentage for each of them

   This metadata is stored as [JSON-LD](https://json-ld.org/).
   Write down an example of such metadata in a new `metadata.json` file using the following properties:
   - `http://regen.network/samplingDepth`
   - `http://regen.network/soilSamples` 
   - `http://schema.org/latitude`
   - `http://schema.org/longitude`
   - `http://regen.network/totalCarbonPercentage`

  b. Add some tests for testing your API endpoints in `tests/routes.test.ts`.
  For simplicity sake, tests are just using the same database as the development server.

## Submission

For submission, please fork this repository, open up a PR with your changes and send us an email with a link to this PR.
