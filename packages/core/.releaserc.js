module.exports = {
  branches: ["main"], // 指定在哪个分支下要执行发布操作
  repositoryUrl: "https://github.com/chennlang/js-analyzer.git",
  plugins: [
    "@semantic-release/commit-analyzer", // 解析 commit 信息，默认就是 Angular 规范
    "@semantic-release/release-notes-generator",
    "@semantic-release/npm", // 发布到NPM
  ],
};
