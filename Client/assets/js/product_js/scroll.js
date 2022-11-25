
var scrolldefalt = 100;
var posmenu = this.document.getElementById('head');
window.addEventListener('scroll',function(e){
    const scrolled = window.scrollY;
    // console.log(scrolled)
    if(scrolled > scrolldefalt){
        posmenu.style.position = 'fixed';
        posmenu.style.top = 0;
        posmenu.style.margin = "auto";
        //Desired action
    }else{
        posmenu.style.position = 'absolute';
        posmenu.style.top = "150px";
        //Desired action
    }
 
})
