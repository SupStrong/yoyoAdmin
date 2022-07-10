import Cookie from "js-cookie";
import * as dd from 'dingtalk-jsapi'

export function getDingTalkPermission(callback) {
  dd.ready(() => {
    dd.runtime.permission.requestAuthCode({
      corpId: 'ding433c0ede44496c95a39a90f97fcb1e09',
      onSuccess: result => {
        callback(result)
      },
      onFail: error => {
        callback(error)
      }
    })
  })
}
export const formatDate = (date, fmt) => {
  if (date === 0 || date === null) {
    return '-'
  }
  if (isNaN(date)) {
    date = date.replace(/-/g, '/')
  }
  if (parseInt(date).toString().length > 9) {
    date = parseInt(date) * 1000
  }
  date = new Date(date)
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
    'q+': Math.floor((date.getMonth() + 3) / 3),
    'S': date.getMilliseconds()
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (let k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
    }
  }
  return fmt
}
export function dateFormat(timestamp, formats) {
  // formats格式包括
  // 1. Y-m-d
  // 2. Y-m-d H:i:s
  // 3. Y年m月d日
  // 4. Y年m月d日 H时i分
  formats = formats || "Y-m-d";

  const zero = function (value) {
    if (value < 10) {
      return "0" + value;
    }
    return value;
  };

  const myDate = timestamp ? new Date(timestamp) : new Date();

  const year = myDate.getFullYear();
  const month = zero(myDate.getMonth() + 1);
  const day = zero(myDate.getDate());

  const hour = zero(myDate.getHours());
  const minite = zero(myDate.getMinutes());
  const second = zero(myDate.getSeconds());

  return formats.replace(/Y|m|d|H|i|s/gi, function (matches) {
    return {
      Y: year,
      m: month,
      d: day,
      H: hour,
      i: minite,
      s: second,
    } [matches];
  });
}

export function deepCopy(obj) {
  const result = Array.isArray(obj) ? [] : {};
  for (const i in obj) {
    if (
      Object.prototype.toString.call(obj[i]) === "[object Object]" ||
      Object.prototype.toString.call(obj[i]) === "[object Array]"
    ) {
      result[i] = deepCopy(obj[i]);
    } else {
      result[i] = obj[i];
    }
  }
  return result;
}
export function elementList(ele, ratio) {
  if (!ratio) {
    ratio = 1;
  }
  const transitionBox = document.getElementsByClassName(ele);
  for (let i = 0; i < transitionBox.length; i++) {
    const width = transitionBox[i].clientWidth || transitionBox[i].offsetWidth;
    const height = width * ratio;
    transitionBox[i].style.height = height + "px";
  }
}
export const Cookies = {
  // 获取服务端cookie
  getcookiesInServer(req) {
    const serviceCookie = {};
    req &&
      req.headers.cookie &&
      req.headers.cookie.split(";").forEach(function (val) {
        const parts = val.split("=");
        serviceCookie[parts[0].trim()] = (parts[1] || "").trim();
      });
    return serviceCookie;
  },
  // 获取客户端cookie
  getcookiesInClient(key) {
    return Cookie.get(key) ? Cookie.get(key) : "";
  },
};

function isWechat(UA) {
  return !!/MicroMessenger/i.test(UA);
}

function isWeibo(UA) {
  return !!/Weibo/i.test(UA);
}

function isQQ(UA) {
  return !!/QQ/i.test(UA);
}

export function isMoible(UA) {
  return !!/(Android|webOS|iPhone|iPod|tablet|BlackBerry|Mobile)/i.test(UA);
}

function isIOS(UA) {
  return !!/iPhone|iPad|iPod/i.test(UA);
}

function isAndroid(UA) {
  return !!/Android/i.test(UA);
}
export function deviceType(UA) {
  if (isMoible(UA)) {
    if (isIOS(UA)) {
      if (isWechat(UA)) {
        return {
          type: "ios",
          env: "wechat",
          masklayer: true,
        };
      }
      if (isWeibo(UA)) {
        return {
          type: "ios",
          env: "weibo",
          masklayer: true,
        };
      }
      if (isQQ(UA)) {
        return {
          type: "ios",
          env: "qq",
          masklayer: true,
        };
      }
      return {
        type: "ios",
      };
    }
    if (isAndroid(UA)) {
      if (isWechat(UA)) {
        return {
          type: "android",
          env: "wechat",
          masklayer: true,
        };
      }
      if (isWeibo(UA)) {
        return {
          type: "android",
          env: "weibo",
          masklayer: true,
        };
      }
      if (isQQ(UA)) {
        return {
          type: "android",
          env: "qq",
          masklayer: true,
        };
      }
      return {
        type: "android",
      };
    }
    return {
      type: "mobile",
    };
  } else {
    return {
      type: "pc",
    };
  }
}
export function splitArrayChunk(arr = [], size = 2) {
  const objArr = [];
  let index = 0;
  const objArrLen = arr.length / size;
  for (let i = 0; i < objArrLen; i++) {
    const arrTemp = [];
    for (let j = 0; j < size; j++) {
      arrTemp[j] = arr[index++];
      if (index === arr.length) {
        break;
      }
    }
    objArr[i] = arrTemp;
  }
  return objArr;
}


export function getParenthesesStr(text) {
  let result = ''
  if (isObjEmpty(text))
    return result
  let regex = /\((.+?)\)/g;
  let options = text.match(regex)
  if (!isObjEmpty(options)) {
    let option = options[0]
    if (!isObjEmpty(option)) {
      result = option.substring(1, option.length - 1)
    }
  }
  return result
}

function isObjEmpty(obj) {
  if (Object.keys(obj).length) {
    return false
  } else {
    return true
  }
}

// 节流函数
export const throttle = (callback, threshold) => {
  if (!isFunction(callback)) return
  let last, timer
  threshold = threshold || 250
  return function () {
    const context = this
    let args = arguments
    let now = +new Date()
    if (last && now < last + threshold) {
      clearTimeout(timer)
      timer = setTimeout(function () {
        callback.apply(context, args)
      }, threshold)
    } else {
      last = now
      callback.apply(context, args)
    }
  }
}

export function debounce(fn, delay) {
  let timer = null // 借助闭包
  return function () {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(fn, delay) // 简化写法
  }
}
