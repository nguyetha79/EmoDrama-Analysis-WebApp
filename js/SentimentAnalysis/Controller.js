App.Controller = function(){
    let that = {}

    let model = null
    let view = null

    let init = function(){
        model = App.Model()
        view = App.View()

        view.init()
        model.init()
        model.getPolarityData()

        view.displayDramaTitle(model.getPreparedData())
        $("#wordcloud-analysis").on("click", handleClickWordCloud)
        $("#drama-detail").on("click", handleClickDramaDetail)
        $(document).on("googleChartsLoaded", handleGoogleChartsLoaded)
    }

    let handleClickWordCloud = function(event){
        event.preventDefault();
        const urlParams = new URLSearchParams(window.location.search);
        let dramaId = +urlParams.get('dramaId');
        window.location = "wordcloud.html?dramaId=" + dramaId
    }

    let handleClickDramaDetail = function(event){
        event.preventDefault();
        const urlParams = new URLSearchParams(window.location.search);
        let dramaId = +urlParams.get('dramaId');
        window.location = "dramasDetail.html?dramaId=" + dramaId
    }

    let handleGoogleChartsLoaded = function(){
        console.log("handle Google Charts Loaded")
        view.drawPolarityChart(model.getPolarityData())
        view.drawMainEmoChart(model.getMainEmoData())
        view.drawSubEmoPositiveChart(model.getSubEmoPositive())
        view.drawMainEmoNegativeChart(model.getMainEmoNegativeData())
        view.drawSubEmoChart(model.getSubEmoData())
    }

    that.init = init

    return that
}