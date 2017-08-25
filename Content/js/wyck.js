/**
 * Created by Administrator on 2017/8/4.
 */

//选择还款方式

var data = [
    {'id': '0', 'value': '到期还本付息'},
];
var showBankDom1 = document.querySelector('#showBank1');
var bankIdDom1 = document.querySelector('#bankId1');
showBankDom1.addEventListener('click', function () {
    var bankId = showBankDom1.dataset['id'];
    var bankName = showBankDom1.dataset['value'];

    var bankSelect = new IosSelect(1,
        [data],
        {
            container: '.container',
            title: '还款方式选择',
            itemHeight: 50,
            itemShowCount: 3,
            oneLevelId: bankId,
            callback: function (selectOneObj) {
                bankIdDom1.value = selectOneObj.id;
                showBankDom1.innerHTML = selectOneObj.value;
                showBankDom1.dataset['value'] = selectOneObj.id;
            }
        });
});
//选择还款日期
// var selectDateDom5 = $('#selectDate');
// var showDateDom5= $('#showDate');
// // 初始化时间
// var now = new Date();
// var nowYear = now.getFullYear();
// var nowMonth = now.getMonth() + 1;
// var nowDate = now.getDate();
// showDateDom5.attr('data-year', nowYear);
// showDateDom5.attr('data-month', nowMonth);
// showDateDom5.attr('data-date', nowDate);
// // 数据初始化
// function formatYear (nowYear) {
//     var arr = [];
//     for (var i = nowYear; i <= nowYear+1; i++) {
//         arr.push({
//             id: i + '',
//             value: i
//         });
//     }
//     return arr;
// }
// function formatMonth () {
//     var arr = [];
//     for (var i = 1; i <=12; i++) {
//         arr.push({
//             id: i + '',
//             value: i
//         });
//     }
//     return arr;
// }
// function formatDate (count) {
//     var arr = [];
//     for (var i = 1; i <= count; i++) {
//         arr.push({
//             id: i + '',
//             value: i
//         });
//     }
//     return arr;
// }
// var yearData = function(callback) {
//     setTimeout(function() {
//         callback(formatYear(nowYear))
//     }, 1)
// };
// var monthData = function (year, callback) {
//     setTimeout(function() {
//         callback(formatMonth());
//     }, 1);
// };
// var dateData = function (year, month, callback) {
//     setTimeout(function() {
//         if (/^1|3|5|7|8|10|12$/.test(month)) {
//             callback(formatDate(31));
//         }
//         else if (/^4|6|9|11$/.test(month)) {
//             callback(formatDate(30));
//         }
//         else if (/^2$/.test(month)) {
//             if (year % 4 === 0 && year % 100 !==0 || year % 400 === 0) {
//                 callback(formatDate(29));
//             }
//             else {
//                 callback(formatDate(28));
//             }
//         }
//         else {
//             throw new Error('month is illegal');
//         }
//     }, 1);
//     // ajax请求可以这样写
//     /*
//      $.ajax({
//      type: 'get',
//      url: '/example',
//      success: function(data) {
//      callback(data);
//      }
//      });
//      */
// };
// selectDateDom5.bind('click', function () {
//     var oneLevelId = showDateDom5.attr('data-year');
//     var twoLevelId = showDateDom5.attr('data-month');
//     var threeLevelId = showDateDom5.attr('data-date');
//     var iosSelect = new IosSelect(3,
//         [yearData, monthData, dateData],
//         {
//             title: '选择还款日期',
//             itemHeight: 35,
//             relation: [1, 1],
//             oneLevelId: oneLevelId,
//             twoLevelId: twoLevelId,
//             threeLevelId: threeLevelId,
//             callback: function (selectOneObj, selectTwoObj, selectThreeObj) {
//                 showDateDom5.attr('data-year', selectOneObj.id);
//                 showDateDom5.attr('data-month', selectTwoObj.id);
//                 showDateDom5.attr('data-date', selectThreeObj.id);
//                 showDateDom5.html(selectOneObj.value + '-' + selectTwoObj.value + '-' + selectThreeObj.value+"      "+"20天");
//             }
//         });
// });
//选择还款利率
var data2 = [
];
var showBankDom2 = document.querySelector('#showBank2');
var bankIdDom2 = document.querySelector('#bankId2');
showBankDom2.addEventListener('click', function () {
    var bankId = showBankDom2.dataset['id'];
    var bankName = showBankDom2.dataset['value'];

    var bankSelect = new IosSelect(1,
        [data2],
        {
            container: '.container',
            title: '还款利率',
            itemHeight: 50,
            itemShowCount: 3,
            oneLevelId: bankId,
            callback: function (selectOneObj) {
                bankIdDom2.value = selectOneObj.id;
                showBankDom2.innerHTML = selectOneObj.value;
                showBankDom2.dataset['value'] = selectOneObj.id;
            }
        });
});
//选择还款方式
var data3 = [
    {'id': '1', 'value': '是'},
    {'id': '0', 'value': '否'}
];
var showBankDom3 = document.querySelector('#showBank3');
var bankIdDom3 = document.querySelector('#bankId3');
showBankDom3.addEventListener('click', function () {
    var bankId = showBankDom3.dataset['id'];
    var bankName = showBankDom3.dataset['value'];

    var bankSelect = new IosSelect(1,
        [data3],
        {
            container: '.container',
            title: '所有人可见',
            itemHeight: 50,
            itemShowCount: 3,
            oneLevelId: bankId,
            callback: function (selectOneObj) {
                bankIdDom3.value = selectOneObj.id;
                showBankDom3.innerHTML = selectOneObj.value;
                showBankDom3.dataset['value'] = selectOneObj.id;
            }
        });
});
//选择还款日期
var data5=[];
var showBankDom5 = document.querySelector('#showBank5');
var bankIdDom5 = document.querySelector('#bankId5');
showBankDom5.addEventListener('click', function () {
    var bankId = showBankDom5.dataset['id'];
    var bankName = showBankDom5.dataset['value'];

    var bankSelect = new IosSelect(1,
        [data5],
        {
            container: '.container',
            title: '出借天数',
            itemHeight: 50,
            itemShowCount: 3,
            oneLevelId: bankId,
            callback: function (selectOneObj) {
                bankIdDom5.value = selectOneObj.id;
                showBankDom5.innerHTML = selectOneObj.value;
                showBankDom5.dataset['value'] = selectOneObj.id;
            }
        });
});

