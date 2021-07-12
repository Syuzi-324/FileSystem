const fs = require('fs');

let text = `Name_Simonyan Syuzanna,\nEmail_syuzie.ss@gmail.com,\nCity_Yerevan`;

fs.writeFile('writefile', text, 'utf8', (err) => {
	if(err){
	throw err;
	} else {
		console.log('The file is saved');
	  }
	
	
	
});

