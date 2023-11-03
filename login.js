// Insert your code here

document.querySelector('#register').addEventListener('click', function (){
    const name = document.querySelector('#registerName').value;
    const email = document.querySelector('#registerEmail').value;
    const password = document.querySelector('#registerPassword').value;

    
    fetch('https://weatherapp-backend-five-omega.vercel.app/users/signup', {
        method: 'POST',
        headers : {'Content-Type': 'application/json' },
        body: JSON.stringify({
            name,
            email,
            password
        })
    })
        .then(response => response.json())
        .then(data => {
        
            if (data.result === true) {
                window.location.assign('http://127.0.0.1:5500/Projets/lacapsule-fullstack-js/week3/weatherapp-part4/frontend/index.html')
            }
        })
});

document.querySelector('#connection').addEventListener('click', function (){
    const email = document.querySelector('#connectionEmail').value;
    const password = document.querySelector('#connectionPassword').value;

    fetch('https://weatherapp-backend-five-omega.vercel.app/users/signin', {
        method: 'POST',
        headers : {'Content-Type': 'application/json' },
        body: JSON.stringify({
            email,
            password
        })
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (data.result === true) {
                window.location.assign('http://127.0.0.1:5500/Projets/lacapsule-fullstack-js/week3/weatherapp-part4/frontend/index.html')
            }
        })

});