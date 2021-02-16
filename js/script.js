const navbarSupportedContent = document.querySelector('#home #navbarSupportedContent');
const nav_list = document.querySelectorAll('#home .navbar .collapse .navbar-nav .nav-item .nav-link');


$(function(){
    $('[data-toggle="tooltip"]').tooltip();
    $('.btn-group-fab').on('click',function (){
        $('.btn-group-fab').toggleClass('active');
    });
});
