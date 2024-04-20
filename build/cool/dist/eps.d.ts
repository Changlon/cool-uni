declare namespace Eps {
	interface AiAppEntity {
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface AiRecordEntity {
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface AppComplainEntity {
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface AppFeedbackEntity {
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface AppGoodsEntity {
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface AppVersionEntity {
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
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface FinanceApplyDrawEntity {
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface FinanceApplyInvoiceEntity {
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface FinanceUserDrawEntity {
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface FinanceUserInvoiceEntity {
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface FinanceWalletRecordEntity {
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface FinanceWalletUserEntity {
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface MsgInfoEntity {
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface MsgUserEntity {
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
	interface AiApp {
		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: AiAppEntity[];
			[key: string]: any;
		}>;
		/**
		 * info
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
		 * invoke
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
		 * clear
		 */
		clear(data?: any): Promise<any>;
		/**
		 * page
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
		 * submit
		 */
		submit(data?: any): Promise<any>;
		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: AppComplainEntity[];
			[key: string]: any;
		}>;
		/**
		 * info
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
		 * submit
		 */
		submit(data?: any): Promise<any>;
		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: AppFeedbackEntity[];
			[key: string]: any;
		}>;
		/**
		 * info
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
		 * list
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
		 * check
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
		 * uploadMode
		 */
		uploadMode(data?: any): Promise<any>;
		/**
		 * upload
		 */
		upload(data?: any): Promise<any>;
		/**
		 * param
		 */
		param(data?: any): Promise<any>;
		/**
		 * eps
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
		 * unreadCount
		 */
		unreadCount(data?: any): Promise<any>;
		/**
		 * read
		 */
		read(data?: any): Promise<any>;
		/**
		 * page
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
		 * detail
		 */
		detail(data?: any): Promise<any>;
		/**
		 * create
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
		 * entityPage
		 */
		entityPage(data?: any): Promise<any>;
		/**
		 * sqlPage
		 */
		sqlPage(data?: any): Promise<any>;
		/**
		 * delete
		 */
		delete(data?: any): Promise<any>;
		/**
		 * update
		 */
		update(data?: any): Promise<any>;
		/**
		 * info
		 */
		info(data?: any): Promise<DemoGoodsEntity>;
		/**
		 * list
		 */
		list(data?: any): Promise<DemoGoodsEntity[]>;
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
		 * invoke
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
		 * add
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
		 * transaction
		 */
		transaction(data?: any): Promise<any>;
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
		 * delete
		 */
		delete(data?: any): Promise<any>;
		/**
		 * update
		 */
		update(data?: any): Promise<any>;
		/**
		 * info
		 */
		info(data?: any): Promise<DemoGoodsEntity>;
		/**
		 * list
		 */
		list(data?: any): Promise<DemoGoodsEntity[]>;
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
		 * data
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
		 * submit
		 */
		submit(data?: any): Promise<any>;
		/**
		 * page
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
		 * submit
		 */
		submit(data?: any): Promise<any>;
		/**
		 * page
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
		 * delete
		 */
		delete(data?: any): Promise<any>;
		/**
		 * update
		 */
		update(data?: any): Promise<any>;
		/**
		 * info
		 */
		info(data?: any): Promise<FinanceUserDrawEntity>;
		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: FinanceUserDrawEntity[];
			[key: string]: any;
		}>;
		/**
		 * add
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
		 * delete
		 */
		delete(data?: any): Promise<any>;
		/**
		 * update
		 */
		update(data?: any): Promise<any>;
		/**
		 * info
		 */
		info(data?: any): Promise<FinanceUserInvoiceEntity>;
		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: FinanceUserInvoiceEntity[];
			[key: string]: any;
		}>;
		/**
		 * add
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
		 * page
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
		 * detail
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

	interface MsgInfo {
		/**
		 * unreadCount
		 */
		unreadCount(data?: any): Promise<any>;
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
		info(data?: any): Promise<MsgInfoEntity>;
		/**
		 * list
		 */
		list(data?: any): Promise<MsgInfoEntity[]>;
		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: MsgInfoEntity[];
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
		 * delete
		 */
		delete(data?: any): Promise<any>;
		/**
		 * update
		 */
		update(data?: any): Promise<any>;
		/**
		 * info
		 */
		info(data?: any): Promise<MsgUserEntity>;
		/**
		 * list
		 */
		list(data?: any): Promise<MsgUserEntity[]>;
		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: MsgUserEntity[];
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
		 * wxMpConfig
		 */
		wxMpConfig(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: { wxMpConfig: string };
		/**
		 * 权限状态
		 */
		_permission: { wxMpConfig: boolean };
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface UserInfo {
		/**
		 * updatePassword
		 */
		updatePassword(data?: any): Promise<any>;
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
		permission: {
			updatePassword: string;
			updatePerson: string;
			person: string;
			logoff: string;
		};
		/**
		 * 权限状态
		 */
		_permission: {
			updatePassword: boolean;
			updatePerson: boolean;
			person: boolean;
			logoff: boolean;
		};
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface UserLogin {
		/**
		 * refreshToken
		 */
		refreshToken(data?: any): Promise<any>;
		/**
		 * password
		 */
		password(data?: any): Promise<any>;
		/**
		 * captcha
		 */
		captcha(data?: any): Promise<any>;
		/**
		 * smsCode
		 */
		smsCode(data?: any): Promise<any>;
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
		msg: { info: MsgInfo; user: MsgUser };
		user: { comm: UserComm; info: UserInfo; login: UserLogin };
	};
}
