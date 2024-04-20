export namespace Eps {
	interface Entity {
		api: {
			dts: {
				parameters?: {
					description: string;
					name: string;
					required: boolean;
					schema: {
						type: string;
					};
				}[];
			};
			name: string;
			method: string;
			path: string;
			prefix: string;
			summary: string;
			tag: string;
		}[];
		columns: {
			comment: string;
			length: string;
			nullable: boolean;
			propertyName: string;
			type: string;
		}[];
		module: string;
		name: string;
		prefix: string;
		[key: string]: any;
	}
}

export namespace Ctx {
	interface Pages {
		pages: {
			path: string;
			style: {
				[key: string]: any;
			};
		}[];
		subPackages: {
			root: string;
			pages: Pages["pages"];
		}[];
	}
}
