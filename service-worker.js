self.addEventListener('install', function (event) {
    console.log('installing')
})

self.addEventListener('fetch', function (event) {
    // 「Site cannot be installed: the page does not work offline」対策に空のリスナー
    // 参考： https://amymd.hatenablog.com/entry/2017/10/12/001612
})