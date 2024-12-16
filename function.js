//egg image
function createEggImage(){
    let eggImage = document.createElement("img");
    eggImage.src="egg.png";
    eggImage.style.position="absolute";
    eggImage.style.width="50";
    eggImage.style.height="100px";
    eggImage.style.zIndex="10"

    let screenWidth = window.innerWidth;
    let randomPositionX = Math.random()*(screenWidth-50);

    eggImage.style.left=`${randomPositionX}px`;
    eggImage.style.top="0px";
    
    document.body.append(eggImage);
    return eggImage;
}



//basket image
function createBasketImage(){
    let basketImage = document.createElement("img");
    basketImage.src="basket.png";
    basketImage.style.position="absolute";
    basketImage.style.width="100px";
    basketImage.style.height="100px";
    basketImage.style.top=`${window.innerHeight-100}px`
    document.body.appendChild(basketImage);
    return basketImage;
}

//if two images touches each other
function checkCollision(egg,basket){
    let eggBoundries = egg.getBoundingClientRect();
    let basketBoundries = basket.getBoundingClientRect();

    return(
        eggBoundries.top + eggBoundries.height >= basketBoundries.top &&
        eggBoundries.top <= basketBoundries.bottom &&
        eggBoundries.left + eggBoundries.width/2 >= basketBoundries.left&&
        eggBoundries.left + eggBoundries.width/2 <= basketBoundries.right 
        
    )

}

