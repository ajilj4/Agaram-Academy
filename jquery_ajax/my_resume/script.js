$.ajax({
    type:"get",
    url:"http://agaram.academy/api/action.php",
    data:{
        request : "get_user_resume",
        user : "ajil",
        },
    success:function(res){
        console.log(res)

    },
    error:function(err){
        alert(err)
    }
})
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
    return false;
};