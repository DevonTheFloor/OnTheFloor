<!doctype HTML>
<html>
 <head>
  <title> Suivi transite </title>
  <meta charset="utf-8"/>
       <meta name="viewport" content="width=device-width,initial=1.0"/>
</head>
	<body>
<?php
$fichier = fopen('suivi.txt','a+');

fputs($fichier,'date: '.$_POST['date'].' toilette: '.$_POST['toilette'].' bcaa: '.$_POST['bcaa']);//.\n;\n;
fputs($_fichier,"\n");
 /*$i = 0;
while($i < 32)
{
    fgets($fichier);
    $i++;
} */
fclose($fichier);
echo 'date du jour:  '.$_POST['date'].'<br>';
echo 'toilette:  '.$_POST['toilette'].'<br>';
echo 'BCAA:  '.$_POST['bcaa'].'<br>';
echo '<pre>';
			print_r ($_POST); 
			echo'</pre><br><br><br>';
include ('nav1.html');
?>
<a href="http://devonthefloor/raf/suivi.txt" target="_blank"> VOIR FICHIER </a>
	</body>
</html>
