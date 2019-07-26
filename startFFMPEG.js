var process = require('child_process');

function start() {
    var shell = 'ffmpeg -rtsp_transport tcp -i "rtsp://admin:tyzx2013@172.19.9.99/" -f flv -r 25 -s 640*360 -b 10M -an "rtmp:localhost:1935/live/test"';
    process.exec(shell,function (error, stdout, stderr) {
        if (error !== null) {
          console.log('exec error: ' + error);
        }
    });
}

module.exports = start;