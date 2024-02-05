Page({
    data: {
        leftBtns: [
            {
                text: '往来记录',
                bgColor: '#1677FF',
                color: '#fff',
            },
            {
                text: '设为常用',
                bgColor: '#FFA91B',
                color: '#fff',
            },
            {
                text: '删除',
                bgColor: '#FF2B00',
                color: '#fff',
            },
        ],
        swipeIndex: -1,
    },
    onSwipeStart: function () {
        this.setData({ swipeIndex: '' });
    },
    onSwipeEnd: function (args1, args2) {
        var e, data;
        e = args1;
        data = args1.detail;
        var index = e.target.dataset.item.index;
        data.swiped && this.setData({ swipeIndex: index });
    },
    onButtonTap: function (data, e) {
        console.log(data, e);
    },
});