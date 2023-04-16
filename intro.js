// set up text to print, each item in array is new line//
// Typewriter Effect * Author:(Graham,Geoff) * Date: (2022) * Code version:(v1) * Availability: https://css-tricks.com/snippets/css/typewriter-effect/() //

var aText = new Array(
    "Hi",
    "I am writing to you because you are our only hope.",
    "My city, Triviatopia, is in great danger.",
    "The trivia gods are wreaking havoc and destruction on everything we love and hold dear.",
    "Yesterday, the High Council of Triviatopia told everyone that the only we might save our beloved city and appease the trivia gods would be to achieve a high score in a tech savvy game of trivia",
    "But unfortunately, no one in our city has been able to achieve this, and we continue to suffer...",
    "That is where you come in",
    "Achieve a high score in this trivia game, appease the trivia gods and save my city.",
    "Please...",
    "You are our only hope, and an entire civilization is counting on you",
    "...But of course Zero Pressure",
    );
    var iSpeed = 50; // time delay of print out
    var iIndex = 0; // start printing array at this posision
    var iArrLength = aText[0].length; // the length of the text array
    var iScrollAt = 20; // start scrolling up at this many lines
     
    var iTextPos = 0; // initialise text position
    var sContents = ''; // initialise contents variable
    var iRow; // initialise current row
     
    function typewriter()
    {
     sContents =  ' ';
     iRow = Math.max(0, iIndex-iScrollAt);
     var destination = document.getElementById("typedtext");
     
     while ( iRow < iIndex ) {
      sContents += aText[iRow++] + '<br />';
     }
     destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
     if ( iTextPos++ == iArrLength ) {
      iTextPos = 0;
      iIndex++;
      if ( iIndex != aText.length ) {
       iArrLength = aText[iIndex].length;
       setTimeout("typewriter()", 500);
      }
     } else {
      setTimeout("typewriter()", iSpeed);
     }
    }
    
    
    typewriter();