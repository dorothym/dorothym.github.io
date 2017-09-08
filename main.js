var cv = document.createElement("canvas");
cv.setAttribute('id','hand');
var ctx = cv.getContext('2d');  
document.addEventListener("DOMContentLoaded", function(event) {     
    document.getElementById('hand-container').appendChild(cv);
});