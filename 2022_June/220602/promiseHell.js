
function add(number) {
    return new Promise((resolve,reject)=>{
        let num = number + number;
        //console.log(number);
        console.log(num);
        resolve(num);
    })
}

add(2).then(result => {
    return add(result);
})//1
.then(result => {
    return add(result);
})//2
.then(result => {
    return add(result);
})//3
.then(result => {
    return add(result);
})//4
.then(result => {
    return add(result);
})//5
.then(result => {
    return add(result);
})//6
.then(result => {
    return add(result);
})//7
.then(result => {
    return add(result);
})//8
.then(result => {
    return add(result);
})//9

function wait() {
    return new Promise(function(resolve) {
        setTimeout(()=>{
            resolve("END",)
        },6000);
    })

}

(async function() {
    var result = await wait();
    console.log(result);
})();
