itnrwProtocol="https:"==location.protocol?"https://":"http://";itnrwGCM=itnrwDomain="www.gis-rest.nrw.de/";"undefined"!=typeof itnrwConnect&&("testa"==itnrwConnect?itnrwDomain=itnrwGCM="lv.kommunen.nrw.testa-de.net/":"lvn"==itnrwConnect&&(itnrwDomain=itnrwGCM="lv.gis-rest.nrw.de/"));
itnrwConfig={version:"1.2.0",jsapi:itnrwProtocol+itnrwDomain+"jsapi/3.18",app:itnrwProtocol+itnrwGCM+"geocoding_map/v120/",addToHead:function(b,a){"script"==b?(script=document.createElement(b),script.setAttribute("type","text/javascript"),script.setAttribute("src",a),document.getElementsByTagName("head")[0].appendChild(script)):"link"==b&&(script=document.createElement(b),script.setAttribute("type","text/css"),script.setAttribute("rel","stylesheet"),script.setAttribute("href",a),document.getElementsByTagName("head")[0].appendChild(script))},
  init:function(){null!=dojo&&(clearInterval(dojoTimer),dojo.ready(function(){require(["dojo/_base/lang","dojo/query","esri/config"],function(b,a,c){c.defaults.io.corsEnabledServers.push("www.gis-rest.nrw.de");a(".itnrwMap").forEach(function(a){require(["itnrw/MapLoader"],function(d){window.itnrwMaps=[];var c=a.getAttribute("data-itnrw-timeout")||0;setTimeout(b.hitch(this,function(){itnrwMaps.push(new d(a))}),c)})});a(".itnrwAddress").forEach(function(a){require(["itnrw/InputLoader"],function(b){new b(a)})})})}))}};
dojoConfig={cacheBust:!1,async:!1,parseOnLoad:!0,packages:[{name:"itnrw",location:itnrwConfig.app+"itnrw"},{name:"esri",location:itnrwConfig.jsapi+"/esri"},{name:"dojo",location:itnrwConfig.jsapi+"/dojo"},{name:"dojox",location:itnrwConfig.jsapi+"/dojox"},{name:"dijit",location:itnrwConfig.jsapi+"/dijit"}]};itnrwConfig.addToHead("link",itnrwConfig.jsapi+"/esri/css/esri.css");itnrwConfig.addToHead("script",itnrwConfig.jsapi);itnrwConfig.addToHead("link",itnrwConfig.app+"itnrw/css/gcm.css");
var dojo=null,dojoTimer=setInterval(itnrwConfig.init,200);