const sendData = (path, data) =>{
    fetch(path, {
        method: 'post',
        headers: new headers({
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => processData(data))
}

const processData = data =>{
    console.log(data)
}