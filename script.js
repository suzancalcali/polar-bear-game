const polar = document.getElementById('polar');
const oil = document.getElementById('oil');
const score = document.getElementById('score');

function jump () {
    polar.classList.add('jump-animation');
    setTimeout(() => {
        polar.classList.remove('jump-animation');
    }, 750);
}

document.addEventListener('keypress', () => {
    if (!polar.classList.contains('jump-animation')) {
     jump();
    }
});

setInterval(() => {
    score.innerText++;
    const polarTop = parseInt(window.getComputedStyle(polar)
      .getPropertyValue('top'));
    const oilLeft = parseInt(window.getComputedStyle(oil)
      .getPropertyValue('left'));  

    if (oilLeft < 0) {
          oil.style.display = 'none';
    } else {
          oil.style.display = '';
    }

    if (oilLeft < 75 && oilLeft > 0 && polarTop > 400) {
       alert("You got a score of: " + score.innerText +
        "\n\nWant to play again?");
        location.reload();
    }
}, 75);