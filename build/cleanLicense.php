<?php
	$input = file_get_contents('php://stdin');
	
	echo str_replace(
		array(
			file_get_contents(__DIR__.'/licensesTexts/licenseOriginal.txt'),
			file_get_contents(__DIR__.'/licensesTexts/editedOriginalLicense.txt'),
			file_get_contents(__DIR__.'/licensesTexts/anotherOriginal.txt'),
			file_get_contents(__DIR__.'/licensesTexts/anotherEditedOriginal.txt')
		),
		array('', '', '', ''),
		$input
	);
?>
