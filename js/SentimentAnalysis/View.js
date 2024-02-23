App.View = function(){
    let that = {}
    
    let init = function(){
        initGoogleCharts();
    }

    let displayDramaTitle = function(metadata){
        let $tr = $("#play")
        let play = "<th> " + metadata.title0 + "</th>"
        // let downloadJson = "<td> <span class=\"glyphicon glyphicon-download\"></span> </td>"

        let $titleContent = play
        $tr.append($titleContent)
    }

    let initGoogleCharts = function(){
        google.charts.load("current", {packages:["corechart"]});
        google.charts.setOnLoadCallback(function(){
            $(document).trigger("googleChartsLoaded")
        })
    }

    let drawPolarityChart = function(polarityData){
        let data = google.visualization.arrayToDataTable(polarityData)

        let options = {
            // title: "Polarity Distribution In The Play",
            is3D: true,
        };  
          var chart = new google.visualization.PieChart(document.getElementById('chart-div-drama-pie'));
          chart.draw(data, options);
    }

    let drawMainEmoChart = function(mainEmoData){
        let data = google.visualization.arrayToDataTable(mainEmoData)

        let options = {
            // title: "Main Emotions Distribution In The Play",
            width: 600,
            height: 400,
            bar: {groupWidth: "95%"},
            legend: { position: "none" },
        };  
          var chart = new google.visualization.BarChart(document.getElementById('main-emo-chart'));
          chart.draw(data, options);
    }

    let drawSubEmoChart = function(subEmoData){
        let data = google.visualization.arrayToDataTable(subEmoData)

        let options = {
            // title: "Main Emotions Distribution In The Play",
            width: 600,
            height: 400,
            bar: {groupWidth: "95%"},
            legend: { position: "none" },
        };  
          var chart = new google.visualization.BarChart(document.getElementById('sub-emo-chart'));
          chart.draw(data, options);
    }

    let drawSubEmoPositiveChart = function(subEmoData){
        let data = google.visualization.arrayToDataTable(subEmoData)

        let options = {
            // title: "Sub Emotions Distribution Of "Positive" Polarity In The Play",
            width: 600,
            height: 400,
            bar: {groupWidth: "95%"},
            legend: { position: "none" },
        };  
          var chart = new google.visualization.ColumnChart(document.getElementById('sub-emo-positive-chart'));
          chart.draw(data, options);
    }


    let drawMainEmoNegativeChart = function(mainEmoData){
        let data = google.visualization.arrayToDataTable(mainEmoData)

        let options = {
            // title: "Sub Emotions Distribution Of "Positive" Polarity In The Play",
            width: 600,
            height: 400,
            bar: {groupWidth: "95%"},
            legend: { position: "none" },
        };  
          var chart = new google.visualization.ColumnChart(document.getElementById('main-emo-negative-chart'));
          chart.draw(data, options);
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

    // that.displayDramas = displayDramas
    that.init = init
    that.displayDramaTitle = displayDramaTitle
    that.initGoogleCharts = initGoogleCharts
    that.drawPolarityChart = drawPolarityChart
    that.drawMainEmoChart = drawMainEmoChart
    that.drawSubEmoPositiveChart = drawSubEmoPositiveChart
    that.drawMainEmoNegativeChart = drawMainEmoNegativeChart
    that.drawSubEmoChart = drawSubEmoChart

    return that
}