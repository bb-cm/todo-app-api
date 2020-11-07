exports.seed = async (knex) => {
  await knex('todo_detail').del();

  const todoInfo = await knex('todo');
  await knex('todo_detail').insert([
    { todo_id: todoInfo[0].id, task: '子_todo1' },
    { todo_id: todoInfo[0].id, task: '子_todo2' },
    { todo_id: todoInfo[0].id, task: '子_todo3', is_done: false },
  ]);
};
