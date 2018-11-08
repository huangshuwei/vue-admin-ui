// const arr = [1,2,3]
// console.log(arr.indexOf(1))
// arr.splice(arr.indexOf(1),1)
//
// console.log(arr)


const arr = [
    {name:"1",id:0},
    {name:"2",id:1}
]

const index = arr.findIndex(item => item.id === 0)
console.log(index)