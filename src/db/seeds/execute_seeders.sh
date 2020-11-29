#!/bin/bash
npx knex seed:run --specific=seed_create_users.js
npx knex seed:run --specific=seed_create_todos.js
npx knex seed:run --specific=seed_create_todo_details.js