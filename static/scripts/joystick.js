const joystickPijlOmhoogButton = document.querySelector('#joystickPijlOmhoog');
const joystickPijlRechtsButton = document.querySelector('#joystickPijlRechts');
const joystickPijlOmlaagButton = document.querySelector('#joystickPijlOmlaag');
const joystickPijlLinksButton = document.querySelector('#joystickPijlLinks');
const b1Button = document.querySelector('#B1');
const gameboySoundAudio = document.querySelector('#gameboySound');
const b1Alink = document.querySelector('#B1buttonA');
const b2Button = document.querySelector('#B2');
const profielButton = document.querySelector('#profielButton');
const profielAlink = document.querySelector('#profielbuttonA');
const mainSchermDiv = document.querySelector('#mainScherm');
const joystickDiv = document.querySelector('#joystick');
let konami = '';

function bovenDrukken() {
  joystickDiv.classList.add('joystickBoven');
  konami = konami + '^';

  setTimeout(function() {
      joystickDiv.classList.remove('joystickBoven');
    },
    100
  );
}

function rechtsDrukken() {
  joystickDiv.classList.add('joystickRechts');
  konami = konami + '>';

  if (konami === '^^vv<><>') {
    b1Alink.href = '#';
  }

  setTimeout(function() {
      joystickDiv.classList.remove('joystickRechts');
    },
    100
  );
}

function omlaagDrukken() {
  joystickDiv.classList.add('joystickOmlaag');
  konami = konami + 'v';

  setTimeout(function() {
      joystickDiv.classList.remove('joystickOmlaag');
    },
    100
  );
}

function linksDrukken() {
  joystickDiv.classList.add('joystickLinks');
  konami = konami + '<';

  setTimeout(function() {
      joystickDiv.classList.remove('joystickLinks');
    },
    100
  );
}

function b1Drukken() {
  konami = konami + 'A';
}

function b2Drukken() {
  konami = konami + 'B';

  if (konami === '^^vv<><>AB') {
    profielAlink.href = '#';
  }
}

function profielDrukken() {
  konami = konami + 'start';

  if (konami === '^^vv<><>ABstart') {
    mainSchermDiv.classList.add('konamischerm');
    gameboySoundAudio.play();
  }
  setTimeout(function() {
      mainSchermDiv.classList.remove('konamischerm');
      profielAlink.href = '/profiel';
      b1Alink.href = '/';
      konami = '';
    },
    6000
  );
}

joystickPijlOmhoogButton.addEventListener('click', bovenDrukken);
joystickPijlRechtsButton.addEventListener('click', rechtsDrukken);
joystickPijlOmlaagButton.addEventListener('click', omlaagDrukken);
joystickPijlLinksButton.addEventListener('click', linksDrukken);
b1Button.addEventListener('click', b1Drukken);
b2Button.addEventListener('click', b2Drukken);
profielButton.addEventListener('click', profielDrukken);
