import axios from 'axios'
import Vue from 'vue'
// let notLoginUrl = location.href.includes('/#/') ? '#/login' : '/login';
var step = false
export default function ({
  $axios,
  redirect
}) {
	// 添加请求拦截器
	$axios.interceptors.request.use( 
		(config) => {
			if (localStorage.token) {
				// 判断是否存在token，如果存在的话，则每个http header都加上token
				config.headers.Authorization = `${localStorage.token}`;
			}
			console.log(config,"!24")
			return config;
		},
		(err) => {
			return Promise.reject(err);
		}
	)
	
	// http response 拦截器
	$axios.interceptors.response.use(
		(response) => {
			if (response.headers.authorization) {
				localStorage.token = response.headers.authorization;
				vue.$Cookie.set('token', response.headers.authorization);
			}
			return response;
		},
		(error) => {
			let message = '';
			if (error.response) {
				switch (error.response.status) {
					case 400:
						message = '请求错误(400)';
						break;
					case 401:
						message = '未授权，请重新登录(401)';
						localStorage && localStorage.removeItem('token');
						if (isElectron) {
							vue.ipc.send('system', 'logoff');
						} else {
							if (!location.href.includes('/login')) {
								location.href = '/login';
							}
						}
						break;
					case 403:
						message = '拒绝访问(403)';
						break;
					case 404:
						message = '请求出错(404)';
						break;
					case 408:
						message = '请求超时(408)';
						break;
					case 500:
						message = '服务器错误(500)';
						break;
					case 501:
						message = '服务未实现(501)';
						break;
					case 502:
						message = '网络错误(502)';
						break;
					case 503:
						message = '服务不可用(503)';
						break;
					case 504:
						message = '网络超时(504)';
						break;
					case 505:
						message = 'HTTP版本不受支持(505)';
						break;
					default:
						message = `连接出错(${error.response.status})!`;
				}
			} else {
				if (error.message !== 'cancel') {
					message = '无法连接服务器';
				}
			}
			if(message){
				console.log(message,"messagemessagemessage")
			}
			return Promise.reject(error.response ? error.response.data : error); // 返回接口返回的错误信息
		}
	);
	$axios.onError((error) => {
    const code = parseInt(error.response && error.response.status);
    if (code === 400) {
      redirect("/404");
    }
  });
}