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
                if (event.code === "Backquote"){
                    if (event.shiftKey){
                        loadLevelCoords();
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
                if (event.code === "BracketLeft") {
                    if (event.shiftKey) {
                        loadDeleteFlag();
                    }
                }
                if (event.code === "BracketRight") {
                    if (event.shiftKey) {
                        loadSpawnFlag();
                    }
                }
                if (event.code === "KeyI") {
                    if (event.shiftKey) {
                        loadHowUse();
                    }
                }
            });
            globalThis.ovoMoveFlag = this;
            notify("Mod loaded", "Use Shift + I to see everything you can do. You may have to do this more than once.", "https://ovoplant.github.io/ovo/versions/reverse/electric.png");
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
        flagX = x
    }else{
        x = flagX
    }
    var flagY = prompt("Change the flag's y coordinate to a number.")
    if (flagY === null || flagY === "" || isNaN(flagY)){
        alert("Must be a number, Y not changed.")
        flagY = y
    }else{
        y = flagY
    }
}
function loadLevelCoords(){
    let flagLevel = prompt("Type a 1.4.4 level number (1-60) to change the flag's coordinates to that level's flag.")
    if(parseFloat(flagLevel) >= 1 && parseFloat(flagLevel) <= 60){
    if(parseFloat(flagLevel) === 1){x = 1512, y = 288
    }else if(parseFloat(flagLevel) === 2){x = 2264, y = 440
    }else if(parseFloat(flagLevel) === 3){x = 1184, y = 288
    }else if(parseFloat(flagLevel) === 4){x = 1504, y = 288
    }else if(parseFloat(flagLevel) === 5){x = 1736, y = 288
    }else if(parseFloat(flagLevel) === 6){x = 3560, y = 248
    }else if(parseFloat(flagLevel) === 7){x = 969, y = 447
    }else if(parseFloat(flagLevel) === 8){x = 1984, y = 225
    }else if(parseFloat(flagLevel) === 9){x = 96, y = 1176
    }else if(parseFloat(flagLevel) === 10){x = 728, y = 136
    }else if(parseFloat(flagLevel) === 11){x = 928, y = 294
    }else if(parseFloat(flagLevel) === 12){x = 1064, y = 384
    }else if(parseFloat(flagLevel) === 13){x = 312, y = 480
    }else if(parseFloat(flagLevel) === 14){x = 2520, y = 1016
    }else if(parseFloat(flagLevel) === 15){x = 1568, y = 1640
    }else if(parseFloat(flagLevel) === 16){x = 1512, y = 4707
    }else if(parseFloat(flagLevel) === 17){x = 469, y = 1520
    }else if(parseFloat(flagLevel) === 18){x = 1650, y = 1696
    }else if(parseFloat(flagLevel) === 19){x = 1268, y = 193
    }else if(parseFloat(flagLevel) === 20){x = 1816, y = 1184
    }else if(parseFloat(flagLevel) === 21){x = 450, y = 206
    }else if(parseFloat(flagLevel) === 22){x = 2192, y = 2656
    }else if(parseFloat(flagLevel) === 23){x = 1344, y = 1368
    }else if(parseFloat(flagLevel) === 24){x = 1096, y = 1152
    }else if(parseFloat(flagLevel) === 25){x = 596, y = 500
    }else if(parseFloat(flagLevel) === 26){x = 968, y = 382
    }else if(parseFloat(flagLevel) === 27){x = 2264, y = 1552
    }else if(parseFloat(flagLevel) === 28){x = 1624, y = 1704
    }else if(parseFloat(flagLevel) === 29){x = 2928, y = 440
    }else if(parseFloat(flagLevel) === 30){x = 3952, y = 1736
    }else if(parseFloat(flagLevel) === 31){x = 1848, y = 632
    }else if(parseFloat(flagLevel) === 32){x = 4464, y = 488
    }else if(parseFloat(flagLevel) === 33){x = 2872, y = 3976
    }else if(parseFloat(flagLevel) === 34){x = 2864, y = 3040
    }else if(parseFloat(flagLevel) === 35){x = 1016, y = 2812
    }else if(parseFloat(flagLevel) === 36){x = 2120, y = 2144
    }else if(parseFloat(flagLevel) === 37){x = 1928, y = 1696
    }else if(parseFloat(flagLevel) === 38){x = 1072, y = 3600
    }else if(parseFloat(flagLevel) === 39){x = 9808, y = 21483, notify("Why?", "Good luck getting ANY flag")
    }else if(parseFloat(flagLevel) === 40){x = 56, y = 1512
    }else if(parseFloat(flagLevel) === 41){x = 3168, y = 3344
    }else if(parseFloat(flagLevel) === 42){x = 3269, y = 4896
    }else if(parseFloat(flagLevel) === 43){x = 1920, y = 1216
    }else if(parseFloat(flagLevel) === 44){x = 1904, y = 1712
    }else if(parseFloat(flagLevel) === 45){x = 2768, y = 3696
    }else if(parseFloat(flagLevel) === 46){x = 6584, y = 264
    }else if(parseFloat(flagLevel) === 47){x = 3096, y = 472
    }else if(parseFloat(flagLevel) === 48){x = 1608, y = 4901
    }else if(parseFloat(flagLevel) === 49){x = 1000, y = 1144
    }else if(parseFloat(flagLevel) === 50){x = 512, y = 3400
    }else if(parseFloat(flagLevel) === 51){x = 1848, y = 1080
    }else if(parseFloat(flagLevel) === 52){x = 4048, y = 2016
    }else if(parseFloat(flagLevel) === 53){x = 6728, y = 1546
    }else if(parseFloat(flagLevel) === 54){x = 892, y = 312
    }else if(parseFloat(flagLevel) === 55){x = 5456, y = 392
    }else if(parseFloat(flagLevel) === 56){x = 5896, y = 696
    }else if(parseFloat(flagLevel) === 57){x = 2240, y = 1480
    }else if(parseFloat(flagLevel) === 58){x = 5016, y = 1576
    }else if(parseFloat(flagLevel) === 59){x = 4965, y = 1789
    }else if(parseFloat(flagLevel) === 60){x = 3445, y = 1618}
    notify("Flag coordinates changed", "Flag coordinates changed to " + x + ", " + y, "./images/endflag-sheet0.png")
    }else{alert("Please enter a valid level number (1-60)")}
}
function loadFlagCoords(){
    notify("Flag coordinates", x + ", " + y, "./images/endflag-sheet0.png")
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
function loadHowUse(){
    notify("MoveFlag Commands", "Use Shift + F to move the flag to your selected coordinates. Use Shift + G to stop moving the flag. Use Ctrl + ` to change the flag's coordinates. Use Shift + ` if you want to change it to a specific level's flag's coordinates. Use Shift + O to check your current selected coordinates. Use Shift + Z to zoom the camera out. Use Shift + X to zoom the camera in. Use Shift + [ to delete a flag. Use Shift + ] to spawn a flag to your current coordinates.", "https://ovoplant.github.io/ovo/versions/reverse/electric.png")
}

    moveflag.init();
})()
