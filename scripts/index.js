console.log(`There are ${characters.length} characters in the array.`);
console.log(characters[0]);

// How many characters names start with "A"? 168
function getName(){
    let nameList = [];
    characters.forEach(function(char) {
        firstInitial = char['name'][0];
        if (firstInitial == 'A') {
            nameList.push(char['name'])
        }
    });
    return nameList;
}
console.log(getName().length);

// How many characters names start with "Z"? 8
function getName(){
    let nameList = [];
    characters.forEach(function(char) {
        firstInitial = char['name'][0];
        if (firstInitial == 'Z') {
            nameList.push(char['name'])
        }
    });
    return nameList;
}
console.log(getName().length);

// How many characters are dead? 553
function deadChar(){
    let deadList = [];
    characters.forEach(function(char) {
        if (char['died'] != "") {
            deadList.push(char['name'])
        }
    });
    return deadList;
}
console.log(deadChar().length);

// Who has the most titles? Baylon has 7
function mostTitle() {
    mostTitles = 0;
    characters.forEach(function(char) {
        numTitles = char['titles'].length;
        if (numTitles > mostTitles) {
            mostTitles = numTitles;
        }
    });
    characters.forEach(function(char) {
        numTitles = char['titles'].length;
        if (numTitles === mostTitles) {
            console.log(`${char["name"]} has ${mostTitles}.`);
        }
    });
}
mostTitle();

// How many are Valyrian? 57
function isValyrian(){
    valList = [];
    characters.forEach(function(char) {
        const culture = char['culture'];
        if (culture === 'valyrian' || culture === 'Valyrian') {
            valList.push(char['name']);
        }
    });
    return valList;
}
console.log(isValyrian().length);


// What actor plays "Hot Pie" (and don't use IMDB)- Ben Hawkey
function whoHottie() {
    let hotPie = [];
    characters.forEach(function(char) {
        if (char['name'] === 'Hot Pie') {
            hotPie.push(char['playedBy']);
        }
    });
    return hotPie;
}
console.log(whoHottie());

// How many characters are not in the tv show? 1927
function notInShow() {
    let noShow = [];
    characters.forEach(function(char) {
        if (char.playedBy[0] === "") {
            noShow.push(char['name'])
        }
    });
    return noShow;
}
console.log(notInShow().length);

// Produce a list characters with the last name "Targaryen" 49
function nameT() {
    let targs = [];
    characters.forEach(function(char) {
        if (char.name.includes('Targaryen')) {
            targs.push(char['name']);
        }
    });
    return targs;
}
console.log(nameT().length);

