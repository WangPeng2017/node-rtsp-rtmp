var fs = require("fs");
var child_process = require('child_process');

function saveBatList(){
	fs.readdir('./public/bat', function (err, files) {
		process.env.batList = files;
		console.log("batList:", process.env.batList)
	});
}

function run(batName, sucFun, erFun) {
	if(batName.indexOf(".bat") == -1){
		batName += ".bat"
	}
	child_process.execFile(batName, null, { cwd: 'C:\\' }, function (error, stdout, stderr) {
		if (error !== null) {
			erFun && erFun();
			console.log("exec error" + error)
		} else {
			sucFun && sucFun();
		}
	})
}



module.exports = {
	saveBatList,
	run
};