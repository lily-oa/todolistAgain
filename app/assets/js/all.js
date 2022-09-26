let data = [
  {
    content: '把冰箱發霉的檸檬拿去丟',
    done: false
  },
  {
    content: '打電話叫媽媽匯款給我',
    done: true
  },
  {
    content: '整理電腦資料',
    done: false
  },
  {
    content: '繳電費水費瓦斯費',
    done: true
  },
  {
    content: '刪訊息',
    done: false
  },
  {
    content: '約vicky禮拜三泡溫泉',
    done: false
  },
  {
    content: '約data禮拜四吃晚餐',
    done: false
  },
];

const list = document.querySelector('.list');

// 初始值
function renderData(){
  let str = '';
  data.forEach(function(item, index){
    let to_be_completed_html = `
    <li>
        <div class='checkbox' data-num=${index}></div>
        <h2 class="me-auto">${item.content}</h2>
        <img class="del" data-num=${index} src='https://hexschool.github.io/js-todo/assets/cancel.jpg'/>
    </li>
    `;
    let completed_html = `
    <li>
        <div class="checkbox done" >
            <div class="material-icons" data-num=${index}>done</div>
        </div>
        <h2 class="clear">${item.content}</h2>
        <img class="del" data-num=${index} src="https://hexschool.github.io/js-todo/assets/cancel.jpg"/>
    </li>
    `;
    if(item.done == false){
      str += to_be_completed_html;
    }else{
      str += completed_html;
    }
  });
  list.innerHTML = str;
}
renderData();
toBeCompletedNum();

// 篩選器
const category = document.querySelector('.category');
const all = document.querySelector('.all');
const toBeComplete = document.querySelector('.to_be_completed');
const completed = document.querySelector('.completed');

category.addEventListener('click', function(e){
  let str = '';
  data.forEach(function(item, index){
    let to_be_completed_html = `
    <li>
        <div class='checkbox' data-num=${index}></div>
        <h2 class="me-auto">${item.content}</h2>
        <img class="del" data-num=${index} src='https://hexschool.github.io/js-todo/assets/cancel.jpg'/>
    </li>
    `;
    let completed_html = `
    <li>
        <div class="checkbox done" >
            <div class="material-icons" data-num=${index}>done</div>
        </div>
        <h2 class="clear">${item.content}</h2>
        <img class="del" data-num=${index} src="https://hexschool.github.io/js-todo/assets/cancel.jpg"/>
    </li>
    `;

    if(e.target.getAttribute('class') == 'all bb-1'){
      if(item.done == false){
        str += to_be_completed_html;
      }else{
        str += completed_html;
      }
    }else{
      if(
        e.target.getAttribute('class') == 'to_be_completed' || 
        (e.target.getAttribute('class') == 'to_be_completed bb-1' && item.done == false)
      ){
        str += to_be_completed_html;
      }else if(
        e.target.getAttribute('class') == 'completed' ||
        (e.target.getAttribute('class') == 'completed bb-1' && item.done == true)
      ){
        str += completed_html;
      }
    }
    list.innerHTML = str;
  });
});

// 篩選底線
$('.category>li').click(function(){
  $('li').removeClass("bb-1");
  $(this).addClass('bb-1');
});

function categoryLiBottom(){
  $('.category>li').removeClass("bb-1");
  $('.category>.all').addClass('bb-1');
}

//新增代辦事項 
const addlist = document.querySelector('.top');
const txt = document.querySelector('.txt');

addlist.addEventListener('click', function(e){
  if(e.target.nodeName !== 'P' || txt.value == ''){
    return;
  }
  categoryLiBottom();
  let obj = {};
  obj.content = txt.value;
  obj.done = false;
  data.push(obj);
  renderData();
  txt.value = '';
  toBeCompletedNum();
});

//刪除待辦事項
list.addEventListener('click', function(e){
  if(e.target.getAttribute('class') !== 'del'){
    return;
  }
  categoryLiBottom();
  let num = e.target.getAttribute('data-num');
  data.splice(num, 1);
  renderData();
  toBeCompletedNum();
});

// 完成待辦事項
list.addEventListener('click', function(e){
  if(e.target.getAttribute('class') !== 'checkbox' && e.target.getAttribute('class') !== 'material-icons'){
    return;
  }
  categoryLiBottom();
  data[e.target.getAttribute('data-num')].done =!data[e.target.getAttribute('data-num')].done;
  renderData();
  toBeCompletedNum();
});




//待辦事項總數
function toBeCompletedNum(){
  let toBeCompleteNum = 0;
  data.forEach(function(item, index){
    if(item.done == false){
      toBeCompleteNum += 1;
    }
    // add .summaryHTML
    const summary = document.querySelector('.summary');
    let newSummaryHTML = '';
    newSummaryHTML = `
    <li class="todoitems">${toBeCompleteNum}個待完成項目</li>
      <li class="clear">清除已完成項目</li>
    `
    summary.innerHTML = newSummaryHTML;
  });
};


const clear = document.querySelector('.clear');
const summary = document.querySelector('.summary');

summary.addEventListener('click', function(e){
  // 變數 count 儲存 done == true 的數量
  let count = 0;

  if(e.target.getAttribute('class') !== 'clear'){
    return;
  }

  // 篩選物件內 done == true 的項目數量
  data.filter(function(item, num){
    if(item.done == true){
      count = num;
    }
  });

  data.forEach(function(item, index){
    if(item.done == true){
      data.splice(index, count);
      // 刪除物件內 done == true 的項目數量
      renderData();
    }
  });
});



//-------------------------------------------------------------test
const title = document.querySelector('.title');
console.log(title);
title.addEventListener('click', function(e){
  if(e.target.getAttribute('class') !== 'm-1 view'){
    return;
  }
  console.log(e.target.getAttribute('value'));
});