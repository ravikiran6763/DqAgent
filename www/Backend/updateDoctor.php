<?php

require 'headers.php';
header('Content-type: text/html; charset=utf-8');
$postdata = file_get_contents("php://input");

		if (isset($postdata))
		{
			$updaData = json_decode($postdata);
	 		$video = $updaData->video;
			$audio = $updaData->audio;
			$chat = $updaData->chat;
			$prescription = $updaData->prescription;
			$account = $updaData->account;
			$doctor = $updaData->doctor;

				$sql = "update demonstration set audioDemo='$audio',videoDemo='$video',chatDemo='$chat',prescriptionDemo='$prescription',paymentDemo='$account' where docPhone ='$doctor' ";
        $retval = mysql_query( $sql, $dbhandle );

        while($row = mysql_fetch_array($retval))
        {
          $doctorDetails = $row;
        }

        if(! $retval )
        {
          die('Could not get data: ' . mysql_error());
        }
         echo json_encode($doctorDetails);
		}
	 mysql_close($dbhandle);

?>
