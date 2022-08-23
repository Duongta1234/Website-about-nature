
var unlock = document.getElementById('unlock-mobile-list');
var mobile_list = document.getElementById('mobile-list');
unlock.addEventListener('click',function(){
    
    if(mobile_list.style.display==='block'){
        mobile_list.style.display='none'
    }else{
        mobile_list.style.display='block'
    }
})