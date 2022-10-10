"use strict";

// 設置一個陣列，用來存放所有資料
var data = []; // 獲取清單列表的 ul li

var list = document.querySelector('.list'); // 預設為第一個 ul.tab>li.active   (分頁標籤)為全部

var toggleTab = 'all'; // 新增

var btn = document.querySelector('.btn_add');
var input = document.querySelector('#input');
btn.addEventListener('click', function (e) {
  // 取消預設事件 因為是超連結(a)，每次刪除會自動跳轉網頁
  e.preventDefault();

  if (input.value.trim() == '') {
    alert('此項目名稱不得為空');
    return;
  }

  var obj = {};
  obj.content = input.value;
  obj.checked = false;
  data.push(obj);
  input.value = '';
  renderData();
});
var cardList = document.querySelector('.card_list'); // 根據當前 tab 渲染畫面  初始值

function renderData() {
  //如果沒有 data 默認把整個區塊隱藏
  if (!data.length) {
    cardList.style.display = 'none';
    return;
  } //如果是顯示的


  cardList.style.display = 'block';
  var str = '';
  var count = 0; //初始值

  data.forEach(function (item, index) {
    if (!item.checked == true) {
      // 計算待完成項目有幾個
      count += 1;

      if (toggleTab == 'all' || toggleTab == 'work') {
        str += "\n                <li>\n                  <label for=\"\" class=\"checkbox\">\n                    <input type=\"checkbox\" data-num=\"".concat(index, "\">\n                    <span>").concat(item.content, "</span>\n                  </label>\n                  <a href=\"#\" class=\"delete\" data-num=\"").concat(index, "\"></a>\n                </li>\n        ");
      }
    } else if (item.checked && toggleTab == 'all' || item.checked && toggleTab == 'done') {
      str += "\n              <li>\n                <label for=\"\" class=\"checkbox\">\n                  <input type=\"checkbox\" checked data-num=\"".concat(index, "\">\n                  <span>").concat(item.content, "</span>\n                </label>\n                <a href=\"#\" class=\"delete\" data-num=\"").concat(index, "\"></a>\n              </li>\n      ");
    }
  }); // console.log(data);

  list.innerHTML = str; // todoLength.textContent = count;
}
//# sourceMappingURL=all.js.map
