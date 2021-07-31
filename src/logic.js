

var axios = require('axios');
var qs = require('qs');
var data = qs.stringify({
  'entry.923575230': 'KidBit',
  'entry.959771919': 'Bangalore',
  'entry.1470857061': '1234567890',
  'entry.766642417': '7 - 8',
  'entry.210369612': 'Friends & Families' 
});
var config = {
  method: 'post',
  url: 'https://docs.google.com/forms/u/0/d/e/1FAIpQLScWUyeUYn_LuegxlH5SkFfGwXnZ4fW8u2cbFV_Kr4FRS3tTmw/formResponse',
  headers: { 
    'Content-Type': 'application/x-www-form-urlencoded', 
    'Cookie': 'NID=220=jVM5MmgJ1PiH0IqdKll5dpD79Hx5wZUDe7kpTulC6Wg3aDDSYNlmRF-0GALjiJYuhb0kE4w97huXc-79KONIaDVfE2zOsjd23Ezc-BPMYkxIAfl0H_T8Ft_NxjMtiNfXY5PJGH94jGdwshEiJ4AvpTAJrT1yyFgQ9h80oIFkgBA'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});