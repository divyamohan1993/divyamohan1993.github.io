<?php

// To Add

/*

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "css";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	for($l=1 ; $l<=1000 ; $l++) { 
		$j = $l*2;
		$t = $j/10;
		echo "$t";
    $sql = "INSERT INTO `test1` (`time`) VALUES ($t);";
	
    // use exec() because no results are returned
    $conn->exec($sql);
    echo "New record created successfully";
    }
}
catch(PDOException $e)
    {
    echo $sql . "<br>" . $e->getMessage();
    }

$conn = null;

*/

//To Fetch


   $dbhost = 'localhost';
   $dbuser = 'root';
   $dbpass = '';
   
   $conn = mysql_connect($dbhost, $dbuser, $dbpass);
   
   if(! $conn )
   {
      die('Could not connect: ' . mysql_error());
   }
   
   $sql = 'SELECT letter_no, time FROM test1';
   mysql_select_db('css');
   $retval = mysql_query( $sql, $conn );
   
   if(! $retval )
   {
      die('Could not get data: ' . mysql_error());
   }
   
   while($row = mysql_fetch_array($retval, MYSQL_ASSOC))
   {
      echo ".letter-{$row['letter_no']}	  { transition-delay: {$row['time']}s; } <br>";
   }
   
   echo "Fetched data successfully\n";
   
   mysql_close($conn);
 
 
?>

