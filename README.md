# 🌊 Mini-Uniswap DEX 项目 

## 📚 项目简介

这是一个模仿 Uniswap V2 核心功能的去中心化交易所 (DEX) 实现。通过智能合约技术，为用户提供自动化做市商 (AMM) 服务。

### ✨ 核心功能
- 💧 添加流动性
- 🔄 代币交换
- 📤 移除流动性
- 💰 自动做市
- 🔒 安全保障

### 🛠 技术栈
- Solidity ^0.8.0
- Truffle Framework
- OpenZeppelin Contracts
- Node.js
- Web3.js

## 🚀 快速开始

### 前置要求

请确保您的开发环境中已安装：
- 🟢 Node.js (v12.0.0 或更高版本)
- 🟢 npm 或 yarn
- 🟢 Ganache (用于本地开发链)
- 🟢 MetaMask 浏览器插件

### 📥 安装步骤

1. 克隆项目
```bash
git clone git@github.com:Fernando-Zzs/uniswap-wrapped.git
cd uniswap-wrapped
```

2. 安装依赖
```bash
npm install
# 或者
yarn install
```

3. 安装truffle（如果未安装）
```bash
npm install -g truffle
# 或者
yarn global add truffle
```


### 🔧 配置
1. 启动 Ganache，创建本地区块链环境
```bash
ganache-cli
```

2. 复制项目中的 `.env.example` 文件并重命名为 `.env`
```bash
cp .env.example .env
```

3. 在 `.env` 文件中配置必要的配置信息
```bash
MNEMONIC=your mnemonic phrase
INFURA_PROJECT_ID=your infura project id
```

### 🚀 运行项目

1. 编译合约
```bash
truffle compile
```

2. 运行测试
```bash
truffle test
```

3. 部署合约（开发环境）
```bash
truffle migrate --network development
```

4. 部署合约（测试环境）
```bash
truffle migrate --network sepolia
```


## 🔐 安全性

- ✅ 使用 OpenZeppelin 安全合约库
- ✅ 重入攻击防护
- ✅ 溢出保护
- ✅ 权限控制


## 🤝 贡献指南

1. Fork 本项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送更改 (`git push origin feature/AmazingFeature`)
5. 创建 Pull Request


## 📄 许可证

该项目采用 MIT 许可证 - 查看 LICENSE 文件了解详情
### 💝 赞助支持
如果您觉得这个项目对您有帮助，欢迎赞助支持！
ETH: 0x7866111d9A50b9bDe51dA89ff56d04d92e1b6CAF

### 📮 联系方式
作者：Fernando-Zzs
Email：fernando_zzs@foxmail.com
Twitter：@zezesensen
### 🙏 致谢
OpenZeppelin - 安全智能合约库
Uniswap - 原始设计灵感
Truffle Suite - 开发框架
以太坊基金会 - 底层技术支持
---
⭐️ 如果这个项目对您有帮助，请给它一个星标！