//����������洢����
var xmlHttp;
var list=document.getElementsByTagName("tbody")[1];
var length = list.getElementsByTagName('tr').length - 3;
var startLine = 2;
var i = 0;
//ʹ��get��ʽ�������̨�Ľ���
function callServer()   
{
	if(window.ActiveXObject)   
    {
        xmlHttp =new ActiveXObject("Microsoft.XMLHTTP")
    }
    else if(window.XMLHttpRequest)   
    {
        xmlHttp=new XMLHttpRequest();   
    }
	url="http://172.16.100.150:8085/job/1_userService_dev/43/api/xml?pretty=true&tree=actions[parameters[*],causes[*]]";   
	xmlHttp.open("GET",url,true);   
	xmlHttp.onreadystatechange=callBack;  
	xmlHttp.send(null);   
}
//�ص���������̨���������󷵻ظ��ص�����
function callBack()   
{
    //�����״̬��5��ֵ��0=δ��ʼ����1=���ڼ��أ�2=�Ѿ����أ�3=�����У�4=��ɣ�
    if(xmlHttp.readyState==4)   
    {   
		alert("readyState");
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
			alert(i);
			list.insertBefore(newTr,list.children[i*2 + startLine]);
        }
    }
}
function runScript() 
{
	for(; i < 3 ; i++)
	{
		//alert(i);
		callServer();
	}
} runScript();