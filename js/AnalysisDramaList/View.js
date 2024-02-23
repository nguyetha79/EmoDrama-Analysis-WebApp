App.View = function(){
    let that = {}
    
    let displayDramas = function(dramas){
        for(metadata of dramas){
            let $tr = $("<tr dramaId=" + metadata.dramaId + ">")

            let dramaTitle = "<th>" + metadata.title0 + "</th>"
            let dramaYear = "<th>" + metadata.Sortierdatum + "</th>"
            let dramaAuthor = "<th> " + metadata.author + "</th>"
            let dramaGenre = "<th>" + metadata.genre + "</th>"
            // let downloadJson = "<td> <span class=\"glyphicon glyphicon-download\"></span> </td>"

            let $titleContent = dramaTitle + dramaYear + dramaAuthor + dramaGenre
            $tr.append($titleContent)
            $tr.on("click", dramaClicked)
            $("#emoDramaList").append($tr)
            // $('#sentiment-analysis-button').on('click', analyseButtonClicked);
        }
    }

    var dramaClicked = function(event){
		//check if the drama is really clicked and not something else like Download or checkbox
		if($(event.target).is("input") || $(event.target).is("span")){
			return;
		}
		var $row = ($(event.target).parent());
		var dramaId = ($row.attr("dramaId"));
		$(that).trigger("DramaClicked", dramaId);
	};

    // var analyseButtonClicked = function(event){
    
    // }

    that.displayDramas = displayDramas

    return that
}