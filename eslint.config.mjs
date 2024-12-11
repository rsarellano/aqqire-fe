// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs"
import pluginVue from "eslint-plugin-vue"

export default withNuxt([
  ...pluginVue.configs["flat/essential"],
  { ignores: ["presets/**/*.js"] },
  {
    rules: {
      "vue/multi-word-component-names": "off",
      "vue/no-v-html": "off",
      "vue/require-default-prop": "off",
      "vue/max-attributes-per-line": "off",
      "vue/singleline-html-element-content-newline": "off",
      "vue/html-self-closing": "off",
      "vue/attribute-hyphenation": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "no-console": "off",
      "vue/no-multiple-template-root": "off",
    },
  },
])
