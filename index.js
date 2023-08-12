fetch('localhost:400/get-data')
.then(response => response.json())
.then(data => {
    document.getElementById('background1').style.visibility = hidden;
    console.log('done')
})

