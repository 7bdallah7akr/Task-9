var btn = document.querySelectorAll(".button")

btn.forEach(function(item){
    item.onclick = function(){
 alert  ("تم نسخ النص")
    }
})












var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})