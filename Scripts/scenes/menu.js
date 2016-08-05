var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Menu = (function (_super) {
        __extends(Menu, _super);
        /**
         * Creates an instance of Menu.
         *
         */
        function Menu() {
            _super.call(this);
        }
        /**
         *
         */
        Menu.prototype.Start = function () {
            this._desert = new objects.Desert("desert");
            this.addChild(this._desert);
            // Add Image 
            this._roadCoy = new createjs.Bitmap(core.assets.getResult("roadCoy"));
            this._roadCoy.x = 210;
            this._roadCoy.y = 50;
            this.addChild(this._roadCoy);
            // Add Menu Label
            this._menuLabel = new objects.Label("Meep Meep", "60px", "Consolas", "#000000", 320, 240, true);
            this.addChild(this._menuLabel);
            // add the start button
            this._startButton = new objects.Button("startButton", 220, 420, true);
            this.addChild(this._startButton);
            // Start button event listener
            this._startButton.on("click", this._startButtonClick, this);
            // add this scene to the global scene container
            core.stage.addChild(this);
            // add the instructionButton
            this._instructionsButton = new objects.Button("instructionsButton", 420, 420, true);
            // Instruction button event listener
            this._instructionsButton.on("click", this._instructionsButtonClick, this);
            this.addChild(this._instructionsButton);
        };
        Menu.prototype.Update = function () {
            // scene updates happen here...
            this._desert.update();
        };
        // EVENT HANDLERS ++++++++++++++++
        Menu.prototype._startButtonClick = function (event) {
            // Switch the scene
            core.scene = config.Scene.PLAY;
            core.changeScene();
        };
        Menu.prototype._instructionsButtonClick = function (event) {
            // Switch the scene
            core.scene = config.Scene.INSTRUCTIONS;
            core.changeScene();
        };
        return Menu;
    }(objects.Scene));
    scenes.Menu = Menu;
})(scenes || (scenes = {}));
//# sourceMappingURL=menu.js.map