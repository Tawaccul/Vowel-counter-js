const count = document.querySelector('#vowel-count');




function countVowel(str){
    str = str.toLowerCase();
    let vowArr = ['a', 'e', 'i', 'o', 'u'],
    counter = 0;

    for(let letter of str){
        if(vowArr.includes(letter)){
            counter++;
        }
    }
     count.innerHTML = counter;
}