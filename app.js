window.addEventListener('scroll', function() {
    reveal();
});

function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    var windowHeight = window.innerHeight;

    reveals.forEach(function(reveal) {
        var revealTop = reveal.getBoundingClientRect().top;
        var revealPoint = windowHeight - 10; 

        if (revealTop < revealPoint) {
            reveal.classList.add('active');
        } else {
            reveal.classList.remove('active');
        }
    });
}
