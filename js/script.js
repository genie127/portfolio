AOS.init();

const skill_li = document.querySelectorAll('.skill_li li'),
    pointColor = '#1B6DC5';
;

skill_li.forEach(function(e, idx){
    e.addEventListener('mouseenter', function(){
        e.style.backgroundImage = `linear-gradient(90deg, #fff 0%, #fff ${e.getAttribute('data-percent')}, #333 ${e.getAttribute('data-percent')})`
        e.querySelector('.color').style.width = e.getAttribute('data-percent')
    })
    e.addEventListener('mouseleave', function(){
        e.style.backgroundImage = 'none'
        e.querySelector('.color').style.width = 0
    })
})

const workImg = document.querySelectorAll('.workConImg');

workImg.forEach(function(e, idx){
    e.addEventListener('mouseenter', function(){
        this.querySelector('img').style.top = -(e.querySelector('img').height - 300)+'px'
    })
    e.addEventListener('mouseleave', function(){
        e.querySelector('.workConImg img').style.top = 0+'px'
    })
})