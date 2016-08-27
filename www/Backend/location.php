<?php

require 'headers.php';
header('Content-type: text/html; charset=utf-8');
$postdata = file_get_contents("php://input");

		if (isset($postdata))
		{

				$regBy = json_decode($postdata);
        $locationList = array();

				 $sql = "select city_id,city_name,city_state from cities";

        $retval = mysql_query( $sql, $dbhandle );

        while($row = mysql_fetch_array($retval))
        {
          $locationList[] = $row;
        }

        if(! $retval )
        {
          die('Could not get data: ' . mysql_error());
        }
         echo json_encode($locationList);
		}
	 mysql_close($dbhandle);

?>
