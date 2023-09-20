const clientId = 'ce9a4204eedf4658a2d8d8adbf8dde39';
const clientSecret = 'f2eabc148b0d4368b86e857d3a19ee89';

const getToken = async () => {
    const result = await fetch('https://accounts.spotify.com/api/token', {
        method: "POST",
        headers: { // Fix the typo here
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": "Basic " + btoa(clientId + ":" + clientSecret)
        },
        body: "grant_type=client_credentials"
    });

    const data = await result.json();
    return data.access_token;
};


const getGenres = async (token) => {
    const result = await fetch('https://api.spotify.com/v1/browse/categories?locale=pt_BR', {
        method: "GET",
        headers: {"Authorization": "Bearer " + token}
    })
    const data = await result.json()
    return data.categories;
}

// Immediately-invoked function expression (IIFE)
(async () => {
    const token = await getToken();
    const generos = await getGenres(token);
    console.log(generos)

})();


