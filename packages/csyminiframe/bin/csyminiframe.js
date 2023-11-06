#!/usr/bin/env node
console.log('csyminiframe')
const { program } = require('commander')
const pkg = require('../package.json')

program
    .version(pkg.version, '-v,-V', '输出当前框架的版本')
    .description('这是一个小框架csy')
    .usage('<command> [options]')
    .parse(process.argv)
program
    .command('help')
    .alias('-h')
    .description('帮助命令')
    .action(function (name, other) {
        console.log(`这是csyminiframe测试命令，name:${name}`)
    })
    .parse(process.argv)