//选择还款日期
var showBankDom9 = document.querySelector('#showBank9');
var bankIdDom9 = document.querySelector('#bankId9');
showBankDom9.addEventListener('click', function () {
    var bankId = showBankDom5.dataset['id'];
    var bankName = showBankDom5.dataset['value'];

    var bankSelect = new IosSelect(1,
        [data5],
        {
            container: '.container',
            title: '出借天数',
            itemHeight: 50,
            itemShowCount: 3,
            oneLevelId: bankId,
            callback: function (selectOneObj) {
                bankIdDom9.value = selectOneObj.id;
                showBankDom9.innerHTML = selectOneObj.value;
                showBankDom9.dataset['value'] = selectOneObj.id;
            }
        });
});
//选择服务费率
var data6=[];
var showBankDom6 = document.querySelector('#showBank6');
var bankIdDom6 = document.querySelector('#bankId6');
showBankDom6.addEventListener('click', function () {
    var bankId = showBankDom6.dataset['id'];
    var bankName = showBankDom6.dataset['value'];

    var bankSelect = new IosSelect(1,
        [data6],
        {
            container: '.container',
            title: '服务费率',
            itemHeight: 50,
            itemShowCount: 3,
            oneLevelId: bankId,
            callback: function (selectOneObj) {
                bankIdDom6.value = selectOneObj.id;
                showBankDom6.innerHTML = selectOneObj.value;
                showBankDom6.dataset['value'] = selectOneObj.id;
            }
        });
});
//选择服务费率
var data7=[];
var showBankDom7 = document.querySelector('#showBank7');
var bankIdDom7 = document.querySelector('#bankId7');
showBankDom7.addEventListener('click', function () {
    var bankId = showBankDom7.dataset['id'];
    var bankName = showBankDom7.dataset['value'];

    var bankSelect = new IosSelect(1,
        [data7],
        {
            container: '.container',
            title: '最低额度',
            itemHeight: 50,
            itemShowCount: 3,
            oneLevelId: bankId,
            callback: function (selectOneObj) {
                bankIdDom7.value = selectOneObj.id;
                showBankDom7.innerHTML = selectOneObj.value;
                showBankDom7.dataset['value'] = selectOneObj.id;
            }
        });
});
//选择服务费率
var data10=[];
var showBankDom10 = document.querySelector('#showBank10');
var bankIdDom10 = document.querySelector('#bankId10');
showBankDom10.addEventListener('click', function () {
    var bankId = showBankDom10.dataset['id'];
    var bankName = showBankDom10.dataset['value'];

    var bankSelect = new IosSelect(1,
        [data10],
        {
            container: '.container',
            title: '最低额度',
            itemHeight: 50,
            itemShowCount: 3,
            oneLevelId: bankId,
            callback: function (selectOneObj) {
                bankIdDom10.value = selectOneObj.id;
                showBankDom10.innerHTML = selectOneObj.value;
                showBankDom10.dataset['value'] = selectOneObj.id;
            }
        });
});
