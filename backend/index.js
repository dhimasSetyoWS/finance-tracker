import e from "express";
import cors from "cors";
import prisma from "./src/prisma.js";
const app = e();
const PORT = 3000;

app.use(e.json())
app.use(cors())


app.get('/' , async (req , res) => {
	try {
		const response = await prisma.transactions.findMany()
		res.json(response);
	} catch(err) {
		console.error(err)
	}
})

app.post('/' , async (req, res) => {
	try {
		const {title , amount, type, category, payment_method, date } = req.body
		const response = await prisma.transactions.create(
			{
				data : {
					title,
					amount,
					type,
					category,
					payment_method,
					date
				}
			}
		)
	} catch(err) {
		console.error(err);
	}
})

app.put("/:id" , (req, res) => {
});

app.listen(PORT, () => {
	console.log(`App currently running at port : ${PORT}`)
})

