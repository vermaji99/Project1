const accor=document.querySelectorAll('.acco');
accor.forEach(acco =>{
    const icon=acco.querySelector('.icon');
    const ans=acco.querySelector('.ans');

    acco.addEventListener('click',()=>{
        // icon.classList.toggle('active');
        // ans.classList.toggle('active');
        if(icon.classList.contains('active')){
            icon.classList.remove('active');
            ans.style.maxHeight=null;
        }
        else{
            icon.classList.add('active');
            ans.style.maxHeight=ans.scrollHeight+'px';
        }
    })
})