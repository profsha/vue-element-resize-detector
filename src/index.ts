import resize from "./directive/elementResizeDetector";

export default {
  install(app: any, options: any) {
    app.directive("resize", resize);
  },
};

export { resize };
