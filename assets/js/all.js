"use strict";

// 設置一個陣列，用來存放所有資料
var data = []; // 獲取清單列表的 ul li

var list = document.querySelector('.list'); // 預設為第一個 ul.tab>li.active   (分頁標籤)為全部

var toggleTab = 'all'; // 新增

var btn = document.querySelector('.btn_add');
var input = document.querySelector('#input');
btn.addEventListener('click', function (e) {
  // 取消預設事件 因為是超連結(a)，預設會自動跳轉網頁
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
}); //刪除

list.addEventListener('click', function (e) {
  var i = e.target.getAttribute('data-num');

  if (e.target.nodeName == 'A' && e.target.getAttribute('class') == 'delete') {
    //暫停網頁跳轉
    e.preventDefault(); // 根據索引值刪除一筆資料

    data.splice(i, 1);
  } else {
    // 點擊刪除項目以外的地方就切換勾選狀態
    data[i].checked = !data[i].checked;
  } // 每次更新資料都重新渲染畫面


  renderData();
}); // 刪除所有完成項目

var deleteBtn = document.querySelector('.btn_clear');
deleteBtn.addEventListener('click', function (e) {
  // 取消預設跳轉事件
  e.preventDefault(); //過濾一下，把沒打勾的項目丟到 newData 再把 data 內容變成 newData

  var newData = [];
  data.forEach(function (item) {
    if (!item.checked) {
      newData.push(item);
    }
  });
  data = newData;
  renderData();
}); // 切換 tab

var tabs = document.querySelector('.tab');
tabs.addEventListener('click', function (e) {
  var all = document.querySelectorAll('.tab li'); // 每次點擊 tab 清空所有tab li 的 active

  all.forEach(function (item) {
    item.setAttribute('class', '');
  }); // 給當前點擊的 tab 添加 active

  e.target.setAttribute('class', 'active'); // 更新當前的 tab

  toggleTab = e.target.getAttribute('data-tab');
  renderData();
}); //------------------------------------------------------------

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

  var todoLength = document.querySelector('.todoLength');
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
  });
  list.innerHTML = str;
  todoLength.textContent = count;
}
//# sourceMappingURL=all.js.map
