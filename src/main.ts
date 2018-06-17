import Vue from "vue";
import App from "./App.vue";
const Icon = require("vue-awesome/components/Icon");
const VueMaterial = require("vue-material");
const VueTouch = require("vue-touch");
import * as ButtplugPanel from "vue-buttplug-material-component";
const MatomoTracker = require("matomo-tracker");

// Fix viewport scaling on iOS
require("viewport-units-buggyfill").init();

// Initialize with your site ID and Matomo URL
const matomo = new MatomoTracker(11, "https://matomo.nonpolynomial.com/", true);

// Optional: Respond to tracking errors
matomo.on("error", function(err: string) {
  console.log("error tracking request: ", err);
});

// Track a request URL:
// Either as a simple string …
matomo.track({
  url: "https://buttplug.world/syncydink",
  action_name: "Syncydink",
});

Vue.use(VueTouch);
Vue.use(VueMaterial);
Vue.use(ButtplugPanel);
Vue.component("icon", Icon);

// Ignore AFrame custom elements
Vue.config.ignoredElements = ["a-frame",
                              "a-box",
                              "a-sphere",
                              "a-cylinder",
                              "a-plane",
                              "a-sky",
                              "a-scene",
                              "a-entity",
                              "a-camera"];

// tslint:disable-next-line no-unused-expression
new Vue({
  el: "#app",
  render: (h) => h(App),
});
