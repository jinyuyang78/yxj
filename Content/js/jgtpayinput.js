/**
 * Created by Administrator on 2017/8/7.
 */
$(function () {

    $(".ipt-real-nick").on("input", function() {
        //console.log($(this).val());
        var $input = $(".ipt-fake-box input");
        if(!$(this).val()){//无值光标顶置
            $('.ipt-active-nick').css('left',$input.eq(0).offset().left-parseInt($('.ipt-box-nick').parent().css('padding-left'))+'px');
        }
        if(/^[0-9]*$/g.test($(this).val())){//有值只能是数字
            //console.log($(this).val());
            var pwd = $(this).val().trim();
            for (var i = 0, len = pwd.length; i < len; i++) {
                $input.eq(i).val(pwd[i]);
                if($input.eq(i).next().length){//模拟光标，先将图片容器定位，控制left值而已
                    $('.ipt-active-nick').css('left',$input.eq(i).offset().left-parseInt($('.ipt-box-nick').parent().css('padding-left'))+'px');
                }
            }
            $input.each(function() {//将有值的当前input后的所有input清空
                var index = $(this).index();
                if (index >= len) {
                    $(this).val("");
                }
            });
            if (len == 6) {
                //执行其他操作
                console.log('输入完整，执行操作11111');
                $("#qdgzbox,.passbox").hide();
                $(".mask").hide();
                $.ajax({
                    type : "GET",
                    url : localStorage.url+"/me/getPayPWD",
                    dataType : 'json',
                    async: false,
                    contentType : "application/json",
                    data :{
                        id:localStorage.id,
                        pay_pwd:$("#ipt-real-nick").val()
                    },
                    success : function(datas) {
                        console.log(datas);
                        if(datas.data=="1"){
                            fspay();
                        }else {
                            layer.open({
                                content:"支付密码错误",
                                time:2
                            });
                            setTimeout(function () {
                                window.location.reload();
                            },1000)
                        }

                    },
                    error : function(err) {
                        //console.log(err);
                    }
                });
            }
        }else{//清除val中的非数字，返回纯number的value
            var arr=$(this).val().match(/\d/g);
            $(this).val($(this).val().slice(0,$(this).val().lastIndexOf(arr[arr.length-1])+1));
            //console.log($(this).val());
        }
    });


});
function fspay() {
    $.ajax({
        type : "GET",
        url : localStorage.url+"/message/insertLoanMessage",
        dataType : 'json',
        async: false,
        contentType : "application/json",
        data :{
            id:res.id,
            duanxin:res.duanxin,
            luser_id:localStorage.id
        },
        success : function(datas) {
            console.log(datas);
            if(datas.data=="1"){
                layer.open({
                    content:"支付成功",
                    time:10
                });
                setTimeout(function () {
                    window.location.href="my.html"
                },1000)

            }
        },
        error : function(err) {
            //console.log(err);
        }
    });

}
