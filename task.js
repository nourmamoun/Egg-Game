window.addEventListener("load", function () {
    let eggImage = createEggImage();
    let basketImage = createBasketImage();
    let scoreDiv = this.document.querySelector(".scoreCounter");
    let timerCount = this.document.querySelector("#timerCount");
    let intervalID;
    let isGameOver = false;
    let score = 0;
    let timer = 30;

    //updating basket position
    function updateBasketPosition(e) {
        basketImage.style.left = `${e.x}px`;
    }

    //reset egg position
    function resetEggPosition() {
        eggImage.style.position = "relative";
        eggImage.style.top = "0px";
        eggImage.style.left = `${Math.random() * (window.innerWidth)}px`;

    }

    //timer counter
    const countDown = setInterval(() => {
        timerCount.textContent = `Time Left is ${timer}s`;
        timer--;
        if (timer < 0) {
            this.clearInterval(countDown);
            this.clearInterval(intervalID);
            isGameOver = true;
            timerCount.textContent = "Time is Up!";
        }

    }, 1000);


    //moving egg downward
    function movingEgg() {

        resetEggPosition();
        let top = 0;


        intervalID = setInterval(() => {
            eggImage.src = "egg.png"
            while (checkCollision(eggImage, basketImage) && !isGameOver) {
                score++;
                scoreDiv.innerHTML = `<h1>Score: ${score}</h1>`;
                resetEggPosition();
                top = 0;
            }

            top += 20;
            eggImage.style.top = `${top}px`;

            if (top >= window.innerHeight - 200) {
                eggImage.src = "egg_cracked.png"
                setTimeout(() => {
                    if (!isGameOver) {
                        resetEggPosition();
                        eggImage.src = "egg.png"
                        top = 0;

                    }
                }, 100);
    
            }

        }, 100);

    }

    //moving basket by mouse
    this.document.onmousemove = updateBasketPosition;

    movingEgg();







})