export const getImage = async (search) => {

	const response = await fetch("https://api.openai.com/v1/images/generations",{
		method: "POST",
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${import.meta.env.VITE_OPENAI}`,
			'User-Agent': "Chrome"
		},
		body: JSON.stringify({
			prompt: search,
			n: 1,
			size: "512x512"
		}),
	})

	let data = await response.json();
	console.log( data )
	let imageObj = {
		title: search,
		img: data.data[0].url
	}

	return imageObj;

}