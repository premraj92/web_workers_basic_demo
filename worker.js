onmessage = (messageFromMainThread) => {
    console.log(`Message from Mian Thread `, messageFromMainThread.data)

    const input = messageFromMainThread.data

    let sum = 0

    for (let i = input.sumSequenceStart; i < input.sumSequenceEnd; i++)
        sum += i

    postMessage({messageDesc: `I am the message from worker thread posted once the task/processes assigned to me by Main thread are completed`, 
                sumOfAllNumbersInSequence: sum})
}