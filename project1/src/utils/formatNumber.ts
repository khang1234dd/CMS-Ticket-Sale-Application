
export const formatNumber = (number: number)=>{
    const covertStr = number.toString()
    return covertStr.split('').reverse().reduce((prev, next, index) => {
        return ((index % 3) ? next : (next + '.')) + prev
    })
}