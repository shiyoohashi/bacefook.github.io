//ポケモンデータ
const threeFamilies = [
  {
    name: "モクロー",
    type: ["くさ", "ひこう"],
    height: 0.7,
    weight: 6.9
  },
  {
    name: "ヒノアラシ",
    type: ["ほのお"],
    height: 0.6,
    weight: 8.5  
  },
  {
    name: "ミジュマル",
    type: ["みず"],
    height: 0.5,
    weight: 9.0  
  }
];


//ボタンのclassName取得
const boll = document.getElementsByClassName("bollStyle");
//ステータスの項目の配列
const statusNameArray = ["name", "type", "weight", "height"];
//モーダルウィンドウの背景色の配列
const colorVariation = ["green", "red", "blue"];
//モーダルウィンドウのdivタグを取得
const textValue = document.getElementsByTagName("div")[3];
//モーダルウィンドウのpタグを取得
const  text = textValue.getElementsByTagName("p");
//モーダルウィンドウを表示させるためのボタン
const openButton = document.getElementsByClassName("modalOpen");
//モーダルウィンドウを非表示させるためのボタン
const closeButton = document.getElementsByClassName("modalClose");
//モーダルウィンドウのclassNameの取得
const modal = document.getElementsByClassName("modal")[0];
//マスクのclassNameの取得
const mask = document.getElementsByClassName("mask")[0];
//target要素を指定
const next = document.getElementById("nextButton");


//モーダルウィンドウON
function popUp() {
  modal.style.display = "block";
  mask.style.display = "block"; 
  console.log("block");
}

//モーダルウィンドウOFF
closeButton[0].addEventListener("click", () => {
  mask.style.display = "none";
  modal.style.display = "none";
});

//モーダルウィンドウOFF(ウィンドウ外クリック時)
window.addEventListener("click", function(e) {
  if (e.target === mask) {
    mask.style.display = "none";
    modal.style.display = "none";
  }
});


//マウスが君に決めたボタン上の時の色変更
next.addEventListener("mouseover", () => { 
  next.style.background = "orange";
  next.style.color = "black";
}, false);

//マウスが君に決めたボタン上から離れた時の色変更
next.addEventListener("mouseleave", () => {
  next.style.background = "black";
  next.style.color = "white";
}, false);


//各ボールのイベント
boll[0].addEventListener("click", () => {
  index = 0;
  updateImg(index);
  statusUpdate(index);
});

boll[1].addEventListener("click", () => {
  index = 1;
  updateImg(index);
  statusUpdate(index);
});

boll[2].addEventListener("click", () => {
  index = 2;
  updateImg(index);
  statusUpdate(index);
})


//御三家img更新
function updateImg(indexNum) {
  imgPlace.src = "./img/" + threeFamilies[indexNum]["name"] +".jpg";
  popUp();
}


//モーダルウィンドウのテキストと背景色を御三家に応じて更新 
function statusUpdate(indexNum) {
  for(let i = 0; i < statusNameArray.length; i++) {
    const key = statusNameArray[i];
    text[i].textContent = threeFamilies[indexNum][key];
    //keyがweightの場合は語尾にkgをつける
    if (key === "weight") {
      text[i].textContent += " kg";
    }
    //keyがheightの場合は語尾にmをつける
    if (key === "height") {
      text[i].textContent += " m";
    }
    modal.style.backgroundColor = colorVariation[indexNum];
  }
}



