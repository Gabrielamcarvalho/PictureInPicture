"use strict";

var videoElement = document.getElementById('video');
var button = document.getElementById('button'); // prompt to select media strem, pass to video element, then play

function selectMediaStream() {
  var mediaStream;
  return regeneratorRuntime.async(function selectMediaStream$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(navigator.mediaDevices.getDisplayMedia());

        case 3:
          mediaStream = _context.sent;
          videoElement.srcObject = mediaStream;

          videoElement.onloadedmetadata = function () {
            videoElement.play();
          };

          _context.next = 11;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          //catch error
          console.log('Error', _context.t0);

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 8]]);
}

button.addEventListener('click', function _callee() {
  return regeneratorRuntime.async(function _callee$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          //Disable Button
          button.disabled = true; //start picture in picture

          _context2.next = 3;
          return regeneratorRuntime.awrap(videoElement.requestPictureInPicture());

        case 3:
          //reset button
          button.disabled = false;

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
}); //On Load

selectMediaStream();