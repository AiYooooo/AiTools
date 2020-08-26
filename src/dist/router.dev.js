"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

_vue["default"].use(_vueRouter["default"]);

var routes = [{
  path: '/',
  redirect: '/home',
  meta: {}
}, {
  name: 'home',
  path: '/home',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('@/pages/Home'));
    });
  },
  meta: {
    title: '一套简洁易用的工具集'
  }
}, {
  name: 'color',
  path: '/color',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('@/pages/Color'));
    });
  },
  meta: {
    title: '颜色转换工具',
    type: 'menu',
    des: '用来进行RGB颜色和16进制颜色的转换。'
  }
}, {
  name: 'excel',
  path: '/excel',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('@/pages/Excel'));
    });
  },
  meta: {
    title: 'Excel解析工具',
    type: 'menu',
    des: '用来进行Excel文档的解析。'
  }
}, {
  name: 'qrcode',
  path: '/qrcode',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('@/pages/Qrcode'));
    });
  },
  meta: {
    title: '二维码生成工具',
    type: 'menu',
    des: '用来将文本信息生成二维码。'
  }
}, {
  name: 'crop',
  path: '/crop',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('@/pages/Crop'));
    });
  },
  meta: {
    title: '图片裁剪工具',
    type: 'menu',
    des: '用来将图片进行相应尺寸的裁剪。'
  }
}, {
  name: 'memorialday',
  path: '/memorialday',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('@/pages/Memorialday'));
    });
  },
  meta: {
    title: '纪念日',
    type: 'menu',
    des: '哪些日子快到了呢。'
  }
}, {
  name: 'md5',
  path: '/md5',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('@/pages/Md5'));
    });
  },
  meta: {
    title: 'MD5加密工具',
    type: 'menu',
    des: '用来将信息进行MD5加密。'
  }
}, {
  name: 'love',
  path: '/love',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('@/pages/Love'));
    });
  },
  meta: {
    title: '污污的情话',
    type: 'menu',
    des: '羞羞哒。'
  }
}];
var router = new _vueRouter["default"]({
  routes: routes
});
var _default = router;
exports["default"] = _default;