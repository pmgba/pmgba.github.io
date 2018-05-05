poketoru = pw.poketoru = {

	stageTypes : ["","主线关卡","额外关卡","活动关卡"],
	
	eventTypes : ["","喵喵的硬币获得关卡","每日宝可梦","纪念关卡","超级挑战","排名关卡","宝可梦狩猎区","一天一机会！","比克提尼的经验值获得关卡","升级关卡","进化挑战","特级挑战","道具免费关卡","高速挑战","超级一天一机会！","道具获得关卡","特殊挑战","特殊每日宝可梦"],

	skillList : [ [''],
		['攻击要害','偶尔提高伤害。',[1.5,5,10,10,2,1.4,1.8,2,3.4,3,10,25,50]],
		['强力拳','有时能提高伤害。',[1.5,20,50,80,2,1.5,2,2.2,2.7,5,15,40,70]],
		['龙之爪','有时能提高伤害。',[1.5,40,70,100,1,10,15,20,30,5,15,40,70]],
		['4消之力','提高4消时的伤害。',[1.5,0,100,0,2,1.5,1.8,2.1,2.4,5,30,70,120]],
		['5消之力','提高5消时的伤害。',[1.5,0,0,100,2,1.5,1.8,2.1,2.4,5,30,70,120]],
		['最后之力','危机时提高伤害。',[5,50,100,100,2,1.2,1.5,2,3,5,20,40,100]],
		['连击','连续发动的话提高伤害。',[1.2,60,100,100,1,10,15,20,30,5,20,40,100]],
		['无休无止','连续发动的话提高伤害。',[1.2,60,100,100,2,1.1,1.3,1.5,2,5,20,40,100]],
		['上下浮动','随机提高伤害。',[1,50,70,100,2,1.5,1.8,2,2.5,2,9,30,70]],
		['虫之预感','危机时提高伤害。',[5,60,80,100,1,10,20,30,40,2,9,30,70]],
		['钢之心','危机时提高伤害。',[4,60,80,100,2,1.1,1.2,2.5,3.5,5,20,40,100]],
		['送神火','在连锁中提高火属性的伤害。',[2,50,100,100,1,10,20,30,40,5,30,70,120]],
		['龙连锁','在连锁中提高龙属性的伤害。',[2,60,100,100,1,10,15,20,30,5,20,40,100]],
		['总攻击','在连锁中提高格斗属性的伤害。',[2,15,50,100,1,20,25,40,50,5,30,70,120]],
		['妖精力量','在连锁中提高妖精属性的伤害。',[2,15,40,80,1,20,30,40,60,5,20,40,100]],
		['黑暗力量','在连锁中提高恶属性的伤害。',[2,15,40,80,1,20,30,40,60,5,20,40,100]],
		['结群','相同的宝可梦越多伤害越高。',[1,20,60,80,1,10,15,20,40,5,20,40,100]],
		['反击','干扰越多伤害越高。',[1,25,75,100,3,10,15,20,30,2,9,30,100]],
		['强力吸取','伤害随对手的剩余HP改变。',[1,15,30,60,1,5,10,20,30,3,10,25,50]],
		['震动','有时能提高伤害，并让对手麻痹。',[1.2,20,35,60,1,10,20,30,40,2,9,30,70]],
		['无畏','如果对手是幽灵属性，在连锁中提高伤害。',[1,10,50,100,2,1.2,1.4,1.5,2,2,9,30,70]],
		['击落','如果对手是飞行、虫或妖精属性的话，提高伤害。',[1,20,40,100,2,1.1,1.2,1.4,1.6,2,9,30,70]],
		['暴力','提高“效果不好”时的伤害。',[1,50,100,100,2,2,2.5,3,4,2,9,30,70]],
		['浮躁','有时能消除随机1个相同的宝可梦。',[1,30,50,100,1,30,40,50,70,3,10,25,50]],
		['浮躁+','有时能消除随机2个相同的宝可梦。',[1,25,35,100,1,10,20,40,65,2,9,30,70]],
		['恶作剧','有时能改变对手的干扰时间。',[1,20,40,100,1,10,20,30,40,3,10,25,50]],
		['消除干扰','有时能消除1个随机干扰。',[1,30,50,100,1,10,20,50,70,2,9,30,70]],
		['消除干扰+','有时能消除2个随机干扰。',[1,20,50,80,1,10,20,40,50,5,20,40,100]],
		['干扰破坏','有时能消除所有干扰。',[1,1,5,10,1,5,10,15,30,10,50,100,200]],
		['消除岩石','必定消除1个能破坏的岩石。',[1,100,100,100,2,1.5,1.7,1.8,2,3,10,25,50]],
		['清除黑云','必定消除1个黑云。',[1,100,100,100,2,1.5,1.7,1.8,2,3,10,25,50]],
		['打碎铁块','必定消除1个不能破坏的铁块。',[1,100,100,100,2,1.5,1.7,1.8,2,3,10,25,50]],
		['驱逐','必定消除对手的1只同伴。',[1,100,100,100,2,1.5,1.7,1.8,2,2,9,30,70]],
		['消除屏障','必定消除1个屏障。',[1,100,100,100,2,1.2,1.5,1.7,2,2,9,30,70]],
		['替换','有时能将干扰变成自己。',[1,30,50,100,1,20,30,50,70,3,10,25,50]],
		['寒气','让对手的干扰变慢。',[1,20,30,100,1,10,20,25,30,2,9,30,70]],
		['惊吓','让对手的干扰变慢。',[1,20,30,100,2,1.1,1.2,1.4,1.5,2,9,30,70]],
		['振翅','让对手的干扰变慢。',[1,20,30,100,2,1.1,1.2,1.4,1.5,5,20,40,100]],
		['遗忘','让对手的干扰变慢。',[1,10,40,100,1,5,10,20,25,5,20,40,100]],
		['烧伤施加','让对手烧伤。',[1,5,55,80,1,5,10,15,20,5,30,70,120]],
		['恐惧施加','让对手恐惧。',[1,5,45,80,1,10,15,20,30,5,20,40,100]],
		['冰冻施加','让对手冰冻。',[1,5,35,70,1,10,12,15,20,5,20,40,100]],
		['睡眠施加','让对手睡眠。',[1,5,30,80,1,10,15,18,25,5,20,40,100]],
		['麻痹施加','让对手麻痹。',[1,10,30,80,1,5,8,10,15,2,9,30,70]],
		['超级加速','填充相同属性的宝可梦的超级进化条。',[3,50,100,100,1,10,15,20,40,5,20,40,100]],
		['超力拳','有时能提高伤害。',[3,10,50,50,1,10,15,20,30,2,9,30,70]],
		['4消之力+','4消时大幅提高伤害。',[3,0,80,0,2,1.1,1.2,1.3,1.5,5,30,70,120]],
		['5消之力+','5消时大幅提高伤害。',[3,0,0,80,2,1.1,1.2,1.4,1.7,5,30,70,120]],
		['聚集之力','这只宝可梦越多伤害越高。',[1,25,70,90,3,10,20,30,50,5,20,40,100]],
		['一般连锁','在连锁中提高一般属性的伤害。',[4,20,60,80,1,5,10,15,20,5,20,40,100]],
		['超级加速+','大幅填充相同属性的宝可梦的超级进化条。',[6,50,100,100,1,5,10,20,30,5,30,70,120]],
		['高超级加速','超大幅填充相同属性的宝可梦的超级进化条。',[9,10,20,60,1,5,10,20,40,5,30,70,120]],
		['消除干扰++','有时能消除5个随机干扰。',[1,25,50,100,1,10,15,20,25,5,30,70,120]],
		['消除岩石+','有时能消除3个能破坏的岩石。',[1,50,100,100,1,10,15,20,30,5,30,70,120]],
		['消除岩石++','有时能消除5个能破坏的岩石。',[1,40,100,100,1,5,10,15,20,5,30,70,120]],
		['清除黑云+','有时能消除3个黑云。',[1,50,100,100,1,10,15,20,30,5,30,70,120]],
		['清除黑云++','有时能消除5个黑云。',[1,40,100,100,1,5,10,15,20,5,30,70,120]],
		['打碎铁块+','有时能消除3个不能破坏的铁块。',[1,50,100,100,1,10,15,20,30,5,30,70,120]],
		['铁块破坏','有时能消除5个不能破坏的铁块。',[1,40,100,100,1,5,10,15,20,5,30,70,120]],
		['驱逐+','有时能消除对手的3只同伴。',[1,50,100,100,1,10,15,20,30,5,30,70,120]],
		['驱逐++','有时能消除对手的5只同伴。',[1,40,100,100,1,5,10,15,20,5,30,70,120]],
		['消除屏障+','有时能消除3个屏障。',[1,50,100,100,1,10,15,20,30,5,30,70,120]],
		['消除屏障++','有时能消除5个屏障。',[1,40,100,100,1,5,10,15,20,5,30,70,120]],
		['替换+','有时能将干扰变成自己。',[1,25,50,100,1,10,20,30,35,5,30,70,120]],
		['替换++','有时能将大量干扰变成自己。',[1,20,50,100,1,5,10,20,30,5,30,70,120]],
		['震荡攻击','让对手麻痹。',[1,20,30,80,1,5,7,10,15,5,20,40,100]],
		['俯冲','有时能提高伤害。',[5,15,40,70,1,10,15,20,30,5,30,70,120]],
		['天空连锁','在连锁中提高飞行属性的伤害。',[2,10,60,90,1,5,10,15,20,5,30,70,120]],
		['毒之雾','伤害随对手的剩余HP改变。',[1,25,45,30,1,10,15,20,25,3,10,25,50]],
		['大雨','伤害随对手的剩余HP改变。',[1,25,45,30,1,10,15,20,25,3,10,25,50]],
		['超级伏特','偶尔能超大幅提高伤害。',[10,10,20,50,2,1.1,1.2,1.3,1.5,2,9,30,100]],
		['好运','配置这只宝可梦时道具的掉落几率提高。',[1.2,0,0,0,3,1.22,1.25,1.28,1.3,10,50,100,200]],
		['+形攻击','发生+形消除时提高伤害。',[3,100,100,100,2,1.1,1.2,1.4,1.5,2,9,30,100]],
		['L形攻击','发生L形消除时提高伤害。',[3,100,100,100,2,1.1,1.2,1.4,1.5,2,9,30,100]],
		['T形攻击','发生T形消除时提高伤害。',[3,100,100,100,2,1.1,1.2,1.4,1.5,2,9,30,100]],
		['声援','下次消除的宝可梦更容易发动能力。',[1,60,100,100,1,10,15,20,40,3,10,25,50]],
		['麻痹连锁','如果对手麻痹，提高连锁的伤害。',[1.5,40,60,100,1,20,25,30,40,2,9,30,70]],
		['睡眠连锁','如果对手睡眠，提高连锁的伤害。',[1.5,40,60,100,1,20,25,30,40,5,20,40,100]],
		['不留喘息','如果对手处于异常状态，提高连锁的伤害。',[1.2,70,80,100,2,1.2,1.3,1.5,1.7,5,20,40,100]],
		['毒连锁','在连锁中提高毒属性的伤害。',[2,40,60,80,1,10,20,30,50,5,30,70,120]],
		['冰之舞','在连锁中提高冰属性的伤害。',[1.8,30,50,70,1,10,15,20,30,5,20,40,100]],
		['地面连锁','在连锁中提高地面属性的伤害。',[2,20,60,80,1,15,20,25,30,5,20,40,100]],
		['团结','相同属性的宝可梦越多伤害越高。',[1,5,40,60,1,20,30,40,60,2,9,30,70]],
		['中毒施加','让对手中毒。',[1.2,10,40,70,1,5,10,20,30,5,20,40,100]],
		['叠毒','连续发动的话提高伤害。',[1.5,50,100,100,1,5,10,15,20,5,20,40,100]],
		['精神爆发','有时能大幅提高伤害。',[5,50,50,50,2,1.2,1.5,1.9,2.4,5,30,70,120]],
		['漩涡','让对手的干扰变慢。',[1,30,60,90,1,5,10,15,20,2,9,30,70]],
		['缠绕','让对手的干扰变得更慢。',[2,20,50,90,1,5,10,15,20,5,20,40,100]],
		['最后一步','提高剩余1步时的伤害。',[9,70,80,100,2,2,2.5,3,4,2,9,30,70]],
		['一击','提高5消时的伤害。',[4,0,0,90,2,1.5,2,3,4,10,50,100,200]],
		['龙之尾','有时能消除对手的2只同伴。',[1,80,80,80,2,2,2.2,2.5,3,5,20,40,100]],
		['龙之吼','让对手长时间麻痹。',[1,20,40,80,2,1.2,1.4,1.6,2,5,20,40,100]],
		['激怒','有时能让对手马上使用干扰。',[1,5,30,80,1,5,10,15,20,10,50,100,200]],
		['变成岩石','有时能将干扰的宝可梦变成岩石。',[1,60,80,100,1,5,10,15,20,2,9,30,70]],
		['变成铁块','有时能将干扰的宝可梦变成铁块。',[1,60,80,100,1,5,10,15,20,2,9,30,70]],
		['挖掘','将1个岩石变成硬币。',[1,3,10,30,1,2,5,10,15,10,50,100,200]],
		['炼金','将1个铁块变成硬币。',[1,3,10,30,1,2,5,10,15,10,50,100,200]],
		['变身','将最多3只与自己相同的宝可梦变成其它宝可梦。',[1,50,100,100,1,5,10,20,30,5,20,40,100]],
		['巨浪','在连锁中提高水属性的伤害。',[2,30,60,90,1,5,10,15,20,5,20,40,100]],
		['电导','在连锁中提高电属性的伤害。',[2,20,60,90,1,10,20,30,40,5,30,70,120]],
		['金属连锁','在连锁中提高钢属性的伤害。',[2,5,100,100,1,10,15,25,45,15,45,100,150]],
		['幻影连锁','在连锁中提高幽灵属性的伤害。',[2,5,100,100,1,10,15,25,45,15,45,100,150]],
		['暗影舞','5消时，在连锁中提高幽灵属性的伤害。',[3,0,0,70,1,5,10,20,30,2,9,27,54]],
		['无属性连锁','在连锁中提高所有属性的伤害。',[2.5,40,40,40,1,10,15,20,35,15,45,100,150]],
		['绿叶连锁','在连锁中提高草属性的伤害。',[2,30,60,90,1,10,15,20,30,5,30,70,120]],
		['岩石连锁','在连锁中提高岩石属性的伤害。',[2,30,60,90,1,10,15,20,30,5,30,70,120]],
		['虫群连锁','在连锁中提高虫属性的伤害。',[2,30,60,90,1,10,15,20,30,5,30,70,120]],
		['精神连锁','在连锁中提高超能力属性的伤害。',[2,10,60,90,1,10,15,20,30,5,30,70,120]],
		['毒猛攻','如果对手处于中毒状态，提高连锁的伤害。',[2,60,70,100,1,10,20,30,40,2,9,30,70]],
		['+形攻击+','发生+形消除时大幅提高伤害。',[4,80,90,100,2,1.1,1.2,1.5,3,5,30,70,120]],
		['三之力','提高3消时的伤害。',[2,100,0,0,2,1.2,1.5,2,2.5,2,9,30,70]],
		['全力','偶尔能超大幅提高4消时的伤害。',[10,0,10,0,1,10,15,20,30,5,20,40,100]],
		['粉碎','有时能超大幅提高4消时的伤害。',[9,0,80,0,1,2,4,6,9,3,11,23,61]],
		['断绝','偶尔能超大幅提高5消时的伤害。',[1,0,0,35,1,10,15,20,35,5,30,70,120]],
		['超级飞箭','偶尔能超大幅提高4消时的伤害。',[8,0,30,0,1,5,10,15,20,5,30,70,120]],
		['超级撞击','偶尔能超大幅提高4消时的伤害。',[8,0,30,0,1,5,10,15,20,5,30,70,120]],
		['超级声音','偶尔能超大幅提高4消时的伤害。',[8,0,30,0,1,5,10,15,20,5,30,70,120]],
		['牵绊之力','有时能提高伤害。',[5,25,40,80,2,1.2,1.5,1.8,2.4,5,20,40,100]],
		['4消提升','提高4消时的伤害。',[1.5,0,100,0,2,1.5,1.8,2,2.2,2,9,27,54]],
		['异兽之力','偶尔能超大幅提高伤害。',[7,17,53,73,2,1.1,1.2,1.3,1.4,3,11,23,61]],
		['认真起来','偶尔能超大幅提高伤害。',[10,10,20,50,2,1.2,1.5,1.8,2.5,10,50,100,200]],
		['5消提升','提高5消时的伤害。',[1.5,0,0,100,2,1.5,1.8,2,2.2,2,9,27,54]],
		['究极伏特','危机时大幅提高伤害。',[7,70,70,70,2,1.2,1.3,1.5,2,5,30,70,120]],
		['无休无止+','连续发动的话大幅提高伤害。',[2,20,40,60,2,1.1,1.3,1.5,2,5,30,70,120]],
		['节节升高','连续发动的话大幅提高伤害。',[2,20,50,100,1,20,30,40,50,10,50,100,200]],
		['连击+','连续发动的话大幅提高伤害。',[1.5,60,60,60,1,5,10,15,20,5,30,70,120]],
		['大胃王','伤害随对手的剩余HP改变。',[1,40,70,90,1,3,5,7,9,5,30,70,120]],
		['高级吸取','伤害随对手的剩余HP改变。',[1,0,60,100,1,10,20,25,30,2,9,30,70]],
		['吸取','伤害随对手的剩余HP改变。',[1,60,70,100,1,5,10,15,20,3,10,25,50]],
		['反击+','干扰越多伤害越高。',[1,20,50,70,1,10,15,20,30,5,30,70,120]],
		['结群+','相同的宝可梦越多伤害越高。',[1,15,40,80,1,10,25,30,40,5,20,40,100]],
		['岩石弹射','消除2个岩石，并提高伤害。',[2,60,100,100,2,1.5,2,3,4,5,30,70,120]],
		['浮躁++','偶尔能消除随机5只相同的宝可梦。',[1,10,25,100,1,15,25,45,75,5,30,70,120]],
		['暗中偷袭','有时能消除随机2只相同的宝可梦。',[1,60,100,100,2,2,2.5,3,4,5,20,40,100]],
		['黑云弹射','消除2个黑云，并提高伤害。',[2,60,100,100,2,1.5,2,3,4,5,30,70,120]],
		['屏障弹射','消除2个屏障，并提高伤害。',[2,60,100,100,2,1.5,2,3,4,5,30,70,120]],
		['屏障破坏','偶尔能消除全部屏障。',[1,20,40,70,1,10,20,25,40,5,30,70,120]],
		['弹开','消除对手的2个同伴，并提高伤害。',[2,60,100,100,2,1.5,2,3,4,5,30,70,120]],
		['排除','偶尔能消除对手的全部同伴。',[1,35,45,65,1,5,7,10,13,5,30,70,120]],
		['铁块关闭','偶尔能消除10个不能破坏的铁块。',[1,20,30,60,1,10,20,30,40,5,30,70,120]],
		['破坏','消除1个不能破坏的铁块，并大幅提高伤害。',[5,80,90,100,2,1.2,1.4,1.6,1.8,10,50,100,200]],
		['铁块弹射','消除2个不能破坏的铁块，并提高伤害。',[2,60,100,100,2,1.5,2,3,4,5,30,70,120]],
		['冰冻施加+','偶尔能让对手长时间冰冻。',[1,0,35,70,1,10,15,25,30,5,30,70,120]],
		['恐惧施加+','有时能让对手长时间恐惧。',[1,0,45,80,1,10,15,20,30,5,20,40,100]],
		['魅惑','让对手的干扰变慢。',[1,30,30,30,1,5,10,15,30,5,20,40,100]],
		['暗影冲击','让对手的干扰变慢，并大幅提高伤害。',[3,15,50,100,2,1.5,2,3,3.5,5,30,70,120]],
		['踩踏','让对手的干扰变慢，并提高伤害。',[2,30,40,50,2,1.2,1.5,2,2.5,5,20,40,100]],
		['强力拥抱','让对手的干扰变慢，并大幅提高伤害。',[5,30,50,80,2,1.2,1.5,1.8,2,3,10,25,50]],
		['恐吓','让对手的干扰变慢，并提高伤害。',[1.5,70,70,70,2,1.2,1.5,1.8,2,2,9,30,70]],
		['睡意加深','让对手睡眠。',[1,30,60,90,1,5,10,15,20,5,20,40,100]],
		['麻痹施加+','偶尔能长时间让对手麻痹。',[1,1,15,65,1,4,6,8,10,2,9,30,70]],
		['闪电','让对手麻痹。',[1,40,70,90,2,1.2,1.5,2,2.5,5,20,40,100]],
		['烧伤施加+','偶尔能让对手更长时间灼伤。',[1,5,25,50,1,15,25,40,50,5,30,70,120]],
		['凭依','让对手的干扰变慢。',[1,40,40,40,1,10,15,20,33,5,20,40,100]],
		['安抚','让对手的干扰变慢。',[1,20,40,70,1,5,7,10,15,5,20,40,100]],
		['玩沙','让对手的干扰变得更慢。',[1,20,40,80,2,1.5,2,3,4,5,20,40,100]],
		['变成岩石+','有时能将10只干扰的宝可梦变成岩石。',[1,25,40,70,1,10,20,30,40,5,30,70,120]],
		['变成铁块+','有时能将10只干扰的宝可梦变成铁块。',[1,25,40,70,1,10,20,30,40,5,30,70,120]],
		['超级声援','下次消除的宝可梦必定发动能力。',[1,10,40,70,1,10,15,20,30,15,45,100,150]],
		['岩石弹射α','消除7个可以破坏的岩石，并提高伤害。',[2,50,100,100,2,2,3,4,5,10,50,100,200]],
		['屏障弹射Ω','消除7个屏障，并提高伤害。',[2,50,100,100,2,2,3,4,5,10,50,100,200]],
		['捉迷藏','偶尔能消除7个相同的宝可梦。',[1,40,50,60,1,10,20,30,40,15,45,100,150]],
		['接力冲刺','连续发动的话提高伤害。',[1.5,100,100,100,2,1.5,2,2.5,3,5,30,70,120]]
	],

	megaEffects : [ '',
		'消除上下5格的所有宝可梦。',
		'消除左右5格的所有宝可梦。',
		'消除上下4格的所有宝可梦。',
		'消除左右4格的所有宝可梦。',
		'消除上下3格的所有宝可梦。',
		'消除左右3格的所有宝可梦。',
		'消除周围1格的所有宝可梦。',
		'消除周围2格的所有宝可梦。',
		'消除周围3格的所有宝可梦。',
		'消除从右上角到左下角的对角线上的宝可梦。',
		'消除从左上角到右下角的对角线上的宝可梦。',
		'按X形消除宝可梦。',
		'按Y形消除宝可梦。',
		'按O形消除宝可梦。',
		'按V形消除宝可梦。',
		'纵向落下雷电，锯齿形消除宝可梦。',
		'随机落下雷电，锯齿形消除宝可梦。',
		'消除所有$1。',
		'消除一种与$1的属性相同的宝可梦最多10只。',
		'消除最多10个岩石或不能破坏的铁块，并对敌人造成伤害。',
		'将最多3只相同属性的宝可梦变成$1。',
		'$1向上增加1只。',
		'$1向左增加1只。',
		'从右上到左下斜线消除宝可梦。',
		'从左上到右下斜线消除宝可梦。',
		'消除最多10个岩石，并对敌人造成伤害。',
		'消除最多10个不能破坏的铁块，并对敌人造成伤害。',
		'消除最多10只屏障内的宝可梦。',
		'消除一种与$1的属性不同的宝可梦最多10只。',
		'横向锯齿形消除宝可梦。',
		'消除中间的所有宝可梦。',
		'横向随机锯齿形消除宝可梦。',
		'垂直锯齿形消除宝可梦。',
		'垂直随机锯齿形消除宝可梦。',
		'按横向的V形消除宝可梦。',
		'以点击的一个位置为中心，消除周围的宝可梦与干扰。',
		'以点击的二个位置为中心，消除周围的宝可梦与干扰。',
		'以点击的三个位置为中心，消除周围的宝可梦与干扰。'
	],

	typeEffects : [
		[ 1.0, 1.0, 1.0, 1.0, 1.0, 0.5, 1.0, 0.5, 0.5, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0 ], 
		[ 2.0, 1.0, 0.5, 0.5, 1.0, 2.0, 0.5, 0.5, 2.0, 1.0, 1.0, 1.0, 1.0, 0.5, 2.0, 1.0, 2.0, 0.5 ], 
		[ 1.0, 2.0, 1.0, 1.0, 1.0, 0.5, 2.0, 1.0, 0.5, 1.0, 1.0, 2.0, 0.5, 1.0, 1.0, 1.0, 1.0, 1.0 ], 
		[ 1.0, 1.0, 1.0, 0.5, 0.5, 0.5, 1.0, 0.5, 0.5, 1.0, 1.0, 2.0, 1.0, 1.0, 1.0, 1.0, 1.0, 2.0 ], 
		[ 1.0, 1.0, 0.5, 2.0, 1.0, 2.0, 0.5, 1.0, 2.0, 2.0, 1.0, 0.5, 2.0, 1.0, 1.0, 1.0, 1.0, 1.0 ], 
		[ 1.0, 0.5, 2.0, 1.0, 0.5, 1.0, 2.0, 1.0, 0.5, 2.0, 1.0, 1.0, 1.0, 1.0, 2.0, 1.0, 1.0, 1.0 ], 
		[ 1.0, 0.5, 0.5, 0.5, 1.0, 1.0, 1.0, 0.5, 0.5, 0.5, 1.0, 2.0, 1.0, 2.0, 1.0, 1.0, 2.0, 0.5 ], 
		[ 0.5, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 2.0, 1.0, 1.0, 1.0, 1.0, 1.0, 2.0, 1.0, 1.0, 0.5, 1.0 ], 
		[ 1.0, 1.0, 1.0, 1.0, 1.0, 2.0, 1.0, 1.0, 0.5, 0.5, 0.5, 1.0, 0.5, 1.0, 2.0, 1.0, 1.0, 2.0 ], 
		[ 1.0, 1.0, 1.0, 1.0, 1.0, 0.5, 2.0, 1.0, 2.0, 0.5, 0.5, 2.0, 1.0, 1.0, 2.0, 0.5, 1.0, 1.0 ], 
		[ 1.0, 1.0, 1.0, 1.0, 2.0, 2.0, 1.0, 1.0, 1.0, 2.0, 0.5, 0.5, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0 ], 
		[ 1.0, 1.0, 0.5, 0.5, 2.0, 2.0, 0.5, 1.0, 0.5, 0.5, 2.0, 0.5, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0 ], 
		[ 1.0, 1.0, 2.0, 1.0, 0.5, 1.0, 1.0, 1.0, 1.0, 1.0, 2.0, 0.5, 0.5, 1.0, 1.0, 0.5, 1.0, 1.0 ], 
		[ 1.0, 2.0, 1.0, 2.0, 1.0, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 0.5, 1.0 ], 
		[ 1.0, 1.0, 2.0, 1.0, 2.0, 1.0, 1.0, 1.0, 0.5, 0.5, 0.5, 2.0, 1.0, 1.0, 0.5, 2.0, 1.0, 1.0 ], 
		[ 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 2.0, 1.0, 0.5 ], 
		[ 1.0, 0.5, 1.0, 1.0, 1.0, 1.0, 1.0, 2.0, 1.0, 1.0, 1.0, 1.0, 1.0, 2.0, 1.0, 1.0, 0.5, 0.5 ], 
		[ 1.0, 2.0, 1.0, 0.5, 1.0, 1.0, 1.0, 1.0, 0.5, 0.5, 1.0, 1.0, 1.0, 1.0, 1.0, 2.0, 2.0, 1.0 ]
	],

	maxPower : [	[],
		[ 0,30,35,39,42,45,47,49,51,53,55,61,67,73,79,85,88,91,94,97,100,102,104,106,108,110,112,114,116,118,120 ],
		[ 0,40,43,46,48,50,52,54,56,58,60,66,72,78,84,90,93,96,99,102,105,107,109,111,113,115,117,119,121,123,125 ],
		[ 0,50,53,56,58,60,62,64,66,68,70,75,80,85,90,100,103,106,109,112,115,116,117,118,119,120,122,124,126,128,130 ],
		[ 0,60,63,66,68,70,72,74,76,78,80,84,88,92,96,105,108,111,114,117,120,121,122,123,124,125,127,129,131,133,135 ],
		[ 0,70,73,76,78,80,82,84,86,88,90,93,96,99,102,110,113,116,119,122,125,126,127,128,129,130,132,134,136,138,140 ],
		[ 0,80,83,86,88,90,92,94,96,98,100,102,104,106,108,115,118,121,124,127,130,131,132,133,134,135,137,139,141,143,145 ],
		[ 0,90,93,96,98,100,102,104,106,108,110,112,114,116,118,120,123,126,129,132,135,136,137,138,139,140,142,144,146,148,150 ]
	],

	megaList : {
		"003.00" : ["003.01"],
		"006.00" : ["006.01","006.02"],
		"009.00" : ["009.01"],
		"015.00" : ["015.01"],
		"018.00" : ["018.01"],
		"065.00" : ["065.01"],
		"080.00" : ["080.01"],
		"094.00" : ["094.01"],
		"115.00" : ["115.01"],
		"127.00" : ["127.01"],
		"130.00" : ["130.01"],
		"142.00" : ["142.01"],
		"150.00" : ["150.01","150.02"],
		"181.00" : ["181.01"],
		"208.00" : ["208.01"],
		"212.00" : ["212.01"],
		"214.00" : ["214.01"],
		"229.00" : ["229.01"],
		"248.00" : ["248.01"],
		"254.00" : ["254.01"],
		"257.00" : ["257.01"],
		"260.00" : ["260.01"],
		"282.00" : ["282.01"],
		"302.00" : ["302.01"],
		"303.00" : ["303.01"],
		"306.00" : ["306.01"],
		"308.00" : ["308.01"],
		"310.00" : ["310.01"],
		"319.00" : ["319.01"],
		"323.00" : ["323.01"],
		"334.00" : ["334.01"],
		"354.00" : ["354.01"],
		"359.00" : ["359.01"],
		"362.00" : ["362.01"],
		"373.00" : ["373.01"],
		"376.00" : ["376.01"],
		"380.00" : ["380.01"],
		"381.00" : ["381.01"],
		"384.00" : ["384.01"],
		"428.00" : ["428.01"],
		"445.00" : ["445.01"],
		"448.00" : ["448.01"],
		"460.00" : ["460.01"],
		"475.00" : ["475.01"],
		"531.00" : ["531.01"],
		"719.00" : ["719.01"],
		"094.02" : ["094.03"],
		"130.02" : ["130.03"],
		"302.02" : ["302.03"],
		"362.02" : ["362.03"],
		"384.02" : ["384.03"],
		"531.02" : ["531.03"],
		"006.03" : ["006.04","006.05"],
		"094.04" : ["094.05"],
		"150.03" : ["150.04","150.05"],
		"248.02" : ["248.03"],
		"282.02" : ["282.03"],
		"376.02" : ["376.03"],
		"719.02" : ["719.03"]
	},

	
	extendFormNames : {

		"421.00":"",
		"555.00":"",
		"681.00":"",
		"710.00":"",
		"711.00":"",
		"716.00":"",
		"745.00":"",
		"778.00":"",

		"658.01":"小智版甲贺忍蛙",
		"666.00":"花园花纹",
		"666.01":"球球花纹",
		"718.00":["50%形态","{0}·{1}"],
		"718.01":["10%形态","{0}·{1}"],
		"718.02":["完全体形态","{0}·{1}"],
		"718.03":["核心","{0}·{1}"],
		"718.04":["细胞","{0}·{1}"],

		"006.04":["异色的样子","超级{0}～{1}～"],
		"006.05":["异色的样子","超级{0}～{1}～"],
		"094.03":["万圣节","超级{0}～{1}～"],
		"094.05":["异色的样子","超级{0}～{1}～"],
		"130.03":["异色的样子","超级{0}～{1}～"],
		"150.04":["异色的样子","超级{0}～{1}～"],
		"150.05":["异色的样子","超级{0}～{1}～"],
		"248.03":["异色的样子","超级{0}～{1}～"],
		"302.03":["万圣节","超级{0}～{1}～"],
		"362.03":["眨眼","超级{0}～{1}～"],
		"384.03":["异色的样子","超级{0}～{1}～"],
		"531.03":["眨眼","超级{0}～{1}～"],
		"719.03":["异色的样子","超级{0}～{1}～"],

		"202.00":"雄性的样子",
		"202.01":"雌性的样子",
		"449.00":"雄性的样子",
		"449.01":"雌性的样子",
		"450.00":"雄性的样子",
		"450.01":"雌性的样子",
		"521.00":"雄性的样子",
		"521.01":"雌性的样子",
		"592.00":"雄性的样子",
		"592.01":"雌性的样子",
		"593.00":"雄性的样子",
		"593.01":"雌性的样子",
		"668.00":"雄性的样子",
		"668.01":"雌性的样子",
		"678.00":"雄性的样子",
		"678.01":"雌性的样子",
		
		"006.03":"异色的样子",
		"094.04":"异色的样子",
		"129.01":"异色的样子",
		"130.02":"异色的样子",
		"150.03":"异色的样子",
		"248.02":"异色的样子",
		"250.01":"异色的样子",
		"282.02":"异色的样子",
		"376.02":"异色的样子",
		"384.02":"异色的样子",
		"701.01":"异色的样子",
		"716.01":"异色的样子",
		"717.01":"异色的样子",
		"719.02":"异色的样子",
		
		"001.01":"眨眼",
		"004.01":"眨眼",
		"007.01":"眨眼",
		"025.01":"生气",
		"025.02":"眨眼",
		"025.03":"睡眠",
		"025.04":"失望",
		"025.05":"干劲",
		"025.06":"吃惊",
		"025.07":"爱心",
		"025.08":"泪眼",
		"025.09":"失望",
		"025.10":"微笑",
		"025.11":"眩晕",
		"025.12":"开心",
		"025.13":"万圣节",
		"025.14":"圣诞节",
		"025.15":"斗篷",
		"025.16":"斗篷",
		"025.17":"斗篷",
		"025.18":"斗篷",
		"025.19":"斗篷",
		"025.20":"斗篷",
		"025.21":"公家大人",
		"025.22":"舞妓",
		"025.23":"斗篷",
		"025.24":"斗篷",
		"025.25":"月份",
		"025.26":"月份",
		"025.27":"月份",
		"025.28":"月份",
		"025.29":"月份",
		"025.30":"月份",
		"025.31":"月份",
		"025.32":"月份",
		"025.33":"月份",
		"025.34":"月份",
		"025.35":"月份",
		"025.36":"月份",
		"026.01":"眨眼",
		"035.01":"眨眼",
		"036.01":"眨眼",
		"039.01":"眨眼",
		"040.01":"眨眼",
		"094.02":"万圣节",
		"113.01":"眨眼",
		"152.01":"眨眼",
		"155.01":"眨眼",
		"158.01":"眨眼",
		"176.01":"眨眼",
		"183.01":"眨眼",
		"184.01":"眨眼",
		"187.01":"眨眼",
		"188.01":"眨眼",
		"189.01":"眨眼",
		"209.01":"眨眼",
		"210.01":"眨眼",
		"225.01":"圣诞节",
		"242.01":"眨眼",
		"252.01":"眨眼",
		"255.01":"眨眼",
		"258.01":"眨眼",
		"285.01":"眨眼",
		"301.01":"眨眼",
		"302.02":"万圣节",
		"311.01":"眨眼",
		"312.01":"眨眼",
		"351.01":"眨眼",
		"361.01":"眨眼",
		"362.02":"眨眼",
		"387.01":"眨眼",
		"390.01":"眨眼",
		"393.01":"眨眼",
		"407.01":"眨眼",
		"417.01":"眨眼",
		"420.01":"眨眼",
		"421.01":"眨眼",
		"459.01":"圣诞节",
		"468.01":"眨眼",
		"489.01":"眨眼",
		"490.01":"眨眼",
		"495.01":"眨眼",
		"498.01":"眨眼",
		"501.01":"眨眼",
		"531.02":"眨眼",
		"546.01":"眨眼",
		"547.01":"眨眼",
		"582.01":"圣诞节",
		"613.01":"圣诞节",
		"650.01":"眨眼",
		"653.01":"眨眼",
		"656.01":"眨眼",
		"669.01":"眨眼",
		"670.01":"眨眼",
		"683.01":"眨眼",
		"684.01":"眨眼",
		"685.01":"眨眼",
		"702.01":"眨眼",
		"703.01":"眨眼",
		"710.01":"万圣节",
		"711.01":"万圣节",
		
		"019.01":"阿罗拉的样子",
		"020.01":"阿罗拉的样子",
		"025.37":"初始帽子",
		"025.38":"丰缘帽子",
		"025.39":"神奥帽子",
		"025.40":"合众帽子",
		"025.41":"卡洛斯帽子",
		"025.42":"阿罗拉帽子",
		"026.02":"阿罗拉的样子",
		"027.01":"阿罗拉的样子",
		"028.01":"阿罗拉的样子",
		"037.01":"阿罗拉的样子",
		"038.01":"阿罗拉的样子",
		"050.01":"阿罗拉的样子",
		"051.01":"阿罗拉的样子",
		"052.01":"阿罗拉的样子",
		"053.01":"阿罗拉的样子",
		"074.01":"阿罗拉的样子",
		"075.01":"阿罗拉的样子",
		"076.01":"阿罗拉的样子",
		"088.01":"阿罗拉的样子",
		"089.01":"阿罗拉的样子",
		"103.01":"阿罗拉的样子",
		"105.01":"阿罗拉的样子"

	},
	pokemonData : {},
	pokemonList : {},
	sortedPokemonList : [],

	getPokemonData : function ( pkmnID ) {
		if ( !(pkmnID in pw.poketoru.pokemonData) ) return false;
		if ( pkmnID in pw.poketoru.pokemonList ) return pw.poketoru.pokemonList[pkmnID];
		pkmnData = pw.poketoru.pokemonData[pkmnID];
		var pkmnNumber = pkmnID.split('.')[0];
		var pkmnForm = pkmnID.split('.')[1];
		var pkmnName = pw.util.getPokemonName(pkmnID)
		var pkmn = {
			id    : pkmnID,
			name  : pkmnName[0],
			form  : pkmnName[1],
			dex   : String('00' + pkmnData[0]).slice(-3),
			type  : pkmnData[1],
			power : pw.poketoru.maxPower[pkmnData[2]][1],
			rml   : pkmnData[4],
			rank  : pkmnData[5],
			category : pkmnData[2],
			skills : [pkmnData[3]],
			hasMega : ( pkmnID in pw.poketoru.megaList )
		}
		if ( pkmnData.length >= 10 ) $.extend( pkmn, pkmnData[9] );
		if ( "sw" in pkmn ) $.each( pkmn.sw, function(i,v) { pkmn.skills.push(v); } );
		pkmn.isMega = ( "mb" in pkmn );
		pkmn.maxLevel = 10 + (pkmn.rml||0);
		pkmn.maxPower = pw.poketoru.maxPower[pkmn.category][pkmn.maxLevel];

		var pkmnLoc = '';
		if ( pkmnData[6] ) pkmnLoc += '<div>'+pw.poketoru.stageTypes[1] + pkmnData[6] + '关'+'</div>';
		if ( pkmnData[8] ) pkmnLoc += '<div>'+pw.poketoru.stageTypes[2] + pkmnData[8] + '关'+'</div>';
		if ( pkmnData[7] ) pkmnLoc += '<div><img src="/w/images/thumb/b/ba/Shuffle_Gift.png/16px-Shuffle_Gift.png" width="16" height="16">'+pw.poketoru.stageTypes[1] + pkmnData[7] + '关'+'</div>';
		if ( !pkmnData[6] && !pkmnData[7] && !pkmnData[8] ) pkmnLoc += '<div>'+pw.poketoru.stageTypes[3]+'</div>';
		pkmn.loc = pkmnLoc;

		pw.poketoru.pokemonList[pkmnID] = pkmn;
		return pkmn;
	},

	loadAllPokemon : function() {
		pw.poketoru.sortedPokemonList = $.map( pw.poketoru.pokemonData, function(data, pkmnID){
			var pkmn = pw.poketoru.getPokemonData(pkmnID);
			if ( !pkmn.isMega ) return pkmn;
		}).sort(function(pkmn1, pkmn2) {
			return pkmn1.dex - pkmn2.dex;
		});
	},

	getPoketoruIconSrc : function ( pkmnID ) {
		return pw.util.getResUrl('/sprites/side/shuffle/pokemon/'+pkmnID+'.png');
	},

	$popup : $( '<div class="poketoruTip">'
		+ '	<table class="poketoruTip-row"><tr>'
		+ '		<td class="poketoruTip-name"></td>'
		+ '		<td class="poketoruTip-form"></td>'
		+ '	</tr></table>'
		+ '	<table class="poketoruTip-row"><tr>'
		+ '		<td class="poketoruTip-img"></td>'
		+ '		<td>'
		+ '			<table class="poketoruTip-data">'
		+ '				<tr><td>属性</td><td class="poketoruTip-type"></td></tr>'
		+ '				<tr><td>攻击力</td><td class="poketoruTip-attack"></td></tr>'
		+ '				<tr><td>最大等级</td><td class="poketoruTip-rml"><img src="/w/images/thumb/b/b9/Shuffle_Raise_Max_Level.png/32px-Shuffle_Raise_Max_Level.png" width="16" height="16">0/<span class="value"></span></td></tr>'
		+ '			</table>'
		+ '		</td>'
		+ '	</tr></table>'
		+ '	<table class="poketoruTip-row"><tr>'
		+ '		<td class="poketoruTip-loc"></td>'
		+ '	</tr></table>'
		+ '</div>'
	),

	skillHtml : '<tr class="poketoruTip-skill"><td class="poketoruTip-skillname"></td><td class="poketoruTip-skilltext"></td></tr>',

	megaHtml : ''
		+ '	<table class="poketoruTip-row poketoruTip-mega"><tr>'
		+ '		<td class="poketoruTip-img"></td>'
		+ '		<td>'
		+ '			<table class="poketoruTip-data">'
		+ '				<tr><td>属性</td><td class="poketoruTip-type"></td></tr>'
		+ '				<tr><td>进化速度</td><td class="poketoruTip-megabar"><img src="/w/images/thumb/2/27/Shuffle_Mega_Start.png/16px-Shuffle_Mega_Start.png" width="16" height="16" ><span class="value1"></span> - <img src="/w/images/thumb/e/e7/Shuffle_Mega_Speedup.png/16px-Shuffle_Mega_Speedup.png" width="16" height="16"><span class="value2"></span></td></tr>'
		+ '				<tr><td>超级进化效果</td><td class="poketoruTip-megaeffects"></td></tr>'
		+ '			</table>'
		+ '		</td>'
		+ '	</tr></table>',

	updatePoketoruTip : function( pkmnID, extra ) {
		var pkmnNumber = pkmnID.split('.')[0];
		var pkmnForm = pkmnID.split('.')[1];

		var pkmn = pw.poketoru.getPokemonData(pkmnID);
		if ( !pkmn ) return false;
		if ( pkmn.isMega ) {
			$.each( pw.poketoru.megaList, function(k,v) {
				if ( $.inArray( pkmnID, v )>-1 ) {
					pkmnID = k;
					return false;
				}
			});
			pkmn = pw.poketoru.getPokemonData(pkmnID);
			if ( !pkmn ) return false;
		}
		
		var pkmnPower = pw.poketoru.maxPower[pkmn.category][1] + '～' + pw.poketoru.maxPower[pkmn.category][10];
		if ( !!pkmn.rml ) pkmnPower += '～' + pw.poketoru.maxPower[pkmn.category][10+pkmn.rml];

		var title = '<a href="' + mw.util.getUrl('宝可消消乐/宝可梦') + '#' + pkmnID + '">' + pkmn.dex + ' ' + pkmn.name + '</a>';

		pw.poketoru.$popup.find('.poketoruTip-img').html('<img src="' + pw.poketoru.getPoketoruIconSrc(pkmnID) + '" />');
		pw.poketoru.$popup.find('.poketoruTip-name').html(title);
		pw.poketoru.$popup.find('.poketoruTip-form').html(pkmn.form);
		pw.poketoru.$popup.find('.poketoruTip-type').html(pw.util.createColorlabel('span','type',pkmn.type,null,'colorlabel-fixed'));
		pw.poketoru.$popup.find('.poketoruTip-attack').html(pkmnPower);
		pw.poketoru.$popup.find('.poketoruTip-skill').remove();
		$.each( pkmn.skills, function(i,s){
			var $skill = $(pw.poketoru.skillHtml);
			var skillname = pw.poketoru.skillList[s][0];
			skillname = '<a href="' + mw.util.getUrl('宝可消消乐/能力') + '#skill-' + s + '">' + skillname + '</a>';
			if ( i > 0 ) { skillname = '<img src="/w/images/thumb/e/e1/Shuffle_Skill_Swapper.png/16px-Shuffle_Skill_Swapper.png" />' + skillname; }
			$skill.find('.poketoruTip-skillname').html(skillname);
			var skilltext = pw.poketoru.skillList[s][1];
			if ( extra && extra['sb'] ) {
				var skillexp = pw.poketoru.skillList[s][2][12];
				var cost = extra['cost'] || 1;
				var plays = Math.ceil(skillexp/extra['sb']);
				var playsi = Math.ceil(skillexp/extra['sbi']);
				skilltext += '<br>('+(plays*cost)+'/'+(playsi*cost)+(cost>3?'硬币':'体力')+')';
			}
			$skill.find('.poketoruTip-skilltext').html(skilltext);
			pw.poketoru.$popup.find('.poketoruTip-data tbody').append($skill);
		});
		pw.poketoru.$popup.find('.poketoruTip-loc').html(pkmn.loc);
		if ( !!pkmn.rml ) pw.poketoru.$popup.find('.poketoruTip-rml .value').html(pkmn.rml);
		pw.poketoru.$popup.find('.poketoruTip-mega').remove();
		if ( pkmn.hasMega ) {
			$.each( pw.poketoru.megaList[pkmnID], function(i, megaID) {
				var $mega = $(pw.poketoru.megaHtml);
				var mega = pw.poketoru.getPokemonData(megaID);
				var megaEffects = pw.poketoru.megaEffects[mega.skills[0]].replace('$1',mega.name);
				$mega.find('.poketoruTip-img').html('<img src="' + pw.poketoru.getPoketoruIconSrc(megaID) + '" />');
				$mega.find('.poketoruTip-type').html(pw.util.createColorlabel('span','type',mega.type,null,'colorlabel-fixed'));
				$mega.find('.poketoruTip-megabar .value1').html(mega.mb);
				$mega.find('.poketoruTip-megabar .value2').html(mega.msu);
				$mega.find('.poketoruTip-megaeffects').html(megaEffects);
				pw.poketoru.$popup.find('.poketoruTip-row:last-child').before($mega);
			});
		}

		return pw.poketoru.$popup;
	},

	createPoketoruTooltips: function() {
		$('.shufflepokemon').webuiPopover('destroy');
		$('.shufflepokemon:not(.shufflepokemon-tipped, a *)').webuiPopover({
			trigger: 'hover',
			placement: 'top',
			cache: false,
			padding: false,
			width: 310,
			content: function() {
				var $this = $(this);
				var pid = $this.data('pid').toString();
				var extra = $this.data('extra');
				$this.addClass('shufflepokemon-tipped');
				return pw.poketoru.updatePoketoruTip(pid, extra);
			}
		});
	},

	init : function() {
		$.extend( true, pw.database.pokemon.forms['zh-cn'], pw.poketoru.extendFormNames );

		mw.util.addCSS(
			  '.poketoruTip { width: 300px !important; padding: 5px; text-align: center; font-size: 12px; }'
			+ '.poketoruTip-row { width: 100%; border-collapse: collapse; }'
			+ '.poketoruTip-row + .poketoruTip-row { border-top: 1px solid #ccc; padding-top: 3px; margin-top: 3px; }'
			+ '.poketoruTip-name { text-align: left; font-weight: bold; font-size: 125%; }'
			+ '.poketoruTip-form { text-align: right; }'
			+ '.poketoruTip-loc { text-align: right; transform: scale(0.9); transform-origin: right; padding-top: 3px; margin-top: 3px; }'
			+ '.poketoruTip-img { width: 90px; }'
			+ '.poketoruTip-img img { width: 80px; }'
			+ '.poketoruTip-data { width: 100%; }'
			+ '.poketoruTip-data tr+tr td { border-top: 1px dotted #ccc; }'
			+ '.poketoruTip-data td:first-child { width: 40%; }'
			+ '.poketoruTip-skilltext, .poketoruTip-megaeffects { text-align: left; }'
			);

	}
	
};


pw.loader.using( [ 'pokemon', 'games/poketoru/pokemon.js', 'webui-popover'], function() {
	pw.poketoru.init();
	pw.poketoru.createPoketoruTooltips();
});