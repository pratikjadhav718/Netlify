function thanslate(){
        
    let input = document.getElementById('input1').value;

    let target_lan = document.getElementById('target_lan').value;
    
    
    requestData(input,target_lan)


}

async function requestData(input,target_lan){

    let res = await fetch("https://libretranslate.de/translate", {
        method: "POST",
        body: JSON.stringify({
            q: input,
            source: "en",
            target: target_lan,
        }),
        headers: { "Content-Type": "application/json" }
    });
    
    let tranlated = await res.json();
    tranlated= tranlated.translatedText;
    
    showOutput(tranlated);


}

function showOutput(op){
    if(op == undefined){
        let opShow = document.getElementById("input2").value = "";    
    }else{
        let opShow = document.getElementById("input2").value = op;
    }
}

async function getAllLanguages(){

    let res = await fetch("https://libretranslate.de/translate")

    await res.json();
}