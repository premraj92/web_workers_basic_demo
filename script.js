// Creating a web worker with thw 
const worker = new Worker('./worker.js')

const calculateSum = document.querySelector('#calculateSumBtn')
const togglePageBackground = document.querySelector('#changePageBGBtn')


calculateSum.addEventListener('click', (event) => {

    // // implementing the below logic inhouse in this main script
        // let sum = 0

        // for(let i=0; i < 1000000000 ;i++)
        //     sum += i

        // alert(`The SUM of all numbers between 0 && 1000000000 is ${sum}`)
    
    // Outsourcing the above CPU intensive task to a Web Worker(here worker.js) file to run as a background task parallely in a Worker thread
        worker.postMessage({sumSequenceStart: 0, sumSequenceEnd: 1000000000}) 
})

worker.onmessage = (messageFromWorker) => {
    console.log(`Message from Worker `, messageFromWorker)
    alert(`Sum of all numbers in sequence calculated by Web Worker is ${messageFromWorker.data.sumOfAllNumbersInSequence}`)
}

togglePageBackground.addEventListener('click', () => {
    if(document.body.style.backgroundColor !== 'green')
        document.body.style.backgroundColor = 'green'
    else
        document.body.style.backgroundColor = 'blue'
})