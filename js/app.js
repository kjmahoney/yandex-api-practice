// Switch the values of the From and To languages
$("#switchButton").click(()=>{

  //change value of the select boxes
  let switchSelectFrom = $("#conversionBoxFrom").val()
  let switchSelectTo = $("#conversionBoxTo").val()
  $("#conversionBoxFrom").val(switchSelectTo)
  $("#conversionBoxTo").val(switchSelectFrom)

  //change value of the text boxes
  let switchBoxTo = $("#translationWordBox").val()
  let switchBoxFrom = $("#originalWordBox").val()
  $("#originalWordBox").val(switchBoxTo)
  $("#translationWordBox").val(switchBoxFrom)
})

$("#originalWordBox, select").change(() => {

  //select language to translate from
  let fromLang = $("#conversionBoxFrom").val()

  //select langauge to translate to
  let toLang = $("#conversionBoxTo").val()

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
