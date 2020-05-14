function changeText() {

  current_text = document.getElementById("dynamic_text").innerHTML

  text_option_1 = "yeehaw"
  text_option_2 = "optical sciences phd candidate at the university of arizona"

  if (current_text.localeCompare(text_option_1)) {

    document.getElementById("dynamic_text").innerHTML = text_option_1

  } else if (current_text.localeCompare(text_option_2)) {

    document.getElementById("dynamic_text").innerHTML = text_option_2

  }

}
