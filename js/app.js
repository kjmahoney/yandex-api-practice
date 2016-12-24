// trnsl.1.1.20161224T005353Z.9e104eecc7c8560f.938a2af78ac0f6868c443d729e48ee590e87d897
//
// https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20161224T005353Z.9e104eecc7c8560f.938a2af78ac0f6868c443d729e48ee590e87d897&text=hello&lang=en-ru
//
// 　chinese to english
// https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20161224T005353Z.9e104eecc7c8560f.938a2af78ac0f6868c443d729e48ee590e87d897&text=开&lang=zh-en



$("#button").on("click", () => {


  if ($("select").val() == "English"){
    languageConversion = "&lang=en-zh"
  }else{
    languageConversion = "&lang=zh-en"
  }

  console.log($("select").val())
  const originalWord =$("#originalWordBox").val()



  const APIUrl = "https://translate.yandex.net/api/v1.5/tr.json/translate?key=trns"+
                 "l.1.1.20161224T005353Z.9e104eecc7c8560f.938a2af78ac0f6868c443d729e48ee590e87d897&text="
                 +originalWord+
                 languageConversion
                console.log(APIUrl)

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
