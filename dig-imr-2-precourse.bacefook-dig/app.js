// momentオブジェクトをセット;
function showClock1() {
  let m = moment(); //現在の時刻が入る
  let output = m.format("YYYY/MM/DD HH:mm:ss");
  let globalTime = m.format("YYYY年MM月DD日 HH:mm:ss dddd");
  const h2Doc = document.getElementsByTagName("h2")[0];
  h2Doc.innerText = globalTime;
  setTimeout(() => (h2Doc.innerText = globalTime), 10);

  return output;
}
// function thank() {
//   window.alert("Thank you!!");
// }
// const h1Date = document.getElementsByTagName("h1");
// h1Date.addEventListener("click", thank);
const saveDate = [];
const goodnum = document.getElementsByClassName("good");
setInterval("showClock1()", 1000);
let userName = ";";
// ロードをするとイベントが走り、usernameがなければ入力させる
window.addEventListener("load", () => {
  // This is a check to see if there's a username stored
  let username = localStorage.getItem("username");
  if (!username) {
    // Prompt for one if a username isn't found
    username = window.prompt("What is your name?");
    localStorage.setItem("username", username);
  }
  userName = localStorage["username"];
  console.log("loclStorage", localStorage);
  const nameText = document.getElementById("name");
  nameText.innerText = localStorage["username"];

  // ニュースの一覧
  const containerEl = document.querySelector("#newsfeed");

  // This makes things appear
  // 記事を追加するもの
  for (let index = bacefook.newsfeed.length - 1; index >= 0; index--) {
    const post = bacefook.newsfeed[index];
    const topImage = bacefook.friendImage[index];
    // console.log(topImage);
    status(post);
  }

  const addFunc = () => {
    let randomNum = Math.floor(Math.random() * bacefook.newsfeed.length);
    // console.log("randomNum: ", randomNum);
    const post = bacefook.newsfeed[randomNum];
    status(post);
    timeDateCheck();
  };
  const button = document.getElementsByTagName("button")[0];
  button.addEventListener("click", addFunc);

  // 投稿一覧作成html
  function status(post, inputText, name) {
    // 改行
    const ptag = document.createElement("p");
    ptag.innerText = "    ";
    ptag.className = "box";
    containerEl.prepend(ptag);
    // 評価
    const feeling = document.createElement("button");
    feeling.className = "good";
    feeling.innerText = "good";
    ptag.prepend(feeling);
    // 時間
    const postTime = document.createElement("div");
    postTime.className = "timeStamp";
    postTime.innerText = "今";
    ptag.prepend(postTime);
    // 改行
    const ptag2 = document.createElement("p");
    ptag2.innerText = "";
    //画像
    const mediaImage = document.createElement("img");
    mediaImage.src = post["photo"];
    mediaImage.width = 420;
    mediaImage.height = 280;
    // スレ
    const postEl = document.createElement("div");
    if (inputText === undefined) {
      postEl.innerText = post.text;
    } else {
      postEl.innerText = inputText;
    }
    ptag.prepend(postEl);
    // postTime.prepend(postEl);
    // 名前
    const friendEl = document.createElement("div");
    friendEl.className = "friend";
    if (name === undefined) {
      friendEl.innerText = post.friend;
    } else {
      friendEl.innerText = name;
    }
    friendEl.style.fontSize = "30px";
    postEl.prepend(friendEl);
    // images
    const postImage = document.createElement("img");
    if (name === undefined) {
      postImage.src = post["image"];
    } else {
      postImage.src = "images/name.jpeg";
    }
    postImage.width = 40;
    postImage.height = 40;
    friendEl.prepend(postImage);
    postEl.append(ptag2);
    ptag2.append(mediaImage);
    let saveDateObj = savingDate(
      friendEl.innerText,
      postEl.innerText,
      String(mediaImage.src),
      String(postImage.src),
      showClock1()
    );
    timeDateCheck(1);

    saveDate.push(saveDateObj);
    // console.log("time---", saveDate[0]["timeDate"]);
  }
  //投稿テキスト
  const addFunc2 = (inputText) => {
    let randomNum = Math.floor(Math.random() * bacefook.newsfeed.length);
    const post = bacefook.newsfeed[randomNum];
    status(post, inputText, userName);
  };
  const pushButton = document.getElementsByTagName("button")[1];
  pushButton.addEventListener("click", () => {
    const inputText = document.getElementById("textbox").value;

    addFunc2(inputText);
    timeDateCheck();
  });
  function savingDate(handlName, textDate, imgDate, accountImg, timeDate) {
    // console.log("handlName: ", handlName);
    return {
      handlName: handlName,
      testDate: textDate,
      imgDate: imgDate,
      accountImg: accountImg,
      timeDate: showClock1(),
      timeText: "今",
      good: 0,
    };
  }
  function timeDateCheck(flag) {
    const newTimeStamp = document.getElementsByClassName("timeStamp");
    // console.log("newTimeStamp: ", newTimeStamp);

    saveDate.forEach((obj, index) => {
      // console.log("index: ", index);

      let oldDate = new Date(obj["timeDate"]);
      let diff = Math.abs(moment(oldDate).diff(moment()));
      let duration = moment.duration(diff);
      let days = Math.floor(duration.days());
      let hours = duration.hours();
      let minutes = duration.minutes();
      let seconds = duration.seconds();
      let testDate = "";
      if (days > 0) {
        testDate = testDate = days + "日";
      }
      if (hours > 0) {
        testDate = testDate + hours + "時間";
      }
      if (minutes > 0) {
        testDate = testDate + minutes + "分";
      }
      if (seconds > 0) {
        testDate = testDate + seconds + "秒";
      }
      testDate += "前";
      let testIndex = 0;
      if (flag) {
        testIndex = newTimeStamp.length - index - 1;
      } else {
        testIndex = newTimeStamp.length - index - 1;
      }
      // console.log("testIndex: ", testIndex);

      if (seconds > 0) {
        // console.log("yeyeyeyeyeye");
        obj["timeText"] = testDate;
        newTimeStamp[testIndex].innerText = testDate;
      } else {
        // console.log("--------");
        newTimeStamp[testIndex].innerText = "今";
      }
    });
  }
  // setTimeout("timeDateCheck()", 1000);
});
