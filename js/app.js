// https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20161224T005353Z.9e104eecc7c8560f.938a2af78ac0f6868c443d729e48ee590e87d897&text=开&lang=zh-en


$("#originalWordBox, select").change(() => {

let fromLang = $("#conversionBoxFrom").val()
let toLang = $("#conversionBoxTo").val()
//look for English to Chinese and vice versa
  // if ($("#conversionBox").val() == "English"){
  //   languageConversion = "en-zh"
  // }else{
  //   languageConversion = "zh-en"
  // }



//and a toLang


//Find word to be Translated
  const originalWord =$("#originalWordBox").val()

//Define URL to be called to Yandex
  const APIUrl = "https://translate.yandex.net/api/v1.5/tr.json/translate?key=trns"+
                 "l.1.1.20161224T005353Z.9e104eecc7c8560f.938a2af78ac0f6868c443d729e48ee590e87d897&text="
                 +originalWord
                 +"&lang="
                 +fromLang
                 +"-"
                 +toLang
                 console.log(APIUrl)
//Make call to Yandex
  $.ajax({
    url: APIUrl,
    type: "get",
    dataType: "json"
  }).done((response) => {
    $("#translationWordBox").val(response.text)
  }).fail(() => {
    console.log("Ajax request failed!")
  }).always(() => {
    console.log("Ajax working")
  })
})
