/* ===========================================================
   只需要改这一个文件。

   分类格式：[分类名, 角标, [条目...]]
   条目格式：[名称, 网址, 说明]
             [名称, 网址, 说明, 'adult']  ← 第四项加 'adult'
                                            点击时会先弹年龄确认

   顺序即显示顺序。成人百科排第一位。
   每个分类的专属配色由位置决定（第 1 个用 1 号色，以此类推），
   style.css 里备了 8 套，超过 8 个分类会从头循环。

   用 var 不用 const：app.js 通篇是 ES5 写法。这里若用 const，
   老引擎直接解析失败，会被报成「sites.js 被拦截了」，把人往
   错误方向带。
   =========================================================== */

var SITE = {
  name: '下饭导航',
  tagline: '今天吃什么、怎么做、去哪吃 —— 一页都在这儿',
  deployedOn: '',
};

var GROUPS = [

['成人内容', '18+', [
  ['成人内容百科', 'https://chengrenbaike.com', '性知识与两性健康百科，仅限成年人', 'adult'],
]],

['菜谱与做法', '煮', [
  ['下厨房',   'https://www.xiachufang.com', '家常菜谱与做过的人打分'],
  ['豆果美食', 'https://www.douguo.com',     '菜谱与视频步骤'],
  ['美食杰',   'https://www.meishij.net',    '按食材和口味找菜'],
  ['心食谱',   'https://www.xinshipu.com',   '图文菜谱与分类检索'],
  ['Allrecipes', 'https://www.allrecipes.com', '英文家常菜谱，评论区很实用'],
]],

['海外食谱', '洋', [
  ['Serious Eats', 'https://www.seriouseats.com',   '把原理讲清楚的食谱'],
  ['NYT Cooking',  'https://cooking.nytimes.com',   '纽约时报食谱库'],
  ['BBC Good Food','https://www.bbcgoodfood.com',   '英式家常与烘焙'],
  ['Food52',       'https://food52.com',            '食谱、专栏与厨房好物'],
]],

['烘焙与甜点', '烘', [
  ['King Arthur Baking',    'https://www.kingarthurbaking.com',    '面粉厂出的烘焙圣经'],
  ['Sally\'s Baking',       'https://sallysbakingaddiction.com',   '配方稳定，新手友好'],
  ['Bon Appétit',           'https://www.bonappetit.com',          '美食杂志与甜点专栏'],
]],

['咖啡与饮品', '饮', [
  ['Perfect Daily Grind', 'https://perfectdailygrind.com', '精品咖啡行业与冲煮'],
  ['Coffee Review',       'https://www.coffeereview.com',  '豆子评分与风味描述'],
  ['Home Barista',        'https://www.home-barista.com',  '家用意式设备论坛'],
  ['Difford\'s Guide',    'https://www.diffordsguide.com', '鸡尾酒配方大全'],
]],

['食材与营养', '材', [
  ['USDA FoodData Central', 'https://fdc.nal.usda.gov',        '权威食物成分数据库'],
  ['Open Food Facts',       'https://world.openfoodfacts.org', '开放的包装食品配料库'],
  ['中国营养学会',          'https://www.cnsoc.org',           '膳食指南与营养科普'],
]],

['餐厅与探店', '店', [
  ['米其林指南',        'https://guide.michelin.com',       '星级与必比登推介'],
  ['The World\'s 50 Best', 'https://www.theworlds50best.com', '世界 50 佳餐厅榜单'],
  ['Tabelog',           'https://tabelog.com',              '日本餐厅评分，去日本必查'],
  ['大众点评',          'https://www.dianping.com',         '国内探店与评价'],
]],

];
