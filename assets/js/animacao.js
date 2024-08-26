document.getElementById('logoLink').addEventListener('click', function (e) {
    e.preventDefault();
    this.classList.add('shoot-effect');
    
    setTimeout(() => {
        this.classList.remove('shoot-effect');
    }, 300); 
});