import { registerCondition } from "./quartz/plugins/loader/conditions"
import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"

registerCondition(
  "writing-page",
  (props) => (props.fileData.slug as string)?.startsWith("writing/") ?? false,
)

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()
