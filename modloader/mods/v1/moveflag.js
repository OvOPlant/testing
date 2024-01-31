(function() {
    let old = globalThis.sdk_runtime;
    c2_callFunction("execCode", ["globalThis.sdk_runtime = this.runtime"]);
    let runtime = globalThis.sdk_runtime;
    globalThis.sdk_runtime = old;
    var x = 1512;
    var y = 288;
    let notify = (title, text, image = "./speedrunner.png") => {
        cr.plugins_.sirg_notifications.prototype.acts.AddSimpleNotification.call(
            runtime.types_by_index.find(
                (type) => type.plugin instanceof cr.plugins_.sirg_notifications
            ).instances[0],
            title,
            text,
            image
        );
    };

    let moveflag = {
        init() {
            document.addEventListener("keydown", (event) => {
                if (event.code === "Backquote"){
                    if (event.ctrlKey){
                        loadCoordsChange();
                    }
                }
                if (event.code === "KeyF") {
                    if (event.shiftKey) {
                        runtime.tickMe(flagTick)
                    }
                }
                if (event.code === "KeyG") {
                    if (event.shiftKey) {
                        runtime.untickMe(flagTick)
                    }
                }
                if (event.code === "KeyO") {
                    if (event.shiftKey) {
                        loadFlagCoords();
                    }
                }
                if (event.code === "KeyZ") {
                    if (event.shiftKey) {
                        loadZoomOut();
                    }
                }
                if (event.code === "KeyX") {
                    if (event.shiftKey) {
                        loadZoomIn();
                    }
                }
                if (event.code === "KeyD") {
                    if (event.shiftKey) {
                        loadDeleteFlag();
                    }
                }
                if (event.code === "BracketLeft") {
                    if (event.shiftKey) {
                        loadSpawnFlag();
                    }
                }
            });
            globalThis.ovoMoveFlag = this;
            notify("Mod loaded", "Use Shift + F to infinitely move the flag to the chosen coordinates. Use Shift + G to stop.", "https://ovoplant.github.io/ovo/versions/reverse/electric.png");
            notify("Mod loaded", "Use Shift + O to view the current coords to see any mistakes. Press Ctrl + ` to change the flag's coordinates.", "https://ovoplant.github.io/ovo/versions/reverse/electric.png");
        },
    }

    let getFlag = () => {
        return runtime.types_by_index.find(
            (x) =>
                x.name === "EndFlag" ||
                (x.plugin instanceof cr.plugins_.Sprite &&
                    x.all_frames &&
                    x.all_frames[0].texture_file.includes("endflag"))
        ).instances[0];
                }

    let getLayer = () => {
    return runtime.running_layout.layers.find(x => x.name === "Layer 0");
    }

    let createFlag = (x, y, layer) => {
        const spriteType = runtime.types_by_index.find(x => x.plugin instanceof cr.plugins_.Sprite && x.all_frames && x.all_frames[0].texture_file.includes("endflag"));
    

        const sprite = runtime.createInstance(spriteType, layer, x, y);
        sprite.set_bbox_changed();
        return sprite;
    }

    let destroyFlag = (instance) => {
    return runtime.DestroyInstance(instance);
    }

    let moveFlag = (instance, x, y) => {
        instance.x = x;
        instance.y = y;
        instance.set_bbox_changed();
        return instance;
    }
    let inLevel = () => {
        return runtime.running_layout.sheetname == "Levels";
    }

    let flagTick = {
        tick(){
            if (inLevel()){
                if (getFlag()){
            moveFlag(getFlag(), parseFloat(x), parseFloat(y))
                }
            }
        }
    }
function loadCoordsChange(){
    var flagX = prompt("Change the flag's x coordinate to a number.")
    if (flagX === null || flagX === "" || isNaN(flagX)){
        alert("Must be a number, X not changed.")
        return flagX = x
    }else{
        x = flagX
    }
    var flagY = prompt("Change the flag's y coordinate to a number.")
    if (flagY === null || flagY === "" || isNaN(flagY)){
        alert("Must be a number, X not changed.")
        return flagY = y
    }else{
        y = flagY
    }
}
function loadFlagCoords(){
    notify("Flag X coordinates", x, "./images/endflag-sheet0.png")
    notify("Flag Y coordinates", y, "./images/endflag-sheet0.png")
}
function loadZoomOut(){
    getLayer().scale = 0.5
}
function loadZoomIn(){
    getLayer().scale = 1
}
function loadDeleteFlag(){
    destroyFlag(getFlag())
}
function loadSpawnFlag(){
    createFlag(parseFloat(x), parseFloat(y), getLayer())
}

    moveflag.init();
})()
