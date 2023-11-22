import { Business } from "@models";
import type { Href } from "expo-router/src/link/href";

export class AppLinkUtils {
  static getTabsPath(): Href {
    return `/(tabs)/home`;
  }

  static getBusinessPath(business: Business): Href {
    return {
      pathname: `/business`,
      params: {
        business: JSON.stringify(business),
      },
    };
  }

  static getListPath(type: "nearby" | "topRated"): Href {
    return {
      pathname: `/list`,
      params: {
        type: JSON.stringify(type),
      },
    };
  }
}
