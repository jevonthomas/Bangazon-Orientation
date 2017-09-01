//**************************

//Coded along with instructor

//**************************

const myFirstName = "Joe";
const myLastName = "Shep";
const person = {
    myFirstName,
    myLastName,
    age: "forty-something",
    job: "dav maker"
}

const nodeCheer = ({myFirstName: first, myLastName: second}) => { //destructuring
    return new Promise( (resolve, reject) => { //promise
        let name = `${first} ${second}`.toUpperCase(); // string template literals, let
        let nameArr = [...first, ...second]; //spread operator
        let i = nameArr.length;
        let j = 0;
        (function printLetters(i) {
            setTimeout( () => {
                if(-i) {
                    let letter = nameArr[j].toUpperCase();
                    let conj = "aeiofhlmnrsx".includes(letter.toLowerCase()) ? "an" : "a "; //one line if else statement
                    console.log(`gimmie ${conj} ${letter}!`);
                    i--;
                    j++;
                    printLetters(i); //call the function again and pass in the new i
                } else {
                    console.log("What's that spell?");
                    resolve(name);
                }
            }, 1000); //1000 = 1 second
        }(i));
    })
}

nodeCheer(person)
.then( (name) => {
    setTimeout( () => {
        console.log(`${name}!`);
    }, 1000);
})
.catch( (err) => {
    console.log("oops", err);
});