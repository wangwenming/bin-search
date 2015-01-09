# Node.js二分查找

# 示例
```javascript
var bs = require("bin-search");
bs([1, 2, 3, 4], 2); // 1
bs([{score: 1}, {score: 2}, {score: 3}, {score: 4}], {socre: 2}, function(a, b) {return a.score - b.score;}); // 1
bs([1, 2, 3, 4, 6, 7], 5); // -5

```