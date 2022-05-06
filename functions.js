//1. Sum Zero // Time Complexity: O(n^2) Space Complexity: O(1)
function addToZero(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] + arr[j] === 0){
                return true;
            }
        }
    }
    return false;
}

// console.log(addToZero([1,2,3,-1]));

//2. Unique Characters // Time Complexity: O(n^2) Space Complexity: O(1)
function hasUniqueChars(str){
    for(let i = 0; i < str.length; i++){
        for(let j = i + 1; j < str.length; j++){
            if(str[i] === str[j]){
                return false;
            }
        }
    }
    return true;
}

// console.log(hasUniqueChars("Moonday"));

//3. Pangram Sentence // Time Complexity: O(n) Space Complexity: O(1)
function isPangram(str){
    let letters = "abcdefghijklmnopqrstuvwxyz";
    for(let i = 0; i < str.length; i++){
        letters = letters.replace(str[i].toLowerCase(),'');
    }
    if(letters){
        return false;
    } else {
        return true;
    }
}

// console.log(isPangram("The quick brown fox jumps over the lazy dog!"));
// console.log(isPangram("I like cats, but not mice"));

//4. Longest Word // Time Complexity: O(n) Space Complexity: O(1)
function findLongestWord(words){
    let longest = 0;
    words.forEach(word => {
        if(word.length > longest){
            longest = word.length;
        }
    })
    return longest;
}

// console.log(findLongestWord(['hi','hello']));