<script src="/plugin/extended-choice-parameter/js/jquery.min.js" type="text/javascript"></script>
<script>
function runScript() {
var list=document.getElementsByTagName("tbody")[1];
var length = list.getElementsByTagName('tr').length - 3;
var startLine = 2;
for(var i = 0; i < length ; i++){
	if('${branch_name}'=='trunk')
		var textnode=document.createTextNode("trunk发布");
	else
		var textnode=document.createTextNode("branch_name=${branch_name} <br \> btag=b_${ENV:BUILD_ID}_${BUILD_USER}");
    var newDiv=document.createElement("DIV");
    newDiv.appendChild(textnode);
    var newTd=document.createElement("TD");
    newTd.appendChild(newDiv);
    var newTr=document.createElement("TR");
    newTr.appendChild(newTd);

    list.insertBefore(newTr,list.children[i*2 + startLine]);
}
} runScript();
</script>
///////////////////

var textnode=document.createTextNode("trunk发布");
var newDiv=document.createElement("DIV");
newDiv.appendChild(textnode);
var newTd=document.createElement("TD");
newTd.appendChild(newDiv);
var newTr=document.createElement("TR");
newTr.appendChild(newTd);

var list=document.getElementsByTagName("tbody")[1];
var length = list.getElementsByTagName('tr').length;
var startLine = 2;
for (var i=0;i<length;i+=2)
{
alert(i);
list.insertBefore(newTr,list.children[startLine+i]);
}
