//定义变量，存储对象
var xmlHttp;
var list=document.getElementsByTagName("tbody")[1];
var length = list.getElementsByTagName('tr').length - 3;
var startLine = 2;
var i = length;
var build_id = 44;
//创建XMLHttpRequest对象
function creatXMLHttpRequest()
{
    if(window.ActiveXObject)
    {
        xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    else if(window.XMLHttpRequest)
    {
        xmlHttp=new XMLHttpRequest();
    }
}
//使用get方式建立与后台的交互
function callServer(var build_id)
{
	url="http://172.16.100.150:8085/job/1_userService_dev/" + build_id + "/api/xml?pretty=true&tree=actions[parameters[*],causes[*]]";
	xmlHttp.open("GET",url,true);
	xmlHttp.onreadystatechange=handleStateChange;
	xmlHttp.send(null);
}
//回调函数，后台处理完结果后返回给回调函数
function handleStateChange()
{
    //请求的状态有5个值：0=未初始化；1=正在加载；2=已经加载；3=交互中；4=完成；
    if(xmlHttp.readyState==4)
    {   
        //200对应OK，如404=未找到网页
        if(xmlHttp.status==200)
        {
            var branch_name = xmlHttp.responseXML.getElementsByTagName("parameter")[1].getElementsByTagName("value")[0].firstChild.nodeValue;
			var user_name = xmlHttp.responseXML.getElementsByTagName("cause")[0].getElementsByTagName("userName")[0].firstChild.nodeValue;
			
			var lineContent;
			if(branch_name=='trunk')
				lineContent = "trunk发布";
			else
				lineContent = "branch_name=" + branch_name + " \n btag=b_" + "1" + "_" + user_name;
			var textnode=document.createTextNode(lineContent);
			var newDiv=document.createElement("DIV");
			newDiv.appendChild(textnode);
			var newTd=document.createElement("TD");
			newTd.appendChild(newDiv);
			var newTr=document.createElement("TR");
			newTr.appendChild(newTd);

			list.insertBefore(newTr,list.children[i*2 + startLine]);
        }
    }
}

function runScript()
{
	creatXMLHttpRequest();
	//for(; i < length ; i++)
	//{
		callServer(build_id--);
	//}

} runScript();