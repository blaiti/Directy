import type { Href } from "expo-router/src/link/href";

export class AppLinkUtils {
	static getTabsPath() : Href {
		return `/(tabs)/home`;
	};
}