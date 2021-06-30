import BaseScene from './BaseScene.js';

class PauseScene extends BaseScene {

    constructor(config) {
        super('PauseScene', config);

        this.menu = [
            { scene: 'PlayScene', text: 'Continue' },
            { scene: 'MenuScene', text: 'Exit' }
        ];
    }

    create() {
        super.create();
        this.createMenu(this.menu, (menuItem) => this.setupMenuEvents(menuItem));
    }

    setupMenuEvents(menuItem) {

        const textGO = menuItem.textGO;
        textGO.setInteractive();
        // debugger
        // console.log(this)

        textGO.on('pointerover', () => {
            textGO.setStyle({ fill: '#FF0' })
        });

        textGO.on('pointerout', () => {
            textGO.setStyle({ fill: '#FFF' })
        });

        textGO.on('pointerup', () => {

            console.log("clickinc pause scene");

            if (menuItem.scene && menuItem.text === 'Continue') {
                this.scene.stop();
                this.scene.resume(menuItem.scene);
            }
            else {
                this.scene.stop('PlayScene');
                this.scene.start(menuItem.scene);

            }


        });
    }

}

export default PauseScene;