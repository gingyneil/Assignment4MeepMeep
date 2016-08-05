var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Instruction = (function (_super) {
        __extends(Instruction, _super);
        // private _instructionsButton: objects.Button;
        /**
         * Creates an instance of Menu.
         *
         */
        function Instruction() {
            _super.call(this);
        }
        /**
         *
         */
        Instruction.prototype.Start = function () {
            this._desert = new objects.Desert("desert");
            this.addChild(this._desert);
            // Add Menu Label
            this._instructionLabel = new objects.Label(" INSTRUCTIONS - The goal is to collect as many \n\n berries as you can to collect points.\n\n The enemies are of course are wild coyote’s.\n\n If you collide with a wild coyote you’ll lose\n\n a life. Dodge the coyotes and aim for the\n\n berries. You start off with 10 lives and 0\n\n points. Play until you run out of lives and\n\n try to get the highest score.", "25px", "Consolas", "#8B311E", 5, 50, false);
            this.addChild(this._instructionLabel);
            // add the back button
            this._backButton = new objects.Button("backButton", 320, 420, true);
            this.addChild(this._backButton);
            // Start button event listener
            this._backButton.on("click", this._backButtonClick, this);
            // add this scene to the global scene container
            core.stage.addChild(this);
            console.log("I am here");
            // add the instructionButton
            // this._instructionButtons = new objects.Button("instructionsButton", 420, 420,true )
            // this.addChild(this._instructionButtons);
        };
        Instruction.prototype.Update = function () {
            // scene updates happen here...
            this._desert.update();
        };
        // EVENT HANDLERS ++++++++++++++++
        Instruction.prototype._backButtonClick = function (event) {
            // Switch the scene
            core.scene = config.Scene.MENU;
            core.changeScene();
        };
        return Instruction;
    }(objects.Scene));
    scenes.Instruction = Instruction;
})(scenes || (scenes = {}));
//# sourceMappingURL=instruction.js.map