const fs = require('fs');

fs.readFile('writefile', 'utf-8', (err,data) => {
	if(err) {
		throw err;
	} else {
		console.log(data);
	}
	
})

