
const link1 = document.querySelector('.link-one')
const link2 = document.querySelector('.link-two')
const link3 = document.querySelector('.link-three')
const CubeShirma = document.querySelector('.cube-shirma')
const CubeOpen = document.querySelector('.openCube')
const Cube = document.querySelector('.cube')
const CubeDiv = document.querySelector('.cube div')
const CubeDivSpan = document.querySelectorAll('.cube .big span')
const CubeDivSpanTop = document.querySelector('.cube .big span.top')
const CubeDivSpanBottom = document.querySelector('.cube .big span.bottom')
const CubeDivSpanTopBefor = document.querySelector('.cube .big span.top::before')
const mainButtons01 = document.querySelectorAll('.nav-item')



CubeShirma.addEventListener('click', ()=> {
    CubeShirma.style.animationName = 'animopac'
    setTimeout(()=>{

CubeShirma.style.display = 'none'
Cube.style.overflow = 'visible'
Cube.style.background = 'transparent'
CubeDiv.style.transform = 'rotateX(-20deg) rotateY(-25deg)'
CubeDivSpan.forEach((elem, index) => {
    CubeDivSpan[index].style.transform = 'rotateY(calc(90deg * var(--i))) translateZ(150px)'
    CubeDivSpan[index].style.border = '10px solid blue'
    CubeDivSpan[index].style.borderRadius = '15px'
    CubeDivSpan[index].style.filter = 'drop-shadow(0 0 20px blue)'
})
CubeOpen.style.background = 'rgba($color: black, $alpha: 0.0)'
CubeOpen.style.display = 'none'

setTimeout(() => {
    link1.innerHTML = ''
    setTimeout(() => {link1.innerHTML += 'G'},100)
    setTimeout(() => {link1.innerHTML += 'I'},200)
    setTimeout(() => {link1.innerHTML += 'T'},300)
    setTimeout(() => {link1.innerHTML += 'H'},400)
    setTimeout(() => {link1.innerHTML += 'U'},500)
    setTimeout(() => {link1.innerHTML += 'B'},600)
    link2.innerHTML = ''

    setTimeout(() => {link2.innerHTML += 'L'},100)
    setTimeout(() => {link2.innerHTML += 'I'},200)
    setTimeout(() => {link2.innerHTML += 'N'},300)
    setTimeout(() => {link2.innerHTML += 'K'},400)
    setTimeout(() => {link2.innerHTML += 'E'},500)
    setTimeout(() => {link2.innerHTML += 'D'},600)
    setTimeout(() => {link2.innerHTML += 'I'},700)
    setTimeout(() => {link2.innerHTML += 'N'},800)

    link3.innerHTML = ''
    setTimeout(() => {link3.innerHTML += 'E'},100)
    setTimeout(() => {link3.innerHTML += 'M'},200)
    setTimeout(() => {link3.innerHTML += 'A'},300)
    setTimeout(() => {link3.innerHTML += 'I'},400)
    setTimeout(() => {link3.innerHTML += 'L'},500)
    

},3000)

CubeDivSpanTop.style.transform = 'rotateX(90deg) translateZ(150px)'
CubeDivSpanBottom.style.transform = 'rotateX(90deg) translateZ(-150px)'

},2500)
})
let xx = 0;

setTimeout(()=>{
    CubeDivSpan[0].addEventListener('mouseover', ()=>{
        CubeDiv.style.transform = 'rotateX(0deg) rotateY(0deg)'
    
    })
    CubeDivSpan[0].addEventListener('mouseout', ()=>{
        CubeDiv.style.transform = 'rotateX(-20deg) rotateY(-25deg)'
    
    })
    CubeDivSpan[1].addEventListener('mouseover', ()=>{
        CubeDiv.style.transform = 'rotateX(0deg) rotateY(-90deg)'
    
    })
    CubeDivSpan[1].addEventListener('mouseout', ()=>{
        CubeDiv.style.transform = 'rotateX(-20deg) rotateY(-25deg)'
    
    })
    CubeDivSpanTop.addEventListener('mouseover', ()=>{
        CubeDiv.style.transform = 'rotateX(-90deg) rotateY(0deg)'
    
    })
    CubeDivSpanTop.addEventListener('mouseout', ()=>{
        CubeDiv.style.transform = 'rotateX(-20deg) rotateY(-25deg)'
    
    })


},3000)


