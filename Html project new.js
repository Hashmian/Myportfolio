//Smooth scrolling for navigation links

document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

///menu dropdown

document.getElementById('menu-icon').addEventListener('click', function() {
    var navLinks = document.getElementById('nav-links');
    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
    }
});

//arrow top function
    
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scrolling behavior
    });
}


//contact page

document.querySelector('.contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Message sent!');
});

// likes-container
function increaseLikes(element) {
    let likeCountElement = element.nextElementSibling;
    let likeCount = parseInt(likeCountElement.textContent);
    likeCountElement.textContent = likeCount + 1;
}


