async function waitFunc() {
    const p1 = new Promise((resolve, reject) => setTimeout(() => resolve("p1 completed"), 1000));
    const p2 = new Promise((resolve, reject) => resolve("waiting for p2"));

    await p1
        .then((rsp) => console.log(rsp))
        .catch(err => console.log(err))
    p2
        .then((rsp) => console.log(rsp))
        .catch(err => console.log(err))
}

waitFunc();

const arrowWaitFunc = async () => {
    const p1 = new Promise((resolve, reject) => setTimeout(() => resolve("arrow p1 completed"), 2000));
    const p2 = new Promise((resolve, reject) => resolve("arrow waiting for p2"));
    // const p2 = new Promise.resolve("arrow waiting for p2");

    await p1
        .then((rsp) => console.log(rsp))
        .catch(err => console.log(err))
    p2
        .then((rsp) => console.log(rsp))
        .catch(err => console.log(err))
}
arrowWaitFunc();

const movies = [
    {title: "Movie One", body: "it was amazing"},
    {title: "Movie Two", body: "it was boring"},
]

function getMovies() {
    setTimeout(() => {
        movies.forEach((ele, index) => console.log(`${index+1} - Movie: ${ele.title} | Body: ${ele.body}`));
    }, 1000);
}

function createMovies(movie) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            movies.push(movie);
            const err = false;
            if (!err) {
                resolve("Movie added successfully")
            } else {
                reject("Failed to add movie");
            }
        }, 2000);
    });
}

createMovies({title: "Movie Three", body: "it was great"});
getMovies();

async function init() {
    await createMovies({title: "Movie Four", body: "it was amazeballs"})
        .then((rsp) => console.log(rsp))
        .catch(err => console.log(err))
    getMovies();
}

init();