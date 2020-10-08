function loadJson(url) {
    return fetch(url)
        .then(response => {
            if (response.status == 200) {
                return response.json();
            } else {
                throw new Error(response.status);
            }
        })
}


async function loadJson(url) {
    let response = await fetch(url);
    let user = await response.json();

    if (response.status == 200) {
        return user;
    } else {
        throw new Error(response.status)
    }
}