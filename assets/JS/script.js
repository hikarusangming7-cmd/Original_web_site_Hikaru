// 「はじめる」をクリックでメニュー開閉
$("#menu_Btn").on("click", function (e) {
    e.stopPropagation(); // 外側クリックの閉じる処理が先に走らないように
    const $menu = $(this).next(".dropdown-content");
    $(".dropdown-content").not($menu).hide(); // 他を閉じる
    $menu.toggle();
});

// 項目クリック時の処理
$(".dropdown-content").on("click", "button", function (e) {
    e.stopPropagation();
    const action = $(this).data("action");

    if (action === "story") {
        // ストーリーを選択した時の処理をここに
        // 例: 別ページへ移動 or 画面内の表示切り替え
        // location.href = "./story.html";
        $("#story").trigger("click"); // 既存の #story ボタンの処理を使いたい場合
    } else if (action === "ningyo") {
        // 人形編の処理
        // location.href = "./ningyo.html";
        console.log("人形編を選択");
    } else if (action === "okada") {
        // 岡田さん編の処理
        // location.href = "./okada.html";
        console.log("岡田さん編を選択");
    }

    // 選択後は閉じる
    $(this).closest(".dropdown-content").hide();
});

// 画面のどこかをクリックしたら閉じる
$(document).on("click", function () {
    $(".dropdown-content").hide();
});

$("#menu_Btn2").on("click", function (e) {
    e.stopPropagation(); // 外側クリックの閉じる処理が先に走らないように
    const $menu = $(this).next(".dropdown-content2");
    $(".dropdown-content2").not($menu).hide(); // 他を閉じる
    $menu.toggle();
});

// 項目クリック時の処理
$(".dropdown-content2").on("click", "button", function (e) {
    e.stopPropagation();
    const action = $(this).data("action");

    if (action === "story") {
        // ストーリーを選択した時の処理をここに
        // 例: 別ページへ移動 or 画面内の表示切り替え
        // location.href = "./story.html";
        $("#story").trigger("click"); // 既存の #story ボタンの処理を使いたい場合
    } else if (action === "ningyo") {
        // 人形編の処理
        // location.href = "./ningyo.html";
        console.log("人形編を選択");
    } else if (action === "okada") {
        // 岡田さん編の処理
        // location.href = "./okada.html";
        console.log("岡田さん編を選択");
    }

    // 選択後は閉じる
    $(this).closest(".dropdown-content2").hide();
});

// 画面のどこかをクリックしたら閉じる
$(document).on("click", function () {
    $(".dropdown-content2").hide();
});


//2025/10/11 下記追加レスポンシブ対応104行まで
// タッチ端末だけクリック開閉を有効化（PCは何もしない）
if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) {
  document.addEventListener('DOMContentLoaded', () => {
    const btn1 = document.getElementById('menu_Btn');
    const btn2 = document.getElementById('menu_Btn2');

    btn1?.addEventListener('click', (e) => {
      e.stopPropagation();
      const menu = btn1.parentElement?.querySelector('.dropdown-content');
      document.querySelectorAll('.dropdown-content, .dropdown-content2')
        .forEach(el => { if (el !== menu) el.style.display = 'none'; });
      if (menu) menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
    });

    btn2?.addEventListener('click', (e) => {
      e.stopPropagation();
      const menu = btn2.parentElement?.querySelector('.dropdown-content2');
      document.querySelectorAll('.dropdown-content, .dropdown-content2')
        .forEach(el => { if (el !== menu) el.style.display = 'none'; });
      if (menu) menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
    });

    // 画面外クリックで閉じる
    document.addEventListener('click', () => {
      document.querySelectorAll('.dropdown-content, .dropdown-content2')
        .forEach(el => el.style.display = 'none');
    });
  });
}