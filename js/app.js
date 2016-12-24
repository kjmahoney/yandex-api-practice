// trnsl.1.1.20161224T005353Z.9e104eecc7c8560f.938a2af78ac0f6868c443d729e48ee590e87d897
//
// https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20161224T005353Z.9e104eecc7c8560f.938a2af78ac0f6868c443d729e48ee590e87d897&text=hello&lang=en-ru
//
// 　chinese to english
// https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20161224T005353Z.9e104eecc7c8560f.938a2af78ac0f6868c443d729e48ee590e87d897&text=开&lang=zh-en



$("#button").on("click", () => {

  const originalWord =$("#originalWordBox").val()

  const APIUrl = "https://translate.yandex.net/api/v1.5/tr.json/translate?key=trns"+
                 "l.1.1.20161224T005353Z.9e104eecc7c8560f.938a2af78ac0f6868c443d729e48ee590e87d897&text="
                 +originalWord+
                 "&lang=en-zh"
                console.log(APIUrl)

  // Make sure to add your API key to the URL!
  $.ajax({
    url: APIUrl,
    type: "get",
    dataType: "json"
    // $.ajax takes an object as an argument with at least three key-value pairs...
    // (1) The URL endpoint for the JSON object.
    // (2) Type of HTTP request.
    // (3) Datatype. Usually JSON.
  }).done((response) => {
    console.log(response.text)
    $("#translationWordBox").text(response.text)


  }).fail(() => {
    console.log("Ajax request fails!")
  }).always(() => {
    console.log("AJAX working")
  })
})
