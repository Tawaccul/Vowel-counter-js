const count = document.querySelector('#vowel-count');




function countVowel(str){
    str = str.toLowerCase();
    let vowArr = ['a', 'e', 'i', 'o', 'u'],
    counter = 0;

    for(let letter of str){
        if(vowArr.includes(letter)){
            counter++;
            count.classList.add('blink');
        }
        else{
            count.classList.remove('blink')
        }
    }
     count.innerHTML = counter;
}
