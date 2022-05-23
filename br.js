var spans = document.getElementsByTagName('span');

for(var i = 0; i < spans.length; i++) {
  var inner = spans[i].innerHTML;
  inner = inner.split(' ');
  
  var newInner;
  for(var j = 0; j < inner.length; j++) {
    if (inner[j] == ' ' || inner[j] == '' || inner == undefined || inner[j].length == 0 || !inner[j] || inner[j] == '\r')
      {
        //skip
      }
    else
      {
        var wordLength = inner[j].length;
        var firstHalfLength;
        
        if (wordLength % 2  != 0 && wordLength > 1)
          {
            firstHalfLength = ((wordLength - 1) / 2) + 1;
          }
        else if (wordLength > 1)
          {
            firstHalfLength = wordLength / 2;
          }
        else
          {
            firstHalfLength = 1;
          }
        
        if (firstHalfLength > 0) {
          newInner += ' <b>' + inner[j].substring(0,firstHalfLength) + '</b>'+ inner[j].substring(firstHalfLength);       
        }
      }
  }
  spans[i].innerHTML = newInner;
}
