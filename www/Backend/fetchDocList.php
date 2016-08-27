<?php

require 'headers.php';
header('Content-type: text/html; charset=utf-8');
$postdata = file_get_contents("php://input");

		if (isset($postdata))
		{

				$regBy = json_decode($postdata);
        $doctorDetails = array();

				 $sql = "select doctorfname,doctormname,doctorlname,doctorDegrees,doctorPhone,d.audioDemo,d.videoDemo,d.chatDemo,d.prescriptionDemo,d.inviteReviewDemo,d.paymentDemo from doctorDetails,demonstration as d where doctorDetails.doctorPhone = d.docPhone and d.regBy='$regBy' and d.audioDemo=3 and d.videoDemo=3 and d.chatDemo=3 and d.prescriptionDemo=3 and d.inviteReviewDemo=3 and d.paymentDemo=3";

        $retval = mysql_query( $sql, $dbhandle );

        while($row = mysql_fetch_array($retval))
        {
          $doctorDetails[] = $row;
        }

        if(! $retval )
        {
          die('Could not get data: ' . mysql_error());
        }
         echo json_encode($doctorDetails);
		}
	 mysql_close($dbhandle);

?>
