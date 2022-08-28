const fs = require("fs");
async function query(filename) {
	const data = fs.readFileSync(filename);
	const response = await fetch(
		"https://api-inference.huggingface.co/models/facebook/detr-resnet-50",
		{
			headers: { Authorization: "Bearer {API_TOKEN}" },
			method: "POST",
			body: data,
		}
	);
	const result = await response.json();
	return result;
}

module.exports = query;
