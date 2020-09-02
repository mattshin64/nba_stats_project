const axios = require('axios')
let gameIds = {}
axios.get('https://data.nba.net/10s/prod/v1/2019/schedule.json')
    .then((data)=>  {
        let arrofgames = data.data.league.standard
        for(var i = 0; i < arrofgames.length; i += 1){
            gameIds[arrofgames[i].startDateEastern] = arrofgames[i].gameId
        }
    })
    .then(() => {
        for(var key in gameIds){
            let gameId = gameIds[key]
            axios.get(`http://data.nba.net/data/10s/json/cms/noseason/game/${key}/${gameId}/pbp_all.json`)
            .then((data)=> {
                let arrofplays = data.data.sports_content.game.play
                for(var k = 0; k < arrofplays.length; k += 1){
                    console.log(arrofplays[k].description)
                }
            })
            .catch((err) => console.error(err))
        }
    })
    .catch((err) => console.error(err))
