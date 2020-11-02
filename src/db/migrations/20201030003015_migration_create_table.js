exports.up = function(knex) {
    return knex.schema
        .createTable('user', function(table) {
            table.increments().primary()
            table.bigint('email', 128).notNullable()
            table.varchar('password', 128).notNullable()
            table.timestamp('created_at').defaultTo(knex.fn.now())
            table.timestamp('updated_at').defaultTo(knex.fn.now())
        })
        .createTable('todo_list', function(table) {
            table.increments().primary()
            table.bigint('user_id').notNullable()
            table.varchar('neme', 100).notNullable()
            table.timestamp('created_at').defaultTo(knex.fn.now())
            table.timestamp('updated_at').defaultTo(knex.fn.now())
        })
        .createTable('todo_task', function(table) {
            table.increments().primary()
            table.bigint('todo_id').notNullable()
            table.varchar('name', 100).notNullable()
            table.boolean('is_done').notNullable()
            table.timestamp('created_at').defaultTo(knex.fn.now())
            table.timestamp('updated_at').defaultTo(knex.fn.now())
        })
}

exports.down = function(knex) {
    return knex.schema.dropTable('posts').dropTable('users').dropTable('comments')
}
