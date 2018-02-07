<!DOCTYPE html>
<html>
<body>

<h2>1 Million Flowers for you my lovely Natusik</h2>

<p id="demo"></p>

<script>
var text = "";
var i;
for (i = 1; i < 1000001; i++) {
    text += "Rose " + i + " ";
}
document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
