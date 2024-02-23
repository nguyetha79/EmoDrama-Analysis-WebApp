App.Model = function(){
    let that = {}

    let dramas = []
    let dramaId 
    

    let init = function(){
        const urlParams = new URLSearchParams(window.location.search);
        dramaId = +urlParams.get('dramaId');
        console.log(dramaId)
        console.log("Hello Model")
        initData()
    }

    let initData = function(){
        let i = 0
        while(i < metadata.length){
            dramas.push(metadata[i])
            i = i + 1
        }
    }

    let getDramasData = function(){
        let dramaLines = []
        let fileName = metadata[dramaId]["file"]
        // console.log(fileName)
        for(let i = 0; i < emo_data.length; i++){
            // console.log(emo_data[i]["file"])
            if(fileName === emo_data[i]["file"]){
                // console.log(emo_data[i])
                dramaLines.push(emo_data[i])
            }
        }
        return dramaLines
    }

    let getPreparedData = function(){
        let drama = metadata[dramaId]
        for(let i = 0; i < emo_data.length; i++){
            if(metadata[dramaId]["file"] === emo_data[i]["file"])
                drama.genre = emo_data[i]["genre"]
        }
        return drama
    }

    let getPolarityData = function(){
        let polarityData = []
        let positive = 0
        let negative = 0
        let beingMoved = 0
        let noAnnotation = 0
        for(let i = 0; i < emo_data.length; i++){
            if(metadata[dramaId]["file"] === emo_data[i]["file"]){
                if(emo_data[i]["pre1_base_polarity"] === "positive"){
                    positive += 1
                } if(emo_data[i]["pre1_base_polarity"] === "negative"){
                    negative += 1
                } if(emo_data[i]["pre1_base_polarity"] === "being moved"){
                    beingMoved += 1
                } if(emo_data[i]["pre1_base_polarity"] === "no_annotation"){
                    noAnnotation += 1
                }
            }
        }
        polarityData =
                [["Polarity", 'value'], 
                ["Positive", positive],
                ["Negative", negative],
                ["Being Moved", beingMoved],
                ["No Annotation", noAnnotation]]
        return polarityData
    }

    let getMainEmoData = function(){
        let mainEmoData = []
        let pleasure = 0
        let rejection = 0
        let sufferingAEmpathy = 0
        let beingMoved = 0
        let affection = 0
        let anxiety = 0
        let noAnnotation = 0

        for(let i = 0; i < emo_data.length; i++){
            if(metadata[dramaId]["file"] === emo_data[i]["file"]){
                if(emo_data[i]["pre1_main_emotion_class"] === "emotions of pleasure"){
                    pleasure += 1
                } if(emo_data[i]["pre1_main_emotion_class"] === "emotions of rejection"){
                    rejection += 1
                } if(emo_data[i]["pre1_main_emotion_class"] === "emotions of suffering and empathy"){
                    sufferingAEmpathy += 1
                } if(emo_data[i]["pre1_main_emotion_class"] === "being moved"){
                    beingMoved += 1
                } if(emo_data[i]["pre1_main_emotion_class"] === "emotions of affection"){
                    affection += 1
                } if(emo_data[i]["pre1_main_emotion_class"] === "emotions of anxiety"){
                    anxiety += 1
                } if(emo_data[i]["pre1_main_emotion_class"] === "no_annotation"){
                    noAnnotation += 1
                }
            }
        }
        mainEmoData = [["Main Emotion", 'value', { role: 'style' }],
                        ["Pleasure", pleasure, 'color: #76A7FA'],
                        ["Rejection", rejection, 'color: yellow; opacity: 0.9'],
                        ["Suffering and Empathy", sufferingAEmpathy, 'color: #703593'],
                        ["Being Moved", beingMoved, 'color: #871B47'],
                        ["Affection", affection, 'fill-color: #BC5679'],
                        ["Anxiety", anxiety, 'opacity: 0.9'],
                        ["No Annotation", noAnnotation, 'color: gray' ]]
        return mainEmoData
    }

    let getSubEmoData = function(){
        let subEmoData = []
        let beingMoved = 0
        let pleasure = 0
        let anger = 0
        let fear = 0
        let love = 0
        let admirationReverence = 0
        let abhorrence = 0
        let schadenfreude = 0
        let joy = 0
        let despair = 0
        let friendship = 0
        let compassion = 0
        let suffering = 0
        let no_annotation = 0

        for(let i = 0; i < emo_data.length; i++){
            if(metadata[dramaId]["file"] === emo_data[i]["file"]){
                if(emo_data[i]["pre1_tag_type"] === "being moved"){
                    beingMoved += 1
                } if(emo_data[i]["pre1_tag_type"] === "pleasure"){
                    pleasure += 1
                } if(emo_data[i]["pre1_tag_type"] === "anger"){
                    anger += 1
                } if(emo_data[i]["pre1_tag_type"] === "fear"){
                    fear += 1
                } if(emo_data[i]["pre1_tag_type"] === "love"){
                    love += 1
                } if(emo_data[i]["pre1_tag_type"] === "admiration, reverence"){
                    admirationReverence += 1
                } if(emo_data[i]["pre1_tag_type"] === "abhorrence"){
                    abhorrence += 1
                } if(emo_data[i]["pre1_tag_type"] === "Schadenfreude"){
                    schadenfreude += 1
                } if(emo_data[i]["pre1_tag_type"] === "joy"){
                    joy += 1
                } if(emo_data[i]["pre1_tag_type"] === "despair"){
                    despair += 1
                } if(emo_data[i]["pre1_tag_type"] === "friendship"){
                    friendship += 1
                } if(emo_data[i]["pre1_tag_type"] === "compassion"){
                    compassion += 1
                } if(emo_data[i]["pre1_tag_type"] === "suffering"){
                    suffering += 1
                } if(emo_data[i]["pre1_tag_type"] === "no_annotation"){
                    no_annotation += 1
                }
            }
        }
        subEmoData = [["Sub Emotion", 'value'],
                            ["Being Moved", beingMoved],   
                            ["Pleasure", pleasure],
                            ["Anger", anger],
                            ["Fear", fear],
                            ["Love", love],
                            ["Admiration, Reverence", admirationReverence],
                            ["Abhorrence", abhorrence],
                            ["Schadenfreude", schadenfreude],
                            ["Joy", joy],
                            ["Despair", despair],
                            ["Friendship", friendship],
                            ["Compassion", compassion],
                            ["Suffering", suffering],
                            ["No Annotation", no_annotation]]
        return subEmoData           
    }

    let getSubEmoPositive = function(){
        let subEmoPositive = []
        let beingMoved = 0
        let pleasure = 0
        let anger = 0
        let fear = 0
        let love = 0
        let admirationReverence = 0
        let abhorrence = 0
        let schadenfreude = 0
        let joy = 0
        let despair = 0
        let friendship = 0
        let compassion = 0
        let suffering = 0
        let no_annotation = 0

        for(let i = 0; i < emo_data.length; i++){
            if(metadata[dramaId]["file"] === emo_data[i]["file"]){
                if(emo_data[i]["pre1_base_polarity"] === "positive"){
                    if(emo_data[i]["pre1_tag_type"] === "being moved"){
                        beingMoved += 1
                    } if(emo_data[i]["pre1_tag_type"] === "pleasure"){
                        pleasure += 1
                    } if(emo_data[i]["pre1_tag_type"] === "anger"){
                        anger += 1
                    } if(emo_data[i]["pre1_tag_type"] === "fear"){
                        fear += 1
                    } if(emo_data[i]["pre1_tag_type"] === "love"){
                        love += 1
                    } if(emo_data[i]["pre1_tag_type"] === "admiration, reverence"){
                        admirationReverence += 1
                    } if(emo_data[i]["pre1_tag_type"] === "abhorrence"){
                        abhorrence += 1
                    } if(emo_data[i]["pre1_tag_type"] === "Schadenfreude"){
                        schadenfreude += 1
                    } if(emo_data[i]["pre1_tag_type"] === "joy"){
                        joy += 1
                    } if(emo_data[i]["pre1_tag_type"] === "despair"){
                        despair += 1
                    } if(emo_data[i]["pre1_tag_type"] === "friendship"){
                        friendship += 1
                    } if(emo_data[i]["pre1_tag_type"] === "compassion"){
                        compassion += 1
                    } if(emo_data[i]["pre1_tag_type"] === "suffering"){
                        suffering += 1
                    } if(emo_data[i]["pre1_tag_type"] === "no_annotation"){
                        no_annotation += 1
                    }
                }
            }
        }
        subEmoPositive = [["Sub Emotion", 'value'],
                            ["Being Moved", beingMoved],   
                            ["Pleasure", pleasure],
                            ["Anger", anger],
                            ["Fear", fear],
                            ["Love", love],
                            ["Admiration, Reverence", admirationReverence],
                            ["Abhorrence", abhorrence],
                            ["Schadenfreude", schadenfreude],
                            ["Joy", joy],
                            ["Despair", despair],
                            ["Friendship", friendship],
                            ["Compassion", compassion],
                            ["Suffering", suffering],
                            ["No Annotation", no_annotation]]
        return subEmoPositive           
    }

    let getMainEmoNegativeData = function(){
        let mainEmoNegativeData = []
        let pleasure = 0
        let rejection = 0
        let sufferingAEmpathy = 0
        let beingMoved = 0
        let affection = 0
        let anxiety = 0
        let noAnnotation = 0

        for(let i = 0; i < emo_data.length; i++){
            if(metadata[dramaId]["file"] === emo_data[i]["file"]){
                if(emo_data[i]["pre1_base_polarity"] === "negative"){
                    if(emo_data[i]["pre1_main_emotion_class"] === "emotions of pleasure"){
                        pleasure += 1
                    } if(emo_data[i]["pre1_main_emotion_class"] === "emotions of rejection"){
                        rejection += 1
                    } if(emo_data[i]["pre1_main_emotion_class"] === "emotions of suffering and empathy"){
                        sufferingAEmpathy += 1
                    } if(emo_data[i]["pre1_main_emotion_class"] === "being moved"){
                        beingMoved += 1
                    } if(emo_data[i]["pre1_main_emotion_class"] === "emotions of affection"){
                        affection += 1
                    } if(emo_data[i]["pre1_main_emotion_class"] === "emotions of anxiety"){
                        anxiety += 1
                    } if(emo_data[i]["pre1_main_emotion_class"] === "no_annotation"){
                        noAnnotation += 1
                    }
                }
            }
        }
        mainEmoNegativeData = [["Main Emotion", 'value', { role: 'style' }],
                                ["Pleasure", pleasure, 'color: #76A7FA'],
                                ["Rejection", rejection, 'color: yellow; opacity: 0.9'],
                                ["Suffering and Empathy", sufferingAEmpathy, 'color: #703593'],
                                ["Being Moved", beingMoved, 'color: #871B47'],
                                ["Affection", affection, 'fill-color: #BC5679'],
                                ["Anxiety", anxiety, 'opacity: 0.9'],
                                ["No Annotation", noAnnotation, 'color: gray' ]]
        return mainEmoNegativeData
    }

    that.init = init
    that.initData = initData
    that.getDramasData = getDramasData
    that.getPreparedData = getPreparedData
    that.getPolarityData = getPolarityData
    that.getMainEmoData = getMainEmoData
    that.getSubEmoPositive = getSubEmoPositive
    that.getMainEmoNegativeData = getMainEmoNegativeData
    that.getSubEmoData = getSubEmoData
    
    return that
}