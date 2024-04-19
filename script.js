function jokeTeller() {
    const jokeData = {
        x: ['man', 'woman', 'dog', 'cow', 'fish'],
        y: ['eat', 'throw', 'wave at', 'insult', 'salute'],
        z: ['banana', 'pie', 'robot', 'car', 'platypus'],
        a: ['see', 'get', 'understand', 'feel', 'experience'],
        b: ['themself', 'life', 'the origins of space and time', 'what love is', 'something']
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }

    const subject = jokeData.x[getRandomInt(jokeData.x.length)];
    const verb1 = jokeData.y[getRandomInt(jokeData.y.length)];
    const object1 = jokeData.z[getRandomInt(jokeData.z.length)];
    const verb2 = jokeData.a[getRandomInt(jokeData.a.length)];
    const object2 = jokeData.b[getRandomInt(jokeData.b.length)];

    const joke = `Why did the ${subject} ${verb1} the ${object1}? To ${verb2} ${object2}!`
    
    console.log(joke);
}

jokeTeller();