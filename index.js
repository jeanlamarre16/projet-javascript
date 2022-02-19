var f = document.getElementById('foo');
document.addEventListener('click', function(ev){
    f.style.transform = 'translate('+(ev.clientX-25)+'px, ' + (ev.clientY-25)+'px)';
},false);