let linkIndex = document.querySelector('a')

document.addEventListener("keyup", (e) => {
    console.log(e.key);
    console.log(e.code);
    
    if(e.code =='Space'){
        linkIndex.click()
    }
        
} )