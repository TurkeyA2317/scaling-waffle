var dtOld = Date.now();
var dtNew = Date.now();
let saveTimer = 0;

var app = new Vue({
    el: "#app",
    created: onCreate
});