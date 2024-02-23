App.Model = function(){
    let that = {}

    let dramas = []
    let dramaId

    let init = function(){
        const urlParams = new URLSearchParams(window.location.search);
        dramaId = +urlParams.get('dramaId');
        initData()
    }

    /* init all data from metadata.js */
    let initData = function(){
        let i = 0

        while(i < metadata.length){
            let data = metadata[i]
            data.id = i
            dramas.push(data)
            i = i + 1
        }
    }

    let search = function(genre, type, gender, basePolarity, mainEmotion, subEmotion, text, act, scene, dateFrom, dateTo){
        let filteredDrama = []
        let found = false
        
        for(let i = 0; i < dramas.length; i++){
            let passed = true
            let drama = getOverallReducedData(dramas[i])
            if((genre.length > 0 && !genre.includes(drama["genre"]))
            || (type.length > 0 && !type.includes(drama["type"]))
            || (gender.length > 0 && !gender.includes(drama["gender"]))
            || (basePolarity.length > 0 && !basePolarity.includes(drama["pre1_base_polarity"]))
            || (mainEmotion.length > 0 && !mainEmotion.includes(drama["pre1_main_emotion_class"]))
            || (subEmotion.length > 0 && !subEmotion.includes(drama["pre1_tag_type"]))
            || (text != "" && drama.hasOwnProperty("text") && !drama["text"].includes(text))
            || (act != "" && drama.hasOwnProperty("act") && !drama["act"].includes(act))
            || (scene != "" && drama.hasOwnProperty("scene") && !drama["scene"].includes(scene))
            || (dateFrom != "" && drama["Sortierdatum"] < +dateFrom)
            || (dateTo != "" && drama["Sortierdatum"] > +dateTo )) {  
                // console.log(mainEmotion, drama["pre1_main_emotion_class"])
                console.log(gender, drama.gender)
                passed = false 
            }
            if(passed){ 
                found = true                
                filteredDrama.push(dramas[i])
                console.log(drama["date"], dateFrom)
            }
        }
        if(!found) window.alert("No Result Found!")
        return filteredDrama
    }

    let getOverallReducedData = function(drama){
        drama.text = ""
        drama.act = ""
        drama.scene = ""
        for(let i = 0; i < emo_data.length; i++){
            if(emo_data[i]["file"] === drama["file"]) {
                if (!emo_data[i]["gender"])
                    drama.gender = "null"
                else drama["gender"] = emo_data[i]["gender"]
                drama["type"] = emo_data[i]["type"]
                drama["genre"] = emo_data[i]["genre"]
                drama["pre1_base_polarity"] = emo_data[i]["pre1_base_polarity"]
                drama["pre1_main_emotion_class"] = emo_data[i]["pre1_main_emotion_class"]
                drama["pre1_tag_type"] = emo_data[i]["pre1_tag_type"]
                drama["text"] += " " + emo_data[i]["text"]
                drama["act"] += " " + emo_data[i]["act"]
                drama["scene"] += " " + emo_data[i]["scene"]
            }
        }
        return drama
    }

    /* Prepared data to show in index.html */
    let getPreparedData = function(dramas){
        let preparedData = [];
        for(let i = 0; i < dramas.length; i++){
            let dramaTitle = dramas[i]["title0"]
            let dramaYear = dramas[i]["Sortierdatum"]
            let dramaAuthor = dramas[i]["author"]
            let dramaGenre = ""
            let dramaFile = dramas[i]["file"]
            let dramaId = dramas[i].id
            // let downloadJson = button
            for(let j = 0; j < emo_data.length; j++){
                if(emo_data[j]["file"] === dramas[i]["file"]){
                    dramaGenre = emo_data[j]["genre"]
                }
            }
            preparedData.push({
                "title0": dramaTitle,
                "Sortierdatum": dramaYear,
                "author": dramaAuthor,
                "genre": dramaGenre,
                "dramaId": dramaId,
                "file": dramaFile,
            })
        }
    return preparedData;
    }
    
    that.init = init
    that.initData = initData
    that.getPreparedData = getPreparedData
    that.search = search

    return that
}