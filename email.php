<?PHP
	$od  = "From: uzytkownik@kursphp.com \r\n";
    $od .= 'MIME-Version: 1.0'."\r\n";
    $od .= 'Content-type: text/html; charset=iso-8859-2'."\r\n";
    $adres = "dczarnotatrener@gmail.com";
    $topic=$_POST['clientMail'];
    $wiadomosc =$_POST['msgContent']
    // użycie funkcji mail
    mail($adres, $tytul, $wiadomosc, $od);
?>