const clientId = 'yrTBPLeWi64vb2bJRVHCSjQ2O1kdZQnSzAQy5l3h';
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


const getGenres = async () => {
    const result = await fetch('https://api.nasa.gov/neo/rest/v1/neo/3542519?api_key='+clientId, {
        method: "GET",
        // headers: {"Authorization": "Bearer " + token}
    })
    const data = await result.json()
    return data;
}

// Immediately-invoked function expression (IIFE)
(async () => {
    // const token = await getToken();
    const info = await getGenres(clientId);
    console.log(info)

})();


