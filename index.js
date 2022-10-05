document.addEventListener("DOMContentLoaded", function() {
    const toReplace = document.getElementById('text')
    toReplace.innerHTML = 'This is really cool!'
    console.log("The DOM has loaded")
  })
  console.log('The DOM has not loaded first')