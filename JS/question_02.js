// 質問の配列
const questions2 = [{
  question: "好きなカテゴリを選んでください",
  answers: [{
    text: "少年漫画",
    value: "boy",
  },
  {
    text: "青年漫画",
    value: "youth",
    },
  {
    text: "少女漫画",
    value: "girl",
  }]
},
{
  question: "好きなジャンルをえらんでください",
  answers: [{
    text: "アクション",
    value: "action",
  },
  {
    text: "ヒューマンドラマ",
    value: "human",
  },
  {
    text: "ファンタジー",
    value: "fantasy",
  },
  {
    text: "青春・学園",
    value: "academy",
  },
  {
    text: "スポーツ",
    value: "sports",
  }]
},
{
  question: "読みたいボリューム（巻数）を選んでください",
  answers: [{
    text: "10巻以下",
    value: 10,
  },
  {
    text: "30巻未満",
    value: 29,
  },
  {
    text: "30巻以上",
    value: 30
  }]
}];

// 診断結果の配列
const results2 = [
    { //サバイバル
      text: "あなたにおすすめの漫画は、「サバイバル」です!",
      detail: "大地震で、文明がもろくも崩れ去った中で、サトル少年のサバイバルが始まった。ただ一人、荒野をさすらうその行く手に待ち受けているのは生か死か…。過酷な少年の運命を通して、文明を失った現代人の理性と本能を描いていく。 大地震は現実に起こりうる。あなたは生き抜くことができるだろうか...？"
    },
    { //AKIRA
      text: "あなたにおすすめの漫画は、「AKIRA」です!",
      detail: "第3次世界大戦から38年、世界は新たな繁栄をむかえつつあった――。ネオ東京を舞台に繰り広げられる本格SFアクションコミックの金字塔!"
    },
    { //よつばと
      text: "あなたにおすすめの漫画は、「よつばと」です!",
      detail: "夏休みの前日、とある町に強烈に元気な女の子「よつば」と、「とーちゃん」親子が引っ越してきた。遠い海の向こうの島から来た不思議な女の子。 「よつば」（６歳）に振り回される周りの人達の日常を描いたハートフル？コメディー。"
    },
    { //葬送のフリーレン
      text: "あなたにおすすめの漫画は、「葬送のフリーレン」です!",
      detail: "魔王を倒した勇者一行の後日譚ファンタジー魔王を倒した勇者一行の“その後”。魔法使いフリーレンはエルフであり、他の3人と違う部分があります。彼女が”後”の世界で生きること、感じることとは--   残った者たちが紡ぐ、葬送と祈りとは--   物語は“冒険の終わり”から始まる。英雄たちの“生き様”を物語る、後日譚(アフター)ファンタジー!"
    },
    { //ブルーピリオド
      text: "あなたにおすすめの漫画は、「ブルーピリオド」です!",
      detail: "成績優秀かつスクールカースト上位の充実した毎日を送りつつ、どこか空虚な焦燥感を感じて生きる高校生・矢口八虎（やぐち やとら）は、ある日、一枚の絵に心奪われる。その衝撃は八虎を駆り立て、美しくも厳しい美術の世界へ身を投じていく。美術のノウハウうんちく満載、美大を目指して青春を燃やすスポ根受験物語、八虎と仲間たちは「好きなこと」を支えに未来を目指す！"
    }
];

// 開始時の配列を空で宣言（配列に情報を追加していく）
let tagArray = [];

// 診断による結果への条件分岐（得点加算式での診断）
const showResultText2 = function () {
  const tag = tagArray.reduce(function (sum, currentValue) {
    return sum + parseInt(currentValue);
  });
  for (let i = 0; i < results2.length; i++) {
    const result = results2[i];
      //サバイバル
    if (tag <= 7 && i === 0) {
      scoreElement.innerText = result.text;
      comicImg.src = "../img/survival.jpg";
      detail.innerText = result.detail;
      break;
      //AKIRA
    } else if (tag <= 10 && i === 1) {
      scoreElement.innerText = result.text;
      comicImg.src = "../img/AKIRA.jpg";
      detail.innerText = result.detail;
      break;
      //よつばと
    } else if (tag <= 14 && i === 2) {
      scoreElement.innerText = result.text;
      comicImg.src = "../img/YOTSUBATO.jpg";
      detail.innerText = result.detail;
      break;
      //葬送のフリーレン
    } else if (tag <= 17 && i === 3) {
      scoreElement.innerText = result.text;
      comicImg.src = "../img/fur-iren.jpg";
      detail.innerText = result.detail;
      break;
      //ブルーピリオド
    } else if (tag <= 20 && i === 4){
      scoreElement.innerText = result.text;
      comicImg.src = "../img/bluepiriod.jpg";
      detail.innerText = result.detail;
      break;
    }
  }
}


// 検索開始時のイベント
let currentQuestionIndex2 = 0;
startButton2.addEventListener("click", function () {
startQuiz2();
})

