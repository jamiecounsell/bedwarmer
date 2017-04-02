$(document).ready(function() {
    $('body').fadeIn();
})

$('.next').click(function() {
    document.querySelector('#listen').scrollIntoView({ behavior: 'smooth' })
});
