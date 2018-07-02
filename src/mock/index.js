// 使用mock模拟假数据

var axios = require('axios');
// 先安装依赖
var MockAdapter = require('axios-mock-adapter');

var mock = new MockAdapter(axios);

// 模拟get请求 
// 返回数据
mock.onGet('/goodList').reply(200, {
	goodListMes:[
	{src:require("../assets/img/bed2.jpg"),txt:"四件套家纺家饰加厚法莱绒四件套保暖被套法兰绒法拉绒冬季1.8m床笠床单床上用品",mon:"359",cout:4,many:1},
        {src:require("../assets/img/bed7.jpg"),txt:"四件套家纺家饰【天天特价】日式懒人沙发可折叠加长榻榻米床创意布艺沙发单人",mon:"688",cout:3,many:1},
        {src:require("../assets/img/bed3.jpg"),txt:"四件套家纺家饰韩式秋冬纯棉四件套蓝色1.8床上用品猫咪鱼儿被套床单1.5床笠全棉",mon:"188",cout:4,many:1},
        {src:require("../assets/img/bed6.jpg"),txt:"四件套家纺家饰懒人沙发单人卧室多功能折叠靠背椅小户型客厅榻榻米阳台休闲躺椅",mon:"488",cout:3,many:1},
        {src:require("../assets/img/bed4.jpg"),txt:"高档全棉春秋被双人纤维被2米冬被子2.2米加厚被芯被褥单人棉被胎",mon:"388",cout:4,many:1},
        {src:require("../assets/img/bed9.jpg"),txt:"折叠多功能懒人沙发床上折叠沙发靠背椅单人创意卧室阳台躺椅看书",mon:"458",cout:3,many:1},  
        {src:require("../assets/img/bed8.jpg"),txt:"懒人沙发榻榻米床单人创意卧室阳台躺椅看书家具座小布艺可爱飘窗",mon:"245",cout:3,many:1},
        {src:require("../assets/img/bed5.jpg"),txt:"弥生秋冬全棉磨毛纯色单件被套 北欧简约风纯棉被套单品床上用品",mon:"288",cout:4,many:1},
        {src:require("../assets/img/build1.jpg"),txt:"家装建材欧式吊灯客厅灯简欧大厅树脂北欧风格复古创意卧室餐厅灯美式灯具",mon:"858",cout:1,many:1},
        {src:require("../assets/img/build2.jpg"),txt:"家装建材海尔无线监控设备套装手机远程家用高清夜视wifi网络摄像头监控器",mon:"499",cout:1,many:1},
        {src:require("../assets/img/build3.jpg"),txt:"家装建材九号家居实木整体橱柜定制开放式厨房厨柜定做石英石台面全屋定制",mon:"458",cout:1,many:1},  
        {src:require("../assets/img/build4.jpg"),txt:"家装建材浴霸 风暖集成吊顶嵌入式多功能五合一led灯浴室卫生间智能暖风机",mon:"245",cout:1,many:1},
        {src:require("../assets/img/adorn1.png"),txt:"居家装饰新中式装饰画客厅玄关过道挂画圆形画水墨画三联画现代抽象组合画",mon:"263",cout:2,many:1},
        {src:require("../assets/img/adorn2.jpg"),txt:"居家装饰北欧风格客厅组合装饰画现代简约挂画沙发背景墙壁画卧室书房墙画",mon:"499",cout:2,many:1},
        {src:require("../assets/img/adorn3.jpg"),txt:"居家装饰现代新中式卧室装饰画客厅沙发背景墙挂画床头水墨国画横版壁画鸟",mon:"218",cout:2,many:1},  
        {src:require("../assets/img/adorn4.jpg"),txt:"居家装饰包邮 家居饰品陶瓷酒柜装饰摆件现代创意结婚礼品描金玫瑰小天鹅",mon:"49",cout:2,many:1},
        {src:require("../assets/img/life1.jpg"),txt:"生活百货特价功夫茶具套装家用简约整套实木茶盘陶瓷紫砂冰裂茶壶茶杯茶海",mon:"39",cout:5,many:1},
        {src:require("../assets/img/life2.jpg"),txt:"生活百货捷克合资水晶洋酒杯酒具套装玻璃杯子红酒杯威士忌杯烈酒杯醒酒器",mon:"135",cout:5,many:1},
        {src:require("../assets/img/life3.jpg"),txt:"生活百货盘子陶瓷菜盘创意家用餐具 6个18元纯白色简约菜碟圆形碟子早餐盘",mon:"18",cout:5,many:1},  
        {src:require("../assets/img/life4.jpg"),txt:"生活百货碗碟套装 景德镇83头高档中式珐琅彩家用骨瓷餐具陶瓷器酒店会所",mon:"2900",cout:5,many:1},
	]
});


