(function () {
    let old = globalThis.sdk_runtime;
    c2_callFunction("execCode", ["globalThis.sdk_runtime = this.runtime"]);
    let runtime = globalThis.sdk_runtime;
    globalThis.sdk_runtime = old;

    let resetButton = {
        init() {
            document.addEventListener("keydown", (event) => {this.keydown(event)})
          
            globalThis.ovoResetButton = this;
            notify("Mod Loaded", "Reset Button Mod Loaded");
        },

        keydown(event) {
            if (event.key.toLowerCase() == "r") {
                runtime.changelayout = runtime.running_layout
            }
        }
    };

    resetButton.init();
})();