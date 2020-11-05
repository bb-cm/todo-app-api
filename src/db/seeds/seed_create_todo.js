exports.seed = async (knex) => {
  await knex('todo').del();

  const userInfo = await knex('user');
  await knex('todo').insert([
    { user_id: userInfo[0].id, title: '親_todo1' },
    { user_id: userInfo[0].id, title: '親_todo2' },
    { user_id: userInfo[0].id, title: '親_todo3' },
  ]);
};
