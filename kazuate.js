// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
let e = document.querySelector('button#hantei');
e.addEventListener('click', hantei);
// hantei();
// hantei();
// hantei();
// hantei();

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  // let yoso = 4;
  let yoso = parseInt(document.querySelector('input[name="kazu"]').value);
  
  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
  kaisu++;
  let span = document.querySelector('span#kaisu');
  span.textContent = kaisu;
  console.log(`${kaisu}回目の予想: ${yoso}`);
  span = document.querySelector('span#answer');
  if(kaisu < 4) {
    if(kotae === yoso) {
        console.log("正解です．おめでとう!");
        span.textContent = "正解です．おめでとう!";
        kaisu = 3;
    } else if(kaisu === 3) {
        console.log(`まちがい．残念でした答えは${kotae}です．`);
        span.textContent = `まちがい．残念でした答えは${kotae}です．`;
    } else {
        if(yoso < kotae) {
            console.log(`まちがい．答えはもっと大きいですよ`);
            span.textContent = `まちがい．答えはもっと大きいですよ`;
        } else {
            console.log(`まちがい．答えはもっと小さいですよ`);
            span.textContent = `まちがい．答えはもっと小さいですよ`;
        }
    }
  } else {
    console.log(`答えは${kotae}でした．すでにゲームは終わっています`);
    span.textContent = `答えは${kotae}でした．すでにゲームは終わっています`;
  }
  // kaisu++;
}