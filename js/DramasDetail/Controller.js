App.Controller = function(){
    let that = {}

    let model = null
    let view = null
    let dramaId 

    let init = function(){
        const urlParams = new URLSearchParams(window.location.search);
        dramaId = +urlParams.get('dramaId');
        console.log(dramaId)
        model = App.Model()
        view = App.View()
        
        model.init()

        view.displayDramas(model.getDramasData())
        view.displayDramasInfo(model.getPreparedData())
        view.displayDramaTitle(model.getPreparedData())
        $("#sentiment-analysis").on("click", handleClickSentimentAnalysis)
        $("#wordcloud-analysis").on("click", handleClickWordCloud)
        $("#downloadJson").on("click", handleClickDownloadJson)
    }

    let handleClickSentimentAnalysis = function(event){
        event.preventDefault();
        window.location = "sentimentAnalysis.html?dramaId=" + dramaId
    }

    let handleClickWordCloud = function(event){
        event.preventDefault();
        window.location = "wordcloud.html?dramaId=" + dramaId
    }
    
    let download = function(data) {
        // let data = JSON.stringify({"name": "Thu"})
        let type = "application/json"
        let filename = "data.json"
        var file = new Blob([data], {type: type});
        if (window.navigator.msSaveOrOpenBlob) // IE10+
            window.navigator.msSaveOrOpenBlob(file, filename);
        else { // Others
            var downloadJson = document.createElement("a"),
                    url = URL.createObjectURL(file, { oneTimeOnly: true });
            downloadJson.href = url;
            downloadJson.download = filename;
            document.body.appendChild(downloadJson);
            downloadJson.click();
        }
    }

    let handleClickDownloadJson = function(event){
        download(model.getJsonData())
    }

    that.init = init

    return that
}