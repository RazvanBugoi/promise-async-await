function parseData() {
    fetch("https://api.github.com/users/razvanbugoi")
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            console.log(myJson.login);
        })
        .then((myJson) => {
            console.log(myJson);
        })
        //     .then((myJson)=> {
        //     console.log(myJson.type);
        // })
}


async function gitAPI() {
    let response = await fetch("https://api.github.com/users/razvanbugoi");
    let json = await response.json();

    console.log(json);

}