export class Fin extends Phaser.Scene {
    constructor() {
        // El string 'Inicio' es el identificador único de esta escena
        super('Fin');
    }

    init(data) {
        // datos pasados desde la escena anterior
        this.finalScore = (data && typeof data.score === 'number') ? data.score : 0;
        this.finalTomates = (data && typeof data.tomates === 'number') ? data.tomates : 0;
        // si quieres mantener la música, puedes recibir su key o instancia
        this.keepMusicKey = data && data.keepMusicKey ? data.keepMusicKey : null;
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
            this.load.image('tomatoIcon', 'assets/Given/Icons/Tomate.png');
            
            this.load.image('Again', 'assets/Given/Icons/BtnAgain.png');
            this.load.image('Menu', 'assets/Given/Icons/BtnMenu.png');

            //Sonidos
            this.load.audio('musicaFondo', 'assets/Given/Sounds/Intro-Ganar.mp3');
            this.load.audio('sonidoBoton', 'assets/Given/Sounds/PlayClick.mp3')



        
        }

    create() {

        const W = this.sys.game.config.width;
        const H = this.sys.game.config.height;
        const centerX = W / 2;
        const centerY = H / 2;

        // Si la música fue pasada por key y quieres reproducirla aquí:
        //if (this.keepMusicKey && !this.sound.get(this.keepMusicKey)) {
        //try {
        //    this.finalMusic = this.sound.add(this.keepMusicKey, { loop: true, volume: 0.9 });
        //    this.finalMusic.play();
        //} catch (e) { /* defensivo */ }
        //}

        //Música/Sonidos
        this.musica = this.sound.add(
            'musicaFondo',
            { loop: true,
            volume: 0.5 });

        this.musica.play();

        //Animaciones Spritesheet
        //this.anims.create({
        //    key: 'botonAnimado',
        //    frames: this.anims.generateFrameNumbers(
        //        'botonSprite', {start: 0, end: 3}),
        //    frameRate: 4,
        //    repeat: -1
        //});
//
        //this.anims.create({
        //    key: 'bolaAnimacion',
        //    frames: this.anims.generateFrameNumbers('bolasprite', { start: 0, end: 14 }),
        //    frameRate: 12,   // ajusta la velocidad (frames por segundo)
        //    repeat: 0        // 0 = se reproduce una sola vez
        //});



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
                //nota.rotation = estado ? rotacionIzquierda : rotacionDerecha;
                //espiral.rotation = estado ? rotacionIzquierda : rotacionDerecha;

                estado = !estado; // alterna entre izquierda y derecha
            }
        });

        const grados = -20;
        const grados2 = 120;
        const radianes = Phaser.Math.DegToRad(grados);    
        const radianes2 = Phaser.Math.DegToRad(grados2);    


        // Dentro de create(), después de crear el botón
        let estadosEscala = [0.6, 0.5, 0.4, 0.5]; // agranda → normal → achica → normal
        let indiceEscala = 0;

        this.time.addEvent({
            delay: 250, // cada medio segundo
            loop: true,
            callback: () => {
                //boton.setScale(estadosEscala[indiceEscala]);
                indiceEscala = (indiceEscala + 1) % estadosEscala.length;
            }
        });


        //ByCreeAc
        const byAC = this.add.image(
            this.sys.game.config.width / 2, 
            this.sys.game.config.height / 2 + 306, 
            'cree'
        )
        .setOrigin(0.5)
        .setScale(0.28);


        // Si la música fue pasada por key y quieres reproducirla aquí:
        if (this.keepMusicKey && !this.sound.get(this.keepMusicKey)) {
        try {
            this.finalMusic = this.sound.add(this.keepMusicKey, { loop: true, volume: 0.9 });
            this.finalMusic.play();
        } catch (e) { /* defensivo */ }
        }

        // --- Contenedor principal para UI
        const uiContainer = this.add.container(0, 0).setDepth(50).setScrollFactor(0);

        // --- Título grande "Score" (centrado)
        const titleStyle = {
        fontFamily: 'Lucidity',
        fontSize: Math.round(H * 0.12) + 'px', // tamaño relativo a pantalla
        color: '#6d67d0',
        stroke: '#f8ff84',
        strokeThickness: 8,
        align: 'center'
        };
        const title = this.add.text(centerX, centerY - 120, 'Score', titleStyle).setOrigin(0.5).setAlpha(0);
        uiContainer.add(title);

        // Animación de entrada tipo zoom-out (similar a level1)
        title.setScale(1.6);
        this.tweens.add({
        targets: title,
        alpha: 1,
        scale: 1,
        duration: 700,
        ease: 'Cubic.out'
        });

        // --- Puntaje numérico (debajo del título)
        const scoreStyle = {
        fontFamily: 'Lucidity',
        fontSize: Math.round(H * 0.12) + 'px',
        color: '#6d67d0',
        stroke: '#f8ff84',
        strokeThickness: 6,
        align: 'center'
        };
        const scoreText = this.add.text(centerX, centerY - 10, String(this.finalScore), scoreStyle).setOrigin(0.5).setAlpha(0);
        uiContainer.add(scoreText);

        // entrada suave del número
        this.tweens.add({
        targets: scoreText,
        alpha: 1,
        y: centerY - 20,
        duration: 600,
        delay: 200,
        ease: 'Back.out(1.2)'
        });

        // --- Icono de tomate a la derecha con su contador
        // Posición: a la derecha del centro (ajusta offset según diseño)
        const rightX = centerX + Math.round(W * 0.28);
        const tomatoY = centerY - 10;

        // Icono
        const tomato = this.add.image(
            rightX - 75, 
            tomatoY, 
            'tomatoIcon')
        .setOrigin(0.5)
        .setScale(Math.min(W, H) * 0.0003) // escala relativa; ajusta si tu icon es grande
        .setDepth(60)
        .setAlpha(0);
        uiContainer.add(tomato);

        // Contador delante del icono (a su izquierda)
        const tomatoCountStyle = {
        fontFamily: 'Lucidity',
        fontSize: Math.round(H * 0.06) + 'px',
        color: '#6d67d0',
        stroke: '#f8ff84',
        strokeThickness: 5,
        align: 'right'
        };
        const tomatoCount = this.add.text(rightX - 60, tomatoY, String(this.finalTomates), tomatoCountStyle).setOrigin(1, 0.5).setAlpha(0);
        uiContainer.add(tomatoCount);

        // Animaciones de entrada para icono y contador
        this.tweens.add({
        targets: [tomato, tomatoCount],
        alpha: 1,
        x: `+=0`, // placeholder para sincronía
        duration: 500,
        delay: 350,
        ease: 'Cubic.out'
        });

        // --- Opcional: botón para volver a menú o reiniciar
        const btnStyle = {
        fontFamily: 'Lucidity',
        fontSize: Math.round(H * 0.04) + 'px',
        color: '#6d67d0',
        backgroundColor: '#333333',
        padding: { x: 18, y: 10 },
        align: 'center'
        };

        // --- Botones de imagen (escala 0.3) y más centrados
        const padding = 24;
        const bottomY = H - 200; // un poco más arriba del borde inferior

        // Posiciones más centradas: 18% y 82% del ancho
        const againX = Math.round(W * 0.30);
        const menuX  = Math.round(W * 0.70);

        // Escalas coherentes: base 0.3, hover y click en valores absolutos
        const baseScale = 0.3;
        const hoverScale = 0.33; // ligero aumento visual
        const clickScale = 0.27; // pequeño "pop" al presionar

        // Again (reiniciar juego) - abajo izquierda, más centrado
        const againBtn = this.createImageButton(
        againX,
        bottomY,
        'Again',
        function() {
            try { if (this.musica && this.musica.isPlaying) this.musica.stop(); } catch(e){}
            try { this.scene.stop('Juego'); } catch(e){} // opcional: detener si existe
            this.scene.start('Juego'); // ajusta 'Game' al key real de tu escena de juego
        },
        { scale: baseScale, hoverScale: hoverScale, clickScale: clickScale, depth: 70 }
        );

        // Menu (volver al menú principal) - abajo derecha, más centrado
        const menuBtn = this.createImageButton(
        menuX,
        bottomY,
        'Menu',
        function() {
            try { if (this.musica && this.musica.isPlaying) this.musica.stop(); } catch(e){}
            this.scene.start('Inicio'); // ajusta 'Inicio' al key real de tu menú
        },
        { scale: baseScale, hoverScale: hoverScale, clickScale: clickScale, depth: 70 }
        );

        // Fade-in opcional para los botones
        this.tweens.add({
        targets: [againBtn, menuBtn],
        alpha: { from: 0, to: 1 },
        duration: 450,
        delay: 700,
        ease: 'Cubic.out'
        });

        // Guardar referencias si las necesitas
        this.ui = this.ui || {};
        this.ui.againBtn = againBtn;
        this.ui.menuBtn = menuBtn;



    }

    // Helper reutilizable para crear un botón con imagen y animaciones consistentes
    createImageButton(x, y, key, onClick, options = {}) {
        const {
            scale = 1,
            hoverScale = 1.08,
            clickScale = 0.92,
            depth = 60,
            anchor = { x: 0.5, y: 0.5 }
        } = options;

        const btn = this.add.image(x, y, key)
            .setOrigin(anchor.x, anchor.y)
            .setScale(scale)
            .setDepth(depth)
            .setInteractive({ useHandCursor: true });

        let hoverTween = null;
        const startHover = () => {
            if (hoverTween) hoverTween.stop();
            hoverTween = this.tweens.add({
            targets: btn,
            scale: hoverScale,
            duration: 220,
            ease: 'Sine.out',
            yoyo: true,
            repeat: -1
            });
        };
        const stopHover = () => {
            if (hoverTween) { hoverTween.stop(); hoverTween = null; }
            this.tweens.add({
            targets: btn,
            scale: scale,
            duration: 120,
            ease: 'Sine.out'
            });
        };

        const doClick = () => {
            if (hoverTween) { hoverTween.stop(); hoverTween = null; }
            this.tweens.add({
            targets: btn,
            scale: clickScale,
            duration: 80,
            ease: 'Cubic.out',
            yoyo: true,
            onComplete: () => {
                try { onClick.call(this); } catch (e) { console.error('button onClick error', e); }
            }
            });
        };

        btn.on('pointerover', startHover);
        btn.on('pointerout', stopHover);
        btn.on('pointerdown', doClick);

        return btn;
    }

}