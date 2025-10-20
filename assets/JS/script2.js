const story = document.getElementById("story");
const choices = document.querySelector(".choices");

// 段落を追記する小関数
function appendPara(text) {
    const p = document.createElement("p");
    p.textContent = text;
    story.appendChild(p);
}
//10/16追加16行まで
// ▼ HTMLで段落を追加したい時用（strong 等を使える）
function appendHtml(html) {
    const p = document.createElement("p");
    p.innerHTML = html; // ← ここが textContent と違う点
    story.appendChild(p);
}

// 追加：表示/非表示ヘルパー
function hideChoices() {
    choices.classList.add("is-hidden");
    choices.innerHTML = "";
}
function showChoices() {
    choices.classList.remove("is-hidden");
}
// 選択肢を描画（既存をクリアして新規ボタンを生成）
// items: [{ label: '表示名', next: '遷移キー', variant: 'danger'  }]
function setChoices(items) {
    choices.innerHTML = "";
    items.forEach(({ label, next, variant }) => {
        const btn = document.createElement("button");
        btn.className = "choice" + (variant === "danger" ? " red" : "");
        btn.dataset.next = next;
        btn.textContent = label;
        choices.appendChild(btn);
    });
}

// 初期の2択をセット（HTMLに既に書いてあるなら省略可）
setChoices([
    { label: "こっそり人形を捨てる", next: "1", variant: "danger" },
    { label: "同棲をやめる", next: "2", variant: "danger" },
]);

