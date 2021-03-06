let datacolors = [
    {enname: 'LightPink',       cnname: '浅粉红',data16: '#FFB6C1',dataRGBa: 'rgba(255,182,193,1)'},
    {enname: 'Pink',            cnname: '粉红',data16: '#FFC0CB',dataRGBa: 'rgba(255,192,203,1)'},
    {enname: 'Crimson',         cnname: '猩红',data16: '#DC143C',dataRGBa: 'rgba(220,20,60,1)'},
    {enname: 'LavenderBlush',   cnname: '脸红的淡紫色',data16: '#FFF0F5',dataRGBa: 'rgba(255,240,245,1)'},
    {enname: 'PaleVioletRed',   cnname: '苍白的紫罗兰红色',data16: '#DB7093',dataRGBa: 'rgba(219,112,147,1)'},
    {enname: 'HotPink',         cnname: '热情的粉红',data16: '#FF69B4',dataRGBa: 'rgba(255,105,180,1)'},
    {enname: 'DeepPink',        cnname: '深粉色',data16: '#FF1493',dataRGBa: 'rgba(255,20,147,1)'},
    {enname: 'MediumVioletRed', cnname: '适中的紫罗兰红色',data16: '#C71585',dataRGBa: 'rgba(199,21,133,1)'},
    {enname: 'Orchid',          cnname: '兰花的紫色',data16: '#DA70D6',dataRGBa: 'rgba(218,112,214,1)'},
    {enname: 'Thistle',         cnname: '蓟',data16: '#D8BFD8',dataRGBa: 'rgba(216,191,216,1)'},
    {enname: 'plum',            cnname: '李子',data16: '#DDA0DD',dataRGBa: 'rgba(221,160,221,1)'},
    {enname: 'Violet',          cnname: '紫罗兰',data16: '#EE82EE',dataRGBa: 'rgba(238,130,238,1)'},
    {enname: 'Magenta',         cnname: '洋红',data16: '#FF00FF',dataRGBa: 'rgba(255,0,255,1)'},
    {enname: 'Fuchsia',         cnname: '灯笼海棠(紫红色)',data16: '#FF00FF',dataRGBa: 'rgba(255,0,255,1)'},
    {enname: 'DarkMagenta',     cnname: '深洋红色',data16: '#8B008B',dataRGBa: 'rgba(139,0,139,1)'},
    {enname: 'Purple',          cnname: '紫色',data16: '#800080',dataRGBa: 'rgba(128,0,128,1)'},
    {enname: 'MediumOrchid',    cnname: '适中的兰花紫',data16: '#BA55D3',dataRGBa: 'rgba(186,85,211,1)'},
    {enname: 'DarkVoilet',      cnname: '深紫罗兰色',data16: '#9400D3',dataRGBa: 'rgba(148,0,211,1)'},
    {enname: 'DarkOrchid',      cnname: '深兰花紫',data16: '#9932CC',dataRGBa: 'rgba(153,50,204,1)'},
    {enname: 'Indigo',          cnname: '靛青',data16: '#4B0082',dataRGBa: 'rgba(75,0,130,1)'},
    {enname: 'BlueViolet',      cnname: '深紫罗兰的蓝色',data16: '#8A2BE2',dataRGBa: 'rgba(138,43,226,1)'},
    {enname: 'MediumPurple',    cnname: '适中的紫色',data16: '#9370DB',dataRGBa: 'rgba(147,112,219,1)'},
    {enname: 'MediumSlateBlue', cnname: '适中的板岩暗蓝灰色',data16: '#7B68EE',dataRGBa: 'rgba(123,104,238,1)'},
    {enname: 'SlateBlue',       cnname: '板岩暗蓝灰色',data16: '#6A5ACD',dataRGBa: 'rgba(106,90,205,1)'},
    {enname: 'DarkSlateBlue',   cnname: '深岩暗蓝灰色',data16: '#483D8B',dataRGBa: 'rgba(72,61,139,1)'},
    {enname: 'Lavender',        cnname: '熏衣草花的淡紫色',data16: '#E6E6FA',dataRGBa: 'rgba(230,230,250,1)'},
    {enname: 'GhostWhite',      cnname: '幽灵的白色',data16: '#F8F8FF',dataRGBa: 'rgba(248,248,255,1)'},
    {enname: 'Blue',            cnname: '纯蓝',data16: '#0000FF',dataRGBa: 'rgba(0,0,255,1)'},
    {enname: 'MediumBlue',      cnname: '适中的蓝色',data16: '#0000CD',dataRGBa: 'rgba(0,0,205,1)'},
    {enname: 'MidnightBlue',    cnname: '午夜的蓝色',data16: '#191970',dataRGBa: 'rgba(25,25,112,1)'},
    {enname: 'DarkBlue',        cnname: '深蓝色',data16: '#00008B',dataRGBa: 'rgba(0,0,139,1)'},
    {enname: 'Navy',            cnname: '海军蓝',data16: '#000080',dataRGBa: 'rgba(0,0,128,1)'},
    {enname: 'RoyalBlue',       cnname: '皇家蓝',data16: '#4169E1',dataRGBa: 'rgba(65,105,225,1)'},
    {enname: 'CornflowerBlue',  cnname: '矢车菊的蓝色',data16: '#6495ED',dataRGBa: 'rgba(100,149,237,1)'},
    {enname: 'LightSteelBlue',  cnname: '淡钢蓝',data16: '#B0C4DE',dataRGBa: 'rgba(176,196,222,1)'},
    {enname: 'LightSlateGray',  cnname: '浅石板灰',data16: '#778899',dataRGBa: 'rgba(119,136,153,1)'},
    {enname: 'SlateGray',       cnname: '石板灰',data16: '#708090',dataRGBa: 'rgba(112,128,144,1)'},
    {enname: 'DoderBlue',       cnname: '道奇蓝',data16: '#1E90FF',dataRGBa: 'rgba(30,144,255,1)'},
    {enname: 'AliceBlue',       cnname: '爱丽丝蓝',data16: '#F0F8FF',dataRGBa: 'rgba(240,248,255,1)'},
    {enname: 'SteelBlue',       cnname: '钢蓝',data16: '#4682B4',dataRGBa: 'rgba(70,130,180,1)'},
    {enname: 'LightSkyBlue',    cnname: '淡蓝色',data16: '#87CEFA',dataRGBa: 'rgba(135,206,250,1)'},
    {enname: 'SkyBlue',         cnname: '天蓝色',data16: '#87CEEB',dataRGBa: 'rgba(135,206,235,1)'},
    {enname: 'DeepSkyBlue',     cnname: '深天蓝',data16: '#00BFFF',dataRGBa: 'rgba(0,191,255,1)'},
    {enname: 'LightBLue',       cnname: '淡蓝',data16: '#ADD8E6',dataRGBa: 'rgba(173,216,230,1)'},
    {enname: 'PowDerBlue',      cnname: '火药蓝',data16: '#B0E0E6',dataRGBa: 'rgba(176,224,230,1)'},
    {enname: 'CadetBlue',       cnname: '军校蓝',data16: '#5F9EA0',dataRGBa: 'rgba(95,158,160,1)'},
    {enname: 'Azure',           cnname: '蔚蓝色',data16: '#F0FFFF',dataRGBa: 'rgba(240,255,255,1)'},
    {enname: 'LightCyan',       cnname: '淡青色',data16: '#E1FFFF',dataRGBa: 'rgba(225,255,255,1)'},
    {enname: 'PaleTurquoise',   cnname: '苍白的绿宝石',data16: '#AFEEEE',dataRGBa: 'rgba(175,238,238,1)'},
    {enname: 'Cyan',            cnname: '青色',data16: '#00FFFF',dataRGBa: 'rgba(0,255,255,1)'},
    {enname: 'Aqua',            cnname: '水绿色',data16: '#D4F2E7',dataRGBa: 'rgba(212,242,231,1)'},
    {enname: 'DarkTurquoise',   cnname: '深绿宝石',data16: '#00CED1',dataRGBa: 'rgba(0,206,209,1)'},
    {enname: 'DarkSlateGray',   cnname: '深石板灰',data16: '#2F4F4F',dataRGBa: 'rgba(47,79,79,1)'},
    {enname: 'DarkCyan',        cnname: '深青色',data16: '#008B8B',dataRGBa: 'rgba(0,139,139,1)'},
    {enname: 'Teal',            cnname: '水鸭色',data16: '#008080',dataRGBa: 'rgba(0,128,128,1)'},
    {enname: 'MediumTurquoise', cnname: '适中的绿宝石',data16: '#48D1CC',dataRGBa: 'rgba(72,209,204,1)'},
    {enname: 'LightSeaGreen',   cnname: '浅海洋绿',data16: '#20B2AA',dataRGBa: 'rgba(32,178,170,1)'},
    {enname: 'Turquoise',       cnname: '绿宝石',data16: '#40E0D0',dataRGBa: 'rgba(64,224,208,1)'},
    {enname: 'Auqamarin',       cnname: '绿玉/碧绿色',data16: '#7FFFAA',dataRGBa: 'rgba(127,255,170,1)'},
    {enname: 'MediumAquamarine',cnname: '适中的碧绿色',data16: '#00FA9A',dataRGBa: 'rgba(0,250,154,1)'},
    {enname: 'MediumSpringGreen',   cnname: '适中的春天的绿色',data16: '#00FF7F',dataRGBa: 'rgba(0,255,127,1)'},
    {enname: 'MintCream',           cnname: '薄荷奶油',data16: '#F5FFFA',dataRGBa: 'rgba(245,255,250,1)'},
    {enname: 'SpringGreen',         cnname: '春天的绿色',data16: '#3CB371',dataRGBa: 'rgba(60,179,113,1)'},
    {enname: 'SeaGreen',            cnname: '海洋绿',data16: '#2E8B57',dataRGBa: 'rgba(46,139,87,1)'},
    {enname: 'Honeydew',            cnname: '蜂蜜',data16: '#F0FFF0',dataRGBa: 'rgba(240,255,240,1)'},
    {enname: 'LightGreen',          cnname: '淡绿色',data16: '#90EE90',dataRGBa: 'rgba(144,238,144,1)'},
    {enname: 'PaleGreen',           cnname: '苍白的绿色',data16: '#98FB98',dataRGBa: 'rgba(152,251,152,1)'},
    {enname: 'DarkSeaGreen',        cnname: '深海洋绿',data16: '#8FBC8F',dataRGBa: 'rgba(143,188,143,1)'},
    {enname: 'LimeGreen',           cnname: '酸橙绿',data16: '#32CD32',dataRGBa: 'rgba(50,205,50,1)'},
    {enname: 'Lime',                cnname: '酸橙色',data16: '#00FF00',dataRGBa: 'rgba(0,255,0,1)'},
    {enname: 'ForestGreen',         cnname: '森林绿',data16: '#228B22',dataRGBa: 'rgba(34,139,34,1)'},
    {enname: 'Green',               cnname: '纯绿',data16: '#008000',dataRGBa: 'rgba(0,128,0,1)'},
    {enname: 'DarkGreen',           cnname: '深绿色',data16: '#006400',dataRGBa: 'rgba(0,100,0,1)'},
    {enname: 'Chartreuse',          cnname: '查特酒绿',data16: '#7FFF00',dataRGBa: 'rgba(127,255,0,1)'},
    {enname: 'LawnGreen',           cnname: '草坪绿',data16: '#7CFC00',dataRGBa: 'rgba(124,252,0,1)'},
    {enname: 'GreenYellow',         cnname: '绿黄色',data16: '#ADFF2F',dataRGBa: 'rgba(173,255,47,1)'},
    {enname: 'OliveDrab',           cnname: '橄榄土褐色',data16: '#556B2F',dataRGBa: 'rgba(85,107,47,1)'},
    {enname: 'Beige',               cnname: '米色(浅褐色)',data16: '#F5F5DC',dataRGBa: 'rgba(245,245,220,1)'},
    {enname: 'LightGoldenrodYellow',cnname: '浅秋麒麟黄',data16: '#FAFAD2',dataRGBa: 'rgba(250,250,210,1)'},
    {enname: 'Ivory',               cnname: '象牙',data16: '#FFFFF0',dataRGBa: 'rgba(255,255,240,1)'},
    {enname: 'LightYellow',         cnname: '浅黄色',data16: '#FFFFE0',dataRGBa: 'rgba(255,255,224,1)'},
    {enname: 'Yellow',              cnname: '纯黄',data16: '#FFFF00',dataRGBa: 'rgba(255,255,0,1)'},
    {enname: 'Olive',               cnname: '橄榄',data16: '#808000',dataRGBa: 'rgba(128,128,0,1)'},
    {enname: 'DarkKhaki',           cnname: '深卡其布',data16: '#BDB76B',dataRGBa: 'rgba(189,183,107,1)'},
    {enname: 'LemonChiffon',        cnname: '柠檬薄纱',data16: '#FFFACD',dataRGBa: 'rgba(255,250,205,1)'},
    {enname: 'PaleGodenrod',        cnname: '灰秋麒麟',data16: '#EEE8AA',dataRGBa: 'rgba(238,232,170,1)'},
    {enname: 'Khaki',               cnname: '卡其布',data16: '#F0E68C',dataRGBa: 'rgba(240,230,140,1)'},
    {enname: 'Gold',                cnname: '金',data16: '#FFD700',dataRGBa: 'rgba(255,215,0,1)'},
    {enname: 'Cornislk',            cnname: '玉米色',data16: '#FFF8DC',dataRGBa: 'rgba(255,248,220,1)'},
    {enname: 'GoldEnrod',           cnname: '秋麒麟',data16: '#DAA520',dataRGBa: 'rgba(218,165,32,1)'},
    {enname: 'FloralWhite',         cnname: '花的白色',data16: '#FFFAF0',dataRGBa: 'rgba(255,250,240,1)'},
    {enname: 'OldLace',cnname: '老饰带',data16: '#FDF5E6',dataRGBa: 'rgba(253,245,230,1)'},
    {enname: 'Wheat',cnname: '小麦色',data16: '#F5DEB3',dataRGBa: 'rgba(245,222,179,1)'},
    {enname: 'Moccasin',cnname: '鹿皮鞋',data16: '#FFE4B5',dataRGBa: 'rgba(255,228,181,1)'},
    {enname: 'Orange',cnname: '橙色',data16: '#FFA500',dataRGBa: 'rgba(255,165,0,1)'},
    {enname: 'PapayaWhip',cnname: '番木瓜',data16: '#FFEFD5',dataRGBa: 'rgba(255,239,213,1)'},
    {enname: 'BlanchedAlmond',cnname: '漂白的杏仁',data16: '#FFEBCD',dataRGBa: 'rgba(255,235,205,1)'},
    {enname: 'NavajoWhite',cnname: '纳瓦霍白',data16: '#FFDEAD',dataRGBa: 'rgba(255,222,173,1)'},
    {enname: 'AntiqueWhite',cnname: '古代的白色',data16: '#FAEBD7',dataRGBa: 'rgba(250,235,215,1)'},
    {enname: 'Tan',cnname: '晒黑',data16: '#D2B48C',dataRGBa: 'rgba(210,180,140,1)'},
    {enname: 'BrulyWood',cnname: '结实的树',data16: '#DEB887',dataRGBa: 'rgba(222,184,135,1)'},
    {enname: 'Bisque',cnname: '(浓汤)乳脂,番茄等',data16: '#FFE4C4',dataRGBa: 'rgba(255,228,196,1)'},
    {enname: 'DarkOrange',cnname: '深橙色',data16: '#FF8C00',dataRGBa: 'rgba(255,140,0,1)'},
    {enname: 'Linen',cnname: '亚麻布',data16: '#FAF0E6',dataRGBa: 'rgba(250,240,230,1)'},
    {enname: 'Peru',cnname: '秘鲁',data16: '#CD853F',dataRGBa: 'rgba(205,133,63,1)'},
    {enname: 'PeachPuff',cnname: '桃色',data16: '#FFDAB9',dataRGBa: 'rgba(255,218,185,1)'},
    {enname: 'SandyBrown',cnname: '沙棕色',data16: '#F4A460',dataRGBa: 'rgba(244,164,96,1)'},
    {enname: 'Chocolate',cnname: '巧克力',data16: '#D2691E',dataRGBa: 'rgba(210,105,30,1)'},
    {enname: 'SaddleBrown',cnname: '马鞍棕色',data16: '#8B4513',dataRGBa: 'rgba(139,69,19,1)'},
    {enname: 'SeaShell',cnname: '海贝壳',data16: '#FFF5EE',dataRGBa: 'rgba(255,245,238,1)'},
    {enname: 'Sienna',cnname: '黄土赭色',data16: '#A0522D',dataRGBa: 'rgba(160,82,45,1)'},
    {enname: 'LightSalmon',cnname: '浅鲜肉(鲑鱼)色',data16: '#FFA07A',dataRGBa: 'rgba(255,160,122,1)'},
    {enname: 'Coral',cnname: '珊瑚',data16: '#FF7F50',dataRGBa: 'rgba(255,127,80,1)'},
    {enname: 'OrangeRed',cnname: '橙红色',data16: '#FF4500',dataRGBa: 'rgba(255,69,0,1)'},
    {enname: 'DarkSalmon',cnname: '深鲜肉(鲑鱼)色',data16: '#E9967A',dataRGBa: 'rgba(233,150,122,1)'},
    {enname: 'Tomato',cnname: '番茄',data16: '#FF6347',dataRGBa: 'rgba(255,99,71,1)'},
    {enname: 'MistyRose',cnname: '薄雾玫瑰',data16: '#FFE4E1',dataRGBa: 'rgba(255,228,225,1)'},
    {enname: 'Salmon',cnname: '鲜肉(鲑鱼)色',data16: '#FA8072',dataRGBa: 'rgba(250,128,114,1)'},
    {enname: 'Snow',cnname: '雪',data16: '#FFFAFA',dataRGBa: 'rgba(255,250,250,1)'},
    {enname: 'LightCoral',cnname: '淡珊瑚色',data16: '#F08080',dataRGBa: 'rgba(240,128,128,1)'},
    {enname: 'RosyBrown',cnname: '玫瑰棕色',data16: '#BC8F8F',dataRGBa: 'rgba(188,143,143,1)'},
    {enname: 'IndianRed',cnname: '印度红',data16: '#CD5C5C',dataRGBa: 'rgba(205,92,92,1)'},
    {enname: 'Red',cnname: '纯红',data16: '#FF0000',dataRGBa: 'rgba(255,0,0,1)'},
    {enname: 'Brown',cnname: '棕色',data16: '#A52A2A',dataRGBa: 'rgba(165,42,42,1)'},
    {enname: 'FireBrick',cnname: '耐火砖',data16: '#B22222',dataRGBa: 'rgba(178,34,34,1)'},
    {enname: 'DarkRed',cnname: '深红色',data16: '#8B0000',dataRGBa: 'rgba(139,0,0,1)'},
    {enname: 'Maroon',cnname: '栗色',data16: '#800000',dataRGBa: 'rgba(128,0,0,1)'},
    {enname: 'White',cnname: '纯白',data16: '#FFFFFF',dataRGBa: 'rgba(255,255,255,1)'},
    {enname: 'WhiteSmoke',cnname: '白烟',data16: '#F5F5F5',dataRGBa: 'rgba(245,245,245,1)'},
    {enname: 'Gainsboro',cnname: '亮灰色',data16: '#DCDCDC',dataRGBa: 'rgba(220,220,220,1)'},
    {enname: 'LightGrey',cnname: '浅灰色',data16: '#D3D3D3',dataRGBa: 'rgba(211,211,211,1)'},
    {enname: 'Silver',cnname: '银白色',data16: '#C0C0C0',dataRGBa: 'rgba(192,192,192,1)'},
    {enname: 'DarkGray',cnname: '深灰色',data16: '#A9A9A9',dataRGBa: 'rgba(169,169,169,1)'},
    {enname: 'Gray',cnname: '灰色',data16: '#808080',dataRGBa: 'rgba(128,128,128,1)'},
    {enname: 'DimGray',cnname: '暗淡的灰色',data16: '#696969',dataRGBa: 'rgba(105,105,105,1)'},
    {enname: 'Black',cnname: '纯黑',data16: '#000000',dataRGBa: 'rgba(0,0,0,1)'}
];
export default datacolors;