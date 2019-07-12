const mySoundModelURl = 'https://storage.googleapis.com/tm-speech-commands/pewtest/model.json';
let mySoundModel;
let resultDiv;
let pyro;
let before;
let after;

function preload() {
	mySoundModel = ml5.soundClassifier(mySoundModelURl);
}

function setup() {
	mySoundModel.classify(gotResults);
	// resultDiv = createElement('h2', '');
	pyro = createDiv('');
	pyro.id('pyro');

	before = createDiv('');
	before.parent('#pyro');

	after = createDiv('');
	after.parent('#pyro');
}

function gotResults(err, results) {
	if (err) console.log(err);
	if (results) {
		console.log(results);
		if (results[0].label === "Pew") {
			console.log("yey");
			addClasses();
			setTimeout(() => removeClasses(), Math.floor(Math.random() * 500 + 500));
		}
	}
}

function addClasses() {
	pyro.addClass('pyro');
	before.addClass('before');
	after.addClass('after');
}

function removeClasses() {
	pyro.removeClass('pyro');
	before.removeClass('before');
	after.removeClass('after');
}