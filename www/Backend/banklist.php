<?php

require 'headers.php';
header('Content-type: text/html; charset=utf-8');
$postdata = file_get_contents("php://input");

		if (isset($postdata))
		{

				$regBy = json_decode($postdata);
        $bankList = array();

				 $sql = "select id,bankName from bank order by bankName";

        $retval = mysql_query( $sql, $dbhandle );

        while($row = mysql_fetch_array($retval))
        {
          $bankList[] = $row;
        }

        if(! $retval )
        {
          die('Could not get data: ' . mysql_error());
        }
         echo json_encode($bankList);
		}
	 mysql_close($dbhandle);

?>
