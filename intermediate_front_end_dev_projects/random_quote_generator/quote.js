$(document).ready(function() {
  // generate a new quote on button click
  $("#getQuote").on("click", function() {
    var quoteID = Math.floor(Math.random() * (quotes.length));
    $(".quote").html('"' + quotes[quoteID].quote + '"');
    $(".source").html(" - " + quotes[quoteID].source);
  });
  // tweet the current quote
  $('#tweetQuote').click(function() {
    var quoteToTweet = $(".quote").text() + $(".source").text();
    window.open('https://twitter.com/intent/tweet?text=' + quoteToTweet);
  });

});


// list of quotes
var quotes = [
  {"quote": "Don't Panic.",
    "source":"The Hitchhiker's Guide to the Galaxy"},
  {"quote": "Time is an illusion. Lunchtime doubly so.",
    "source": "The Hitchhiker's Guide to the Galaxy"},
  {"quote": "Isn't it enough to see that a garden is beautiful without having to believe that there are fairies at the bottom of it too?",
  "source": "The Hitchhiker's Guide to the Galaxy"},
  {"quote": "The ships hung in the sky in much the same way that bricks don't.",
    "source": "The Hitchhiker's Guide to the Galaxy"},
  {"quote": "I'd take the awe of understanding over the awe of ignorance any day.",
    "source": "The Salmon of Doubt"},
  {"quote": "I may not have gone where I intended to go, but I think I have ended up where I needed to be.",
    "source": "The Long Dark Tea-Time of the Soul"},
  {"quote": "The Answer to the Great Question... Of Life, the Universe and Everything... Is... Forty-two,' said Deep Thought, with infinite majesty and calm.",
    "source": "The Hitchhiker's Guide to the Galaxy"},
  {"quote": "All opinions are not equal. Some are a very great deal more robust, sophisticated and well supported in logic and argument than others.",
    "source": "The Salmon of Doubt"},
  {"quote": "Capital Letters Were Always The Best Way Of Dealing With Things You Didn't Have A Good Answer To.",
    "source": "Douglas Adams"},
  {"quote": "The bird that would soar above the plain of tradition and prejudice must have strong wings.",
    "source": "The Hitchhiker's Guide to the Galaxy"},
  {"quote": "'Exactly!' said Deep Thought. 'So once you do know what the question actually is, you'll know what the answer means.'",
    "source": "The Hitchhiker's Guide to the Galaxy"},
  {"quote": "Ahenny (adj.) - The way people stand when examining other people's bookshelves.",
    "source": "The Deeper Meaning of Liff"},
  {"quote": "Let the past hold on to itself and let the present move forward into the future.",
    "source": "Mostly Harmless"},
  {"quote": "People who need to bully you are the easiest to push around.",
    "source": "The Long Dark Tea-Time of the Soul"},
  {"quote": "Having not said anything the first time, it was somehow even more difficult to broach the subject the second time around.",
    "source": "So Long, and Thanks for All the Fish"},
  {"quote": "It is folly to say you know what is happening to other people. Only they know, if they exist. They have their own Universes of their own eyes and ears.",
    "source": "The Restaurant at the End of the Universe"},
  {"quote": "Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the Universe trying to produce bigger and better idiots. So far, the Universe is winning.",
    "source": "Douglas Adams"},
  {"quote": "In an infinite Universe anything can happen.",
    "source": "The Restaurant at the End of the Universe"},
  {"quote": "And so the problem remained; lots of people were mean, and most were miserable, even the ones with digital watches.",
    "source": "The Hitchhiker's Guide to the Galaxy"},
  {"quote": "...they discovered only a small asteroid inhabited by a solitary old man who claimed repeatedly that nothing was true, though he was later discovered to be lying.",
    "source": "The Hitchhiker's Guide to the Galaxy"}
];
