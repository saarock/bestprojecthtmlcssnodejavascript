
const circle = document.querySelector('.circle');
document.addEventListener('mousemove', (e) => {
    circle.style.display = 'block'


    const height = circle.offsetHeight;
    const width = circle.offsetWidth;

    // console.log(e)

    setTimeout(() => {
        circle.style.left = `${e.pageX - width / 2}px`;
        circle.style.top = `${e.pageY - height / 2}px`;
        console.log(`I am pageX=> ${e.pageX} , and i am width ${height} width ${width}`)
    }, 0)

})


// document.body.style.height = '100px'

document.addEventListener('mouseout', () => {
    circle.style.trasition = 10 + 's'
    circle.style.display = 'none'
})




document.body.style.height = 10 + 'px'
document.body.style.overflow = 'hidden'

// Animation gsap and the animation;   
let a = document.querySelector('.loader');
setInterval(() => {
    // a.style.display = 'none';
    document.body.style.height = 100 + '%';
    document.body.style.overflow = 'scroll'

}, 4000);



// Using the libary (gsap)

  // Animate the element when it enters the viewport
  gsap.from('.dev11', {
    x: -50,
    opacity: 0,
    duration: 1,

 
  });


// gsap.from('.dev', {x:-100})
