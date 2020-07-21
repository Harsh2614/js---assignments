//Using Fetch

fetch('https://jsonplaceholder.typicode.com/todos')
.then(response=>response.json())
.then(data=>console.log(data))


let obj = {
    userId:254,
    title:"Some Title",
    completed:'true',
}

fetch('https://jsonplaceholder.typicode.com/todos',{
    method:'POST',
    body: JSON.stringify(obj)
}).then(response=>response.json())
.then(data=>console.log(data))


//Using Async-Await
async function fetchtodos(){
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/random');
    const data = await response.json();

    console.log(data);
}

fetchtodos();