// 検索開始時の関数（デフォルト表示コンテンツの切り替え）
function startQuiz2() {
  document.getElementById("maintitle").innerHTML = "ジャンルから検索";
  startButton1.classList.add("hide")
  startButton2.classList.add("hide")
  resultContainer.classList.add("hide")
  quizContainer.classList.remove("hide")
  showQuestion2()
}

// 診断開始時
function showQuestion2() {
  // 質問内容の表示
  questionElement.innerText = questions2[currentQuestionIndex2].question;

  // 回答項目の表示
  questions2[currentQuestionIndex2].answers.forEach(function(answer){
    // ボタンタグを生成して、回答項目を挿入する
    const button = document.createElement("button")
    button.innerText = answer.text;
    const value = answer.value;
    button.dataset.value = value;
    answerButtonsElement.appendChild(button)
    // 回答を選択した際のクリックイベント
    button.addEventListener("click", selectAnswer2)
  })
}

// 選択肢をクリックした時の配列への情報取得と次の質問へ移行するかの判断
function selectAnswer2(e) {
  const selectedButton2 = e.target;
  console.log("selectedButton2.dataset.value=" + selectedButton2.dataset.value); //選択した回答のvalueの値を確認する

  //選択した回答を変数に格納
  const tagData = selectedButton2.dataset.value;
  // 変数のデータを配列に格納
  tagArray.push(tagData);
  console.log(tagArray);

  //選択後の結果
  // getResult()


  // 質問がまだ残っているかどうかを調査。最終の場合、診断結果画面を表示する
  if (currentQuestionIndex2 < questions2.length - 1) {
    resetState()
    currentQuestionIndex2++
    showQuestion2()
  } else {
    showResult2();
  }
}

// 診断結果の表示
function showResult2() {
  // 最終的な配列データの確認
  console.log(tagArray)
  quizContainer.classList.add("hide");
  resultContainer.classList.remove("hide");
  showResultText2();
}

// リスタートする際のクリックイベント
restartButton.addEventListener("click", () => {
  resultContainer.classList.add("hide")
  startButton1.classList.remove("hide")
  startButton2.classList.remove("hide")
  currentQuestionIndex2 = 0;
  tagArray = [];
  resetState()
})

// リスタートする際に生成した子要素を初期状態まで戻す
function resetState() {
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

// // =============================================
//データ登録時
  // $("#send").on("click", function () {
  //   const selectedGenre = document.getElementById("genre1");
  //   const selectedValue = selectedGenre.value;
  //   const selectedString = selectedValue.toString();
  //   // クリックした時に関数が動いているかの確認
  //   console.log(selectedGenre);
  //   console.log(selectedValue);
  //   console.log(selectedString);
  //   // 定数restaurantに配列で情報を格納
  //   const restaurant = {
  //     name: $("#name").val(),
  //     genre: selectedString,
  //     detail: $("#detail").val()
  //   }
  //   // 配列に情報が格納されているか確認
  //   console.log(restaurant);

  //   // 登録されたら表示文言変更
  //   const title = document.getElementById("title");
  //   title.textContent = "登録が完了しました";
  //   // 登録
  //   setTimeout(function () {
  //     title.textContent = "お気に入りの飲食店を登録";
  //   }, 1000); // 1000ミリ秒（2秒）後に実行

  //   // dbRefを関数pushで定数newPostRefに格納。その後、関数setでnewPostRefに定数restaiurantを格納
  //   const newPostRef = push(dbRef);
  //   set(newPostRef, restaurant);
  // });

  // // データ表示
  // $("#display").on("click", function () {
  //   $("#output").empty();
  //   //valueの値を文字列に変換
  //   const selectedGenre = document.getElementById("genre2");
  //   const selectedValue = selectedGenre.value;
  //   const selectedString = selectedValue.toString();
  //   // クリックした時に関数が動いているかの確認
  //   console.log(selectedGenre);
  //   console.log(selectedValue);
  //   console.log(selectedString);

  //   get(dbRef).then(function(data){
  //     const restaurantList = data.val(); //Firebase取得
  //     console.log(restaurantList); //動作確認
  //     const array = Object.entries(restaurantList)
  //     console.log(array) //動作確認

  //     for(let i=0; i<array.length; i++){
  //       const key = array[i][0];
  //       const val = array[i][1];
  //       console.log(key); //動作確認
  //       console.log(val); //動作確認
  //       if (val.genre === selectedString){
  //         let h = '<p>';
  //         h += val.name;
  //         h += '<br>';
  //         h += val.detail;
  //         h += '</p>';
  //         $("#output").append(h); //表示
  //         $("#output").scrollTop($('#output')[0].scrollHeight);
  //       }
  //       else if("all" === selectedString){
  //         let h = '<p>';
  //         h += val.name;
  //         h += '<br>';
  //         h += val.detail;
  //         h += '</p>';
  //         $("#output").append(h); //表示
  //         $("#output").scrollTop($('#output')[0].scrollHeight);
  //       } else {
  //       }
  //     }
  //   });
  // });
