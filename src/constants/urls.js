const baseURL='http://owu.linkpc.net/carsAPI/v1'

const cars='/cars'
const urls={
    cars:{
        base: cars,
        carById:(id)=>`${cars}/${id}`
    }
}

export {
    baseURL,
    urls
}