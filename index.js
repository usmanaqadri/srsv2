var gamePrompt = require('game-prompt');
var colors = require('colors');


// Global variables
var playerName;
var vehicleName;
var fakePlanets = [
  {
    name: 'Earth',
    distance: 10,
    functionName: approachEarth
  },
  {
    name: 'Mesnides',
    distance: 20,
    functionName: approachMesnides
  },
  {
    name: 'Laplides',
    distance: 50,
    functionName: approachLaplides
  },
  {
    name: 'Kiyturn',
    distance: 120,
    functionName: approachKiyturn
  },
  {
    name: 'Aenides',
    distance: 25,
    functionName: approachAenides
  },
  {
    name: 'Cramuthea',
    distance: 200,
    functionName: approachCramuthea
  },
  {
    name: 'Smeon T9Q',
    distance: 400,
    functionName: approachSmeon
  },
  {
    name: 'Gleshan 7Z9',
    distance: 85,
    functionName: approachGleshan
  }
];
var totalGallons = 1000;
var playerInventory = [];
function addItemToInventory(item) {
  if (playerInventory.indexOf(item) < 0) {
    playerInventory.push(item);
  }
}




function startGame() {
	gamePrompt([
		'S.R.S.V.'.green,
		'Press ENTER to start.'
		], intro);
}

// function startGame() {
//     gamePrompt('S.R.S.V. Press ENTER to start.', intro);
// }


function intro() {
	gamePrompt('You are the General of a Solo' + 
		' Research Space Vehicle (S.R.S.V.) on ' + 
		'an expedition to explore foreign planets.' +
		' Your mission is to make contact with three alien ' + 
		'life forms, acquire an artifact representative of their culture,' + 
		' and bring back your findings to Earth.', collectInfo);
}

function collectInfo() {
	gamePrompt([
			'A voice comes on over the intercom.',
			'What\'s your name soldier'.bold

		], collectName);
}

function collectName(name) {
	playerName = name;

	gamePrompt([
		'"Good luck General ' + playerName + '."',
		'"Please state your vehicle name"'
		], collectVehicleName);
}

function collectVehicleName(name) {
	vehicleName = name;

	// gamePrompt([
	// 	'"Good luck General ' + vehicleName + '."',
	// 	'"Please state your vehicle name"'
	// 	], whereTravel);

	gamePrompt([
		'"That\'s a beautiful name, ' + vehicleName + '."',
		'"Well, here we go General ' + playerName + '."',
		'"You have 1000 gallons of fuel. Bring back the artifacts."',
		'"Restore the discs. Restore...PARATHIA!!!"', 
		'"Where do you want to travel?"',
		'"Here are the planets you can travel and how much fuel each destination requires:"'
		], whereUGoing);
}

function whereUGoing() {
	var fuelLeft = 'You have ' + totalGallons + ' gallons remaining.';
	var whichPlanet = 'Select your planet of travel ' + playerName + '.' +
	'\n(E)arth - 10 gallons' + 
 	'\n(M)esnides - 20 gallons' +
 	'\n(L)aplides - 50 gallons' +
 	'\n(K)iyturn - 120 gallons' +
 	'\n(A)enides - 25 gallons' +
 	'\n(C)ramuthea - 200 gallons' + 
 	'\n(S)meon T9Q - 400 gallons' +
 	'\n(G)leshan 7Z9 - 85 gallons';
	gamePrompt([
		fuelLeft, 
		whichPlanet
		], whereTravel);
}

