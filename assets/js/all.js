"use strict";

// 設置一個陣列，用來存放所有資料
var data = []; // 獲取清單列表的 ul

var list = document.querySelector('.list'); // 預設為第一個 tab (分頁標籤)為全部

var toggleTab = 'all'; // 新增

var btn = document.querySelector('.btn_add');
var input = document.querySelector('#input');
btn.addEventListener('click', function (e) {
  // 取消預設事件 不然每次刪除會跑到連結 # 然後網頁會飛到最上面去
  e.preventDefault();

  if (input.value.trim() == '') {
    alert('此項目名稱不得為空');
    return;
  }

  var obj = {};
  obj.content = input.value;
  obj.checked = false;
  data.push(obj);
  input.value = ''; // renderData();
});
//# sourceMappingURL=all.js.map
