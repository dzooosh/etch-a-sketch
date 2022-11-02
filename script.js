const container = document.querySelector('.container');

// creating 16x16 DIVs
for (let i = 0; i < 50; i++){
    // create a div that with display: flex or
    const line = document.createElement('div');
    line.style.cssText = "display:flex;"
    // use flex wrap on the container
    for (let j = 0; j < 50; j++){ 
        const box = document.createElement('div');
        box.className = "box";
        box.style.cssText = "margin=0;width:8px; height:8px;border: 0.5px solid grey;"
        line.appendChild(box)
    //divide the length of the container to get each div size
    //create and insert each div in the container
    container.appendChild(line)
}
}    
// add the parent div to the container class
