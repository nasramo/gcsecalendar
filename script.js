//work on smoother sidebar (maybe css transitions) and greying when active - maybe z-index w position: fixed/absolute/relative???
//work on checkbox showing/hiding different exams
/*finish off css colour assignment for boxes, test on 'mobile' using dev tools for iphone se 1st gen/5, fix the sidebar*/

$(document).ready(function(){
  $('[data-toggle="popover"]').popover({
      container: 'body'
  });
}); 
$('.popover-dismiss').popover({
  trigger: 'focus'
});

/*
let checkbio = document.querySelector('input[value="biology"]');
let exbio = document.getElementsByName('bio');
exbio.style.visibility = 'hidden';

checkbio.addEventListener('change', () => {
  if(checkbio.checked) {
    exbio.style.visibility = 'visible';

  } else {
    exbio.style.visibility = 'hidden';
  }
});*/

