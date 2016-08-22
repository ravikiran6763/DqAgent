<?php

	require 'headers.php';
	header('Content-type: text/html; charset=utf-8');
	echo $postdata = file_get_contents("php://input");



	  // $apikey = "sqhqzdnbnkowgseg7bcgmy5mm5jri0zknfpmgfeojnxmi2lsf3mawqvhasga9wij";// API KEY OF VSEE
    // $secretkey = "iwgcrs5qdfbeinuak7rkpvfev5u9a61eoegb2nrvny610zrobc0we9u8hfg8nlre"; //SECRET KEY OF VSEE
    //
    //     $apiclientname = "greet"; //API CLIENT NAME PROVIDED BY VSEE
    //     //CURL REQUEST VSEE API
    //     $ch = curl_init();
    //      if(!$ch) die("curl error");
    //
		// 		curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
		// 		curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
		// 		curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
		// 		curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
		// 		curl_setopt($ch, CURLOPT_VERBOSE, TRUE);
		// 		curl_setopt($ch, CURLOPT_POST, 1);

	if (isset($postdata))
	{

		$doctorDetails = json_decode($postdata);
		$doctorFname = $doctorDetails->fname;
		$doctorMname= $doctorDetails->mname;
		$doctorLname = $doctorDetails->lname;
		$doctorEmail= $doctorDetails->email;
		$doctorPhone = $doctorDetails->mobile;

    $doctorDegrees = $doctorDetails->degrees;
		$doctorSince= $doctorDetails->since;
		$doctorAge = $doctorDetails->age;
		$doctorSex= $doctorDetails->sex;
		$doctorCountry = $doctorDetails->country;
    $doctorCity = $doctorDetails->city;

    $doctorAddress1 = $doctorDetails->address1;
    $doctorAddress2 = $doctorDetails->address2;
    $doctorPin = $doctorDetails->pin;
    $doctorLanguage1 = $doctorDetails->language1;
    $doctorLanguage2 = $doctorDetails->language2;
    $doctorBankName = $doctorDetails->bankName;
    $doctorAccNum = $doctorDetails->accNum;

    $doctorIfsc = $doctorDetails->ifsc;
    $doctorFee = $doctorDetails->fee;
    $doctorSpeciality = $doctorDetails->speciality;
    $doctorMciReg = $doctorDetails->mciReg;
    $doctorMciRegNum=$doctorDetails->mciNum;
		$registerdBy=$doctorDetails->regBy;

		$docImg1=$doctorDetails->image1;
		$docImg2=$doctorDetails->image2;
		$docImg3=$doctorDetails->image3;



		$letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
		// $specialChar="!@#$%&*()_+=?";
		$numbers = rand(10000, 99999);
		$prefix = "DQ";
		$sufix = $letters[rand(0, 51)];
		// $middle=$specialChar[rand(0,12)];
		$docPwd = $prefix. $middle . $numbers . $sufix ;

			$docPwd = base64_encode($docPwd);

			// echo $retval;

		 $sql = "INSERT INTO doctorDetails (doctorFname,doctorMname,doctorLname,doctorEmail,doctorPhone,doctorPwd,doctorDegrees,practicingSince,doctorAge,doctorSex,doctorCountry,doctorCity,doctorAddress1,doctorAddress2,doctorPincode,doctorLanguage1,doctorLanguage2,doctorBankName,doctorAccountNum,doctorBankIfsc,doctorFee,doctorSpecialityId,doctorMedFlag,doctorMedNum,registeredBy) VALUES ('$doctorFname','$doctorMname','$doctorLname','$doctorEmail','$doctorPhone','$docPwd','$doctorDegrees','$doctorSince','$doctorAge','$doctorSex','$doctorCountry','$doctorCity','$doctorAddress1','$doctorAddress2','$doctorPin','$doctorLanguage1','$doctorLanguage2','$doctorBankName','$doctorAccNum','$doctorIfsc','$doctorFee','$doctorSpeciality','$doctorMciReg','$doctorMciRegNum','$registerdBy')";
			$retval = mysql_query( $sql, $dbhandle );
			if(mysql_error())
			// if(!$retval)
			{
				// die('Could not enter data: ' . mysql_error());

				 echo "ERROR";
			}
			else
			{

				echo "Query Submitted";

					$sql1 = "INSERT INTO doctorImages (docPhone,docImage1,docImage2,docImage3) values ('$doctorPhone','$docImg1','$docImg2','$docImg3')";
					$retval1 = mysql_query( $sql1, $dbhandle );

				 //PASSWORD FOR DOCTOR TO LOGIN INTO VSEE
                //                 $password = "DQ_doctor";
                //                 //CREATE USERS IN VSEE FROM THE BELOW URL
                //                $USER_CREATE_URL = "https://api.vsee.com/user/create?apikey=" . $apikey;
                //
                // //SEND JSON DATA OF USERS TO VSEE API
                // $USER_JSON = '{"secretkey":'.$secretkey.',
                //   "username":'.$pateientPhone.',
                //   "password":'.$password.',
                //   "fn": '.$pateientFname.',
                //  "ln": '.$pateientLname.'}';
                //
                //    curl_setopt($ch, CURLOPT_URL, $USER_CREATE_URL);
                //    curl_setopt($ch, CURLOPT_POSTFIELDS, $USER_JSON);
                //    $result = curl_exec($ch);
                //
                // echo $result;
                // $http_status = curl_getinfo($ch, CURLINFO_HTTP_CODE);
                // echo $http_status;
		            }
	}
	mysql_close($dbhandle);

?>
