// trnsl.1.1.20161224T005353Z.9e104eecc7c8560f.938a2af78ac0f6868c443d729e48ee590e87d897
//
// https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20161224T005353Z.9e104eecc7c8560f.938a2af78ac0f6868c443d729e48ee590e87d897&text=hello&lang=en-ru
//
// 　chinese to english
// https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20161224T005353Z.9e104eecc7c8560f.938a2af78ac0f6868c443d729e48ee590e87d897&text=开&lang=zh-en

$("button").on("click", () => {
  // Make sure to add your API key to the URL!
  var url = "https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20161224T005353Z.9e104eecc7c8560f.938a2af78ac0f6868c443d729e48ee590e87d897&text=friend&lang=en-zh"
  $.ajax({
    url: url,
    type: "get",
    dataType: "json"
    // $.ajax takes an object as an argument with at least three key-value pairs...
    // (1) The URL endpoint for the JSON object.
    // (2) Type of HTTP request.
    // (3) Datatype. Usually JSON.
  }).done((response) => {
    console.log(console.log(response.text))
  }).fail(() => {
    console.log("Ajax request fails!")
  }).always(() => {
    console.log("This always happens regardless of successful ajax request or not.")
  })
})
