window.addEventListener('load', function() {
    if (!localStorage.getItem('welcomeShown')) {
        localStorage.setItem('welcomeShown', 'true');
        document.getElementById('welcome-screen').style.display = 'block'; 
        document.getElementById('content').style.display = 'none'; 
    }
});

document.getElementById("windowsButton").addEventListener("click", function() {
    document.getElementById("homePage").style.display = "none"; 
    document.getElementById("windowsPage").style.display = "block"; 
});

document.getElementById("linuxButton").addEventListener("click", function() {
    document.getElementById("homePage").style.display = "none"; 
    document.getElementById("linuxPage").style.display = "block"; 
});

document.getElementById("backToHomeButton").addEventListener("click", function() {
    document.getElementById("windowsPage").style.display = "none"; 
    document.getElementById("homePage").style.display = "block"; 
});

document.getElementById("backToHomeButtonLinux").addEventListener("click", function() {
    document.getElementById("linuxPage").style.display = "none"; 
    document.getElementById("homePage").style.display = "block"; 
});