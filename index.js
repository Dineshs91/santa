document.addEventListener("DOMContentLoaded", function() {
  var body = document.getElementsByTagName('body')[0];

  var positions = ['left', 'right']

  setInterval(function() {
    var random = Math.floor(Math.random() * 2);
    addImgAndAnimate(body, positions[random]);
  }, 10000);
});

function addImgAndAnimate(body, pos) {
  const timing = {
    duration: 5000,
    iterations: 1,
    easing: 'ease-in-out'
  };

  var mainDiv = document.createElement('div');

  var img = document.createElement('img');
  img.src = 'images/santa-min-2.png';
  
  img.style.width = '6rem';
  img.style.height = '8rem';

  mainDiv.appendChild(img);

  body.appendChild(mainDiv);

  mainDiv.style.position = 'absolute';

  mainDiv.style.width = '7rem';
  mainDiv.style.height = '7rem';

  mainDiv.style.opacity = '0';

  var animation;
  if (pos === 'right') {
    mainDiv.style.right = '-6em';

    // random top value between 0 and 80vh
    mainDiv.style.top = Math.floor(Math.random() * 80) + 'vh';

    const right = [
      { transform: 'translateX(1em) scaleX(-1)', opacity: '1' },
      { transform: 'translateX(-6em) scaleX(-1)', opacity: '1' },
      { transform: 'translateX(-6em) scaleX(-1)', opacity: '1' },
      { transform: 'translateX(6em) scaleX(-1)', opacity: '1' }
    ];

    animation = mainDiv.animate(right, timing);
  } else if (pos === 'left') {
    mainDiv.style.left = '-6em';

    // random top value between 0 and 80vh
    mainDiv.style.top = Math.floor(Math.random() * 80) + 'vh';

    const left = [
      { transform: 'translateX(0) ', opacity: '1' },
      { transform: 'translateX(6em)', opacity: '1' },
      { transform: 'translateX(6em)', opacity: '1' },
      { transform: 'translateX(6em)', opacity: '1' },
      { transform: 'translateX(-6em)', opacity: '1' }
    ];

    animation = mainDiv.animate(left, timing);
  }

  animation.finished.then(function() {
    body.removeChild(mainDiv);
  });
}
