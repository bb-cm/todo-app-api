exports.seed = async (knex) => {
  await knex('todo_details').del();

  const todoInfo = await knex('todos');
  await knex('todo_details').insert([
    { todo_id: todoInfo[0].id, task: '子_todo1' },
    { todo_id: todoInfo[0].id, task: '子_todo2' },
    { todo_id: todoInfo[0].id, task: '子_todo3', is_done: false },
  ]);
};
