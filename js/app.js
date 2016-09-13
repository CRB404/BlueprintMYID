var variable = firebase.database().ref('inputs');
var lossVal = firebase.database().ref();

// Graph Array

var graphs = [
  'Y','X','W','V','U','T','S','R','Q','P','O','N','M','L','K','J',
  'I','H','G','F','E','D','C','B','A',

  'z','y','x','w','v','u','t','s','r','q','p','o','n','m','l','k',
  'j','i','h','g','f','e','d','c','b','a',' '
]

// Bounty and Graph Function
// _____________________________________________________________________________

// OnLoad Update Bounty and Graph

// lossVal.once("value")
//   .then(function(snapshot) {
//     var name = snapshot.child('penalty').val(); // {loss value}
//
//     var graphsDisplay = name - 1;
//
//     var circles = graphs[graphsDisplay]
//
//     document.getElementById("lossValue").innerHTML=circles;
//   });

// Auto-Update Bounty and Graph  *double commented*

// lossVal.on('child_changed', function(data) {
//   // var lossName = data.child("/val").val();
//   console.log("New Value " + data.val());
//
//   // working with zero index so subtract one
//   var graphsDisplay = data.val() - 1;
//
//   var circles = graphs[graphsDisplay]
//
//   document.getElementById("lossValue").innerHTML=circles;
//
//   // lossName.onChange = function() {
//   //   document.getElementById("lossValue").innerHTML=lossName;
//   //   console.log(lossName);
//   // }
// });


// function writeUp() {
//   lossVal.set( + 1)
//     .then(function() {
//       console.log('Synchronization succeeded');
//     })
//     .catch(function(error) {
//       console.log('Synchronization failed');
//     });
// }
//


// Search Function
// _____________________________________________________________________________

// function writeUserData() {
//   variable.push({ val:document.getElementById("search").value })
//     .then(function() {
//       console.log('Synchronization succeeded');
//     })
//     .catch(function(error) {
//       console.log('Synchronization failed');
//     });
// }


// Search Function
// _____________________________________________________________________________


var particle = new Particle();

particle.login({username: 'weftech@gmail.com', password: 'W3Ftech@spark'});



function setStrings() {
  document.getElementById("search1").value = "Eric Chan"
  document.getElementById("search2").value = "echan@ideo.com"
  document.getElementById("search3").value = "7202516853"
  document.getElementById("search4").value = "SSN hash"
  document.getElementById("check1").checked = false;
  document.getElementById("check2").checked = false;
  document.getElementById("check3").checked = false;
  document.getElementById("check4").checked = false;
}

