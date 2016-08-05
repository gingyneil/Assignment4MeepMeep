module scenes {
    export class Play extends objects.Scene {
        //  PRIVATE INSTANCE VARIABLES
        private _desert: objects.Desert;
        private _berry: objects.Berry;
        private _player: objects.Player;
        private _enemys: objects.Enemy[];
        private _collision: managers.Collision;
        private _scoreLabel: objects.Label;
        private _livesLabel: objects.Label;
        private _runSound: createjs.AbstractSoundInstance;

        /**
         * Creates an instance of Menu.
         * 
         */
        constructor() {
            super();
        }

        private _updateScoreBoard(){
            this._livesLabel.text = "Lives: " + core.lives;
            this._scoreLabel.text = "Score: " + core.score;
        }

        /**
         * 
         */
        public Start(): void {
            this._desert = new objects.Desert("desert");
            this.addChild(this._desert);

            this._berry = new objects.Berry("berry");
            this.addChild(this._berry);

            this._player = new objects.Player("player");
            this.addChild(this._player);
            this._runSound = createjs.Sound.play("run");
            this._runSound.loop = -1;

            this._enemys = new Array<objects.Enemy>();
            for (let count = 0; count < 3; count++) {
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
        }

        public Update(): void {
            this._desert.update();
            this._berry.update();
            this._player.update();
            this._collision.check(this._player, this._berry);

            //Update each cloud
            this._enemys.forEach(enemy => {
                enemy.update();
                this._collision.check(this._player, enemy);
            });

            this._updateScoreBoard();

            if (core.lives < 1) {
                this._runSound.stop();               
                core.scene = config.Scene.OVER;
                core.changeScene();
            }
        }

        // EVENT HANDLERS ++++++++++++++++

        private _startButtonClick(event: createjs.MouseEvent): void {
            // Switch the scene
            core.scene = config.Scene.OVER;
            core.changeScene();
        }
    }
}