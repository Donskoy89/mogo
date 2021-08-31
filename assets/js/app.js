
window.onload = function() {
    
    // Nav ***************
    
    let introH = document.getElementById('intro').getBoundingClientRect();
    let header = document.getElementById('header');
    let scrollOffset = 0;
    
    nav()
    
    window.onscroll = function() {
        nav();
    };
    
    function nav() {
        scrollOffset = this.scrollY;
        
        
        if(scrollOffset > introH.height) {
            header.classList.add('fixed');
        }
        else {
            header.classList.remove('fixed');
        }
    }
    
    // Burger ***************
    document.getElementById('nav__toggle').onclick = function() {
        this.classList.toggle('active');
        
        if(this.classList.contains('active')) {
            document.getElementById('nav').style.display = 'block';
        }
        else {
            document.getElementById('nav').style.display = 'none';
        }
    }
}    
    
   
















