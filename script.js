var docHeight = window.innerHeight;
function trigger(){    
    setHeightAndWidth();
}
function setHeightAndWidth(){
    document.getElementById('container').style.height = docHeight + "px";
    document.getElementById('centrallayer').style.height = docHeight - 115 + 'px';
}