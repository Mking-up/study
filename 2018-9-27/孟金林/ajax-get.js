
function json2url(json) {

    json.a=Math.random();
    var arr=[];
    for (var name in json){
        arr.push(name+'='+json[name]);
    }
    return arr.join('&')

}
function ajax(json) {

    json=json || {};
    if(!json.url){
        alert('必填的！');
        return;
    }
    json.type=json.type || 'get';
    json.data=json.data || {};

    var oAjax=new XMLHttpRequest();



    switch (json.type.toLowerCase()){
        case 'get':
            oAjax.open('get',json.url+"?"+json2url(json.data),true);
            oAjax.send();
            break;
        case 'post':
            oAjax.open('post',json.url,true);
            oAjax.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
            oAjax.send(json2url(json.data));
            break;
    }

    oAjax.onreadystatechange=function (){
        if(oAjax.readyState==4){
            if (oAjax.status >= 200 && oAjax.status < 300 || oAjax.status == 304){
                json.error && json.error(oAjax.status);
            }

            else {
                json.success() && json.success(oAjax.responseText);
            }
        }

        function send() {
            ajax({
                url: 'aaa.txt',
                type: 'get',
                success: function (res) {
                    alert(res)
                }
            })
        }
    }
}
