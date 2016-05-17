var xmlhttp;  
function verify1() {  
    //确定浏览器  
    if(window.XMLHttpRequest) {  
        //针对FireFox、Mozillar、Opera、Safari、IE7、IE8  
        //创建XMLHttpRequest对象  
        xmlhttp = new XMLHttpRequest();  
        //修正某些浏览器的BUG  
        if(xmlhttp.overrideMimeType) {  
            xmlhttp.overrideMimeType("text/html");  
        }  
    }else if(window.ActiveXObject){  
        //针对IE5、IE5.5、IE6  
        //这两个为插件名称作为参数传递，为了创建ActiveXObject  
        var activeName = ["MSXML2.XMLHTTP","Microsoft.XMLHTTP"];  
        for(var i=0;i>activeName.length();i++) {  
              try{  
                  //非别取出，如果创建成功则终止循环，如果失败则会抛出异常继续循环  
                  xmlhttp = new ActiveXObject(activeName[i]);  
                  break;  
              }catch(e){  
              }  
        }  
    }  
	alert("1");
    //确定XMLHttpRequest是否创建成功  
    /*if(!xmlhttp) { 
        alert("XMLHttpRequest创建失败!"); 
        return; 
    }else { 
        alert("XMLHttpRequest创建成功!"+xmlhttp); 
    }*/  
    //注册回调函数  
    xmlhttp.onreadystatechange=callback;  
    url = "http://172.16.100.150:8085/job/1_userService_dev/43/api/json?pretty=true&tree=actions[parameters[*],causes[*]]";  
    //设置连接信息  
    //1.是http请求的方式  
    //2.是服务器的地址  
    //3.是采用同步还是异步，true为异步  
    xmlhttp.open("GET",url,true);  
	alert("2");
    //post请求与get请求的区别  
    //第一个参数设置成post第二个只写url地址，第三个不变  
    //xmlhttp.open("POST","classisservlet",true);  
    //post请求要自己设置请求头  
   //xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");  
    //发送数据，开始与服务器进行交互  
    //post发送请求  
    //xmlhttp.send("name="+username);  
}  
function callback() {  
    //接收响应数据  
    //判断对象状态是否交互完成，如果为4则交互完成  
	alert("3");
    if(xmlhttp.readyState == 4) {  
		alert("4");
         //判断对象状态是否交互成功,如果成功则为200  
        if(xmlhttp.status == 200) {  
            //接收数据,得到服务器输出的纯文本数据  
            var response = xmlhttp.responseText;  
            //得到div的节点将数据显示在div上  
            //var divresult = document.getElementById("result");  
			alert("");
            divresult.innerHTML = response;  
        }  
    }  
}
verify1();

function handleStateChange()   
{   
    //请求的状态有5个值：0=未初始化；1=正在加载；2=已经加载；3=交互中；4=完成；   
    if(xmlHttp.readyState==4)   
    {   
        //200对应OK，如404=未找到网页   
        if(xmlHttp.status==200)   
        {   
            var result=xmlHttp.responseXML.getElementsByTagName("result")[0].firstChild.nodeValue;   
            if(result=="true")   
            {   
                document.getElementById("LabMsg").innerHTML="恭喜，可用！";   
                document.getElementById("LabMsg").style.color="red";   
            }   
            else if(result=="false")   
            {   
                document.getElementById("LabMsg").innerText="该邮箱已存在！";   
                document.getElementById("LabMsg").style.color="red";   
            }   
        }   
    }   
}   



//定义变量，存储对象
var xmlHttp;   
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
function callServer()   
{   
    creatXMLHttpRequest()   
    
        url="http://172.16.100.150:8085/job/1_userService_dev/43/api/xml?pretty=true&tree=actions[parameters[*],causes[*]]";   
        xmlHttp.onreadystatechange=handleStateChange;   
        xmlHttp.open("GET",url,true);   
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
			alert(branch_name);
			alert(user_name);
        }   
    }   
}   
callServer() ;