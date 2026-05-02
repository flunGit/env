/**
 * 预设的 .env 示例文件内容(行数组),供模块生成示例文件
 * >查看定义:@see {@link exampleLines}
 */
const exampleLines = [
    '# .env 环境变量使用示例(@flun/html-template的登录配置):',
    '# 每行标准格式: 变量名 = 变量值',
    '# 注意!!!,如果键值包含特殊字符或空格,请使用引号包裹整个键值,并正确转义引号内需要转义的特殊字符',
    '# 以 # 开头的行是注释',
    '',
    'SESSION_SECRET = your-strong-secret-key # session的密钥(请替换成足够复杂且保密的字符串)',
    '# 开发环境建议使用局域网具体IP,这样可以局域网异机测试;',
    '# 生产环境建议请用域名如:https://example.com',
    'APP_URL = http://localhost:7290        # 建议改为具体的ip,以免使用场景受限',
    'MAIL_HOST = smtp.example.com           # 替换成你自己邮箱服务器地址',
    'MAIL_PORT = 465                        # 你自己的邮箱服务器端口',
    'MAIL_USER = your-email@example.com     # 替换成你自己的邮箱地址',
    'MAIL_PWD = "your-password"             # 替换成你自己的邮箱授权码(注意不是邮箱密码,通常需要在邮箱设置里生成授权码)',
    'PWD = admin123                         # 替换成你想要的管理员密码(请务必修改成足够复杂且保密的密码)',
    '',
    `# 调用包: import { env } from '@flun/env' ;`,
    '',
    '# 使用格式: env.变量名'
];
export { exampleLines };