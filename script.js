const container = document.querySelector('.container');

// creating 16x16 DIVs
for (let i = 0; i < (16*16); i++){
    // create a div that with display: flex or
    // use flex wrap on the container
    //for (let j = 0; j < 16; j++){ 
    const box = document.createElement('div');
    box.className = "box";    
    //divide the length of the container to get each div size
    //create and insert each div in the container
    container.appendChild(box)
}
box.style.cssText = "width:(500/16); height:(500/16); border: 1px solid black"

    // add the parent div to the container class
