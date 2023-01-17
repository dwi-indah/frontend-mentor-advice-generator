const adviceId = document.querySelector('#advice-id');
const adviceText = document.querySelector('#advice-text');
const adviceButton = document.querySelector('#advice-button');
const loaderCard = document.querySelector('#card-loader');
const contentCard = document.querySelector('#card-detail');

function displayLoader() {
    loaderCard.classList.add("-active");
    contentCard.classList.remove("-active");

    setInterval(() => {
        loaderCard.classList.remove("-active");
        contentCard.classList.add("-active");
    }, 3000)
}

function generateAdvice() {
    displayLoader();
    fetch("https://api.adviceslip.com/advice")
        .then((resp) => resp.json())
        .then((resp) => {
            let data = resp.slip;
            let dataId = data.id;
            let dataText = data.advice;

            adviceId.innerHTML = dataId;
            adviceText.innerHTML = `"${dataText}"`;
        });
}

adviceButton.addEventListener("click", () => {
    generateAdvice();
})