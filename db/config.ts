import { defineDb, defineTable, column } from 'astro:db';

const User = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    email: column.text({ unique: true }),
    username: column.text({ unique: true }),
  }

})

const Todo = defineTable({
  columns: {
    user_id: column.number({references: () => User.columns.id}),
    category_id: column.number({references: () => Category.columns.id}),
    id: column.number({ primaryKey: true }),
    title: column.text(),
    description: column.text(),
    completed: column.boolean()
  }
})

const Category = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    label: column.text({unique: true})
  }
})

// https://astro.build/db/config
export default defineDb({
  tables: {
    User,
    Todo,
    Category
  }
});
