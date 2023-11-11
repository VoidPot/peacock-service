import { createApplication } from "graphql-modules";
import baseModule from "./base/module.js";
import userModule from "./user/module.js";

export default createApplication({
  modules: [baseModule, userModule],
});