function whereTravel(nameOfPlanet) {
	var planetUpperCase = nameOfPlanet.toUpperCase();
	
	if (planetUpperCase === 'E' || planetUpperCase === 'Earth') {
		
		totalGallons -= 10;
		if (totalGallons <= 0) {
			lose();
		}
		else {
			gamePrompt([
				'You will consume 10 gallons of fuel.',
				'Now you have ' + totalGallons + ' gallons remaining.'
				], approachEarth);
		}
	}	else if (planetUpperCase === 'M' || planetUpperCase === 'Mesnides') {

		totalGallons -= 20;
		if (totalGallons <= 0) {
			lose();
		}
		else {
			gamePrompt([
				'You will consume 20 gallons of fuel.',
				'Now you have ' + totalGallons + ' gallons remaining.'
				], approachMesnides);
		}
	} 	else if (planetUpperCase === 'L' || planetUpperCase === 'Laplides') {
		
		totalGallons -= 50;
		if (totalGallons <= 0) {
			lose();
		}
		else {
			gamePrompt([
				'You will consume 50 gallons of fuel.',
				'Now you have ' + totalGallons + ' gallons remaining.'
				], approachLaplides);
		}
	}	else if (planetUpperCase === 'K' || planetUpperCase === 'Kiyturn') {
		
		totalGallons -= 120;
		if (totalGallons <= 0) {
			lose();
		}
		else {
			gamePrompt([
				'You will consume 120 gallons of fuel.',
				'Now you have ' + totalGallons + ' gallons remaining.'
				], approachKiyturn);
		}
	}	else if (planetUpperCase === 'A' || planetUpperCase === 'Aenides') {
		
		totalGallons -= 25;
		if (totalGallons <= 0) {
			lose();
		}
		else {
			gamePrompt([
				'You will consume 25 gallons of fuel.',
				'Now you have ' + totalGallons + ' gallons remaining.'
				], approachAenides)
		}
	}	else if (planetUpperCase === 'C' || planetUpperCase === 'Cramuthea') {

		totalGallons -= 200;
		if (totalGallons <= 0) {
			lose();
		}
		else {
			gamePrompt([
				'You will consume 200 gallons of fuel.',
				'Now you have ' + totalGallons + ' gallons remaining.'
				], approachCramuthea)
		}
	}	else if (planetUpperCase === 'S' || planetUpperCase === 'Smeon_t9q') {

		totalGallons -= 400;
		if (totalGallons <= 0) {
			lose();
		}
		else {
			gamePrompt([
				'You will consume 400 gallons of fuel.',
				'Now you have ' + totalGallons + ' gallons remaining.'
				], approachSmeon)
		}
	}	else if (planetUpperCase === 'G' || planetUpperCase === 'Gleshan_7z9') {
		
		totalGallons -= 85;
		if (totalGallons <= 0) {
			lose();
		}
		else {
			gamePrompt([
				'You will consume 85 gallons of fuel.',
				'Now you have ' + totalGallons + ' gallons remaining.'
				], approachGleshan)
		}
	}	else {
		gamePrompt ('That planet is not on our charts.', whereTravel);}
	}

function approachEarth() {
  if (playerInventory.length === 3) {
    gamePrompt('You\'ve successfully returned with 3 artifacts.', win);
  } else {
    totalGallons += 10;
    gamePrompt([
      'You\'ve arrived at Earth.',
      '"General ' + playerName + ', you do not have sufficient artifacts."',
      '"Here are 10 more gallons. Good hunting!"'
    ], whereUGoing);
  }
}


function approachMesnides() {
  gamePrompt([
    'You\'ve arrived at Mesnides. As you land, a representative of the Mesnidian people is there to greet you.',
    '"Welcome to Mesnides, stranger."',
  ], questionMesnides);
}

function questionMesnides() {
  gamePrompt('"How can we assist you?"\nAsk about (A)rtifact.\nAsk about other (P)lanets\n(L)eave', answerMesnides);
}

function answerMesnides(answer) {
  if (answer.toLowerCase() === 'a') {
    addItemToInventory('Myoin Horn');
    gamePrompt([
      '"Here, take this Myoin Horn, an ancient Mesnidian instrument."',
      'Myoin Horn added to your inventory.',
      'You now have ' + playerInventory.length + ' artifact' + (playerInventory.length > 1 ? 's.' : '.')
    ], questionMesnides);
  } else if (answer.toLowerCase() === 'p') {
    gamePrompt('"Well, Laplides suffered from atomic war and has been uninhabited ' +
    'for centuries. You would do well to avoid it on your journey."', questionMesnides);
  } else if (answer.toLowerCase() === 'l') {
    whereUGoing();
  } else {
    gamePrompt('I\'m sorry traveler, but I don\'t understand your question', questionMesnides);
  }
}

function approachLaplides() {
  gamePrompt([
    'You enter orbit around Laplides. Looking down at the planet, you see\n ' +
    'signs of atomic war and realize there is no option but to turn around.'
  ], whereUGoing);
}

function approachKiyturn() {
  gamePrompt(
    'You\'ve arrived at Kiyturn. As you land, a representative of the Kiyturn people is there to greet you.',
    questionKiyturn
  );
}

function questionKiyturn() {
  gamePrompt('"Hello, what brings you to Kiyturn? You\'re not here to cause trouble are you?"\n' +
    'Ask about (A)rtifact.\nAsk about other (P)lanets\n(L)eave', answerKiyturn);
}

