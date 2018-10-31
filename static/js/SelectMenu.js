$('.nav-link').click(function(){
    $('#SubTitle').text($(this).children('.text').text())
    $('.nav-link.active').removeClass("active")
    $(this).addClass('active')
    console.log($(this).children('.text').text())
})