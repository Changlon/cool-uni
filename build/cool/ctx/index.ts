import { join } from "path";
import { readFile, writeFile } from "../utils";
import { glob } from "glob";
import type { Ctx } from "../types";
import { assign, cloneDeep, isEqual } from "lodash";

export async function createCtx() {
	const filePath = join(__dirname, "../../../pages.json");

	// pages.json 的页面配置
	const ctx: Ctx.Data = readFile(filePath, true);

	// 做比较
	const ctxData = cloneDeep(ctx);

	// 删除临时页面
	ctx.pages = ctx.pages.filter((e) => !e.isTemp);
	ctx.subPackages = ctx.subPackages.filter((e) => !e.isTemp);

	// 加载 uni_modules 配置文件
	const files = await glob(join(__dirname, "../../../uni_modules") + "/**/pages_init.json", {
		stat: true,
		withFileTypes: true,
	});

	for (const file of files) {
		if (file.isFile()) {
			const { pages = [], subPackages = [] }: Ctx.Data = readFile(
				join(file.path, file.name),
				true,
			);

			// 合并到 pages 中
			[...pages, ...subPackages].forEach((e) => {
				e.isTemp = true;

				const isSub = !!e.root;

				const d = isSub
					? ctx.subPackages.find((a) => a.root == e.root)
					: ctx.pages.find((a) => a.path == e.path);

				if (d) {
					assign(d, e);
				} else {
					if (isSub) {
						ctx.subPackages.unshift(e);
					} else {
						ctx.pages.unshift(e);
					}
				}
			});
		}
	}

	// 是否需要更新 pages.json
	if (!isEqual(ctxData, ctx)) {
		console.log("[cool-ctx] pages updated");
		writeFile(filePath, JSON.stringify(ctx, null, 4));
	}

	return ctx;
}
