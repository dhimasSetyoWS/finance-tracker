import e from "express";
import cors from "cors";
import prisma from "./src/prisma.js";
const app = e();
const PORT = 3000;

app.use(e.urlencoded({ extended: false }))
app.use(e.json())
app.use(cors())


app.get('/', async (req, res) => {
	try {
		const response = await prisma.transactions.findMany()
		res.json(response);
	} catch (err) {
		console.error(err);
		res.status(500).json({
			error: err
		})
	}
})

app.get("/summary", async (req, res) => {
	try {
		const income = await prisma.transactions.aggregate({
			_sum: { amount: true },
			where: { type: 'INCOME' }
		})

		const expense = await prisma.transactions.aggregate({
			_sum: { amount: true },
			where: { type: 'EXPENSE' }
		})

		const totalIncome = income._sum.amount || 0
		const totalExpense = expense._sum.amount || 0

		res.json({
			totalIncome,
			totalExpense,
			balance: totalIncome - totalExpense
		})
	} catch (err) {
		console.error(err)
	}
})

app.get('/:id', async (req, res) => {
	try {
		const response = await prisma.transactions.findUnique({
			where: {
				id: parseInt(req.params.id)
			}
		});
		res.json(response);
	} catch (err) {
		console.error(err);
		res.status(500).json({
			error: err
		})
	}
})

app.post('/', async (req, res) => {
	try {
		const { title, amount, type, category, payment_method, date } = req.body
		const response = await prisma.transactions.create(
			{
				data: {
					title,
					amount: parseFloat(amount),
					type,
					category,
					payment_method,
					date
				}
			}
		)
		res.json(response);
	} catch (err) {
		console.error(err);
		res.status(500).json({
			error: err
		})
	}
})

app.put("/:id", async (req, res) => {
	try {
		const { title, amount, type, category, payment_method, date } = req.body
		const response = await prisma.transactions.update(
			{
				where: {
					id: parseInt(req.params.id)
				},
				data: {
					title,
					amount : parseFloat(amount),
					type,
					category,
					payment_method,
					date
				}
			}
		)
		res.json(response);
	} catch (err) {
		console.error(err);
		res.status(500).json({
			error: err
		})
	}
});

app.delete("/:id", async (req, res) => {
	try {
		const response = await prisma.transactions.delete({
			where: {
				id: parseInt(req.params.id)
			}
		})
		res.json(response);
	} catch (err) {
		console.error(err);
		res.status(500).json({
			error: err
		})
	}
});

app.listen(PORT, () => {
	console.log(`App currently running at port : ${PORT}`)
})

