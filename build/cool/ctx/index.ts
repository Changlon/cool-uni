import { join } from "path";
import { readFile, writeFile } from "../utils";
import { glob } from "glob";
import type { Ctx } from "../types";
import { assign, isEqual } from "lodash";

export async function createCtx() {
	const filePath = join(__dirname, "../../../pages.json");

	// pages.json 的页面配置
	const ctx: Ctx.Pages = readFile(filePath, true);

	// 加载 uni_modules 配置文件
	const files = await glob(join(__dirname, "../../../uni_modules/**/pages_init.json"), {
		stat: true,
		withFileTypes: true,
	});

	// 是否有更新
	let isChange = false;

	for (const file of files) {
		if (file.isFile()) {
			const { pages = [], subPackages = [] }: Ctx.Pages = readFile(
				join(file.path, file.name),
				true,
			);

			const list: any[] = [...pages, ...subPackages];

			// 合并到 pages 中
			list.forEach((e) => {
				const isSub = !!e.root;

				const d = isSub
					? ctx.subPackages.find((a) => a.root == e.root)
					: ctx.pages.find((a) => a.path == e.path);

				if (d) {
					if (!isEqual(d, e)) {
						assign(d, e);
					} else {
						return false;
					}
				} else {
					if (isSub) {
						ctx.subPackages.unshift(e);
					} else {
						ctx.pages.unshift(e);
					}
				}

				isChange = true;
			});
		}
	}

	// 更新 pages.json
	if (isChange) {
		console.log("[cool-ctx] pages updated");
		writeFile(filePath, JSON.stringify(ctx, null, 4));
	}

	return ctx;
}
