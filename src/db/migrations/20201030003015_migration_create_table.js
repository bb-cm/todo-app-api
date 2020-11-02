exports.up = function(knex) {
    return knex.schema
        .createTable('user', function(table) {
            table.increments().primary()
            table.varchar('email', 128).notNullable().unique()
            table.varchar('password', 128).notNullable()
            table.timestamp('created_at').defaultTo(knex.fn.now())
            table.timestamp('updated_at').defaultTo(knex.fn.now())
        })
        .createTable('todo', function(table) {
            table.increments().primary()
            table.bigint('user_id').notNullable()
            table
            .foreign('user_id')
            .references('id')
            .inTable('user')
            .onDelete('CASCADE');
            table.varchar('title', 100).notNullable()
            table.timestamp('created_at').defaultTo(knex.fn.now())
            table.timestamp('updated_at').defaultTo(knex.fn.now())
        })
        .createTable('todo_detail', function(table) {
            table.increments().primary()
            table.bigint('todo_id').notNullable()
            table
            .foreign('todo_id')
            .references('id')
            .inTable('todo')
            .onDelete('CASCADE');
            table.varchar('task', 100).notNullable()
            table.boolean('is_done').notNullable().defaultTo(false)
            table.timestamp('created_at').defaultTo(knex.fn.now())
            table.timestamp('updated_at').defaultTo(knex.fn.now())
        })
}

exports.down = function(knex) {
    return knex.schema.dropTable('posts').dropTable('users').dropTable('comments')
}
