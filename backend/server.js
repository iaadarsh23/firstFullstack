import e from "express";
const app = e();

app.get("/", (req, res) => {
	res.send("server is ready");
});

app.get("/jokes", (req, res) => {
	const joke = [
		{
			id: 1,
			title: "Programming",
			content:
				"Why do programmers prefer dark mode? Because light attracts bugs!",
		},
		{
			id: 2,
			title: "JavaScript",
			content:
				"Why do JavaScript developers need glasses? Because they don't see sharp!",
		},
		{
			id: 3,
			title: "Database",
			content:
				"Why did the database administrator leave his wife? She had too many relationships!",
		},
		{
			id: 4,
			title: "HTML",
			content:
				"Why don't HTML and CSS go to parties? Because they don't know how to style themselves!",
		},
		{
			id: 5,
			title: "Git",
			content: "Why did the git commit suicide? It had too many conflicts!",
		},
		{
			id: 6,
			title: "Python",
			content: "Why do Python programmers wear glasses? Because they can't C!",
		},
		{
			id: 7,
			title: "Hardware",
			content: "What's a computer's favorite snack? Microchips!",
		},
		{
			id: 8,
			title: "Software",
			content:
				"What did the software say to the hardware? You're hard to work with!",
		},
		{
			id: 9,
			title: "Binary",
			content:
				"There are 10 types of people in the world: those who understand binary and those who don't!",
		},
		{
			id: 10,
			title: "Bug",
			content: "It's not a bug, it's an undocumented feature!",
		},
	];
	res.send(joke);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`server is running at: ${port}`);
});
