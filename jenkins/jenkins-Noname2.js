var list=document.getElementsByTagName("tbody")[1];
var length = list.getElementsByTagName('tr').length - 3;
var startLine = 2;
var i = 0;

var buildId = ${ENV:BUILD_ID};
var buildIdInt = parseInt(buildId);
function callServer() {	
	var xmlHttp;
	if(window.ActiveXObject)
        xmlHttp =new ActiveXObject("Microsoft.XMLHTTP");
    else if(window.XMLHttpRequest)   
        xmlHttp=new XMLHttpRequest();   
	var url = document.URL + buildIdInt + "/api/xml?pretty=true&tree=actions[parameters[*],causes[*]]";
	
	xmlHttp.open("GET",url,true);   
	xmlHttp.onreadystatechange = function(){
		if(xmlHttp.readyState==4 && xmlHttp.status==200 && i < length) {
			var branch_name = xmlHttp.responseXML.getElementsByTagName("parameter")[1].getElementsByTagName("value")[0].firstChild.nodeValue;
			var user_name = xmlHttp.responseXML.getElementsByTagName("cause")[0].getElementsByTagName("userName")[0].firstChild.nodeValue;
			var lineContent;
			if(branch_name=='trunk')
				lineContent = "trunk·¢²¼";
			else
				lineContent = "branch_name=" + branch_name + "      btag=b_" + buildIdInt + "_" + user_name;
			buildIdInt--;
			var textnode=document.createTextNode(lineContent);
			var newDiv=document.createElement("DIV");
			newDiv.appendChild(textnode);
			var newTd=document.createElement("TD");
			newTd.appendChild(newDiv);
			var newTr=document.createElement("TR");
			newTr.appendChild(newTd);

			list.insertBefore(newTr,list.children[i*2 + startLine]);
			i++;
			callServer();
		}
	};
	xmlHttp.send(null);   
}
callServer();