function getRandomInt(num) {
    return Math.floor(Math.random() * num);
  }

function jokeTeller() {
    const jokeData = {
        sub: ['man', 'woman', 'dog', 'cow', 'fish'],
        v1: ['eat', 'throw', 'wave at', 'insult', 'salute'],
        ob1: ['banana', 'pie', 'robot', 'car', 'platypus'],
        v2: ['see', 'get', 'understand', 'feel', 'experience'],
        ob2: ['themself', 'life', 'the origins of space and time', 'what love is', 'something']
    }

    const info = [];
    //const jokeDataValues = Object.values(jokeData);
    //console.log(jokeData);

     for (let prop in jokeData) {
        //console.log(jokeData[prop], '<<<prop')
        const randomIndex = getRandomInt(prop.length);
        switch (prop) {
            case 'sub':
                info.push(`Why did the ${jokeData[prop][randomIndex]} `)
                break
            case 'v1':
                info.push(`${jokeData[prop][randomIndex]} the `)
                break
            case 'ob1':
                info.push(`${jokeData[prop][randomIndex]}?
                
`)
                break
            case 'v2':
                info.push(`To ${jokeData[prop][randomIndex]} `)
                break
            case 'ob2':
                info.push(`${jokeData[prop][randomIndex]}!!!`)
                break
            default:
                info.push(`There is not enough information to complete the joke! :(`)
        }
}

    function jokeCompiler(arr) {
        const joke = arr.join('');
        console.log(joke);
    }
    jokeCompiler(info);
}

jokeTeller()