//POST Request to a server that accepts POST method


const PostSender = async() => {
	const promise = await fetch('https://reqres.in/api/users', {
	method: 'POST',
	headers: {
		'Content-Type':'application/json'
	},
		body: JSON.stringify({
			first_name: 'mark',
			last_name: 'winson' 
		}),
		
	});

	const data = await promise.json();
	console.log(data);
}

PostSender();
