<?php header('Content-Type: application/xml'); 
$xml = new SimpleXMLElement('<persons/>'); 
 $person = $xml->addChild('person'); 
 $person->addChild('id', 1); 
 $person->addChild('name', 'Arifah Nur Basyiroh Machi'); 
 $person->addChild('age', 20); 
 $address = $person->addChild('address'); 
 $address->addChild('street', 'Jalan Ikan Gurita'); 
 $address->addChild('city', 'Banyuwangi'); 
 $hobbies = $person->addChild('hobbies'); 
 $hobbies->addChild('hobby', 'membaca'); 
 $hobbies->addChild('hobby', 'melukis'); 
 echo $xml->asXML(); ?>