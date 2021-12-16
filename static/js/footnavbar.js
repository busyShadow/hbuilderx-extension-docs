
// 通用底部导航栏

function initFootLeftNavBar() {
	// 通用底部导航栏
	var footNavList = [{
			'title': '开发产品',
			'content': [{
					'subTitle': 'HBuilderX',
					'url': 'https://www.dcloud.io/hbuilderx.html'
				},
				{
					'subTitle': 'uni-app',
					'url': 'https://uniapp.dcloud.net.cn/'
				},
				{
					'subTitle': 'uniCloud',
					'url': 'https://uniapp.dcloud.net.cn/uniCloud/README'
				},
				{
					'subTitle': 'uniMPsdk',
					'url': 'https://nativesupport.dcloud.net.cn/'
				},
				{
					'subTitle': '5+Runtime',
					'url': 'https://www.dcloud.io/runtime.html'
				},
				{
					'subTitle': 'wap2app',
					'url': 'https://www.dcloud.io/wap2app.html?platform=wap2app'
				},
				{
					'subTitle': 'MUI',
					'url': 'https://www.dcloud.io/mui.html'
				},
				{
					'subTitle': 'uni-id',
					'url': 'https://uniapp.dcloud.net.cn/uniCloud/uni-id'
				},
				{
					'subTitle': 'uniPay',
					'url': 'https://uniapp.dcloud.net.cn/uniCloud/unipay'
				},
				{
					'subTitle': 'uniPush',
					'url': 'https://uniapp.dcloud.net.cn/unipush'
				},
				{
					'subTitle': 'uni-verify',
					'url': 'https://uniapp.dcloud.io/univerify'
				},
				{
					'subTitle': 'sms',
					'url': 'https://uniapp.dcloud.net.cn/uniCloud/send-sms'
				},
				{
					'subTitle': 'uni-starter',
					'url': 'https://ext.dcloud.net.cn/plugin?id=5057'
				},
				{
					'subTitle': 'uni-admin',
					'url': 'https://uniapp.dcloud.net.cn/uniCloud/admin'
				},
				{
					'subTitle': 'uni-upgrade-center',
					'url': 'https://uniapp.dcloud.io/uniCloud/upgrade-center'
				},
			]
		}
	]

	let htmlStringLeft = '';
		// 左侧分类
		for (var i = 0; i < footNavList.length; i++) {
			let navItemDom = document.createElement('div')
			navItemDom.className = "footNavItem"
			navItemDom.innerHTML =
				`<div class="navItemTitle">${footNavList[i].title}</div>
        <div class="navLine"></div>
        <div class="navItemDetailBox"></div>`

			for (var j = 0; j < footNavList[i].content.length; j++) {
				let aDom = document.createElement('a')
				aDom.className = "navItemDetail"
				aDom.innerText = footNavList[i].content[j].subTitle
				aDom.href = footNavList[i].content[j].url
				aDom.target = "_blank"
				navItemDom.getElementsByClassName('navItemDetailBox')[0].appendChild(aDom)
			}
			// document.querySelector("#footNavClassify").appendChild(navItemDom)
			htmlStringLeft += navItemDom.outerHTML
		}
		
		return htmlStringLeft
}

// 右侧
function initFootRightNavBar() {
  var aboutusList = [{
      'title': '运营产品',
      'content': [{
          'subTitle': 'uni-AD',
          'url': 'https://uniad.dcloud.net.cn/login'
        },
        {
          'subTitle': 'uni统计',
          'url': 'https://tongji.dcloud.net.cn/'
        },
        {
          'subTitle': 'uni发行',
          'url': 'https://www.dcloud.io/dportal.html'
        },
        {
          'subTitle': '',
          'url': ''
        },
        {
          'subTitle': '',
          'url': ''
        },
        {
          'subTitle': '',
          'url': ''
        },
      ]
    },
    {
      'title': '开发者服务',
      'content': [{
          'subTitle': '问答社区',
          'url': 'https://ask.dcloud.net.cn/explore/'
        },
        {
          'subTitle': '开发者后台',
          'url': 'https://dev.dcloud.net.cn/'
        }
      ]
    },
    {
      'title': '技术文档',
      'content': [{
          'subTitle': 'uni-app文档',
          'url': 'https://uniapp.dcloud.io/'
        },
        {
          'subTitle': 'uniCloud文档',
          'url': 'https://uniapp.dcloud.io/uniCloud/README'
        },
        {
          'subTitle': '原生开发者支持文档',
          'url': 'https://nativesupport.dcloud.net.cn/'
        },
        {
          'subTitle': 'HBuilder文档',
          'url': 'https://hx.dcloud.net.cn/'
        }
      ]
    },
    {
      'title': '生态服务',
      'content': [{
          'subTitle': '插件市场',
          'url': 'https://ext.dcloud.net.cn/'
        },
        {
          'subTitle': 'OAuth用户开放平台',
          'url': 'https://open.dcloud.net.cn/pages/login/login'
        }
      ]
    },
    {
      'title': '关于我们',
      'content': [{
          'subTitle': 'DCloud官网',
          'url': 'https://dcloud.io/'
        },
        {
          'subTitle': '案例',
          'url': 'https://uniapp.dcloud.io/case'
        },
        {
          'subTitle': '需求墙',
          'url': 'https://dev.dcloud.net.cn/wish/?channel=uniapp'
        },
        {
          'subTitle': '许可协议',
          'url': 'https://ask.dcloud.net.cn/article/35623'
        },
        {
          'subTitle': '加入我们',
          'url': 'https://www.dcloud.io/hr/'
        },
        {
          'subTitle': '赞助我们',
          'url': 'https://dev.dcloud.net.cn/sponsor/'
        }
      ]
    },
    {
      'title': '联系我们',
      'content': [{
          'subTitle': '商务合作：bd@dcloud.io',
          'url': 'mailto:bd@dcloud.io'
        },
        {
          'subTitle': '广告合作：uniad@dcloud.io',
          'url': 'mailto:uniad@dcloud.io'
        },
      ]
    }
  ]
  let htmlStringRight = '';
  for (var f = 0; f < aboutusList.length; f++) {
    let aboutusDom = document.createElement('div')
    aboutusDom.className = "footNavItem"
    aboutusDom.innerHTML =
      `<div class="navItemTitle">${aboutusList[f].title}</div>
      <div class="navLine"></div>
      <div class="aboutItemDetailBox"></div>`
    for (var g = 0; g < aboutusList[f].content.length; g++) {
      let aboutItemDom = document.createElement('a')
      aboutItemDom.className = "navItemDetail"
      // aboutItemDom.setAttribute('style', 'margin-bottom:15px;')
      aboutItemDom.innerText = aboutusList[f].content[g].subTitle
      aboutItemDom.href = aboutusList[f].content[g].url
      aboutItemDom.target = "_blank"
      aboutusDom.getElementsByClassName('aboutItemDetailBox')[0].appendChild(aboutItemDom)
    }
    // document.querySelector("#aboutusBox").appendChild(aboutusDom)
    htmlStringRight += aboutusDom.outerHTML
  }
  return htmlStringRight
}



function changeDomain() {
  var domain = document.domain
  console.log(domain);
  if (domain === 'uniapp.dcloud.net.cn') {
    return '京ICP备12046007号-4'
  } else {
    return '蒙ICP备14002744号-1'
  }
}
