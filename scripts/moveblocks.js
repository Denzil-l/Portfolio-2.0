

const fly = document.querySelector('.fly-blocks');
let blocks = document.querySelectorAll('.big-block');
setInterval(()=>{
  blocks = document.querySelectorAll('.big-block');
},1000)

fly.addEventListener('mousemove', e => {
  const x = e.clientX / window.innerWidth;
  blocks.forEach(block => {
    const speed = block.getAttribute('data-speed');
    const offset = block.getAttribute('data-offset');
    const distance = (x - 0.5) * speed*0.5 + offset;
    console.log(distance)
    block.style.transform = `translateX(${distance}px)`;
  });
});

const circle = document.querySelector('.circle');

document.addEventListener('mousemove', e => {
  circle.style.left = e.pageX - circle.offsetWidth / 2 + 'px';
  circle.style.top = e.pageY - circle.offsetHeight / 2 + 'px';
});
