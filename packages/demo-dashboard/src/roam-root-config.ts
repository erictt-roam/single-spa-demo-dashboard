import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
import microfrontendLayout from "./microfrontend-layout.html";

const routes = constructRoutes(microfrontendLayout);
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });

registerApplication({
  name: "@roam/demo-dashboard-app",
  app: () => System.import("@roam/demo-dashboard-app"),
  activeWhen: "/",
});

applications.forEach(registerApplication);
layoutEngine.activate();
start();
