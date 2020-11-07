exports.seed = async (knex) => {
  await knex('todos').del();

  const userInfo = await knex('users');
  await knex('todos').insert([
    { user_id: userInfo[0].id, title: '親_todo1' },
    { user_id: userInfo[0].id, title: '親_todo2' },
    { user_id: userInfo[0].id, title: '親_todo3' },
  ]);
};
