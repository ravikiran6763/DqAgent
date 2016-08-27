/*globals angular */

'use strict';

/**
 * Contains the Constants, which are available across the app.
 * @author Ravikiran
 */
AgentApp.constant('BASE_URL', {

        'url' : 'http://ec2-54-187-148-143.us-west-2.compute.amazonaws.com/'
    })
.constant('API', {
          /*COMMON APIS*/

        // 'patientRegistration':'DQ/patientegistration.php',

        'agentLogin': 'dqagent/dqAgentLogin.php',

        'logout': 'logout',
        'doctorRegistration': 'dqagent/doctorRegistration.php',

        'ForgotPassword': 'common/forgotPassword.php',
        'getMedicalSpecialist' : 'patient/listallspecialities.php',
        'fetchDocList' : 'dqagent/fetchDocList.php',
        'updateDoctor' : 'dqagent/updateDoctor.php',
        'banklist' : 'dqagent/banklist.php',
        'languageList' : 'dqagent/languageList.php',
        'location' : 'dqagent/location.php'








    })
.constant('AUTH_EVENTS', {
      notAuthenticated: 'auth-not-authenticated',
      notAuthorized: 'auth-not-authorized'
      })

.constant('USER_ROLES', {
      admin: 'admin_role',
      public: 'public_role'
      });
