var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Over = (function (_super) {
        __extends(Over, _super);
        /**
         * Creates an instance of Menu.
         *
         */
        function Over() {
            _super.call(this);
        }
        /**
         *
         */
        Over.prototype.Start = function () {
            // Add Ocean Background
            this._desert = new objects.Desert("desert");
            this.addChild(this._desert);
            // Add Menu Label
            this._gameOverLabel = new objects.Label("GAME OVER", "60px", "Consolas", "#000000", 320, 180, true);
            this.addChild(this._gameOverLabel);
            // add the start button
            this._restartButton = new objects.Button("restartButton", 320, 420, true);
            this.addChild(this._restartButton);
            this._finalScoreLabel = new objects.Label("SCORE: " + core.score, "60px", "Consolas", "#000000", 320, 240, true);
            this.addChild(this._finalScoreLabel);
            if (core.score > core.highScore) {
                core.highScore = core.score;
            }
            this._highScoreLabel = new objects.Label("HIGH SCORE: " + core.highScore, "60px", "Consolas", "#000000", 320, 50, true);
            this.addChild(this._highScoreLabel);
            // Start button event listener
            this._restartButton.on("click", this._restartButtonClick, this);
            // add this scene to the global scene container
            core.stage.addChild(this);
        };
        Over.prototype.Update = function () {
            // scene updates happen here...
            this._desert.update();
        };
        // EVENT HANDLERS ++++++++++++++++
        Over.prototype._restartButtonClick = function (event) {
            // Switch the scene
            core.lives = 10;
            core.score = 0;
            core.scene = config.Scene.PLAY;
            core.changeScene();
        };
        return Over;
    }(objects.Scene));
    scenes.Over = Over;
})(scenes || (scenes = {}));
//# sourceMappingURL=over.js.map