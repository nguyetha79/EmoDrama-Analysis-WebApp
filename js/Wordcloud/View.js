App.View = function(){
    let that = {}
    
    let init = function(){
        initAnychartWordcloud();
    }

    let displayDramaTitle = function(metadata){
        let $tr = $("#play")
        let play = "<th> " + metadata.title0 + "</th>"
        // let downloadJson = "<td> <span class=\"glyphicon glyphicon-download\"></span> </td>"

        let $titleContent = play
        $tr.append($titleContent)
    }

    let initAnychartWordcloud = function(){
        anychart.onDocumentReady(function() {
            $(document).trigger("wordCloudLoaded")
        });
    }

    let drawMainEmoWordCloud = function(words) {
        var chart = anychart.tagCloud(words);
        // set an array of angles at which the words will be laid out
        chart.angles([0])
        // display the word cloud chart
        chart.container("main-emo-wordcloud");
        // chart.container()
        chart.draw();
    };

    let drawMainEmoPositiveWC = function(words) {
        var chart = anychart.tagCloud(words);
         chart.angles([0])
         chart.container("main-emo-positive-wordcloud");
         chart.draw();
     };

     let drawMainEmoNegativeWordCloud = function(words) {
        var chart = anychart.tagCloud(words);
        chart.angles([0])
        chart.container("main-emo-negative-wordcloud");
        chart.draw();
    };

    let drawSubEmoWordCloud = function(words) {
        var chart = anychart.tagCloud(words);
        chart.angles([0])
        chart.container("sub-emo-wordcloud");
        chart.draw();
    };

    let drawSubEmoPositiveWordCloud = function(words) {
        var chart = anychart.tagCloud(words);
        chart.angles([0])
        chart.container("sub-emo-positive-wordcloud");
        chart.draw();
    };

    let drawSubEmoNegativeWordCloud = function(words) {
        var chart = anychart.tagCloud(words);
        chart.angles([0])
        chart.container("sub-emo-negative-wordcloud");
        chart.draw();
    };
    
    that.init = init
    that.drawSubEmoPositiveWordCloud = drawSubEmoPositiveWordCloud
    that.drawMainEmoNegativeWordCloud = drawMainEmoNegativeWordCloud
    that.drawMainEmoWordCloud = drawMainEmoWordCloud
    that.drawMainEmoPositiveWC = drawMainEmoPositiveWC
    that.drawSubEmoWordCloud = drawSubEmoWordCloud
    that.drawSubEmoNegativeWordCloud = drawSubEmoNegativeWordCloud
    that.displayDramaTitle = displayDramaTitle
    that.initAnychartWordcloud = initAnychartWordcloud

    return that
}