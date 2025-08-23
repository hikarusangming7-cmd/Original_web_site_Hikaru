
const story   = document.getElementById('story');
  const choices = document.querySelector('.choices');

  // 段落を追記する小関数
  function appendPara(text) {
    const p = document.createElement('p');
    p.textContent = text;
    story.appendChild(p);
  }

  // 選択肢を描画（既存をクリアして新規ボタンを生成）
  // items: [{ label: '表示名', next: '遷移キー', variant: 'danger'  }]
  function setChoices(items) {
    choices.innerHTML = '';
    items.forEach(({ label, next, variant }) => {
      const btn = document.createElement('button');
      btn.className = 'choice' + (variant === 'danger' ? ' red' : '');
      btn.dataset.next = next;
      btn.textContent = label;
      choices.appendChild(btn);
    });
  }

  // 初期の2択をセット（HTMLに既に書いてあるなら省略可）
  setChoices([
    { label: 'こっそり人形を捨てる', next: '1', variant: 'danger' },
    { label: '同棲をやめる',         next: '2', variant: 'danger' }
  ]);

  // クリックを一箇所で受ける（イベント委譲：動的生成に強い）
  choices.addEventListener('click', (e) => {
    const btn = e.target.closest('.choice');
    if (!btn) return;
    const key = btn.dataset.next;

    if (key === '1') {
      // 1つ目の選択：追記 → 改行 → さらに追記 → 次の選択肢を生成
      appendPara('人形を手放せと言っても絶対に彼は聞かないだろう。このままでは彼が危険だ。彼には言わず、こっそり人形を捨てることにした……。');
      story.appendChild(document.createElement('br'));
      appendPara('夜更け、玄関の鍵をそっと閉める。ビニール袋越しに伝わる冷たさが、指先から肩口まで這い上がった。');
      appendPara('ゴミ置き場に置いた瞬間──コトリ、と袋の中で硬いものがぶつかる小さな音。振り返ると、誰もいない。');

      // 新しい選択肢を生成
      setChoices([
        { label: '今夜のうちに遠くへ捨てに行く', next: '1a', variant: 'danger' },
        { label: '一度家へ戻り様子を見る',       next: '1b', variant: 'danger' }
      ]);
    }

    else if (key === '1a') {
      appendPara('街灯の届かない川沿い。袋を放したはずなのに、足もとに影がもう一つ増えていた。');
      // バッドエンドへ遷移（別ページ）
      setTimeout(() => { window.location.href = './bad_end.html'; }, 6000);
    }

    else if (key === '1b') {
      appendPara('玄関を開けると、暗闇の中で誰かの「おかえり」が重なって聞こえた。ひとつは彼の声、もうひとつは──。');
      // さらに分岐を増やしたい場合
      setChoices([
        { label: '電気を点ける', next: '1b-1', variant: 'danger' },
        { label: '息を潜めて寝室へ', next: '1b-2', variant: 'danger' }
      ]);
    }

    else if (key === '1b-1') {
      appendPara('光が弾け、ソファには空の袋だけ。だけど、壁の影は三つあった。');
      setTimeout(() => { window.location.href = './bad_end.html'; }, 6000);
    }

    else if (key === '1b-2') {
      appendPara('寝室のドアノブが、外から「回された」。次の瞬間、頬に冷たい布が触れた。');
      setTimeout(() => { window.location.href = './bad_end.html'; }, 6000);
    }

    else if (key === '2') {
      // 「同棲をやめる」ルート
      appendPara('もうこんな生活は耐えられない。彼のことも信用できない。別れよう。');
      setChoices([
        { label: '今すぐ荷造りする', next: '2a', variant: 'danger' },
        { label: '明日話し合う',     next: '2b', variant: 'danger' }
      ]);
    }

    else if (key === '2a') {
      appendPara('スーツケースのチャックが閉まる音と同時に、玄関の鏡が勝手にこちらを向いた。');
      setTimeout(() => { window.location.href = './bad_end.html'; }, 6000);
    }

     if (key === '2b'){

        appendPara('とりあえず明日話し合おう。今日は何も知らないふりをして、早めに休むことにした。');
        story.appendChild(document.createElement('br'));
       story.appendChild(document.createElement('br'));
       story.appendChild(document.createElement('br'));
       appendPara('その後、無事に別れることができた。しかし、一つ困ったことがあった。');
      
       appendPara('彼から毎日メッセージで、気味の悪い人形の写真が送られてくる。');
       
       appendPara('ブロックをしてもなぜか次の日には解除されていて、”今日の⚪︎⚪︎ちゃんも可愛い♡”というメッセージと一緒に送られてくるのであった。');

       appendPara('かなり困っている。どうしたものか……。');
        setChoices([
        { label: '霊能者に相談する', next: '3a', variant: 'danger' },
        {label: '我慢する', next: '3b', variant: 'danger' }
        
   ]);
  }


     if (key === '3a'){

        appendPara('そういえば、職場に霊感が強くて困っていると話していた先輩がいた。');
        appendPara('先輩は確か、霊能者に相談したと言っていた。');
        appendPara('先輩にお願いして、霊能者を紹介してもらおう。');
        story.appendChild(document.createElement('br'));
       story.appendChild(document.createElement('br'));
       story.appendChild(document.createElement('br'));
       appendPara('事情を話すと先輩は身を案じてくれ、霊能者の方に連絡を取ってくれた。');
       appendPara('その方はとあるお寺の住職さんだった。');
       appendPara('先輩は住職さんに、人形の写真も一緒に送って状況を説明してくれたらしい。');
       appendPara('すぐには返事はないかもしれないが、気長に待とう。');
        story.appendChild(document.createElement('br'));
        story.appendChild(document.createElement('br'));
        story.appendChild(document.createElement('br'));
        appendPara('それから二日ほど経ち、先輩から電話がかかってきた。');
     　story.appendChild(document.createElement('br'));
       
       appendPara('「あの人形、相当やばいって言ってた。すぐにでも元彼さんを人形から引き離さないといけないって。一緒にお寺まで連れてきてもらうことってできる？」');
       
        setChoices([
        { label: '伝えてみます', next: '3a-1', variant: 'danger' },
        {label: 'むしろ、一緒に突撃しに行きませんか？', next: '3b-1', variant: 'danger' }
        
   ]);
  }
  

  
    else if (key === '3b-1') {
      appendPara('「おそらく彼は言うこと聞かないと思うので、彼の家まで一緒に来てもらえたらありがたいです。」');
      story.appendChild(document.createElement('br'));
       appendPara('図々しいのは承知でそう言うと、快く承諾してくれた。');
       story.appendChild(document.createElement('br'));
        story.appendChild(document.createElement('br'));
        story.appendChild(document.createElement('br'));
       appendPara('次の週、元彼には何も言わずに私達3人は元彼のアパートに突撃した。しかし...');
       story.appendChild(document.createElement('br'));
        story.appendChild(document.createElement('br'));
        story.appendChild(document.createElement('br'));
       appendPara('「いない……。」');
        story.appendChild(document.createElement('br'));
       appendPara('いつのまにか、引っ越してしまっていたようだ。');
       appendPara('彼は今もきっと、人形と共にどこかで暮らしている。');
       appendPara('「ところで、人形の名前って何だったっけ？もしかしたら、何か手がかりが見つかるかも。」');
       appendPara('「ところで、人形の名前って何だったっけ？もしかしたら、何か手がかりが見つかるかも。」');
     
       
      // nomalエンドへ遷移（別ページ）
      setTimeout(() => { window.location.href = './nomal_end.html'; }, 15000);
    }






    else if (key === '3b') {
      appendPara('今のところ、メッセージが送られてくること以外は特に害はない。我慢すればいいだけの話だ。');
      story.appendChild(document.createElement('br'));
       appendPara('毎日毎日、メッセージと写真が送られてくる。私は我慢した。');
       story.appendChild(document.createElement('br'));
        story.appendChild(document.createElement('br'));
        story.appendChild(document.createElement('br'));
       appendPara('そして、月日は流れ・・・・私は白い部屋にいた。');
       story.appendChild(document.createElement('br'));
        story.appendChild(document.createElement('br'));
        story.appendChild(document.createElement('br'));
       appendPara('いつからここにいるのだろう？');
       appendPara('時間の感覚ももうわからない。');
       appendPara('そもそも、どうして私はここにいるのだろう？');
     
       story.appendChild(document.createElement('br'));
        story.appendChild(document.createElement('br'));
        story.appendChild(document.createElement('br'));
        appendPara('唯一わかっていること。それは、この部屋から出られる日は来ないということだ。');
      // バッドエンドへ遷移（別ページ）
      setTimeout(() => { window.location.href = './bad_end.html'; }, 7000);
    }

    })
