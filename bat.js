var fs = require("fs");
var child_process = require('child_process');

function saveBatList(){
	fs.readdir('./public/bat', function (err, files) {
		process.env.batList = files;
		console.log("batList:", process.env.batList)
	});
}

function run(batName, sucFun, erFun) {
	child_process.execFile(batName, null, { cwd: 'E:\\' }, function (error, stdout, stderr) {
		if (error !== null) {
			erFun();
			console.log("exec error" + error)
		} else {
			sucFun();
		}
	})
}



module.exports = {
	saveBatList,
	run
};