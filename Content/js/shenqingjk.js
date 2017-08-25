/**
 * Created by Administrator on 2017/8/7.
 */
//选择还款方式
    var data3 = [
        {'id': '0', 'value': '个体经营'},
        {'id': '1', 'value': '消费'},
        {'id': '2', 'value': '助学'},
        {'id': '3', 'value': '创业'},
        {'id': '4', 'value': '租房'},
        {'id': '5', 'value': '旅游'},
        {'id': '6', 'value': '装修'},
        {'id': '7', 'value': '医疗'},
        {'id': '7', 'value': '其他'}
    ];
    var showBankDom4 = document.querySelector('#showBank4');
    var bankIdDom4 = document.querySelector('#bankId4');
    showBankDom4.addEventListener('click', function () {
        var bankId = showBankDom4.dataset['id'];
        var bankName = showBankDom4.dataset['value'];

        var bankSelect = new IosSelect(1,
            [data3],
            {
                container: '.container',
                title: '选择还款用途',
                itemHeight: 50,
                itemShowCount: 3,
                oneLevelId: bankId,
                callback: function (selectOneObj) {
                    bankIdDom4.value = selectOneObj.id;
                    showBankDom4.innerHTML = selectOneObj.value;
                    showBankDom4.dataset['value'] = selectOneObj.id;
                }
            });
    });
//选择还款时间

    var showBankDom7 = document.querySelector('#showBank7');
    var bankIdDom7 = document.querySelector('#bankId7');
    showBankDom7.addEventListener('click', function () {
        var bankId = showBankDom7.dataset['id'];
        var bankName = showBankDom7.dataset['value'];

        var bankSelect1 = new IosSelect(1,
            [data4],
            {
                container: '.container',
                title: '选择借款时长',
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
