var change = document.getElementById('select');
var html = document.getElementById('html');

var rb1 = document.getElementById('rb1');
var rb2 = document.getElementById('rb2');

var currentLeftColour = '#0723f2'
var currentRightColour = '#d40de3'

function htmlButtonEvent(){
	html = document.getElementById('html')
	html.addEventListener("click", function(){
		var h3 = document.getElementById('h3')
		h3.innerText = 	"document.body.style.background = \"linear-gradient(to right, "+currentLeftColour+" , "+currentRightColour+")\"";
	})
}

function checkValidHex(leftColour, rightColour){
	console.log(leftColour, rightColour)
	lValid = false
	rValid = false
	if (leftColour.startsWith('#')){
		 if (leftColour.length === 7){
		 	currentLeftColour = leftColour
		 	lValid = true
		 } 
	}
	if (leftColour.length == 6){
	 	lValid = true
	 	currentLeftColour = "#"+leftColour
	}
	if (rightColour.startsWith('#')){
		if (rightColour.length === 7){
			currentRightColour = rightColour
		 	rValid = true
	}}
	if (rightColour.length === 6){
		currentRightColour = "#"+rightColour
		 rValid = true
	}
	return (lValid && rValid);
}

function changeButtonEventText(){
	change = document.getElementById('select')
	change.addEventListener("click", function(){
		var h3 = document.getElementById('h3');
		h3.innerText = ''
		isValidInput = (checkValidHex(document.getElementById('leftColour').value, document.getElementById('rightColour').value));
		if (isValidInput){
			document.body.style.background = "linear-gradient(to right, "+currentLeftColour+" , "+currentRightColour+")";
		return currentLeftColour, currentRightColour			
		document.getElementById('leftColour').value = '';
		document.getElementById('rightColour').value = '';	
		document.getElementById('leftColour').placeholder = '#000000';
		document.getElementById('rightColour').placeholder = '#FFFFFF';
		}

	})
}

function changeButtonEventWheel(){
	change = document.getElementById('select')
	change.addEventListener("click", function(){
		var h3 = document.getElementById('h3');
		h3.innerText = ''
		currentLeftColour = document.getElementById('leftColour').value;
		currentRightColour = document.getElementById('rightColour').value;
		document.body.style.background = "linear-gradient(to right, "+currentLeftColour+" , "+currentRightColour+")";
	})	
}

function getMainLocation(){
	return document.getElementById('location')
}

function createInputs(inputId, inputType, inputValue='', ph=0){
	var input = document.createElement('input');
	input.id = inputId	
	input.type = inputType	
	input.value = inputValue	
	input.placeholder = ph
	return input		
}

function createButtons(classes,text,id){
	var button = document.createElement('button')
	button.class = classes
	button.innerText = text
	button.id = id		
	return button	
}

rb1.addEventListener("click", function(){
	location2 = document.getElementById('location')
	location2.innerHTML = ""
	p = document.getElementById('h3');
	p.innerText	= ""

	var div = document.createElement('div');
	input = createInputs('leftColour','text','','#000000');
	input2 = createInputs('rightColour','text','','#FFFFFF');

	location2.appendChild(div);
	div.appendChild(input)
	div.appendChild(input2)

	var div = document.createElement('div')
	button = createButtons('size80','Change','select')
	button2 = createButtons('size80','HTML','html')

	location2.appendChild(div);
	div.appendChild(button)
	div.appendChild(button2)

	changeButtonEventText()
	htmlButtonEvent()
})

rb2.addEventListener("click", function(){
	mainDiv = document.getElementById('location')
	mainDiv.innerHTML = ""
	p =document.getElementById('h3');
	p.innerText	= ""

	var div = document.createElement('div');
	input = createInputs('leftColour','color','#cb0101')
	input2 = createInputs('rightColour', 'color', '#3d83b8')
	mainDiv.appendChild(div);
	div.appendChild(input)
	div.appendChild(input2)

	var div = document.createElement('div')
	button = createButtons('size80','Change','select')
	button2 = createButtons('size80','HTML','html')
	mainDiv.appendChild(div);
	div.appendChild(button)
	div.appendChild(button2)

	changeButtonEventWheel()
	htmlButtonEvent()
})	
