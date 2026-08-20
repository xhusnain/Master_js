const api = "https://api.restful-api.dev/objects/7"
const data = await fetch(api)
.then(res => res.json())
console.log(data)

