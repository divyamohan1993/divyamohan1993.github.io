<?php

//$json = file_get_contents('//quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=40&callback=');

// Get Data
	function get_data($url) {
		$ch = curl_init();
		$timeout = 5;
		curl_setopt($ch, CURLOPT_URL, $url);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
		curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, $timeout);
		$data = curl_exec($ch);
		curl_close($ch);
		return $data;
	}
	$json = get_data('//quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=30&callback=');

// Decode JSON
	$quote = json_decode($json, true);

// Set JSON Data
	$static_author = strip_tags($quote[0]['title'],"<b>");
	$static_content = strip_tags($quote[0]['content'],"<b>");
	$static_ID = strip_tags($quote[0]['ID'],"<b>");
// Set JSON Data more than once

// Processing
	/*
//echo $quote[0]['title'];
	for($i=0; $i<10; $i++) {
		
		$author = strip_tags($quote[$i]['title'],"<b>");
		$content = strip_tags($quote[$i]['content'],"<b>");
		$ID = strip_tags($quote[$i]['ID'],"<b>");
		echo "</br> $ID $content  - $author </br>";
		//echo "</br>".$i."</br>";
	}
	*/

// Database Handling

/*

// To Add

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "quotes";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	
	for($i=0; $i<29; $i++) {
		
		$author = strip_tags($quote[$i]['title'],"<b>");
		$content = strip_tags($quote[$i]['content'],"<b>");
		$ID = strip_tags($quote[$i]['ID'],"<b>");
		$sql = "INSERT INTO `quote` (`ID`, `content`, `author`) VALUES ('$ID', '$content', '$author');";
		echo "</br>$i --> $ID $content  - $author - ";
		$conn->exec($sql);
		echo "New record created successfully </br>";
		//echo "</br>".$i."</br>";
	}
	
	
    // use exec() because no results are returned
    
    
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
   
   $sql = 'SELECT id, content, author FROM quote WHERE CHAR_LENGTH(content)<130';
//   $sql = 'SELECT id, content as content1, author FROM quote WHERE CHAR_LENGTH(content)>500 AND id>1400';
   mysql_select_db('quotes');
   $retval = mysql_query( $sql, $conn );
   
	if(! $retval ) {
		die('Could not get data: ' . mysql_error());
	}
   
   
/*
	for($k=0; $k<474; $k++) {
		echo "Quotation[$k] = <br>";
	}
*/
	
	while($row = mysql_fetch_array($retval, MYSQL_ASSOC))
		{
			// echo "{$row['content']} &#x2015;{$row['author']} <br><br><br>";
						
			$cont = mysql_real_escape_string(htmlspecialchars($row['content'], ENT_QUOTES));
			$authr = mysql_real_escape_string(htmlspecialchars($row['author'], ENT_QUOTES));
			echo "\"$cont 12345678912 $authr\",";

			
	  
/*
	  // Make it as JSON
      echo "{\"id\":\"{$row['id']}\",\"content\":\"{$row['content']}\",\"author\":\"{$row['author']}\"}";
*/	  

   }
   
   echo "<b><br>Fetched data successfully\n";
   
   mysql_close($conn);

   
 


//  echo "<html> <head> <meta http-equiv='refresh' content='2'> </head> </html>";

?>