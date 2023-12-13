//Connect with server and fetch promised data
//Replace Text in braces {} to be replaced with text without braces

const getRequest = async() => {
	//If connection fails or bad link
	try{
		const promise = await fetch('{ An api Endpoint link }');
		const data = await promise.json();
		if (!promise.ok){
			console.log('Error above 200');
		}

		console.log(data);
	} catch(error){
		console.log(error);
	}
}

getRequest();

