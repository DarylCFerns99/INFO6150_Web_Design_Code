const p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("this is p1"), 2000);
});

const p2 = new Promise((resolve, reject) => {
    // resolve("this is p2");
    reject("this is p2 error");
});

const p3 = new Promise((resolve, reject) => {
    resolve("this is p3");
});

Promise.all([p1, p2, p3])
    .then((rsp) => console.log(rsp))
    .catch(err => console.log(err))
    
Promise.race([p1, p2, p3])
    .then((rsp) => console.log(rsp))
    .catch(err => console.log(err))
    
p1
    .then((rsp) => console.log(rsp))
    .catch(err => console.log(err))
p2
    .then((rsp) => console.log(rsp))
    .catch(err => console.log(err))
p3
    .then((rsp) => console.log(rsp))
    .catch(err => console.log(err))