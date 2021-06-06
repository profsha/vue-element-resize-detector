var elementResizeDetectorMaker = require("element-resize-detector");
var erd = elementResizeDetectorMaker({
  strategy: "scroll", //<- For ultra performance.
});

// this occurs once when the directive is attached to the element.
function mounted(el: any, binding: any, vnode: any) {
  let options = {};
  if (binding.value) {
    options = binding.value;
  }
  erd.listenTo(options, el, (element: any) => {
    let width = element.offsetWidth;
    let height = element.offsetHeight;
    if (vnode.componentInstance) {
      vnode.componentInstance.$emit("resize", { detail: { width, height } });
    } else {
      vnode.el.dispatchEvent(
        new CustomEvent("resize", { detail: { width, height } })
      );
    }
  });
}
function unmounted(el: any) {
  erd.uninstall(el);
}

export default {
  mounted,
  unmounted,
};
