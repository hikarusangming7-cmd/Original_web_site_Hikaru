const story = document.getElementById("story");
const choices = document.querySelector(".choices");

// 段落を追記する小関数
function appendPara(text) {
    const p = document.createElement("p");
    p.textContent = text;
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
    { label: "お店に戻り二人に声をかける", next: "1", variant: "danger" },
    { label: "先輩に聞いてみる", next: "2", variant: "danger" },
]);

// クリックを一箇所で受ける（イベント委譲：動的生成に強い）
choices.addEventListener("click", (e) => {
    const btn = e.target.closest(".choice");
    if (!btn) return;
    const key = btn.dataset.next;

    if (key === "1") {
        // 1つ目の選択：追記 → 改行 → さらに追記 → 次の選択肢を生成
        appendPara(
            "私は気になって仕方がなくなり、もう一度お店へ引き返した。"
        );
        
        appendPara(
            "あの二人が一緒にいる理由を、どうしても確かめたかった。"
        );
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("しかし――そこに、二人の姿はなかった。");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("席はきれいに片づけられ、まるで最初から誰も座っていなかったかのように、テーブルの上には何ひとつ残されていなかった。");
        appendPara("胸の奥に、冷たい不安が滲む。");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("「……もう帰ろう。」");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("そう呟き、店を出て駅の方へ歩きかけたときだった。");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("――見えた。");
        story.appendChild(document.createElement("br"));
        appendPara("少し離れた通りの向こうに、先輩と元彼の後ろ姿があった。");
        
        appendPara("二人は並んで歩きながら、どこかに向かっている。");
        story.appendChild(document.createElement("br"));
        appendPara("私は思わず物陰に身を潜め、そのまま静かに後をつけた。");
        story.appendChild(document.createElement("br"));
        appendPara("街灯の届かない細い路地を抜け、二人は古びた建物の前で立ち止まった。");
        
        appendPara("看板はなく、ガラス窓には黒い布がかけられている。");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("――ここ、なに……？");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("二人はためらうことなく中へと入っていった。");


        // 新しい選択肢を生成
        setChoices([
            {
                label: "中の様子を覗き込む",
                next: "1a",
                variant: "danger",
            },
            { label: "見なかったことにして引き返す", next: "1b", variant: "danger" },
        ]);
    } else if (key === "1a") {
        appendPara(
            "私は鼓動を押さえながら、そっと建物の壁沿いを回り込み、窓の隙間から中を覗き込もうとした。"
        );
        hideChoices("中の様子を覗き込む"); // ← ここで選択肢を消す
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("その瞬間――");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("ぐい、と腕を掴まれた。");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("「っ……！」");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("強い力に引きずられ、暗闇の中へと倒れ込む。");
        story.appendChild(document.createElement("br"));
        appendPara("床に手をつき、顔を上げた瞬間、息が止まった。");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("室内は、無数のろうそくの明かりで淡く照らされていた。");
        story.appendChild(document.createElement("br"));
        appendPara("壁一面に日本人形が並び、どれもが同じ方向を見ている。");
        story.appendChild(document.createElement("br"));
        appendPara("虚ろな瞳が、静かにこちらを見つめていた。");
        story.appendChild(document.createElement("br"));
        appendPara("そしてその中央には――");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("あの人形がいた。");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("片目の取れた、あの“⚪︎⚪︎ちゃん”。");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("あの忌まわしい夜の、すべての始まり。");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("私は思わず後ずさった。");
        story.appendChild(document.createElement("br"));
        appendPara("「どうして……ここに……」");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("その時、背後から両腕を掴まれた。");
        story.appendChild(document.createElement("br"));
        appendPara("振り返ると、そこには――先輩がいた。");
        story.appendChild(document.createElement("br"));
        appendPara("無表情で、瞳の奥に光がない。");
        story.appendChild(document.createElement("br"));
        appendPara("口を開くこともなく、ただ私を見つめている。");
        story.appendChild(document.createElement("br"));
        appendPara("その姿は、生きている人間というより、何か“別のもの”のように見えた。");
        story.appendChild(document.createElement("br"));
        
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("「や、やめて……っ！」");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("もがこうとしても、体はまるで他人のもののように動かない。");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("蝋燭の炎が一斉に揺れ、部屋の奥から、足音がゆっくりと近づいてくる。");
        story.appendChild(document.createElement("br"));
        appendPara("いつのまにか、周囲には人影が増えていた。");
        story.appendChild(document.createElement("br"));
        appendPara("人なのか、人形なのか――もう区別がつかない。");
        story.appendChild(document.createElement("br"));
        appendPara("「儀式の準備が整いました。」");
        story.appendChild(document.createElement("br"));
        appendPara("低い声が響く。");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));

        appendPara("その中央に立つのは――元彼だった。");
        story.appendChild(document.createElement("br"));
        appendPara("だが、もう彼ではなかった。");
        story.appendChild(document.createElement("br"));
        appendPara("白い法衣をまとい、異様な笑みを浮かべたその姿は、“教祖”そのものだった。");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("あの懐かしい笑顔は、私の記憶が作り出した、もう二度と戻らない彼の幻だったのだろうか。");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("「ようこそ、“⚪︎⚪︎ちゃん”のもとへ。」");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("その声を聞いた瞬間、全身の血が凍りついた。");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("そして――");
        appendPara("新たな悪夢が、静かに幕を開けた。");

        // バッドエンドへ遷移（別ページ）
        setTimeout(() => {
            window.location.href = "./bad_end3.html";
        }, 50000);
    } else if (key === "1b") {
        appendPara(
            "建物に二人が入っていくのを見たけれど、私は何も見なかったことにして、そのまま家へ帰った。"
        );
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("――あの夜、見なかったことにした自分を、今になって責めずにはいられない。");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("翌日から、先輩の姿を誰も見かけなくなった。");
        story.appendChild(document.createElement("br"));
        appendPara("最初は「体調でも崩したのだろう」と、みんな軽く口にしていた。");
        story.appendChild(document.createElement("br"));
        appendPara("だが、何日経っても連絡が取れず、先輩の両親が警察に捜索願を出したことで、職場は一気に騒然となった。");
        story.appendChild(document.createElement("br"));
        appendPara("警察は社員ひとりひとりに事情を聞き始めた。");
        story.appendChild(document.createElement("br"));
        appendPara("私はずっと、あの夜に見た“二人の姿”を話すか迷っていた。");
        appendPara("話せば何かが変わるかもしれない。");
        appendPara("けれど――話してはいけない気がしていた。");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("時間が経つにつれて、周りの視線が少しずつ変わっていった。");
        appendPara("私と目が合うと、同僚たちは慌てて顔をそらし、陰でひそひそと何かを囁く。");
        appendPara("その視線は、心配というより――疑いに近かった。");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("ある日の午後、ついに警察から呼び出しがあった。");
        appendPara("狭い取調室で、刑事が私をまっすぐ見つめて言った。");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("「――あの日の夜、あなたが先輩を尾行していたという証言があります。」");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("一瞬、呼吸が止まった。");
        story.appendChild(document.createElement("br"));
        appendPara("そんなはずはない。けれど、言葉が出てこなかった。");
        appendPara("私が何かを弁解しようとしたその時、ドアがノックされ、刑事の背後から別の警官が顔を出した。");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("「証人が到着しました。」");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("ゆっくりと入ってきたのは――元彼だった。");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("「彼女は何も悪くありません。」");        
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("穏やかにそう言い、私の方を振り返って微笑んだ。");
        appendPara("懐かしいはずのその笑顔に、息が詰まった。");
        appendPara("笑っているのに、目だけが笑っていない。");
        story.appendChild(document.createElement("br"));
        appendPara("いや、違う――見透かされている。");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("彼は続けた。");
        story.appendChild(document.createElement("br"));
        appendPara("「その夜、僕も近くにいました。彼女が先輩を追うようなことはしていません。保証します。」");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("警察は一瞬、空気が緩むように頷いた。");
        story.appendChild(document.createElement("br"));
        appendPara("私は助かった――そう思ったのも束の間だった。");
        story.appendChild(document.createElement("br"));
        appendPara("視線が絡んだ瞬間、背筋に冷たいものが走った。");
        story.appendChild(document.createElement("br"));
        appendPara("その瞳の奥には、あの“夜”と同じ闇が潜んでいた。");    
        story.appendChild(document.createElement("br"));    
        story.appendChild(document.createElement("br"));
        appendPara("どうしてここに……。");
        story.appendChild(document.createElement("br"));
        appendPara("どうして、彼が“あのこと”を知っているの……？");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("彼はゆっくりと近づき、耳元で囁いた。");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("「ねぇ……ちゃんと見てたんでしょ？ あの夜、僕と先輩のこと。」");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("心臓が凍りつく。");
        story.appendChild(document.createElement("br"));
        appendPara("声を出そうとしても、喉が固まって動かない。");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("「大丈夫。僕が守ってあげるから。」");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("――その言葉が、恐怖の合図だった。");     
        story.appendChild(document.createElement("br"));   
        appendPara("笑みの裏にあるものを、私は知っている。");
        story.appendChild(document.createElement("br"));
        appendPara("彼が“犯人”であることを、確かに分かってしまった。");
        story.appendChild(document.createElement("br"));
        appendPara("でも――証言してくれた彼に逆らえば、次に消えるのは私だ。");
        story.appendChild(document.createElement("br"));
        appendPara("その日から、私は彼の視線を避けられなくなった。");
        story.appendChild(document.createElement("br"));
        appendPara("彼の笑みが、檻のように私を閉じ込めていた。");
    //     // さらに分岐を増やしたい場合
    //     setChoices([
    //         { label: "電気を点ける", next: "1b-1", variant: "danger" },
    //         { label: "息を潜めて寝室へ", next: "1b-2", variant: "danger" },
    //     ]);
    // } else if (key === "1b-1") {
    //     appendPara(
    //         "光が弾け、ソファには空の袋だけ。だけど、壁の影は三つあった。"
    //     );
        hideChoices("見なかったことにして引き返す"); // ← ここで選択肢を消す
        setTimeout(() => {
            window.location.href = "./bad_end2.html";
        }, 50000);
    // } else if (key === "1b-2") {
    //     appendPara(
    //         "寝室のドアノブが、外から「回された」。次の瞬間、頬に冷たい布が触れた。"
    //     );
    //     hideChoices("息を潜めて寝室へ"); // ← ここで選択肢を消す
    //     setTimeout(() => {
    //         window.location.href = "./bad_end2.html";
    //     }, 5000);
    } else if (key === "2") {
        // 「先輩に聞いてみる」ルート
        appendPara(
            "先輩に聞いてみよう。明日、直接職場で。"
        );
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("次の日。");
        appendPara("出社して少ししてから、私は思い切って先輩に声をかけた。");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("「先輩、今日ごはん行きませんか？ 私がおごります。」");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("一瞬、先輩の表情がわずかに揺れた。");
        story.appendChild(document.createElement("br"));
        appendPara("けれどすぐに、いつもの穏やかな笑みを浮かべて頷いた。");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("「いいよ。……でも、俺が払うから大丈夫。」");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("「何か用事でもあったんですか？」");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("「ううん。行こう。」");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("それだけ言って、先輩は話を切り上げた。");
        story.appendChild(document.createElement("br"));
        appendPara("どこか、いつもより静かな笑顔だった。");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("退社後、私たちは職場近くの小さな食堂に入った。");
        story.appendChild(document.createElement("br"));
        appendPara("温かな湯気と出汁の香りに包まれながら、少しだけ緊張が和らいでいく。");
        story.appendChild(document.createElement("br"));
        appendPara("食事が運ばれてきたころ、先輩がふとこちらを見た。");
        story.appendChild(document.createElement("br"));
        appendPara("「それにしても、どうしてまた俺の分を払おうとするの？」");
        story.appendChild(document.createElement("br"));
        appendPara("「私が誘いましたし……相談というか、聞きたいことがあって。」");
        story.appendChild(document.createElement("br"));
        appendPara("「どうかした？また心霊現象？」");
        story.appendChild(document.createElement("br"));
        appendPara("「……昨日、見てしまったんです。先輩と元彼が一緒にいるところを。」");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("箸を持つ先輩の手が、わずかに止まった。");
        story.appendChild(document.createElement("br"));
        appendPara("「……！」");
        story.appendChild(document.createElement("br"));
        appendPara("「二人はどういう関係で、どうして一緒にいたのか知りたくて。」");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("少しの沈黙のあと、先輩は小さく息をついた。");
        story.appendChild(document.createElement("br"));
        appendPara("「……それは、ちょっと話せないな。」");
        story.appendChild(document.createElement("br"));
        appendPara("「どうしてですか？私に言えないことですか？」");
        story.appendChild(document.createElement("br"));
        appendPara("先輩は嘘がつけない人だ。");
        appendPara("その視線の揺れが、すべてを物語っていた。");
        story.appendChild(document.createElement("br"));
        appendPara("「いや、守秘義務があるし……」");
        story.appendChild(document.createElement("br"));
        appendPara("「先輩のことは信じてます。でも……あんなことがあったので、正直怖くて。」");
        story.appendChild(document.createElement("br"));
        appendPara("「大丈夫。君が怖がるようなことは、もう起きないから。」");
        story.appendChild(document.createElement("br"));
        appendPara("静かで、どこか悲しげな声だった。");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("「じゃあ、先輩は以前から元彼と知り合いだったんですか？」");
        appendPara("「いや……一週間くらい前かな。」");
        appendPara("「どういう経緯で？」");
        appendPara("「……詳しくは、元彼さんに直接聞いてほしい。」");
        story.appendChild(document.createElement("br"));
        appendPara("どうやら、それ以上話すつもりはないようだった。");
        story.appendChild(document.createElement("br"));
        appendPara("けれど私は引き下がれなかった。");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("「私が元彼に連絡しづらいの、先輩も知ってるでしょう？」");
        appendPara("「うん……でも、俺が会った感じだと、彼、全然普通だったよ。君から聞いてた話とはまるで別人みたいでさ。」");
        story.appendChild(document.createElement("br"));
        appendPara("「付き合ってた頃は、確かにあんな優しい人だったんです。」");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("少しの沈黙。");
        story.appendChild(document.createElement("br"));
        appendPara("そのあと、私はふと気づいて口を開いた。");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("「でも、先輩。昨日会った時点で、相手が私の元彼だってわかってたってことですよね？私と元彼の話……しましたか？」");
        story.appendChild(document.createElement("br"));
        appendPara("先輩は言葉を詰まらせ、頭をかいた。");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("「……まいったな。」");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("そして、ゆっくりと顔を上げた。");
        story.appendChild(document.createElement("br"));
        appendPara("「元彼さんね、君に“申し訳ない”って言ってた。謝りたいけど、連絡していいのか分からないって。また怖がらせてしまうんじゃないかって……その相談を受けてたんだ。」");
        story.appendChild(document.createElement("br"));
        appendPara("「……そう、だったんですか。」");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("胸の奥が、少しだけざわめいた。");
        appendPara("恐怖と、懐かしさと、言葉にならない感情が混ざり合う。");
        story.appendChild(document.createElement("br"));
        appendPara("「よかったら、連絡してあげて。」");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("そう言って、先輩はどこか困ったように笑った。");
        story.appendChild(document.createElement("br"));
        appendPara("その笑みには優しさが滲んでいた。");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("そんな先輩に、なぜか胸の奥が、そっと締めつけられた。");

        setChoices([
            { label: "先輩に遠回しに好意を伝える", next: "2a", variant: "danger" },
            { label: "元彼に連絡する", next: "2b", variant: "danger" },
        ]);
    } else if (key === "2a") {
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara(
            "「先輩、なんだか今日、元気ないですね。どうしたんですか？」"
        );
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("「そんなことないけど……そう見える？」");
        story.appendChild(document.createElement("br"));
        appendPara("「見えますよ。いつも先輩のこと見てるから、元気ないのくらいすぐわかります。」");
        story.appendChild(document.createElement("br"));
        appendPara("「えっ……」");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("少し驚いたように、先輩が目を瞬かせる。");
        appendPara("その反応に、なぜだか胸の奥が熱くなった。");
        story.appendChild(document.createElement("br"));
        appendPara("「先輩、もしかして……私と元彼を、くっつけようとしてます？」");
        story.appendChild(document.createElement("br"));
        appendPara("「それは……」");
        story.appendChild(document.createElement("br"));
        appendPara("一瞬言葉を探すように目を伏せてから、先輩は静かに言った。");
        story.appendChild(document.createElement("br"));
        appendPara("「彼は良い人だと思うし。それに、あんなことさえなければ……君はきっと今ごろ、彼と幸せに暮らしていたんじゃないかと思って。」");
        story.appendChild(document.createElement("br"));
        appendPara("「……余計なお世話です。」");
        story.appendChild(document.createElement("br"));
        appendPara("思わず、声が少し強くなった。");
        appendPara("先輩の言葉に、どうしようもなく苛立ちがこみ上げた。");
        story.appendChild(document.createElement("br"));
        appendPara("「もう終わってますし、それに私にもし、他に気になる人がいたらとか、考えないんですか？」");
        story.appendChild(document.createElement("br"));
        appendPara("「........」");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("先輩は何も答えてくれなかった。");
        story.appendChild(document.createElement("br"));
        appendPara("それきり、二人の間に沈黙が落ちた。");
        appendPara("会話の糸が途切れたまま、湯気の立つ茶碗の音だけが静かに響く。");
        story.appendChild(document.createElement("br"));
        appendPara("やがて、ぎこちないまま会計を済ませ、私たちは短く別れの言葉を交わした。");
        story.appendChild(document.createElement("br"));
        appendPara("――どちらからともなく、少し距離を取るように。");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
                setChoices([
            { label: "元彼に連絡する", next: "2b", variant: "danger" },
            { label: "部屋でビールでも飲もう", next: "3b", variant: "danger" },
        ]);
    }
    //     hideChoices("今すぐ荷造りする"); // ← ここで選択肢を消す
    //     setTimeout(() => {
    //         window.location.href = "./bad_end2.html";
    //     }, 5000);
    // }

    if (key === "2b") {
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara(
            "先輩と別れた帰り道、秋の夜風がやけに冷たく感じた。"
        );
        appendPara("街の灯りのひとつひとつが滲んで見える。");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("――どうしてだろう。");
        appendPara("会話の中に、どこか引っかかるものがあった。");
        appendPara("優しいのに、少し距離を置かれているような、そんな感覚。");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("胸の奥がざらつく。");
        appendPara("なんでもないふりをして笑っていたけれど、心の中では、ずっと何かが渦を巻いていた。");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("「……疲れたな。」");
        story.appendChild(document.createElement("br"));
        appendPara("ぽつりと呟いて、帰り道のコンビニの灯りを横目に通り過ぎた。");
        appendPara("家に着くころには、時計の針はもう日付を越えていた。");
        story.appendChild(document.createElement("br"));
        appendPara("部屋の灯りをつけ、靴を脱ぐ。");
        appendPara("静まり返った空間に、自分のため息だけが響いた。");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("気づけば、スマホを手に取っていた。");
        appendPara("無意識のうちに――彼の名前を検索していた。");
        story.appendChild(document.createElement("br"));
        appendPara("最後にやり取りしたメッセージが表示される。");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("大丈夫……");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("「元気にしてますか？」");
        story.appendChild(document.createElement("br"));
        appendPara("送信ボタンを押す直前、指が震えた。");
        appendPara("それでも、もう止まらなかった。");
        story.appendChild(document.createElement("br"));
        appendPara("――送信。");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("胸が高鳴る。後悔と期待が入り混じる。");
        story.appendChild(document.createElement("br"));
        appendPara("数分後、画面がふっと光った。");
        story.appendChild(document.createElement("br"));
        appendPara("「久しぶりだね。……君から連絡くれるなんて思わなかった。」");
        story.appendChild(document.createElement("br"));
        appendPara("目を疑った。");
        story.appendChild(document.createElement("br"));
        appendPara("まるで、あの頃のままの優しい文面。");
        appendPara("息が詰まるほど懐かしかった。");
        story.appendChild(document.createElement("br"));
        appendPara("「いきなりごめんなさい。元気かなって、ふと思って。」");
        appendPara("「元気だよ。君は？」");
        appendPara("「なんとか。最近ようやく、少し落ち着いてきました。」");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("少しずつ、ぎこちない距離が解けていく。");
        appendPara("画面の中の文字が、心をあたためていくようだった。");
        appendPara("けれど、それだけでは足りなかった。");
        appendPara("言葉の奥にある「声」が、どうしても聞きたくなってしまった。");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("「……今、少しだけ話せる？」");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("そう送ると、ほんの数秒後にスマホが震えた。");
        appendPara("ディスプレイに浮かぶ懐かしい名前。");
        appendPara("心臓が跳ねる音が、自分でもうるさいほど響く。");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("通話ボタンを押す。");
        appendPara("耳にあの声が届いた瞬間、時間が逆戻りしたようだった。");
        story.appendChild(document.createElement("br"));
        appendPara("「……ひさしぶり。」");
        appendPara("「……うん、ひさしぶり。」");
        story.appendChild(document.createElement("br"));
        appendPara("たったそれだけの言葉で、胸がいっぱいになった。");
        appendPara("電話越しの彼は、穏やかで、どこか申し訳なさそうに笑っていた。");
        story.appendChild(document.createElement("br"));
        appendPara("「君の声、変わってないね。」");
        appendPara("「そっちこそ。……少し落ち着いた声になった気がします。」");
        appendPara("「まあ、色々あったからね。」");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("少しの沈黙。");
        appendPara("その沈黙さえ、懐かしかった。");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("「ねぇ、あの湖、覚えてる？」");
        appendPara("「え？」");
        appendPara("「星が綺麗なところ。……君、前に言ってたじゃない。“もしプロポーズされるなら、あの場所がいい”って。」");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("胸の奥がきゅっと痛んだ。");
        appendPara("忘れてほしかったのに、忘れられていなかった。");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("「そんなこと、言ってたね……。」");
        appendPara("「ちゃんと覚えてるよ。あの夜、君が星を見上げながら笑ってたの、いまだに目に浮かぶ。」");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("その声は、優しくて、少し哀しくて。");
        appendPara("涙が出そうになるのを必死にこらえた。");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("「もうすぐ誕生日でしょ。」");
        appendPara("「……はい。」");
        appendPara("「今年は、二人であの湖に行かないか？またあの星を、一緒に見たいんだ。」");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("その提案は、心の奥を静かに揺らした。");
        appendPara("行きたい。");
        appendPara("でも、怖い。");
        appendPara("まだ早いんじゃない？今日久しぶりに連絡をとったばかりなのに。");
        story.appendChild(document.createElement("br"));
        appendPara("だけど――声の温度に、抗えなかった。");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("いや、そうじゃない――元彼が、私の誕生日や昔のことをちゃんと覚えてくれていたことが嬉しくてたまらなかったのだ。");
        story.appendChild(document.createElement("br"));
        appendPara("「……いいですよ。」");
        appendPara("「本当？」");
        appendPara("「ええ。二人で行きましょう。」");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("電話の向こうで、彼が小さく息を吐いたのがわかった。");
        appendPara("安堵とも、微笑ともつかない吐息。");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("「ありがとう。じゃあ、決まりだね。」");
        appendPara("「はい。……楽しみにしてます。」");
        story.appendChild(document.createElement("br"));
        appendPara("通話が終わる直前、彼がぽつりと呟いた。");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("「今度こそ、ちゃんとやり直せる気がするよ。」");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("受話口からこぼれたその言葉に、胸の奥がふっと熱くなった。");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("懐かしい声。優しい響き。");
        story.appendChild(document.createElement("br"));
        appendPara("でも――展開が少し早すぎて、心が追いつかない。");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("私はまだ、“やり直す”という言葉の意味を見つけられずにいる。");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("彼はきっと、本気でそう思ってくれている。");
        appendPara("それがわかるからこそ、怖かった。");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("通話が途切れたあとも、耳の奥に彼の声が残っていた。");
        appendPara("それはまるで、夜の静寂に溶ける呪文のようで、やさしく包み込みながらも、どこか遠くへ導かれていくようだった。");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("スマホの画面が暗くなり、そこに映る自分の顔を見つめる。");
        appendPara("期待と不安が、静かに揺れていた。");
        story.appendChild(document.createElement("br"));

        story.appendChild(document.createElement("br"));
          setChoices([
            { label: "楽しもう", next: "3a", variant: "danger" },
            { label: "先輩と話そう", next: "4a", variant: "danger" },
        ]);
    }
    //先輩に謝らなきゃを選ぶと、先輩が助けに来てくれる。先輩とハッピーエンドか、先輩と元彼がバチバチになるエンド。当日が楽しみにすると、湖を間違えていることに気づかない。元彼が助けてくれるが、元彼とハッピーエンドか、元彼がヒロインを助けて亡くなってしまうバッドエンド（ヒロインに抱きしめられている画像つき）になる。


       

    if (key === "3a") {
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara(
            "数日が経ち、私の誕生日がやってきた。"
        );
        appendPara("一年前とは違う、少しだけ特別な日。");
        appendPara("彼とまた笑い合えるかもしれない――そんな淡い期待を胸に、私は湖へ向かう支度を始めた。");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("車の窓の外で、街の灯りがひとつ、またひとつと遠ざかっていく。");
        appendPara("夜の闇に包まれた山道を、ヘッドライトの光だけが細く切り裂いていた。");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("「この道を抜けたら、星映湖に着くはずだよ。」");
        appendPara("運転席の彼が微笑む。");
        appendPara("その横顔は懐かしくて、どこか儚い。");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("久しぶりに会った彼は、穏やかな表情の奥に、かすかな強さを宿していた。");
        appendPara("私も自然と笑っていた。");
        appendPara("まるで、あの頃のまま――同じ空気を分け合っているようだった。");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("「なんか……夢みたい。」");
        appendPara("「だね。こうしてまた、一緒にドライブしてるなんて。」");
        appendPara("彼は小さく笑い、フロントガラスの向こうに流れる星を見上げた。");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("ナビの信号は時折途切れ、地図は真っ暗になる。");
        appendPara("それでも、夜空の星々は確かにそこにあった。");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("やがて、森の奥で道がふいに開ける。");
        appendPara("月光に照らされた湖が、静かに揺れていた。");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("「着いた……ここ、星映湖だよね？」");
        appendPara("「うん、たぶん。」");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("二人で車を降りる。");
        story.appendChild(document.createElement("br"));
        appendPara("しかし、どこかがおかしかった。");
        appendPara("案内板も、ベンチもない。");
        appendPara("風は肌を刺すように冷たく、湖面には星が映っているはずなのに、覗き込むと黒い闇だけが広がっていた。");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("「……静かだね。」");
        appendPara("「うん。星が、少ない気がする。」");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("彼の声が夜気に溶けていく。");
        appendPara("そのとき――かすかな鈴の音が、水面の方から聞こえた。");
        story.appendChild(document.createElement("br"));
        appendPara("風ではない。");
        appendPara("祈りにも似た、低い声が混じっていた。");
        story.appendChild(document.createElement("br"));
        appendPara("ぞくり、と背筋に冷たいものが走る。");
        story.appendChild(document.createElement("br"));
        appendPara("「……今、何か聞こえなかった？」");
        appendPara("「え？何も。」");
        story.appendChild(document.createElement("br"));
        appendPara("振り返ると、彼は穏やかに微笑んでいた。");
        appendPara("その笑顔に安心しながらも、胸の奥では、言いようのない不安が渦を巻いていた。");
        story.appendChild(document.createElement("br"));
        appendPara("湖の縁に近づこうとした瞬間――");
        story.appendChild(document.createElement("br"));
        appendPara("足が、動かなくなった。");
        story.appendChild(document.createElement("br"));
        appendPara("体の感覚が遠のき、視界が白く霞んでいく。");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("湖面に、白い衣をまとった影が浮かび上がった。");
        story.appendChild(document.createElement("br"));
        appendPara("悲しげな尼僧。");
        appendPara("虚ろな瞳。");
        appendPara("水底から伸びる細い腕が、私の足をそっと掴んだ。");
        story.appendChild(document.createElement("br"));
        appendPara("「!!……っ」");
        story.appendChild(document.createElement("br"));
        appendPara("声にならない叫び。");
        appendPara("冷たい指先が足首を絡め、体が湖へと引きずり込まれていく。");
        appendPara("喉の奥まで、氷のような水が入り込んだ。");
        story.appendChild(document.createElement("br"));
        appendPara("――そのとき。");
        story.appendChild(document.createElement("br"));
        appendPara("強い力で腕を引かれた。");
        story.appendChild(document.createElement("br"));
        appendPara("「離すな！」");
        story.appendChild(document.createElement("br"));
        appendPara("彼の声が、闇を裂く。");
        appendPara("必死に私を抱きしめ、水面から引き上げてくれる。");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("「お願い、しっかりして！」");
        appendPara("「……だいじょうぶ……もう、大丈夫だから……。」");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("彼の手が震えている。");
        appendPara("私はどうにか陸に戻り、息を荒げながら彼の顔を見上げた。");
        story.appendChild(document.createElement("br"));
        appendPara("「ありがとう……助けてくれて……」");
        story.appendChild(document.createElement("br"));
        appendPara("そう言いかけて、言葉が喉で止まった。");
        story.appendChild(document.createElement("br"));
        appendPara("「君が……無事でよかった……。」");
        story.appendChild(document.createElement("br"));
        appendPara("血の気が、彼の顔からすべて消えていた。");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("「……ねぇ、どうしたの？ ねぇ！」");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("揺すっても、返事はない。");
        appendPara("腕の中の彼は、まるで深い眠りに落ちたように静かだった。");
        story.appendChild(document.createElement("br"));
        appendPara("月の光が頬を撫で、その影を淡く染めていく。");
        appendPara("閉じられた瞳は、二度と開かなかった。");
        story.appendChild(document.createElement("br"));
        appendPara("湖面の奥で、尼の影がこちらを見ていた。");
        appendPara("無表情に、ただ静かに。");
        story.appendChild(document.createElement("br"));
        appendPara("「なんてことを……！」");
        story.appendChild(document.createElement("br"));
        appendPara("声にならない嗚咽が、夜に溶けていった。");
        appendPara("抱きしめた彼の頬に、星の光がひとつこぼれ落ちる。");
        appendPara("それはまるで――星映湖に映る、彼の魂の名残のようだった。");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("それから、誰も“星映湖”への道を見つけることはできなかったという。");
        story.appendChild(document.createElement("br"));
        appendPara("あの日、私たちがたどり着いたのは、地図にも記されていない――");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("“静女ヶ淵（しずめがふち）”という名の、もうひとつの湖だった。");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        hideChoices("楽しもう"); // ← ここで選択肢を消す
        // バッドエンドへ遷移（別ページ）
        setTimeout(() => {
            window.location.href = "./bad_end4.html";
        }, 60000);




        // appendPara("");
        // appendPara("");
        // appendPara("");
        // appendPara("");
        // appendPara(
        //     "ここでは話しづらい内容だから、場所を変えて相談したかった。先輩はすぐに快く承諾してくれた。"
        // );
        // story.appendChild(document.createElement("br"));
        // story.appendChild(document.createElement("br"));
        // story.appendChild(document.createElement("br"));
        // appendPara("ーそしてランチへー");
        // story.appendChild(document.createElement("br"));
        // story.appendChild(document.createElement("br"));
        // story.appendChild(document.createElement("br"));
        // appendPara(
        //     "「すみません、無理にお誘いしちゃって。今日は私がご馳走しますから。」"
        // );
        // appendPara(
        //     "普段から遅くまで頑張っている先輩に、負担をかけるのは心苦しかった。だからせめてランチ代くらいは自分が払おうと思ったのだ。"
        // );
        // appendPara(
        //     "少し緊張していたけれど、先輩が柔らかくうなずいてくれたおかげで、ようやく胸の内を打ち明けられる気がした。"
        // );
        // story.appendChild(document.createElement("br"));
        // story.appendChild(document.createElement("br"));
        // story.appendChild(document.createElement("br"));
        // appendPara(
        //     "「この間の飲み会で、先輩が不思議な体験を話してくれたじゃないですか」"
        // );
        // appendPara("「ああ、あの時のことね。ごめん、怖がらせちゃったよね。」");
        // appendPara(
        //     "「いえ、怖かったですけど……正直、とても興味深くて楽しかったです。 それで、今日相談したいのは、その時の先輩の“力”をお借りしたくて。」"
        // );
        // appendPara("「え？」");
        // story.appendChild(document.createElement("br"));

        // appendPara(
        //     "私は今、自分が悩まされていることを先輩に打ち明けた。 そして、元彼から毎日のように送られてくる人形の写真をスマホで見せた。"
        // );
        // appendPara("その瞬間、先輩の顔色がみるみる青ざめた。");
        // appendPara("「……この人形は、ヤバい……」");
        // appendPara(
        //     "そうつぶやくと、先輩は急に力が抜けたように椅子に座り込んでしまった。"
        // );
        // appendPara("「せ、先輩！？大丈夫ですか？」");
        // appendPara("「……強い……強すぎる念が……確かに伝わってくる……」");

        // setChoices([
        //     { label: "霊能者を紹介してもらう", next: "4a", variant: "danger" },
        //     {
        //         label: "先輩にさらに写真を見せる",
        //         next: "4b",
        //         variant: "danger",
        //     },
        // ]);
    } else if (key === "4a") {
        story.appendChild(document.createElement("br"));
        appendPara("翌日、出社してすぐに先輩の姿を見つけた。");
        appendPara("気まずさを抱えたまま視線を逸らすのは、もう嫌だった。");
        story.appendChild(document.createElement("br"));
        appendPara("思い切って声をかける。");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("「先輩、今晩……よかったら、ごはん行きませんか？」");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("一瞬だけ、先輩の表情が固まる。けれど次の瞬間、穏やかな笑みが戻った。");
        appendPara("「うん。行こう。」");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("退社後、近くの食堂のいつもの席に向かい合って座る。");
        appendPara("湯気の向こうで、私は息を整えた。");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("「先輩……元彼に、連絡しました。」");
        appendPara("箸を置く音が、微かに鳴った。");
        story.appendChild(document.createElement("br"));
        appendPara("先輩は少しだけ目を伏せ、静かに言う。");
        story.appendChild(document.createElement("br"));
        appendPara("「……この前は、ごめん。」");
        story.appendChild(document.createElement("br"));
        appendPara("その言葉は、想像していたよりもずっとまっすぐで、あたたかかった。");
        appendPara("私は首を振る。");
        story.appendChild(document.createElement("br"));
        appendPara("「先輩は悪くないです。あの時、私もどうしていいか分からなくて……。」");
        appendPara("先輩は小さくうなずき、私の言葉を待った。");
        story.appendChild(document.createElement("br"));
        appendPara("胸の奥にしまっていたことを、そっと取り出す。");
        story.appendChild(document.createElement("br"));
        appendPara("「私、今週末、誕生日なんです。それで……彼と“星映湖”に行ってきます。」");
        story.appendChild(document.createElement("br"));
        appendPara("先輩の目が、わずかに見開かれた。");
        appendPara("けれどすぐに、あの時と同じ、柔らかな笑顔に戻る。");
        story.appendChild(document.createElement("br"));
        appendPara("「ああ……もうそこまで仲良くなったんだ。よかったね。」");
        story.appendChild(document.createElement("br"));
        appendPara("その笑顔は、前と同じだった。");
        appendPara("私は微笑み返し、正直な気持ちを置くように言う。");
        story.appendChild(document.createElement("br"));
        appendPara("「先輩のおかげです。……まだ、彼への気持ちははっきりしないけど。また、良い関係を築けそうな気がして。」");
        story.appendChild(document.createElement("br"));
        appendPara("先輩は「うん」と短く頷いた。");
        story.appendChild(document.createElement("br"));
        appendPara("その笑みは優しく、そして――どこか、少しだけ遠かった。");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("――そして、誕生日当日を迎えた。");
        appendPara("湖に着くまでは、言葉よりも記憶のほうがよく喋っていた。");
        story.appendChild(document.createElement("br"));
        appendPara("ハンドルを握る彼の癖も、カーブのたびに窓がかすかに鳴る音も、あの頃のまま。胸の内側のやわらかな場所が、そのたびきゅっと縮む。");
        appendPara("ラジオから昔よく聴いた曲が流れ、思わず口ずさむと、彼も気づかれないほど小さく合わせる。");
        appendPara("そのささやかな合奏が終わるまで――私は、ほんの少しだけ幸福だった。");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("彼の運転する車は山へ入り、ナビは時おり途切れ、地図は灰色に沈む。");
        appendPara("曲がり角をひとつ、またひとつ。見覚えのない林道。");
        story.appendChild(document.createElement("br"));
        appendPara("「……道、合ってる？」");
        appendPara("「たぶん。電波が戻れば――」");
        story.appendChild(document.createElement("br"));
        appendPara("言葉の尻を、不意に吹き抜ける冷気が攫っていく。");
        appendPara("背中に乗ったざわめきが、落ちない。嫌な気配。");
        story.appendChild(document.createElement("br"));
        appendPara("私はスマホを開いた。電波は細い一本。");
        appendPara("迷った末、先輩に短くメッセージを送る。");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("「すみません。今、星映湖へ向かっています。」");
        appendPara("「なんだか嫌な感じがして……。電波弱いです。念のため。」");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("送信はくるくる回り、やがて「送信済み」に変わった。");
        appendPara("返事は来ない。山の影が、窓を流れる。");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("――そして、真夜中。");
        appendPara("ようやく湖らしき開けた場所に出た。");
        story.appendChild(document.createElement("br"));
        appendPara("風は冷たく、星は数えるほどしかない。");
        story.appendChild(document.createElement("br"));
        appendPara("「着いたのかな……」");
        story.appendChild(document.createElement("br"));
        appendPara("水は月だけを薄く返し、空の星はほとんど見えない。風が止み、世界が息を殺す。");
        story.appendChild(document.createElement("br"));
        appendPara("それでも彼の横顔だけは、不思議とあたたかかった。");
        story.appendChild(document.createElement("br"));
        appendPara("「寒くない？」そう言って肩に手を置かれると、嘘のように心がほどける。");
        story.appendChild(document.createElement("br"));
        appendPara("このまま「やり直そう」と言ってしまえば、何かが元へ戻る気がした。");
        story.appendChild(document.createElement("br"));
        appendPara("戻らないと知りながら、喉の奥で言葉が形になりかける。");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("彼が私の手を取る。");
        appendPara("昔より少し骨ばって、それでも確かに――私の知っている温度。");
        story.appendChild(document.createElement("br"));
        appendPara("そのぬくもりに寄りかかるように指を絡めた瞬間、足もとがふっと軽くなった。");
        appendPara("水面が、静かに口を開く。");
        appendPara("いつのまにか私たちの足元には水が。");
        appendPara("どんどん水位が増していく。湖の範囲が広がっていく。");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("「……ねえ」");
        appendPara("言いかけた声は風にちぎれ、体の自由が解けていく。");
        appendPara("足首に冷たい指が触れ、ぐい、と下へ。");
        story.appendChild(document.createElement("br"));
        appendPara("「危ない！」");
        appendPara("彼が私の腕を掴み、全身で引き戻す。");
        appendPara("ふたりまとめて、湖に呑まれかける。");
        appendPara("彼の手は確かで、震えていて、懐かしい体温をしていた。痛いくらいの力がうれしくて、私は反射的にその手を握り返す――");
        
        appendPara("まるで、それだけで過去も未来も繋ぎ止められると信じるみたいに。");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("彼の体温だけが浮き輪のようで、私はそれを必死に抱きしめた。");
        appendPara("「助けて」と「離さないで」が同じ音で喉につかえる。");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("――私はまだ、彼を手放しきれていない。");
        appendPara("そう思った瞬間、水の下で誰かが笑った。");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("「おい！」");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("闇を裂く声。");
        appendPara("その声で、私ははっと我に返る。");
        appendPara("土の上に白い環が撒かれ、鈴が短く鳴り、空気の密度が変わる。");
        appendPara("「今助けるから諦めるな！！」");
        story.appendChild(document.createElement("br"));
        appendPara("声の主が駆け寄り、私と彼の腕をまとめて抱え起こす。");
        appendPara("円の縁が淡く光り、足首に絡みついていた冷たさがほどけた。");
        story.appendChild(document.createElement("br"));
        appendPara("「先輩……」");
        story.appendChild(document.createElement("br"));
        appendPara("「君は彼の手を放さないで。」");
        story.appendChild(document.createElement("br"));
        appendPara("先輩の声は静かで、強い。");
        appendPara("私は言われるまま、彼の手をさらに強く握った。");
        story.appendChild(document.createElement("br"));
        appendPara("水の底で軋む音。");
        appendPara("ろうそくの炎めいた月光が震え、鈴がもう一度、やさしく鳴る。");
        appendPara("風が戻り、葦がかすかに擦れ、虫の音が夜を縫い合わせた。");
        story.appendChild(document.createElement("br"));
        appendPara("「――――ここまで来ればもう大丈夫だから。」");
        appendPara("息を切らしながら先輩はそう言った。私たちは地面に崩れ落ち、荒い息を整えた。");
        appendPara("先輩は私たちの肩に触れ、無事を確かめてから、安堵の息を漏らした。");
        story.appendChild(document.createElement("br"));
        // appendPara("「……間に合ってよかった。」");
        appendPara("私はうなずく。");
        appendPara("彼の手はまだ私の手にあり、先輩の手も背にある。");
        appendPara("二つの温度が胸の中でぶつかって、溶け合わない。");
        story.appendChild(document.createElement("br"));
        appendPara("見上げた空は、やはり星が少ない。");
        appendPara("湖面は深い色で黙したまま――");
        appendPara("それでも、三人の呼吸だけが、同じリズムを取り戻しつつあった。");
        story.appendChild(document.createElement("br"));
        // appendPara("");
        // appendPara("");
        // appendPara("");
        // appendPara("");
        // appendPara("");
        // appendPara("");
        // appendPara("");
        // appendPara("");
        // appendPara("");
        // appendPara("");
        // appendPara("");
        // appendPara("");
        // appendPara("");
        // appendPara("");
        // appendPara("");
        // appendPara("");
        // appendPara("");

        story.appendChild(document.createElement("br"));

        setChoices([
            { label: "先輩に話しかける", next: "5a", variant: "danger" },
            { label: "元彼に話しかける", next: "5b", variant: "danger" },//元彼とハッピーエンド
        ]);
    } else if (key === "5a") {
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("雫のように遅れて震えが来る。私は息を整え、先輩の顔を見た。");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("「先輩……私、自分が危ない状況だってわかってたのに、どこか心ここにあらずで……ふわふわと現実味がなくて。やっと今、何が起きていたのか飲み込めてきました」");
        story.appendChild(document.createElement("br"));
        appendPara("「本当、びっくりしたよ……。君が無事でよかった」");
        story.appendChild(document.createElement("br"));
        appendPara("「それにしても、どうして先輩がここに？」");
        story.appendChild(document.createElement("br"));
        appendPara("「君のメッセージを見て、嫌な予感がした。星映湖じゃない方角に向かってるんじゃないかって。昔、ここに来たことがあるんだ」");
        story.appendChild(document.createElement("br"));
        appendPara("「え？ここ、星映湖じゃないんですか？」");
        story.appendChild(document.createElement("br"));
        appendPara("「違うよ。『静女ヶ淵（しずめがふち）』っていって、女性が近づいちゃいけない湖なんだ」");
        story.appendChild(document.createElement("br"));
        appendPara("「え……？それ、どういう意味ですか」");
        story.appendChild(document.createElement("br"));
        appendPara("背筋に冷たいものが走る。");
        story.appendChild(document.createElement("br"));
        appendPara("先輩は短く息を吐き、静かに続けた。");
        story.appendChild(document.createElement("br"));
        appendPara("「……大昔、このあたりに災いの絶えない村があってね。ある日、旅の尼さんが迷い込んだ。彼女は荒れた村を見かねて復興を手伝い、献身的に働いた。村はみるみる元気を取り戻したんだ」");
        story.appendChild(document.createElement("br"));
        appendPara("「いい話……ですよね？」");
        story.appendChild(document.createElement("br"));
        appendPara("「ところが、また大雨が降った。その村では災いのたびに“人柱”として女性を湖に沈める習わしがあって――それをやると不思議と災害が収まる、と信じられていた」");
        story.appendChild(document.createElement("br"));
        appendPara("「えっ……」");
        story.appendChild(document.createElement("br"));
        appendPara("「その尼さんが、人柱にされた」");
        story.appendChild(document.createElement("br"));
        appendPara("「……っ！」");
        story.appendChild(document.createElement("br"));
        appendPara("（じゃあ、さっき私の足を掴んだのは――）");
        story.appendChild(document.createElement("br"));
        appendPara("「それ以来、災いはかえって収まらなくなり、村は人が寄りつかない場所になった。尼さんは今でもこの湖を離れられず、自分の代わりになる“女性”を探して彷徨っている……そんな伝えが残っている」");
        story.appendChild(document.createElement("br"));
        appendPara("「せ、先輩……怖いです……」");
        story.appendChild(document.createElement("br"));
        appendPara("先輩は私の肩にそっと手を置いた。指先は温かいのに、湖から吹く風は骨の奥まで冷たかった。");
        story.appendChild(document.createElement("br"));
        appendPara("「大丈夫。今夜はもうここを離れよう。続きは、安全な場所で――それと。」");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
         appendPara("先輩が、月明かりの下でふっと笑った。");
        story.appendChild(document.createElement("br"));
        appendPara("喉が、かすかに鳴る。");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("「誕生日おめでとう」");
        story.appendChild(document.createElement("br"));
        appendPara("「……えっ」");
        story.appendChild(document.createElement("br"));
        appendPara("その一言に、優しい笑顔に、胸の奥で鼓動が跳ねる。");
        story.appendChild(document.createElement("br"));
        appendPara("光の縁取りに浮かぶ横顔は、暗闇のなか月明かりにやさしく縁どられ、いつもの安心感といっしょに、胸を不意に鳴らすほど格好よく見えた。自分の鼓動が、はっきりわかる。");
        story.appendChild(document.createElement("br"));
        appendPara("「もう日付、変わっちゃったかな……大丈夫？」");
        story.appendChild(document.createElement("br"));
        appendPara("「そんな……嬉しいです、先輩」");
        story.appendChild(document.createElement("br"));
        appendPara("「……」");
        story.appendChild(document.createElement("br"));
        appendPara("そう言うと、先輩は気恥ずかしそうに頭をかき、視線をそらす。");
        story.appendChild(document.createElement("br"));
        appendPara("その仕草さえ、心臓に悪い。");
        story.appendChild(document.createElement("br"));
        appendPara("「先輩、もしかして――顔、赤いです？」");
        story.appendChild(document.createElement("br"));
        appendPara("「ほら、もう。このままだと風邪ひく。行くよ」");
        story.appendChild(document.createElement("br"));
        appendPara("低く、いい声。");
        story.appendChild(document.createElement("br"));
        appendPara("月が少し揺れて見えた。");
        story.appendChild(document.createElement("br"));
        appendPara("「あはは。……先輩、可愛い」");
        story.appendChild(document.createElement("br"));
        appendPara("暗闇でも、耳まで赤いのが分かる。");
        story.appendChild(document.createElement("br"));
        appendPara("指先まで、どくどくと血が巡る。");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("――私、先輩が好きだ。");
        story.appendChild(document.createElement("br"));
        appendPara("怖い夜なのに、世界が少しだけ明るくなる。");

        setChoices([
            { label: "すると、誰かが私の肩を掴んだ", next: "6a", variant: "danger" },//先輩と元彼でバチバチエンド
            {label: "先輩の手をとる",next: "6b",variant: "danger",},//先輩とハッピーエンド。元彼に正直な気持ちを伝える。
        ]);
        
        // hideChoices("やめておく"); // ← ここで選択肢を消す

        // // バッドエンドへ遷移（別ページ）
        // setTimeout(() => {
        //     window.location.href = "./bad_end2.html";
        // }, 32000);

        //元彼とハッピーエンド
    } else if (key === "5b") {
        appendPara("");
        appendPara("");
        story.appendChild(document.createElement("br"));
        appendPara("");
        appendPara("");
        appendPara("");
        appendPara("");
        appendPara("");
        appendPara("");
        appendPara("");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("");
        appendPara("");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("");
        appendPara("");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("");
        appendPara("");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("");
        appendPara("");
        appendPara("");
        appendPara("");
        appendPara("");
        appendPara("");
        appendPara("");
        appendPara("");
        story.appendChild(document.createElement("br"));
        appendPara("");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("");
        appendPara("");
        appendPara("");
        appendPara("");
        appendPara("");
        appendPara("");
        appendPara("");
        appendPara("");
        story.appendChild(document.createElement("br"));

        story.appendChild(document.createElement("br"));

        story.appendChild(document.createElement("br"));
        hideChoices("元彼に話しかける"); // ← ここで選択肢を消す
        // 元彼とハッピーエンドへ遷移（別ページ）
        setTimeout(() => {
            window.location.href = "./fukuen_end2.html";
        }, 32000);

        
    } else if (key === "6a") {
        
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("『……邪魔するな……』");
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
        appendPara(
            "すでに部屋は退去済みで、彼の姿はどこにもなかった。 行方はわからない。ただひとつ確かなのは――今もどこかで人形と一緒にいる、ということだけだった。"
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
            "毎日のように元彼から聞かされていたはずなのに、どうしても思い出せない。 すんなり耳に入っていたくらいだから、きっと特別な名前ではなく、一般的な名前だったのだろう。"
        );
        appendPara(
            "「⚪︎⚪︎ちゃん、今日も可愛い」――彼の口癖をビラに書こうと思ったのに、肝心の名前だけが思い出せない。"
        );
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara(
            "念のため、先輩や霊能者の方にも尋ねてみた。だが、誰一人として人形の名前を覚えてはいなかった。"
        );
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        hideChoices("この動画を3人で確認する"); // ← ここで選択肢を
        setTimeout(() => {
            window.location.href = "./syuraba_end.html";}, 8000);

    } else if (key === "6b") {
        appendPara(
            "もしかすると、他の動画でも同じ現象が起きているのかもしれない……。"
        );
        appendPara(
            "私は別れてから送られてきた動画をちゃんと見返していなかった。 隣に先輩がいたため勇気を出して昨夜の動画を再生すると、そこには薄暗く荒れ果てた部屋が映っていた。"
        );
        appendPara(
            "そして画面の端に、一瞬だけ小さな手――おそらくあの人形の手が写り込んだ。"
        );
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara(
            "先ほどと同様にその動画を霊能者に送ると、今度は別の動画が届いた。"
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
        appendPara("「僕が悪かったよ。」");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara(
            "ここで元彼が全く喋らなくなった。そして、動画は進み、昨夜の動画のラストシーンに映っていたものが映し出される。"
        );

        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("その瞬間、全く喋らなくなっていた元彼が急に喋り出す。");
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
            "そして動画はここで終わったはずだったが、リピート再生が始まった。"
        );
        story.appendChild(document.createElement("br"));

        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("どうして助けてくれなかったんだよ");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));

        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("そんな元彼の声に、私は凍りついた。");
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
            "慌てて元彼に電話したが、繋がらない。LINEも既読にならなかった。"
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
            "胸の奥が熱くなる。恐怖もあったけれど、それ以上に“彼が自分の意思で闇を断ち切った”ことへの安堵が勝った。"
        );
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("「……考えさせて。でも、また会って話そう」 私はそう答えた。");

        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("人形は霊能者によって完全に祓われ、怪異は収まった。");
        appendPara(
            "元彼は正気を取り戻し、私たちの関係は再び繋がろうとしている。"
        );
        appendPara("ただ――あの人形の笑みだけは、心の奥で消えてはいなかった。");

        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));

        hideChoices("元彼に連絡する"); // ← ここで選択肢を消す
        // ハッピーエンドへ遷移（別ページ）
        setTimeout(() => {
            window.location.href = "./fukuen_end.html";
        }, 30000);
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
            "数日後、元彼から荷物が届いた。 一人では開ける勇気がなく、また先輩に頼んで一緒に確認してもらうことにした。"
        );
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara(
            "箱を開けると、中には――あの人形が入っていた。 血の気が引いたが、先輩がすぐに「霊能者に持って行こう」と言ってくれ、そのまま一緒にお祓いを依頼した。"
        );
        appendPara("人形は浄化され、それ以降怪異は起こらなかった。");

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
        appendPara(
            "テーブル越しに、先輩が少し照れたように笑う。 「じゃあ、遠慮なくご馳走になるよ」"
        );

        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara(
            "穏やかな昼下がり、緊張よりも心地よさが勝っていた。 人形の恐怖は消え去ったけれど、代わりに――先輩との距離が少しずつ近づいているのを、私ははっきりと感じていた。"
        );
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
        }, 31000);
    } else if (key === "3b") {
        story.appendChild(document.createElement("br"));
        appendPara("先輩と別れた帰り道、胸の奥に重たいものが残っていた。");
        story.appendChild(document.createElement("br"));
        appendPara("夜風が頬を撫でても、頭の中は先輩の言葉でいっぱいだった。");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("――「君はきっと、今ごろ彼と幸せに暮らしていたんじゃないかと思って。」");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("どうして、あんなことを言うんだろう。");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("部屋に帰ると、いつもより静かだった。");
        appendPara("カーテンの隙間から、街の灯りが淡く差し込んでいる。");
        appendPara("私はため息をつき、スマホをテーブルに置いた。");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("そのとき、通知音が鳴った。");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("「お久しぶり。」");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("画面に浮かぶ名前を見て、息が止まった。");
        appendPara("――元彼。");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("指先が震え、心臓が早鐘を打つ。");
        story.appendChild(document.createElement("br"));
        appendPara("けれど、その一文を何度も見返すうちに、不思議と涙がこぼれた。");
        appendPara("怖さよりも、懐かしさのほうが勝っていた。");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("私は迷いながらも返信を打った。");
        story.appendChild(document.createElement("br"));
        appendPara("「久しぶり。……どうしたの？」");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("少しの間をおいて、返事が届く。");
        story.appendChild(document.createElement("br"));
        appendPara("「君のこと、ずっと気になってた。ちゃんと話がしたいと思ってた。」");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("その言葉を見た瞬間、心の奥に灯がともるような気がした。");
        story.appendChild(document.createElement("br"));
        appendPara("「私も……少し話したいことがあります。」");
        story.appendChild(document.createElement("br"));
        appendPara("そう送ると、彼からすぐに返ってきた。");
        story.appendChild(document.createElement("br"));
        appendPara("「じゃあ、電話してもいい？」");
        story.appendChild(document.createElement("br"));
        appendPara("画面に映る着信マークが震える。");
        appendPara("逡巡の末、私は通話ボタンを押した。");
        story.appendChild(document.createElement("br"));
        appendPara("「……もしもし。」");
        story.appendChild(document.createElement("br"));
        appendPara("懐かしい声。");
        appendPara("あの頃と同じ優しいトーン。");
        story.appendChild(document.createElement("br"));
        appendPara("「声、変わってないね。」");
        story.appendChild(document.createElement("br"));
        appendPara("「そっちこそ。」");
        story.appendChild(document.createElement("br"));
        appendPara("「そっちは見た目は老けたんじゃない？」");
        story.appendChild(document.createElement("br"));
        appendPara("「ひどいな、毒舌なところ変わってないね。」");
        story.appendChild(document.createElement("br"));
        appendPara("どちらからともなく笑った。");
        appendPara("ほんの一瞬、時間が巻き戻ったようだった。");
        appendPara("あの事件も、恐怖も、何もかもが遠い昔のことのように感じた。");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("「また、会えないかな。」");
        story.appendChild(document.createElement("br"));
        appendPara("その言葉に、胸が締めつけられた。");
        story.appendChild(document.createElement("br"));
        appendPara("「……考えてみる。」");

        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("少しの沈黙のあと、彼が静かに言った。");
        story.appendChild(document.createElement("br"));
        appendPara("「無理はしなくていい。でも、会いたい。今度は、ちゃんと話がしたいんだ。」");

        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("その声音に、ほんのわずかに震えが混じっていた。");
        appendPara("私は何も言えず、ただ小さく頷いた。");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("通話が終わったあと、しばらくスマホを見つめていた。");
        appendPara("心臓はまだ少し早く打っている。");
        appendPara("でも――その鼓動は、恐怖ではなく、どこか温かかった。");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("ベッドに横になり、目を閉じる。");
        appendPara("あの優しい声が、耳の奥に残っていた。");
        story.appendChild(document.createElement("br"));
        appendPara("そして、眠りに落ちる直前。");
        appendPara("カーテンの向こうで、誰かが微かに囁いた。");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));
        appendPara("――「やっと、また話せたね。」");
        story.appendChild(document.createElement("br"));
        story.appendChild(document.createElement("br"));

        hideChoices("部屋でビールでも飲もう"); // ← ここで選択肢を消す
        // バッドエンドへ遷移（別ページ）
        setTimeout(() => {
            window.location.href = "./bad_end2.html";
        }, 43000);

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
            "低い叫び声とともに、先輩の視線がふっと私を外れた。 代わりに――スマホの画面の中、人形の瞳と目が合った気がした。"
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
            window.location.href = "./bad_end2.html";
        }, 37000);
    }
});
