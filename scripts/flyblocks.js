let container = document.querySelector(".fly-blocks")
let number = 20;
let n = 1
    const elementsToDelete = document.getElementsByClassName("block");
    while (elementsToDelete.length > 0) {
     elementsToDelete[0].parentNode.removeChild(elementsToDelete[0]);
    }
    for (let i = 0; i < number; i++) {
        setTimeout(()=>{
            let blocks = document.createElement('div')
            blocks.classList.add('big-block')
            container.appendChild(blocks)
            let block = document.createElement('div')
            block.classList.add('block')
            blocks.appendChild(block)
         generate(block,blocks)
        },i*1000)

    }  

  

      
   
let generate = (block,blocks) =>{
    let randomNumber;

        if(n % 2 == 0){
                randomNumber = -Math.floor(Math.random() * 100);
        }else{
            randomNumber = Math.floor(Math.random() * 80);
        }
        n++
        let random = Math.floor(Math.random() * 150) + 'px'

        blocks.style.top = Math.floor(Math.random() * 200) + "%"
        blocks.style.left = randomNumber + "%"
        blocks.style.width = random
        blocks.style.height  = random
        block.style.top = Math.floor(Math.random() * 200) + "%"
        block.style.left = randomNumber + "%"
        block.style.width = random
        block.style.height  = random
        blocks.setAttribute('data-speed','50')
        blocks.setAttribute('data-offset','50')
}

