
import { defineFormKitConfig } from "@formkit/vue";
import { rootClasses } from "./formkit.theme";

import {genesisIcons} from '@formkit/icons'

export default defineFormKitConfig({
  locale: "en",
  config: {
    rootClasses,
    icons: {
      ...genesisIcons
    }
  },
});
