<html>
<head>
	<title>NCH Software - Update Registry Key.</title>
	
	<style>
		.dead-center-no-content {
			background: black;
			color: white;
			border-radius: 1em;
			padding: 1em;
			position: absolute;
			top: 50%;
			left: 50%;
			margin-right: -50%;
			transform: translate(-50%, -50%)
		}	
		.dead-center-content {
			background: transparent;
			color: red;
			text-shadow: 2px;
			text-align: center;
			text-size: 24px;
			border-radius: 1em;
			shadow: 3px;
			padding: 1em;
			position: absolute;
			top: 50%;
			left: 50%;
			margin-right: -50%;
			transform: translate(-50%, -50%)
		}	
		</style>
</head>

<body>
	<section class="dead-center-content">
<?php

$time = time();

$value = "Windows Registry Editor Version 5.00

[HKEY_CURRENT_USER\SOFTWARE\NCH Software\VideoPad\Registration]
\"RD\"=\"$time\"

[HKEY_CURRENT_USER\SOFTWARE\NCH Software\WavePad\Registration]
\"RD\"=\"$time\"

[HKEY_CURRENT_USER\SOFTWARE\NCH Software\Debut\Registration]
\"RD\"=\"$time\"";

echo "\t\t Registry File Updated.<br>";

//FILE BLOCK STARTS
$file = fopen("All in 1.reg","w");
echo fwrite($file, $value);
fclose($file);
// FILE BLOCK END

echo " bytes written.<br>";
echo "\n\t\t Last modified: ".date("F d Y H:i:s.",filemtime("All in 1.reg")).' or '.filemtime("All in 1.reg");
?>

	</section>
</body>
</html>