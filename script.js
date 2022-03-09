var saveButtons = document.querySelectorAll('.saveBtn');
var textEl = document.querySelectorAll(".description")

var today = moment();

$('#currentDay').text(moment().format('LLL'));


var today = moment();

//var example = moment({ hour:15, minute:10 });
var currentHour = today.hour();

$('#currentDay').text(today.format('LLL'));



//formatting the text area
var textAreaEl = document.querySelectorAll('[data]');

//console.log(textAreaEl);
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

};

function handleInitialSubmit(event) {
    event.preventDefault();

    var stored = JSON.parse(localStorage.getItem('highScores')) || [];
    var updatedScores = stored.concat({
        score: score,
        initials: initialsInput.value
    });

    localStorage.setItem('highScores', JSON.stringify(updatedScores));
}

//storing objects locally
// console.log('start')
saveButtons.forEach((saveBtn, i) => {
    // console.log('entered for loop')
    saveBtn.addEventListener('click', (event) => {
        console.log('click detected');
        event.preventDefault();
        var storeText = Array.from(textEl, (text) => text.value);

        localStorage.setItem('Save-Event', JSON.stringify(storeText));
        // console.log("text");
        //console.log(textEl);
        
    });
    //textEl[i].value gives us the value in the 
    textEl[i].value = JSON.parse(localStorage.getItem('Save-Event'))[i];
});

