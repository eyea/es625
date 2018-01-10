"use strict";

var _marked = /*#__PURE__*/regeneratorRuntime.mark(create);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var _loop = function _loop(i) {
  a[i] = function () {
    console.log(i);
  };
};

// 循环
for (var i = 0; i < 5; i++) {
  _loop(i);
}

// 结构
var color = [1, 2, 4];
var colorful = [].concat(_toConsumableArray(clolr), [8, 9]);

// 生成器
function create() {
  return regeneratorRuntime.wrap(function create$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return 1;

        case 2:
          _context.next = 4;
          return 2;

        case 4:
          _context.next = 6;
          return 3;

        case 6:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this);
}
var it = create();

var it1 = it.next(2).value;