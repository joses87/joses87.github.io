import BaseScene from './BaseScene.js';

class MenuScene extends BaseScene {

    constructor(config) {
        super('MenuScene', config);

        this.menu = [
            { scene: 'PlayScene', text: 'Play' },
            { scene: 'ScoreScene', text: 'Score' },
            { scene: null, text: 'Exit' }
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
            menuItem.scene && this.scene.start(menuItem.scene);

            if (menuItem.text === 'Exit') {
                this.game.destroy(true);
            }
            else if (menuItem.text === 'Score') {
                this.scene.start(menuItem.scene);

            }
        });






    }



}

export default MenuScene;