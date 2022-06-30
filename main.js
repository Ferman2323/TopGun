let topGun = document.querySelector('.top');
// let bullet = document.querySelector('.bullet');

createBullet();

function createBullet(){
    // setInterval(createBullet,2000);
    let text = document.createElement('h1');
    topGun.appendChild(text);
    text.style.top = '-50' + 'px'
    document.addEventListener('keyup', event =>{
        if(event.code === 'Space'){
            text.style.top = parseInt(text.style.top) - '20' + 'px';
        }
    })
}



// bullet.style.top = '-30' + 'px';

// setInterval(function(){
//  bullet.style.top = parseInt(bullet.style.top) - '20' + 'px';
// },300)