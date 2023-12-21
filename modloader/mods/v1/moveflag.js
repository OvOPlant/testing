(function() {
    let old = globalThis.sdk_runtime;
    c2_callFunction("execCode", ["globalThis.sdk_runtime = this.runtime"]);
    let runtime = globalThis.sdk_runtime;
    globalThis.sdk_runtime = old;
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

    x = 1512
    y = 288

    let moveflag = {
        init() {
            document.addEventListener("keydown", (event) => {
                if (event.code === "KeyF") {
                    if (event.shiftKey) {
                        this.startCycle();
                    }
                }
                if (event.code === "KeyG") {
                    if (event.shiftKey) {
                        this.stopCycle();
                    }
                }
                if (event.code === "KeyO") {
                    if (event.shiftKey) {
                        this.loadFlagCoords();
                    }
                }
                if (event.code === "KeyZ") {
                    if (event.shiftKey) {
                        this.loadZoomOut();
                    }
                }
                if (event.code === "KeyX") {
                    if (event.shiftKey) {
                        this.loadZoomIn();
                    }
                }
                if (event.code === "KeyD") {
                    if (event.shiftKey) {
                        this.loadDeleteFlag();
                    }
                }
                if (event.code === "KeyU") {
                    if (event.shiftKey) {
                        this.loadDeleteSpikes();
                    }
                }
                if (event.code === "KeyI") {
                    if (event.shiftKey) {
                        this.loadUndeleteSpikes();
                    }
                }
                if (event.code === "KeyY") {
                    if (event.shiftKey) {
                        this.loadSpawnFlag();
                    }
                }
            });

            this.interval = null;
            globalThis.ovoMoveFlag = this;
            notify("Mod loaded", "Use Shift + F to infinitely move the flag to the chosen coordinates. Use Shift + G to stop.");
            notify("Mod loaded", "Use Shift + O to view the current coords to see any mistakes. Use the Modloader to change the x and y coords to whatever you want.");
        },

        loadMoveFlag() {
            ovoModAPI.game.moveInstance(ovoModAPI.game.getFlag(), x, y)
        },

       loadFlagCoords() {
            ovoModAPI.game.notify("Flag X coordinates", x, "./images/endflag-sheet0.png")
            ovoModAPI.game.notify("Flag Y coordinates", y, "./images/endflag-sheet0.png")
        },
     
       loadZoomOut() {
            ovoModAPI.game.getLayer().scale = 0.5
        },

loadZoomIn() {
            ovoModAPI.game.getLayer().scale = 1
        },

loadDeleteFlag() {
            ovoModAPI.game.destroyInstance(ovoModAPI.game.getFlag())
        },

loadDeleteSpikes() {
            ovoModAPI.game.runtime.behaviors[5].my_types[0].all_frames[0].hotspotX = 100000
        },

loadUndeleteSpikes() {
            ovoModAPI.game.runtime.behaviors[5].my_types[0].all_frames[0].hotspotX = 0.5
        },
loadSpawnFlag() {
            ovoModAPI.game.createSprite(x, y, null, null, 0, "endflag", "Layer 0")
        },



       startCycle(time) {
            if (!this.interval) {
                this.interval = setInterval(this.loadMoveFlag, time);
            }
        },

        stopCycle() {
            if (this.interval) {
                clearInterval(this.interval);
                this.interval = null;
            }
        }
    }

    moveflag.init();
})()
