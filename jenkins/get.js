var xmlhttp;  
function verify1() {  
    //ȷ�������  
    if(window.XMLHttpRequest) {  
        //���FireFox��Mozillar��Opera��Safari��IE7��IE8  
        //����XMLHttpRequest����  
        xmlhttp = new XMLHttpRequest();  
        //����ĳЩ�������BUG  
        if(xmlhttp.overrideMimeType) {  
            xmlhttp.overrideMimeType("text/html");  
        }  
    }else if(window.ActiveXObject){  
        //���IE5��IE5.5��IE6  
        //������Ϊ���������Ϊ�������ݣ�Ϊ�˴���ActiveXObject  
        var activeName = ["MSXML2.XMLHTTP","Microsoft.XMLHTTP"];  
        for(var i=0;i>activeName.length();i++) {  
              try{  
                  //�Ǳ�ȡ������������ɹ�����ֹѭ�������ʧ������׳��쳣����ѭ��  
                  xmlhttp = new ActiveXObject(activeName[i]);  
                  break;  
              }catch(e){  
              }  
        }  
    }  
	alert("1");
    //ȷ��XMLHttpRequest�Ƿ񴴽��ɹ�  
    /*if(!xmlhttp) { 
        alert("XMLHttpRequest����ʧ��!"); 
        return; 
    }else { 
        alert("XMLHttpRequest�����ɹ�!"+xmlhttp); 
    }*/  
    //ע��ص�����  
    xmlhttp.onreadystatechange=callback;  
    url = "http://172.16.100.150:8085/job/1_userService_dev/43/api/json?pretty=true&tree=actions[parameters[*],causes[*]]";  
    //����������Ϣ  
    //1.��http����ķ�ʽ  
    //2.�Ƿ������ĵ�ַ  
    //3.�ǲ���ͬ�������첽��trueΪ�첽  
    xmlhttp.open("GET",url,true);  
	alert("2");
    //post������get���������  
    //��һ���������ó�post�ڶ���ֻдurl��ַ������������  
    //xmlhttp.open("POST","classisservlet",true);  
    //post����Ҫ�Լ���������ͷ  
   //xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");  
    //�������ݣ���ʼ����������н���  
    //post��������  
    //xmlhttp.send("name="+username);  
}  
function callback() {  
    //������Ӧ����  
    //�ж϶���״̬�Ƿ񽻻���ɣ����Ϊ4�򽻻����  
	alert("3");
    if(xmlhttp.readyState == 4) {  
		alert("4");
         //�ж϶���״̬�Ƿ񽻻��ɹ�,����ɹ���Ϊ200  
        if(xmlhttp.status == 200) {  
            //��������,�õ�����������Ĵ��ı�����  
            var response = xmlhttp.responseText;  
            //�õ�div�Ľڵ㽫������ʾ��div��  
            //var divresult = document.getElementById("result");  
			alert("");
            divresult.innerHTML = response;  
        }  
    }  
}
verify1();

function handleStateChange()   
{   
    //�����״̬��5��ֵ��0=δ��ʼ����1=���ڼ��أ�2=�Ѿ����أ�3=�����У�4=��ɣ�   
    if(xmlHttp.readyState==4)   
    {   
        //200��ӦOK����404=δ�ҵ���ҳ   
        if(xmlHttp.status==200)   
        {   
            var result=xmlHttp.responseXML.getElementsByTagName("result")[0].firstChild.nodeValue;   
            if(result=="true")   
            {   
                document.getElementById("LabMsg").innerHTML="��ϲ�����ã�";   
                document.getElementById("LabMsg").style.color="red";   
            }   
            else if(result=="false")   
            {   
                document.getElementById("LabMsg").innerText="�������Ѵ��ڣ�";   
                document.getElementById("LabMsg").style.color="red";   
            }   
        }   
    }   
}   



//����������洢����
var xmlHttp;   
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
function callServer()   
{   
    creatXMLHttpRequest()   
    
        url="http://172.16.100.150:8085/job/1_userService_dev/43/api/xml?pretty=true&tree=actions[parameters[*],causes[*]]";   
        xmlHttp.onreadystatechange=handleStateChange;   
        xmlHttp.open("GET",url,true);   
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
			alert(branch_name);
			alert(user_name);
        }   
    }   
}   
callServer() ;