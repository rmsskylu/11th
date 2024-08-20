(function(para) {
  var p = para.sdk_url, n = para.name, w = window, d = document, s = 'script',x = null,y = null;
  w['sensorsDataAnalytic201505'] = n;
  w[n] = function(a) {return function() {w[n] || (w[n]._q = w[n]._q || []).push([a, arguments]);}}  ;
  var ifs = ['track','quick','register','registerPage','registerOnce','clearAllRegister','trackSignup', 'trackAbtest', 'setProfile','setOnceProfile','appendProfile', 'incrementProfile', 'deleteProfile', 'unsetProfile', 'identify','login','logout','trackLink','clearAllRegister'];
  for (var i = 0; i < ifs.length; i++) {
    w[n][ifs[i]] = w[n].call(null, ifs[i]);
  }
  if (!w[n]._t) {
    x = d.createElement(s), y = d.getElementsByTagName(s)[0];
    x.async = 1;
    x.src = p;
    y.parentNode.insertBefore(x, y);
    w[n].para = para;
  }
  setTimeout(function (){
    sensors.registerOnce({platform: "App服务端"});
    sensors.quick('autoTrack');
  }, 200)
})({
  sdk_url: '../js/sensorsdata.min.js',
  name: 'sensors',
  server_url: "https://bigdata.cib.com.cn/sa?project=yyptapp"
});

sensors.quick('autoTrack');
var sa_clone;

