import { db, User, Category, Todo } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	// User
	await db.insert(User).values([
		{
			id: 1,
			email: 'JXQpL@example.com',
			username: 'admin'
		},
		{
			id: 2,
			email: 'quepex@pepe.com',
			username: 'pepe'
		},
		{
			id: 3,
			email: 'nvite@gmail.com',
			username: 'nvite'
		}
	])

	await db.insert(Category).values([
		{
			id: 1,
			label: 'Personal'
		},
		{
			id: 2,
			label: 'Trabajo'
		},
		{
			id: 3,
			label: 'Hobby'
		}
	])

	await db.insert(Todo).values([
		{
			user_id: 2,
			category_id: 1,
			id: 1,
			title: 'Tarea 1',
			description: 'Hacerse wey',
			completed: false
		},
		{
			user_id: 1,
			category_id: 3,
			id: 2,
			title: 'Tarea 2',
			description: 'Lavarse los dientes',
			completed: false
		},
		{
			user_id: 3,
			category_id: 2,
			id: 3,
			title: 'Tarea 3',
			description: 'prender db',
			completed: false
		}
	])
}