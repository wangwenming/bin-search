# Node.js二分查找

# 示例
```javascript
var bs = require("bin-search");
bs([1, 2, 3, 4], 2); // 1
bs([{s: 1}, {s: 2}], {s: 2}, function(a, b) {return a.s - b.s;}); // 1
bs([1, 2, 3, 4, 6, 7], 5); // -5

```