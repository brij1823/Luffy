// function containsWord(str, word) {
//     return str.match(new RegExp("\\b" + word + "\\b")) != null;
//   }


const text = document.querySelectorAll('h1,h2,h3,h4,p,li,td,caption,span,a');
for (let i=0; i < text.length; i++) {

    if(text[i].innerHTML.toLowerCase().includes('he can')){
        text[i].innerHTML = text[i].innerHTML.toLowerCase().replace('he can', 'they can')
    }
    if(text[i].innerHTML.toLowerCase().includes('she can')){
        text[i].innerHTML = text[i].innerHTML.toLowerCase().replace('she can', 'they can')
    }
    if(text[i].innerHTML.toLowerCase().includes('he cannot')){
        text[i].innerHTML = text[i].innerHTML.toLowerCase().replace('he cannot', 'they cannot')
    }
    if(text[i].innerHTML.toLowerCase().includes('she cannot')){
        text[i].innerHTML = text[i].innerHTML.toLowerCase().replace('she cannot', 'they cannot')
    }
    if(text[i].innerHTML.toLowerCase().includes('he has')){
        text[i].innerHTML = text[i].innerHTML.toLowerCase().replace('he has', 'they have')
    }
    if(text[i].innerHTML.toLowerCase().includes('she has')){
        text[i].innerHTML = text[i].innerHTML.toLowerCase().replace('she has', 'they have')
    }
    if(text[i].innerHTML.toLowerCase().includes('he will')){
        text[i].innerHTML = text[i].innerHTML.toLowerCase().replace('he will', 'they will')
    }
    if(text[i].innerHTML.toLowerCase().includes('she will')){
        text[i].innerHTML = text[i].innerHTML.toLowerCase().replace('she will', 'they will')
    }
    if(text[i].innerHTML.toLowerCase().includes('he had')){
        text[i].innerHTML = text[i].innerHTML.toLowerCase().replace('he had', 'they had')
    }
    if(text[i].innerHTML.toLowerCase().includes('she had')){
        text[i].innerHTML = text[i].innerHTML.toLowerCase().replace('she had', 'they had')
    }

    text[i].innerHTML.replace(/^\w/, (c) => text[i].innerHTML.toUpperCase());

    
     

} 
