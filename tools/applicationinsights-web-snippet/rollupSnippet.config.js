import { createConfig } from "../../rollup.base.config";
const version = require("./package.json").version;

const snippetOutputName = "snippet";
const snippetOutputPath = "../../build/output/snippet";

export default createConfig("", 
  {
    namespace: "Microsoft.ApplicationInsights",
    version: version,
    node: {
      entryPoint: snippetOutputName, 
      outputName: snippetOutputPath
    },
    browser: {
      entryPoint: snippetOutputName, 
      outputName: snippetOutputPath
    },
  },
  [ "applicationinsights-web-snippet" ]
);

