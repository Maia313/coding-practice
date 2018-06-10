const quotes = [
    {   text:'You know you can do it',
        author:'Someone'
    },
    {   text:'The Way Get Started Is To Quit Talking And Begin Doing.',
        author:'Walt Dysney'
    },
    {   text:'The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.',
        author:'Winston Churchill'
    },
    {   text:'Don’t Let Yesterday Take Up Too Much Of Today.',
        author:'Will Rogers'
    },
    {   text:'You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.',
        author:'Unknown'
    },
    {   text:'It’s Not Whether You Get Knocked Down, It’s Whether You Get Up.',
        author:'Vince Lombardi'
    },
    {   text:'If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You...',
        author:'Steve Jobs'
    },
    {   text:'People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do.',
        author:'Rob Siltanen'
    },
    {   text:'Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough.',
        author:'Og Mandino'
    },
    {   text:'We May Encounter Many Defeats But We Must Not Be Defeated.',
        author:'Maya Angelou'
    }
]  
    

const newQuote = document.getElementById('new-quote');
newQuote.addEventListener('click', generateNewQuote);

window.onload = function() {
    generateNewQuote();
    random_bg_color();
}

function generateNewQuote(random){
    random = Math.floor(Math.random()*(quotes.length));
    document.getElementById('text').innerHTML = quotes[random].text;
    document.getElementById('author').innerHTML = quotes[random].author;
    random_bg_color();
}
function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    console.log(bgColor);
  
    document.body.style.background = bgColor;
}

random_bg_color();