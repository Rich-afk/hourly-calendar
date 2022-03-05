var textAreaEl = document.querySelector('#text')
var buttonEl = document.querySelector('#savebutton')


var today = moment();

$('#currentDay').text(moment().format('LLL'));


var today = moment();

var example = moment({ hour:15, minute:10 });
var currentHour = example.hour();

$('#currentDay').text(example.format('LLL'));



//formatting the text area

var textAreaEl = document.querySelectorAll('[data]');

for(var i = 0; i < textAreaEl.length; i++) {
    var hour = textAreaEl[i].attributes.data.value;
    if(hour > currentHour) {
        textAreaEl[i].classList.add('future');
    }
    if(hour < currentHour) {
        textAreaEl[i].classList.add('past');
    } else {
        textAreaEl[i].classList.add('present');
    }

}

//saving to local storage
function handleSave() {
    var stored = JSON.parse(localStorage.getItem('text'));
    var updatedStored = stored.concat({
        description: textAreaEl.textContent
    });

    localStorage.setItem('text', JSON.stringify(updatedStored));

}

buttonEl.addEventListener('click', handleSave);