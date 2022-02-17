document.onload = setInterval(() => {
    document.getElementById('dev').className = (document.getElementById('dev').className == 'visible') ? 'hidden' : 'visible';
    document.getElementById('pro').className = (document.getElementById('dev').className == 'visible') ? 'hidden' : 'visible';
}, 4000);
