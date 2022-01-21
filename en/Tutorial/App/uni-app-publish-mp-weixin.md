# uni-app发行到微信小程序@uploadPrivateKey

> HBuilderX 3.3.7+, uni-app 发行到微信小程序，支持自动上传代码到微信平台，无需再通过微信开发者工具上传发行

<img src="/static/snapshots/cli/wechat-upload.png" class="hd-img" />

通过微信小程序CI，使用上传密钥上传代码，无需打开微信开发者工具，一键完成微信小程序代码的上传、预览等操作。

**注意：**

- 自动上传到微信平台，依赖CI插件，如弹窗提示要求安装CI插件，请点击确认安装。
- 自动上传到微信平台，需要配置[上传密钥](/cli/publish-mp-weixin?id=uploadprivatekey)
- 自动上传到微信平台，请正确填写`微信小程序appid`和`privatekey`
- 自动上传到微信平台，如果开启了`IP白名单`，请确保微信平台已配置 IP 白名单