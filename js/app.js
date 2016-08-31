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


function setStrings() {
  document.getElementById("search1").value = "Eric Chan"
  document.getElementById("search2").value = "echan@ideo.com"
  document.getElementById("search3").value = "7202516853"
  document.getElementById("search4").value = "SSN hash"
}

function checkInput() {
  // no errors
  if (document.getElementById("search1").value == "Eric Chan" && document.getElementById("search2").value == "echan@ideo.com" && document.getElementById("search3").value == "7202516853" && document.getElementById("search4").value == "SSN hash") {
    console.log('success');
    document.getElementById("on").value = "on"
    document.getElementById("on").checked = true;
  }
  // one error
  else if (document.getElementById("search1").value != "Eric Chan" && document.getElementById("search2").value == "echan@ideo.com" && document.getElementById("search3").value == "7202516853" && document.getElementById("search4").value == "SSN hash") {
    console.log('error on 1');
  }
  else if (document.getElementById("search1").value == "Eric Chan" && document.getElementById("search2").value != "echan@ideo.com" && document.getElementById("search3").value == "7202516853" && document.getElementById("search4").value == "SSN hash") {
    console.log('error on 2');
  }
  else if (document.getElementById("search1").value == "Eric Chan" && document.getElementById("search2").value == "echan@ideo.com" && document.getElementById("search3").value != "7202516853" && document.getElementById("search4").value == "SSN hash") {
    console.log('error on 3');
  }
  else if (document.getElementById("search1").value == "Eric Chan" && document.getElementById("search2").value == "echan@ideo.com" && document.getElementById("search3").value == "7202516853" && document.getElementById("search4").value != "SSN hash") {
    console.log('error on 4');
  }
  // two errors
  else if (document.getElementById("search1").value != "Eric Chan" && document.getElementById("search2").value != "echan@ideo.com" && document.getElementById("search3").value == "7202516853" && document.getElementById("search4").value == "SSN hash") {
    console.log('error on 1 and 2');
  }
  else if (document.getElementById("search1").value == "Eric Chan" && document.getElementById("search2").value != "echan@ideo.com" && document.getElementById("search3").value != "7202516853" && document.getElementById("search4").value == "SSN hash") {
    console.log('error on 2 and 3');
  }
  else if (document.getElementById("search1").value == "Eric Chan" && document.getElementById("search2").value == "echan@ideo.com" && document.getElementById("search3").value != "7202516853" && document.getElementById("search4").value != "SSN hash") {
    console.log('error on 3 and 4');
  }
  else if (document.getElementById("search1").value != "Eric Chan" && document.getElementById("search2").value == "echan@ideo.com" && document.getElementById("search3").value == "7202516853" && document.getElementById("search4").value != "SSN hash") {
    console.log('error on 1 and 4');
  }
  else if (document.getElementById("search1").value != "Eric Chan" && document.getElementById("search2").value == "echan@ideo.com" && document.getElementById("search3").value != "7202516853" && document.getElementById("search4").value == "SSN hash") {
    console.log('error on 1 and 3');
  }
  else if (document.getElementById("search1").value == "Eric Chan" && document.getElementById("search2").value != "echan@ideo.com" && document.getElementById("search3").value == "7202516853" && document.getElementById("search4").value != "SSN hash") {
    console.log('error on 2 and 4');
  }
  // three errors
  else if (document.getElementById("search1").value != "Eric Chan" && document.getElementById("search2").value != "echan@ideo.com" && document.getElementById("search3").value != "7202516853" && document.getElementById("search4").value == "SSN hash") {
    console.log('error on 1, 2 and 3');
  }
  else if (document.getElementById("search1").value != "Eric Chan" && document.getElementById("search2").value != "echan@ideo.com" && document.getElementById("search3").value == "7202516853" && document.getElementById("search4").value != "SSN hash") {
    console.log('error on 1, 2 and 4');
  }
  else if (document.getElementById("search1").value != "Eric Chan" && document.getElementById("search2").value == "echan@ideo.com" && document.getElementById("search3").value != "7202516853" && document.getElementById("search4").value != "SSN hash") {
    console.log('error on 1, 3 and 4');
  }
  else if (document.getElementById("search1").value == "Eric Chan" && document.getElementById("search2").value != "echan@ideo.com" && document.getElementById("search3").value != "7202516853" && document.getElementById("search4").value != "SSN hash") {
    console.log('error on 2, 3 and 4');
  }
  // total error
  else {
    console.log('total error');
  }
}


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
