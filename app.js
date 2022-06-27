// let randOne = (Math.random()*10)
// let randTwo = (Math.random()*10)
// let randomNumber = randOne * randTwo;
// console.log(randOne + "+" + randTwo + " = " + randomNumber)
// console.log(randomNumber)
// randomNumber = Math.floor(randomNumber)
// console.log(randomNumber)

// console.log(15/10)

let tracker = 0
let minTracker, secTracker, hourTracker, dayTracker, hourCount, minCount, dayCount = 0;
let interval = setInterval(render,1)

function render(){
    tracker +=1
    secTracker = tracker%60
    minCount = Math.floor(tracker/60)
    minTracker = Math.floor(minCount%60)
    hourCount =Math.floor(minCount/60)
    hourTracker =Math.floor(hourCount%60)
    dayCount = Math.floor(hourCount/24)
    dayTracker = Math.floor(dayCount%24)



    for(let i=0;tracker >=60*60*60*24; i++){
        tracker=0
        // clearInterval(interval)
    }

    console.log(`${tracker} -----${dayTracker} : ${hourTracker} : ${minTracker} : ${secTracker}`)

}

<html>
    How are you
</html>
