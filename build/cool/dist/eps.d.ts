declare namespace Eps {
	interface AiAppEntity {
		/**
		 * ID
		 */
		id?: number;
		/**
		 * LOGO
		 */
		logo?: string;
		/**
		 * 名称
		 */
		name?: string;
		/**
		 * 信息库
		 */
		dataId?: number;
		/**
		 * Ai预设
		 */
		prompt?: string;
		/**
		 * 状态 0-禁用 1-启用
		 */
		status?: number;
		/**
		 * 关联上下文 0-否 1-是
		 */
		isContext?: number;
		/**
		 * 创建时间
		 */
		createTime?: Date;
		/**
		 * 更新时间
		 */
		updateTime?: Date;
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface AiRecordEntity {
		/**
		 * ID
		 */
		id?: number;
		/**
		 * 应用ID
		 */
		appId?: number;
		/**
		 * 对象ID
		 */
		objectId?: string;
		/**
		 * 内容
		 */
		content?: string;
		/**
		 * 角色
		 */
		role?: string;
		/**
		 * 类型 0-用户 1-后台 2-通用
		 */
		type?: number;
		/**
		 * 创建时间
		 */
		createTime?: Date;
		/**
		 * 更新时间
		 */
		updateTime?: Date;
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface AppComplainEntity {
		/**
		 * ID
		 */
		id?: number;
		/**
		 * 用户ID
		 */
		userId?: number;
		/**
		 * 类型
		 */
		type?: number;
		/**
		 * 联系方式
		 */
		contact?: string;
		/**
		 * 内容
		 */
		content?: string;
		/**
		 * 图片
		 */
		images?: json;
		/**
		 * 状态 0-未处理 1-已处理
		 */
		status?: number;
		/**
		 * 处理人ID
		 */
		handlerId?: number;
		/**
		 * 备注
		 */
		remark?: string;
		/**
		 * 创建时间
		 */
		createTime?: Date;
		/**
		 * 更新时间
		 */
		updateTime?: Date;
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface AppFeedbackEntity {
		/**
		 * ID
		 */
		id?: number;
		/**
		 * 用户ID
		 */
		userId?: number;
		/**
		 * 联系方式
		 */
		contact?: string;
		/**
		 * 类型
		 */
		type?: number;
		/**
		 * 内容
		 */
		content?: string;
		/**
		 * 图片
		 */
		images?: json;
		/**
		 * 状态 0-未处理 1-已处理
		 */
		status?: number;
		/**
		 * 处理人ID
		 */
		handlerId?: number;
		/**
		 * 备注
		 */
		remark?: string;
		/**
		 * 创建时间
		 */
		createTime?: Date;
		/**
		 * 更新时间
		 */
		updateTime?: Date;
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface AppGoodsEntity {
		/**
		 * ID
		 */
		id?: number;
		/**
		 * 标题
		 */
		title?: string;
		/**
		 * 价格
		 */
		price?: number;
		/**
		 * 原价
		 */
		originalPrice?: number;
		/**
		 * 描述
		 */
		description?: string;
		/**
		 * 状态 0-禁用 1-启用
		 */
		status?: number;
		/**
		 * 排序
		 */
		sort?: number;
		/**
		 * 类型 0-天 1-月 2-年 3-永久
		 */
		type?: number;
		/**
		 * 时长
		 */
		duration?: number;
		/**
		 * 标签
		 */
		tag?: string;
		/**
		 * 标签颜色
		 */
		tagColor?: string;
		/**
		 * 创建时间
		 */
		createTime?: Date;
		/**
		 * 更新时间
		 */
		updateTime?: Date;
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface AppVersionEntity {
		/**
		 * ID
		 */
		id?: number;
		/**
		 * 名称
		 */
		name?: string;
		/**
		 * 版本号
		 */
		version?: string;
		/**
		 * 类型
		 */
		type?: number;
		/**
		 * 下载地址
		 */
		url?: string;
		/**
		 * 强制更新 0-否 1-是
		 */
		forceUpdate?: number;
		/**
		 * 状态 0-禁用 1-启用
		 */
		status?: number;
		/**
		 * 热更新 0-否 1-是
		 */
		hotUpdate?: number;
		/**
		 * 描述
		 */
		description?: string;
		/**
		 * 创建时间
		 */
		createTime?: Date;
		/**
		 * 更新时间
		 */
		updateTime?: Date;
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface DemoGoodsEntity {
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface CsMsgEntity {
		/**
		 * ID
		 */
		id?: number;
		/**
		 * 用户ID
		 */
		userId?: number;
		/**
		 * 会话ID
		 */
		sessionId?: number;
		/**
		 * 消息内容
		 */
		content?: json;
		/**
		 * 类型 0-反馈 1-回复
		 */
		type?: number;
		/**
		 * 状态 0-未读 1-已读
		 */
		status?: number;
		/**
		 * 创建时间
		 */
		createTime?: Date;
		/**
		 * 更新时间
		 */
		updateTime?: Date;
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface UserAddressEntity {
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface UserInfoEntity {
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface DemoGoodsEntity {
		/**
		 * ID
		 */
		id?: number;
		/**
		 * 标题
		 */
		title?: string;
		/**
		 * 价格
		 */
		price?: number;
		/**
		 * 描述
		 */
		description?: string;
		/**
		 * 主图
		 */
		mainImage?: string;
		/**
		 * 示例图
		 */
		exampleImages?: json;
		/**
		 * 库存
		 */
		stock?: number;
		/**
		 * 创建时间
		 */
		createTime?: Date;
		/**
		 * 更新时间
		 */
		updateTime?: Date;
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface TestEntity {
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface DemoGoodsEntity {
		/**
		 * ID
		 */
		id?: number;
		/**
		 * 标题
		 */
		title?: string;
		/**
		 * 价格
		 */
		price?: number;
		/**
		 * 描述
		 */
		description?: string;
		/**
		 * 主图
		 */
		mainImage?: string;
		/**
		 * 示例图
		 */
		exampleImages?: json;
		/**
		 * 库存
		 */
		stock?: number;
		/**
		 * 创建时间
		 */
		createTime?: Date;
		/**
		 * 更新时间
		 */
		updateTime?: Date;
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface FinanceApplyDrawEntity {
		/**
		 * ID
		 */
		id?: number;
		/**
		 * 用户ID
		 */
		userId?: number;
		/**
		 * 提现金额
		 */
		amount?: number;
		/**
		 * 手续费
		 */
		fee?: number;
		/**
		 * 提现状态 0-申请中 1-成功 2-失败
		 */
		status?: number;
		/**
		 * 备注
		 */
		remark?: string;
		/**
		 * 提现账号
		 */
		account?: json;
		/**
		 * 创建时间
		 */
		createTime?: Date;
		/**
		 * 更新时间
		 */
		updateTime?: Date;
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface FinanceApplyInvoiceEntity {
		/**
		 * ID
		 */
		id?: number;
		/**
		 * 用户ID
		 */
		userId?: number;
		/**
		 * 金额
		 */
		amount?: number;
		/**
		 * 状态 0-申请中 1-成功 2-失败
		 */
		status?: number;
		/**
		 * 备注
		 */
		remark?: string;
		/**
		 * 开票信息
		 */
		invoice?: json;
		/**
		 * 订单ID
		 */
		orderIds?: json;
		/**
		 * 创建时间
		 */
		createTime?: Date;
		/**
		 * 更新时间
		 */
		updateTime?: Date;
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface FinanceUserDrawEntity {
		/**
		 * ID
		 */
		id?: number;
		/**
		 * 用户ID
		 */
		userId?: number;
		/**
		 * 方式 0-银行卡 1-收款码 2-微信 3-支付宝
		 */
		type?: number;
		/**
		 * 姓名
		 */
		name?: string;
		/**
		 * 手机号
		 */
		phone?: string;
		/**
		 * 对象信息
		 */
		info?: json;
		/**
		 * 创建时间
		 */
		createTime?: Date;
		/**
		 * 更新时间
		 */
		updateTime?: Date;
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface FinanceUserInvoiceEntity {
		/**
		 * ID
		 */
		id?: number;
		/**
		 * 用户ID
		 */
		userId?: number;
		/**
		 * 类型 0-普票 1-专票
		 */
		type?: number;
		/**
		 * 邮箱
		 */
		email?: string;
		/**
		 * 抬头类型 0-个人 1-公司
		 */
		headerType?: number;
		/**
		 * 发票抬头
		 */
		header?: string;
		/**
		 * 税号
		 */
		taxNo?: string;
		/**
		 * 注册地址
		 */
		registerAddress?: string;
		/**
		 * 注册电话
		 */
		registerPhone?: string;
		/**
		 * 开户行
		 */
		bank?: string;
		/**
		 * 银行账号
		 */
		bankAccount?: string;
		/**
		 * 创建时间
		 */
		createTime?: Date;
		/**
		 * 更新时间
		 */
		updateTime?: Date;
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface FinanceWalletRecordEntity {
		/**
		 * ID
		 */
		id?: number;
		/**
		 * 用户ID
		 */
		userId?: number;
		/**
		 * 标题
		 */
		title?: string;
		/**
		 * 金额
		 */
		amount?: number;
		/**
		 * 类型 0-收入 1-支出
		 */
		type?: number;
		/**
		 * 对象ID
		 */
		objectId?: number;
		/**
		 * 对象类型 0-订单 1-提现 2-充值
		 */
		objectType?: number;
		/**
		 * 对象信息
		 */
		objectInfo?: json;
		/**
		 * 备注
		 */
		remark?: string;
		/**
		 * 创建时间
		 */
		createTime?: Date;
		/**
		 * 更新时间
		 */
		updateTime?: Date;
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface FinanceWalletUserEntity {
		/**
		 * ID
		 */
		id?: number;
		/**
		 * 用户ID
		 */
		userId?: number;
		/**
		 * 总金额
		 */
		balance?: number;
		/**
		 * 冻结金额
		 */
		freezeAmount?: number;
		/**
		 * 创建时间
		 */
		createTime?: Date;
		/**
		 * 更新时间
		 */
		updateTime?: Date;
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface MsgDeviceEntity {
		/**
		 * ID
		 */
		id?: number;
		/**
		 * 用户ID
		 */
		userId?: number;
		/**
		 * CID
		 */
		cid?: string;
		/**
		 * 别名
		 */
		alias?: string;
		/**
		 * 标签
		 */
		tags?: json;
		/**
		 * 创建时间
		 */
		createTime?: Date;
		/**
		 * 更新时间
		 */
		updateTime?: Date;
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface MsgInfoEntity {
		/**
		 * ID
		 */
		id?: number;
		/**
		 * 标题
		 */
		title?: string;
		/**
		 * 内容
		 */
		content?: string;
		/**
		 * 数据
		 */
		data?: json;
		/**
		 * 已读人数
		 */
		readCount?: number;
		/**
		 * 类型 0-指定人员 1-所有人
		 */
		type?: number;
		/**
		 * 接收的用户ID
		 */
		toUserIds?: json;
		/**
		 * 创建时间
		 */
		createTime?: Date;
		/**
		 * 更新时间
		 */
		updateTime?: Date;
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface MsgUserEntity {
		/**
		 * ID
		 */
		id?: number;
		/**
		 * 消息ID
		 */
		infoId?: number;
		/**
		 * 用户ID
		 */
		userId?: number;
		/**
		 * 状态 0-已读 1-未读
		 */
		status?: number;
		/**
		 * 阅读时间
		 */
		readTime?: Date;
		/**
		 * 创建时间
		 */
		createTime?: Date;
		/**
		 * 更新时间
		 */
		updateTime?: Date;
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface UserInfoEntity {
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface UserInfoEntity {
		/**
		 * ID
		 */
		id?: number;
		/**
		 * 登录唯一ID
		 */
		unionid?: string;
		/**
		 * 头像
		 */
		avatarUrl?: string;
		/**
		 * 昵称
		 */
		nickName?: string;
		/**
		 * 手机号
		 */
		phone?: string;
		/**
		 * 性别 0-未知 1-男 2-女
		 */
		gender?: number;
		/**
		 * 状态 0-禁用 1-正常 2-已注销
		 */
		status?: number;
		/**
		 * 登录方式 0-小程序 1-公众号 2-H5
		 */
		loginType?: number;
		/**
		 * 密码
		 */
		password?: string;
		/**
		 * 创建时间
		 */
		createTime?: Date;
		/**
		 * 更新时间
		 */
		updateTime?: Date;
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface TestEntity {
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}
	interface AiApp {
		/**
		 * 分页查询
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: AiAppEntity[];
			[key: string]: any;
		}>;
		/**
		 * 单个信息
		 */
		info(data?: any): Promise<AiAppEntity>;
		/**
		 * param
		 */
		param(data?: any): Promise<any>;
		/**
		 * eps
		 */
		eps(data?: any): Promise<any>;
		/**
		 * update
		 */
		update(data?: any): Promise<any>;
		/**
		 * add
		 */
		add(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: {
			page: string;
			info: string;
			param: string;
			eps: string;
			update: string;
			add: string;
		};
		/**
		 * 权限状态
		 */
		_permission: {
			page: boolean;
			info: boolean;
			param: boolean;
			eps: boolean;
			update: boolean;
			add: boolean;
		};
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface AiComm {
		/**
		 * 调用
		 */
		invoke(data?: any): Promise<any>;
		/**
		 * get
		 */
		get(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: { invoke: string; get: string };
		/**
		 * 权限状态
		 */
		_permission: { invoke: boolean; get: boolean };
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface AiRecord {
		/**
		 * 清空
		 */
		clear(data?: any): Promise<any>;
		/**
		 * 分页查询
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: AiRecordEntity[];
			[key: string]: any;
		}>;
		/**
		 * 权限标识
		 */
		permission: { clear: string; page: string };
		/**
		 * 权限状态
		 */
		_permission: { clear: boolean; page: boolean };
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface AppComplain {
		/**
		 * 提交投诉举报
		 */
		submit(data?: any): Promise<any>;
		/**
		 * 分页查询
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: AppComplainEntity[];
			[key: string]: any;
		}>;
		/**
		 * 单个信息
		 */
		info(data?: any): Promise<AppComplainEntity>;
		/**
		 * update
		 */
		update(data?: any): Promise<any>;
		/**
		 * info
		 */
		info(data?: any): Promise<AppComplainEntity>;
		/**
		 * list
		 */
		list(data?: any): Promise<AppComplainEntity[]>;
		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: AppComplainEntity[];
			[key: string]: any;
		}>;
		/**
		 * add
		 */
		add(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: {
			submit: string;
			page: string;
			info: string;
			update: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};
		/**
		 * 权限状态
		 */
		_permission: {
			submit: boolean;
			page: boolean;
			info: boolean;
			update: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface AppFeedback {
		/**
		 * 提交意见反馈
		 */
		submit(data?: any): Promise<any>;
		/**
		 * 分页查询
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: AppFeedbackEntity[];
			[key: string]: any;
		}>;
		/**
		 * 单个信息
		 */
		info(data?: any): Promise<AppFeedbackEntity>;
		/**
		 * 权限标识
		 */
		permission: { submit: string; page: string; info: string };
		/**
		 * 权限状态
		 */
		_permission: { submit: boolean; page: boolean; info: boolean };
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface AppGoods {
		/**
		 * 列表查询
		 */
		list(data?: any): Promise<AppGoodsEntity[]>;
		/**
		 * getter
		 */
		getter(data?: any): Promise<any>;
		/**
		 * add
		 */
		add(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: { list: string; getter: string; add: string };
		/**
		 * 权限状态
		 */
		_permission: { list: boolean; getter: boolean; add: boolean };
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface AppVersion {
		/**
		 * 检查版本
		 */
		check(data?: any): Promise<any>;
		/**
		 * event
		 */
		event(data?: any): Promise<any>;
		/**
		 * call
		 */
		call(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: { check: string; event: string; call: string };
		/**
		 * 权限状态
		 */
		_permission: { check: boolean; event: boolean; call: boolean };
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface BaseComm {
		/**
		 * 文件上传模式
		 */
		uploadMode(data?: any): Promise<any>;
		/**
		 * 文件上传
		 */
		upload(data?: any): Promise<any>;
		/**
		 * 参数配置
		 */
		param(data?: any): Promise<any>;
		/**
		 * 实体信息与路径
		 */
		eps(data?: any): Promise<any>;
		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: DemoGoodsEntity[];
			[key: string]: any;
		}>;
		/**
		 * add
		 */
		add(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: {
			uploadMode: string;
			upload: string;
			param: string;
			eps: string;
			page: string;
			add: string;
		};
		/**
		 * 权限状态
		 */
		_permission: {
			uploadMode: boolean;
			upload: boolean;
			param: boolean;
			eps: boolean;
			page: boolean;
			add: boolean;
		};
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface CsMsg {
		/**
		 * 未读消息数
		 */
		unreadCount(data?: any): Promise<any>;
		/**
		 * 标记已读
		 */
		read(data?: any): Promise<any>;
		/**
		 * 分页查询
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: CsMsgEntity[];
			[key: string]: any;
		}>;
		/**
		 * 权限标识
		 */
		permission: { unreadCount: string; read: string; page: string };
		/**
		 * 权限状态
		 */
		_permission: { unreadCount: boolean; read: boolean; page: boolean };
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface CsSession {
		/**
		 * 会话详情
		 */
		detail(data?: any): Promise<any>;
		/**
		 * 创建会话
		 */
		create(data?: any): Promise<any>;
		/**
		 * update
		 */
		update(data?: any): Promise<any>;
		/**
		 * info
		 */
		info(data?: any): Promise<UserAddressEntity>;
		/**
		 * list
		 */
		list(data?: any): Promise<UserAddressEntity[]>;
		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: UserAddressEntity[];
			[key: string]: any;
		}>;
		/**
		 * add
		 */
		add(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: {
			detail: string;
			create: string;
			update: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};
		/**
		 * 权限状态
		 */
		_permission: {
			detail: boolean;
			create: boolean;
			update: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface OpenDemoCache {
		/**
		 * set
		 */
		set(data?: any): Promise<any>;
		/**
		 * get
		 */
		get(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: { set: string; get: string };
		/**
		 * 权限状态
		 */
		_permission: { set: boolean; get: boolean };
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface OpenDemoEvent {
		/**
		 * send
		 */
		send(data?: any): Promise<any>;
		/**
		 * updatePerson
		 */
		updatePerson(data?: any): Promise<any>;
		/**
		 * bindPhone
		 */
		bindPhone(data?: any): Promise<any>;
		/**
		 * miniPhone
		 */
		miniPhone(data?: any): Promise<any>;
		/**
		 * person
		 */
		person(data?: any): Promise<any>;
		/**
		 * logoff
		 */
		logoff(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: {
			send: string;
			updatePerson: string;
			bindPhone: string;
			miniPhone: string;
			person: string;
			logoff: string;
		};
		/**
		 * 权限状态
		 */
		_permission: {
			send: boolean;
			updatePerson: boolean;
			bindPhone: boolean;
			miniPhone: boolean;
			person: boolean;
			logoff: boolean;
		};
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface OpenDemoGoods {
		/**
		 * entity分页查询
		 */
		entityPage(data?: any): Promise<any>;
		/**
		 * sql分页查询
		 */
		sqlPage(data?: any): Promise<any>;
		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;
		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;
		/**
		 * 单个信息
		 */
		info(data?: any): Promise<DemoGoodsEntity>;
		/**
		 * 列表查询
		 */
		list(data?: any): Promise<DemoGoodsEntity[]>;
		/**
		 * 分页查询
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: DemoGoodsEntity[];
			[key: string]: any;
		}>;
		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: {
			entityPage: string;
			sqlPage: string;
			delete: string;
			update: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};
		/**
		 * 权限状态
		 */
		_permission: {
			entityPage: boolean;
			sqlPage: boolean;
			delete: boolean;
			update: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface OpenDemoPlugin {
		/**
		 * 调用插件
		 */
		invoke(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: { invoke: string };
		/**
		 * 权限状态
		 */
		_permission: { invoke: boolean };
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface OpenDemoQueue {
		/**
		 * addGetter
		 */
		addGetter(data?: any): Promise<any>;
		/**
		 * getter
		 */
		getter(data?: any): Promise<any>;
		/**
		 * 发送队列数据
		 */
		add(data?: any): Promise<any>;
		/**
		 * delete
		 */
		delete(data?: any): Promise<any>;
		/**
		 * update
		 */
		update(data?: any): Promise<any>;
		/**
		 * add
		 */
		add(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: {
			addGetter: string;
			getter: string;
			add: string;
			delete: string;
			update: string;
			add: string;
		};
		/**
		 * 权限状态
		 */
		_permission: {
			addGetter: boolean;
			getter: boolean;
			add: boolean;
			delete: boolean;
			update: boolean;
			add: boolean;
		};
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface OpenDemoRpc {
		/**
		 * 分布式事务
		 */
		transaction(data?: any): Promise<any>;
		/**
		 * 集群事件
		 */
		event(data?: any): Promise<any>;
		/**
		 * 远程调用
		 */
		call(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: { transaction: string; event: string; call: string };
		/**
		 * 权限状态
		 */
		_permission: { transaction: boolean; event: boolean; call: boolean };
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface OpenDemoTransaction {
		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;
		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;
		/**
		 * 单个信息
		 */
		info(data?: any): Promise<DemoGoodsEntity>;
		/**
		 * 列表查询
		 */
		list(data?: any): Promise<DemoGoodsEntity[]>;
		/**
		 * 分页查询
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: DemoGoodsEntity[];
			[key: string]: any;
		}>;
		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			update: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};
		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			update: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface DictInfo {
		/**
		 * 获得字典数据
		 */
		data(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: { data: string };
		/**
		 * 权限状态
		 */
		_permission: { data: boolean };
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface FinanceApplyDraw {
		/**
		 * 提现申请
		 */
		submit(data?: any): Promise<any>;
		/**
		 * 分页查询
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: FinanceApplyDrawEntity[];
			[key: string]: any;
		}>;
		/**
		 * 权限标识
		 */
		permission: { submit: string; page: string };
		/**
		 * 权限状态
		 */
		_permission: { submit: boolean; page: boolean };
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface FinanceApplyInvoice {
		/**
		 * 提交申请
		 */
		submit(data?: any): Promise<any>;
		/**
		 * 分页查询
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: FinanceApplyInvoiceEntity[];
			[key: string]: any;
		}>;
		/**
		 * 权限标识
		 */
		permission: { submit: string; page: string };
		/**
		 * 权限状态
		 */
		_permission: { submit: boolean; page: boolean };
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface FinanceUserDraw {
		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;
		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;
		/**
		 * 单个信息
		 */
		info(data?: any): Promise<FinanceUserDrawEntity>;
		/**
		 * 分页查询
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: FinanceUserDrawEntity[];
			[key: string]: any;
		}>;
		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: { delete: string; update: string; info: string; page: string; add: string };
		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			update: boolean;
			info: boolean;
			page: boolean;
			add: boolean;
		};
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface FinanceUserInvoice {
		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;
		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;
		/**
		 * 单个信息
		 */
		info(data?: any): Promise<FinanceUserInvoiceEntity>;
		/**
		 * 分页查询
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: FinanceUserInvoiceEntity[];
			[key: string]: any;
		}>;
		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: { delete: string; update: string; info: string; page: string; add: string };
		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			update: boolean;
			info: boolean;
			page: boolean;
			add: boolean;
		};
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface FinanceWalletRecord {
		/**
		 * 分页查询
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: FinanceWalletRecordEntity[];
			[key: string]: any;
		}>;
		/**
		 * 权限标识
		 */
		permission: { page: string };
		/**
		 * 权限状态
		 */
		_permission: { page: boolean };
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface FinanceWalletUser {
		/**
		 * 钱包详情
		 */
		detail(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: { detail: string };
		/**
		 * 权限状态
		 */
		_permission: { detail: boolean };
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface MsgDevice {
		/**
		 * bind
		 */
		bind(data?: any): Promise<any>;
		/**
		 * delete
		 */
		delete(data?: any): Promise<any>;
		/**
		 * update
		 */
		update(data?: any): Promise<any>;
		/**
		 * clear
		 */
		clear(data?: any): Promise<any>;
		/**
		 * read
		 */
		read(data?: any): Promise<any>;
		/**
		 * info
		 */
		info(data?: any): Promise<MsgDeviceEntity>;
		/**
		 * list
		 */
		list(data?: any): Promise<MsgDeviceEntity[]>;
		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: MsgDeviceEntity[];
			[key: string]: any;
		}>;
		/**
		 * add
		 */
		add(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: {
			bind: string;
			delete: string;
			update: string;
			clear: string;
			read: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};
		/**
		 * 权限状态
		 */
		_permission: {
			bind: boolean;
			delete: boolean;
			update: boolean;
			clear: boolean;
			read: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface MsgInfo {
		/**
		 * 未读消息数量
		 */
		unreadCount(data?: any): Promise<any>;
		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;
		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;
		/**
		 * 全部已读
		 */
		clear(data?: any): Promise<any>;
		/**
		 * 标记为已读
		 */
		read(data?: any): Promise<any>;
		/**
		 * 单个信息
		 */
		info(data?: any): Promise<MsgInfoEntity>;
		/**
		 * 列表查询
		 */
		list(data?: any): Promise<MsgInfoEntity[]>;
		/**
		 * 分页查询
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: MsgInfoEntity[];
			[key: string]: any;
		}>;
		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: {
			unreadCount: string;
			delete: string;
			update: string;
			clear: string;
			read: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};
		/**
		 * 权限状态
		 */
		_permission: {
			unreadCount: boolean;
			delete: boolean;
			update: boolean;
			clear: boolean;
			read: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface MsgUser {
		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;
		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;
		/**
		 * 单个信息
		 */
		info(data?: any): Promise<MsgUserEntity>;
		/**
		 * 列表查询
		 */
		list(data?: any): Promise<MsgUserEntity[]>;
		/**
		 * 分页查询
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: MsgUserEntity[];
			[key: string]: any;
		}>;
		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			update: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};
		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			update: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface UserComm {
		/**
		 * 获取微信公众号配置
		 */
		wxMpConfig(data?: any): Promise<any>;
		/**
		 * updatePerson
		 */
		updatePerson(data?: any): Promise<any>;
		/**
		 * person
		 */
		person(data?: any): Promise<any>;
		/**
		 * logoff
		 */
		logoff(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: { wxMpConfig: string; updatePerson: string; person: string; logoff: string };
		/**
		 * 权限状态
		 */
		_permission: {
			wxMpConfig: boolean;
			updatePerson: boolean;
			person: boolean;
			logoff: boolean;
		};
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface UserInfo {
		/**
		 * 更新用户密码
		 */
		updatePassword(data?: any): Promise<any>;
		/**
		 * 更新用户信息
		 */
		updatePerson(data?: any): Promise<any>;
		/**
		 * 获取用户信息
		 */
		person(data?: any): Promise<any>;
		/**
		 * 注销
		 */
		logoff(data?: any): Promise<any>;
		/**
		 * phone
		 */
		phone(data?: any): Promise<any>;
		/**
		 * mini
		 */
		mini(data?: any): Promise<any>;
		/**
		 * mp
		 */
		mp(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: {
			updatePassword: string;
			updatePerson: string;
			person: string;
			logoff: string;
			phone: string;
			mini: string;
			mp: string;
		};
		/**
		 * 权限状态
		 */
		_permission: {
			updatePassword: boolean;
			updatePerson: boolean;
			person: boolean;
			logoff: boolean;
			phone: boolean;
			mini: boolean;
			mp: boolean;
		};
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface UserLogin {
		/**
		 * 刷新token
		 */
		refreshToken(data?: any): Promise<any>;
		/**
		 * 密码登录
		 */
		password(data?: any): Promise<any>;
		/**
		 * 图片验证码
		 */
		captcha(data?: any): Promise<any>;
		/**
		 * 验证码
		 */
		smsCode(data?: any): Promise<any>;
		/**
		 * 手机号登录
		 */
		phone(data?: any): Promise<any>;
		/**
		 * 小程序登录
		 */
		mini(data?: any): Promise<any>;
		/**
		 * 公众号登录
		 */
		mp(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: {
			refreshToken: string;
			password: string;
			captcha: string;
			smsCode: string;
			phone: string;
			mini: string;
			mp: string;
		};
		/**
		 * 权限状态
		 */
		_permission: {
			refreshToken: boolean;
			password: boolean;
			captcha: boolean;
			smsCode: boolean;
			phone: boolean;
			mini: boolean;
			mp: boolean;
		};
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface Test {
		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: TestEntity[];
			[key: string]: any;
		}>;
		/**
		 * list
		 */
		list(data?: any): Promise<TestEntity[]>;
		/**
		 * info
		 */
		info(data?: any): Promise<TestEntity>;
		/**
		 * delete
		 */
		delete(data?: any): Promise<any>;
		/**
		 * update
		 */
		update(data?: any): Promise<any>;
		/**
		 * add
		 */
		add(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: {
			page: string;
			list: string;
			info: string;
			delete: string;
			update: string;
			add: string;
		};
		/**
		 * 权限状态
		 */
		_permission: {
			page: boolean;
			list: boolean;
			info: boolean;
			delete: boolean;
			update: boolean;
			add: boolean;
		};
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	type json = any;

	type Service = {
		request(options?: {
			url: string;
			method?: "POST" | "GET" | "PUT" | "DELETE" | "PATCH" | "HEAD" | "OPTIONS";
			data?: any;
			params?: any;
			headers?: {
				[key: string]: any;
			};
			timeout?: number;
			proxy?: boolean;
			[key: string]: any;
		}): Promise<any>;
		ai: { app: AiApp; comm: AiComm; record: AiRecord };
		app: { complain: AppComplain; feedback: AppFeedback; goods: AppGoods; version: AppVersion };
		base: { comm: BaseComm };
		cs: { msg: CsMsg; session: CsSession };
		open: {
			demo: {
				cache: OpenDemoCache;
				event: OpenDemoEvent;
				goods: OpenDemoGoods;
				plugin: OpenDemoPlugin;
				queue: OpenDemoQueue;
				rpc: OpenDemoRpc;
				transaction: OpenDemoTransaction;
			};
		};
		dict: { info: DictInfo };
		finance: {
			apply: { draw: FinanceApplyDraw; invoice: FinanceApplyInvoice };
			user: { draw: FinanceUserDraw; invoice: FinanceUserInvoice };
			wallet: { record: FinanceWalletRecord; user: FinanceWalletUser };
		};
		msg: { device: MsgDevice; info: MsgInfo; user: MsgUser };
		user: { comm: UserComm; info: UserInfo; login: UserLogin };
		test: Test;
	};
}
