// 設置一個陣列，用來存放所有資料
let data = [];

// 獲取清單列表的 ul
const list = document.querySelector('.list');

// 預設為第一個 ul.tab>li.active   (分頁標籤)為全部
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
  renderData();
});

const cardList = document.querySelector('.card_list');

// 根據當前 tab 渲染畫面  初始值

function renderData() {
//如果沒有 data 默認把整個區塊隱藏
  if(!data.length){
    cardList.style.display = 'none';
    return;
  }

  //如果是顯示的
  cardList.style.display = 'block';
  let str = '';
  let count = 0; //初始值
  data.forEach(function(item, index){
    if(!item.checked == true){
      // 計算待完成項目有幾個
      
      count += 1;
      if(toggleTab == 'all' || toggleTab == 'work'){
        str += `
                <li>
                  <label for="" class="checkbox" for=''>
                    <input type="checkbox" data-num="${index}">
                    <span>${item.content}</span>
                  </label>
                  <a href="#" class="delete" data-num="${index}"></a>
                </li>
        `;
      }
    }else if(
      (item.checked && toggleTab == 'all') || 
      (item.checked && toggleTab == 'done')
    ){
      str += `
              <li>
                <label for="" class="checkbox" for=''>
                  <input type="checkbox" data-num="${index}">
                  <span>${item.content}</span>
                </label>
                <a href="#" class="delete" data-num="${index}"></a>
              </li>
      `;  
    }
  });
  console.log(data);
  list.innerHTML = str;
  todoLength.textContent = count;
}