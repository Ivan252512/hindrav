const button1 = document.getElementById('nbut');
const button2 = document.getElementById('pbut');

button1.onclick = function () {
  document.getElementById('slider').scrollLeft += 190;
};

button2.onclick = function () {
    document.getElementById('slider').scrollLeft -= 190;
};