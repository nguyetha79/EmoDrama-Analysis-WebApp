App.View = function(){
    let that = {}
    
    let init = function() {
        $(".info-overall").tooltipster({content: $("<div>Testing</div>")});
    }

    let displayDramas = function(dramas){
        $("#data").empty()
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
            $("#data").append($tr)
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

    that.displayDramas = displayDramas
    that.init = init

    return that
}