// Vercel 后端函数的固定写法
export default function handler(request, response) {
    // 1. 安全检查：我们只接受 POST 方式的提交
    if (request.method !== 'POST') {
        return response.status(405).send('只允许 POST 请求');
    }

    // 2. 接收前端传过来的账密数据
    // 这里的 .user_account 和 .user_password 必须和 HTML 里的 name="..." 一模一样
    const account = request.body.user_account;
    const password = request.body.user_password;

    // 3. 【核心实验】在后端打印出收到的账密（部署后可以在 Vercel 控制台看到）
    console.log('====== 收到前端提交的数据啦！ ======');
    console.log('账号:', account);
    console.log('密码:', password);

    // 4. 给前端浏览器回一句话，告诉用户登录成功了
    // 这里使用 HTML 格式返回，方便你直接在浏览器看到结果
    response.setHeader('Content-Type', 'text/html; charset=utf-8');
    response.status(200).send(`
        <h1>🎉 实验成功！后端已收到数据</h1>
        <p>你刚才提交的账号是：<b>${account}</b></p>
        <p>你刚才提交的密码是：<b>${password}</b></p>
        <p><i>注：真实项目中密码千万不能这样明文显示哦，这只是实验。</i></p>
        <br>
        <a href="/">返回首页</a>
    `);
}