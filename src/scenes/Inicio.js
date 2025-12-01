export class Inicio extends Phaser.Scene {
    constructor() {
        // El string 'Inicio' es el identificador único de esta escena
        super('Inicio');
    }

    preload() {
        // Cargar el spritesheet del botón
        this.load.spritesheet(
            'botonSprite',
            'assets/Given/Inicio/spritesheet.png', 
        {
            frameWidth: 657,
            frameHeight: 480
        });

        // Cargar el spritesheet de la bola
        this.load.spritesheet(
            'bolasprite',
            'assets/Given/Inicio/BolaSS.png', 
        {
            frameWidth: 1080,
            frameHeight: 810
        });

        //Sonido de la Bola
        this.load.audio('sonidoBola', 'assets/Given/Sounds/BolaSound.mp3');

        //Imágenes
            //Título
        this.load.image('title', 'assets/Given/Inicio/titulo_cloudee.png');
            //Bola
        this.load.image('bola', 'assets/Given/Inicio/bola.png');
            //Íconos
        this.load.image('star', 'assets/Given/Inicio/star.png');
        this.load.image('nota', 'assets/Given/Inicio/Nota.png');
        this.load.image('cree', 'assets/Given/Inicio/CreeAC.png');
        this.load.image('espiral', 'assets/Given/Inicio/espiral.png');
        this.load.audio('musicaFondo', 'assets/Given/Sounds/Intro-Ganar.mp3');
        this.load.audio('sonidoBoton', 'assets/Given/Sounds/PlayClick.mp3')

    
    }

    create() {

        //Música/Sonidos
        this.musica = this.sound.add(
            'musicaFondo',
            { loop: true,
            volume: 0.5 });

        this.musica.play();

        //Animaciones Spritesheet
       //if this.animm.exist
       this.anims.create({
            key: 'botonAnimado',
            frames: this.anims.generateFrameNumbers(
                'botonSprite', {start: 0, end: 3}),
            frameRate: 4,
            repeat: -1
        });

        this.anims.create({
            key: 'bolaAnimacion',
            frames: this.anims.generateFrameNumbers('bolasprite', { start: 0, end: 14 }),
            frameRate: 12,   // ajusta la velocidad (frames por segundo)
            repeat: 0        // 0 = se reproduce una sola vez
        });



        // 1. Fondo blanco: dibujamos un rectángulo que cubra toda la pantalla
        this.add.rectangle(0, 0, this.sys.game.config.width, this.sys.game.config.height, 0xffffff)
            .setOrigin(0, 0); 
        // setOrigin(0,0) asegura que el rectángulo empiece desde la esquina superior izquierda



        //3. Imágenes
            //Bola de papel
        const bola = this.add.image(
            this.sys.game.config.width / 2, 
            this.sys.game.config.height / 2 + 30, 
            'bola'
        )
        .setOrigin(0.5)
        .setScale(1.15);

            //Íconos
        const estrella = this.add.image(
            this.sys.game.config.width / 2 - 330, 
            this.sys.game.config.height / 2 - 70, 
            'star'
        )
        .setOrigin(0.5)
        .setScale(0.2);

        // Alternar rotación bruscamente cada 500ms
        let rotacionIzquierda = Phaser.Math.DegToRad(-30);
        let rotacionDerecha = Phaser.Math.DegToRad(30);
        let estado = true; // true = izquierda, false = derecha

        this.time.addEvent({
            delay: 300, // medio segundo
            loop: true,
            callback: () => {
                estrella.rotation = estado ? rotacionIzquierda : rotacionDerecha;
                nota.rotation = estado ? rotacionIzquierda : rotacionDerecha;
                espiral.rotation = estado ? rotacionIzquierda : rotacionDerecha;
  
                estado = !estado; // alterna entre izquierda y derecha
            }
        });

        const grados = -20;
        const grados2 = 120;
        const radianes = Phaser.Math.DegToRad(grados);    
        const radianes2 = Phaser.Math.DegToRad(grados2);    


        const nota = this.add.image(
            this.sys.game.config.width / 2 + 320, 
            this.sys.game.config.height / 2 - 250, 
            'nota'
        )
        .setOrigin(0.5)
        .setScale(0.15)
        .setRotation(radianes);


        const espiral = this.add.image(
            this.sys.game.config.width / 2 + 190, 
            this.sys.game.config.height / 2 + 170, 
            'espiral'
        )
        .setOrigin(0.5)
        .setScale(0.15)
        .setAlpha(0.6)
        .setRotation(radianes2);

            //Título
        const titulo = this.add.image(
            this.sys.game.config.width / 2, 
            this.sys.game.config.height / 2 - 80, 
            'title'
        )
        .setOrigin(0.5)
        .setScale(0.7);

        // 2. Botón
        // Crear el sprite del botón en el centro de la pantalla
        const boton = this.add.sprite(
            this.sys.game.config.width / 2, 
            this.sys.game.config.height / 2 + 90,
            'botonSprite'
            )
            .setOrigin(0.5)
            .setScale(0.5)
            .setInteractive({ cursor: 'pointer' });

        // Reproducir la animación
        boton.play('botonAnimado');


        // Dentro de create(), después de crear el botón
        let estadosEscala = [0.6, 0.5, 0.4, 0.5]; // agranda → normal → achica → normal
        let indiceEscala = 0;

        this.time.addEvent({
            delay: 250, // cada medio segundo
            loop: true,
            callback: () => {
                boton.setScale(estadosEscala[indiceEscala]);
                indiceEscala = (indiceEscala + 1) % estadosEscala.length;
            }
        });


        // Evento de click → pasar a la escena del juego
        boton.on('pointerdown', () => {
            const sonido = this.sound.add('sonidoBoton');
            sonido.play();

            //Elementos que desaparecerán
            const elementosFade = [estrella, nota, espiral, titulo, boton, byAC];

            elementosFade.forEach(el => {
                this.tweens.add({
                    targets: el,
                    alpha: 0,
                    duration: 800,
                    ease: 'Linear'
                });
            });

            // Esperar a que termine el sonido antes de cambiar de escena
            sonido.once('complete', () => {
                this.musica.stop();

                // Reemplazar bola por el sprite animado
                bola.destroy(); // elimina la imagen estática
                const bolaAnimada = this.add.sprite(
                    this.sys.game.config.width / 2,
                    this.sys.game.config.height / 2 + 30,
                    'bolasprite'
                )
                .setOrigin(0.5)
                .setScale(1.15);
                
                // Reproducir sonido nuevo junto con la animación
                const sonidoBola = this.sound.add('sonidoBola');
                sonidoBola.play();

                bolaAnimada.play('bolaAnimacion');

                // Cuando termina la animación → pasar a Juego
                bolaAnimada.on('animationcomplete', () => {
                this.scene.start('Juego');
                sonidoBola.stop();
                });
            });        
        });

        //ByCreeAc
        const byAC = this.add.image(
            this.sys.game.config.width / 2, 
            this.sys.game.config.height / 2 + 306, 
            'cree'
        )
        .setOrigin(0.5)
        .setScale(0.28);
    }
}
