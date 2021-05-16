
jQuery(document).ready(function(){

"use strict";
$('#slider-carousel).Caroufredsel({
responsive:true,
width:"100%",
circular:true,
scroll:{
items:1,
duration:500,
pauseOnHover:true
},
auto:true,
items:{
visible:{ min:1,max1},
height="variable",
},
pagination:{container:".sliderpager",
pageAnchorBuilder:false
}



});



});