function runOutput() {
  if (document.getElementById("search1").value == "Eric Chan" && document.getElementById("search2").value == "echan@ideo.com" && document.getElementById("search3").value == "7202516853" && document.getElementById("search4").value == "SSN hash") {
    console.log('success');
    particle.callFunction({ deviceId: '430026001447343432313031', name: 'led', argument: 'success', auth: '7dfb755486e5e116bf9a73c6764959c1180c64cf' });

    document.getElementById("check1").checked = true;
    document.getElementById("check2").checked = true;
    document.getElementById("check3").checked = true;
    document.getElementById("check4").checked = true;
  }
  // one error
  else if (document.getElementById("search1").value != "Eric Chan" && document.getElementById("search2").value == "echan@ideo.com" && document.getElementById("search3").value == "7202516853" && document.getElementById("search4").value == "SSN hash") {
    console.log('error on 1');
    particle.callFunction({ deviceId: '430026001447343432313031', name: 'led', argument: 'error on 1', auth: '7dfb755486e5e116bf9a73c6764959c1180c64cf' });

    document.getElementById("check1").checked = false;
    document.getElementById("check2").checked = true;
    document.getElementById("check3").checked = true;
    document.getElementById("check4").checked = true;
  }
  else if (document.getElementById("search1").value == "Eric Chan" && document.getElementById("search2").value != "echan@ideo.com" && document.getElementById("search3").value == "7202516853" && document.getElementById("search4").value == "SSN hash") {
    console.log('error on 2');
    particle.callFunction({ deviceId: '430026001447343432313031', name: 'led', argument: 'error on 2', auth: '7dfb755486e5e116bf9a73c6764959c1180c64cf' });

    document.getElementById("check1").checked = true;
    document.getElementById("check2").checked = false;
    document.getElementById("check3").checked = true;
    document.getElementById("check4").checked = true;
  }
  else if (document.getElementById("search1").value == "Eric Chan" && document.getElementById("search2").value == "echan@ideo.com" && document.getElementById("search3").value != "7202516853" && document.getElementById("search4").value == "SSN hash") {
    console.log('error on 3');
    particle.callFunction({ deviceId: '430026001447343432313031', name: 'led', argument: 'error on 3', auth: '7dfb755486e5e116bf9a73c6764959c1180c64cf' });

    document.getElementById("check1").checked = true;
    document.getElementById("check2").checked = true;
    document.getElementById("check3").checked = false;
    document.getElementById("check4").checked = true;
  }
  else if (document.getElementById("search1").value == "Eric Chan" && document.getElementById("search2").value == "echan@ideo.com" && document.getElementById("search3").value == "7202516853" && document.getElementById("search4").value != "SSN hash") {
    console.log('error on 4');
    particle.callFunction({ deviceId: '430026001447343432313031', name: 'led', argument: 'error on 4', auth: '7dfb755486e5e116bf9a73c6764959c1180c64cf' });

    document.getElementById("check1").checked = true;
    document.getElementById("check2").checked = true;
    document.getElementById("check3").checked = true;
    document.getElementById("check4").checked = false;
  }
  // two errors
  else if (document.getElementById("search1").value != "Eric Chan" && document.getElementById("search2").value != "echan@ideo.com" && document.getElementById("search3").value == "7202516853" && document.getElementById("search4").value == "SSN hash") {
    console.log('error on 1 and 2');
    particle.callFunction({ deviceId: '430026001447343432313031', name: 'led', argument: 'error on 1 and 2', auth: '7dfb755486e5e116bf9a73c6764959c1180c64cf' });

    document.getElementById("check1").checked = false;
    document.getElementById("check2").checked = false;
    document.getElementById("check3").checked = true;
    document.getElementById("check4").checked = true;
  }
  else if (document.getElementById("search1").value == "Eric Chan" && document.getElementById("search2").value != "echan@ideo.com" && document.getElementById("search3").value != "7202516853" && document.getElementById("search4").value == "SSN hash") {
    console.log('error on 2 and 3');
    particle.callFunction({ deviceId: '430026001447343432313031', name: 'led', argument: 'error on 2 and 3', auth: '7dfb755486e5e116bf9a73c6764959c1180c64cf' });

    document.getElementById("check1").checked = true;
    document.getElementById("check2").checked = false;
    document.getElementById("check3").checked = false;
    document.getElementById("check4").checked = true;
  }
  else if (document.getElementById("search1").value == "Eric Chan" && document.getElementById("search2").value == "echan@ideo.com" && document.getElementById("search3").value != "7202516853" && document.getElementById("search4").value != "SSN hash") {
    console.log('error on 3 and 4');
    particle.callFunction({ deviceId: '430026001447343432313031', name: 'led', argument: 'error on 3 and 4', auth: '7dfb755486e5e116bf9a73c6764959c1180c64cf' });

    document.getElementById("check1").checked = true;
    document.getElementById("check2").checked = true;
    document.getElementById("check3").checked = false;
    document.getElementById("check4").checked = false;
  }
  else if (document.getElementById("search1").value != "Eric Chan" && document.getElementById("search2").value == "echan@ideo.com" && document.getElementById("search3").value == "7202516853" && document.getElementById("search4").value != "SSN hash") {
    console.log('error on 1 and 4');
    particle.callFunction({ deviceId: '430026001447343432313031', name: 'led', argument: 'error on 1 and 4', auth: '7dfb755486e5e116bf9a73c6764959c1180c64cf' });

    document.getElementById("check1").checked = false;
    document.getElementById("check2").checked = true;
    document.getElementById("check3").checked = true;
    document.getElementById("check4").checked = false;
  }
  else if (document.getElementById("search1").value != "Eric Chan" && document.getElementById("search2").value == "echan@ideo.com" && document.getElementById("search3").value != "7202516853" && document.getElementById("search4").value == "SSN hash") {
    console.log('error on 1 and 3');
    particle.callFunction({ deviceId: '430026001447343432313031', name: 'led', argument: 'error on 1 and 3', auth: '7dfb755486e5e116bf9a73c6764959c1180c64cf' });

    document.getElementById("check1").checked = false;
    document.getElementById("check2").checked = true;
    document.getElementById("check3").checked = false;
    document.getElementById("check4").checked = true;
  }
  else if (document.getElementById("search1").value == "Eric Chan" && document.getElementById("search2").value != "echan@ideo.com" && document.getElementById("search3").value == "7202516853" && document.getElementById("search4").value != "SSN hash") {
    console.log('error on 2 and 4');
    particle.callFunction({ deviceId: '430026001447343432313031', name: 'led', argument: 'error on 2 and 4', auth: '7dfb755486e5e116bf9a73c6764959c1180c64cf' });

    document.getElementById("check1").checked = true;
    document.getElementById("check2").checked = false;
    document.getElementById("check3").checked = true;
    document.getElementById("check4").checked = false;
  }
  // three errors
  else if (document.getElementById("search1").value != "Eric Chan" && document.getElementById("search2").value != "echan@ideo.com" && document.getElementById("search3").value != "7202516853" && document.getElementById("search4").value == "SSN hash") {
    console.log('error on 1, 2 and 3');
    particle.callFunction({ deviceId: '430026001447343432313031', name: 'led', argument: 'error on 1, 2 and 3', auth: '7dfb755486e5e116bf9a73c6764959c1180c64cf' });

    document.getElementById("check1").checked = false;
    document.getElementById("check2").checked = false;
    document.getElementById("check3").checked = false;
    document.getElementById("check4").checked = true;
  }
  else if (document.getElementById("search1").value != "Eric Chan" && document.getElementById("search2").value != "echan@ideo.com" && document.getElementById("search3").value == "7202516853" && document.getElementById("search4").value != "SSN hash") {
    console.log('error on 1, 2 and 4');
    particle.callFunction({ deviceId: '430026001447343432313031', name: 'led', argument: 'error on 1, 2 and 4', auth: '7dfb755486e5e116bf9a73c6764959c1180c64cf' });

    document.getElementById("check1").checked = false;
    document.getElementById("check2").checked = false;
    document.getElementById("check3").checked = true;
    document.getElementById("check4").checked = false;
  }
  else if (document.getElementById("search1").value != "Eric Chan" && document.getElementById("search2").value == "echan@ideo.com" && document.getElementById("search3").value != "7202516853" && document.getElementById("search4").value != "SSN hash") {
    console.log('error on 1, 3 and 4');
    particle.callFunction({ deviceId: '430026001447343432313031', name: 'led', argument: 'error on 1, 3 and 4', auth: '7dfb755486e5e116bf9a73c6764959c1180c64cf' });

    document.getElementById("check1").checked = false;
    document.getElementById("check2").checked = true;
    document.getElementById("check3").checked = false;
    document.getElementById("check4").checked = false;
  }
  else if (document.getElementById("search1").value == "Eric Chan" && document.getElementById("search2").value != "echan@ideo.com" && document.getElementById("search3").value != "7202516853" && document.getElementById("search4").value != "SSN hash") {
    console.log('error on 2, 3 and 4');
    particle.callFunction({ deviceId: '430026001447343432313031', name: 'led', argument: 'error on 2, 3 and 4', auth: '7dfb755486e5e116bf9a73c6764959c1180c64cf' });

    document.getElementById("check1").checked = true;
    document.getElementById("check2").checked = false;
    document.getElementById("check3").checked = false;
    document.getElementById("check4").checked = false;
  }
  // total error
  else {
    console.log('total error');
    particle.callFunction({ deviceId: '430026001447343432313031', name: 'led', argument: 'total error', auth: '7dfb755486e5e116bf9a73c6764959c1180c64cf' });

    document.getElementById("check1").checked = false;
    document.getElementById("check2").checked = false;
    document.getElementById("check3").checked = false;
    document.getElementById("check4").checked = false;
  }


}

