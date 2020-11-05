exports.seed = async (knex) => {
  await knex('user').del();

  await knex('user').insert([
    { email: 'test1@t.t', password: 'password' },
    { email: 'test2@t.t', password: 'password' },
    { email: 'test3@t.t', password: 'password' },
  ]);
};
