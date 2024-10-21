<?php header('Content-Type: application/xml'); 
$xml = new SimpleXMLElement('<books/>'); 
 $book = $xml->addChild('book'); 
 $book->addChild('id', 1); 
 $book->addChild('judul', 'Laskar Pelangi'); 
 $book->addChild('pengarang', 'Andrea Hirata'); 
 $book->addChild('penerbit', 'Benteng Pustaka'); 
 $book->addChild('tahun_terbit', 2005); 
 echo $xml->asXML(); ?>