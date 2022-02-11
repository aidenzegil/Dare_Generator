const getRandomIndex = (arrayLength) => {
    return Math.floor(Math.random() * arrayLength)
}

const dareGrabber = (list) => {
    const index = getRandomIndex(list.length)
    return list[index]
}

export default dareGrabber