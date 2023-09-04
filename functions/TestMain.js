




const TestMainFnc = (data) => {
    let mainData = [...data]
    let FinalData = []
    let answerControl = []

    let Means = []
    mainData.forEach((e)=>{
        if(e.mean !== undefined){
            Means.push(e.mean)
        }
    })

    let Questions = []
    let numQuestions = Math.min(mainData.length,50)
    for(i = 0; i < numQuestions; i++){
        let index = Math.floor(Math.random()*mainData.length)
        Questions.push(mainData[index])
        mainData.splice(index,1)
        Means.splice(index,1)

        let option1 = Math.floor(Math.random()*Means.length)
        let option2 = Math.floor(Math.random()*Means.length)
        let option3 = Math.floor(Math.random()*Means.length)
        let option4 = Math.floor(Math.random()*Means.length)

       
        

        let Choices = 
       [{choice:Questions[i].mean,correct:true},
        {choice:Means[option1],correct:false},
        {choice:Means[option2],correct:false},
        {choice:Means[option3],correct:false},
        {choice:Means[option4],correct:false}].sort(()=> Math.random() - 0.5)


        FinalData.push({
            question:Questions[i].word,
            a:Choices[0],
            b:Choices[1],
            c:Choices[2],
            d:Choices[3],
            e:Choices[4],
            id:i+1})

        answerControl.push({
            id:i+1,
            answered:false,
            choiceValue:{choice:null,correct:null}})

         
            Means.push(Questions[i].mean)


    }

    
    return [FinalData,answerControl]
}



export default TestMainFnc