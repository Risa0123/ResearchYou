const express = require('express');
const app = express();
const port = 4333;  // サンプルで指定されているポート番号を使用

app.use(express.json());

// ログインエンドポイント
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    // ログイン処理を実装
    res.json({ message: 'ログイン成功', email });
});

// ユーザー登録エンドポイント
app.post('/add_user', (req, res) => {
    const { email, password, nickname, birthday, gender } = req.body;
    // ユーザー登録処理を実装
    res.json({ message: 'ユーザー登録成功', email, nickname });
});

// 目標登録エンドポイント
app.post('/set_target', (req, res) => {
    const { user_id, target, alert_time, alert_days } = req.body;
    // 目標登録処理を実装
    res.json({ message: '目標登録成功', target });
});

// その他のエンドポイントも追加可能

app.listen(port, () => {
    console.log(`APIサーバーがポート${port}で起動しました`);
});
