$('.side-link').click(function(){
    $('#MainTitle').text($(this).text())
    $('.side-link.active').removeClass("active")
    $(this).addClass('active')
    console.log($(this).text())
})