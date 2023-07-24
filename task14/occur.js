const count = (text,character) => {
    let counter = 0
    for (let index = 0; index < text.length; index++) {
        const charValue = text.charAt(index)
        if(charValue === character) {
            counter++;
        }
    }
    return counter;
  }
  var text = "TECHATCORE";

  for (let index = 0; index < text.length; index++) {
    const element = text.charAt(index);
    let counter = count(text,element);
    console.log(" Counter Value for Letter " + element + " is: "+ counter)
  }      