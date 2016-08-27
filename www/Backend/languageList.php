<?php

require 'headers.php';
header('Content-type: text/html; charset=utf-8');
$postdata = file_get_contents("php://input");

		if (isset($postdata))
		{

				$regBy = json_decode($postdata);
        $languageList = array();

				 $sql = "select id,language from indianLanguages order by language";

        $retval = mysql_query( $sql, $dbhandle );

        while($row = mysql_fetch_array($retval))
        {
          $languageList[] = $row;
        }

        if(! $retval )
        {
          die('Could not get data: ' . mysql_error());
        }
         echo json_encode($languageList);
		}
	 mysql_close($dbhandle);

?>
