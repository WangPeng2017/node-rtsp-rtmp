var process = require('child_process');

function start() {
    var shell = 'ffmpeg -i "rtsp://admin:tyzx2013@61.233.3.221/" -f flv -r 25 -s 640*360 -b 10M -an "rtmp:localhost:1935/live/test"';
    // console.log(shell)
    process.exec(shell,function (error, stdout, stderr) {
        if (error !== null) {
          console.log('exec error: ' + error);
        }
    });
}

module.exports = start;