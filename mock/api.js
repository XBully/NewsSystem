// export default{
//   'GET /data':{
//     "users": [
//       {
//         "id": 1,
//         "username": "admin",
//         "password": 123456,
//         "roleState": true,
//         "default": true,
//         "region": "",
//         "roleId": 1,
//         "view": 2058,
//         "star": 317
//       },
//       {
//         "username": "钢蛋",
//         "password": "123",
//         "roleState": true,
//         "default": false,
//         "region": "南极洲",
//         "roleId": 2,
//         "id": 3,
//         "view": "[object Object]1111111111",
//         "star": 1
//       },
//       {
//         "username": "诸葛山珍",
//         "password": "123",
//         "roleState": true,
//         "default": false,
//         "region": "",
//         "roleId": 1,
//         "id": 4
//       },
//       {
//         "username": "西门吹灯",
//         "password": "123",
//         "roleState": true,
//         "default": false,
//         "region": "南极洲",
//         "roleId": 3,
//         "id": 5
//       },
//       {
//         "username": "轩辕翠花",
//         "password": "123",
//         "roleState": true,
//         "default": false,
//         "region": "南极洲",
//         "roleId": 3,
//         "id": 6
//       },
//       {
//         "username": "司马海味",
//         "password": "123",
//         "roleState": true,
//         "default": false,
//         "region": "亚洲",
//         "roleId": 3,
//         "id": 7
//       },
//       {
//         "username": "咕噜墩子",
//         "password": "123",
//         "roleState": true,
//         "default": false,
//         "region": "亚洲",
//         "roleId": 3,
//         "id": 8
//       },
//       {
//         "username": "坚强的大爷",
//         "password": "123456",
//         "region": "",
//         "roleId": 1,
//         "roleState": true,
//         "default": false,
//         "id": 9,
//         "view": 1,
//         "star": 1
//       }
//     ],
//     "roles": [
//       {
//         "id": 1,
//         "roleName": "超级管理员",
//         "roleType": 1,
//         "rights": [
//           "/user-manage",
//           "/user-manage/add",
//           "/user-manage/delete",
//           "/user-manage/update",
//           "/user-manage/list",
//           "/right-manage",
//           "/right-manage/role/list",
//           "/right-manage/right/list",
//           "/right-manage/role/update",
//           "/right-manage/role/delete",
//           "/right-manage/right/update",
//           "/right-manage/right/delete",
//           "/news-manage",
//           "/news-manage/list",
//           "/news-manage/add",
//           "/news-manage/update/:id",
//           "/news-manage/preview/:id",
//           "/news-manage/draft",
//           "/news-manage/category",
//           "/audit-manage",
//           "/audit-manage/audit",
//           "/audit-manage/list",
//           "/publish-manage",
//           "/publish-manage/unpublished",
//           "/publish-manage/published",
//           "/publish-manage/sunset",
//           "/home"
//         ]
//       },
//       {
//         "id": 2,
//         "roleName": "区域管理员",
//         "roleType": 2,
//         "rights": [
//           "/home",
//           "/user-manage",
//           "/user-manage/add",
//           "/user-manage/delete",
//           "/user-manage/update",
//           "/user-manage/list",
//           "/news-manage",
//           "/news-manage/list",
//           "/news-manage/add",
//           "/news-manage/update/:id",
//           "/news-manage/preview/:id",
//           "/news-manage/draft",
//           "/news-manage/category",
//           "/audit-manage",
//           "/audit-manage/audit",
//           "/audit-manage/list",
//           "/publish-manage",
//           "/publish-manage/unpublished",
//           "/publish-manage/published",
//           "/publish-manage/sunset"
//         ]
//       },
//       {
//         "id": 3,
//         "roleName": "区域编辑",
//         "roleType": 3,
//         "rights": [
//           "/news-manage/add",
//           "/audit-manage",
//           "/audit-manage/list",
//           "/publish-manage",
//           "/publish-manage/unpublished",
//           "/publish-manage/published",
//           "/publish-manage/sunset",
//           "/home",
//           "/news-manage",
//           "/news-manage/list",
//           "/news-manage/update/:id",
//           "/news-manage/preview/:id"
//         ]
//       }
//     ],
//     "children": [
//       {
//         "id": 3,
//         "title": "添加用户",
//         "rightId": 2,
//         "key": "/user-manage/add",
//         "grade": 2
//       },
//       {
//         "id": 4,
//         "title": "删除用户",
//         "rightId": 2,
//         "key": "/user-manage/delete",
//         "grade": 2
//       },
//       {
//         "id": 5,
//         "title": "修改用户",
//         "rightId": 2,
//         "key": "/user-manage/update",
//         "grade": 2
//       },
//       {
//         "id": 6,
//         "title": "用户列表",
//         "rightId": 2,
//         "key": "/user-manage/list",
//         "pagepermisson": 1,
//         "grade": 2
//       },
//       {
//         "id": 8,
//         "title": "角色列表",
//         "rightId": 7,
//         "key": "/right-manage/role/list",
//         "pagepermisson": 1,
//         "grade": 2
//       },
//       {
//         "id": 9,
//         "title": "权限列表",
//         "rightId": 7,
//         "key": "/right-manage/right/list",
//         "pagepermisson": 1,
//         "grade": 2
//       },
//       {
//         "id": 10,
//         "title": "修改角色",
//         "rightId": 7,
//         "key": "/right-manage/role/update",
//         "grade": 2
//       },
//       {
//         "id": 11,
//         "title": "删除角色",
//         "rightId": 7,
//         "key": "/right-manage/role/delete",
//         "grade": 2
//       },
//       {
//         "id": 12,
//         "title": "修改权限",
//         "rightId": 7,
//         "key": "/right-manage/right/update",
//         "grade": 2
//       },
//       {
//         "id": 13,
//         "title": "删除权限",
//         "rightId": 7,
//         "key": "/right-manage/right/delete",
//         "grade": 2
//       },
//       {
//         "id": 15,
//         "title": "新闻列表",
//         "rightId": 14,
//         "key": "/news-manage/list",
//         "grade": 2
//       },
//       {
//         "id": 16,
//         "title": "撰写新闻",
//         "rightId": 14,
//         "key": "/news-manage/add",
//         "grade": 2,
//         "pagepermisson": 1
//       },
//       {
//         "id": 17,
//         "title": "新闻更新",
//         "rightId": 14,
//         "key": "/news-manage/update/:id",
//         "grade": 2,
//         "routepermisson": 1
//       },
//       {
//         "id": 18,
//         "title": "新闻预览",
//         "rightId": 14,
//         "key": "/news-manage/preview/:id",
//         "grade": 2,
//         "routepermisson": 1
//       },
//       {
//         "id": 19,
//         "title": "草稿箱",
//         "rightId": 14,
//         "key": "/news-manage/draft",
//         "pagepermisson": 1,
//         "grade": 2
//       },
//       {
//         "id": 20,
//         "title": "新闻分类",
//         "rightId": 14,
//         "key": "/news-manage/category",
//         "pagepermisson": 1,
//         "grade": 2
//       },
//       {
//         "id": 22,
//         "title": "审核新闻",
//         "rightId": 21,
//         "key": "/audit-manage/audit",
//         "pagepermisson": 1,
//         "grade": 2
//       },
//       {
//         "id": 23,
//         "title": "审核列表",
//         "rightId": 21,
//         "key": "/audit-manage/list",
//         "pagepermisson": 1,
//         "grade": 2
//       },
//       {
//         "id": 25,
//         "title": "待发布",
//         "rightId": 24,
//         "key": "/publish-manage/unpublished",
//         "pagepermisson": 1,
//         "grade": 2
//       },
//       {
//         "id": 26,
//         "title": "已发布",
//         "rightId": 24,
//         "key": "/publish-manage/published",
//         "pagepermisson": 1,
//         "grade": 2
//       },
//       {
//         "id": 27,
//         "title": "已下线",
//         "rightId": 24,
//         "key": "/publish-manage/sunset",
//         "pagepermisson": 1,
//         "grade": 2
//       }
//     ],
//     "rights": [
//       {
//         "id": 1,
//         "title": "首页",
//         "key": "/home",
//         "pagepermisson": 1,
//         "grade": 1
//       },
//       {
//         "id": 2,
//         "title": "用户管理",
//         "key": "/user-manage",
//         "pagepermisson": 1,
//         "grade": 1
//       },
//       {
//         "id": 7,
//         "title": "权限管理",
//         "key": "/right-manage",
//         "pagepermisson": 1,
//         "grade": 1
//       },
//       {
//         "id": 14,
//         "title": "新闻管理",
//         "key": "/news-manage",
//         "pagepermisson": 1,
//         "grade": 1
//       },
//       {
//         "id": 21,
//         "title": "审核管理",
//         "key": "/audit-manage",
//         "pagepermisson": 1,
//         "grade": 1
//       },
//       {
//         "id": 24,
//         "title": "发布管理",
//         "key": "/publish-manage",
//         "pagepermisson": 1,
//         "grade": 1
//       }
//     ],
//     "categories": [
//       {
//         "id": 1,
//         "title": "时事新闻",
//         "value": "时事新闻"
//       },
//       {
//         "id": 2,
//         "title": "环球经济",
//         "value": "环球经济"
//       },
//       {
//         "id": 3,
//         "title": "科学技术",
//         "value": "科学技术"
//       },
//       {
//         "id": 4,
//         "title": "军事世界",
//         "value": "军事世界"
//       },
//       {
//         "id": 5,
//         "title": "世界体育",
//         "value": "世界体育"
//       },
//       {
//         "id": 6,
//         "title": "生活理财",
//         "value": "生活理财"
//       }
//     ],
//     "regions": [
//       {
//         "id": 1,
//         "title": "亚洲",
//         "value": "亚洲"
//       },
//       {
//         "id": 2,
//         "title": "欧洲",
//         "value": "欧洲"
//       },
//       {
//         "id": 3,
//         "title": "北美洲",
//         "value": "北美洲"
//       },
//       {
//         "id": 4,
//         "title": "南美洲",
//         "value": "南美洲"
//       },
//       {
//         "id": 5,
//         "title": "非洲",
//         "value": "非洲"
//       },
//       {
//         "id": 6,
//         "title": "大洋洲",
//         "value": "大洋洲"
//       },
//       {
//         "id": 7,
//         "title": "南极洲",
//         "value": "南极洲"
//       }
//     ],
//     "news": [
//       {
//         "title": "千锋教育",
//         "categoryId": 3,
//         "content": "<p style=\"text-align:start;\"></p>\n<p style=\"margin-left:0px;\"><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 14px;font-family: 微软雅黑, \"PingFang SC;\">      看到有同学在问大连的</span><a href=\"http://www.mobiletrain.org/\" target=\"_blank\"><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 14px;font-family: 微软雅黑, \"PingFang SC;\">千锋教育</span></a><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 14px;font-family: 微软雅黑, \"PingFang SC;\">校址在哪里，这里小千就来给大家介绍一下千锋教育和校区地址，给大家参考一下。</span></p>\n<p style=\"text-align:center;\"></p>\n<img src=\"http://upload.mobiletrain.org/2020/1218/1608271193504.jpg\" alt=\"u=313055993,4178527216&fm=26&gp=0\" style=\"height: ;width: \"/>\n<p style=\"margin-left:0px;\"><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 14px;font-family: 微软雅黑, \"PingFang SC;\"><strong>千锋教育大连校区地址</strong></span></p>\n<p style=\"margin-left:0px;\"><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 14px;font-family: 微软雅黑, \"PingFang SC;\">      首先先给大家介绍一下千锋教育的大连校区地址，坐落在：辽宁省大连市高新园区爱贤街10号大连设计城A座901，联系和咨询电话可以拨打 400-811-9990，会有专人负责接待同学。</span></p>\n<p style=\"margin-left:0px;\"><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 14px;font-family: 微软雅黑, \"PingFang SC;\"><strong>千锋教育</strong></span></p>\n<p style=\"margin-left:0px;\"><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 14px;font-family: 微软雅黑, \"PingFang SC;\">      再给大家简单介绍一下千锋教育，千锋教育是北京千锋互联科技有限公司旗下的品牌，开设了12大热门课程，并且每月都会更新最新的前沿技术。</span></p>\n<p style=\"margin-left:0px;\"><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 14px;font-family: 微软雅黑, \"PingFang SC;\">      千锋教育一直秉持着“用良心做教育”的理念，在全国拥有上百家的合作高校，更是有超过20000家的合作企业。</span></p>\n<p style=\"margin-left:0px;\"><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 14px;font-family: 微软雅黑, \"PingFang SC;\">      千锋教育总部设立在北京，目前在目前已在深圳、上海、郑州、广州、大连、武汉、成都、西安、杭州、青岛、重庆、长沙、哈尔滨、南京、太原建立分公司。</span></p>\n<p style=\"margin-left:0px;\"><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 14px;font-family: 微软雅黑, \"PingFang SC;\">      千锋教育开设HTML5前端、Java、Python、全链路设计、云计算、软件测试、大数据、智能物联网、Unity游戏开发、Go语言开发、网络安全、互联网营销学科，并推出软考、Adobe认证、PMP认证、</span><a href=\"http://www.mobiletrain.org/topic/redhat/\" target=\"_blank\"><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 14px;font-family: 微软雅黑, \"PingFang SC;\">红帽RHCE认证</span></a><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 14px;font-family: 微软雅黑, \"PingFang SC;\">课程</span></p>\n<p style=\"margin-left:0px;\"><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 14px;font-family: 微软雅黑, \"PingFang SC;\">      最后欢迎大家来到千锋教育大连校区了解我们的培训课程，全程名师面授确保课程品质，还享受2周的免费试听不满意不缴费随时退学即可，赶紧来了解一下吧~~~~</span></p>\n<p style=\"text-align:start;\"><br>&nbsp;</p>\n",
//         "region": "全球",
//         "author": "admin",
//         "roleId": 1,
//         "auditState": 2,
//         "publishState": 2,
//         "createTime": 1615777743864,
//         "star": 1001,
//         "view": 2084,
//         "id": 1,
//         "publishTime": 1615778496314
//       },
//       {
//         "title": "Hello World",
//         "categoryId": 1,
//         "content": "<p style=\"text-align:start;\"></p>\n<p style=\"margin-left:0px;\"><span style=\"color: rgb(0,0,0);font-size: 17px;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">Click the link above to open an online editor. Feel free to make some changes, and see how they affect the output. Most pages in this guide will have editable examples like this one.</span></p>\n<h2 style=\"margin-left:0px;\"><span style=\"color: rgb(0,0,0);font-size: medium;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">How to Read This Guide</span></h2>\n<p style=\"margin-left:0px;\"><span style=\"color: rgb(0,0,0);font-size: 17px;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">In this guide, we will examine the building blocks of React apps: elements and components. Once you master them, you can create complex apps from small reusable pieces.</span></p>\n<blockquote style=\"margin-left:-30px;\"></blockquote>\n<p style=\"margin-left:0px;\"><span style=\"color: rgb(0,0,0);background-color: rgba(255,229,100,0.3);font-size: 17px;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">Tip</span></p>\n<p style=\"margin-left:0px;\"><span style=\"color: rgb(0,0,0);background-color: rgba(255,229,100,0.3);font-size: 17px;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">This guide is designed for people who prefer</span> <span style=\"color: rgb(0,0,0);background-color: rgba(255,229,100,0.3);font-size: 17px;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\"><strong>learning concepts step by step</strong>. If you prefer to learn by doing, check out our</span> <a href=\"https://reactjs.org/tutorial/tutorial.html\" target=\"_self\"><span style=\"color: rgb(26,26,26);background-color: rgba(187,239,253,0.3);font-size: 17px;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">practical tutorial</span></a><span style=\"color: rgb(0,0,0);background-color: rgba(255,229,100,0.3);font-size: 17px;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">. You might find this guide and the tutorial complementary to each other.</span></p>\n<p style=\"margin-left:0px;\"><span style=\"color: rgb(0,0,0);font-size: 17px;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">This is the first chapter in a step-by-step guide about main React concepts. You can find a list of all its chapters in the navigation sidebar. If you’re reading this from a mobile device, you can access the navigation by pressing the button in the bottom right corner of your screen.</span></p>\n<p style=\"margin-left:0px;\"><span style=\"color: rgb(0,0,0);font-size: 17px;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">Every chapter in this guide builds on the knowledge introduced in earlier chapters.</span> <span style=\"color: rgb(0,0,0);font-size: 17px;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\"><strong>You can learn most of React by reading the “Main Concepts” guide chapters in the order they appear in the sidebar.</strong></span> <span style=\"color: rgb(0,0,0);font-size: 17px;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">For example,</span> <a href=\"https://reactjs.org/docs/introducing-jsx.html\" target=\"_self\"><span style=\"color: rgb(26,26,26);background-color: rgba(187,239,253,0.3);font-size: 17px;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">“Introducing JSX”</span></a> <span style=\"color: rgb(0,0,0);font-size: 17px;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">is the next chapter after this one.</span></p>\n<h2 style=\"margin-left:0px;\"><span style=\"color: rgb(0,0,0);font-size: medium;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">Knowledge Level Assumptions</span></h2>\n<p style=\"margin-left:0px;\"><span style=\"color: rgb(0,0,0);font-size: 17px;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">React is a JavaScript library, and so we’ll assume you have a basic understanding of the JavaScript language.</span> <span style=\"color: rgb(0,0,0);font-size: 17px;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\"><strong>If you don’t feel very confident, we recommend</strong></span> <a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript\" target=\"_blank\"><span style=\"color: rgb(26,26,26);background-color: rgba(187,239,253,0.3);font-size: 17px;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\"><strong>going through a JavaScript tutorial</strong></span></a> <span style=\"color: rgb(0,0,0);font-size: 17px;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\"><strong>to check your knowledge level</strong></span> <span style=\"color: rgb(0,0,0);font-size: 17px;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">and enable you to follow along this guide without getting lost. It might take you between 30 minutes and an hour, but as a result you won’t have to feel like you’re learning both React and JavaScript at the same time.</span></p>\n<blockquote style=\"margin-left:-30px;\"></blockquote>\n<p style=\"margin-left:0px;\"><span style=\"color: rgb(0,0,0);background-color: rgba(255,229,100,0.3);font-size: 17px;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">Note</span></p>\n<p style=\"margin-left:0px;\"><span style=\"color: rgb(0,0,0);background-color: rgba(255,229,100,0.3);font-size: 17px;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">This guide occasionally uses some of the newer JavaScript syntax in the examples. If you haven’t worked with JavaScript in the last few years,</span> <a href=\"https://gist.github.com/gaearon/683e676101005de0add59e8bb345340c\" target=\"_blank\"><span style=\"color: rgb(26,26,26);background-color: rgba(187,239,253,0.3);font-size: 17px;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">these three points</span></a> <span style=\"color: rgb(0,0,0);background-color: rgba(255,229,100,0.3);font-size: 17px;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">should get you most of the way.</span></p>\n<h2 style=\"margin-left:0px;\"><span style=\"color: rgb(0,0,0);font-size: medium;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">Let’s Get Started!</span></h2>\n<p style=\"margin-left:0px;\"><span style=\"color: rgb(0,0,0);font-size: 17px;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">Keep scrolling down, and you’ll find the link to the</span> <a href=\"https://reactjs.org/docs/introducing-jsx.html\" target=\"_self\"><span style=\"color: rgb(26,26,26);background-color: rgba(187,239,253,0.3);font-size: 17px;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">next chapter of this guide</span></a> <span style=\"color: rgb(0,0,0);font-size: 17px;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">right before the website footer.</span><br>&nbsp;</p>\n",
//         "region": "全球",
//         "author": "admin",
//         "roleId": 1,
//         "auditState": 2,
//         "publishState": 2,
//         "createTime": 1615778694831,
//         "star": 500,
//         "view": "[object Object]1111111111",
//         "id": 2,
//         "publishTime": 1615778911028
//       },
//       {
//         "title": "Introducing JSX",
//         "categoryId": 2,
//         "content": "<p style=\"text-align:start;\"><span style=\"color: rgb(0,0,0);font-size: 17px;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">This funny tag syntax is neither a string nor HTML.</span></p>\n<p style=\"text-align:start;\"><span style=\"color: rgb(0,0,0);font-size: 17px;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">It is called JSX, and it is a syntax extension to JavaScript. We recommend using it with React to describe what the UI should look like. JSX may remind you of a template language, but it comes with the full power of JavaScript.</span></p>\n<p style=\"text-align:start;\"><span style=\"color: rgb(0,0,0);font-size: 17px;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">JSX produces React “elements”. We will explore rendering them to the DOM in the</span> <a href=\"https://reactjs.org/docs/rendering-elements.html\" target=\"_self\"><span style=\"color: rgb(26,26,26);background-color: rgba(187,239,253,0.3);font-size: 17px;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">next section</span></a><span style=\"color: rgb(0,0,0);font-size: 17px;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">. Below, you can find the basics of JSX necessary to get you started.</span></p>\n<h3 style=\"text-align:start;\"><span style=\"color: rgb(0,0,0);font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">Why JSX?</span></h3>\n<p style=\"text-align:start;\"><span style=\"color: rgb(0,0,0);font-size: 17px;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">React embraces the fact that rendering logic is inherently coupled with other UI logic: how events are handled, how the state changes over time, and how the data is prepared for display.</span></p>\n<p style=\"text-align:start;\"><span style=\"color: rgb(0,0,0);font-size: 17px;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">Instead of artificially separating</span> <span style=\"color: rgb(0,0,0);font-size: 17px;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\"><em>technologies</em></span> <span style=\"color: rgb(0,0,0);font-size: 17px;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">by putting markup and logic in separate files, React</span> <a href=\"https://en.wikipedia.org/wiki/Separation_of_concerns\" target=\"_blank\"><span style=\"color: rgb(26,26,26);background-color: rgba(187,239,253,0.3);font-size: 17px;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">separates</span> <span style=\"color: rgb(26,26,26);background-color: rgba(187,239,253,0.3);font-size: 17px;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\"><em>concerns</em></span></a> <span style=\"color: rgb(0,0,0);font-size: 17px;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">with loosely coupled units called “components” that contain both. We will come back to components in a</span> <a href=\"https://reactjs.org/docs/components-and-props.html\" target=\"_self\"><span style=\"color: rgb(26,26,26);background-color: rgba(187,239,253,0.3);font-size: 17px;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">further section</span></a><span style=\"color: rgb(0,0,0);font-size: 17px;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">, but if you’re not yet comfortable putting markup in JS,</span> <a href=\"https://www.youtube.com/watch?v=x7cQ3mrcKaY\" target=\"_blank\"><span style=\"color: rgb(26,26,26);background-color: rgba(187,239,253,0.3);font-size: 17px;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">this talk</span></a> <span style=\"color: rgb(0,0,0);font-size: 17px;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">might convince you otherwise.</span></p>\n<p style=\"text-align:start;\"><span style=\"color: rgb(0,0,0);font-size: 17px;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">React</span> <a href=\"https://reactjs.org/docs/react-without-jsx.html\" target=\"_self\"><span style=\"color: rgb(26,26,26);background-color: rgba(187,239,253,0.3);font-size: 17px;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">doesn’t require</span></a> <span style=\"color: rgb(0,0,0);font-size: 17px;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">using JSX, but most people find it helpful as a visual aid when working with UI inside the JavaScript code. It also allows React to show more useful error and warning messages.</span></p>\n<p style=\"text-align:start;\"><span style=\"color: rgb(0,0,0);font-size: 17px;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">With that out of the way, let’s get started!</span></p>\n<h3 style=\"text-align:start;\"><span style=\"color: rgb(0,0,0);font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">Embedding Expressions in JSX</span></h3>\n<p style=\"text-align:start;\"><span style=\"color: rgb(0,0,0);font-size: 17px;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">In the example below, we declare a variable called</span> <span style=\"color: rgb(0,0,0);font-size: 17px;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\"><code>name</code></span> <span style=\"color: rgb(0,0,0);font-size: 17px;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">and then use it inside JSX by wrapping it in curly braces:</span></p>\n<p style=\"text-align:start;\"></p>\n<pre style=\"margin-left:1rem;\"><br>&nbsp;</pre>\n",
//         "region": "全球",
//         "author": "admin",
//         "roleId": 1,
//         "auditState": 2,
//         "publishState": 2,
//         "createTime": 1615778715619,
//         "star": 600,
//         "view": 985,
//         "id": 3,
//         "publishTime": 1615778911762
//       },
//       {
//         "title": "Rendering Elements",
//         "categoryId": 3,
//         "content": "<p style=\"text-align:start;\"></p>\n<h2 style=\"margin-left:0px;\"><span style=\"color: rgb(0,0,0);font-size: medium;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">React Only Updates What’s Necessary</span></h2>\n<p style=\"margin-left:0px;\"><span style=\"color: rgb(0,0,0);font-size: 17px;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">React DOM compares the element and its children to the previous one, and only applies the DOM updates necessary to bring the DOM to the desired state.</span></p>\n<p style=\"margin-left:0px;\"><span style=\"color: rgb(0,0,0);font-size: 17px;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">You can verify by inspecting the</span> <a href=\"https://reactjs.org/redirect-to-codepen/rendering-elements/update-rendered-element\" target=\"_blank\"><span style=\"color: rgb(26,26,26);background-color: rgba(187,239,253,0.3);font-size: 17px;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">last example</span></a> <span style=\"color: rgb(0,0,0);font-size: 17px;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">with the browser tools:</span></p>\n<p style=\"margin-left:0px;\"></p>\n<img src=\"https://reactjs.org/c158617ed7cc0eac8f58330e49e48224/granular-dom-updates.gif\" alt=\"DOM inspector showing granular updates\" style=\"height: ;width: \"/>\n<p style=\"margin-left:0px;\"><span style=\"color: rgb(0,0,0);font-size: 17px;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">Even though we create an element describing the whole UI tree on every tick, only the text node whose contents have changed gets updated by React DOM.</span></p>\n<p style=\"margin-left:0px;\"><span style=\"color: rgb(0,0,0);font-size: 17px;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">In our experience, thinking about how the UI should look at any given moment, rather than how to change it over time, eliminates a whole class of bugs.</span></p>\n<p style=\"text-align:start;\"><span style=\"color: rgb(109,109,109);font-size: medium;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">Is this page useful?</span><a href=\"https://github.com/reactjs/reactjs.org/tree/master/content/docs/rendering-elements.md\" target=\"_self\"><span style=\"color: rgb(55,57,64);background-color: transparent;font-size: medium;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">Edit this page</span></a>&nbsp;</p>\n",
//         "region": "全球",
//         "author": "admin",
//         "roleId": 1,
//         "auditState": 2,
//         "publishState": 3,
//         "createTime": 1615778740202,
//         "star": 800,
//         "view": 869,
//         "id": 4,
//         "publishTime": 1615778912481
//       },
//       {
//         "title": "Components and Props",
//         "categoryId": 4,
//         "content": "<p style=\"text-align:start;\"><span style=\"color: rgb(109,109,109);font-size: 18px;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. This page provides an introduction to the idea of components. You can find a</span> <a href=\"https://reactjs.org/docs/react-component.html\" target=\"_self\"><span style=\"color: rgb(26,26,26);background-color: rgba(187,239,253,0.3);font-size: 18px;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">detailed component API reference here</span></a><span style=\"color: rgb(109,109,109);font-size: 18px;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">.</span></p>\n<p style=\"text-align:start;\"><span style=\"color: rgb(0,0,0);font-size: 17px;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.</span></p>\n<h2 style=\"text-align:start;\"><br> <span style=\"color: rgb(0,0,0);font-size: 17px;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">Let’s recap what happens in this example:</span></h2>\n<ol>\n<li style=\"margin-left:0px;\"><span style=\"color: rgb(26,26,26);font-size: medium;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">We call</span> <span style=\"color: rgb(26,26,26);font-size: medium;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\"><code>ReactDOM.render()</code></span> <span style=\"color: rgb(26,26,26);font-size: medium;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">with the</span> <span style=\"color: rgb(26,26,26);font-size: medium;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\"><code>&lt;Welcome name=\"Sara\" /&gt;</code></span> <span style=\"color: rgb(26,26,26);font-size: medium;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">element.</span></li>\n<li style=\"margin-left:0px;\"><span style=\"color: rgb(26,26,26);font-size: medium;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">React calls the</span> <span style=\"color: rgb(26,26,26);font-size: medium;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\"><code>Welcome</code></span> <span style=\"color: rgb(26,26,26);font-size: medium;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">component with</span> <span style=\"color: rgb(26,26,26);font-size: medium;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\"><code>{name: 'Sara'}</code></span> <span style=\"color: rgb(26,26,26);font-size: medium;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">as the props.</span></li>\n<li style=\"margin-left:0px;\"><span style=\"color: rgb(26,26,26);font-size: medium;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">Our</span> <span style=\"color: rgb(26,26,26);font-size: medium;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\"><code>Welcome</code></span> <span style=\"color: rgb(26,26,26);font-size: medium;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">component returns a</span> <span style=\"color: rgb(26,26,26);font-size: medium;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\"><code>&lt;h1&gt;Hello, Sara&lt;/h1&gt;</code></span> <span style=\"color: rgb(26,26,26);font-size: medium;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">element as the result.</span></li>\n<li style=\"margin-left:0px;\"><span style=\"color: rgb(26,26,26);font-size: medium;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">React DOM efficiently updates the DOM to match</span> <span style=\"color: rgb(26,26,26);font-size: medium;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\"><code>&lt;h1&gt;Hello, Sara&lt;/h1&gt;</code>.</span></li>\n</ol>\n<blockquote style=\"text-align:start;\"></blockquote>\n<p style=\"margin-left:0px;\"><span style=\"color: rgb(0,0,0);background-color: rgba(255,229,100,0.3);font-size: 17px;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\"><strong>Note:</strong></span> <span style=\"color: rgb(0,0,0);background-color: rgba(255,229,100,0.3);font-size: 17px;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">Always start component names with a capital letter.</span></p>\n<p style=\"margin-left:0px;\"><span style=\"color: rgb(0,0,0);background-color: rgba(255,229,100,0.3);font-size: 17px;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">React treats components starting with lowercase letters as DOM tags. For example,</span> <span style=\"color: rgb(0,0,0);background-color: rgba(255,229,100,0.3);font-size: 17px;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\"><code>&lt;div /&gt;</code></span> <span style=\"color: rgb(0,0,0);background-color: rgba(255,229,100,0.3);font-size: 17px;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">represents an HTML div tag, but</span> <span style=\"color: rgb(0,0,0);background-color: rgba(255,229,100,0.3);font-size: 17px;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\"><code>&lt;Welcome /&gt;</code></span> <span style=\"color: rgb(0,0,0);background-color: rgba(255,229,100,0.3);font-size: 17px;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">represents a component and requires</span> <span style=\"color: rgb(0,0,0);background-color: rgba(255,229,100,0.3);font-size: 17px;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\"><code>Welcome</code></span> <span style=\"color: rgb(0,0,0);background-color: rgba(255,229,100,0.3);font-size: 17px;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">to be in scope.</span></p>\n<p style=\"margin-left:0px;\"><span style=\"color: rgb(0,0,0);background-color: rgba(255,229,100,0.3);font-size: 17px;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">To learn more about the reasoning behind this convention, please read</span> <a href=\"https://reactjs.org/docs/jsx-in-depth.html#user-defined-components-must-be-capitalized\" target=\"_self\"><span style=\"color: rgb(26,26,26);background-color: rgba(187,239,253,0.3);font-size: 17px;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">JSX In Depth</span></a><span style=\"color: rgb(0,0,0);background-color: rgba(255,229,100,0.3);font-size: 17px;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">.</span></p>\n<h2 style=\"text-align:start;\"><br>&nbsp;</h2>\n",
//         "region": "全球",
//         "author": "admin",
//         "roleId": 1,
//         "auditState": 2,
//         "publishState": 2,
//         "createTime": 1615778777924,
//         "star": 100,
//         "view": 202,
//         "id": 5,
//         "publishTime": 1615778914498
//       },
//       {
//         "title": "State and Lifecycle",
//         "categoryId": 4,
//         "content": "<p style=\"text-align:start;\"><span style=\"color: rgb(0,0,0);font-size: 17px;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">Now the clock ticks every second.</span></p>\n<p style=\"text-align:start;\"><span style=\"color: rgb(0,0,0);font-size: 17px;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">Let’s quickly recap what’s going on and the order in which the methods are called:</span></p>\n<ol>\n<li style=\"margin-left:0px;\"><span style=\"color: rgb(26,26,26);font-size: medium;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">When</span> <span style=\"color: rgb(26,26,26);font-size: medium;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\"><code>&lt;Clock /&gt;</code></span> <span style=\"color: rgb(26,26,26);font-size: medium;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">is passed to</span> <span style=\"color: rgb(26,26,26);font-size: medium;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\"><code>ReactDOM.render()</code>, React calls the constructor of the</span> <span style=\"color: rgb(26,26,26);font-size: medium;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\"><code>Clock</code></span> <span style=\"color: rgb(26,26,26);font-size: medium;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">component. Since</span> <span style=\"color: rgb(26,26,26);font-size: medium;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\"><code>Clock</code></span> <span style=\"color: rgb(26,26,26);font-size: medium;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">needs to display the current time, it initializes</span> <span style=\"color: rgb(26,26,26);font-size: medium;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\"><code>this.state</code></span> <span style=\"color: rgb(26,26,26);font-size: medium;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">with an object including the current time. We will later update this state.</span></li>\n<li style=\"margin-left:0px;\"><span style=\"color: rgb(26,26,26);font-size: medium;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">React then calls the</span> <span style=\"color: rgb(26,26,26);font-size: medium;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\"><code>Clock</code></span> <span style=\"color: rgb(26,26,26);font-size: medium;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">component’s</span> <span style=\"color: rgb(26,26,26);font-size: medium;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\"><code>render()</code></span> <span style=\"color: rgb(26,26,26);font-size: medium;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">method. This is how React learns what should be displayed on the screen. React then updates the DOM to match the</span> <span style=\"color: rgb(26,26,26);font-size: medium;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\"><code>Clock</code>’s render output.</span></li>\n<li style=\"margin-left:0px;\"><span style=\"color: rgb(26,26,26);font-size: medium;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">When the</span> <span style=\"color: rgb(26,26,26);font-size: medium;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\"><code>Clock</code></span> <span style=\"color: rgb(26,26,26);font-size: medium;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">output is inserted in the DOM, React calls the</span> <span style=\"color: rgb(26,26,26);font-size: medium;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\"><code>componentDidMount()</code></span> <span style=\"color: rgb(26,26,26);font-size: medium;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">lifecycle method. Inside it, the</span> <span style=\"color: rgb(26,26,26);font-size: medium;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\"><code>Clock</code></span> <span style=\"color: rgb(26,26,26);font-size: medium;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">component asks the browser to set up a timer to call the component’s</span> <span style=\"color: rgb(26,26,26);font-size: medium;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\"><code>tick()</code></span> <span style=\"color: rgb(26,26,26);font-size: medium;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">method once a second.</span></li>\n<li style=\"margin-left:0px;\"><span style=\"color: rgb(26,26,26);font-size: medium;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">Every second the browser calls the</span> <span style=\"color: rgb(26,26,26);font-size: medium;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\"><code>tick()</code></span> <span style=\"color: rgb(26,26,26);font-size: medium;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">method. Inside it, the</span> <span style=\"color: rgb(26,26,26);font-size: medium;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\"><code>Clock</code></span> <span style=\"color: rgb(26,26,26);font-size: medium;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">component schedules a UI update by calling</span> <span style=\"color: rgb(26,26,26);font-size: medium;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\"><code>setState()</code></span> <span style=\"color: rgb(26,26,26);font-size: medium;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">with an object containing the current time. Thanks to the</span> <span style=\"color: rgb(26,26,26);font-size: medium;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\"><code>setState()</code></span> <span style=\"color: rgb(26,26,26);font-size: medium;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">call, React knows the state has changed, and calls the</span> <span style=\"color: rgb(26,26,26);font-size: medium;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\"><code>render()</code></span> <span style=\"color: rgb(26,26,26);font-size: medium;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">method again to learn what should be on the screen. This time,</span> <span style=\"color: rgb(26,26,26);font-size: medium;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\"><code>this.state.date</code></span> <span style=\"color: rgb(26,26,26);font-size: medium;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">in the</span> <span style=\"color: rgb(26,26,26);font-size: medium;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\"><code>render()</code></span> <span style=\"color: rgb(26,26,26);font-size: medium;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">method will be different, and so the render output will include the updated time. React updates the DOM accordingly.</span></li>\n<li style=\"margin-left:0px;\"><span style=\"color: rgb(26,26,26);font-size: medium;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">If the</span> <span style=\"color: rgb(26,26,26);font-size: medium;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\"><code>Clock</code></span> <span style=\"color: rgb(26,26,26);font-size: medium;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">component is ever removed from the DOM, React calls the</span> <span style=\"color: rgb(26,26,26);font-size: medium;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\"><code>componentWillUnmount()</code></span> <span style=\"color: rgb(26,26,26);font-size: medium;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">lifecycle method so the timer is stopped.</span></li>\n</ol>\n<h2 style=\"text-align:start;\"><span style=\"color: rgb(0,0,0);font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">Using State Correctly</span></h2>\n<p style=\"text-align:start;\"><span style=\"color: rgb(0,0,0);font-size: 17px;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">There are three things you should know about</span> <span style=\"color: rgb(0,0,0);font-size: 17px;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\"><code>setState()</code>.</span></p>\n<h3 style=\"text-align:start;\"><span style=\"color: rgb(0,0,0);font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">Do Not Modify State Directly</span></h3>\n<p style=\"text-align:start;\"><span style=\"color: rgb(0,0,0);font-size: 17px;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">For example, this will not re-render a component:</span></p>\n<p style=\"text-align:start;\"><br>&nbsp;</p>\n",
//         "region": "全球",
//         "author": "admin",
//         "roleId": 1,
//         "auditState": 2,
//         "publishState": 3,
//         "createTime": 1615778808893,
//         "star": 300,
//         "view": 454,
//         "id": 6,
//         "publishTime": 1653037848170
//       },
//       {
//         "title": "Forms",
//         "categoryId": 5,
//         "content": "<h2 style=\"text-align:start;\"><span style=\"color: rgb(0,0,0);font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">Controlled Components</span></h2>\n<p style=\"text-align:start;\"><span style=\"color: rgb(0,0,0);font-size: 17px;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">In HTML, form elements such as</span> <span style=\"color: rgb(0,0,0);font-size: 17px;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\"><code>&lt;input&gt;</code>,</span> <span style=\"color: rgb(0,0,0);font-size: 17px;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\"><code>&lt;textarea&gt;</code>, and</span> <span style=\"color: rgb(0,0,0);font-size: 17px;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\"><code>&lt;select&gt;</code></span> <span style=\"color: rgb(0,0,0);font-size: 17px;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">typically maintain their own state and update it based on user input. In React, mutable state is typically kept in the state property of components, and only updated with</span> <a href=\"https://reactjs.org/docs/react-component.html#setstate\" target=\"_self\"><span style=\"color: rgb(26,26,26);background-color: rgba(187,239,253,0.3);font-size: 17px;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\"><code>setState()</code></span></a><span style=\"color: rgb(0,0,0);font-size: 17px;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">.</span></p>\n<p style=\"text-align:start;\"><span style=\"color: rgb(0,0,0);font-size: 17px;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">We can combine the two by making the React state be the “single source of truth”. Then the React component that renders a form also controls what happens in that form on subsequent user input. An input form element whose value is controlled by React in this way is called a “controlled component”.</span></p>\n<p style=\"text-align:start;\"><span style=\"color: rgb(0,0,0);font-size: 17px;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">For example, if we want to make the previous example log the name when it is submitted, we can write the form as a controlled component:</span></p>\n<p style=\"text-align:start;\"><br>&nbsp;</p>\n",
//         "region": "全球",
//         "author": "admin",
//         "roleId": 1,
//         "auditState": 2,
//         "publishState": 2,
//         "createTime": 1615778852584,
//         "star": 317,
//         "view": 538,
//         "id": 7,
//         "publishTime": 1615778917074
//       },
//       {
//         "title": "Thinking in React",
//         "categoryId": 6,
//         "content": "<p style=\"text-align:start;\"><span style=\"color: rgb(109,109,109);font-size: 18px;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">React is, in our opinion, the premier way to build big, fast Web apps with JavaScript. It has scaled very well for us at Facebook and Instagram.</span></p>\n<p style=\"text-align:start;\"><span style=\"color: rgb(0,0,0);font-size: 17px;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">One of the many great parts of React is how it makes you think about apps as you build them. In this document, we’ll walk you through the thought process of building a searchable product data table using React.</span></p>\n<h2 style=\"text-align:start;\"><span style=\"color: rgb(0,0,0);font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">Start With A Mock</span></h2>\n<p style=\"text-align:start;\"><span style=\"color: rgb(0,0,0);font-size: 17px;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">Imagine that we already have a JSON API and a mock from our designer. The mock looks like this:</span></p>\n<p style=\"text-align:start;\"></p>\n<img src=\"https://reactjs.org/static/1071fbcc9eed01fddc115b41e193ec11/d4770/thinking-in-react-mock.png\" alt=\"Mockup\" style=\"height: 276.854px;width: 228px\"/>\n<p style=\"text-align:start;\"><span style=\"color: rgb(0,0,0);font-size: 17px;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">Our JSON API returns some data that looks like this:</span></p>\n<p style=\"margin-left:0px;\"><br> <span style=\"font-size: 17px;\">The first thing you’ll want to do is to draw boxes around every component (and subcomponent) in the mock and give them all names. If you’re working with a designer, they may have already done this, so go talk to them! Their Photoshop layer names may end up being the names of your React components!</span></p>\n<p style=\"margin-left:0px;\"><span style=\"font-size: 17px;\">But how do you know what should be its own component? Use the same techniques for deciding if you should create a new function or object. One such technique is the</span> <a href=\"https://en.wikipedia.org/wiki/Single_responsibility_principle\" target=\"_blank\"><span style=\"color: rgb(26,26,26);background-color: rgba(187,239,253,0.3);font-size: 17px;\">single responsibility principle</span></a><span style=\"font-size: 17px;\">, that is, a component should ideally only do one thing. If it ends up growing, it should be decomposed into smaller subcomponents.</span></p>\n<p style=\"margin-left:0px;\"><span style=\"font-size: 17px;\">Since you’re often displaying a JSON data model to a user, you’ll find that if your model was built correctly, your UI (and therefore your component structure) will map nicely. That’s because UI and data models tend to adhere to the same</span> <span style=\"font-size: 17px;\"><em>information architecture</em>. Separate your UI into components, where each component matches one piece of your data model.</span></p>\n<p style=\"margin-left:0px;\"></p>\n<img src=\"https://reactjs.org/static/eb8bda25806a89ebdc838813bdfa3601/6b2ea/thinking-in-react-components.png\" alt=\"Component diagram\" style=\"height: 319.521px;width: 275px\"/>\n<p style=\"margin-left:0px;\"><span style=\"font-size: 17px;\">You’ll see here that we have five components in our app. We’ve italicized the data each component represents.</span></p>\n<ol>\n<li style=\"margin-left:0px;\"><span style=\"color: rgb(26,26,26);font-size: 16px;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\"><code><strong>FilterableProductTable</strong></code></span> <span style=\"color: rgb(26,26,26);font-size: 16px;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\"><strong>(orange):</strong></span> <span style=\"color: rgb(26,26,26);font-size: 16px;font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\">contains the entirety of the example</span><br>&nbsp;</li>\n</ol>\n",
//         "region": "全球",
//         "author": "admin",
//         "roleId": 1,
//         "auditState": 2,
//         "publishState": 2,
//         "createTime": 1615778891518,
//         "star": 781,
//         "view": 891,
//         "id": 8,
//         "publishTime": 1615778917615
//       },
//       {
//         "title": "测试",
//         "categoryId": 3,
//         "content": "<p>测试</p>\n",
//         "region": "",
//         "author": "admin",
//         "roleId": 1,
//         "auditState": 2,
//         "publishState": 3,
//         "createTime": 1616203436307,
//         "star": 1,
//         "view": 6,
//         "id": 9,
//         "publishTime": 1616203519274
//       },
//       {
//         "id": 10
//       },
//       {
//         "id": 11
//       },
//       {
//         "id": 12
//       },
//       {
//         "id": 13
//       },
//       {
//         "title": "我是admin的新闻俄乌战争",
//         "categoryId": 4,
//         "content": "<p style=\"text-align:justify;\"><span style=\"color: rgb(64,64,64);background-color: rgb(97,189,109);font-size: medium;font-family: Microsoft Yahei;\">看看新闻Knews消息，据乌克兰媒体Ukrinform当地时间周日(5月15日)报道，乌克兰马里乌波尔官员称，俄罗斯在亚速钢铁厂投放了燃烧弹或磷弹。不过此消息尚未得到俄方证实。</span></p>\n<p><span style=\"color: rgb(64,64,64);background-color: rgb(97,189,109);font-size: medium;font-family: Microsoft Yahei;\">乌克兰官员声称：“昨天，俄军首次使用燃烧弹或磷弹，俄军自己声称使用了带有铝热剂的9M22C燃烧弹。燃烧温度约为2000到2500摄氏度，几乎不可能被熄灭。”</span></p>\n<p style=\"text-align:justify;\"><span style=\"color: rgb(64,64,64);background-color: rgb(97,189,109);font-size: medium;font-family: Microsoft Yahei;\">亚速钢铁厂的战斗目前仍在持续，现场袭击爆炸声不断。据俄军士兵称，他们希望在未来一到两周内拿到完全控制权。目前，俄罗斯空军正在持续对亚速钢铁厂进行轰炸。</span><span style=\"background-color: rgb(97,189,109);\"> </span></p>\n",
//         "region": "全球",
//         "author": "admin",
//         "roleId": 1,
//         "auditState": 3,
//         "publishState": 0,
//         "createTime": 1652768121161,
//         "star": 0,
//         "view": 0,
//         "id": 14
//       },
//       {
//         "title": "燃烧温度2500℃！亚速钢铁厂久攻不下 乌方称俄空军投放磷弹",
//         "categoryId": 4,
//         "content": "<p style=\"text-align:justify;\"><span style=\"color: rgb(64,64,64);background-color: rgb(255,255,255);font-size: medium;font-family: Microsoft Yahei;\">看看新闻Knews消息，据乌克兰媒体Ukrinform当地时间周日(5月15日)报道，乌克兰马里乌波尔官员称，俄罗斯在亚速钢铁厂投放了燃烧弹或磷弹。不过此消息尚未得到俄方证实。</span></p>\n<p><span style=\"color: rgb(64,64,64);background-color: rgb(255,255,255);font-size: medium;font-family: Microsoft Yahei;\">乌克兰官员声称：“昨天，俄军首次使用燃烧弹或磷弹，俄军自己声称使用了带有铝热剂的9M22C燃烧弹。燃烧温度约为2000到2500摄氏度，几乎不可能被熄灭。”</span></p>\n<p style=\"text-align:justify;\"><span style=\"color: rgb(64,64,64);background-color: rgb(255,255,255);font-size: medium;font-family: Microsoft Yahei;\">亚速钢铁厂的战斗目前仍在持续，现场袭击爆炸声不断。据俄军士兵称，他们希望在未来一到两周内拿到完全控制权。目前，俄罗斯空军正在持续对亚速钢铁厂进行轰炸。</span>&nbsp;</p>\n",
//         "region": "全球",
//         "author": "admin",
//         "roleId": 1,
//         "auditState": 1,
//         "publishState": 0,
//         "createTime": 1652768121163,
//         "star": 0,
//         "view": 0,
//         "id": 15
//       },
//       {
//         "title": "燃烧温度2500℃！亚速钢铁厂久攻不下 乌方称俄空军投放磷弹",
//         "categoryId": 4,
//         "content": "<p style=\"text-align:justify;\"><span style=\"color: rgb(64,64,64);background-color: rgb(255,255,255);font-size: medium;font-family: Microsoft Yahei;\">看看新闻Knews消息，据乌克兰媒体Ukrinform当地时间周日(5月15日)报道，乌克兰马里乌波尔官员称，俄罗斯在亚速钢铁厂投放了燃烧弹或磷弹。不过此消息尚未得到俄方证实。</span></p>\n<p><span style=\"color: rgb(64,64,64);background-color: rgb(255,255,255);font-size: medium;font-family: Microsoft Yahei;\">乌克兰官员声称：“昨天，俄军首次使用燃烧弹或磷弹，俄军自己声称使用了带有铝热剂的9M22C燃烧弹。燃烧温度约为2000到2500摄氏度，几乎不可能被熄灭。”</span></p>\n<p style=\"text-align:justify;\"><span style=\"color: rgb(64,64,64);background-color: rgb(255,255,255);font-size: medium;font-family: Microsoft Yahei;\">亚速钢铁厂的战斗目前仍在持续，现场袭击爆炸声不断。据俄军士兵称，他们希望在未来一到两周内拿到完全控制权。目前，俄罗斯空军正在持续对亚速钢铁厂进行轰炸。</span>&nbsp;</p>\n",
//         "region": "全球",
//         "author": "admin",
//         "roleId": 1,
//         "auditState": 0,
//         "publishState": 0,
//         "createTime": 1652768197875,
//         "star": 0,
//         "view": 0,
//         "id": 17
//       },
//       {
//         "title": "燃烧温度2500℃！亚速钢铁厂久攻不下 乌方称俄空军投放磷弹",
//         "categoryId": 4,
//         "content": "<p style=\"text-align:justify;\"><span style=\"color: rgb(64,64,64);background-color: rgb(255,255,255);font-size: medium;font-family: Microsoft Yahei;\">看看新闻Knews消息，据乌克兰媒体Ukrinform当地时间周日(5月15日)报道，乌克兰马里乌波尔官员称，俄罗斯在亚速钢铁厂投放了燃烧弹或磷弹。不过此消息尚未得到俄方证实。</span></p>\n<p><span style=\"color: rgb(64,64,64);background-color: rgb(255,255,255);font-size: medium;font-family: Microsoft Yahei;\">乌克兰官员声称：“昨天，俄军首次使用燃烧弹或磷弹，俄军自己声称使用了带有铝热剂的9M22C燃烧弹。燃烧温度约为2000到2500摄氏度，几乎不可能被熄灭。”</span></p>\n<p style=\"text-align:justify;\"><span style=\"color: rgb(64,64,64);background-color: rgb(255,255,255);font-size: medium;font-family: Microsoft Yahei;\">亚速钢铁厂的战斗目前仍在持续，现场袭击爆炸声不断。据俄军士兵称，他们希望在未来一到两周内拿到完全控制权。目前，俄罗斯空军正在持续对亚速钢铁厂进行轰炸。</span>&nbsp;</p>\n",
//         "region": "全球",
//         "author": "admin",
//         "roleId": 1,
//         "auditState": 0,
//         "publishState": 0,
//         "createTime": 1652768198197,
//         "star": 0,
//         "view": 0,
//         "id": 18
//       },
//       {
//         "title": "燃烧温度2500℃！亚速钢铁厂久攻不下 乌方称俄空军投放磷弹",
//         "categoryId": 4,
//         "content": "<p style=\"text-align:justify;\"><span style=\"color: rgb(64,64,64);background-color: rgb(255,255,255);font-size: medium;font-family: Microsoft Yahei;\">看看新闻Knews消息，据乌克兰媒体Ukrinform当地时间周日(5月15日)报道，乌克兰马里乌波尔官员称，俄罗斯在亚速钢铁厂投放了燃烧弹或磷弹。不过此消息尚未得到俄方证实。</span></p>\n<p><span style=\"color: rgb(64,64,64);background-color: rgb(255,255,255);font-size: medium;font-family: Microsoft Yahei;\">乌克兰官员声称：“昨天，俄军首次使用燃烧弹或磷弹，俄军自己声称使用了带有铝热剂的9M22C燃烧弹。燃烧温度约为2000到2500摄氏度，几乎不可能被熄灭。”</span></p>\n<p style=\"text-align:justify;\"><span style=\"color: rgb(64,64,64);background-color: rgb(255,255,255);font-size: medium;font-family: Microsoft Yahei;\">亚速钢铁厂的战斗目前仍在持续，现场袭击爆炸声不断。据俄军士兵称，他们希望在未来一到两周内拿到完全控制权。目前，俄罗斯空军正在持续对亚速钢铁厂进行轰炸。</span>&nbsp;</p>\n",
//         "region": "全球",
//         "author": "admin",
//         "roleId": 1,
//         "auditState": 0,
//         "publishState": 0,
//         "createTime": 1652768200175,
//         "star": 0,
//         "view": 0,
//         "id": 21
//       },
//       {
//         "title": "燃烧温度2500℃！亚速钢铁厂久攻不下 乌方称俄空军投放磷弹",
//         "categoryId": 4,
//         "content": "<p style=\"text-align:justify;\"><span style=\"color: rgb(64,64,64);background-color: rgb(255,255,255);font-size: medium;font-family: Microsoft Yahei;\">看看新闻Knews消息，据乌克兰媒体Ukrinform当地时间周日(5月15日)报道，乌克兰马里乌波尔官员称，俄罗斯在亚速钢铁厂投放了燃烧弹或磷弹。不过此消息尚未得到俄方证实。</span></p>\n<p><span style=\"color: rgb(64,64,64);background-color: rgb(255,255,255);font-size: medium;font-family: Microsoft Yahei;\">乌克兰官员声称：“昨天，俄军首次使用燃烧弹或磷弹，俄军自己声称使用了带有铝热剂的9M22C燃烧弹。燃烧温度约为2000到2500摄氏度，几乎不可能被熄灭。”</span></p>\n<p style=\"text-align:justify;\"><span style=\"color: rgb(64,64,64);background-color: rgb(255,255,255);font-size: medium;font-family: Microsoft Yahei;\">亚速钢铁厂的战斗目前仍在持续，现场袭击爆炸声不断。据俄军士兵称，他们希望在未来一到两周内拿到完全控制权。目前，俄罗斯空军正在持续对亚速钢铁厂进行轰炸。</span>&nbsp;</p>\n",
//         "region": "全球",
//         "author": "admin",
//         "roleId": 1,
//         "auditState": 0,
//         "publishState": 0,
//         "createTime": 1652768200526,
//         "star": 0,
//         "view": 0,
//         "id": 23
//       },
//       {
//         "title": "燃烧温度2500℃",
//         "categoryId": 1,
//         "content": "<p style=\"text-align:justify;\"><span style=\"color: rgb(64,64,64);background-color: rgb(255,255,255);font-size: medium;font-family: Microsoft Yahei;\">看看新闻Knews消息，据乌克兰媒体Ukrinform当地时间周日(5月15日)报道，乌克兰马里乌波尔官员称，俄罗斯在亚速钢铁厂投放了燃烧弹或磷弹。不过此消息尚未得到俄方证实。</span></p>\n<p><span style=\"color: rgb(64,64,64);background-color: rgb(255,255,255);font-size: medium;font-family: Microsoft Yahei;\">乌克兰官员声称：“昨天，俄军首次使用燃烧弹或磷弹，俄军自己声称使用了带有铝热剂的9M22C燃烧弹。燃烧温度约为2000到2500摄氏度，几乎不可能被熄灭。”</span></p>\n<p style=\"text-align:justify;\"><span style=\"color: rgb(64,64,64);background-color: rgb(255,255,255);font-size: medium;font-family: Microsoft Yahei;\">亚速钢铁厂的战斗目前仍在持续，现场袭击爆炸声不断。据俄军士兵称，他们希望在未来一到两周内拿到完全控制权。目前，俄罗斯空军正在持续对亚速钢铁厂进行轰炸。</span>&nbsp;</p>\n",
//         "region": "全球",
//         "author": "admin",
//         "roleId": 1,
//         "auditState": 0,
//         "publishState": 0,
//         "createTime": 1652768232391,
//         "star": 0,
//         "view": 0,
//         "id": 24
//       },
//       {
//         "title": "admin的燃烧温度2500℃",
//         "categoryId": 1,
//         "content": "<p style=\"text-align:justify;\"><span style=\"color: rgb(64,64,64);background-color: rgb(255,255,255);font-size: medium;font-family: Microsoft Yahei;\">看看新闻Knews消息，据乌克兰媒体Ukrinform当地时间周日(5月15日)报道，乌克兰马里乌波尔官员称，俄罗斯在亚速钢铁厂投放了燃烧弹或磷弹。不过此消息尚未得到俄方证实。</span></p>\n<p><span style=\"color: rgb(64,64,64);background-color: rgb(255,255,255);font-size: medium;font-family: Microsoft Yahei;\">乌克兰官员声称：“昨天，俄军首次使用燃烧弹或磷弹，俄军自己声称使用了带有铝热剂的9M22C燃烧弹。燃烧温度约为2000到2500摄氏度，几乎不可能被熄灭。”</span></p>\n<p style=\"text-align:justify;\"><span style=\"color: rgb(64,64,64);background-color: rgb(255,255,255);font-size: medium;font-family: Microsoft Yahei;\">亚速钢铁厂的战斗目前仍在持续，现场袭击爆炸声不断。据俄军士兵称，他们希望在未来一到两周内拿到完全控制权。目前，俄罗斯空军正在持续对亚速钢铁厂进行轰炸。</span>&nbsp;</p>\n",
//         "region": "全球",
//         "author": "admin",
//         "roleId": 1,
//         "auditState": 2,
//         "publishState": 2,
//         "createTime": 1652768232392,
//         "star": 0,
//         "view": 8,
//         "id": 25
//       },
//       {
//         "title": "关注乌克兰局势",
//         "categoryId": 1,
//         "content": "<p><span style=\"color: rgb(34,34,34);background-color: rgb(246,246,246);font-size: 18px;font-family: SourceHanSansCN-Regular;\">俄罗斯总统普京2月21日晚签署命令，承认乌克兰东部的“顿涅茨克人民共和国”和“卢甘斯克人民共和国”。乌克兰总统泽连斯基说，俄罗斯的决定是在侵犯乌克兰的主权和领土完整。国际社会对俄乌局势深表关切。</span>&nbsp;</p>\n",
//         "region": "全球",
//         "author": "admin",
//         "roleId": 1,
//         "auditState": 3,
//         "publishState": 0,
//         "createTime": 1652769015597,
//         "star": 0,
//         "view": 0,
//         "id": 26
//       },
//       {
//         "title": "俄打击持续 乌称东部反攻有进展",
//         "categoryId": 1,
//         "content": "<p style=\"text-align:start;\"></p>\n<p style=\"margin-left:0px;\"><span style=\"color: rgb(51,51,51);background-color: rgb(255,255,255);font-size: 16px;font-family: arial;\">15日，顿涅茨克一武装指挥官在社交媒体“电报”的账号上发布一段视频，画面中，俄军和顿涅茨克地方武装使用9M22S引燃式火箭弹打击位于马里乌波尔的亚速钢铁厂——据称每枚火箭弹可装载180枚使用六角形镁合金外壳、填充燃烧剂的弹头。</span></p>\n<p style=\"margin-left:0px;\"><span style=\"color: rgb(51,51,51);background-color: rgb(255,255,255);font-size: 16px;font-family: arial;\">除了顿涅茨克和卢甘斯克的主攻方向，距离俄乌边境较近的哈尔科夫地区的战斗也愈演愈烈。乌克兰方面称，乌俄继续在哈尔科夫州要地伊久姆周边交战，乌军在15日击退了俄方17次进攻。</span></p>\n<p style=\"margin-left:0px;\"><span style=\"color: rgb(51,51,51);background-color: rgb(255,255,255);font-size: 16px;font-family: arial;\">乌方还发布了据称是乌军推进至乌俄边境的视频。视频没有说明具体地点，但有报道暗示视频拍摄于哈尔科夫地区。</span></p>\n<h2 style=\"margin-left:0px;\"><span style=\"color: rgb(51,51,51);background-color: rgb(255,255,255);font-size: 16px;font-family: arial;\">俄罗斯库尔斯克州州长：美国一直在有目的的训练乌克兰武装部队</span></h2>\n<p style=\"margin-left:0px;\"><span style=\"color: rgb(51,51,51);background-color: rgb(255,255,255);font-size: 16px;font-family: arial;\">当地时间5月16日，俄罗斯库尔斯克州州长斯塔罗沃伊特表示，乌克兰军队想夺取的除顿涅茨克外还有俄罗斯的领土，这其中就包括库尔斯克州。</span></p>\n<p style=\"margin-left:0px;\"><span style=\"color: rgb(51,51,51);background-color: rgb(255,255,255);font-size: 16px;font-family: arial;\">斯塔罗沃伊特表示，俄军在进行特别军事行动期间缴获了一些来自美国的文件，文件显示美国一直在有目的的训练乌克兰武装部队，试图让他们打压敌对势力并占领新的领土。</span></p>\n<p style=\"margin-left:0px;\"><span style=\"color: rgb(51,51,51);background-color: rgb(255,255,255);font-size: 16px;font-family: arial;\">乌方对其此番言论目前尚无回应。</span></p>\n<h2 style=\"margin-left:0px;\"><span style=\"color: rgb(51,51,51);background-color: rgb(255,255,255);font-size: 16px;font-family: arial;\">俄国防部：乌特种部队引爆了一枚伴有1吨硝酸铵的炸弹</span></h2>\n<p style=\"margin-left:0px;\"><span style=\"color: rgb(51,51,51);background-color: rgb(255,255,255);font-size: 16px;font-family: arial;\">俄罗斯国防部16日发表声明称，当天13时35分，<strong>乌克兰特种部队在顿涅茨克西北部的马扎诺夫卡附近引爆了一枚伴有1吨硝酸铵的炸弹。</strong>爆炸产生了约1000米高的有毒烟柱，并向克拉马托尔斯克方向移动。</span></p>\n<p style=\"margin-left:0px;\"><span style=\"color: rgb(51,51,51);background-color: rgb(255,255,255);font-size: 16px;font-family: arial;\">目前，乌方尚未对此作出回应。</span>&nbsp;</p>\n",
//         "region": "全球",
//         "author": "admin",
//         "roleId": 1,
//         "auditState": 3,
//         "publishState": 0,
//         "createTime": 1652769428443,
//         "star": 0,
//         "view": 0,
//         "id": 27
//       },
//       {
//         "title": "俄乌局势最新进展 ",
//         "categoryId": 1,
//         "content": "<p><span style=\"color: rgb(25,25,25);background-color: rgb(255,255,255);font-size: 16px;font-family: PingFang SC;\"><strong>【俄乌局势最新进展】</strong>财联社5月16日电，截至北京时间5月16日7:00，俄乌局势最近情况汇总如下： ①芬兰总统尼尼斯托和芬兰总理马林就芬兰安全政策决定举行联合新闻发布会，他们在新闻发布会上表示，芬兰总统和政府外交与安全政策部长级委员会批准芬兰加入北约的申请。 ②土耳其阿纳多卢通讯社15日报道称，芬兰总统尼尼斯托表示愿意就加入北约一事与土耳其总统埃尔多安举行会谈。 ③北约秘书长斯托尔滕贝格表示，所有成员国都认同北约的门户开放，所有盟国都同意瑞典和芬兰的加入，将会尽可能加快瑞典和芬兰的申请审批。 ④俄罗斯联邦委员会国防和安全委员会主席邦达列夫表示，如果芬兰加入北约后在邻近俄罗斯的地区部署北约进攻性武器，俄罗斯将加强边防，增加俄罗斯在边境地区的部队。 ⑤据乌克兰总统办公室发布的消息，当地时间5月14日，乌克兰总统泽连斯基在基辅会见了到访的美国国会参议院少数党领袖、共和党人米奇·麦康奈尔率领的美参议院代表团。 ⑥美国参议院少数党领袖麦康奈尔表示，预计周一进行程序性投票、周三就400亿美元乌克兰援助法案进行正式投票。 ⑦美驻乌使馆表示，美国军援乌克兰几乎所有榴弹炮已部署到位。 ⑧据CGTN 5月15日报道，位于乌克兰马里乌波尔的亚速钢铁厂目前战斗仍在持续，现场袭击爆炸声不断。</span><span style=\"color: rgb(226,80,65);background-color: rgb(255,255,255);font-size: 16px;font-family: PingFang SC;\">报道援引几位不愿意露面的俄军士兵称，他们希望在未来一到两周内拿到完全控制权。</span><span style=\"color: rgb(226,80,65);\"> </span></p>\n",
//         "region": "全球",
//         "author": "admin",
//         "roleId": 1,
//         "auditState": 0,
//         "publishState": 0,
//         "createTime": 1652784155832,
//         "star": 0,
//         "view": 0,
//         "id": 28
//       },
//       {
//         "title": "我是钢蛋的新闻",
//         "categoryId": 6,
//         "content": "<p>俺的沙发斯蒂芬sad阿斯顿发</p>\n",
//         "region": "南极洲",
//         "author": "钢蛋",
//         "roleId": 2,
//         "auditState": 2,
//         "publishState": 2,
//         "createTime": 1652847607633,
//         "star": 1,
//         "view": 1,
//         "id": 29,
//         "publishTime": 1653298614546
//       },
//       {
//         "title": "我是西门吹雪",
//         "categoryId": 4,
//         "content": "<p>爱的发声打发阿达阿道夫阿道夫</p>\n",
//         "region": "南极洲",
//         "author": "西门吹灯",
//         "roleId": 3,
//         "auditState": 2,
//         "publishState": 1,
//         "createTime": 1652854557835,
//         "star": 0,
//         "view": 0,
//         "id": 30
//       },
//       {
//         "title": "西门吹雪324234",
//         "categoryId": 5,
//         "content": "<p>&nbsp;打发第三方阿斯顿发送到发斯蒂芬</p>\n",
//         "region": "南极洲",
//         "author": "西门吹灯",
//         "roleId": 3,
//         "auditState": 2,
//         "publishState": 1,
//         "createTime": 1652856473599,
//         "star": 0,
//         "view": 0,
//         "id": 31
//       },
//       {
//         "title": "吃屎吧",
//         "categoryId": 4,
//         "content": "<p>撒打发斯蒂芬</p>\n",
//         "region": "全球",
//         "author": "admin",
//         "roleId": 1,
//         "auditState": 2,
//         "publishState": 3,
//         "createTime": 1653037788297,
//         "star": 0,
//         "view": 0,
//         "id": 32,
//         "publishTime": 1653037864427
//       },
//       {
//         "title": "测试点赞",
//         "categoryId": 6,
//         "content": "<p>11111111111111111111111111111发斯蒂芬 阿道夫啊11111</p>\n",
//         "region": "南极洲",
//         "author": "钢蛋",
//         "roleId": 2,
//         "auditState": 2,
//         "publishState": 2,
//         "createTime": 1653297787338,
//         "star": 1,
//         "view": 29,
//         "id": 33,
//         "publishTime": 1653297810329
//       },
//       {
//         "title": "燃烧温度2500℃",
//         "categoryId": 2,
//         "content": "<p>&nbsp;&nbsp;&nbsp;&nbsp;手动阀手动阀手动阀是否是发送到发手动阀手打手动阀 手动阀 闪电法师手动阀是否</p>\n",
//         "region": "南极洲",
//         "author": "钢蛋",
//         "roleId": 2,
//         "auditState": 2,
//         "publishState": 2,
//         "createTime": 1653300186575,
//         "star": 1,
//         "view": 1,
//         "id": 34,
//         "publishTime": 1653300212545
//       },
//       {
//         "title": "朝鲜人民军元帅玄哲海国葬出殡，金正恩为其扶柩并填土安葬",
//         "categoryId": 1,
//         "content": "<p><span style=\"color: rgb(51,51,51);background-color: rgb(255,255,255);font-size: 16px;font-family: arial;\">朝鲜人民军总政治局局长金秀吉陆军大将致悼词。金秀吉说，金永春同志的生平是在金日成同志、金正日同志和金正恩同志的亲切关爱和格外照顾下，过最有价值生活的革命家的光荣一生；是在保卫领袖、保卫革命、保卫祖国的第一战线，以透彻的革命信念忠心拥护党的思想和领导的著名政治活动家、优秀军事家的光辉一生。金永春元帅同志虽然逝世了，但他的功勋在祖国青史上永垂不朽。</span>&nbsp;</p>\n<img src=\"https://t10.baidu.com/it/u=1454718585,468941565&fm=175&app=25&f=JPEG?w=640&h=420&s=8AD86580EECB28CC30BCA496030050C2\" alt=\"undefined\" style=\"height: auto;width: auto\"/>\n<p></p>\n<p><span style=\"color: rgb(51,51,51);background-color: rgb(255,255,255);font-size: 16px;font-family: arial;\">金永春曾是金正日葬礼的“扶灵七元老”之一，他因急性心肌梗塞于16日逝世，享年82岁。</span> <span style=\"color: rgb(51,51,51);background-color: rgb(255,255,255);font-size: 16px;font-family: arial;\">根据报道，出殡仪式在朝鲜四·二五文化会馆吊唁场所举行，国家治丧委员会成员参加出殡仪式。</span>&nbsp;</p>\n<img src=\"https://t11.baidu.com/it/u=293821624,3738796633&fm=175&app=25&f=JPEG?w=640&h=426&s=141876915E72379C43A9880C0300F0C2\" alt=\"undefined\" style=\"height: auto;width: auto\"/>\n<p></p>\n<p><span style=\"color: rgb(51,51,51);background-color: rgb(255,255,255);font-size: 16px;font-family: arial;\">朝中社公布的金永春简历显示，金永春1936年生于朝鲜两江道，毕业于金日成军事综合大学，历任朝鲜人民军各级部队指挥员。曾任朝鲜人民军总参谋长、国防委员会副委员长、人民武力部长、劳动党中央部长。金永春于2014年4月起任人民武力省总顾问，2016年4月被授予朝鲜人民军元帅称号。</span>&nbsp;</p>\n<img src=\"https://t11.baidu.com/it/u=3710451325,2133453291&fm=175&app=25&f=JPEG?w=640&h=422&s=8AB24E815E935AC8008974740300C030\" alt=\"undefined\" style=\"height: auto;width: auto\"/>\n<p><span style=\"color: rgb(51,51,51);background-color: rgb(255,255,255);font-size: 16px;font-family: arial;\">8月21日消息，据朝中社21日报道，朝鲜劳动党中央委员、最高人民会议议员、人民武力省总顾问、人民军元帅金永春的国葬20日在平壤隆重举行。朝鲜最高领导人金正恩出席告别仪式。画面显示，金正恩与其他人员一道，在雨中默哀悼念金永春，气氛肃穆。</span>&nbsp;</p>\n<p></p>\n<img src=\"https://t11.baidu.com/it/u=2843165191,2377348319&fm=175&app=25&f=JPEG?w=640&h=422&s=13B4568158D2C4CE0A9CD0920300A0D0\" alt=\"undefined\" style=\"height: auto;width: auto\"/>\n<p></p>\n<p></p>\n<p></p>\n<p></p>\n",
//         "region": "全球",
//         "author": "坚强的大爷",
//         "roleId": 1,
//         "auditState": 2,
//         "publishState": 2,
//         "createTime": 1653301580790,
//         "star": 1,
//         "view": 13,
//         "id": 35,
//         "publishTime": 1653301676389
//       },
//       {
//         "title": "世卫发布猴痘疫情暴发预警",
//         "categoryId": 1,
//         "content": "<p style=\"text-align:justify;\"><span style=\"color: rgb(64,64,64);font-size: 18px;font-family: Arial, \"Hiragino Sans GB\", STHeiti, \"Helvetica Neue\", Helvetica, \"Microsoft Yahei\", \"WenQuanYi Micro Hei\", sans-serif;\">券商中国 罗晓霞/整理</span></p>\n<p style=\"text-align:justify;\"><span style=\"color: rgb(64,64,64);font-size: 18px;font-family: Arial, \"Hiragino Sans GB\", STHeiti, \"Helvetica Neue\", Helvetica, \"Microsoft Yahei\", \"WenQuanYi Micro Hei\", sans-serif;\">新增174+628</span></p>\n<p style=\"text-align:justify;\"><span style=\"color: rgb(64,64,64);font-size: 18px;font-family: Arial, \"Hiragino Sans GB\", STHeiti, \"Helvetica Neue\", Helvetica, \"Microsoft Yahei\", \"WenQuanYi Micro Hei\", sans-serif;\">5月22日0—24时，31个省（自治区、直辖市）和新疆生产建设兵团报告新增确诊病例187例。其中境外输入病例13例（福建8例，四川3例，上海1例，广东1例）；本土病例174例——北京83例，上海55例，天津32例，四川2例，辽宁1例，福建1例。</span></p>\n<p style=\"text-align:justify;\"><span style=\"color: rgb(64,64,64);font-size: 18px;font-family: Arial, \"Hiragino Sans GB\", STHeiti, \"Helvetica Neue\", Helvetica, \"Microsoft Yahei\", \"WenQuanYi Micro Hei\", sans-serif;\">其中，含56例由无症状感染者转为确诊病例（上海30例，天津20例，北京3例，四川2例，辽宁1例）。</span></p>\n<p style=\"text-align:justify;\"><span style=\"color: rgb(64,64,64);font-size: 18px;font-family: Arial, \"Hiragino Sans GB\", STHeiti, \"Helvetica Neue\", Helvetica, \"Microsoft Yahei\", \"WenQuanYi Micro Hei\", sans-serif;\">新增死亡病例1例，为本土病例，在上海；无新增疑似病例。</span></p>\n<p style=\"text-align:justify;\"><span style=\"color: rgb(64,64,64);font-size: 18px;font-family: Arial, \"Hiragino Sans GB\", STHeiti, \"Helvetica Neue\", Helvetica, \"Microsoft Yahei\", \"WenQuanYi Micro Hei\", sans-serif;\">当日新增治愈出院病例316例，其中境外输入病例14例，本土病例302例（上海235例，北京41例，吉林11例，青海5例，广东4例，河南3例，辽宁1例，浙江1例，四川1例），解除医学观察的密切接触者29039人，重症病例较前一日减少7例。</span></p>\n<p style=\"text-align:justify;\"><span style=\"color: rgb(64,64,64);font-size: 18px;font-family: Arial, \"Hiragino Sans GB\", STHeiti, \"Helvetica Neue\", Helvetica, \"Microsoft Yahei\", \"WenQuanYi Micro Hei\", sans-serif;\">境外输入现有确诊病例199例（其中重症病例1例），无现有疑似病例。累计确诊病例18506例，累计治愈出院病例18307例，无死亡病例。</span></p>\n<p style=\"text-align:justify;\"><span style=\"color: rgb(64,64,64);font-size: 18px;font-family: Arial, \"Hiragino Sans GB\", STHeiti, \"Helvetica Neue\", Helvetica, \"Microsoft Yahei\", \"WenQuanYi Micro Hei\", sans-serif;\">截至5月22日24时，据31个省（自治区、直辖市）和新疆生产建设兵团报告，现有确诊病例4275例（其中重症病例193例），累计治愈出院病例213834例，累计死亡病例5223例，累计报告确诊病例223332例，无现有疑似病例。累计追踪到密切接触者4005381人，尚在医学观察的密切接触者244400人。</span></p>\n<p style=\"text-align:justify;\"><span style=\"color: rgb(64,64,64);font-size: 18px;font-family: Arial, \"Hiragino Sans GB\", STHeiti, \"Helvetica Neue\", Helvetica, \"Microsoft Yahei\", \"WenQuanYi Micro Hei\", sans-serif;\">31个省（自治区、直辖市）和新疆生产建设兵团报告新增无症状感染者682例，其中境外输入54例，本土628例——上海503例，河南53例，四川29例，北京16例，天津15例，吉林5例，安徽3例，江西2例，浙江1例，广东1例。</span></p>\n<p style=\"text-align:justify;\"><span style=\"color: rgb(64,64,64);font-size: 18px;font-family: Arial, \"Hiragino Sans GB\", STHeiti, \"Helvetica Neue\", Helvetica, \"Microsoft Yahei\", \"WenQuanYi Micro Hei\", sans-serif;\">当日解除医学观察的无症状感染者3045例，其中境外输入43例，本土3002例（上海2784例，辽宁52例，江苏45例，江西24例，河南23例，吉林16例，山东15例，浙江11例，青海11例，河北6例，四川4例，广东3例，广西3例，北京1例，天津1例，安徽1例，湖北1例，贵州1例）；当日转为确诊病例56例（无境外输入）；尚在医学观察的无症状感染者35217例（境外输入454例）。</span></p>\n<p style=\"text-align:justify;\"><span style=\"color: rgb(64,64,64);font-size: 18px;font-family: Arial, \"Hiragino Sans GB\", STHeiti, \"Helvetica Neue\", Helvetica, \"Microsoft Yahei\", \"WenQuanYi Micro Hei\", sans-serif;\">累计收到港澳台地区通报确诊病例1652447例。其中，香港特别行政区331994例（出院61899例，死亡9370例），澳门特别行政区82例（出院82例），台湾地区1320371例（出院13742例，死亡1396例）。</span></p>\n<p style=\"text-align:justify;\"><span style=\"color: rgb(64,64,64);font-size: 18px;font-family: Arial, \"Hiragino Sans GB\", STHeiti, \"Helvetica Neue\", Helvetica, \"Microsoft Yahei\", \"WenQuanYi Micro Hei\", sans-serif;\">天津新增本土32+15，9区今日核酸检测</span></p>\n<p style=\"text-align:justify;\"><span style=\"color: rgb(64,64,64);font-size: 18px;font-family: Arial, \"Hiragino Sans GB\", STHeiti, \"Helvetica Neue\", Helvetica, \"Microsoft Yahei\", \"WenQuanYi Micro Hei\", sans-serif;\">2022年5月22日0—24时，天津市新增32例本土新冠肺炎确诊病例（其中20例为无症状感染者转为确诊病例）。无新增境外输入新冠肺炎确诊病例。新增15例本土无症状感染者，新增5例境外输入无症状感染者。</span></p>\n<p style=\"text-align:justify;\"><span style=\"color: rgb(64,64,64);font-size: 18px;font-family: Arial, \"Hiragino Sans GB\", STHeiti, \"Helvetica Neue\", Helvetica, \"Microsoft Yahei\", \"WenQuanYi Micro Hei\", sans-serif;\">自2022年2月24日至5月22日，天津市累计报告本土新冠肺炎确诊病例728例，在院112人，治愈出院616人。累计报告本土无症状感染者484例，解除医学观察254人，尚在医学观察104例，转为确诊病例126例。</span></p>\n<p style=\"text-align:justify;\"><br></p>\n<h5 style=\"text-align:left;\"><span style=\"color: rgb(51,51,51);font-size: 22px;font-family: Arial, \"Hiragino Sans GB\", STHeiti, \"Helvetica Neue\", Helvetica, \"Microsoft Yahei\", \"WenQuanYi Micro Hei\", sans-serif;\">另据“津云”微信公众号消息，5月23日，天津市内六区、武清区开展核酸检测，北辰区、宁河区部分区域开展核酸检测。</span><br></h5>\n<p style=\"text-align:justify;\"></p>\n<p style=\"text-align:justify;\"><span style=\"color: rgb(64,64,64);font-size: 18px;font-family: Arial, \"Hiragino Sans GB\", STHeiti, \"Helvetica Neue\", Helvetica, \"Microsoft Yahei\", \"WenQuanYi Micro Hei\", sans-serif;\">北京2人伪造护士证参与核酸采样工作，被警方抓获</span></p>\n<p style=\"text-align:justify;\"><span style=\"color: rgb(64,64,64);font-size: 18px;font-family: Arial, \"Hiragino Sans GB\", STHeiti, \"Helvetica Neue\", Helvetica, \"Microsoft Yahei\", \"WenQuanYi Micro Hei\", sans-serif;\">近日，昌平警方接一核酸检测机构报警称：在核酸采集业务巡检过程中，发现有人持假护士执业证上岗。经查，犯罪嫌疑人何某某（男，35岁）、殷某某（男，36岁）为应聘从事核酸采集相关工作，通过伪造、购买虚假护士执业证书，骗取从事核酸采样资格。5月21日，该2人参与昌平区十三陵镇某核酸检测点采样工作时，被检测机构巡检工作人员发现其资格造假，后被昌平警方抓获。目前，何某某、殷某某已被昌平公安分局依法采取刑事强制措施，案件正在进一步工作中。</span></p>\n<p style=\"text-align:justify;\"><span style=\"color: rgb(64,64,64);font-size: 18px;font-family: Arial, \"Hiragino Sans GB\", STHeiti, \"Helvetica Neue\", Helvetica, \"Microsoft Yahei\", \"WenQuanYi Micro Hei\", sans-serif;\">对于无资质人员，使用虚假从业资格证明，参与核酸采集、检测等工作，干扰防疫工作开展的各类违法犯罪行为，警方将依法严厉打击。</span></p>\n<p style=\"text-align:justify;\"><span style=\"color: rgb(64,64,64);font-size: 18px;font-family: Arial, \"Hiragino Sans GB\", STHeiti, \"Helvetica Neue\", Helvetica, \"Microsoft Yahei\", \"WenQuanYi Micro Hei\", sans-serif;\">北京提醒：高考生明起请务必做好考前14天健康监测</span></p>\n<p style=\"text-align:justify;\"><span style=\"color: rgb(64,64,64);font-size: 18px;font-family: Arial, \"Hiragino Sans GB\", STHeiti, \"Helvetica Neue\", Helvetica, \"Microsoft Yahei\", \"WenQuanYi Micro Hei\", sans-serif;\">北京市2022年统一高考将于6月7日至8日举行，高中学考等级考将于6月9日至10日举行。为保障广大考生的生命安全和身体健康，确保考试平稳有序，按照北京市高考组考防疫要求，考生明天起开始进行考前14天健康状况监测。</span></p>\n<p style=\"text-align:justify;\"><span style=\"color: rgb(64,64,64);font-size: 18px;font-family: Arial, \"Hiragino Sans GB\", STHeiti, \"Helvetica Neue\", Helvetica, \"Microsoft Yahei\", \"WenQuanYi Micro Hei\", sans-serif;\">考生要遵守北京市和所在区疫情防控规定和要求，做好个人防护，减少外出，不到人员密集和流动性较大的场所活动，不前往中高风险等级地区，避免接触有疫情风险的人员和物品。</span></p>\n<p style=\"text-align:justify;\"><span style=\"color: rgb(64,64,64);font-size: 18px;font-family: Arial, \"Hiragino Sans GB\", STHeiti, \"Helvetica Neue\", Helvetica, \"Microsoft Yahei\", \"WenQuanYi Micro Hei\", sans-serif;\">考生须在京参加考前14天健康状况监测，按学校（报名单位）要求每日进行体温测量并如实报告。即日起有京外活动轨迹或中高风险地区所在县（市、区）活动轨迹的考生应及时向学校（报名单位）报告。</span></p>\n<p style=\"text-align:justify;\"><span style=\"color: rgb(64,64,64);font-size: 18px;font-family: Arial, \"Hiragino Sans GB\", STHeiti, \"Helvetica Neue\", Helvetica, \"Microsoft Yahei\", \"WenQuanYi Micro Hei\", sans-serif;\">如考生被确定为确诊患者、无症状感染者和被确定为集中医学观察、小区封闭管理、居家观察等管控对象，应第一时间向学校（报名单位）报告。</span></p>\n<p style=\"text-align:justify;\"><span style=\"color: rgb(64,64,64);font-size: 18px;font-family: Arial, \"Hiragino Sans GB\", STHeiti, \"Helvetica Neue\", Helvetica, \"Microsoft Yahei\", \"WenQuanYi Micro Hei\", sans-serif;\">考生如出现发热（体温≥37.3℃）、干咳、乏力、咳痰、咽痛、腹泻、味觉异常、嗅觉异常、鼻塞、结膜炎、肌痛等新冠肺炎相关症状，应立即向学校（报名单位）报告并就医，不得谎报、瞒报。</span></p>\n<p style=\"text-align:justify;\"><span style=\"color: rgb(64,64,64);font-size: 18px;font-family: Arial, \"Hiragino Sans GB\", STHeiti, \"Helvetica Neue\", Helvetica, \"Microsoft Yahei\", \"WenQuanYi Micro Hei\", sans-serif;\">考生要密切关注北京教育考试院网站发布的信息，以及各考区、学校（报名单位）发布的提醒，及时了解并遵守相关要求。</span></p>\n<p style=\"text-align:justify;\"><span style=\"color: rgb(64,64,64);font-size: 18px;font-family: Arial, \"Hiragino Sans GB\", STHeiti, \"Helvetica Neue\", Helvetica, \"Microsoft Yahei\", \"WenQuanYi Micro Hei\", sans-serif;\">北京一核酸检测点使用过期样本保存液，被罚5万元</span></p>\n<p style=\"text-align:justify;\"><span style=\"color: rgb(64,64,64);font-size: 18px;font-family: Arial, \"Hiragino Sans GB\", STHeiti, \"Helvetica Neue\", Helvetica, \"Microsoft Yahei\", \"WenQuanYi Micro Hei\", sans-serif;\">近日，北京时珍堂中西医结合医院有限公司被北京市丰台区市场监督管理局罚款5万元。</span></p>\n<p style=\"text-align:justify;\"><span style=\"color: rgb(64,64,64);font-size: 18px;font-family: Arial, \"Hiragino Sans GB\", STHeiti, \"Helvetica Neue\", Helvetica, \"Microsoft Yahei\", \"WenQuanYi Micro Hei\", sans-serif;\">具体事由为，今年4月，市监局在当事人的核酸检测点发现正在使用的样本保存液超过保质期（生产日期：2021-01-31；有效期至：2022-01-30）。经查，当事人和北京全谱医学检验实验室有限公司签订2019-nCoV核酸检测服务协议，委托全谱医学进行核酸样本检测，当事人负责样本采集等。上述超过保质期的医疗器械是2022年4月12日由北京全谱医学检验实验室有限公司免费提供的，共计730支，已使用50支，库存680支。当事人使用上述超过保质期的医疗器械的货值金额为1825元。</span></p>\n<p style=\"text-align:justify;\"><span style=\"color: rgb(64,64,64);font-size: 18px;font-family: Arial, \"Hiragino Sans GB\", STHeiti, \"Helvetica Neue\", Helvetica, \"Microsoft Yahei\", \"WenQuanYi Micro Hei\", sans-serif;\">国家卫健委：在群众基本医疗和生活不受影响情况下控制疫情，不搞一刀切</span></p>\n<p style=\"text-align:justify;\"><span style=\"color: rgb(64,64,64);font-size: 18px;font-family: Arial, \"Hiragino Sans GB\", STHeiti, \"Helvetica Neue\", Helvetica, \"Microsoft Yahei\", \"WenQuanYi Micro Hei\", sans-serif;\">国务院联防联控机制于5月23日（周一）下午3时召开新闻发布会，国家卫生健康委新闻发言人、宣传司副司长米锋会上表示：</span></p>\n<p style=\"text-align:justify;\"><span style=\"color: rgb(64,64,64);font-size: 18px;font-family: Arial, \"Hiragino Sans GB\", STHeiti, \"Helvetica Neue\", Helvetica, \"Microsoft Yahei\", \"WenQuanYi Micro Hei\", sans-serif;\">要健全完善分类救治体系，建立梯度收治和双向转诊机制，提前规划准备定点医院、方舱医院、集中隔离点等，避免医疗资源挤兑。</span></p>\n<p style=\"text-align:justify;\"><span style=\"color: rgb(64,64,64);font-size: 18px;font-family: Arial, \"Hiragino Sans GB\", STHeiti, \"Helvetica Neue\", Helvetica, \"Microsoft Yahei\", \"WenQuanYi Micro Hei\", sans-serif;\">要努力在群众基本医疗和生活不受影响情况下控制疫情，依法依规落实各项防控措施，不搞简单化、一刀切。</span></p>\n<p style=\"text-align:justify;\"><span style=\"color: rgb(64,64,64);font-size: 18px;font-family: Arial, \"Hiragino Sans GB\", STHeiti, \"Helvetica Neue\", Helvetica, \"Microsoft Yahei\", \"WenQuanYi Micro Hei\", sans-serif;\">要以老年人为重点，有序推进新冠病毒疫苗同源和序贯加强免疫接种。</span></p>\n<p style=\"text-align:justify;\"><span style=\"color: rgb(64,64,64);font-size: 18px;font-family: Arial, \"Hiragino Sans GB\", STHeiti, \"Helvetica Neue\", Helvetica, \"Microsoft Yahei\", \"WenQuanYi Micro Hei\", sans-serif;\">张文宏最新发声：奥密克戎是前所未有的挑战</span></p>\n<p style=\"text-align:justify;\"><span style=\"color: rgb(64,64,64);font-size: 18px;font-family: Arial, \"Hiragino Sans GB\", STHeiti, \"Helvetica Neue\", Helvetica, \"Microsoft Yahei\", \"WenQuanYi Micro Hei\", sans-serif;\">22日，复旦大学附属华山医院感染科主任、国家传染病医学中心主任张文宏教授在中华预防医学会第七届呼吸疾病预防与控制学术会议上作了题为《新冠肺炎全球流行背景下我国防控策略的实施》的演讲报告。在半个小时的报告中，张文宏教授就我国疫情形势变化及防控效果、奥密克戎的挑战和未来防控模式进行了深度解析。</span></p>\n<p style=\"text-align:justify;\"><span style=\"color: rgb(64,64,64);font-size: 18px;font-family: Arial, \"Hiragino Sans GB\", STHeiti, \"Helvetica Neue\", Helvetica, \"Microsoft Yahei\", \"WenQuanYi Micro Hei\", sans-serif;\"><strong>其中提到：</strong></span></p>\n<p style=\"text-align:justify;\"><span style=\"color: rgb(64,64,64);font-size: 18px;font-family: Arial, \"Hiragino Sans GB\", STHeiti, \"Helvetica Neue\", Helvetica, \"Microsoft Yahei\", \"WenQuanYi Micro Hei\", sans-serif;\">疫情形势与以往不同，我国防控取得了好的效果；</span></p>\n<p style=\"text-align:justify;\"><span style=\"color: rgb(64,64,64);font-size: 18px;font-family: Arial, \"Hiragino Sans GB\", STHeiti, \"Helvetica Neue\", Helvetica, \"Microsoft Yahei\", \"WenQuanYi Micro Hei\", sans-serif;\">在奥密克戎的挑战中，我们都感觉到了前所未有的挑战；</span></p>\n<p style=\"text-align:justify;\"><span style=\"color: rgb(64,64,64);font-size: 18px;font-family: Arial, \"Hiragino Sans GB\", STHeiti, \"Helvetica Neue\", Helvetica, \"Microsoft Yahei\", \"WenQuanYi Micro Hei\", sans-serif;\">奥密克戎的症状确实有所减轻，但是上呼吸道的一些症状出现了显著的增加趋势；</span></p>\n<p style=\"text-align:justify;\"><span style=\"color: rgb(64,64,64);font-size: 18px;font-family: Arial, \"Hiragino Sans GB\", STHeiti, \"Helvetica Neue\", Helvetica, \"Microsoft Yahei\", \"WenQuanYi Micro Hei\", sans-serif;\">奥密克戎出现症状的减轻有两方面的因素，一是因为注射过疫苗，二是奥密克戎的毒力也有所降低；</span></p>\n<p style=\"text-align:justify;\"><span style=\"color: rgb(64,64,64);font-size: 18px;font-family: Arial, \"Hiragino Sans GB\", STHeiti, \"Helvetica Neue\", Helvetica, \"Microsoft Yahei\", \"WenQuanYi Micro Hei\", sans-serif;\">脆弱人群是奥密克戎暴发以来的最大挑战；</span></p>\n<p style=\"text-align:justify;\"><span style=\"color: rgb(64,64,64);font-size: 18px;font-family: Arial, \"Hiragino Sans GB\", STHeiti, \"Helvetica Neue\", Helvetica, \"Microsoft Yahei\", \"WenQuanYi Micro Hei\", sans-serif;\">疫苗仍是有效的保护措施，尤其对减轻重症及病亡率；</span></p>\n<p style=\"text-align:justify;\"><span style=\"color: rgb(64,64,64);font-size: 18px;font-family: Arial, \"Hiragino Sans GB\", STHeiti, \"Helvetica Neue\", Helvetica, \"Microsoft Yahei\", \"WenQuanYi Micro Hei\", sans-serif;\">未来防控，需要加大核酸检测力度、疫苗覆盖、非药物干预、药物治疗、早期抗病毒治疗等；</span></p>\n<p style=\"text-align:justify;\"><span style=\"color: rgb(64,64,64);font-size: 18px;font-family: Arial, \"Hiragino Sans GB\", STHeiti, \"Helvetica Neue\", Helvetica, \"Microsoft Yahei\", \"WenQuanYi Micro Hei\", sans-serif;\">可能新冠疫情在短期内不会结束，我们需要更长的时间，更多的耐心，还有更多的勇气、更多的智慧和科技来战胜这一切。</span></p>\n<p style=\"text-align:justify;\"><span style=\"color: rgb(64,64,64);font-size: 18px;font-family: Arial, \"Hiragino Sans GB\", STHeiti, \"Helvetica Neue\", Helvetica, \"Microsoft Yahei\", \"WenQuanYi Micro Hei\", sans-serif;\">世卫组织发布猴痘疫情暴发预警</span></p>\n<p style=\"text-align:justify;\"><span style=\"color: rgb(64,64,64);font-size: 18px;font-family: Arial, \"Hiragino Sans GB\", STHeiti, \"Helvetica Neue\", Helvetica, \"Microsoft Yahei\", \"WenQuanYi Micro Hei\", sans-serif;\">世界卫生组织21日发布猴痘疫情暴发预警称，鉴于目前已在多个未流行猴痘病毒的国家发现病例，未来有可能在这些国家及其他国家发现更多病例，猴痘病毒将进一步传播。</span></p>\n<p style=\"text-align:justify;\"><span style=\"color: rgb(64,64,64);font-size: 18px;font-family: Arial, \"Hiragino Sans GB\", STHeiti, \"Helvetica Neue\", Helvetica, \"Microsoft Yahei\", \"WenQuanYi Micro Hei\", sans-serif;\">世卫组织21日数据显示，5月13日以来，世卫组织3个地区办事处的12个未流行猴痘病毒的国家已报告了92例确诊病例和28例疑似病例，迄今还没有死亡病例。其中，确诊和疑似病例主要来自英国、西班牙和葡萄牙，其余分布在澳大利亚、比利时、加拿大、法国、德国、意大利、荷兰、瑞典和美国。</span></p>\n<p style=\"text-align:justify;\"><span style=\"color: rgb(64,64,64);font-size: 18px;font-family: Arial, \"Hiragino Sans GB\", STHeiti, \"Helvetica Neue\", Helvetica, \"Microsoft Yahei\", \"WenQuanYi Micro Hei\", sans-serif;\">世卫组织称，这些病例并无明确的猴痘流行地区旅行史，且主要但不限于发现在男男性行为者中。迄今，所有通过PCR确认样本的病例都确定为感染了病毒的西非进化分支。来自葡萄牙确诊病例的拭子样本基因组序列表明，导致当前疫情的猴痘病毒与2018年和2019年从尼日利亚输出到英国、以色列和新加坡的病例密切匹配。</span></p>\n<p style=\"text-align:justify;\"><span style=\"color: rgb(64,64,64);font-size: 18px;font-family: Arial, \"Hiragino Sans GB\", STHeiti, \"Helvetica Neue\", Helvetica, \"Microsoft Yahei\", \"WenQuanYi Micro Hei\", sans-serif;\">世卫组织预计，随着监测的扩大，未来有可能在已报告病例的国家和其他国家发现更多病例。当前应对重点是向最容易感染猴痘的人群提供准确信息以阻止进一步传播。证据表明，感染风险最高的是在猴痘患者出现症状后与他们有过密切身体接触的人群。</span></p>\n<p style=\"text-align:justify;\"><span style=\"color: rgb(64,64,64);font-size: 18px;font-family: Arial, \"Hiragino Sans GB\", STHeiti, \"Helvetica Neue\", Helvetica, \"Microsoft Yahei\", \"WenQuanYi Micro Hei\", sans-serif;\">由于猴痘病例常多发于西非和中非地区，而目前多个国家报告的确诊和疑似病例却没有任何猴痘流行地区旅行史，这种情况并不正常。因此，世卫组织认为，迫切需要提高对猴痘的认识并采取全面措施，及时发现并隔离病例、追踪接触者、提供支持性护理等以限制进一步传播。</span></p>\n<p style=\"text-align:justify;\"><span style=\"color: rgb(64,64,64);font-size: 18px;font-family: Arial, \"Hiragino Sans GB\", STHeiti, \"Helvetica Neue\", Helvetica, \"Microsoft Yahei\", \"WenQuanYi Micro Hei\", sans-serif;\">世卫组织呼吁，各国应警惕患者是否出现非典型皮疹相关信号，这类皮疹依次表现为斑疹、丘疹、水疱、脓疱、结痂等，并可能伴有发热、淋巴结肿大、背痛和肌肉酸痛等。患者可能就诊于社区和医疗保健机构，包括但不限于初级保健机构、发热诊所、传染病科、妇产科、泌尿科、急诊科和皮肤科诊所等。提高防范意识对识别和预防进一步的继发病例及有效管理当前疫情至关重要。</span></p>\n<p style=\"text-align:justify;\"><span style=\"color: rgb(64,64,64);font-size: 18px;font-family: Arial, \"Hiragino Sans GB\", STHeiti, \"Helvetica Neue\", Helvetica, \"Microsoft Yahei\", \"WenQuanYi Micro Hei\", sans-serif;\">来源：新华社、北京日报、央视新闻、卫健委等</span>&nbsp;</p>\n",
//         "region": "全球",
//         "author": "坚强的大爷",
//         "roleId": 1,
//         "auditState": 2,
//         "publishState": 2,
//         "createTime": 1653302156229,
//         "star": 0,
//         "view": 1,
//         "id": 36,
//         "publishTime": 1653302167412
//       },
//       {
//         "title": "全国多地有大到暴雨（100～161毫米） 局地有雷暴大风",
//         "categoryId": 2,
//         "content": "<p style=\"text-align:start;\"><span style=\"color: rgb(0,0,0);font-size: 16px;font-family: 微软雅黑, 宋体;\">过去一天，云贵及江南南部、华南北部等地普遍降雨，贵州黔南州和黔东南州、湖南怀化、广西柳州、海南保亭等局地出现大暴雨（100～161毫米）。</span></p>\n<p style=\"text-align:start;\"><span style=\"color: rgb(0,0,0);font-size: 16px;font-family: 微软雅黑, 宋体;\">今明两天，雨水仍锁定江南、华南及云南东南部等地，25日后南方降雨逐渐减弱。</span></p>\n<p style=\"text-align:start;\"><span style=\"color: rgb(0,0,0);font-size: 16px;font-family: 微软雅黑, 宋体;\">5月23日10时，中央气象台发布暴雨蓝色预警。</span></p>\n<p style=\"text-align:start;\"><span style=\"color: rgb(0,0,0);font-size: 16px;font-family: 微软雅黑, 宋体;\">预计，5月23日14时至24日14时，湖南南部、江西南部、福建中西部、云南东南部、广西东部和西部、广东北部以及海南岛北部等地的部分地区有大到暴雨。</span></p>\n<p style=\"text-align:start;\"><span style=\"color: rgb(0,0,0);font-size: 16px;font-family: 微软雅黑, 宋体;\">其中，江西东南部、福建西部等地局地有大暴雨（100～110毫米）。</span></p>\n<p style=\"text-align:start;\"><span style=\"color: rgb(0,0,0);font-size: 16px;font-family: 微软雅黑, 宋体;\">上述部分地区伴有短时强降水（最大小时降雨量20～40毫米，局地可超过50毫米），局地有雷暴大风等强对流天气。</span>&nbsp;</p>\n<p style=\"text-align:left;\"></p>\n<img src=\"http://i3.hexun.com/2022-05-23/205999186.jpg\" alt=\"undefined\" style=\"height: auto;width: auto\"/>\n<p></p>\n<p></p>\n<img src=\"http://i3.hexun.com/2022-05-23/205999187.png\" alt=\"undefined\" style=\"height: auto;width: auto\"/>\n<p></p>\n<p><span style=\"color: rgb(0,0,0);font-size: 16px;font-family: 微软雅黑, 宋体;\">此外，内蒙古中西部和东南部、黑龙江南部、吉林东部、辽宁东部和西北部、宁夏东部、陕西北部、山西中北部和东南部、河北北部和西南部等地的局地，将有雷暴大风或冰雹天气。</span></p>\n<p>&nbsp;</p>\n<img src=\"http://i1.hexun.com/2022-05-23/205999188.jpg\" alt=\"undefined\" style=\"height: auto;width: auto\"/>\n<p></p>\n<p style=\"text-align:start;\"></p>\n<p style=\"text-align:left;\"><span style=\"color: rgba(0,0,0,0.85);background-color: rgb(255,255,255);font-size: 16px;\">气温方面，今明两天，</span><a href=\"http://jingzhi.funds.hexun.com/164811.shtml\" target=\"_blank\"><span style=\"color: rgb(24,144,255);background-color: rgb(255,255,255);font-size: 16px;\">京津冀</span></a><span style=\"color: rgba(0,0,0,0.85);background-color: rgb(255,255,255);font-size: 16px;\">、山西、河南、山东、苏皖北部及辽宁中西部、吉林中西部等地日最高气温仍将有30～33℃，局地可达35～36℃。</span></p>\n<p style=\"text-align:start;\"></p>\n<p style=\"text-align:left;\"><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 16px;font-family: 微软雅黑, 宋体;\">25日，北方的高温天气暂时偃旗息鼓。</span></p>\n<p style=\"text-align:start;\"></p>\n<p style=\"text-align:left;\"><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 16px;font-family: 微软雅黑, 宋体;\"><strong>27日起，高温天气再次迅猛发展，京津冀、黄淮、陕西关中等地气温可达35℃，局地冲击37～39℃</strong></span>&nbsp;</p>\n<p></p>\n<img src=\"http://i3.hexun.com/2022-05-23/205999189.jpg\" alt=\"undefined\" style=\"height: auto;width: auto\"/>\n<p></p>\n",
//         "region": "全球",
//         "author": "坚强的大爷",
//         "roleId": 1,
//         "auditState": 2,
//         "publishState": 2,
//         "createTime": 1653302522756,
//         "star": 1,
//         "view": 1,
//         "id": 37,
//         "publishTime": 1653302532893
//       },
//       {
//         "title": "渣土车侧翻压扁越野车，致4人遇难！目击者：小车车体只剩四五十厘米高…",
//         "categoryId": 1,
//         "content": "<p></p>\n<p><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 19px;\">5月21日，河南省郑州惠济区一辆渣土车侧翻后将一辆越野车压扁。参与现场救援的人员告诉记者，</span></p>\n<p><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 19px;\">越野车整个被压扁，车体只剩四五十厘米高，车上4人全部遇难。</span>&nbsp;</p>\n<p></p>\n<p></p>\n<img src=\"https://imgm.gmw.cn/attachement/jpg/site215/20220523/7000550824387234977.jpg\" alt=\"undefined\" style=\"height: auto;width: auto\"/>\n<p></p>\n<p><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 19px;\">“当时拉了警戒线，救援人员用吊车把渣土车给吊起来了。”现场附近的村民孔先生</span></p>\n<p><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 19px;\">描述，该起事故发生在程庄村附近的老314省道，中午12点左右，一辆渣土车发生侧翻，</span></p>\n<p><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 19px;\">车身后半部分将一辆白色越野车压在下面。</span>&nbsp;</p>\n<p></p>\n<p></p>\n<img src=\"https://imgm.gmw.cn/attachement/jpg/site215/20220523/6153594220340949424.jpg\" alt=\"undefined\" style=\"height: auto;width: auto\"/>\n<p></p>\n<p style=\"text-align:justify;\"><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 18px;\">事故发生后，救援人员很快到达现场，用吊车将渣土车扶正，营救被困人员事故造成</span></p>\n<p><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 18px;\">该路段约3个小时拥堵，下午3点左右交通恢复正常。</span></p>\n<p></p>\n<p style=\"text-align:justify;\"><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 18px;\">记者从现场救援人员处获悉，由于渣土车满载泥浆车身较重，越野车上共有4名乘</span></p>\n<p><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 18px;\">客，已全部遇难。</span></p>\n<p></p>\n<p style=\"text-align:justify;\"><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 18px;\">另据极目新闻报道，据附近商户蔡先生和孔庄村村民刘先生介绍，车上四人都是事发</span></p>\n<p><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 18px;\">地不远处孔庄村人，车上有一位老人年近百岁，还有老人的儿子和儿媳，另外还有一人</span></p>\n<p><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 18px;\">据说是其外甥女。家人本想着出村给老人过生日，没想到车开出去没多远，就发生了这</span></p>\n<p><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 18px;\">样的事。</span><span style=\"font-size: 18px;\"> </span></p>\n",
//         "region": "全球",
//         "author": "坚强的大爷",
//         "roleId": 1,
//         "auditState": 2,
//         "publishState": 2,
//         "createTime": 1653302895620,
//         "star": 0,
//         "view": 1,
//         "id": 38,
//         "publishTime": 1653302909916
//       }
//     ]
//   }
// }

