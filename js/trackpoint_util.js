function trackSaveTime() {
  window.onload = function () {
    var start = new Date();
    window.onunload = function () {
      var end = new Date();
      var duration = (end.getTime() - start.getTime()) / 1000;
      var eventName = 'savePageTime';
      try {
		if (!!sensors && !!sensors.para && !!sensors.para.server_url) {
		  var end = new Date();
		  var duration = (end.getTime() - start.getTime()) / 1000;
          sensors.track("savePageTime", {"pageStayTime": duration, "pageUrl": window.location.href});
        }
	  } catch (e) {
      }
    };
  } 
}

function trackInput(domId, eventName) {
  try {
    if (!!sensors && !!sensors.para && !!sensors.para.server_url) {
      sensors.track(eventName);
    }
  } catch (e) {
  }
}

function trackInputAndSaveValue(domId, eventName) {
  var inputtedValue = !!document.getElementById(domId) ? document.getElementById(domId).value : "";
  try {
    if (!!sensors && (inputtedValue || inputtedValue == 0) && !!sensors.para && !!sensors.para.server_url) {
      sensors.track(eventName, { refValue: inputtedValue });
    }
  } catch (e) {
  }
}

function track(eventName, param) {
  try {
    var trackParam = !!param ? param : {};
    if (sensors && sensors.para && sensors.para.server_url) {
    	setTimeout(function (){
    		sensors.track(eventName, trackParam);;
    	},10);
    		
    }
  } catch (e) {
  }
}

function register(param){
  try{
    if(!!sensors&&!!sensors.register){
      sensors.register(param)
    }
  }catch(e){
  }

}

function salogin(userId){
  try{
    if(!!sensors&&!!sensors.login){
      sensors.login(userId);
    }
  }catch(e){
  }

}

function cifLogin(cifId){
	try{
	    if(!!sensors&&!!sensors.login){
	    	sensors.registerPage({CIFID:cifId});
	    }
	  }catch(e){
	}
}


function trackErrorOnSubmit(eventName) {
  try{
    var jqi = document.getElementById("jqi");
    if(jqi){
        var error = $(".jqimessage").find("em")[0].innerHTML;
        track(eventName, {errorMsg: error});
    }
  }catch(e){
  }

}

function saveUserProerty(param) {
  try{
    if(!!sensors&&!!sensors.login){
      sensors.setProfile(param);
    }
  }catch(e){
  }
}
