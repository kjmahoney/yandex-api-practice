//MAKE THE API CALL
//any time a word is entered in the input box, trigger a translation
$("#originalWordBox, select").change(() => {

  //create variable for from language
  let fromLang = $("#conversionBoxFrom").val()

  //create variable for to language
  let toLang = $("#conversionBoxTo").val()

  //create variable for word to be translated
  const originalWord =$("#originalWordBox").val()

  //Define URL to be called to Yandex
  const APIUrl = "https://translate.yandex.net/api/v1.5/tr.json/translate?key=trns"+
  "l.1.1.20161224T005353Z.9e104eecc7c8560f.938a2af78ac0f6868c443d729e48ee590e87d897&text="
  +originalWord
  +"&lang="
  +fromLang
  +"-"
  +toLang

  //Make Ajax call to Yandex API
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

//SWITCH BUTTON
// Button switches the values of the From and To languages
$("#switchButton").click(()=>{

  //change value of the 'select' boxes when button cliked
  let switchSelectFrom = $("#conversionBoxFrom").val()
  let switchSelectTo = $("#conversionBoxTo").val()
  $("#conversionBoxFrom").val(switchSelectTo)
  $("#conversionBoxTo").val(switchSelectFrom)

  //change value of the 'text' boxes when button clicked
  let switchBoxTo = $("#translationWordBox").val()
  let switchBoxFrom = $("#originalWordBox").val()
  $("#originalWordBox").val(switchBoxTo)
  $("#translationWordBox").val(switchBoxFrom)
})
