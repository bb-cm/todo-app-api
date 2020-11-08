exports.seed = async (knex) => {
  await knex('users').del();

  await knex('users').insert([
    { email: 'test1@t.t', password: 'password' },
    { email: 'test2@t.t', password: 'password' },
    { email: 'test3@t.t', password: 'password' },
  ]);
};
