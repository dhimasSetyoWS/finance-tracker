import axios from "axios";
async function getAllTransaction() {
	try {
		const response = await axios.get(`${import.meta.env.VITE_API_URL}/`);
		return response.data;
	} catch(err) {
		console.error(err);
		return err;
	}
}

async function getIdTransaction(id) {
	try {
		const response = await axios.get(`${import.meta.env.VITE_API_URL}/${id}`);
		return response.data;
	} catch(err) {
		console.error(err);
		return err;
	}
}

async function createTransaction(data) {
	try {
		data = {
			...data,
			amount : data.amount.replace("." , "")
		}
		const response = await axios.post(`${import.meta.env.VITE_API_URL}/`, data);
		return response.data;
	} catch(err) {
		console.error(err);
		return err;
	}
}

async function summaryTransaction() {
	try {
		const response = await axios.get(`${import.meta.env.VITE_API_URL}/summary`);
		return response.data;
	} catch(err) {
		console.error(err)
	}
}

async function deleteTransaction(id) {
	try {
		const response = await axios.delete(`${import.meta.env.VITE_API_URL}/${id}`);
		return response.data;
	} catch(err) {
		console.error(err);
		return err;
	}
}

console.log(import.meta.env.VITE_API_URL);
export {getAllTransaction, getIdTransaction, createTransaction, summaryTransaction, deleteTransaction}
