import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"

const config = await loadQuartzConfig({
  head: {
    additionalHead: [
      '<link rel="preconnect" href="https://fonts.googleapis.com">',
      '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>',
      '<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Old+Persian&display=swap" rel="stylesheet">',
    ],
  },
})
export default config
export const layout = await loadQuartzLayout()
