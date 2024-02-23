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
        view.init()

        view.displayDramaTitle(model.getPreparedData())
        $(document).on("wordCloudLoaded", handleWordCloudLoaded)
        $("#drama-detail").on("click", handleClickDramaDetail)
        $("#sentiment-analysis").on("click", handleClickDramaDetail)
    }

    let handleClickDramaDetail = function(event){
        event.preventDefault();
        const urlParams = new URLSearchParams(window.location.search);
        let dramaId = +urlParams.get('dramaId');
        window.location = "dramasDetail.html?dramaId=" + dramaId
    }

    let handleClickSentimentAnalysis = function(event){
        event.preventDefault();
        const urlParams = new URLSearchParams(window.location.search);
        let dramaId = +urlParams.get('dramaId');
        window.location = "sentimentAnalysis.html?dramaId=" + dramaId
    }
    
    let handleWordCloudLoaded = function(){
        view.drawMainEmoWordCloud(model.getMainEmoData())
        view.drawMainEmoPositiveWC(model.getMainEmoPositiveData())
        view.drawMainEmoNegativeWordCloud(model.getMainEmoNegativeData())
        view.drawSubEmoWordCloud(model.getSubEmoData())
        view.drawSubEmoPositiveWordCloud(model.getSubEmoPositiveData())
        view.drawSubEmoNegativeWordCloud(model.getSubEmoNegativeData())
    }

    that.init = init

    return that
}