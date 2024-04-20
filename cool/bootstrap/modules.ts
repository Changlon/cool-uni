import { keys, orderBy } from "lodash-es";

export async function createModules() {
	// 加载 uni_modules 插件
	const files: any = import.meta.glob("/uni_modules/cool-*/config.ts", {
		eager: true,
	});

	const modules = orderBy(
		keys(files).map((k) => files[k]?.default),
		"order",
		"desc",
	);

	for (let i in modules) {
		await modules[i]?.install?.();
	}
}
