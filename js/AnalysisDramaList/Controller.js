App.Controller = function(){
    let that = {}

    let model = null
    let view = null

    let init = function(){
        model = App.Model()
        view = App.View()

        model.init()

        view.displayDramas(model.getPreparedData())
        $(view).on("DramaClicked", handleClickDramaDetail);
        $('#search-button').on('click', handleInputData);
    }

    let handleClickDramaDetail = function(event, dramaId){
        window.location = "dramasDetail.html?dramaId=" + dramaId
    }

    that.init = init

    return that
}