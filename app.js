window.addEventListener('scroll', function() {
    reveal();
});

function reveal() {
    var reveals = document.querySelectorAll('.animate-left, .animate-right , .reveal');
    var windowHeight = window.innerHeight;

    reveals.forEach(function(reveal) {
        var revealTop = reveal.getBoundingClientRect().top;
        var revealPoint = windowHeight - 100; // Adjust this value as needed

        if (revealTop < revealPoint) {
            reveal.classList.add('active');
        } else {
            reveal.classList.remove('active');
        }
    });
}