//
// function checkInput() {
//   // no errors
//   if (document.getElementById("search1").value == "Eric Chan" && document.getElementById("search2").value == "echan@ideo.com" && document.getElementById("search3").value == "7202516853" && document.getElementById("search4").value == "SSN hash") {
//     console.log('success');
//     document.getElementById("on").value = "success"
//     document.getElementById("on").checked = true;
//     document.getElementById("check1").checked = true;
//     document.getElementById("check2").checked = true;
//     document.getElementById("check3").checked = true;
//     document.getElementById("check4").checked = true;
//   }
//   // one error
//   else if (document.getElementById("search1").value != "Eric Chan" && document.getElementById("search2").value == "echan@ideo.com" && document.getElementById("search3").value == "7202516853" && document.getElementById("search4").value == "SSN hash") {
//     console.log('error on 1');
//     document.getElementById("on").value = "error on 1"
//     document.getElementById("on").checked = true;
//     document.getElementById("check1").checked = false;
//     document.getElementById("check2").checked = true;
//     document.getElementById("check3").checked = true;
//     document.getElementById("check4").checked = true;
//   }
//   else if (document.getElementById("search1").value == "Eric Chan" && document.getElementById("search2").value != "echan@ideo.com" && document.getElementById("search3").value == "7202516853" && document.getElementById("search4").value == "SSN hash") {
//     console.log('error on 2');
//     document.getElementById("on").value = "error on 2"
//     document.getElementById("on").checked = true;
//     document.getElementById("check1").checked = true;
//     document.getElementById("check2").checked = false;
//     document.getElementById("check3").checked = true;
//     document.getElementById("check4").checked = true;
//   }
//   else if (document.getElementById("search1").value == "Eric Chan" && document.getElementById("search2").value == "echan@ideo.com" && document.getElementById("search3").value != "7202516853" && document.getElementById("search4").value == "SSN hash") {
//     console.log('error on 3');
//     document.getElementById("on").value = "error on 3"
//     document.getElementById("on").checked = true;
//     document.getElementById("check1").checked = true;
//     document.getElementById("check2").checked = true;
//     document.getElementById("check3").checked = false;
//     document.getElementById("check4").checked = true;
//   }
//   else if (document.getElementById("search1").value == "Eric Chan" && document.getElementById("search2").value == "echan@ideo.com" && document.getElementById("search3").value == "7202516853" && document.getElementById("search4").value != "SSN hash") {
//     console.log('error on 4');
//     document.getElementById("on").value = "error on 4"
//     document.getElementById("on").checked = true;
//     document.getElementById("check1").checked = true;
//     document.getElementById("check2").checked = true;
//     document.getElementById("check3").checked = true;
//     document.getElementById("check4").checked = false;
//   }
//   // two errors
//   else if (document.getElementById("search1").value != "Eric Chan" && document.getElementById("search2").value != "echan@ideo.com" && document.getElementById("search3").value == "7202516853" && document.getElementById("search4").value == "SSN hash") {
//     console.log('error on 1 and 2');
//     document.getElementById("on").value = "error on 1 and 2"
//     document.getElementById("on").checked = true;
//     document.getElementById("check1").checked = false;
//     document.getElementById("check2").checked = false;
//     document.getElementById("check3").checked = true;
//     document.getElementById("check4").checked = true;
//   }
//   else if (document.getElementById("search1").value == "Eric Chan" && document.getElementById("search2").value != "echan@ideo.com" && document.getElementById("search3").value != "7202516853" && document.getElementById("search4").value == "SSN hash") {
//     console.log('error on 2 and 3');
//     document.getElementById("on").value = "error on 2 and 3"
//     document.getElementById("on").checked = true;
//     document.getElementById("check1").checked = true;
//     document.getElementById("check2").checked = false;
//     document.getElementById("check3").checked = false;
//     document.getElementById("check4").checked = true;
//   }
//   else if (document.getElementById("search1").value == "Eric Chan" && document.getElementById("search2").value == "echan@ideo.com" && document.getElementById("search3").value != "7202516853" && document.getElementById("search4").value != "SSN hash") {
//     console.log('error on 3 and 4');
//     document.getElementById("on").value = "error on 3 and 4"
//     document.getElementById("on").checked = true;
//     document.getElementById("check1").checked = true;
//     document.getElementById("check2").checked = true;
//     document.getElementById("check3").checked = false;
//     document.getElementById("check4").checked = false;
//   }
//   else if (document.getElementById("search1").value != "Eric Chan" && document.getElementById("search2").value == "echan@ideo.com" && document.getElementById("search3").value == "7202516853" && document.getElementById("search4").value != "SSN hash") {
//     console.log('error on 1 and 4');
//     document.getElementById("on").value = "error on 1 and 4"
//     document.getElementById("on").checked = true;
//     document.getElementById("check1").checked = false;
//     document.getElementById("check2").checked = true;
//     document.getElementById("check3").checked = true;
//     document.getElementById("check4").checked = false;
//   }
//   else if (document.getElementById("search1").value != "Eric Chan" && document.getElementById("search2").value == "echan@ideo.com" && document.getElementById("search3").value != "7202516853" && document.getElementById("search4").value == "SSN hash") {
//     console.log('error on 1 and 3');
//     document.getElementById("on").value = "error on 1 and 3"
//     document.getElementById("on").checked = true;
//     document.getElementById("check1").checked = false;
//     document.getElementById("check2").checked = true;
//     document.getElementById("check3").checked = false;
//     document.getElementById("check4").checked = true;
//   }
//   else if (document.getElementById("search1").value == "Eric Chan" && document.getElementById("search2").value != "echan@ideo.com" && document.getElementById("search3").value == "7202516853" && document.getElementById("search4").value != "SSN hash") {
//     console.log('error on 2 and 4');
//     document.getElementById("on").value = "error on 2 and 4"
//     document.getElementById("on").checked = true;
//     document.getElementById("check1").checked = true;
//     document.getElementById("check2").checked = false;
//     document.getElementById("check3").checked = true;
//     document.getElementById("check4").checked = false;
//   }
//   // three errors
//   else if (document.getElementById("search1").value != "Eric Chan" && document.getElementById("search2").value != "echan@ideo.com" && document.getElementById("search3").value != "7202516853" && document.getElementById("search4").value == "SSN hash") {
//     console.log('error on 1, 2 and 3');
//     document.getElementById("on").value = "error on 1, 2 and 3"
//     document.getElementById("on").checked = true;
//     document.getElementById("check1").checked = false;
//     document.getElementById("check2").checked = false;
//     document.getElementById("check3").checked = false;
//     document.getElementById("check4").checked = true;
//   }
//   else if (document.getElementById("search1").value != "Eric Chan" && document.getElementById("search2").value != "echan@ideo.com" && document.getElementById("search3").value == "7202516853" && document.getElementById("search4").value != "SSN hash") {
//     console.log('error on 1, 2 and 4');
//     document.getElementById("on").value = "error on 1, 2 and 4"
//     document.getElementById("on").checked = true;
//     document.getElementById("check1").checked = false;
//     document.getElementById("check2").checked = false;
//     document.getElementById("check3").checked = true;
//     document.getElementById("check4").checked = false;
//   }
//   else if (document.getElementById("search1").value != "Eric Chan" && document.getElementById("search2").value == "echan@ideo.com" && document.getElementById("search3").value != "7202516853" && document.getElementById("search4").value != "SSN hash") {
//     console.log('error on 1, 3 and 4');
//     document.getElementById("on").value = "error on 1, 3 and 4"
//     document.getElementById("on").checked = true;
//     document.getElementById("check1").checked = false;
//     document.getElementById("check2").checked = true;
//     document.getElementById("check3").checked = false;
//     document.getElementById("check4").checked = false;
//   }
//   else if (document.getElementById("search1").value == "Eric Chan" && document.getElementById("search2").value != "echan@ideo.com" && document.getElementById("search3").value != "7202516853" && document.getElementById("search4").value != "SSN hash") {
//     console.log('error on 2, 3 and 4');
//     document.getElementById("on").value = "error on 2, 3 and 4"
//     document.getElementById("on").checked = true;
//     document.getElementById("check1").checked = true;
//     document.getElementById("check2").checked = false;
//     document.getElementById("check3").checked = false;
//     document.getElementById("check4").checked = false;
//   }
//   // total error
//   else {
//     console.log('total error');
//     document.getElementById("on").value = "total error"
//     document.getElementById("on").checked = true;
//     document.getElementById("check1").checked = false;
//     document.getElementById("check2").checked = false;
//     document.getElementById("check3").checked = false;
//     document.getElementById("check4").checked = false;
//   }
// }


// Call search results and display

// window.onload = function() {
//   firebase.database().ref('query/val').once('value').then(function(snapshot) {
//     var Value = snapshot.val();
//     document.getElementById("qry").innerHTML=Value;
//     // ...
//   });
//        //when the document is finished loading, replace everything
//        //between the <a ...> </a> tags with the value of splitText
//
// }

// Input Function
// _____________________________________________________________________________




// Buttons On Storefront
// _____________________________________________________________________________
// function write1() {
//   firebase.database().ref('Demand/Item 1').transaction(function(value) {
//     console.log('value', value);
//     return value + 1;
//   });
// }
//
// function write2() {
//   firebase.database().ref('Demand/Item 2').transaction(function(value) {
//     console.log('value', value);
//     return value + 1;
//   });
// }
//
// function write3() {
//   firebase.database().ref('Demand/Item 3').transaction(function(value) {
//     console.log('value', value);
//     return value + 1;
//   });
// }
//
// function write4() {
//   firebase.database().ref('Demand/Item 4').transaction(function(value) {
//     console.log('value', value);
//     return value + 1;
//   });
// }
