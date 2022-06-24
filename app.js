const groupA = ["Brad", "John Doe", "Sam Smith", "Harry Potter", "Jack Sparrow", "John Cena"];
const groupB = ["Harley Smith", "Mary Williams", "Sarah Thompson", "Victoria Martins", "Queen Samson", "Selena Gomez"];
const places = ["Chicken republic", "Chillis", "Mac Donalds", "Sheraton", "Transcorp hilton", "Crunchies"];

function dateMatch(groupA, groupB, places) {
    const name1 = groupA[Math.floor(Math.random() * groupA.length)];
    const name2 = groupB[Math.floor(Math.random() * groupB.length)];
    const place = places[Math.floor(Math.random() * places.length)];

    const date = `${name1} and ${name2} will going for a dinner date at ${place}`;
    return date;
}

const output = dateMatch(groupA, groupB, places);
console.log(output);