var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Play = (function (_super) {
        __extends(Play, _super);
        /**
         * Creates an instance of Menu.
         *
         */
        function Play() {
            _super.call(this);
        }
        Play.prototype._updateScoreBoard = function () {
            this._livesLabel.text = "Lives: " + core.lives;
            this._scoreLabel.text = "Score: " + core.score;
        };
        /**
         *
         */
        Play.prototype.Start = function () {
            this._desert = new objects.Desert("desert");
            this.addChild(this._desert);
            this._berry = new objects.Berry("berry");
            this.addChild(this._berry);
            this._player = new objects.Player("player");
            this.addChild(this._player);
            this._runSound = createjs.Sound.play("run");
            this._runSound.loop = -1;
            this._enemys = new Array();
            for (var count = 0; count < 3; count++) {
                this._enemys.push(new objects.Enemy("enemy"));
                this.addChild(this._enemys[count]);
            }
            //include a collision manager
            this._collision = new managers.Collision();
            // add this scene to the global scene container
            core.stage.addChild(this);
            //add lives and score labels
            this._livesLabel = new objects.Label("Lives: " + core.lives, "40px", "Consolas", "#000000", 10, 5, false);
            this.addChild(this._livesLabel);
            this._scoreLabel = new objects.Label("Score: " + core.score, "40px", "Consolas", "#000000", 350, 5, false);
            this.addChild(this._scoreLabel);
        };
        Play.prototype.Update = function () {
            var _this = this;
            this._desert.update();
            this._berry.update();
            this._player.update();
            this._collision.check(this._player, this._berry);
            //Update each cloud
            this._enemys.forEach(function (enemy) {
                enemy.update();
                _this._collision.check(_this._player, enemy);
            });
            this._updateScoreBoard();
            if (core.lives < 1) {
                this._runSound.stop();
                core.scene = config.Scene.OVER;
                core.changeScene();
            }
        };
        // EVENT HANDLERS ++++++++++++++++
        Play.prototype._startButtonClick = function (event) {
            // Switch the scene
            core.scene = config.Scene.OVER;
            core.changeScene();
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map