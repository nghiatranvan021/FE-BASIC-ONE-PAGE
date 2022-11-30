
var scrolldefalt = 100;
var posmenu = this.document.getElementById('head');
var poshead = this.document.getElementsByClassName('header-1');
var poshead2 = this.document.getElementsByClassName('header-2');
window.addEventListener('scroll',function(e){
    const scrolled = window.scrollY;
    console.log(scrolled)
    if(scrolled >= scrolldefalt){
        posmenu.style.position = 'fixed';
        posmenu.style.top = 0;
        posmenu.style.margin = "auto";
        poshead[0].style.display='none';
        poshead2[0].style.display='none';

        //Desired action
    }else if(scrolled < 100){
        posmenu.style.position = 'relative';
        posmenu.style.margin = "40px 0px 0px 0px"
        poshead[0].style.display='flex';
        poshead2[0].style.display='flex';

        //Desired action
    }
 
})
