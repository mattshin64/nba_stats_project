const axios = require('axios')
let gameIds = {}
axios.get('https://data.nba.net/10s/prod/v1/2019/schedule.json')
    .then((data)=>  {
        let arrofgames = data.data.league.standard
        for(var i = 0; i < arrofgames.length; i += 1){
            console.log(arrofgames[i].startDateEastern)
            gameIds[arrofgames[i].startDateEastern] = arrofgames[i].gameId
        }
        console.log(gameIds)
    })
    .catch((err) => console.error(err))
