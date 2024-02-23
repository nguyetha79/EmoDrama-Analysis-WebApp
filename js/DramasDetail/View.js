App.View = function(){
    let that = {}

    let displayDramaTitle = function(metadata){
        let $tr = $("#play")
        let play = "<th> " + metadata.title0 + "</th>"
        // let downloadJson = "<td> <span class=\"glyphicon glyphicon-download\"></span> </td>"

        let $titleContent = play
        $tr.append($titleContent)
    }

    let displayDramasInfo = function(dramas){
        let $tr = $("#dramaInfo")
        
            let author = "<tr><th>Author</th>" + "<th> " + dramas.author + "</th>" + "</tr>"
            let yearPlayAppeared = "<tr><th>Year Play Appeared</th>" + "<th> " + dramas.Sortierdatum + "</th>" + "</tr>"
            let genre = "<tr><th>Genre</th>" + "<th>" + dramas.genretitle + "</th>" + "</tr>"
            let numberOfActs = "<tr><th>Number Of Acts</th>" + "<th>" + dramas.act_count + "</th>" + "</tr>"
            let numberOfScenes = "<tr><th>Number Of Scenes</th>" + "<th>" + dramas.scene_count + "</th>" + "</tr>"

            let $titleContent = author + yearPlayAppeared + genre + numberOfActs + numberOfScenes

            $tr.append($titleContent)
    }
    
    let displayDramas = function(emo_data){
        console.log(emo_data)
        for(let detailData of emo_data){
            let $tr = $("<tr>")

            let scene = "<th>" + detailData.scene + "</th>"
            let act = "<th>" + detailData.act + "</th>"
            let text = "<th> " + detailData.text + "</th>"
            let gender = "<th>" + detailData.gender + "</th>"
            let basePolariy = "<th>" + detailData.pre1_base_polarity + "</th>"
            let mainEmoClass = "<th>" + detailData.pre1_main_emotion_class + "</th>"
            let subEmo = "<th>" + detailData.pre1_tag_type + "</th>"

            // let downloadJson = "<td> <span class=\"glyphicon glyphicon-download\"></span> </td>"

            let $titleContent = scene + act + text + gender + basePolariy + mainEmoClass + subEmo
            $tr.append($titleContent)
            $("#emo_reduced_data").append($tr)
        }
    }

    that.displayDramas = displayDramas
    that.displayDramasInfo = displayDramasInfo
    that.displayDramaTitle = displayDramaTitle

    return that
}