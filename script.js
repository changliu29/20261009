// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "",
    "description": "",
    "repository": "",
    "contributors": ""
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "html",
          "content": "\u003C!-- 最顶部的欢迎语（字号1.6rem + 居中 + 天蓝色分割线） --\u003E\r\n\u003Cp style=\"font-size: 1.6rem; font-weight: bold; color: #1a202c; text-align: center; margin-bottom: 25px; padding-bottom: 12px; border-bottom: 3px solid #87CEEB;\"\u003E\r\n  本実験にご参加いただきありがとうございます\r\n\u003C\u002Fp\u003E",
          "name": ""
        },
        {
          "required": true,
          "type": "text",
          "content": "本実験の実施責任者は慶應義塾大学大学院社会学研究科の劉暢です。本実験への参加はあなたの任意によるものです。",
          "title": "本実験について"
        },
        {
          "type": "text",
          "title": "1．本実験の目的",
          "content": "本実験はオンラインニュースの閲覧とその受け止め方について調査することを目的としています。"
        },
        {
          "required": true,
          "type": "text",
          "title": "2．本実験の手続き",
          "content": "実験では、ニュース記事を閲覧した後、いくつかの質問に回答していただきます。所要時間は約10～15分です。なお、一度回答したページには戻ることができませんので、内容をよく確認したうえで回答してください。"
        },
        {
          "required": true,
          "type": "text",
          "title": "3．潜在的なリスク・苦痛など",
          "content": "実験による多少の疲労は除き、潜在的なリスクや苦痛はありません。また、参加は自由意思に基づくものであり、いつでも中止することができます。"
        },
        {
          "required": true,
          "type": "text",
          "title": "4．匿名性の確保",
          "content": "回答は匿名で収集され、研究目的以外には使用されません。個人が特定されることはありません。"
        },
        {
          "required": true,
          "type": "text",
          "title": "5. 謝金について",
          "content": "本実験に最後までご回答いただいた方には、謝礼として100円をお支払いします。"
        },
        {
          "required": true,
          "type": "checkbox",
          "label": "実験への参加に同意いただけますか？同意いただける方はチェックをお願いします。同意いただけない方は，ESCを押した後，ウィンドウを閉じてください。",
          "options": [
            {
              "label": "上記の説明をよく読み，理解した上で，実験への参加に同意します。",
              "coding": "informedConsent"
            }
          ],
          "name": "consent"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ進む",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "informedConsent",
      "width": "l"
    },
    {
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "i-text",
          "left": 0,
          "top": -50,
          "angle": 0,
          "width": 575.28,
          "height": 58.58,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "今からニュース記事を提示します。\n準備ができたら，スタートボタンを押してください。",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": "24",
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        },
        {
          "type": "circle",
          "left": 0,
          "top": 100,
          "angle": 0,
          "width": 106.71,
          "height": 106.71,
          "stroke": "#0070d9",
          "strokeWidth": 1,
          "fill": "#ADD8E6"
        },
        {
          "type": "i-text",
          "left": 0,
          "top": 100,
          "angle": 0,
          "width": 96,
          "height": 27.12,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "スタート",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": "24",
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        },
        {
          "type": "aoi",
          "left": 0,
          "top": 100,
          "angle": 0,
          "width": 119.26,
          "height": 119.26,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "rgba(0, 0, 0, 0.2)",
          "label": "startBtn"
        }
      ],
      "viewport": [
        800,
        600
      ],
      "files": {},
      "responses": {
        "click @startBtn": "start"
      },
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
//参加者IDをランダム生成
const digits = 7;
const participantID = this.random.range(10**digits, 10**(digits+1));
this.state.participantID = participantID;
}
      },
      "title": "start"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "image",
          "src": "${ this.files[\"滋贺大学.jpg\"] }",
          "name": ""
        },
        {
          "required": true,
          "type": "html",
          "content": "\u003C!-- 新闻页面样式定义 --\u003E\r\n\u003Cstyle\u003E\r\n  .news-wrapper {\r\n    max-width: 680px;\r\n    margin: 20px auto;\r\n    padding: 30px;\r\n    background-color: #ffffff;\r\n    border: 1px solid #e2e8f0;\r\n    border-radius: 8px;\r\n    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);\r\n    font-family: -apple-system, BlinkMacSystemFont, \"Hiragino Kaku Gothic ProN\", \"メイリオ\", meiryo, sans-serif;\r\n    color: #2d3748;\r\n    text-align: left;\r\n    line-height: 1.8;\r\n  }\r\n\r\n  .news-category {\r\n    display: inline-block;\r\n    background-color: #ebf8ff;\r\n    color: #2b6cb0;\r\n    font-size: 0.85rem;\r\n    font-weight: bold;\r\n    padding: 3px 10px;\r\n    border-radius: 4px;\r\n    margin-bottom: 12px;\r\n  }\r\n\r\n  .news-title {\r\n    font-size: 1.5rem;\r\n    font-weight: 700;\r\n    color: #1a202c;\r\n    line-height: 1.4;\r\n    margin: 0 0 16px 0;\r\n    letter-spacing: -0.02em;\r\n  }\r\n\r\n  .news-meta {\r\n    font-size: 0.85rem;\r\n    color: #718096;\r\n    border-bottom: 1px solid #edf2f7;\r\n    padding-bottom: 12px;\r\n    margin-bottom: 24px;\r\n  }\r\n\r\n  .news-content p {\r\n    font-size: 1rem;\r\n    margin-bottom: 1.2rem;\r\n    text-align: justify;\r\n    word-break: break-word;\r\n  }\r\n\r\n  .news-content blockquote {\r\n    margin: 1.5rem 0;\r\n    padding: 12px 18px;\r\n    background-color: #f7fafc;\r\n    border-left: 4px solid #3182ce;\r\n    font-style: normal;\r\n    color: #4a5568;\r\n  }\r\n\r\n  \u002F* 实验控制按钮样式 *\u002F\r\n  .btn-container {\r\n    margin-top: 36px;\r\n    text-align: center;\r\n  }\r\n\r\n  .next-btn {\r\n    background-color: #3182ce;\r\n    color: white;\r\n    border: none;\r\n    padding: 12px 36px;\r\n    font-size: 1rem;\r\n    font-weight: bold;\r\n    border-radius: 6px;\r\n    cursor: pointer;\r\n    transition: background-color 0.2s;\r\n  }\r\n\r\n  .next-btn:hover {\r\n    background-color: #2b6cb0;\r\n  }\r\n\u003C\u002Fstyle\u003E\r\n\r\n\u003C!-- 新闻内容结构 --\u003E\r\n\u003Cdiv class=\"news-wrapper\"\u003E\r\n  \u003Cspan class=\"news-category\"\u003EIT・教育\u003C\u002Fspan\u003E\r\n  \r\n  \u003Ch1 class=\"news-title\"\u003E\r\n    国内初、滋賀大が教育用AI「ChatGPT Education」導入 「生成AIは、あらゆる業種で必須と言っても過言ではない」\r\n  \u003C\u002Fh1\u003E\r\n  \r\n  \u003Cdiv class=\"news-meta\"\u003E\r\n    \u003Ctime datetime=\"2025-03-14\"\u003E2025年3月14日\u003C\u002Ftime\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\r\n  \u003Cdiv class=\"news-content\"\u003E\r\n    \u003Cp\u003E\r\n      滋賀大学は3月12日、米OpenAIが提供する教育用AIツール「ChatGPT Education」を導入すると発表した。学生に対し、生成AI技術に触れる機会を提供するのが目的。国内の大学で同ツールを導入するのは、初の試みとなる。\r\n    \u003C\u002Fp\u003E\r\n    \r\n    \u003Cp\u003E\r\n      利用用途としては「Canvas（ChatGPTと共同でテキストやコードを編集できる機能）で学生がプログラムを書く際のエラー原因や最適なコードの書き方を提案させるなど、Pythonなどのプログラミング習得の補助」「語学学習や外国語の論文執筆での文章添削」「データ分析機能で、学生の学習状況・成績データなどを分析し、個別の学習プランやアドバイスの提供」「夜間・休日にも学生の質問への自動応答」などを挙げている。\r\n    \u003C\u002Fp\u003E\r\n\r\n    \u003Cp\u003E\r\n      滋賀大は「学生が大学を卒業・修了したのち社会で活躍していくにあたり、生成AI技術を使いこなしていくことは、今やあらゆる業種で必須と言っても過言ではない」と説明。企業活動などでの利用を想定した生成AI技術を学生の段階から提供することで、実践的なスキルを学べる場を作り上げていく。\r\n    \u003C\u002Fp\u003E\r\n\r\n    \u003Cp\u003E\r\n      「生成AIを用いて効果的に研究を実施する、論文の校正に生成AIを活用する、生成AIで授業を改善するなど、研究者が研究や教育活動をより効率的に進めることのできる環境の整備を進めていく」（滋賀大）\r\n    \u003C\u002Fp\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\r\n\u003C\u002Fdiv\u003E",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ進む",
      "submitButtonPosition": "right",
      "files": {
        "滋贺大学.jpg": "embedded\u002F03bca41778a30419aec57e7fac4a661e09f5fb6ea9b308ddb97736455661fc1e.jpg"
      },
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Condition_Control",
      "skip": "${this.state.participantID % 5 != 0}"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "image",
          "src": "${ this.files[\"滋贺大学.jpg\"] }",
          "name": ""
        },
        {
          "required": true,
          "type": "html",
          "content": "\u003Cstyle\u003E\r\n  .news-wrapper {\r\n    max-width: 680px;\r\n    margin: 20px auto;\r\n    padding: 30px;\r\n    background-color: #ffffff;\r\n    border: 1px solid #e2e8f0;\r\n    border-radius: 8px;\r\n    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);\r\n    font-family: -apple-system, BlinkMacSystemFont, \"Hiragino Kaku Gothic ProN\", \"メイリオ\", meiryo, sans-serif;\r\n    color: #2d3748;\r\n    text-align: left;\r\n    line-height: 1.8;\r\n  }\r\n\r\n  \u002F* 新闻主体 *\u002F\r\n  .news-category {\r\n    display: inline-block;\r\n    background-color: #ebf8ff;\r\n    color: #2b6cb0;\r\n    font-size: 0.85rem;\r\n    font-weight: bold;\r\n    padding: 3px 10px;\r\n    border-radius: 4px;\r\n    margin-bottom: 12px;\r\n  }\r\n\r\n  .news-title {\r\n    font-size: 1.5rem;\r\n    font-weight: 700;\r\n    color: #1a202c;\r\n    line-height: 1.4;\r\n    margin: 0 0 16px 0;\r\n    letter-spacing: -0.02em;\r\n  }\r\n\r\n  .news-meta {\r\n    font-size: 0.85rem;\r\n    color: #718096;\r\n    border-bottom: 1px solid #edf2f7;\r\n    padding-bottom: 12px;\r\n    margin-bottom: 24px;\r\n  }\r\n\r\n  .news-content p {\r\n    font-size: 1rem;\r\n    margin-bottom: 1.2rem;\r\n    text-align: justify;\r\n    word-break: break-word;\r\n  }\r\n\r\n  .news-content blockquote {\r\n    margin: 1.5rem 0;\r\n    padding: 12px 18px;\r\n    background-color: #f7fafc;\r\n    border-left: 4px solid #3182ce;\r\n    font-style: normal;\r\n    color: #4a5568;\r\n  }\r\n\r\n  \u002F* --- Yahoo 风格评论区（纯文本无互动数据） --- *\u002F\r\n  .comments-section {\r\n    margin-top: 40px;\r\n    padding-top: 20px;\r\n  }\r\n\r\n  .comments-header {\r\n    font-size: 1.25rem;\r\n    font-weight: bold;\r\n    color: #000000;\r\n    margin-bottom: 24px;\r\n    display: flex;\r\n    align-items: center;\r\n    border-left: 5px solid #0056b3; \u002F* 经典蓝色竖线 *\u002F\r\n    padding-left: 10px;\r\n    line-height: 1.2;\r\n  }\r\n\r\n  .comment-item {\r\n    padding-bottom: 16px;\r\n    margin-bottom: 16px;\r\n    border-bottom: 1px solid #eef1f5; \u002F* 淡灰色分割线 *\u002F\r\n  }\r\n\r\n  .comment-item:last-child {\r\n    border-bottom: none;\r\n  }\r\n\r\n  .comment-user {\r\n    font-size: 0.9rem;\r\n    font-weight: bold;\r\n    color: #333333;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 6px;\r\n    margin-bottom: 6px;\r\n  }\r\n\r\n  .comment-body {\r\n    font-size: 0.95rem;\r\n    color: #222222;\r\n    line-height: 1.6;\r\n    margin: 0;\r\n    text-align: justify;\r\n  }\r\n\r\n  \u002F* 按钮区域 *\u002F\r\n  .btn-container {\r\n    margin-top: 36px;\r\n    text-align: center;\r\n  }\r\n\r\n  .next-btn {\r\n    background-color: #3182ce;\r\n    color: white;\r\n    border: none;\r\n    padding: 12px 36px;\r\n    font-size: 1rem;\r\n    font-weight: bold;\r\n    border-radius: 6px;\r\n    cursor: pointer;\r\n    transition: background-color 0.2s;\r\n  }\r\n\r\n  .next-btn:hover {\r\n    background-color: #2b6cb0;\r\n  }\r\n\u003C\u002Fstyle\u003E\r\n\r\n\u003Cdiv class=\"news-wrapper\"\u003E\r\n  \u003C!-- 新闻正文部分 --\u003E\r\n  \u003Cspan class=\"news-category\"\u003EIT・教育\u003C\u002Fspan\u003E\r\n  \u003Ch1 class=\"news-title\"\u003E\r\n    国内初、滋賀大が教育用AI「ChatGPT Education」導入 「生成AIは、あらゆる業種で必須と言っても過言ではない」\r\n  \u003C\u002Fh1\u003E\r\n  \u003Cdiv class=\"news-meta\"\u003E\r\n    \u003Ctime datetime=\"2025-03-14\"\u003E2025年3月14日\u003C\u002Ftime\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\r\n  \u003Cdiv class=\"news-content\"\u003E\r\n    \u003Cp\u003E滋賀大学は3月12日、米OpenAIが提供する教育用AIツール「ChatGPT Education」を導入すると発表した。学生に対し、生成AI技術に触れる機会を提供するのが目的。国内の大学で同ツールを導入するのは、初の試みとなる。\u003C\u002Fp\u003E\r\n    \u003Cp\u003E利用用途としては「Canvas（ChatGPTと共同でテキストやコードを編集できる機能）で学生がプログラムを書く際のエラー原因や最適なコードの書き方を提案させるなど、Pythonなどのプログラミング習得の補助」「語学学習や外国語の論文執筆での文章添削」「データ分析機能で、学生の学習状況・成績データなどを分析し、個別の学習プランやアドバイスの提供」「夜間・休日にも学生の質問への自動応答」などを挙げている。\u003C\u002Fp\u003E\r\n    \u003Cp\u003E滋賀大は「学生が大学を卒業・修了したのち社会で活躍していくにあたり、生成AI技術を使いこなしていくことは、今やあらゆる業種で必須と言っても過言ではない」と説明。企業活動などでの利用を想定した生成AI技術を学生の段階から提供することで、実践的なスキルを学べる場を作り上げていく。\u003C\u002Fp\u003E\r\n    \u003Cp\u003E「生成AIを用いて効果的に研究を実施する、論文の校正に生成AIを活用する、生成AIで授業を改善するなど、研究者が研究や教育活動をより効率的に進めることのできる環境の整備を進めていく」（滋賀大）\u003C\u002Fp\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\r\n  \u003C!-- 无点赞\u002F点踩的简洁评论区 --\u003E\r\n  \u003Cdiv class=\"comments-section\"\u003E\r\n    \u003Cdiv class=\"comments-header\"\u003E\r\n      コメント (120件,いいねが多い順)\r\n    \u003C\u002Fdiv\u003E\r\n\r\n    \u003C!-- 评论 1 --\u003E\r\n    \u003Cdiv class=\"comment-item\"\u003E\r\n      \u003Cdiv class=\"comment-user\"\u003E👤 wkj********\u003C\u002Fdiv\u003E\r\n      \u003Cp class=\"comment-body\"\u003E\r\n        AIはいつも使っている。レポート作成のときに使ってみたら、情報整理が本当に楽になった。自分で全部調べるよりも、必要な情報をまとめる時間がかなり短くなった。僕の大学ではまだ導入されていないから、早く導入してもらいたい。\r\n      \u003C\u002Fp\u003E\r\n    \u003C\u002Fdiv\u003E\r\n\r\n    \u003C!-- 评论 2 --\u003E\r\n    \u003Cdiv class=\"comment-item\"\u003E\r\n      \u003Cdiv class=\"comment-user\"\u003E👤 bwa*****\u003C\u002Fdiv\u003E\r\n      \u003Cp class=\"comment-body\"\u003E\r\n        英語の論文を読むときにAIは要約してくれるので、理解が深まった。学習の幅が広がると思うし、苦手意識も少し減った気がする。\r\n      \u003C\u002Fp\u003E\r\n    \u003C\u002Fdiv\u003E\r\n\r\n    \u003C!-- 评论 3 --\u003E\r\n    \u003Cdiv class=\"comment-item\"\u003E\r\n      \u003Cdiv class=\"comment-user\"\u003E👤 kio2****\u003C\u002Fdiv\u003E\r\n      \u003Cp class=\"comment-body\"\u003E\r\n        疑問に思ったことをすぐに質問できるのが便利。先生に聞きづらいことも気軽に調べられる。自分一人では解決しにくい内容でも、すぐに整理して教えてくれるのはありがたい。AIは調べてくれることもメリットだけど、聞きづらいことを聞けるという点もかなり大きいと思う。\r\n      \u003C\u002Fp\u003E\r\n    \u003C\u002Fdiv\u003E\r\n\r\n    \u003C!-- 评论 4 --\u003E\r\n    \u003Cdiv class=\"comment-item\"\u003E\r\n      \u003Cdiv class=\"comment-user\"\u003E👤 mtn*****\u003C\u002Fdiv\u003E\r\n      \u003Cp class=\"comment-body\"\u003E\r\n        自分のアイデアを深めるときにヒントをもらえるのが助かる。一人で考えているだけでは思いつかない視点を出してくれるので、創造的な学びに役立っていると感じる。発想のきっかけになるのは大きな魅力だと思う。\r\n      \u003C\u002Fp\u003E\r\n    \u003C\u002Fdiv\u003E\r\n\r\n    \u003C!-- 评论 5 --\u003E\r\n    \u003Cdiv class=\"comment-item\"\u003E\r\n      \u003Cdiv class=\"comment-user\"\u003E👤 tnp****\u003C\u002Fdiv\u003E\r\n      \u003Cp class=\"comment-body\"\u003E\r\n        実はまだAIを使ったことがないから、使ってみようと思う。\r\n      \u003C\u002Fp\u003E\r\n    \u003C\u002Fdiv\u003E\r\n\r\n    \u003C!-- 评论 6 --\u003E\r\n    \u003Cdiv class=\"comment-item\"\u003E\r\n      \u003Cdiv class=\"comment-user\"\u003E👤 hrk********\u003C\u002Fdiv\u003E\r\n      \u003Cp class=\"comment-body\"\u003E\r\n        教育分野におけるAI活用は今後ますます拡大すると予測されており、早期導入には意義がある。今のうちから使い方や注意点を学んでおくことは、学生にとっても十分に意味があると思う。\r\n      \u003C\u002Fp\u003E\r\n    \u003C\u002Fdiv\u003E\r\n\r\n  \u003C\u002Fdiv\u003E\r\n\r\n\u003C\u002Fdiv\u003E",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ進む",
      "submitButtonPosition": "right",
      "files": {
        "滋贺大学.jpg": "embedded\u002F03bca41778a30419aec57e7fac4a661e09f5fb6ea9b308ddb97736455661fc1e.jpg"
      },
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Condition_Support_Message",
      "skip": "${this.state.participantID % 5 != 1}"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "image",
          "src": "${ this.files[\"滋贺大学.jpg\"] }",
          "name": ""
        },
        {
          "required": true,
          "type": "html",
          "content": "\u003Cstyle\u003E\r\n  .news-wrapper {\r\n    max-width: 680px;\r\n    margin: 20px auto;\r\n    padding: 30px;\r\n    background-color: #ffffff;\r\n    border: 1px solid #e2e8f0;\r\n    border-radius: 8px;\r\n    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);\r\n    font-family: -apple-system, BlinkMacSystemFont, \"Hiragino Kaku Gothic ProN\", \"メイリオ\", meiryo, sans-serif;\r\n    color: #2d3748;\r\n    text-align: left;\r\n    line-height: 1.8;\r\n  }\r\n\r\n  \u002F* 新闻主体 *\u002F\r\n  .news-category {\r\n    display: inline-block;\r\n    background-color: #ebf8ff;\r\n    color: #2b6cb0;\r\n    font-size: 0.85rem;\r\n    font-weight: bold;\r\n    padding: 3px 10px;\r\n    border-radius: 4px;\r\n    margin-bottom: 12px;\r\n  }\r\n\r\n  .news-title {\r\n    font-size: 1.5rem;\r\n    font-weight: 700;\r\n    color: #1a202c;\r\n    line-height: 1.4;\r\n    margin: 0 0 16px 0;\r\n    letter-spacing: -0.02em;\r\n  }\r\n\r\n  .news-meta {\r\n    font-size: 0.85rem;\r\n    color: #718096;\r\n    border-bottom: 1px solid #edf2f7;\r\n    padding-bottom: 12px;\r\n    margin-bottom: 24px;\r\n  }\r\n\r\n  .news-content p {\r\n    font-size: 1rem;\r\n    margin-bottom: 1.2rem;\r\n    text-align: justify;\r\n    word-break: break-word;\r\n  }\r\n\r\n  .news-content blockquote {\r\n    margin: 1.5rem 0;\r\n    padding: 12px 18px;\r\n    background-color: #f7fafc;\r\n    border-left: 4px solid #3182ce;\r\n    font-style: normal;\r\n    color: #4a5568;\r\n  }\r\n\r\n  \u002F* --- Yahoo 风格评论区（纯文本无互动数据） --- *\u002F\r\n  .comments-section {\r\n    margin-top: 40px;\r\n    padding-top: 20px;\r\n  }\r\n\r\n  .comments-header {\r\n    font-size: 1.25rem;\r\n    font-weight: bold;\r\n    color: #000000;\r\n    margin-bottom: 24px;\r\n    display: flex;\r\n    align-items: center;\r\n    border-left: 5px solid #0056b3; \u002F* 经典蓝色竖线 *\u002F\r\n    padding-left: 10px;\r\n    line-height: 1.2;\r\n  }\r\n\r\n  .comment-item {\r\n    padding-bottom: 16px;\r\n    margin-bottom: 16px;\r\n    border-bottom: 1px solid #eef1f5; \u002F* 淡灰色分割线 *\u002F\r\n  }\r\n\r\n  .comment-item:last-child {\r\n    border-bottom: none;\r\n  }\r\n\r\n  .comment-user {\r\n    font-size: 0.9rem;\r\n    font-weight: bold;\r\n    color: #333333;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 6px;\r\n    margin-bottom: 6px;\r\n  }\r\n\r\n  .comment-body {\r\n    font-size: 0.95rem;\r\n    color: #222222;\r\n    line-height: 1.6;\r\n    margin: 0;\r\n    text-align: justify;\r\n  }\r\n\r\n  \u002F* 按钮区域 *\u002F\r\n  .btn-container {\r\n    margin-top: 36px;\r\n    text-align: center;\r\n  }\r\n\r\n  .next-btn {\r\n    background-color: #3182ce;\r\n    color: white;\r\n    border: none;\r\n    padding: 12px 36px;\r\n    font-size: 1rem;\r\n    font-weight: bold;\r\n    border-radius: 6px;\r\n    cursor: pointer;\r\n    transition: background-color 0.2s;\r\n  }\r\n\r\n  .next-btn:hover {\r\n    background-color: #2b6cb0;\r\n  }\r\n\u003C\u002Fstyle\u003E\r\n\r\n\u003Cdiv class=\"news-wrapper\"\u003E\r\n  \u003C!-- 新闻正文部分 --\u003E\r\n  \u003Cspan class=\"news-category\"\u003EIT・教育\u003C\u002Fspan\u003E\r\n  \u003Ch1 class=\"news-title\"\u003E\r\n    国内初、滋賀大が教育用AI「ChatGPT Education」導入 「生成AIは、あらゆる業種で必須と言っても過言ではない」\r\n  \u003C\u002Fh1\u003E\r\n  \u003Cdiv class=\"news-meta\"\u003E\r\n    \u003Ctime datetime=\"2025-03-14\"\u003E2025年3月14日\u003C\u002Ftime\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\r\n  \u003Cdiv class=\"news-content\"\u003E\r\n    \u003Cp\u003E滋賀大学は3月12日、米OpenAIが提供する教育用AIツール「ChatGPT Education」を導入すると発表した。学生に対し、生成AI技術に触れる機会を提供するのが目的。国内の大学で同ツールを導入するのは、初の試みとなる。\u003C\u002Fp\u003E\r\n    \u003Cp\u003E利用用途としては「Canvas（ChatGPTと共同でテキストやコードを編集できる機能）で学生がプログラムを書く際のエラー原因や最適なコードの書き方を提案させるなど、Pythonなどのプログラミング習得の補助」「語学学習や外国語の論文執筆での文章添削」「データ分析機能で、学生の学習状況・成績データなどを分析し、個別の学習プランやアドバイスの提供」「夜間・休日にも学生の質問への自動応答」などを挙げている。\u003C\u002Fp\u003E\r\n    \u003Cp\u003E滋賀大は「学生が大学を卒業・修了したのち社会で活躍していくにあたり、生成AI技術を使いこなしていくことは、今やあらゆる業種で必須と言っても過言ではない」と説明。企業活動などでの利用を想定した生成AI技術を学生の段階から提供することで、実践的なスキルを学べる場を作り上げていく。\u003C\u002Fp\u003E\r\n    \u003Cp\u003E「生成AIを用いて効果的に研究を実施する、論文の校正に生成AIを活用する、生成AIで授業を改善するなど、研究者が研究や教育活動をより効率的に進めることのできる環境の整備を進めていく」（滋賀大）\u003C\u002Fp\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\r\n  \u003C!-- 无点赞\u002F点踩的简洁评论区 --\u003E\r\n  \u003Cdiv class=\"comments-section\"\u003E\r\n    \u003Cdiv class=\"comments-header\"\u003E\r\n      コメント (120件,いいねが多い順)\r\n    \u003C\u002Fdiv\u003E\r\n\r\n    \u003C!-- 评论 1 --\u003E\r\n    \u003Cdiv class=\"comment-item\"\u003E\r\n      \u003Cdiv class=\"comment-user\"\u003E👤 wkj********\u003C\u002Fdiv\u003E\r\n      \u003Cp class=\"comment-body\"\u003E\r\n        AIに頼りすぎると、自分で考える力がどんどん落ちてしまう気がする。便利そうに見えても、気づかないうちに自分の頭で考える機会が減ってしまいそうで不安だ。\r\n      \u003C\u002Fp\u003E\r\n    \u003C\u002Fdiv\u003E\r\n\r\n    \u003C!-- 评论 2 --\u003E\r\n    \u003Cdiv class=\"comment-item\"\u003E\r\n      \u003Cdiv class=\"comment-user\"\u003E👤 bwa*****\u003C\u002Fdiv\u003E\r\n      \u003Cp class=\"comment-body\"\u003E\r\n        レポートもAIに書かせてしまうと、学びの意味がなくなると思う。大学は、自分で考える場のはずだ。\r\n      \u003C\u002Fp\u003E\r\n    \u003C\u002Fdiv\u003E\r\n\r\n    \u003C!-- 评论 3 --\u003E\r\n    \u003Cdiv class=\"comment-item\"\u003E\r\n      \u003Cdiv class=\"comment-user\"\u003E👤 kio2****\u003C\u002Fdiv\u003E\r\n      \u003Cp class=\"comment-body\"\u003E\r\n        友達が課題をAIでやって提出していたけど、それって本当に自分の力になるのかなと疑問に思った。その場では楽でも、あとで何も残らないのではないかと感じる。便利なのはわかるけど、使いすぎると依存してしまいそうで怖い。\r\n      \u003C\u002Fp\u003E\r\n    \u003C\u002Fdiv\u003E\r\n\r\n    \u003C!-- 评论 4 --\u003E\r\n    \u003Cdiv class=\"comment-item\"\u003E\r\n      \u003Cdiv class=\"comment-user\"\u003E👤 mtn*****\u003C\u002Fdiv\u003E\r\n      \u003Cp class=\"comment-body\"\u003E\r\n        生成AIが学習成果を本当に向上させるという十分な科学的根拠はまだ確立されていません。便利そうに見える一方で、効果が本当に長期的な学力向上につながるのかは慎重に見極める必要があると思う。今回、日本で初めてChatGPT Educationが導入されたとのことですが、日本の教育におけるAI活用が学生の学びにどのような影響を与えるのかは十分に調査されるべきです。\r\n      \u003C\u002Fp\u003E\r\n    \u003C\u002Fdiv\u003E\r\n\r\n    \u003C!-- 评论 5 --\u003E\r\n    \u003Cdiv class=\"comment-item\"\u003E\r\n      \u003Cdiv class=\"comment-user\"\u003E👤 tnp****\u003C\u002Fdiv\u003E\r\n      \u003Cp class=\"comment-body\"\u003E\r\n        実はまだAIを使ったことがないから、使ってみようと思う。\r\n      \u003C\u002Fp\u003E\r\n    \u003C\u002Fdiv\u003E\r\n\r\n    \u003C!-- 评论 6 --\u003E\r\n    \u003Cdiv class=\"comment-item\"\u003E\r\n      \u003Cdiv class=\"comment-user\"\u003E👤 hrk********\u003C\u002Fdiv\u003E\r\n      \u003Cp class=\"comment-body\"\u003E\r\n        教育現場でのAI活用には、長期的な影響を検証するための継続的な調査が必要です。短期的な便利さだけで判断せず、学力や思考力への影響を時間をかけて確かめるべきだと思う。安易な導入は避けるべきだと考えます。\r\n      \u003C\u002Fp\u003E\r\n    \u003C\u002Fdiv\u003E\r\n\r\n  \u003C\u002Fdiv\u003E\r\n\r\n\u003C\u002Fdiv\u003E",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ進む",
      "submitButtonPosition": "right",
      "files": {
        "滋贺大学.jpg": "embedded\u002F03bca41778a30419aec57e7fac4a661e09f5fb6ea9b308ddb97736455661fc1e.jpg"
      },
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Condition_Oppose_Message",
      "skip": "${this.state.participantID % 5 != 2}"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "image",
          "src": "${ this.files[\"滋贺大学.jpg\"] }",
          "name": ""
        },
        {
          "required": true,
          "type": "html",
          "content": "\u003Cstyle\u003E\r\n  .news-wrapper {\r\n    max-width: 680px;\r\n    margin: 20px auto;\r\n    padding: 30px;\r\n    background-color: #ffffff;\r\n    border: 1px solid #e2e8f0;\r\n    border-radius: 8px;\r\n    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);\r\n    font-family: -apple-system, BlinkMacSystemFont, \"Hiragino Kaku Gothic ProN\", \"メイリオ\", meiryo, sans-serif;\r\n    color: #2d3748;\r\n    text-align: left;\r\n    line-height: 1.8;\r\n  }\r\n\r\n  \u002F* 新闻主体样式 *\u002F\r\n  .news-category {\r\n    display: inline-block;\r\n    background-color: #ebf8ff;\r\n    color: #2b6cb0;\r\n    font-size: 0.85rem;\r\n    font-weight: bold;\r\n    padding: 3px 10px;\r\n    border-radius: 4px;\r\n    margin-bottom: 12px;\r\n  }\r\n\r\n  .news-title {\r\n    font-size: 1.5rem;\r\n    font-weight: 700;\r\n    color: #1a202c;\r\n    line-height: 1.4;\r\n    margin: 0 0 16px 0;\r\n    letter-spacing: -0.02em;\r\n  }\r\n\r\n  .news-meta {\r\n    font-size: 0.85rem;\r\n    color: #718096;\r\n    border-bottom: 1px solid #edf2f7;\r\n    padding-bottom: 12px;\r\n    margin-bottom: 24px;\r\n  }\r\n\r\n  .news-content p {\r\n    font-size: 1rem;\r\n    margin-bottom: 1.2rem;\r\n    text-align: justify;\r\n    word-break: break-word;\r\n  }\r\n\r\n  .news-content blockquote {\r\n    margin: 1.5rem 0;\r\n    padding: 12px 18px;\r\n    background-color: #f7fafc;\r\n    border-left: 4px solid #3182ce;\r\n    font-style: normal;\r\n    color: #4a5568;\r\n  }\r\n\r\n  \u002F* --- 语音评论区样式 --- *\u002F\r\n  .comments-section {\r\n    margin-top: 40px;\r\n    padding-top: 20px;\r\n  }\r\n\r\n  .comments-header {\r\n    font-size: 1.25rem;\r\n    font-weight: bold;\r\n    color: #000000;\r\n    margin-bottom: 24px;\r\n    display: flex;\r\n    align-items: center;\r\n    border-left: 5px solid #0056b3;\r\n    padding-left: 10px;\r\n    line-height: 1.2;\r\n  }\r\n\r\n  .comment-item {\r\n    padding-bottom: 18px;\r\n    margin-bottom: 18px;\r\n    border-bottom: 1px solid #eef1f5;\r\n  }\r\n\r\n  .comment-item:last-child {\r\n    border-bottom: none;\r\n  }\r\n\r\n  .comment-user {\r\n    font-size: 0.9rem;\r\n    font-weight: bold;\r\n    color: #333333;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 6px;\r\n    margin-bottom: 10px;\r\n  }\r\n\r\n  \u002F* 语音播放器优化 *\u002F\r\n  .audio-player {\r\n    width: 100%;\r\n    max-width: 400px;\r\n    height: 40px;\r\n    outline: none;\r\n  }\r\n\r\n  \u002F* 下一步按钮 *\u002F\r\n  .btn-container {\r\n    margin-top: 36px;\r\n    text-align: center;\r\n  }\r\n\r\n  .next-btn {\r\n    background-color: #3182ce;\r\n    color: white;\r\n    border: none;\r\n    padding: 12px 36px;\r\n    font-size: 1rem;\r\n    font-weight: bold;\r\n    border-radius: 6px;\r\n    cursor: pointer;\r\n    transition: background-color 0.2s;\r\n  }\r\n\r\n  .next-btn:hover {\r\n    background-color: #2b6cb0;\r\n  }\r\n\u003C\u002Fstyle\u003E\r\n\r\n\u003Cdiv class=\"news-wrapper\"\u003E\r\n  \u003C!-- 1. 新闻正文 --\u003E\r\n  \u003Cspan class=\"news-category\"\u003EIT・教育\u003C\u002Fspan\u003E\r\n  \u003Ch1 class=\"news-title\"\u003E\r\n    国内初、滋賀大が教育用AI「ChatGPT Education」導入 「生成AIは、あらゆる業種で必須と言っても過言ではない」\r\n  \u003C\u002Fh1\u003E\r\n  \u003Cdiv class=\"news-meta\"\u003E\r\n    \u003Ctime datetime=\"2025-03-14\"\u003E2025年3月14日\u003C\u002Ftime\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\r\n  \u003Cdiv class=\"news-content\"\u003E\r\n    \u003Cp\u003E滋賀大学は3月12日、米OpenAIが提供する教育用AIツール「ChatGPT Education」を導入すると発表した。学生に対し、生成AI技術に触れる機会を提供するのが目的。国内の大学で同ツールを導入するのは、初の試みとなる。\u003C\u002Fp\u003E\r\n    \u003Cp\u003E利用用途としては「Canvas（ChatGPTと共同でテキストやコードを編集できる機能）で学生がプログラムを書く際のエラー原因や最適なコードの書き方を提案させるなど、Pythonなどのプログラミング習得の補助」「語学学習や外国語の論文執筆での文章添削」「データ分析機能で、学生の学習状況・成績データなどを分析し、個別の学習プランやアドバイスの提供」「夜間・休日にも学生の質問への自動応答」などを挙げている。\u003C\u002Fp\u003E\r\n    \u003Cp\u003E滋賀大は「学生が大学を卒業・修了したのち社会で活躍していくにあたり、生成AI技術を使いこなしていくことは、今やあらゆる業種で必須と言っても過言ではない」と説明。企業活動などでの利用を想定した生成AI技術を学生の段階から提供することで、実践的なスキルを学べる場を作り上げていく。\u003C\u002Fp\u003E\r\n    \u003Cp\u003E「生成AIを用いて効果的に研究を実施する、論文の校正に生成AIを活用する、生成AIで授業を改善するなど、研究者が研究や教育活動をより効率的に進めることのできる環境の整備を進めていく」（滋賀大）\u003C\u002Fp\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\r\n\u003C!-- 2. 音频评论区 --\u003E\r\n  \u003Cdiv class=\"comments-section\"\u003E\r\n    \u003Cdiv class=\"comments-header\"\u003E\r\n      コメント (120件,いいねが多い順)\r\n    \u003C\u002Fdiv\u003E\r\n\r\n    \u003C!-- 音频 1 --\u003E\r\n    \u003Cdiv class=\"comment-item\"\u003E\r\n      \u003Cdiv class=\"comment-user\"\u003E👤 wkj********\u003C\u002Fdiv\u003E\r\n      \u003Caudio id=\"audio-1\" class=\"audio-player\" controls controlsList=\"nodownload\"\u003E\r\n        お使いのブラウザは音声再生に対応していません。\r\n      \u003C\u002Faudio\u003E\r\n    \u003C\u002Fdiv\u003E\r\n\r\n    \u003C!-- 音频 2 --\u003E\r\n    \u003Cdiv class=\"comment-item\"\u003E\r\n      \u003Cdiv class=\"comment-user\"\u003E👤 bwa*****\u003C\u002Fdiv\u003E\r\n      \u003Caudio id=\"audio-2\" class=\"audio-player\" controls controlsList=\"nodownload\"\u003E\r\n        お使いのブラウザは音声再生に対応していません。\r\n      \u003C\u002Faudio\u003E\r\n    \u003C\u002Fdiv\u003E\r\n\r\n    \u003C!-- 音频 3 --\u003E\r\n    \u003Cdiv class=\"comment-item\"\u003E\r\n      \u003Cdiv class=\"comment-user\"\u003E👤 kio2****\u003C\u002Fdiv\u003E\r\n      \u003Caudio id=\"audio-3\" class=\"audio-player\" controls controlsList=\"nodownload\"\u003E\r\n        お使いのブラウザは音声再生に対応していません。\r\n      \u003C\u002Faudio\u003E\r\n    \u003C\u002Fdiv\u003E\r\n\r\n    \u003C!-- 音频 4 --\u003E\r\n    \u003Cdiv class=\"comment-item\"\u003E\r\n      \u003Cdiv class=\"comment-user\"\u003E👤 mtn*****\u003C\u002Fdiv\u003E\r\n      \u003Caudio id=\"audio-4\" class=\"audio-player\" controls controlsList=\"nodownload\"\u003E\r\n        お使いのブラウザは音声再生に対応していません。\r\n      \u003C\u002Faudio\u003E\r\n    \u003C\u002Fdiv\u003E\r\n\r\n    \u003C!-- 音频 5 --\u003E\r\n    \u003Cdiv class=\"comment-item\"\u003E\r\n      \u003Cdiv class=\"comment-user\"\u003E👤 tnp****\u003C\u002Fdiv\u003E\r\n      \u003Caudio id=\"audio-5\" class=\"audio-player\" controls controlsList=\"nodownload\"\u003E\r\n        お使いのブラウザは音声再生に対応していません。\r\n      \u003C\u002Faudio\u003E\r\n    \u003C\u002Fdiv\u003E\r\n\r\n    \u003C!-- 音频 6 --\u003E\r\n    \u003Cdiv class=\"comment-item\"\u003E\r\n      \u003Cdiv class=\"comment-user\"\u003E👤 hrk********\u003C\u002Fdiv\u003E\r\n      \u003Caudio id=\"audio-6\" class=\"audio-player\" controls controlsList=\"nodownload\"\u003E\r\n        お使いのブラウザは音声再生に対応していません。\r\n      \u003C\u002Faudio\u003E\r\n    \u003C\u002Fdiv\u003E\r\n\r\n  \u003C\u002Fdiv\u003E\r\n\r\n\u003C\u002Fdiv\u003E",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ進む",
      "submitButtonPosition": "right",
      "files": {
        "oppose1.mp3": "embedded\u002F28f0a3479312f381feb368c59ee8ac0b3d90d97cb22b6ffc69289fb96115ed59.mp3",
        "oppose2.mp3": "embedded\u002F66ef3e5433c683f3c596bb35b2d6f50f38d561da46325e16aa09314b6e431dc7.mp3",
        "滋贺大学.jpg": "embedded\u002F03bca41778a30419aec57e7fac4a661e09f5fb6ea9b308ddb97736455661fc1e.jpg",
        "oppose3.mp3": "embedded\u002F996790da29a494eb2ad313940320d790ce48d3ed90468190be5bd2b35b317215.mp3",
        "oppose4.mp3": "embedded\u002F749801020d7dc5360adbafaca9173dcb5d985356dccf1f4c38552dd4809f010c.mp3",
        "oppose5.mp3": "embedded\u002F51d25b3cc8e11cde2f9e27f854ca0996339e735368ac4552fbe9f838efe3afc4.mp3",
        "oppose6.mp3": "embedded\u002Faf7cdd313ab52d38978f8586a3dd3bcc29b6faf78d5758c70f363b6519118401.mp3"
      },
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "run": function anonymous(
) {
// 注意：不要在外面包 this.on('run') 了！
for (let i = 1; i <= 6; i++) {
  const fileName = `oppose${i}.mp3`;
  
  // 兼容 lab.js 不同的资源获取 API
  let fileUrl = null;
  if (this.options && this.options.files && this.options.files[fileName]) {
    fileUrl = this.options.files[fileName];
  } else if (this.files && this.files[fileName]) {
    fileUrl = this.files[fileName];
  } else if (this.files && typeof this.files.url === 'function') {
    fileUrl = this.files.url(fileName);
  }

  const audioElement = document.querySelector(`#audio-${i}`);
  if (audioElement && fileUrl) {
    audioElement.src = fileUrl;
  }
}
}
      },
      "title": "Condition_Oppose_Voice",
      "skip": "${this.state.participantID % 5 != 3}"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "image",
          "src": "${ this.files[\"滋贺大学.jpg\"] }",
          "name": ""
        },
        {
          "required": true,
          "type": "html",
          "content": "\u003Cstyle\u003E\r\n  .news-wrapper {\r\n    max-width: 680px;\r\n    margin: 20px auto;\r\n    padding: 30px;\r\n    background-color: #ffffff;\r\n    border: 1px solid #e2e8f0;\r\n    border-radius: 8px;\r\n    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);\r\n    font-family: -apple-system, BlinkMacSystemFont, \"Hiragino Kaku Gothic ProN\", \"メイリオ\", meiryo, sans-serif;\r\n    color: #2d3748;\r\n    text-align: left;\r\n    line-height: 1.8;\r\n  }\r\n\r\n  \u002F* 新闻主体样式 *\u002F\r\n  .news-category {\r\n    display: inline-block;\r\n    background-color: #ebf8ff;\r\n    color: #2b6cb0;\r\n    font-size: 0.85rem;\r\n    font-weight: bold;\r\n    padding: 3px 10px;\r\n    border-radius: 4px;\r\n    margin-bottom: 12px;\r\n  }\r\n\r\n  .news-title {\r\n    font-size: 1.5rem;\r\n    font-weight: 700;\r\n    color: #1a202c;\r\n    line-height: 1.4;\r\n    margin: 0 0 16px 0;\r\n    letter-spacing: -0.02em;\r\n  }\r\n\r\n  .news-meta {\r\n    font-size: 0.85rem;\r\n    color: #718096;\r\n    border-bottom: 1px solid #edf2f7;\r\n    padding-bottom: 12px;\r\n    margin-bottom: 24px;\r\n  }\r\n\r\n  .news-content p {\r\n    font-size: 1rem;\r\n    margin-bottom: 1.2rem;\r\n    text-align: justify;\r\n    word-break: break-word;\r\n  }\r\n\r\n  .news-content blockquote {\r\n    margin: 1.5rem 0;\r\n    padding: 12px 18px;\r\n    background-color: #f7fafc;\r\n    border-left: 4px solid #3182ce;\r\n    font-style: normal;\r\n    color: #4a5568;\r\n  }\r\n\r\n  \u002F* --- 语音评论区样式 --- *\u002F\r\n  .comments-section {\r\n    margin-top: 40px;\r\n    padding-top: 20px;\r\n  }\r\n\r\n  .comments-header {\r\n    font-size: 1.25rem;\r\n    font-weight: bold;\r\n    color: #000000;\r\n    margin-bottom: 24px;\r\n    display: flex;\r\n    align-items: center;\r\n    border-left: 5px solid #0056b3;\r\n    padding-left: 10px;\r\n    line-height: 1.2;\r\n  }\r\n\r\n  .comment-item {\r\n    padding-bottom: 18px;\r\n    margin-bottom: 18px;\r\n    border-bottom: 1px solid #eef1f5;\r\n  }\r\n\r\n  .comment-item:last-child {\r\n    border-bottom: none;\r\n  }\r\n\r\n  .comment-user {\r\n    font-size: 0.9rem;\r\n    font-weight: bold;\r\n    color: #333333;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 6px;\r\n    margin-bottom: 10px;\r\n  }\r\n\r\n  \u002F* 语音播放器优化 *\u002F\r\n  .audio-player {\r\n    width: 100%;\r\n    max-width: 400px;\r\n    height: 40px;\r\n    outline: none;\r\n  }\r\n\r\n  \u002F* 下一步按钮 *\u002F\r\n  .btn-container {\r\n    margin-top: 36px;\r\n    text-align: center;\r\n  }\r\n\r\n  .next-btn {\r\n    background-color: #3182ce;\r\n    color: white;\r\n    border: none;\r\n    padding: 12px 36px;\r\n    font-size: 1rem;\r\n    font-weight: bold;\r\n    border-radius: 6px;\r\n    cursor: pointer;\r\n    transition: background-color 0.2s;\r\n  }\r\n\r\n  .next-btn:hover {\r\n    background-color: #2b6cb0;\r\n  }\r\n\u003C\u002Fstyle\u003E\r\n\r\n\u003Cdiv class=\"news-wrapper\"\u003E\r\n  \u003C!-- 1. 新闻正文 --\u003E\r\n  \u003Cspan class=\"news-category\"\u003EIT・教育\u003C\u002Fspan\u003E\r\n  \u003Ch1 class=\"news-title\"\u003E\r\n    国内初、滋賀大が教育用AI「ChatGPT Education」導入 「生成AIは、あらゆる業種で必須と言っても過言ではない」\r\n  \u003C\u002Fh1\u003E\r\n  \u003Cdiv class=\"news-meta\"\u003E\r\n    \u003Ctime datetime=\"2025-03-14\"\u003E2025年3月14日\u003C\u002Ftime\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\r\n  \u003Cdiv class=\"news-content\"\u003E\r\n    \u003Cp\u003E滋賀大学は3月12日、米OpenAIが提供する教育用AIツール「ChatGPT Education」を導入すると発表した。学生に対し、生成AI技術に触れる機会を提供するのが目的。国内の大学で同ツールを導入するのは、初の試みとなる。\u003C\u002Fp\u003E\r\n    \u003Cp\u003E利用用途としては「Canvas（ChatGPTと共同でテキストやコードを編集できる機能）で学生がプログラムを書く際のエラー原因や最適なコードの書き方を提案させるなど、Pythonなどのプログラミング習得の補助」「語学学習や外国語の論文執筆での文章添削」「データ分析機能で、学生の学習状況・成績データなどを分析し、個別の学習プランやアドバイスの提供」「夜間・休日にも学生の質問への自動応答」などを挙げている。\u003C\u002Fp\u003E\r\n    \u003Cp\u003E滋賀大は「学生が大学を卒業・修了したのち社会で活躍していくにあたり、生成AI技術を使いこなしていくことは、今やあらゆる業種で必須と言っても過言ではない」と説明。企業活動などでの利用を想定した生成AI技術を学生の段階から提供することで、実践的なスキルを学べる場を作り上げていく。\u003C\u002Fp\u003E\r\n    \u003Cp\u003E「生成AIを用いて効果的に研究を実施する、論文の校正に生成AIを活用する、生成AIで授業を改善するなど、研究者が研究や教育活動をより効率的に進めることのできる環境の整備を進めていく」（滋賀大）\u003C\u002Fp\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\r\n\u003C!-- 2. 音频评论区 --\u003E\r\n  \u003Cdiv class=\"comments-section\"\u003E\r\n    \u003Cdiv class=\"comments-header\"\u003E\r\n      コメント (120件,いいねが多い順)\r\n    \u003C\u002Fdiv\u003E\r\n\r\n    \u003C!-- 音频 1 --\u003E\r\n    \u003Cdiv class=\"comment-item\"\u003E\r\n      \u003Cdiv class=\"comment-user\"\u003E👤 wkj********\u003C\u002Fdiv\u003E\r\n      \u003Caudio id=\"audio-1\" class=\"audio-player\" controls controlsList=\"nodownload\"\u003E\r\n        お使いのブラウザは音声再生に対応していません。\r\n      \u003C\u002Faudio\u003E\r\n    \u003C\u002Fdiv\u003E\r\n\r\n    \u003C!-- 音频 2 --\u003E\r\n    \u003Cdiv class=\"comment-item\"\u003E\r\n      \u003Cdiv class=\"comment-user\"\u003E👤 bwa*****\u003C\u002Fdiv\u003E\r\n      \u003Caudio id=\"audio-2\" class=\"audio-player\" controls controlsList=\"nodownload\"\u003E\r\n        お使いのブラウザは音声再生に対応していません。\r\n      \u003C\u002Faudio\u003E\r\n    \u003C\u002Fdiv\u003E\r\n\r\n    \u003C!-- 音频 3 --\u003E\r\n    \u003Cdiv class=\"comment-item\"\u003E\r\n      \u003Cdiv class=\"comment-user\"\u003E👤 kio2****\u003C\u002Fdiv\u003E\r\n      \u003Caudio id=\"audio-3\" class=\"audio-player\" controls controlsList=\"nodownload\"\u003E\r\n        お使いのブラウザは音声再生に対応していません。\r\n      \u003C\u002Faudio\u003E\r\n    \u003C\u002Fdiv\u003E\r\n\r\n    \u003C!-- 音频 4 --\u003E\r\n    \u003Cdiv class=\"comment-item\"\u003E\r\n      \u003Cdiv class=\"comment-user\"\u003E👤 mtn*****\u003C\u002Fdiv\u003E\r\n      \u003Caudio id=\"audio-4\" class=\"audio-player\" controls controlsList=\"nodownload\"\u003E\r\n        お使いのブラウザは音声再生に対応していません。\r\n      \u003C\u002Faudio\u003E\r\n    \u003C\u002Fdiv\u003E\r\n\r\n    \u003C!-- 音频 5 --\u003E\r\n    \u003Cdiv class=\"comment-item\"\u003E\r\n      \u003Cdiv class=\"comment-user\"\u003E👤 tnp****\u003C\u002Fdiv\u003E\r\n      \u003Caudio id=\"audio-5\" class=\"audio-player\" controls controlsList=\"nodownload\"\u003E\r\n        お使いのブラウザは音声再生に対応していません。\r\n      \u003C\u002Faudio\u003E\r\n    \u003C\u002Fdiv\u003E\r\n\r\n    \u003C!-- 音频 6 --\u003E\r\n    \u003Cdiv class=\"comment-item\"\u003E\r\n      \u003Cdiv class=\"comment-user\"\u003E👤 hrk********\u003C\u002Fdiv\u003E\r\n      \u003Caudio id=\"audio-6\" class=\"audio-player\" controls controlsList=\"nodownload\"\u003E\r\n        お使いのブラウザは音声再生に対応していません。\r\n      \u003C\u002Faudio\u003E\r\n    \u003C\u002Fdiv\u003E\r\n\r\n  \u003C\u002Fdiv\u003E\r\n\r\n\u003C\u002Fdiv\u003E",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ進む",
      "submitButtonPosition": "right",
      "files": {
        "滋贺大学.jpg": "embedded\u002F03bca41778a30419aec57e7fac4a661e09f5fb6ea9b308ddb97736455661fc1e.jpg",
        "support3.mp3": "embedded\u002Feccbe55ed3b97f7d1147419670d92d67f993f674703e8ca11ed532e30337cad7.mp3",
        "support4.mp3": "embedded\u002F0d64053fb1288cf4bf269b1743ccb935e4ceb5ec1d195288a12888f157f2cc73.mp3",
        "support5.mp3": "embedded\u002F51d25b3cc8e11cde2f9e27f854ca0996339e735368ac4552fbe9f838efe3afc4.mp3",
        "support6.mp3": "embedded\u002F826a28f7736eb2e52e48a06de871393d08f3397c4ff9ad3edfd34ebac37a092c.mp3",
        "support1.mp3": "embedded\u002F12e770fa3e671da91dcd665d8b667d86d83d416565a33ea61d0150ad916a07a5.mp3",
        "support2.mp3": "embedded\u002F47de3341ab026cb74ccfd8247c1c0efa8cf0e615c7e188af701825876109ce67.mp3"
      },
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "run": function anonymous(
) {
// 注意：不要在外面包 this.on('run') 了！
for (let i = 1; i <= 6; i++) {
  const fileName = `support${i}.mp3`;
  
  // 兼容 lab.js 不同的资源获取 API
  let fileUrl = null;
  if (this.options && this.options.files && this.options.files[fileName]) {
    fileUrl = this.options.files[fileName];
  } else if (this.files && this.files[fileName]) {
    fileUrl = this.files[fileName];
  } else if (this.files && typeof this.files.url === 'function') {
    fileUrl = this.files.url(fileName);
  }

  const audioElement = document.querySelector(`#audio-${i}`);
  if (audioElement && fileUrl) {
    audioElement.src = fileUrl;
  }
}
}
      },
      "title": "Condition_Support_Voice",
      "timeline": [],
      "skip": "${this.state.participantID % 5 != 4}"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "likert",
          "items": [
            {
              "label": "1. この記事は興味深い。",
              "coding": "1"
            },
            {
              "label": "2. この記事は引き込まれるものだった。",
              "coding": "2"
            },
            {
              "label": "3. この記事は自分に関係がある。",
              "coding": "3"
            },
            {
              "label": "4. このテーマについてもっと知りたい。",
              "coding": "4"
            }
          ],
          "width": "5",
          "anchors": [
            "全くそう思わない",
            "あまりそう思わない",
            "どちらでもない",
            "少しそう思う",
            "全くそう思う"
          ],
          "label": "Q1. 以下の記述について、最も当てはまるものを選んでください。",
          "name": "Relevance"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ進む",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Relevance"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "html",
          "content": "\u003Cstyle\u003E\r\n  .questionnaire-container {\r\n    max-width: 700px;\r\n    margin: 20px auto;\r\n    padding: 20px;\r\n    font-family: -apple-system, BlinkMacSystemFont, \"Hiragino Kaku Gothic ProN\", \"メイリオ\", meiryo, sans-serif;\r\n    color: #2d3748;\r\n    text-align: left;\r\n  }\r\n\r\n  .q-main-title {\r\n    font-size: 1.3rem;\r\n    font-weight: bold;\r\n    margin-bottom: 30px;\r\n    border-bottom: 2px solid #e2e8f0;\r\n    padding-bottom: 10px;\r\n  }\r\n\r\n  \u002F* 单个量表题目卡片 *\u002F\r\n  .scale-item {\r\n    margin-bottom: 35px;\r\n    background-color: #f8fafc;\r\n    border: 1px solid #e2e8f0;\r\n    border-radius: 8px;\r\n    padding: 20px;\r\n  }\r\n\r\n  .scale-title {\r\n    font-size: 1.05rem;\r\n    font-weight: bold;\r\n    margin-bottom: 15px;\r\n    color: #1a202c;\r\n  }\r\n\r\n  \u002F* 横向 Likert\u002F语义差异量表布局 *\u002F\r\n  .likert-scale {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    gap: 10px;\r\n  }\r\n\r\n  \u002F* 左右两端的标签 *\u002F\r\n  .scale-label-left,\r\n  .scale-label-right {\r\n    font-weight: bold;\r\n    font-size: 0.95rem;\r\n    color: #4a5568;\r\n    width: 22%;\r\n  }\r\n\r\n  .scale-label-left {\r\n    text-align: right;\r\n  }\r\n\r\n  .scale-label-right {\r\n    text-align: left;\r\n  }\r\n\r\n  \u002F* 中间 1-6 的横向选项容器 *\u002F\r\n  .scale-options {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    flex-grow: 1;\r\n    background-color: #ffffff;\r\n    padding: 10px;\r\n    border-radius: 6px;\r\n    border: 1px solid #edf2f7;\r\n  }\r\n\r\n  \u002F* 单个选项样式 *\u002F\r\n  .option-node {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    cursor: pointer;\r\n    font-size: 0.9rem;\r\n    font-weight: bold;\r\n    color: #718096;\r\n  }\r\n\r\n  .option-node input[type=\"radio\"] {\r\n    margin-bottom: 6px;\r\n    width: 18px;\r\n    height: 18px;\r\n    cursor: pointer;\r\n  }\r\n\r\n  .option-node:hover {\r\n    color: #3182ce;\r\n  }\r\n\r\n  \u002F* 按钮区域 *\u002F\r\n  .btn-container {\r\n    margin-top: 40px;\r\n    text-align: center;\r\n  }\r\n\r\n  .next-btn {\r\n    background-color: #3182ce;\r\n    color: white;\r\n    border: none;\r\n    padding: 12px 40px;\r\n    font-size: 1rem;\r\n    font-weight: bold;\r\n    border-radius: 6px;\r\n    cursor: pointer;\r\n    transition: background-color 0.2s;\r\n  }\r\n\r\n  .next-btn:hover {\r\n    background-color: #2b6cb0;\r\n  }\r\n\u003C\u002Fstyle\u003E\r\n\r\n\u003Cdiv class=\"questionnaire-container\"\u003E\r\n  \u003Ch2 class=\"q-main-title\"\u003EQ2. あなたはこの記事についてどう思いますか。\u003C\u002Fh2\u003E\r\n\r\n  \u003C!-- 小问 1: Credibility1 --\u003E\r\n  \u003Cdiv class=\"scale-item\"\u003E\r\n    \u003Cdiv class=\"scale-title\"\u003E1.\u003C\u002Fdiv\u003E\r\n    \u003Cdiv class=\"likert-scale\"\u003E\r\n      \u003Cdiv class=\"scale-label-left\"\u003E偏っている\u003C\u002Fdiv\u003E\r\n      \u003Cdiv class=\"scale-options\"\u003E\r\n        \u003Clabel class=\"option-node\"\u003E\u003Cinput type=\"radio\" name=\"Credibility1\" value=\"1\" required\u003E1\u003C\u002Flabel\u003E\r\n        \u003Clabel class=\"option-node\"\u003E\u003Cinput type=\"radio\" name=\"Credibility1\" value=\"2\"\u003E2\u003C\u002Flabel\u003E\r\n        \u003Clabel class=\"option-node\"\u003E\u003Cinput type=\"radio\" name=\"Credibility1\" value=\"3\"\u003E3\u003C\u002Flabel\u003E\r\n        \u003Clabel class=\"option-node\"\u003E\u003Cinput type=\"radio\" name=\"Credibility1\" value=\"4\"\u003E4\u003C\u002Flabel\u003E\r\n        \u003Clabel class=\"option-node\"\u003E\u003Cinput type=\"radio\" name=\"Credibility1\" value=\"5\"\u003E5\u003C\u002Flabel\u003E\r\n        \u003Clabel class=\"option-node\"\u003E\u003Cinput type=\"radio\" name=\"Credibility1\" value=\"6\"\u003E6\u003C\u002Flabel\u003E\r\n      \u003C\u002Fdiv\u003E\r\n      \u003Cdiv class=\"scale-label-right\"\u003E偏っていない\u003C\u002Fdiv\u003E\r\n    \u003C\u002Fdiv\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\r\n  \u003C!-- 小问 2: Credibility2 --\u003E\r\n  \u003Cdiv class=\"scale-item\"\u003E\r\n    \u003Cdiv class=\"scale-title\"\u003E2.\u003C\u002Fdiv\u003E\r\n    \u003Cdiv class=\"likert-scale\"\u003E\r\n      \u003Cdiv class=\"scale-label-left\"\u003E正確\u003C\u002Fdiv\u003E\r\n      \u003Cdiv class=\"scale-options\"\u003E\r\n        \u003Clabel class=\"option-node\"\u003E\u003Cinput type=\"radio\" name=\"Credibility2\" value=\"1\" required\u003E1\u003C\u002Flabel\u003E\r\n        \u003Clabel class=\"option-node\"\u003E\u003Cinput type=\"radio\" name=\"Credibility2\" value=\"2\"\u003E2\u003C\u002Flabel\u003E\r\n        \u003Clabel class=\"option-node\"\u003E\u003Cinput type=\"radio\" name=\"Credibility2\" value=\"3\"\u003E3\u003C\u002Flabel\u003E\r\n        \u003Clabel class=\"option-node\"\u003E\u003Cinput type=\"radio\" name=\"Credibility2\" value=\"4\"\u003E4\u003C\u002Flabel\u003E\r\n        \u003Clabel class=\"option-node\"\u003E\u003Cinput type=\"radio\" name=\"Credibility2\" value=\"5\"\u003E5\u003C\u002Flabel\u003E\r\n        \u003Clabel class=\"option-node\"\u003E\u003Cinput type=\"radio\" name=\"Credibility2\" value=\"6\"\u003E6\u003C\u002Flabel\u003E\r\n      \u003C\u002Fdiv\u003E\r\n      \u003Cdiv class=\"scale-label-right\"\u003E不正確\u003C\u002Fdiv\u003E\r\n    \u003C\u002Fdiv\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\r\n  \u003C!-- 小问 3: Credibility3 --\u003E\r\n  \u003Cdiv class=\"scale-item\"\u003E\r\n    \u003Cdiv class=\"scale-title\"\u003E3.\u003C\u002Fdiv\u003E\r\n    \u003Cdiv class=\"likert-scale\"\u003E\r\n      \u003Cdiv class=\"scale-label-left\"\u003E信頼できる\u003C\u002Fdiv\u003E\r\n      \u003Cdiv class=\"scale-options\"\u003E\r\n        \u003Clabel class=\"option-node\"\u003E\u003Cinput type=\"radio\" name=\"Credibility3\" value=\"1\" required\u003E1\u003C\u002Flabel\u003E\r\n        \u003Clabel class=\"option-node\"\u003E\u003Cinput type=\"radio\" name=\"Credibility3\" value=\"2\"\u003E2\u003C\u002Flabel\u003E\r\n        \u003Clabel class=\"option-node\"\u003E\u003Cinput type=\"radio\" name=\"Credibility3\" value=\"3\"\u003E3\u003C\u002Flabel\u003E\r\n        \u003Clabel class=\"option-node\"\u003E\u003Cinput type=\"radio\" name=\"Credibility3\" value=\"4\"\u003E4\u003C\u002Flabel\u003E\r\n        \u003Clabel class=\"option-node\"\u003E\u003Cinput type=\"radio\" name=\"Credibility3\" value=\"5\"\u003E5\u003C\u002Flabel\u003E\r\n        \u003Clabel class=\"option-node\"\u003E\u003Cinput type=\"radio\" name=\"Credibility3\" value=\"6\"\u003E6\u003C\u002Flabel\u003E\r\n      \u003C\u002Fdiv\u003E\r\n      \u003Cdiv class=\"scale-label-right\"\u003E信頼できない\u003C\u002Fdiv\u003E\r\n    \u003C\u002Fdiv\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\r\n  \u003C!-- 小问 4: Credibility4 --\u003E\r\n  \u003Cdiv class=\"scale-item\"\u003E\r\n    \u003Cdiv class=\"scale-title\"\u003E4.\u003C\u002Fdiv\u003E\r\n    \u003Cdiv class=\"likert-scale\"\u003E\r\n      \u003Cdiv class=\"scale-label-left\"\u003E十分な情報を提供している\u003C\u002Fdiv\u003E\r\n      \u003Cdiv class=\"scale-options\"\u003E\r\n        \u003Clabel class=\"option-node\"\u003E\u003Cinput type=\"radio\" name=\"Credibility4\" value=\"1\" required\u003E1\u003C\u002Flabel\u003E\r\n        \u003Clabel class=\"option-node\"\u003E\u003Cinput type=\"radio\" name=\"Credibility4\" value=\"2\"\u003E2\u003C\u002Flabel\u003E\r\n        \u003Clabel class=\"option-node\"\u003E\u003Cinput type=\"radio\" name=\"Credibility4\" value=\"3\"\u003E3\u003C\u002Flabel\u003E\r\n        \u003Clabel class=\"option-node\"\u003E\u003Cinput type=\"radio\" name=\"Credibility4\" value=\"4\"\u003E4\u003C\u002Flabel\u003E\r\n        \u003Clabel class=\"option-node\"\u003E\u003Cinput type=\"radio\" name=\"Credibility4\" value=\"5\"\u003E5\u003C\u002Flabel\u003E\r\n        \u003Clabel class=\"option-node\"\u003E\u003Cinput type=\"radio\" name=\"Credibility4\" value=\"6\"\u003E6\u003C\u002Flabel\u003E\r\n      \u003C\u002Fdiv\u003E\r\n      \u003Cdiv class=\"scale-label-right\"\u003E十分な情報を提供していない\u003C\u002Fdiv\u003E\r\n    \u003C\u002Fdiv\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\r\n\u003C\u002Fdiv\u003E",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ進む",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Credibility"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "html",
          "content": "\u003Cstyle\u003E\r\n  .questionnaire-container {\r\n    max-width: 700px;\r\n    margin: 20px auto;\r\n    padding: 20px;\r\n    font-family: -apple-system, BlinkMacSystemFont, \"Hiragino Kaku Gothic ProN\", \"メイリオ\", meiryo, sans-serif;\r\n    color: #2d3748;\r\n    text-align: left;\r\n  }\r\n\r\n  .q-main-title {\r\n    font-size: 1.3rem;\r\n    font-weight: bold;\r\n    margin-bottom: 25px;\r\n    border-bottom: 2px solid #e2e8f0;\r\n    padding-bottom: 10px;\r\n  }\r\n\r\n  \u002F* 单个问题容器 *\u002F\r\n  .scale-item {\r\n    margin-bottom: 35px;\r\n    background-color: #f8fafc;\r\n    border: 1px solid #e2e8f0;\r\n    border-radius: 8px;\r\n    padding: 25px 20px;\r\n  }\r\n\r\n  \u002F* 横向选项布局 *\u002F\r\n  .horizontal-options {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: flex-end;\r\n    background-color: #ffffff;\r\n    padding: 15px 10px;\r\n    border-radius: 6px;\r\n    border: 1px solid #edf2f7;\r\n  }\r\n\r\n  \u002F* 单个选项节点 *\u002F\r\n  .option-node {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    flex: 1;\r\n    cursor: pointer;\r\n  }\r\n\r\n  \u002F* 选项上方文本 *\u002F\r\n  .option-label-text {\r\n    font-size: 0.82rem;\r\n    color: #4a5568;\r\n    margin-bottom: 8px;\r\n    text-align: center;\r\n    line-height: 1.2;\r\n    min-height: 2.4em; \u002F* 保证两行与单行文本高度对齐 *\u002F\r\n    display: flex;\r\n    align-items: flex-end;\r\n    justify-content: center;\r\n  }\r\n\r\n  \u002F* 单选框与数字 *\u002F\r\n  .option-node input[type=\"radio\"] {\r\n    margin-bottom: 6px;\r\n    width: 18px;\r\n    height: 18px;\r\n    cursor: pointer;\r\n  }\r\n\r\n  .option-num {\r\n    font-size: 0.9rem;\r\n    font-weight: bold;\r\n    color: #718096;\r\n  }\r\n\r\n  .option-node:hover .option-num,\r\n  .option-node:hover .option-label-text {\r\n    color: #3182ce;\r\n  }\r\n\r\n  \u002F* 推进按钮 *\u002F\r\n  .btn-container {\r\n    margin-top: 30px;\r\n    text-align: center;\r\n  }\r\n\r\n  .next-btn {\r\n    background-color: #3182ce;\r\n    color: white;\r\n    border: none;\r\n    padding: 12px 40px;\r\n    font-size: 1rem;\r\n    font-weight: bold;\r\n    border-radius: 6px;\r\n    cursor: pointer;\r\n    transition: background-color 0.2s;\r\n  }\r\n\r\n  .next-btn:hover {\r\n    background-color: #2b6cb0;\r\n  }\r\n\u003C\u002Fstyle\u003E\r\n\r\n\u003Cdiv class=\"questionnaire-container\"\u003E\r\n  \u003Ch2 class=\"q-main-title\"\u003EQ3. この記事をシェアする可能性はどのくらいありますか？\u003C\u002Fh2\u003E\r\n\r\n  \u003Cdiv class=\"scale-item\"\u003E\r\n    \u003Cdiv class=\"horizontal-options\"\u003E\r\n      \u003C!-- 选项 1 --\u003E\r\n      \u003Clabel class=\"option-node\"\u003E\r\n        \u003Cspan class=\"option-label-text\"\u003Eほとんどない\u003C\u002Fspan\u003E\r\n        \u003Cinput type=\"radio\" name=\"sharing\" value=\"1\" required\u003E\r\n        \u003Cspan class=\"option-num\"\u003E1\u003C\u002Fspan\u003E\r\n      \u003C\u002Flabel\u003E\r\n\r\n      \u003C!-- 选项 2 --\u003E\r\n      \u003Clabel class=\"option-node\"\u003E\r\n        \u003Cspan class=\"option-label-text\"\u003E非常に低い\u003C\u002Fspan\u003E\r\n        \u003Cinput type=\"radio\" name=\"sharing\" value=\"2\"\u003E\r\n        \u003Cspan class=\"option-num\"\u003E2\u003C\u002Fspan\u003E\r\n      \u003C\u002Flabel\u003E\r\n\r\n      \u003C!-- 选项 3 --\u003E\r\n      \u003Clabel class=\"option-node\"\u003E\r\n        \u003Cspan class=\"option-label-text\"\u003E低い\u003C\u002Fspan\u003E\r\n        \u003Cinput type=\"radio\" name=\"sharing\" value=\"3\"\u003E\r\n        \u003Cspan class=\"option-num\"\u003E3\u003C\u002Fspan\u003E\r\n      \u003C\u002Flabel\u003E\r\n\r\n      \u003C!-- 选项 4 --\u003E\r\n      \u003Clabel class=\"option-node\"\u003E\r\n        \u003Cspan class=\"option-label-text\"\u003E普通\u003C\u002Fspan\u003E\r\n        \u003Cinput type=\"radio\" name=\"sharing\" value=\"4\"\u003E\r\n        \u003Cspan class=\"option-num\"\u003E4\u003C\u002Fspan\u003E\r\n      \u003C\u002Flabel\u003E\r\n\r\n      \u003C!-- 选项 5 --\u003E\r\n      \u003Clabel class=\"option-node\"\u003E\r\n        \u003Cspan class=\"option-label-text\"\u003E高い\u003C\u002Fspan\u003E\r\n        \u003Cinput type=\"radio\" name=\"sharing\" value=\"5\"\u003E\r\n        \u003Cspan class=\"option-num\"\u003E5\u003C\u002Fspan\u003E\r\n      \u003C\u002Flabel\u003E\r\n\r\n      \u003C!-- 选项 6 --\u003E\r\n      \u003Clabel class=\"option-node\"\u003E\r\n        \u003Cspan class=\"option-label-text\"\u003Eとても高い\u003C\u002Fspan\u003E\r\n        \u003Cinput type=\"radio\" name=\"sharing\" value=\"6\"\u003E\r\n        \u003Cspan class=\"option-num\"\u003E6\u003C\u002Fspan\u003E\r\n      \u003C\u002Flabel\u003E\r\n    \u003C\u002Fdiv\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\r\n\u003C\u002Fdiv\u003E",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ進む",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Sharing"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "likert",
          "items": [
            {
              "label": "1. 日本の大学は生成AIを積極的に導入すべきである。",
              "coding": "1"
            },
            {
              "label": "2. AIは教育支援ツールとして活用されるべきである。",
              "coding": "2"
            },
            {
              "label": "3. AIを活用した教育政策を支持する。",
              "coding": "3"
            },
            {
              "label": "4. 同様の取り組みが他の大学にも広がることに賛成である。",
              "coding": "4"
            }
          ],
          "width": "5",
          "anchors": [
            "全くそう思わない",
            "あまりそう思わない",
            "どちらでもない",
            "少しそう思う",
            "全くそう思う"
          ],
          "label": "Q4. 以下の記述について、最も当てはまるものを選んでください。",
          "name": "PolicySupport"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ進む",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "PolicySupport"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "likert",
          "items": [
            {
              "label": "1. AIが本当に教育の質を向上させられるかどうかは定かではない。",
              "coding": "1"
            },
            {
              "label": "2. AI教育の長期的な効果は依然として不明確である。",
              "coding": "2"
            },
            {
              "label": "3. AI教育に関する議論には、多くの不確定要素が存在する。",
              "coding": "3"
            }
          ],
          "width": "5",
          "anchors": [
            "全くそう思わない",
            "あまりそう思わない",
            "どちらでもない",
            "少しそう思う",
            "全くそう思う"
          ],
          "label": "Q5. 以下の記述について、最も当てはまるものを選んでください。",
          "name": "Uncertainty"
        },
        {
          "required": true,
          "type": "likert",
          "items": [
            {
              "label": "1. AIは学生の思考力を低下させる。",
              "coding": "1"
            },
            {
              "label": "2. AIは学生の主体的な学習を妨げる。",
              "coding": "2"
            },
            {
              "label": "3. AIは学習の質を低下させる。",
              "coding": "3"
            },
            {
              "label": "4. AIは過度な依存を招く。",
              "coding": "4"
            }
          ],
          "width": "5",
          "anchors": [
            "全くそう思わない",
            "あまりそう思わない",
            "どちらでもない",
            "少しそう思う",
            "全くそう思う"
          ],
          "label": "Q6. 以下の記述について、最も当てはまるものを選んでください。",
          "name": "Risk"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ進む",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Uncertainty_Risk"
    },
    {
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "i-text",
          "left": 0,
          "top": -50,
          "angle": 0,
          "width": 454.8,
          "height": 58.58,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "ここからは、先ほど提示したニュース内容\nについていくつか確認します。",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": "24",
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        },
        {
          "type": "circle",
          "left": 0,
          "top": 100,
          "angle": 0,
          "width": 106,
          "height": 106,
          "stroke": "#0070d9",
          "strokeWidth": 1,
          "fill": "#ADD8E6"
        },
        {
          "type": "i-text",
          "left": 0,
          "top": 100,
          "angle": 0,
          "width": 96,
          "height": 27.12,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "次へ進む",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": "24",
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        },
        {
          "type": "aoi",
          "left": 0,
          "top": 100,
          "angle": 0,
          "width": 120.53,
          "height": 120.53,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "rgba(0, 0, 0, 0.2)",
          "label": "nextBtn"
        }
      ],
      "viewport": [
        800,
        600
      ],
      "files": {},
      "responses": {
        "click @nextBtn": "next"
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "precheck"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "html",
          "content": "\u003Cstyle\u003E\r\n  .questionnaire-container {\r\n    max-width: 750px;\r\n    margin: 20px auto;\r\n    padding: 20px;\r\n    font-family: -apple-system, BlinkMacSystemFont, \"Hiragino Kaku Gothic ProN\", \"メイリオ\", meiryo, sans-serif;\r\n    color: #2d3748;\r\n    text-align: left;\r\n  }\r\n\r\n  .q-instruction {\r\n    font-size: 1.1rem;\r\n    font-weight: bold;\r\n    margin-bottom: 25px;\r\n    padding-bottom: 10px;\r\n    border-bottom: 2px solid #e2e8f0;\r\n  }\r\n\r\n  \u002F* 问题卡片块 *\u002F\r\n  .mc-card {\r\n    background-color: #f8fafc;\r\n    border: 1px solid #e2e8f0;\r\n    border-radius: 8px;\r\n    padding: 20px;\r\n    margin-bottom: 25px;\r\n  }\r\n\r\n  .mc-title {\r\n    font-size: 1.05rem;\r\n    font-weight: bold;\r\n    margin-bottom: 18px;\r\n    color: #1a202c;\r\n  }\r\n\r\n  \u002F* 5点横向 Likert 选项布局 *\u002F\r\n  .horizontal-options-5 {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: flex-end;\r\n    background-color: #ffffff;\r\n    padding: 15px 8px;\r\n    border-radius: 6px;\r\n    border: 1px solid #edf2f7;\r\n  }\r\n\r\n  .option-node {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    flex: 1;\r\n    cursor: pointer;\r\n  }\r\n\r\n  .option-label-text {\r\n    font-size: 0.8rem;\r\n    color: #4a5568;\r\n    margin-bottom: 8px;\r\n    text-align: center;\r\n    line-height: 1.2;\r\n    min-height: 2.4em;\r\n    display: flex;\r\n    align-items: flex-end;\r\n    justify-content: center;\r\n  }\r\n\r\n  .option-node input[type=\"radio\"] {\r\n    margin-bottom: 4px;\r\n    width: 18px;\r\n    height: 18px;\r\n    cursor: pointer;\r\n  }\r\n\r\n  .option-node:hover .option-label-text {\r\n    color: #3182ce;\r\n  }\r\n\r\n  \u002F* 简单选择题样式（有\u002F无，语音\u002F文字） *\u002F\r\n  .simple-options {\r\n    display: flex;\r\n    gap: 30px;\r\n    background-color: #ffffff;\r\n    padding: 12px 20px;\r\n    border-radius: 6px;\r\n    border: 1px solid #edf2f7;\r\n  }\r\n\r\n  .simple-node {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 8px;\r\n    cursor: pointer;\r\n    font-weight: bold;\r\n    color: #4a5568;\r\n  }\r\n\r\n  \u002F* 动态隐藏区域 *\u002F\r\n  .hidden-section {\r\n    display: none;\r\n  }\r\n\r\n  \u002F* 推进按钮 *\u002F\r\n  .btn-container {\r\n    margin-top: 30px;\r\n    text-align: center;\r\n  }\r\n\r\n  .next-btn {\r\n    background-color: #3182ce;\r\n    color: white;\r\n    border: none;\r\n    padding: 12px 40px;\r\n    font-size: 1rem;\r\n    font-weight: bold;\r\n    border-radius: 6px;\r\n    cursor: pointer;\r\n    transition: background-color 0.2s;\r\n  }\r\n\r\n  .next-btn:hover {\r\n    background-color: #2b6cb0;\r\n  }\r\n\u003C\u002Fstyle\u003E\r\n\r\n\u003Cdiv class=\"questionnaire-container\"\u003E\r\n  \u003Cdiv class=\"q-instruction\"\u003E以下の質問に答えてください。\u003C\u002Fdiv\u003E\r\n\r\n  \u003C!-- Q1. 記事の立場 --\u003E\r\n  \u003Cdiv class=\"mc-card\"\u003E\r\n    \u003Cdiv class=\"mc-title\"\u003E1. あなたが読んだニュース記事はAI教育に対して全体的にどのような立場でしたか。\u003C\u002Fdiv\u003E\r\n    \u003Cdiv class=\"horizontal-options-5\"\u003E\r\n      \u003Clabel class=\"option-node\"\u003E\r\n        \u003Cspan class=\"option-label-text\"\u003E強く反対\u003C\u002Fspan\u003E\r\n        \u003Cinput type=\"radio\" name=\"mc_article_attitude\" value=\"1\" required\u003E\r\n      \u003C\u002Flabel\u003E\r\n      \u003Clabel class=\"option-node\"\u003E\r\n        \u003Cspan class=\"option-label-text\"\u003Eやや反対\u003C\u002Fspan\u003E\r\n        \u003Cinput type=\"radio\" name=\"mc_article_attitude\" value=\"2\"\u003E\r\n      \u003C\u002Flabel\u003E\r\n      \u003Clabel class=\"option-node\"\u003E\r\n        \u003Cspan class=\"option-label-text\"\u003E中立\u003C\u002Fspan\u003E\r\n        \u003Cinput type=\"radio\" name=\"mc_article_attitude\" value=\"3\"\u003E\r\n      \u003C\u002Flabel\u003E\r\n      \u003Clabel class=\"option-node\"\u003E\r\n        \u003Cspan class=\"option-label-text\"\u003Eやや支持\u003C\u002Fspan\u003E\r\n        \u003Cinput type=\"radio\" name=\"mc_article_attitude\" value=\"4\"\u003E\r\n      \u003C\u002Flabel\u003E\r\n      \u003Clabel class=\"option-node\"\u003E\r\n        \u003Cspan class=\"option-label-text\"\u003E強く支持\u003C\u002Fspan\u003E\r\n        \u003Cinput type=\"radio\" name=\"mc_article_attitude\" value=\"5\"\u003E\r\n      \u003C\u002Flabel\u003E\r\n    \u003C\u002Fdiv\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\r\n  \u003C!-- Q2.1 コメント欄の有無 --\u003E\r\n  \u003Cdiv class=\"mc-card\"\u003E\r\n    \u003Cdiv class=\"mc-title\"\u003E2. あなたが読んだ記事の下にコメント欄はありましたか。\u003C\u002Fdiv\u003E\r\n    \u003Cdiv class=\"simple-options\"\u003E\r\n      \u003Clabel class=\"simple-node\"\u003E\r\n        \u003Cinput type=\"radio\" name=\"mc_comment_presence\" value=\"1\" id=\"has-comment-yes\" required\u003E あった\r\n      \u003C\u002Flabel\u003E\r\n      \u003Clabel class=\"simple-node\"\u003E\r\n        \u003Cinput type=\"radio\" name=\"mc_comment_presence\" value=\"0\" id=\"has-comment-no\"\u003E なかった\r\n      \u003C\u002Flabel\u003E\r\n    \u003C\u002Fdiv\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\r\n  \u003C!-- 动态联动区域：只有当选择“あり”时才展示 --\u003E\r\n  \u003Cdiv id=\"comment-details-group\" class=\"hidden-section\"\u003E\r\n    \r\n    \u003C!-- Q2.2 コメント欄の形式 --\u003E\r\n    \u003Cdiv class=\"mc-card\"\u003E\r\n      \u003Cdiv class=\"mc-title\"\u003E2-1. そのコメント欄はどのような形式でしたか。\u003C\u002Fdiv\u003E\r\n      \u003Cdiv class=\"simple-options\"\u003E\r\n        \u003Clabel class=\"simple-node\"\u003E\r\n          \u003Cinput type=\"radio\" name=\"mc_comment_format\" value=\"audio\" class=\"comment-sub-q\"\u003E 音声コメント\r\n        \u003C\u002Flabel\u003E\r\n        \u003Clabel class=\"simple-node\"\u003E\r\n          \u003Cinput type=\"radio\" name=\"mc_comment_format\" value=\"text\" class=\"comment-sub-q\"\u003E テキストコメント\r\n        \u003C\u002Flabel\u003E\r\n      \u003C\u002Fdiv\u003E\r\n    \u003C\u002Fdiv\u003E\r\n\r\n    \u003C!-- Q2.3 コメント欄の印象 --\u003E\r\n    \u003Cdiv class=\"mc-card\"\u003E\r\n      \u003Cdiv class=\"mc-title\"\u003E2-2. あなたが読んだコメント欄は全体としてどのような印象でしたか。\u003C\u002Fdiv\u003E\r\n      \u003Cdiv class=\"horizontal-options-5\"\u003E\r\n        \u003Clabel class=\"option-node\"\u003E\r\n          \u003Cspan class=\"option-label-text\"\u003E強く反対\u003C\u002Fspan\u003E\r\n          \u003Cinput type=\"radio\" name=\"mc_comment_attitude\" value=\"1\" class=\"comment-sub-q\"\u003E\r\n        \u003C\u002Flabel\u003E\r\n        \u003Clabel class=\"option-node\"\u003E\r\n          \u003Cspan class=\"option-label-text\"\u003Eやや反対\u003C\u002Fspan\u003E\r\n          \u003Cinput type=\"radio\" name=\"mc_comment_attitude\" value=\"2\" class=\"comment-sub-q\"\u003E\r\n        \u003C\u002Flabel\u003E\r\n        \u003Clabel class=\"option-node\"\u003E\r\n          \u003Cspan class=\"option-label-text\"\u003E中立\u003C\u002Fspan\u003E\r\n          \u003Cinput type=\"radio\" name=\"mc_comment_attitude\" value=\"3\" class=\"comment-sub-q\"\u003E\r\n        \u003C\u002Flabel\u003E\r\n        \u003Clabel class=\"option-node\"\u003E\r\n          \u003Cspan class=\"option-label-text\"\u003Eやや支持\u003C\u002Fspan\u003E\r\n          \u003Cinput type=\"radio\" name=\"mc_comment_attitude\" value=\"4\" class=\"comment-sub-q\"\u003E\r\n        \u003C\u002Flabel\u003E\r\n        \u003Clabel class=\"option-node\"\u003E\r\n          \u003Cspan class=\"option-label-text\"\u003E強く支持\u003C\u002Fspan\u003E\r\n          \u003Cinput type=\"radio\" name=\"mc_comment_attitude\" value=\"5\" class=\"comment-sub-q\"\u003E\r\n        \u003C\u002Flabel\u003E\r\n      \u003C\u002Fdiv\u003E\r\n    \u003C\u002Fdiv\u003E\r\n\r\n  \u003C\u002Fdiv\u003E\r\n\r\n\u003C\u002Fdiv\u003E",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ進む",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "run": function anonymous(
) {
// 监听“评论区是否存在”的选择事件
const yesRadio = document.querySelector('#has-comment-yes');
const noRadio = document.querySelector('#has-comment-no');
const detailsGroup = document.querySelector('#comment-details-group');
const subInputs = document.querySelectorAll('.comment-sub-q');

const toggleCommentQuestions = () => {
  if (yesRadio.checked) {
    detailsGroup.style.display = 'block';
    // 展开时设置为必填
    subInputs.forEach(input => {
      if (input.name === 'mc_comment_format' && input.value === 'audio') input.required = true;
      if (input.name === 'mc_comment_attitude' && input.value === '1') input.required = true;
    });
  } else {
    detailsGroup.style.display = 'none';
    // 折叠时取消必填，并清空选择
    subInputs.forEach(input => {
      input.required = false;
      input.checked = false;
    });
  }
};

if (yesRadio && noRadio) {
  yesRadio.addEventListener('change', toggleCommentQuestions);
  noRadio.addEventListener('change', toggleCommentQuestions);
}
}
      },
      "title": "ManipulationCheck"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "text",
          "title": "以下の質問に回答してください。",
          "content": ""
        },
        {
          "required": true,
          "type": "input",
          "label": "あなたの年齢を教えてください。",
          "attributes": {
            "type": "number",
            "min": "18",
            "max": "99"
          },
          "help": "半角数字で入力してください",
          "name": "age"
        },
        {
          "required": true,
          "type": "radio",
          "options": [
            {
              "label": "女性",
              "coding": "1"
            },
            {
              "coding": "2",
              "label": "男性"
            },
            {
              "coding": "3",
              "label": "その他"
            },
            {
              "coding": "4",
              "label": "回答しない"
            }
          ],
          "name": "sex",
          "label": "あなたの性別を選択してください。"
        },
        {
          "required": true,
          "type": "radio",
          "options": [
            {
              "label": "はい",
              "coding": "1"
            },
            {
              "coding": "2",
              "label": "いいえ"
            }
          ],
          "name": "education",
          "label": "あなたは現在大学に在籍していますか。"
        },
        {
          "required": true,
          "type": "radio",
          "label": "普段、生成AI（ChatGPTなど）をどの程度利用していますか。",
          "options": [
            {
              "label": "全く利用しない",
              "coding": "1"
            },
            {
              "label": "月に数回程度",
              "coding": "2"
            },
            {
              "label": "週に1〜2回程度",
              "coding": "3"
            },
            {
              "label": "週に3〜4回程度",
              "coding": "4"
            },
            {
              "label": "ほぼ毎日",
              "coding": "5"
            }
          ],
          "name": "ai_use_frequency"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ進む",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Demographics"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "本実験の目的について説明します。",
          "content": "本実験は、オンラインニュースにおけるコメント欄の提示が、ニュース記事の受け止め方や評価に及ぼす影響を検討することを目的としています。\u003Cbr\u003E本実験では、コメント欄の提示形式として「テキストコメント」と「音声コメント」の2種類を設定し、それぞれについて支持コメントと反対コメントを用意しました。さらに、コメント欄を提示しない条件も含め、全体で5つの条件を設けています。参加者の皆様には、これらの条件のうち、いずれか1つが提示されています。\u003Cbr\u003Eなお、実験中に提示されたコメントは、研究目的のために作成された実験用の材料であり、実際に投稿されたコメントではありません。"
        },
        {
          "required": true,
          "type": "html",
          "content": "\u003Cstyle\u003E\r\n  .questionnaire-container {\r\n    max-width: 700px;\r\n    margin: 20px auto;\r\n    padding: 20px;\r\n    font-family: -apple-system, BlinkMacSystemFont, \"Hiragino Kaku Gothic ProN\", \"メイリオ\", meiryo, sans-serif;\r\n    color: #2d3748;\r\n    text-align: left;\r\n  }\r\n\r\n  .q-main-title {\r\n    font-size: 1.2rem;\r\n    font-weight: bold;\r\n    margin-bottom: 25px;\r\n    border-bottom: 2px solid #e2e8f0;\r\n    padding-bottom: 10px;\r\n  }\r\n\r\n  \u002F* 单个问题容器 *\u002F\r\n  .scale-item {\r\n    margin-bottom: 35px;\r\n    background-color: #f8fafc;\r\n    border: 1px solid #e2e8f0;\r\n    border-radius: 8px;\r\n    padding: 25px 20px;\r\n  }\r\n\r\n  \u002F* 横向 Likert 量表布局 *\u002F\r\n  .likert-scale {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    gap: 10px;\r\n  }\r\n\r\n  \u002F* 左右两端的标签 *\u002F\r\n  .scale-label-left,\r\n  .scale-label-right {\r\n    font-weight: bold;\r\n    font-size: 0.95rem;\r\n    color: #4a5568;\r\n    width: 25%;\r\n  }\r\n\r\n  .scale-label-left {\r\n    text-align: right;\r\n  }\r\n\r\n  .scale-label-right {\r\n    text-align: left;\r\n  }\r\n\r\n  \u002F* 中间 1-5 的横向选项容器 *\u002F\r\n  .scale-options {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    flex-grow: 1;\r\n    background-color: #ffffff;\r\n    padding: 12px 10px;\r\n    border-radius: 6px;\r\n    border: 1px solid #edf2f7;\r\n  }\r\n\r\n  \u002F* 单个选项节点 *\u002F\r\n  .option-node {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    cursor: pointer;\r\n    font-size: 0.95rem;\r\n    font-weight: bold;\r\n    color: #718096;\r\n  }\r\n\r\n  .option-node input[type=\"radio\"] {\r\n    margin-bottom: 6px;\r\n    width: 18px;\r\n    height: 18px;\r\n    cursor: pointer;\r\n  }\r\n\r\n  .option-node:hover {\r\n    color: #3182ce;\r\n  }\r\n\r\n  \u002F* 推进按钮 *\u002F\r\n  .btn-container {\r\n    margin-top: 30px;\r\n    text-align: center;\r\n  }\r\n\r\n  .next-btn {\r\n    background-color: #3182ce;\r\n    color: white;\r\n    border: none;\r\n    padding: 12px 40px;\r\n    font-size: 1rem;\r\n    font-weight: bold;\r\n    border-radius: 6px;\r\n    cursor: pointer;\r\n    transition: background-color 0.2s;\r\n  }\r\n\r\n  .next-btn:hover {\r\n    background-color: #2b6cb0;\r\n  }\r\n\u003C\u002Fstyle\u003E\r\n\r\n\u003Cdiv class=\"questionnaire-container\"\u003E\r\n  \u003Ch2 class=\"q-main-title\"\u003Eあなたは上記の実験目的にどれくらい気づいていましたか。\u003C\u002Fh2\u003E\r\n\r\n  \u003Cdiv class=\"scale-item\"\u003E\r\n    \u003Cdiv class=\"likert-scale\"\u003E\r\n      \u003Cdiv class=\"scale-label-left\"\u003E全く気づかなかった\u003C\u002Fdiv\u003E\r\n      \u003Cdiv class=\"scale-options\"\u003E\r\n        \u003Clabel class=\"option-node\"\u003E\u003Cinput type=\"radio\" name=\"suspicion_awareness\" value=\"1\" required\u003E1\u003C\u002Flabel\u003E\r\n        \u003Clabel class=\"option-node\"\u003E\u003Cinput type=\"radio\" name=\"suspicion_awareness\" value=\"2\"\u003E2\u003C\u002Flabel\u003E\r\n        \u003Clabel class=\"option-node\"\u003E\u003Cinput type=\"radio\" name=\"suspicion_awareness\" value=\"3\"\u003E3\u003C\u002Flabel\u003E\r\n        \u003Clabel class=\"option-node\"\u003E\u003Cinput type=\"radio\" name=\"suspicion_awareness\" value=\"4\"\u003E4\u003C\u002Flabel\u003E\r\n        \u003Clabel class=\"option-node\"\u003E\u003Cinput type=\"radio\" name=\"suspicion_awareness\" value=\"5\"\u003E5\u003C\u002Flabel\u003E\r\n      \u003C\u002Fdiv\u003E\r\n      \u003Cdiv class=\"scale-label-right\"\u003E完全に気づいていた\u003C\u002Fdiv\u003E\r\n    \u003C\u002Fdiv\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\r\n\u003C\u002Fdiv\u003E",
          "name": ""
        },
        {
          "required": true,
          "type": "radio",
          "options": [
            {
              "label": "同意する",
              "coding": "1"
            },
            {
              "label": "同意しない",
              "coding": "0"
            }
          ],
          "name": "dataconsent",
          "label": "研究内容をご理解いただいたうえで、今回のデータの利用に同意されますか。"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ進む",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Debriefing_DataConsent"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "これで実験は終了です。",
          "content": "この度は、実験にご参加いただき、誠にありがとうございました。データはすでに保存されていますので、このままブラウザを閉じていただいても大丈夫です。\u003Cbr\u003E\n完了コードは、${this.state.participantID}です。"
        }
      ],
      "scrollTop": true,
      "submitButtonPosition": "hidden",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
//check Tardy
// 保存しておいた参加者IDを取得
const participantID = this.state.participantID

//csvファイルで保存する場合
const filename = participantID + "_data.csv"
const data = study.internals.controller.datastore.exportCsv();

fetch("https://pipe.jspsych.org/api/data/", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
  },
  body: JSON.stringify({
    experimentID: "Oxvd4vV6cpIl",
    filename: filename,
    data: data,
  }),
});

}
      },
      "title": "Thanks",
      "tardy": true
    }
  ]
})

// Let's go!
study.run()