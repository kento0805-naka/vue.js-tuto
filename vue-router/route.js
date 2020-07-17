
const router = new VueRouter({
    routes: [
        {
            path: '/top',
            component: {
                template: '<div>トップページです。</div>'
            },
        },
        {
            path: '/users',
            component: {
                template: '<div>ユーザー一覧ページです。</div>'
            }
        },
        {
            //パターンマッチングと名前付きルート
            path: '/user/:userId',
            name: 'user',
            component: {
                template: '<div>ユーザーのIDは{{ $route.params.userId }}です。</div>'
            }
        }
    ]
})

const app = new Vue({
    router: router
}).$mount('#app')