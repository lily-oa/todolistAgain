// 設置一個陣列，用來存放所有資料
let data = [];

// 獲取清單列表的 ul
const list = document.querySelector('.list');

// 預設為第一個 tab (分頁標籤)為全部
let toggleTab = 'all';

// 新增
const btn = document.querySelector('.btn_add');
const input = document.querySelector('#input');
btn.addEventListener('click', function(e){
  // 取消預設事件 不然每次刪除會跑到連結 # 然後網頁會飛到最上面去
  e.preventDefault();
  if(input.value.trim() == ''){
    alert('此項目名稱不得為空');
    return;
  }
  let obj = {};
  obj.content = input.value;
  obj.checked = false;
  data.push(obj);
  input.value = '';
  // renderData();
});

