App.Model = function(){
    let that = {}

    let dramas = []
    let dramaId

    let init = function(){
        const urlParams = new URLSearchParams(window.location.search);
        dramaId = +urlParams.get('dramaId');
        console.log(dramaId)
        initData()
    }

    /* init all data from metadata.js */
    let initData = function(){
        let i = 0

        while(i < metadata.length){
            dramas.push(metadata[i])
            i = i + 1
        }
    }

    /* Prepared data to show in analysisDramaList.html */
    let getPreparedData = function(){
        let preparedData = [];
        for(let i = 0; i < dramas.length; i++){
            for(let j = 0; j < emo_data.length; j++){
                if(emo_data[j]["file"] === dramas[i]["file"]){
                    let dramaTitle = dramas[i]["title0"]
                    let dramaYear = dramas[i]["Sortierdatum"]
                    let dramaAuthor = dramas[i]["author"]
                    let dramaGenre = emo_data[j]["genre"]
                    let dramaFile = dramas[i]["file"]
                    preparedData.push({
                        "title0": dramaTitle,
                        "Sortierdatum": dramaYear,
                        "author": dramaAuthor,
                        "genre": dramaGenre,
                        "dramaId": i,
                        "file": dramaFile,
                    })
                    break;
                    }
            }
        }
    return preparedData;
    }
    
    that.init = init
    that.initData = initData
    // that.checkedGenreValues = checkedGenreValues
    // that.filteredGenreDramas = filteredGenreDramas
    // that.filteredDramas = filteredDramas
    that.getPreparedData = getPreparedData

    return that
}