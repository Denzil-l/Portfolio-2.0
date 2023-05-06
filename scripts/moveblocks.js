// const flyBlocks = document.querySelector('.fly-blocks');
// let blocks = document.querySelectorAll('.block');
// setInterval(()=>{
//     blocks = document.querySelectorAll('.block');
//     flyBlocks.addEventListener('mousemove', e => {
//       console.log(blocks)
//     const x = e.clientX / window.innerWidth;
//     blocks.forEach(block => {
//       const speed = block.getAttribute('data-speed');
//       const offset = block.getAttribute('data-offset');
//       const styles = window.getComputedStyle(block);
//       const leftValue = parseInt(styles.getPropertyValue("left"));
//       const distance = parseInt((x - 0.5) * speed + offset);
//       block.style.transform = `translateX(${distance}px)`;
//       // block.style.left = `${leftValue + distance}px`;
//     });
//   });
// },1000)



// const circle = document.querySelector('.circle');

// document.addEventListener('mousemove', e => {
//   circle.style.left = e.pageX - circle.offsetWidth / 2 + 'px';
//   circle.style.top = e.pageY - circle.offsetHeight / 2 + 'px';
// });


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
    block.style.transform = `translateX(${distance}px)`;
  });
});

const circle = document.querySelector('.circle');

document.addEventListener('mousemove', e => {
  circle.style.left = e.pageX - circle.offsetWidth / 2 + 'px';
  circle.style.top = e.pageY - circle.offsetHeight / 2 + 'px';
});
