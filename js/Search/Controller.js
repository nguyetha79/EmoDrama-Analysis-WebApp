App.Controller = function(){
    let that = {}

    let model = null
    let view = null

    let init = function(){
        model = App.Model()
        view = App.View()

        model.init()

        $(view).on("DramaClicked", handleClickDramaDetail);
        $('#search-button').on('click', handleInputData);
    }

    let handleClickDramaDetail = function(event, dramaId){
        window.location = "dramasDetail.html?dramaId=" + dramaId
    }

    let handleInputData = function(){
        let genre = []
        $("#genre").find("input[type=checkbox]:checked").each(function() {
            genre.push($(this).val());
        });
        let type = []
        $("#type").find("input[type=checkbox]:checked").each(function() {
            type.push($(this).val());
        });
        let gender = []
        $("#gender").find("input[type=checkbox]:checked").each(function() {
            gender.push($(this).val());
        });
        let basePolarity = []
        $("#base-polarity").find("input[type=checkbox]:checked").each(function() {
            basePolarity.push($(this).val());
        });
        let mainEmotion = []
        $("#main-emotion").find("input[type=checkbox]:checked").each(function() {
            mainEmotion.push($(this).val());
        });
        let subEmotion = []
        $("#sub-emotion").find("input[type=checkbox]:checked").each(function() {
            subEmotion.push($(this).val());
        });
        let text = $("#input-text").val();
        let act = $("#input-act").val();
        let scene = $("#input-scene").val();
        let dateFrom = $("#input-date-from").val();
        let dateTo = $("#input-date-to").val();
        view.displayDramas(model.getPreparedData(
            model.search(genre, type, gender, basePolarity, mainEmotion, subEmotion, text, act, scene, dateFrom, dateTo)));
            console.log("Hello")
    }



    that.init = init

    return that
}