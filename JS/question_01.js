// 質問の配列
const questions1 = [{
  question: "Q1:ストレス解消の時に一番効果的だと思うものは？",
  answers: [{
    text: "ストレス解消は運動に限る！ジムでトレーニング！",
    value: 1,
  },
  {
    text: "とにかくお酒！浴びるほど飲んで全部忘れちゃいたい！",
    value: 2,
    },
  {
    text: "感動的な映画を見ておもいっきり泣く",
    value: 3,
  },
  {
    text: "友達に電話して話を聞いてもらう",
    value: 4,
  }]
},
{
  question: "Q2:今週末、旅行に行くならどこに行きたい？",
  answers: [{
    text: "キャンピングカーで伊豆へ！",
    value: 1,
  },
  {
    text: "沖縄で海を見ながらのんびり過ごす",
    value: 4,
  },
  {
    text: "大分で温泉巡り。全部忘れて疲れを癒したい",
    value:3
  },
  {
    text: "広島で旬の牡蠣を食べまくる！",
    value: 2
  }]
},
{
  question: "Q3:自分を動物に例えると...？",
  answers: [{
    text: "ライオン",
    value: 1,
  },
  {
    text: "カンガルー",
    value: 2,
  },
  {
    text: "ペンギン",
    value: 3,
  },
  {
    text: "パンダ",
    value: 4,
  }]
},
{
  question: "Q4:学生生活で一番楽しかった時期は？",
  answers: [{
    text: "小学生",
    value: 2,
  },
  {
    text: "中学生",
    value: 1,
  },
  {
    text: "高校生",
    value: 3,
  },
  {
    text: "大学生",
    value: 4,
  }]
},
{
  question: "Q5:今の生活は充実している？",
  answers: [{
    text: "けっこう充実している",
    value: 4,
  },
  {
    text: "普通...かな？",
    value: 3,
  },
  {
    text: "あまり充実していない",
    value: 2,
  },
  {
    text: "むしろ退屈している。刺激が欲しい！",
    value: 1,
  }]
}
];

// 診断結果の配列
const results1 = [
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

// 診断による結果への条件分岐（得点加算式での診断）
const showResultText = function () {
  const totalScore = scoreArray.reduce(function (sum, currentValue) {
    return sum + parseInt(currentValue);
  });
  for (let i = 0; i < results1.length; i++) {
    const result = results1[i];
      //サバイバル
    if (totalScore <= 7 && i === 0) {
      scoreElement.innerText = result.text;
      comicImg.src = "../img/survival.jpg";
      detail.innerText = result.detail;
      break;
      //AKIRA
    } else if (totalScore <= 10 && i === 1) {
      scoreElement.innerText = result.text;
      comicImg.src = "../img/AKIRA.jpg";
      detail.innerText = result.detail;
      break;
      //よつばと
    } else if (totalScore <= 14 && i === 2) {
      scoreElement.innerText = result.text;
      comicImg.src = "../img/YOTSUBATO.jpg";
      detail.innerText = result.detail;
      break;
      //葬送のフリーレン
    } else if (totalScore <= 17 && i === 3) {
      scoreElement.innerText = result.text;
      comicImg.src = "../img/fur-iren.jpg";
      detail.innerText = result.detail;
      break;
      //ブルーピリオド
    } else if (totalScore <= 20 && i === 4){
      scoreElement.innerText = result.text;
      comicImg.src = "../img/bluepiriod.jpg";
      detail.innerText = result.detail;
      break;
    }
  }
}

// 診断の進行に関する関数
// getElementByIdメソッドによるHTML要素の取得
const startButton1 = document.getElementById("start-btn1")
const startButton2 = document.getElementById("start-btn2")
const restartButton = document.getElementById("restart-btn")
const quizContainer = document.getElementById("quiz")
const questionElement = document.getElementById("question")
const answerButtonsElement = document.getElementById("answer-buttons")
const resultContainer = document.getElementById("result")
const resultText = document.getElementById("result-text")
const scoreElement = document.getElementById("score")
const comicImg = document.getElementById("comicimg")
const detail = document.getElementById("detail")
const allResult = document.getElementById("all-result")

// 診断開始時の得点を0で宣言する（配列で得点加算していく）
let scoreArray = [];

// 診断開始時のイベント
let currentQuestionIndex1 = 0;
startButton1.addEventListener("click", function () {
startQuiz1();
})

// 診断開始時の関数（最初に表示されているコンテンツを切り替え）
function startQuiz1() {
  document.getElementById("maintitle").innerHTML = "おすすめ漫画診断";
  startButton1.classList.add("hide")
  startButton2.classList.add("hide")
  resultContainer.classList.add("hide")
  quizContainer.classList.remove("hide")
  showQuestion1()
}

// 診断開始時
function showQuestion1() {
  // 質問内容の表示
  questionElement.innerText = questions1[currentQuestionIndex1].question;

  // 回答項目の表示
  questions1[currentQuestionIndex1].answers.forEach(function(answer){
    // ボタンタグを生成して、回答項目を挿入する
    const button = document.createElement("button")
    button.innerText = answer.text;
    const value = answer.value;
    button.dataset.value = value;
    answerButtonsElement.appendChild(button)
    // 回答を選択した際のクリックイベント
    button.addEventListener("click", selectAnswer)
  })
}

// 選択肢をクリックした時の得点加算と次の質問へ移行するかの判断
function selectAnswer(e) {
  const selectedButton = e.target;
  // 選択した回答のvalueを取得
  const scoreData = parseInt(selectedButton.dataset.value);
  // 配列に格納
  scoreArray.push(scoreData);
  // 回答選択時の配列格納得点の確認
  console.log(scoreData);
  // 質問がまだ残っているかどうかを調査。最終の場合、診断結果画面を表示する
  if (currentQuestionIndex1 < questions1.length - 1) {
    resetState()
    currentQuestionIndex1++
    showQuestion1()
  } else {
    showResult();
  }
}

// 診断結果の表示
function showResult() {
  // 最終得点の確認
  console.log(scoreArray)
  quizContainer.classList.add("hide");
  resultContainer.classList.remove("hide");
  showResultText();
}

// リスタートする際のクリックイベント
restartButton.addEventListener("click", () => {
  resultContainer.classList.add("hide")
  startButton1.classList.remove("hide")
  startButton2.classList.remove("hide")
  currentQuestionIndex1 = 0;
  scoreArray = [];
  resetState()
})

// リスタートする際に生成した子要素を初期状態まで戻す
function resetState() {
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}
