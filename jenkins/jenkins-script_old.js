//����������洢����
var xmlHttp;
var list=document.getElementsByTagName("tbody")[1];
var length = list.getElementsByTagName('tr').length - 3;
var startLine = 2;
var i = length;
var build_id = 44;
//����XMLHttpRequest����
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
//ʹ��get��ʽ�������̨�Ľ���
function callServer(var build_id)
{
	url="http://172.16.100.150:8085/job/1_userService_dev/" + build_id + "/api/xml?pretty=true&tree=actions[parameters[*],causes[*]]";
	xmlHttp.open("GET",url,true);
	xmlHttp.onreadystatechange=handleStateChange;
	xmlHttp.send(null);
}
//�ص���������̨���������󷵻ظ��ص�����
function handleStateChange()
{
    //�����״̬��5��ֵ��0=δ��ʼ����1=���ڼ��أ�2=�Ѿ����أ�3=�����У�4=��ɣ�
    if(xmlHttp.readyState==4)
    {   
        //200��ӦOK����404=δ�ҵ���ҳ
        if(xmlHttp.status==200)
        {
            var branch_name = xmlHttp.responseXML.getElementsByTagName("parameter")[1].getElementsByTagName("value")[0].firstChild.nodeValue;
			var user_name = xmlHttp.responseXML.getElementsByTagName("cause")[0].getElementsByTagName("userName")[0].firstChild.nodeValue;
			
			var lineContent;
			if(branch_name=='trunk')
				lineContent = "trunk����";
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