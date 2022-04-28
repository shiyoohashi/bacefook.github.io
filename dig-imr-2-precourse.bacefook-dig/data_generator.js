/*
  This generates our fake newsfeed information.

  There is no need to touch the code in here until you get to basic requirement #4,
  but please check it out to familiarize yourself beforehand.
*/
(() => {
  window.bacefook = {};
  bacefook.newsfeed = [];
  bacefook.friends = {};
  bacefook.friendDate = {};
  bacefook.friendNames = [
    "tamaroh",
    "kani",
    "eriko",
    "tsubasa",
    "masataka",
    "sato",
    "yamada",
  ];
  bacefook.friendNames.forEach((name) => {
    bacefook.friends[name] = [];
  });
  bacefook.friendImage = [
    "images/cat458A8400.jpg",
    "images/dri0004-001.jpeg",
    "images/fd401164.jpeg",
    "images/fot0012-001.jpeg",
    "images/ダウンロード.jpeg",
    "images/IMG_7240.webp",
    "images/adpDSC_2004-300x200.jpeg",
  ];
  for (let i = 0; i < bacefook.friendNames.length; i++) {
    bacefook.friendDate[bacefook.friendNames[i]] = bacefook.friendImage[i];
    console.log("bacefookFriendDate", bacefook.friendDate);
  }
  const getRandomElement = (array) => {
    // Given an array, returns a random element
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  };

  const starters = [
    "totally just",
    "just",
    "completely",
    "waaaaah! i",
    "i just",
    "a salaryman",
    "a salaryman",
    "yesterday I",
    "a ninja",
    "my boss",
  ];
  const verbs = [
    "ate",
    "drank",
    "threw up in",
    "refactored",
    "iterated on",
    "thought about",
    "threw up on",
    "saw",
    "walked to",
    "got lost in",
    "walked into",
    "googled",
    "drove",
    "ran to",
    "worked on",
    "slept on",
    "slept in",
  ];
  const fillers = [
    "my",
    "your",
    "his",
    "her",
    "my favorite",
    "a beautiful",
    "a delicious",
    "that",
    "this",
    "an interesting",
    "",
    "the best",
    "the greatest",
    "a delightful",
  ];
  const nouns = [
    "DIG",
    "restaurant",
    "omakase",
    "hitomedia",
    "family mart",
    "private jet",
    "mama",
    "lawsons",
    "conbini",
    "whisky",
    "onigiri",
    "car",
    "food",
    "house",
    "toilet",
    "tokyo",
    "city",
    "iphone",
    "google",
    "unicorn",
    "mess",
    "pirate ship",
    "ninja",
  ];
  const hashtags = [
    "#DIG",
    "#techlife",
    "#toyota",
    "#tokyo",
    "#japan",
    "#interesting",
    "#til",
    "#lol",
    "#tgifriday",
    "#hashtags",
    "#japanlife",
    "#oops",
    "",
  ];
  const feelings = [
    "happy",
    "smug",
    "lovestruck",
    "gross",
    "scared",
    "tired",
    "angry",
    "frustrated",
    "excited",
    "",
  ];
  const mediaPhoto = [
    "images/1.jpg",
    "images/2.webp",
    "images/3.jpeg",
    "images/4.jpeg",
    "images/5.jpeg",
    "images/6.jpeg",
    "images/7.jpeg",
    "images/8.jpeg",
    "images/9.jpeg",
    "images/10.jpeg",
  ];
  // ランダムステータス作成
  const generateRandomText = () => {
    return [
      getRandomElement(starters),
      getRandomElement(verbs),
      getRandomElement(fillers),
      getRandomElement(nouns),
      getRandomElement(hashtags),
    ].join(" ");
  };
  //timestampとtimeOffsetが等しければ差分をセット、falseなら新しい時刻をセット
  const generatePostObj = (timeOffset) => {
    // if an offset is provided, make the timestamp that much older, otherwise just use the current time
    const timestamp = timeOffset
      ? new Date(new Date().getTime() - timeOffset)
      : new Date();
    let testDate = getRandomElement(bacefook.friendNames);
    // console.log("testDate: ", testDate);
    // console.log("testDateImage: ", bacefook.friendDate[testDate]);

    return {
      friend: testDate,
      text: generateRandomText(),
      feeling: getRandomElement(feelings),
      image: bacefook.friendDate[testDate],
      photo: getRandomElement(mediaPhoto),
      timestamp,
    };
  };
  // timeOffsetで出たオブジェクトを引数に配列にpushする
  const addPost = (obj) => {
    const friend = obj.friend;
    // console.log("obj: ", obj);
    // console.log("friend", friend);
    bacefook.friends[friend].push(obj);
    // bacefook.friendImage[friend].push(obj);
    bacefook.newsfeed.push(obj);
    // bacefook.newsfeed.push(randomImage);
  };

  const createPost = (timeOffset) => {
    const newPost = generatePostObj(timeOffset);
    addPost(newPost);
  };
  // 10回timeOffsetとクリエイトポスト
  for (let i = 0; i < 10; i++) {
    // make the starting posts look like they were posted over the course of the past day
    const timeOffset = (2 * (10 - i) + Math.random()) * 60 * 60 * 1000;
    createPost(timeOffset);
  }

  const scheduler = () => {
    console.log("scheduler");
    createPost(null);
    setTimeout(scheduler, (3 + Math.random() * 5) * 1000); // generate a new post every 3 to 8 seconds
  };

  // scheduler();
})();
