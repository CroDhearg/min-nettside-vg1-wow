document.getElementById('signup').addEventListener('submit', function(event) { 
    event.preventDefault(); 
     
    const username = document.getElementById('signup-username').value; 
    const password = document.getElementById('signup-password').value; 
 
    fetch('YOUR_API_ENDPOINT/signup', { 
        method: 'POST', 
        headers: { 
            'Content-Type': 'application/json', 
        }, 
        body: JSON.stringify({ username, password }), 
    }) 
    .then(response => response.json()) 
    .then(data => { 
        alert(data.message); 
    }) 
    .catch((error) => { 
        console.error('Error:', error); 
    }); 
}); 
 
document.getElementById('login').addEventListener('submit', function(event) { 
    event.preventDefault(); 
     
    const username = document.getElementById('login-username').value; 
    const password = document.getElementById('login-password').value; 
 
    fetch('YOUR_API_ENDPOINT/login', { 
        method: 'POST', 
        headers: { 
            'Content-Type': 'application/json', 
        }, 
        body: JSON.stringify({ username, password }), 
    }) 
    .then(response => response.json()) 
    .then(data => { 
        alert(data.message); 
    }) 
    .catch((error) => { 
        console.error('Error:', error); 
    }); 
}); 