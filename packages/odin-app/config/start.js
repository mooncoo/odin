const os = require('os');
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const inquirer = require('inquirer');
const spawn = os.platform() === 'win32' ? require('cross-spawn') : require('child_process').spawn;
// 系统
let system = os.type().indexOf('Windows') >= 0 ? 'Windows' : 'Linux';

const config = require('./config.json');
const cwd = path.join(__dirname, '..');
//weapp  微信
//swan   百度
//alipay 支付宝
//tt     字节跳动
//qq     QQ
//jd     京东
//h5     h5
// 用户选择菜单
const prompList = [
  {
    type: 'list',
    message: '请选择平台',
    name: 'typeSelect',
    choices: ['weapp', 'h5'],
  },
  {
    type: 'list',
    message: '请选择环境',
    name: 'envSelect',
    choices: [...Object.keys(config)],
  },
];

// 执行
inquirer.prompt(prompList).then((option) => {
  // 1.获取平台与环境
  const { typeSelect, envSelect } = option;
  // 输出选择的平台与环境
  getEnvLog(typeSelect, envSelect);
  // 修改选择的appid
  changeAppId(config[envSelect].appid);
  // 2.全局设置环境配置
  process.env.HOST_ENV = JSON.stringify(config[envSelect]);
  // 3.组装taro脚本
  const ls = spawn(
    'taro',
    ['build', envSelect, '--type', typeSelect, getEnv() ? '--' : '--watch'],
    { cwd },
  );
  // 4.执行脚本
  ls.stdout.pipe(process.stdout); //输出 开始走taro打包
  ls.stderr.on('data', (data) => console.error(`stderr:${data}`));
  ls.on('close', () => console.log('打包结束'));
});
/**
 * 判断script命令
 * @returns
 */
const getEnv = () => {
  return process.env.TYPE_ENV == 'build';
};
/**
 * 修改appid
 * @param {*} appid
 */
const changeAppId = (appid) => {
  fs.readFile(path.join('./project.config.json'), 'utf-8', (err, data) => {
    if (err) throw err;
    let list = JSON.parse(data);
    list.appid = appid;
    let nweList = JSON.stringify(list, null, 2);
    fs.writeFile(path.join('./project.config.json'), nweList, 'utf8', (err) => {
      if (err) throw err;
      getAppidLog(appid);
    });
  });
};
const getAppidLog = (appid) => {
  console.log('选择的appid为：' + chalk.green(appid));
};
const getEnvLog = (typeSelect, envSelect) => {
  console.log('选择的环境为：' + chalk.green(typeSelect, envSelect));
};
