App.Model = function () {
  let that = {};

  let dramas = [];
  let dramaId;

  let init = function () {
    const urlParams = new URLSearchParams(window.location.search);
    dramaId = +urlParams.get("dramaId");
    console.log(dramaId);
    console.log("Hello Model");
    initData();
  };

  let initData = function () {
    let i = 0;
    while (i < metadata.length) {
      dramas.push(metadata[i]);
      i = i + 1;
    }
  };

  let getDramasData = function () {
    let dramaLines = [];
    let fileName = metadata[dramaId]["file"];
    // console.log(fileName)
    for (let i = 0; i < emo_data.length; i++) {
      // console.log(emo_data[i]["file"])
      if (fileName === emo_data[i]["file"]) {
        // console.log(emo_data[i])
        dramaLines.push(emo_data[i]);
      }
    }
    return dramaLines;
  };

  let getPreparedData = function(){
      let drama = dramas[dramaId]
      return drama
  }

  let getJsonData = function(){
      let jsonData = [];
          let dramaTitle = dramas[dramaId]["title0"]
          let dramaYear = dramas[dramaId]["Sortierdatum"]
          let dramaAuthor = dramas[dramaId]["author"]
          let dramaGenre = dramas[dramaId]["genretitle"]
          let dramaFile = dramas[dramaId]["file"]
          let dramaNrOfAct = dramas[dramaId]["act_count"]
          let dramaNrOfScene = dramas[dramaId]["scene_count"]
          
          jsonData.push({
              "title0": dramaTitle,
              "Sortierdatum": dramaYear,
              "author": dramaAuthor,
              "genretitle": dramaGenre,
              // "dramaId": i,
              "file": dramaFile,
              "act_count": dramaNrOfAct,
              "scene_count": dramaNrOfScene,
          })
      return JSON.stringify(jsonData)
  }

  that.init = init
  that.initData = initData
  that.getDramasData = getDramasData
  that.getPreparedData = getPreparedData
  that.getJsonData = getJsonData

  return that
} 
