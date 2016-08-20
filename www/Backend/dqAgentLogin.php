<?php

  require 'headers.php';
  header('Content-type: text/html; charset=utf-8');
  $postdata = file_get_contents("php://input");

if (isset($postdata))
{

		$r = json_decode($postdata);
		 $loginphno = $r->userNum;
		   $loginpw= $r->password;
		// $loginpw = base64_encode($loginpw);//converts password string to encoded format

      $sql = "select count(*) as agent from agentDetails where agentPhone='$loginphno' and agentPwd='$loginpw' ";
    //$sql = "select count(*) as patient from patient_registration where ph_no='9844992181' and password='cmtpcmFu'";
    $retval = mysql_query( $sql, $dbhandle );
    while($row = mysql_fetch_array($retval))
    {
       $count=$row['agent'];
      if($count ==1){
        // echo "agent";

        $agentDetails = array();
         $sql = "select agentId,agentFname,agentMname,agentLname,agentSex,agentPhone,agentEmail,agentAddress,agentCity,agentPic from  agentDetails where agentPhone='$loginphno'";
        $retval = mysql_query( $sql, $dbhandle );

        while($row = mysql_fetch_array($retval))
        {
          $agentDetails[] = $row;

        }
         echo json_encode($agentDetails);
      }

    }
    if(! $retval )
    {
      die('Could not get data: ' . mysql_error());
    }




}

  mysql_close($dbhandle);
?>
