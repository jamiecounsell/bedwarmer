$(document).ready(function() {
    $('body').fadeIn(1000);
})

$('.next').click(function() {
    document.querySelector('#listen').scrollIntoView({ behavior: 'smooth' })
});