function answerKiyturn(answer) {
  if (answer.toLowerCase() === 'a') {
    addItemToInventory('Kiyturn Glass Bowl');
    gamePrompt([
      '"Here, take this Kiyturn Glass Bowl, a symbol of our civilization."',
      'Kiyturn Glass Bowl added to your inventory.',
      'You now have ' + playerInventory.length + ' artifact' + (playerInventory.length > 1 ? 's.' : '.')
    ], questionMesnides);
  } else if (answer.toLowerCase() === 'p') {
    gamePrompt('"We know nothing about any other planets. This is our paradise."', questionKiyturn);
  } else if (answer.toLowerCase() === 'l') {
    whereUGoing();
  } else {
    gamePrompt('I\'m sorry traveler, but I don\'t understand your question', questionKiyturn);
  }
}

function approachAenides() {
  gamePrompt([
    'You\'ve arrived at Aenides. But immediately, the inhabitants begin shooting at you.',
    'You quickly escape and fly to another planet.'
  ], whereUGoing);
}

function approachCramuthea() {
  totalGallons += 500;

  gamePrompt([
    'You have arrived at Cramuthea.',
    'The planet seems quiet and void of life.',
    'Somehow, you find a fueling station somewhat operational.',
    'You are able to refuel 500 gallons-worth.',
    'You now have ' + totalGallons + ' gallons of fuel.',
    'You see a light and approach it.',
    'You find the flashing light to be coming from a mysterious beacon.',
    'The beacon reveals that the Cramutheans have reloctated to Smeon T9Q.'
  ], whereUGoing);
}

function approachSmeon() {
 totalGallons+= 100;

  gamePrompt([
    'You\'ve arrived at Smeon T9Q. ',
    'A creature comes and welcomes you:',
    '"Hello. We the Cramutheans have lived in Smeon since our planet became uninhabitable."',
    '"It\'s been a while since we\'ve had a visitor."',
    '"Allow us to refuel your ship."',
    '"Here is 100 gallons."',
    'You now have ' + totalGallons + ' gallons of fuel.'
  ], questionSmeon);
}

function questionSmeon() {
  gamePrompt('"How can I be of service?"\nAsk about (A)rtifact.\nAsk about other (P)lanets\n(L)eave', answerSmeon);
}

function answerSmeon(answer) {
  if (answer.toLowerCase() === 'a') {
    addItemToInventory('Cramun Flower');

    gamePrompt([
      '"Here, take this dried Cramun Flower from our home planet."',
      'Cramun Flower added to your inventory.',
      'You now have ' + playerInventory.length + ' artifact' + (playerInventory.length > 1 ? 's.' : '.')
    ], questionSmeon);
  } else if (answer.toLowerCase() === 'p') {
    gamePrompt([
      '"The people of Aenides are hostile and belligerent."',
      '"They tried to take over our planet by force.',
      '"Please stay away from them!"'
    ], questionSmeon);
  } else if (answer.toLowerCase() === 'l') {
    whereUGoing();
  } else {
    gamePrompt('"Can you repeat your question?"', questionSmeon);
  }
}

function approachGleshan() {
  gamePrompt([
    'You\'ve arrived at Gleshan 7Z9.',
    'A creature comes out to receive you.',
    '"What do you need, stranger?"'
    ], questionGleshan);
}

function questionGleshan() {
  gamePrompt('"How can we be of service?"\nAsk about (A)rtifact.\nAsk about other (P)lanets\n(L)eave', answerGleshan);
}

function answerGleshan(answer) {
  if (answer.toLowerCase() === 'a') {
    gamePrompt(
      '"The artifact is sacred to us and we are a poor people. I\'m sorry it has to be this way."',
      questionGleshan
    );
  } else if (answer.toLowerCase() === 'p') {
    gamePrompt([
      '"We once traded and dealt Cramuthea, but they seemed to have all gone extinct."',
      '"Their planet is now empty. Shame. They were a righteous people."'
    ], questionGleshan);
  } else if (answer.toLowerCase() === 'l') {
    whereUGoing();
  } else {
    gamePrompt('"Can you repeat your question?"', questionGleshan);
  }
}


function lose() {
  gamePrompt([
    'You have no more fuel',
    'YOU GET NOTHING! YOU LOSE!'.bold,
    'Game Over'.red
  ]);
}

function win() {
  gamePrompt([
    '"You\'ve done it! You\'ve won! I knew you would ' + playerName + '; I just knew you would!"',
    '"Mission Complete"'.green
  ]);
}
startGame();

