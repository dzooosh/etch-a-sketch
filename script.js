document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector('.container');
    const input = document.querySelector('#pixel_range');
    const divNum = input.value;

    const isMouseDown = false;

    
    if (divNum != input.value) {
        input.addEventListener("input", (event) => {
            const newValue = event.target.value;
            console.log(newValue)

        });
    }
    // addEventListener incase there is changes in value
        
    console.log(divNum);

    // creating any numXnum DIVs using flex display
    for (let i = 0; i < (divNum * divNum); i++){
        const box = document.createElement('div');
        box.className = "box";
        const num = 100 / divNum;
        const widthNum = Math.round(num * 1000) / 1000;
        
        box.style.flexBasis = `calc(${widthNum}% - 2px)`;
        // if mouse goes over div change color
        box.addEventListener("mouseover", () => {
            box.classList.add('hovered');
        });
        container.appendChild(box);
    }

    
});    