// クリックを一箇所で受ける（イベント委譲：動的生成に強い）
choices.addEventListener("click", (e) => {
    const btn = e.target.closest(".choice");
    if (!btn) return;
    const key = btn.dataset.next;

    if (key === "1") {
        // 1つ目の選択：追記 → 改行 → さらに追記 → 次の選択肢を生成
        appendPara("「人形を手放して」と訴えても、彼は決して耳を貸さない。");
        appendPara("あの子を守るように抱きしめ、私を見る目は、もう…………");
        story.appendChild(document.createElement("br"));
        appendPara(
            "私は決意した――彼には告げず、ひとりであの人形を処分する、と。"
        );
        appendPara("その瞬間から、背後に視線を感じるようになった。");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("深夜。");
        appendPara("私は息を潜め、玄関の鍵を静かに閉めた。");
        appendPara("足元には、黒いビニール袋。");
        appendPara("その中には、あの日本人形が入っている。");
        story.appendChild(document.createElement("br"));
        appendPara(
            "ほんの少し袋が揺れるたび、中の何かが「コト…」と触れ合う音がした。"
        );
        appendPara("掴んだ手には、冷たい硬質の感触が伝わる。");
        appendPara("陶器のように固く、冷え切っている――");
        appendPara("それだけで、吐き気が込み上げた。");
        story.appendChild(document.createElement("br"));
        appendPara(
            "視線を落とすこともできず、私はできる限り腕を伸ばして、袋を身体から離すように持った。"
        );
        story.appendChild(document.createElement("br"));
        appendPara("早く、早く、終わらせたい。");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara(
            "街灯の光の下を通るたび、袋の中で何かがわずかに光を反射する。"
        );
        appendPara("それが頬だったのか、目だったのか――");
        appendPara("確かめる勇気はなかった。");
        story.appendChild(document.createElement("br"));
        appendPara("「……早く捨てよう」");
        story.appendChild(document.createElement("br"));
        appendPara(
            "かすれた声でそう呟き、ゴミ置き場の前にしゃがみ込み、袋を地面に置いた。"
        );
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("その場から離れようとした瞬間――");
        story.appendChild(document.createElement("br"));
        appendHtml("<strong>コトリ。</strong>");
        story.appendChild(document.createElement("br"));
        appendPara("中で硬いものがぶつかる音。");
        appendPara("思わず息を呑む。");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("静まり返った夜の空気に、その音だけが異様に響いた。");
        story.appendChild(document.createElement("br"));
        appendPara("風が止む。");
        appendPara("街灯が、わずかに瞬いた。");
        story.appendChild(document.createElement("br"));

        // 新しい選択肢を生成
        setChoices([
            {
                label: "気にせずゆっくり戻る",
                next: "1a",
                variant: "danger",
            },
            { label: "走って家に戻る", next: "1b", variant: "danger" },
        ]);
    } else if (key === "1a") {
        appendPara("街灯の届かない川沿い。");
        appendPara("その夜、私の行方を知る者は、もういなかった。");
        hideChoices("気にせずゆっくり戻る"); // ← ここで選択肢を消す
        // バッドエンドへ遷移（別ページ）
        setTimeout(() => {
            window.location.href = "./bad_end.html";
        }, 5000);
    } else if (key === "1b") {
        appendPara("玄関を開けた。");
        appendPara("湿った暗闇の中で、ふたつの声が重なった。");
        story.appendChild(document.createElement("br"));
        appendPara("「……おかえり。」");
        story.appendChild(document.createElement("br"));
        appendPara("ひとつは、確かに彼の声。");
        appendPara("もうひとつは、細く、濡れたような声。");
        appendPara("人間の声とは思えない、鈴をこすったような音色だった。");
        story.appendChild(document.createElement("br"));
        appendPara("心臓が跳ね、息が詰まる。");
        appendPara("リビングの方から、微かにランプの光が漏れている。");
        appendPara("震える足で一歩、また一歩と進む。");
        story.appendChild(document.createElement("br"));
        appendPara("リビングのドアの前に、黒いビニール袋が落ちていた。");
        story.appendChild(document.createElement("br"));
        appendPara("これって…………");
        story.appendChild(document.createElement("br"));
        // さらに分岐を増やしたい場合
        setChoices([
            { label: "リビングに入る", next: "1b-1", variant: "danger" },
            { label: "逃げるように家を出る", next: "1b-2", variant: "danger" },
        ]);
    } else if (key === "1b-1") {
        appendPara("部屋の隅、影の中。彼の姿を見つけた。");
        appendPara("背を向けたまま、何かを腕に抱えて揺れている。");
        appendPara("その肩越しに、白い顔が見えた。");
        story.appendChild(document.createElement("br"));
        appendPara("あの人形…………");
        appendPara("捨てたはずなのに、何で…………");
        appendPara("きっと、悪い夢を見ているんだ。");
        story.appendChild(document.createElement("br"));
        appendPara("私は、目眩を感じる間もなかった。");
        story.appendChild(document.createElement("br"));
        appendPara("「……なんで、捨てたの？」");
        story.appendChild(document.createElement("br"));
        appendPara("静かな声だった。");
        appendPara("怒っているようでも、泣いているようでもない。");
        appendPara("ただ、底の見えない井戸のような声。");
        story.appendChild(document.createElement("br"));
        appendHtml("「<strong>ねぇ、なんで……捨てたの？</strong>」");
        story.appendChild(document.createElement("br"));
        appendPara("今度は、ふたつの声で重なった。");
        appendPara("彼と――人形の口元から。");
        story.appendChild(document.createElement("br"));
        appendPara("その瞬間、部屋の電気が一斉に点いた。");
        appendPara("まばゆい光に、私は思わず目を閉じた。");
        story.appendChild(document.createElement("br"));
        appendPara("――ほんの一瞬。");
        appendPara("けれど、それが私の“最後の瞬き”になった。");

        hideChoices("リビングに入る"); // ← ここで選択肢を消す
        setTimeout(() => {
            window.location.href = "./bad_end.html";
        }, 20000);
    } else if (key === "1b-2") {
        appendPara(
            "嫌な予感がして、リビングには入らず、そのまま玄関へと向かった。"
        );
        appendPara("手を伸ばし、ドアノブに触れたその瞬間――");
        story.appendChild(document.createElement("br"));
        appendPara("「……ねぇ、どこに行くの？」");
        story.appendChild(document.createElement("br"));
        appendPara("背後から、耳のすぐそばで声がした。");
        appendPara("冷たい息が頬をかすめる。");
        appendPara("震える指が、ドアノブから滑り落ちた。");
        story.appendChild(document.createElement("br"));
        appendPara("もう、何もかもが遅かった。");
        hideChoices("逃げるように家を出る"); // ← ここで選択肢を消す
        setTimeout(() => {
            window.location.href = "./bad_end.html";
        }, 11000);
    } else if (key === "2") {
        // 「同棲をやめる」ルート
        appendPara(
            "もうこんな生活は耐えられない。彼のことも信用できない。別れよう。"
        );
        setChoices([
            { label: "今すぐ荷造りする", next: "2a", variant: "danger" },
            { label: "明日話し合う", next: "2b", variant: "danger" },
        ]);
    } else if (key === "2a") {
        appendPara(
            "スーツケースのチャックが閉まる音と同時に、玄関の鏡が勝手にこちらを向いた。"
        );
        hideChoices("今すぐ荷造りする"); // ← ここで選択肢を消す
        setTimeout(() => {
            window.location.href = "./bad_end.html";
        }, 5000);
    }

    if (key === "2b") {
        appendPara("「……明日、彼と決着をつけよう。」 ");
        appendPara(
            "そう決めた私は、その夜、何も知らないふりをして、いつもより早く布団に潜り込んだ。 "
        );
        appendPara(
            "同棲を続ければ、きっと破滅が待っている。 胸の奥で、不吉な確信がじわじわと広がっていった。"
        );
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("その後、彼とは無事に別れることができた。");
        appendPara(
            "――そう思っていた。 けれど、それはほんの束の間の安息だった。"
        );
        story.appendChild(document.createElement("br"));
        appendPara("まもなく、新たな恐怖が始まったのだ。");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));

        appendPara("ある日を境に、");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendHtml(
            "スマートフォンに毎日届くようになった――<strong>あの人形の写真。</strong>"
        );
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));

        appendPara("「今日の⚪︎⚪︎ちゃんも、可愛いでしょ♡」");

        story.appendChild(document.createElement("br"));
        appendPara("まるで生きている誰かが、日々の成長を報告するかのように。");
        story.appendChild(document.createElement("br"));
        appendPara("ブロックしても、アカウントを変えても、");
        appendPara("同じ文面と写真が、何度でも届いた。");
        appendPara("一日に何通も、執拗に。");
        story.appendChild(document.createElement("br"));
        appendPara("それと同じ頃から、家の中でも奇妙なことが起き始めた。");
        story.appendChild(document.createElement("br"));
        appendPara("最初は、夜更けに聞こえる微かな物音。");
        appendPara("次第に、帰宅すると床一面が水で濡れていたり、");
        appendPara("まるで誰かがそこに“いた”ような痕跡が残っていたり。");
        story.appendChild(document.createElement("br"));
        appendPara("さらには――");
        appendPara("まったく無関係の友人から、");
        appendPara("「〇〇ちゃんって、本当に可愛いよね」");
        appendPara("というメッセージが届くようになった。");
        story.appendChild(document.createElement("br"));
        appendPara("本人に確かめても、");
        appendPara("「そんなこと、送っていない」と言うのだった。");
        story.appendChild(document.createElement("br"));
        appendPara(
            "背筋が冷たくなりながら、私はスマホの画面を睨み続けていた。"
        );
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        setChoices([
            { label: "先輩に相談する", next: "3a", variant: "danger" },
            { label: "我慢する", next: "3b", variant: "danger" },
        ]);
    }

    if (key === "3a") {
        appendPara("ふと頭に浮かんだ——職場に、霊感が強い先輩がいたことを。");
        appendPara("……もしかしたら、あの人形のことも分かるかもしれない。 ");
        story.appendChild(document.createElement("br"));
        appendPara(
            "先輩とは普段、仕事の話しかしない。このあいだの飲み会で少しだけプライベートの話をした程度だ。"
        );
        appendPara("いきなりこんなことを持ち出すのは抵抗があった。");
        appendPara(
            "それでも、先輩は優しい人だし、何よりこの件を自分の中だけに抱え続けるのは限界だった。"
        );
        story.appendChild(document.createElement("br"));
        appendPara("「先輩、ちょっといいですか？」");
        story.appendChild(document.createElement("br"));
        appendPara("職場で先輩を見かけ、思い切って声をかける。");
        appendPara("「ん？」");
        appendPara(
            "「実は相談があって……もしよければ、今日ランチご一緒できませんか？」"
        );
        story.appendChild(document.createElement("br"));
        appendPara("ここでは話しづらい。場所を変えて相談したかった。");
        appendPara(
            "私、少し大胆すぎたかな。周りの視線が気になる——いや、誰もこちらは見ていない。"
        );
        story.appendChild(document.createElement("br"));
        appendPara(
            "「もちろん。ちょうど休憩に出るところだった。ゆっくり話そう」"
        );
        story.appendChild(document.createElement("br"));
        appendPara(
            "先輩はすぐに快く承諾してくれた。きっと仕事の相談だと思ったのだろう。"
        );
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("――そしてランチへ――");
        story.appendChild(document.createElement("br"));
        appendPara(
            "「すみません、無理にお誘いしちゃって。今日は私がごちそうしますね」"
        );
        appendPara(
            "気を遣わなくていいよ、と先輩は言ったが、そのほうが自分も気持ちよく相談できると押し切った。"
        );
        appendPara(
            "普段から遅くまで頑張っている先輩に負担をかけたくない——せめてランチ代くらいは自分が払いたかった。"
        );
        story.appendChild(document.createElement("br"));
        appendPara(
            "少し緊張していたけれど、先輩と一緒にいると不思議と安心できる。ようやく胸の内を打ち明けられそうだ。"
        );
        story.appendChild(document.createElement("br"));
        appendPara(
            "「このあいだの飲み会で、先輩が不思議な体験を話してくれたじゃないですか」"
        );
        appendPara("「ああ、あの時のことね。怖がらせてしまったよね」");
        appendPara(
            "「怖かったですけど……正直、とても興味深くて楽しかったんです。それで今日の相談は、そのときの先輩の“力”をお借りしたくて」"
        );
        appendPara("「……というと？」");
        story.appendChild(document.createElement("br"));
        appendPara(
            "私は今、自分が悩まされていることを先輩に打ち明け、元彼から毎日のように送られてくる人形の写真をスマホで見せた。"
        );
        appendPara("その瞬間、先輩の顔色がみるみる青ざめる。");
        story.appendChild(document.createElement("br"));
        appendPara("「っ……この人形は、まずい……」");
        appendPara(
            "そうつぶやくと、先輩は急に力が抜けたように椅子へ身を落とした。"
        );
        appendPara("「せ、先輩！？　大丈夫ですか？」");
        appendPara(
            "「……ごめん。大丈夫——だけど、これは……ランチどころじゃない」"
        );
        story.appendChild(document.createElement("br"));

        setChoices([
            { label: "霊能者を紹介してもらう", next: "4a", variant: "danger" },
            {
                label: "先輩にさらに写真を見せる",
                next: "4b",
                variant: "danger",
            },
        ]);
    } else if (key === "3b") {
        appendPara("私は一人で抱え込んでしまった。");
        story.appendChild(document.createElement("br"));
        appendPara("毎日届く、人形の写真。");
        appendPara(
            "『今日の○○ちゃんも可愛い♡』——そのお決まりの言葉が、友人や同僚、家族からまで届くようになった。"
        );
        appendPara(
            "ブロックしても、削除しても、必ず翌日には復活して届く。 まるで、逃げ場など最初から存在しないかのように。"
        );
        story.appendChild(document.createElement("br"));
        appendPara(
            "最初は「ただの悪戯だ」と自分に言い聞かせていた。 だが、日に日に心がすり減っていくのが分かった。 "
        );
        appendPara(
            "夜になると、枕元にあの人形と同じ姿の人が立っている幻を見る。目を閉じても、その微笑が瞼の裏に焼きついて離れない。"
        );
        appendPara(
            "そして夢の中では、元彼だけでなく、知り合いのすべてが人形に魅入られていく。気づけば、誰の瞳にも同じ虚ろな光が宿っていた。"
        );
        appendPara("そのうち私は眠ることすらできなくなった。");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("とうとう、SNSのフォロワー、フォローしている相手までもが全員⚪︎⚪︎ちゃんの写真をアイコンにし始めた。");
        appendPara("投稿内容も○○ちゃんの話題ばかり。");  
        appendPara("やがて「○○ちゃんメイク」が流行し、街には○○ちゃんと同じ格好をした人々が、次々と現れるようになった。");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("___ある朝、気づけば私は真っ白な病室のベッドの上にいた。");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara(
            "「疲れが限界を超えて、発作のように倒れたんですよ」と医師は言った。"
        );
        appendPara("その日から私は、この病院から出られなくなった。");

        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara(
            "消灯時間を過ぎた深夜。 ナースコールの光がぼんやり瞬く病室で、私のスマホが震える。"
        );
        appendPara("画面に浮かんだのは、見慣れた一文。");

        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("――『今日の⚪︎⚪︎ちゃんも可愛い♡』");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("「……っ、あぁ、ああああああああああ――！！！」");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("喉が裂けるほどの音が出たのに、誰も来ない。");
        appendPara("代わりに、スマホの画面だけが、白く光り続けていた。");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("――『⚪︎⚪︎ちゃんと結婚したい。』");
        appendPara("――『⚪︎⚪︎ちゃんすごく美人だと思わない？』");
        appendPara("――『⚪︎⚪︎ちゃんっておしゃれでセンスあるよね。』");
        appendHtml("――『⚪︎⚪︎ちゃんってほんと癒される。<strong>そう思うよね？ねえ？</strong>』");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("私は反射的にスマホを握り、床に投げつけた。");
        appendPara("震えは止まらない。ひびの奥で画面がまた明滅し、あの文字列が割れたガラスに増殖するみたいに映り込む。");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendHtml("——『<strong>今日の○○ちゃんも可愛い♡</strong>』");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("その瞬間、病室の隅から、笑い声が聞こえた気がした。");
        story.appendChild(document.createElement("br"));
        appendPara("もう逃げ場はない。この真っ白な部屋が⚪︎⚪︎ちゃんで埋め尽くされる日もそう遠くはないはずだ。");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        hideChoices("我慢する"); // ← ここで選択肢を消す
        // バッドエンドへ遷移（別ページ）
        setTimeout(() => {
            window.location.href = "./bad_end.html";
        }, 55000);
    } else if (key === "4b") {
        appendPara("先輩の声は震えていた。");
        story.appendChild(document.createElement("br"));
        appendPara("「……念が……重すぎる……これ以上は……」");
        story.appendChild(document.createElement("br"));
        appendPara(
            "普通なら、ここでやめておくべきだったのだろう。 けれど私は焦っていた。 毎日届く人形の写真に耐えきれず、救いを求める気持ちが先走ってしまった。"
        );
        story.appendChild(document.createElement("br"));
        appendPara("「ほら、まだあるんです！見てください！」");
        appendPara(
            "次々とスマホの画面をスクロールし、人形の写真を先輩に見せつけた。"
        );

        appendPara("「やめろ……やめてくれ……！」");
        appendPara(
            "先輩は頭を抱え、椅子から転げ落ちるように床に座り込んだ。 顔は土気色に変わり、虚ろな目が天井を彷徨う。"
        );
        appendPara("「……ああ……入ってくる……こっちに……！」");
        appendPara(
            "低い叫び声とともに、先輩の視線がふっと私を外れた。 代わりにスマホの画面の中、人形の瞳と目が合った気がした。"
        );
        story.appendChild(document.createElement("br"));
        appendPara(
            "次の瞬間、先輩は意味不明の言葉を吐き続け、制御のきかない笑い声を漏らし始めた。 その姿に背筋が凍りつく。"
        );
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("――結局、先輩は精神を壊し、職場に戻ることはなかった。");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));

        story.appendChild(document.createElement("br"));
        hideChoices("先輩にさらに写真を見せる"); // ← ここで選択肢を消す
        setTimeout(() => {
            window.location.href = "./bad_end.html";
        }, 37000);}
    
    else if (key === "4a") {
        appendPara("先輩は額に手を当て、苦しそうに目を閉じていた。");
        appendPara("「先輩、本当に大丈夫ですか？」");
        story.appendChild(document.createElement("br"));
        appendPara(
            "「……ごめん。正直、これは俺の力じゃどうにもできない。 でも心当たりがある。」"
        );
        appendPara("「心当たり……？」");

        appendPara(
            "「知り合いに霊能者がいる。その人なら、この人形をどうにかできるかもしれない。」"
        );
        appendPara(
            "そう言って先輩は少し休んだ後、スマホを取り出し、連絡先を探し始めた。"
        );
        story.appendChild(document.createElement("br"));
        appendPara("「紹介してもらえますか？」");
        appendPara(
            "「もちろん。ただ、覚悟して。その為には元彼と人形にも一緒についてきてもらわないと……」"
        );
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));

        story.appendChild(document.createElement("br"));

        setChoices([
            { label: "やめておく", next: "5a", variant: "danger" },
            { label: "それでもお願いする", next: "5b", variant: "danger" },
        ]);
    } else if (key === "5a") {
        appendPara(
            "先輩が紹介してくれた霊能者は、「その人形と持ち主を直接見ないと、正確には分からない」と言った。 "
        );
        appendPara("つまり――元彼とあの人形を連れていかなければならない。");
        story.appendChild(document.createElement("br"));
        appendPara(
            "考えただけで全身が震えた。 人形を目の前に置くことも、ましてや元彼と一緒に出向くことなど到底できない。"
        );
        appendPara("「すみません……やっぱり今回は遠慮します」");
        appendPara(
            "私は怖さに負け、霊能者への依頼を断った。 先輩は何か言いたげだったが、結局それ以上強く勧めてはこなかった。"
        );
        story.appendChild(document.createElement("br"));
        appendPara(
            "それから私は、元彼から送られてくる人形の写真をただ無視し続けた。 "
        );
        story.appendChild(document.createElement("br"));
        appendPara(
            "――「今日の⚪︎⚪︎ちゃんも可愛い♡」 毎日同じ文面がスマホを埋め尽くし、未読の通知だけが増えていく。"
        );
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));

        appendPara("――そしてある夜。");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara(
            "仕事から帰宅すると、玄関の鍵は確かに閉めたはずなのに、家の中から物音がした。 恐る恐るドアを開けると、真っ暗な部屋の中、リビングの中央に元彼が座っていた。 その腕には、あの人形が大事そうに抱かれている。"
        );
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara(
            "「最近全然LINE見てくれないから、来ちゃったよ。この子、実物は写真よりもっと可愛いでしょ？"
        );
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendHtml("<strong>ねぇ、可愛いって言ってよ……。ねぇ……。ねぇ……。</strong>」");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));

        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara(
            "逃げようと後ずさった瞬間、背後で玄関の扉がバタンと閉まる音がした。"
        );

        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara(
            "―あの時、霊能者に会わせていれば、未来は変わっていたのだろうか。 もう確かめる術はない。"
        );

        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        hideChoices("やめておく"); // ← ここで選択肢を消す

        // バッドエンドへ遷移（別ページ）
        setTimeout(() => {
            window.location.href = "./bad_end.html";
        }, 32000);
    } else if (key === "5b") {
        appendPara("私は思い切って、元彼にメッセージを送った。");
        appendPara("――『霊能者に相談に行くから、人形と一緒に来てほしい』");
        story.appendChild(document.createElement("br"));
        appendPara("しばらくして返事が届く。");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("――『俺と⚪︎⚪︎ちゃんを引き離すつもりなんだろ。』");
        appendPara("――『最低だな。別れて正解だった』");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("もう元彼に未練はない。");
        appendPara(
            "それでも画面に浮かぶその理不尽な言葉に、胸がちくりと傷んだ。"
        );
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara(
            "週末、先輩と二人で紹介された霊能者のもとを訪ねた。 静かな部屋の中で、白い衣をまとった霊能者がゆっくりと顔を上げる。"
        );
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara(
            "「……本来なら、その人形を直接見なければどうにもできないのですが……」"
        );
        appendPara(
            "「元彼が、どうしても行きたくないって。連れてくるのは無理でした。」 "
        );
        appendPara("私が言うと、霊能者はしばらく黙り込んだ後、小さく頷いた。");
        story.appendChild(document.createElement("br"));
        appendPara(
            "「それならば、私のほうに動画を送っていただけませんか？映像からでも“念”を読み取れることがあります。」"
        );
        appendPara("「じゃあ、送りますね。」");
        story.appendChild(document.createElement("br"));
        appendPara(
            "私は震える指でスマホを操作し、元彼から昨夜送られてきた人形の動画を選んで霊能者に転送した。 送信完了の表示が出た直後、通知が再び震えた。"
        );
        appendPara("「……あれ？ もう一度、同じファイルが届いた……？」");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara(
            "画面には、まったく同じファイル名の動画が二つ並んでいた。 一つ目は“1:24”。 二つ目は“1:27”。"
        );
        appendPara("「どういうこと？何で複製ファイルが。」");
        appendPara(
            "私が思わず呟くと、隣で見ていた先輩が小さく息をのんで言った。"
        );
        appendPara("「そのビデオ、確認してみない？二つ、何が違うのか……」");
        appendPara("「えっ……」");
        appendPara(
            "「怖いなら、俺たちで確認するよ。特に3秒長いほうは、もしかしたら君は見ないほうがいいかもしれない」"
        );
        appendPara("「先輩……」");
        story.appendChild(document.createElement("br"));
        appendPara("すると霊能者が目を細め、低くつぶやいた。");
        appendPara("「映像の中で、誰かが……居座っているのかもしれませんね」");
        story.appendChild(document.createElement("br"));

        story.appendChild(document.createElement("br"));

        story.appendChild(document.createElement("br"));

        setChoices([
            { label: "この動画を3人で確認する", next: "6a", variant: "danger" },
            {
                label: "他の動画を先輩と確認する",
                next: "6b",
                variant: "danger",
            },
        ]);
    } else if (key === "6a") {
        appendPara(
            "一つ目の動画には、ただ人形が映し出されているだけだった。 映像の中で元彼が、「今日も⚪︎⚪︎ちゃん、可愛いね♡」と人形に語りかけていた。"
        );
        story.appendChild(document.createElement("br"));
        appendPara(
            "二つ目の動画を再生すると、最初の一分二十四秒は確かに全く同じ映像だった。 ボロボロの人形がソファに置かれ、じっとこちらを見ている。"
        );
        appendPara("「……やっぱり同じですよね？」");
        appendPara("そう言った直後、先輩が小さく叫んだ。");
        story.appendChild(document.createElement("br"));
        appendPara("「ま、待って！止めて！」");
        appendPara(
            "最後の三秒――。 映像が突如、砂嵐のようにざらついたノイズに覆われた。 耳をつんざくような「ザザッ」という音が響き、画面が激しく揺れる。"
        );
        appendPara(
            "次の瞬間、画面いっぱいに人形の顔が映し出された。 片目の空洞が、まるで画面のこちら側を覗き込むように、じわりと迫ってくる。"
        );
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));

        appendPara("「……ひっ！」");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara(
            "私が思わずスマホを取り落とした瞬間――。 砂嵐の奥から、掠れた低い声がはっきりと聞こえた。"
        );
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendHtml("『<strong>……邪魔するな……</strong>』");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("心臓が激しく脈打ち、私は息を呑んだ。 これは、人形の声……");

        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara(
            "「今すぐにでもお祓いをしたほうがいい。彼が来ないのなら、こちらから彼のもとへ突撃しましょう」 霊能者はそう言った。"
        );
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara(
            "その日を境に、元彼からのメッセージは一切届かなくなった。 不思議なことに、これまで受け取っていたメッセージや動画はすべて消え、家で起きていた怪奇現象もぴたりと止んだ。"
        );

        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara(
            "後日、私と先輩、そして霊能者の三人で、元彼には何も知らせずにアパートを訪ねた。"
        );

        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("「……え？ 引っ越した？」");

        story.appendChild(document.createElement("br"));
        appendPara("すでに部屋は退去済みで、彼の姿はどこにもなかった。 ");
        appendPara(
            "行方はわからない。ただひとつ確かなのは――今もどこかで人形と一緒にいる、ということだけだった。"
        );
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara(
            "ちょうどその頃、元彼のお母さんから一通のメールが届いた。 「息子がどこにいるのか分からない」とのことだった。"
        );
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara(
            "私たちは彼の行方を探すために、ビラを作って配ることにした。 ところが、その準備をしている時に、ふと気づいてしまった。"
        );
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));

        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("「あれ……人形の名前って、なんだったっけ？」");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara(
            "毎日のように元彼から嫌になるほど聞かされていたはずなのに、どうしても思い出せない。 すんなり耳に入っていたくらいだから、きっと特別な名前ではなく、一般的な名前だったのだろう。"
        );
        appendPara(
            "「⚪︎⚪︎ちゃん、今日も可愛い」――わかりやすい彼の口癖。なのに肝心の名前が思い出せない。"
        );
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara(
            "先輩や霊能者の方にも尋ねてみた。だが、誰一人として人形の名前を覚えてはいなかった。"
        );
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        hideChoices("この動画を3人で確認する"); // ← ここで選択肢を消す
        // nomalエンドへ遷移（別ページ）
        setTimeout(() => {
            window.location.href = "./nomal_end.html";
        }, 60000);
    } else if (key === "6b") {
        appendPara(
            "もしかすると、他の動画でも同じ現象が起きているのかもしれない……。"
        );
        appendPara(
            "昨夜他に送られてきた動画を再生すると、そこには薄暗く荒れ果てた部屋が映っていた。"
        );
        appendPara("「その動画はさっきとはまた別のもの？」");
        appendPara("「はい。他の動画はどうなのか、ふと気になって」");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara(
            "先ほどと同様にその動画を霊能者に送ると、今度は別の動画が1つだけ届いた。"
        );
        story.appendChild(document.createElement("br"));
        appendPara(
            "その動画を再生すると、時折ブツブツと何か言っているのが聞こえた。 "
        );
        story.appendChild(document.createElement("br"));
        appendPara("「……に……たの？」");
        story.appendChild(document.createElement("br"));
        appendPara("「ねぇ……に……たの？」");
        story.appendChild(document.createElement("br"));
        appendPara("「……ねぇ、どこにいっちゃったの？」");
        story.appendChild(document.createElement("br"));
        appendPara("「なんだ、こんなところにいたんだね…」");

        story.appendChild(document.createElement("br"));

        appendPara("それは元彼の声だった。そして、ここからトーンが一変した。");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("「え？」");
        story.appendChild(document.createElement("br"));
        appendPara("「なんでそんなに怒ってるの？」");
        story.appendChild(document.createElement("br"));
        appendPara("「いやだよ、そんなに怒らないでよ」");
        story.appendChild(document.createElement("br"));
        appendPara("「俺が悪かったよ。」");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("…");

        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("…");

        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("ごめんなさい");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("ごめんなさい");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara(
            "ごめんなさいごめんなさいごめんなさいごめんなさいごめんなさいごめんなさいごめんなさいごめんなさいごめんなさいごめんなさいごめんなさいごめんなさいごめんなさいごめんなさいごめんなさいごめんなさいごめんなさいごめんなさいごめんなさい…"
        );
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("元彼は気が狂ったようにごめんなさいを繰り返す。");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));

        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara(
            "部屋の真ん中に座っていた人形が、1人で立ち上がり、ゆっくりと視線が動き、画面越しに私たちと目が合った。"
        );
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara(
            "元彼の叫び声は、人形がこっちに向かって飛び込んで来たのと同時に響き渡る。"
        );
        story.appendChild(document.createElement("br"));
        appendPara("「ぎゃっ！！」思わずスマホを落としてしまった。");
        story.appendChild(document.createElement("br"));
        appendPara(
            "そして動画はここで終わったはずだった。が、自動的にリピート再生された。"
        );
        appendPara("そして、最後のシーン。まだ続きがあったのだ。");
        story.appendChild(document.createElement("br"));

        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendHtml("「<strong>____どうして助けてくれなかったんだよ。</strong>」");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));

        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("元彼の苦しげな声に、私は凍りついた。");
        story.appendChild(document.createElement("br"));
        setChoices([
            { label: "元彼に連絡する", next: "7a", variant: "danger" },
            {
                label: "先輩に家まで送ってもらう",
                next: "7b",
                variant: "danger",
            },
        ]);
    } else if (key === "7a") {
        appendPara(
            "慌てて元彼に電話したが、繋がらない。メッセージも既読にならなかった。"
        );
        story.appendChild(document.createElement("br"));
        appendPara("その日は何もできることはなく、帰宅した。");
        appendPara("元彼のことを考えると、とても複雑な気分になった。");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("数日後、私は霊能者から連絡を受けた。");
        story.appendChild(document.createElement("br"));
        appendPara(
            "「元彼さんが、自ら人形を送ってきました。お祓いは無事に済みましたよ」"
        );
        story.appendChild(document.createElement("br"));
        appendPara(
            "その知らせの直後、元彼から電話があった。 声は落ち着いていて、以前の彼そのものだった。"
        );
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));

        appendPara(
            "「……あの人形はもういない。やっと頭の中が静かになったんだ」"
        );
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("そして、少し間を置いて彼は言った。 ");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara(
            "「……本当に迷惑をかけた。もし許してくれるなら……もう一度やり直したい」"
        );
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara(
            "胸の奥が熱くなる。恐怖もあったけれど、それ以上に"
        );
        appendPara("“彼が自分の意思で闇を断ち切った”ことへの安堵が勝った。");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara(
            "「すぐには良い返事はできない……でも、また話そう」 私はそう答えた。"
        );

        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("人形は霊能者によって完全に祓われ、怪異は収まり、元彼は正気を取り戻した。");
        appendPara("いつか、私たちの関係も再び繋がる日が来るのかもしれない。");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("ただ――あの人形の笑みだけは、心の奥で消えてはいなかった。");

        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));

        hideChoices("元彼に連絡する"); // ← ここで選択肢を消す
        // ハッピーエンドへ遷移（別ページ）
        setTimeout(() => {
            window.location.href = "./fukuen_end.html";
        }, 45000);
    } else if (key === "7b") {
        appendPara(
            "恐怖の動画を見終えた後、私は震える手を隠しながら、先輩に家まで送ってもらった。"
        );

        appendPara(
            "夜道を歩く間、先輩は何度も「大丈夫だから」と声をかけてくれた。"
        );
        story.appendChild(document.createElement("br"));
        appendPara("その優しさに、胸の奥がじんわり温かくなる。");
        story.appendChild(document.createElement("br"));
        appendPara("玄関先で別れる時、ふと沈黙が訪れた。");
        story.appendChild(document.createElement("br"));
        appendPara(
            "ほんの一瞬だけ、お互いに目を合わせて……どこか、いい雰囲気が流れた気がした。"
        );
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));

        appendPara(
            "数日後、元彼から急に荷物が届いた。 一人では開ける勇気がなく、また先輩に頼んで一緒に確認してもらうことにした。"
        );
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("箱を見るなり先輩が一言言った。");
        appendPara("「これは開けないほうがいい。中身は人形だ。」");
        appendPara("「えっ……」");
        appendPara("「霊能者のところへ持っていこう。」");
        story.appendChild(document.createElement("br"));
        appendPara("霊能者の元へ二人で行きお祓いを依頼した。先輩の言う通り、やはり中身は人形だった。");
        appendPara("その後人形は浄化され、それ以降怪異は起こらなくなった。");

        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("数日後、改めて先輩にお礼を伝えるためにランチへ誘った。");
        appendPara(
            "「この前は本当にありがとうございました。今日は私が奢りますから」"
        );

        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("テーブル越しに、先輩が少し照れたように笑う。 ");
        appendPara("「じゃあ、遠慮なくご馳走になるよ」");

        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("穏やかな昼下がり、緊張よりも心地よさが勝っていた。 ");
        appendPara("人形の恐怖は消え去り、代わりに____");
        appendPara("先輩との距離が少しずつ近づいているのを私ははっきりと感じていた。");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("怪異は終わりを告げ、日常が戻った。");
        appendPara(
            "そして、私と先輩の間には新しい関係の芽が、静かに育ち始めていた。"
        );
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        hideChoices("先輩に家まで送ってもらう"); // ← ここで選択肢を消す
        // ハッピーエンドへ遷移（別ページ）
        setTimeout(() => {
            window.location.href = "./happy_end2.html";
        }, 40000);
    } 
    }
);
