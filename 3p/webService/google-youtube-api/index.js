const express = require('express');
const { OAuth2Client, auth } = require('google-auth-library');
const { google } = require('googleapis');


(async () => {
    const webServer = await StartServer()
    const OAuthClient = await createOauthClient()

    requestUserConsent(OAuthClient)
    const authorizationToken = await waitForGoogleCallBack(webServer)
    await requestGoogleForAcessToken(OAuthClient, authorizationToken)
    await settingGloblalGoogleAuth(OAuthClient)
    await getChannel(auth)

    await closeServer(webServer)

    // Abre porta de serviço para rodar aplicação
    async function StartServer() {

        return new Promise((resolve, reject) => {
            const porta = 5000
            const app = express()
            const server = app.listen(porta, () => {
                console.log(('rodando na http://localhost:' + porta))
                resolve({
                    app,
                    server
                })
            })
        })
    }
    // Cria nova instancia do OAuth2 com os params necessários
    async function createOauthClient() {
        const credencial = require('./credenciais/client_secret_199407723968-lgun2ekvjgkfrl9sbrqntbdevdfndftg.apps.googleusercontent.com.json')

        const OAuthClient = new google.auth.OAuth2(
            credencial.web.client_id,
            credencial.web.client_secret,
            credencial.web.redirect_uris[0]
        )
        return OAuthClient
    }
    // aqui é solicitado atráves do gmail consentimento do usuário
    function requestUserConsent(OAuthClient,callback) {
        const consentUrl = OAuthClient.generateAuthUrl({
            acess_type: 'offline',
            scope: ['https://www.googleapis.com/auth/youtube.readonly']
        })
        console.log('De o consentimento: ' + consentUrl);
    }
// retorno do google após consentimento dado, função que pausa a aplicação até o consentimento
    async function waitForGoogleCallBack(webServer) {
        return new Promise((resolve, reject) => {
            console.log("waiting consent...");
            webServer.app.get('/oauth2callback', (req, res) => {
                const authCode = req.query.code
                console.log('consent given: ' + authCode);
                res.send('<h1>Obrigado! Feche esta aba</h1>')
                resolve(authCode)
            })
        })
    }
    // após o consentimento aqui requisitamos o token de acesso
    // a variável service foi criada para ser usada na tentativa pesquisa 2
    async function requestGoogleForAcessToken(OAuthClient, authorizationToken) {
        return new Promise((resolve, reject) => {
            OAuthClient.getToken(authorizationToken, (error, tokens) => {
                if (error) {
                    return reject(error)
                }
                console.log("Received");
                
                const access_token = tokens.access_token
                const service =google.youtube({
                    version:'v3',
                    auth:'AIzaSyAg80UL3m43HdoDJYSo0OSWdR0ZUCqr0bE'
                })
                // pesquisa(access_token)
                // pesqquisa2(service)
                OAuthClient.credentials = tokens;
             
                
                

                




                resolve()

            })

        })

    }
    // qualquer requisição feita, já estará autenticada
    function settingGloblalGoogleAuth(OAuthClient) {
        google.options({
            auth: OAuthClient
        })
    }
    // fechando a porta do webServer
    async function closeServer(webServer) {
        return new Promise((resolve, reject) => {
            webServer.server.close(() => {
                resolve()
            })
        })
    }


})()

// tentativa 3, funcionou com authToken e id passado como parametro

function getChannel(auth) {
    const idVideo ='3rzgrP7VA_Q'
    var service = google.youtube('v3');
    service.videos.list({ 
        headers: { "Authorization": "Bearer " + auth},
      part: 'snippet,contentDetails,statistics',
      id:idVideo
    }, function(err, response) {
      if (err) {
        console.log('The API returned an error: ' + err);
        return;
      }
      var channels = response.data.items;
      console.log('Url do video: https://www.youtube.com/watch?v='+idVideo);
     console.log(channels);
    });
  }



// Primeira tentativa com sucesso, embora o id do vídeo deve ser passado na URL e não nos parâmetros, o que me levou a buscar outras soluções.

// const pesquisa = async (access_token) => {
   
//     const result = await fetch('https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=3rzgrP7VA_Q&key=[AIzaSyAg80UL3m43HdoDJYSo0OSWdR0ZUCqr0bE] HTTP/1.1', {
//         method: "GET",
        
//         headers: { "Authorization": "Bearer " + access_token},
//         part:{'snippet':[
//             'channelId','title','description','categoryId'
//         ],id:'Ks-_Mh1QhMc'},
        
       
//     })
//     const data = await result.json()
//     console.log(data.items[0]);
// }

// Segunda tentativa, funcionou o passagem do id do vídeo como parametro, mas infelizmente não aceitou o token funcionando apenas com a apiKey

// async function pesquisa2(service){
//     await service.videos.list({
//         'part':["snippet, contentDetails, statistics"],
//         id:'3rzgrP7VA_Q'
//     },(err,res)=>
//     {
//         console.log(res.data.items);
        
//     })
// }
