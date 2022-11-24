var scrollBefore = 10;
var scrolldefalt = 10;
var posmenu = this.document.getElementById('head');
window.addEventListener('scroll',function(e){
    const scrolled = window.scrollY;
 
    if(scrolled > scrolldefalt){
        console.log(posmenu.style.display);
        posmenu.style.position = 'fixed';
        posmenu.style.top = 0;
        //Desired action
    }else{
        posmenu.style.position = 'absolute';
        posmenu.style.top = '100px';
        //Desired action
    }
 
})
