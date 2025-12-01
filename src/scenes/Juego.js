export class Juego extends Phaser.Scene {
    constructor() {
        // El string 'Inicio' es el identificador único de esta escena
        super('Juego');
    }

    preload() {
        //Cargar Imágenes

            //Título Level 1
        this.load.image('level1', 'assets/Given/Títulos/level1.png');
            //Íconos
        this.load.image('Nota1', 'assets/Given/Icons/Nota1.png');
        this.load.image('Nota2', 'assets/Given/Icons/Nota2.png');
        this.load.image('Nota1Fail', 'assets/Given/Icons/Nota1Fail.png');
        this.load.image('Nota2Fail', 'assets/Given/Icons/Nota2Fail.png');
        this.load.image('Tomate', 'assets/Given/Icons/Tomate.png');
        this.load.image('Rayo', 'assets/Given/Icons/Rayo.png');
        this.load.image('TomateExplotado', 'assets/Given/Icons/TomateExplotado.png');

        this.load.image('winseal', 'assets/Given/Icons/WinSeal.png');
        this.load.image('LostSeal', 'assets/Given/Icons/LostSeal.png');

        this.load.image('Badee', 'assets/Given/Icons/badee.png');
        this.load.image('yesdee', 'assets/Given/Icons/yesdee.png');


        
            //Nubes
        this.load.image('NubeBasic', 'assets/Given/Icons/NubeBasic.png');
        this.load.image('NubeEstrella', 'assets/Given/Icons/NubeStar.png');
        this.load.image('NubeInicioFin', 'assets/Given/Icons/NubeInicioFin.png');
        this.load.image('NubeEspiral', 'assets/Given/Icons/NubeEspiral.png');

        //Sonidos
             //Canción principal
        this.load.audio('cancionJuego', 'assets/Given/Sounds/MainSong.mp3');
        this.load.audio('sonidoWin', 'assets/Given/Sounds/Win.mp3');
        this.load.audio('sonidoLost', 'assets/Given/Sounds/Thunder.mp3');


        //Videos
        this.load.video('fondoBasic', 'assets/Given/Fondos/BasicBG.mp4', 'loadeddata', false, true);
        this.load.video('fondoStar', 'assets/Given/Fondos/StarBG.mp4', 'loadeddata', false, true);
        this.load.video('fondoRain', 'assets/Given/Fondos/RainBG.mp4', 'loadeddata', false, true);
        this.load.video('fondoStarRain', 'assets/Given/Fondos/StarRainBG.mp4', 'loadeddata', false, true);
        this.load.video('fondoThunder', 'assets/Given/Fondos/ThunderBG.mp4', 'loadeddata', false, true);

        //SpriteSheets

        //Cloudee cayendo
        this.load.spritesheet(
            'falling1', 
            'assets/Given/Animaciones/CaidaSprite_part_0.png', 
            { frameWidth: 1920, frameHeight: 1080 }
        );

        this.load.spritesheet(
            'falling2', 
            'assets/Given/Animaciones/CaidaSprite_part_1.png', 
            { frameWidth: 1920, frameHeight: 1080 }
        );

        this.load.spritesheet(
            'falling3', 
            'assets/Given/Animaciones/CaidaSprite_part_2.png', 
            { frameWidth: 1920, frameHeight: 1080 }
        );

        this.load.spritesheet(
            'falling4', 
            'assets/Given/Animaciones/CaidaSprite_part_3.png', 
            { frameWidth: 1920, frameHeight: 1080 }
        );

        this.load.spritesheet(
            'falling5', 
            'assets/Given/Animaciones/CaidaSprite_part_4.png', 
            { frameWidth: 1920, frameHeight: 1080 }
        );

        this.load.spritesheet(
            'falling6', 
            'assets/Given/Animaciones/CaidaSprite_part_5.png', 
            { frameWidth: 1920, frameHeight: 1080 }
        );

        this.load.spritesheet(
            'falling7', 
            'assets/Given/Animaciones/CaidaSprite_part_6.png', 
            { frameWidth: 1920, frameHeight: 1080 }
        );
        this.load.spritesheet(
            'falling8', 
            'assets/Given/Animaciones/CaidaSprite_part_7.png', 
            { frameWidth: 1920, frameHeight: 1080 }
        );

        //Baile Básico
        this.load.spritesheet(
            'BaileBasico1', 
            'assets/Given/Animaciones/BasicSprite_part_0.png', 
            { frameWidth: 2048, frameHeight: 1536 }
        );

        this.load.spritesheet(
            'BaileBasico2', 
            'assets/Given/Animaciones/BasicSprite_part_1.png', 
            { frameWidth: 2048, frameHeight: 1536 }
        );

        this.load.spritesheet(
            'BaileBasico3', 
            'assets/Given/Animaciones/BasicSprite_part_2.png', 
            { frameWidth: 2048, frameHeight: 1536 }
        );

        this.load.spritesheet(
            'BaileBasico4', 
            'assets/Given/Animaciones/BasicSprite_part_3.png', 
            { frameWidth: 2048, frameHeight: 1536 }
        );

        this.load.spritesheet(
            'BaileBasico5', 
            'assets/Given/Animaciones/BasicSprite_part_4.png', 
            { frameWidth: 2048, frameHeight: 1536 }
        );

        this.load.spritesheet(
            'BaileBasico6', 
            'assets/Given/Animaciones/BasicSprite_part_5.png', 
            { frameWidth: 2048, frameHeight: 1536 }
        );

        //Pirueta
        this.load.spritesheet(
            'Pirueta1', 
            'assets/Given/Animaciones/VueltaSprite_part_0.png', 
            { frameWidth: 2048, frameHeight: 1536 }
        );

        this.load.spritesheet(
            'Pirueta2', 
            'assets/Given/Animaciones/VueltaSprite_part_1.png', 
            { frameWidth: 2048, frameHeight: 1536 }
        );

        this.load.spritesheet(
            'Pirueta3', 
            'assets/Given/Animaciones/VueltaSprite_part_2.png', 
            { frameWidth: 2048, frameHeight: 1536 }
        );

        this.load.spritesheet(
            'Pirueta4', 
            'assets/Given/Animaciones/VueltaSprite_part_3.png', 
            { frameWidth: 2048, frameHeight: 1536 }
        );

        this.load.spritesheet(
            'Pirueta5', 
            'assets/Given/Animaciones/VueltaSprite_part_4.png', 
            { frameWidth: 2048, frameHeight: 1536 }
        );

        //Choque
        this.load.spritesheet(
            'Choque1', 
            'assets/Given/Animaciones/ChoqueSprite_part_0.png', 
            { frameWidth: 2048, frameHeight: 1536 }
        );

        this.load.spritesheet(
            'Choque2', 
            'assets/Given/Animaciones/ChoqueSprite_part_1.png', 
            { frameWidth: 2048, frameHeight: 1536 }
        );

        this.load.spritesheet(
            'Choque3', 
            'assets/Given/Animaciones/ChoqueSprite_part_2.png', 
            { frameWidth: 2048, frameHeight: 1536 }
        );

        this.load.spritesheet(
            'Choque4', 
            'assets/Given/Animaciones/ChoqueSprite_part_3.png', 
            { frameWidth: 2048, frameHeight: 1536 }
        );

        //Espiral
        this.load.spritesheet(
            'Espiral1', 
            'assets/Given/Animaciones/EspiralSprite_part_0.png', 
            { frameWidth: 2048, frameHeight: 1536 }
        );
        this.load.spritesheet(
            'Espiral2', 
            'assets/Given/Animaciones/EspiralSprite_part_1.png', 
            { frameWidth: 2048, frameHeight: 1536 }
        );
        this.load.spritesheet(
            'Espiral3', 
            'assets/Given/Animaciones/EspiralSprite_part_2.png', 
            { frameWidth: 2048, frameHeight: 1536 }
        );
        this.load.spritesheet(
            'Espiral4', 
            'assets/Given/Animaciones/EspiralSprite_part_3.png', 
            { frameWidth: 2048, frameHeight: 1536 }
        );
        this.load.spritesheet(
            'Espiral5', 
            'assets/Given/Animaciones/EspiralSprite_part_4.png', 
            { frameWidth: 2048, frameHeight: 1536 }
        );

        //Borrador
        this.load.spritesheet(
            'Borrador1', 
            'assets/Given/Animaciones/Borrador2_part_0.png', 
            { frameWidth: 2048, frameHeight: 1536 }
        );
        this.load.spritesheet(
            'Borrador2', 
            'assets/Given/Animaciones/Borrador2_part_1.png', 
            { frameWidth: 2048, frameHeight: 1536 }
        );
        this.load.spritesheet(
            'Borrador3', 
            'assets/Given/Animaciones/Borrador2_part_2.png', 
            { frameWidth: 2048, frameHeight: 1536 }
        );
        this.load.spritesheet(
            'Borrador4', 
            'assets/Given/Animaciones/Borrador2_part_3.png', 
            { frameWidth: 2048, frameHeight: 1536 }
        );
        this.load.spritesheet(
            'Borrador5', 
            'assets/Given/Animaciones/Borrador2_part_4.png', 
            { frameWidth: 2048, frameHeight: 1536 }
        );
        this.load.spritesheet(
            'Borrador6', 
            'assets/Given/Animaciones/Borrador2_part_5.png', 
            { frameWidth: 2048, frameHeight: 1536 }
        );
        this.load.spritesheet(
            'Borrador7', 
            'assets/Given/Animaciones/Borrador2_part_6.png', 
            { frameWidth: 2048, frameHeight: 1536 }
        );
        this.load.spritesheet(
            'Borrador8', 
            'assets/Given/Animaciones/Borrador3_part_0.png', 
            { frameWidth: 2048, frameHeight: 1536 }
        );
        this.load.spritesheet(
            'Borrador9', 
            'assets/Given/Animaciones/Borrador3_part_1.png', 
            { frameWidth: 2048, frameHeight: 1536 }
        );
        this.load.spritesheet(
            'Borrador10', 
            'assets/Given/Animaciones/Borrador3_part_2.png', 
            { frameWidth: 2048, frameHeight: 1536 }
        );
        this.load.spritesheet(
            'Borrador11', 
            'assets/Given/Animaciones/Borrador3_part_3.png', 
            { frameWidth: 2048, frameHeight: 1536 }
        );
        this.load.spritesheet(
            'Borrador12', 
            'assets/Given/Animaciones/Borrador3_part_4.png', 
            { frameWidth: 2048, frameHeight: 1536 }
        );
        this.load.spritesheet(
            'Borrador13', 
            'assets/Given/Animaciones/Borrador3_part_5.png', 
            { frameWidth: 2048, frameHeight: 1536 }
        );
        this.load.spritesheet(
            'Borrador14', 
            'assets/Given/Animaciones/Borrador3_part_6.png', 
            { frameWidth: 2048, frameHeight: 1536 }
        );
        this.load.spritesheet(
            'Borrador15', 
            'assets/Given/Animaciones/Borrador3_part_7.png', 
            { frameWidth: 2048, frameHeight: 1536 }
        );

    }

    create() {

        // Inicialización en create()
        // --- Añadir / reemplazar en create() ---
        this.modoPrincipal = 'basico';

        // base del modo principal (1 en básico, 2 en tormenta)
        this.baseMultiplicador = 1;

        // multiplicador propio de Estrella (1 = inactivo, 2..4 = niveles)
        this.starMultiplier = 1;

        // multiplicador efectivo que se usa para sumar puntos
        this.multiplicador = this.baseMultiplicador * this.starMultiplier;

        // pila de secundarios
        this.secondaryStack = this.secondaryStack || [];
        
        // Escala base del personaje: se fija una sola vez y no cambia en transiciones
        this.personajeBaseScale = (this.personaje && this.personaje.scaleX) ? this.personaje.scaleX : 1;


        // combo
        this.comboActual = 0;
        this.comboObjetivo = 10;
        this.estrellaNivel = 0;
        this.estrellaMaxNivel = 2;

        // Umbrales y flags
        this.comboThreshold = 3; // mostrar COMBO a partir de 3 aciertos seguidos
        this._comboVisible = false;
        this._comboTween = null;
        this._lastComboShown = 0;

        this._multVisible = false;
        this._multTween = null;
        this.multiplierThreshold = 2; // mostrar multiplicador a partir de x2

        // Referencias HUD (se crearán más abajo)
        this.hudComboContainer = null;
        this.hudMultContainer = null;


        // Contadores globales
        this.fallosConsecutivos = 0;
        this.aciertosConsecutivos = 0;

        // Parámetros
        this.espiralFallosObjetivo = 3;
        this.espiralAciertosObjetivo = 3;

        this.lluviaFallosObjetivo = 5;   // si se fallan 5 en Lluvia -> game over
        this.lluviaAciertosObjetivo = 5; // si se aciertan 5 en Lluvia -> volver a Espiral

        // Prioridades (mayores = más prioridad)
        this.prioridadEstrella = 100;
        this.prioridadEspiral = 50;
        this.prioridadLluvia  = 60; // ahora Lluvia > Espiral

  
        // Referencias visuales que usaremos
        this.nubeBasic = null;
        this.nubeEstrella = null;
        this.videoStar = null;

        // 1. Fondo blanco: dibujamos un rectángulo que cubra toda la pantalla
        this.add.rectangle(0, 0, this.sys.game.config.width, this.sys.game.config.height, 0xffffff)
            .setOrigin(0, 0); 
        // setOrigin(0,0) asegura que el rectángulo empiece desde la esquina superior izquierda

        this._suppressSecondaryTriggers = false;


        //Fondos (Video)
        this.videoFondo = this.add.video(
            this.sys.game.config.width/2, 
            this.sys.game.config.height/2, 
            'fondoBasic');
        this.videoFondo
        .setOrigin(0.5)
        .setDisplaySize(
            this.sys.game.config.width/10, 
            this.sys.game.config.height/5);
        this.videoFondo.play(true); // true = loop
        this.videoFondo.setDepth(0); // el video queda delante

        // Música
        // ⏱️ Tiempo máximo de juego (1 minuto)
        this.tiempoMaximo = 60 * 1000; // en milisegundos
        this.tiempoInicio = this.time.now;

        // 🏆 Variables de puntaje
        this.puntosNotas = 0;
        this.puntosRayos = 0;
        this.tomates = 0;

        // Crear grupo de Notas en create()
        this.notasGroup = this.add.group();

        // dentro de tu escena, en create()
        document.fonts.ready.then(() => {
        // ahora la fuente Lucidity está lista en el navegador
        this.textoPuntaje = this.add.text(40, 25, 'Puntaje: 0', {
            fontFamily: 'Lucidity',
            fontSize: '32px',
            color: '#57a1ff'
        }).setDepth(100);
        });

        // función que crea el HUD de tomates
        const createTomateHUD = () => {
            const padding = 16;
            const extraOffset = 200; // mueve el HUD 40px hacia la izquierda desde el borde (ajusta)
            const gameWidth = this.sys.game.config.width;

            const iconSize = 36; // tamaño del icono en px
            const fontSize = 32;
            const gap = 8; // separación entre número e icono

            // crear icono y texto en posiciones iniciales (con offset)
            this.hudTomateIcon = this.add.image(gameWidth - padding - extraOffset, padding + 4, 'Tomate')
                .setOrigin(1, 0)
                .setDisplaySize(iconSize, iconSize)
                .setScale(0.1)

                .setDepth(100)
                .setScrollFactor(0); // fija al HUD (no se mueve con la cámara)

            this.hudTomateText = this.add.text(
                gameWidth - padding - extraOffset - iconSize - gap,
                padding,
                `${this.tomatesRecogidos}`,
                {
                fontFamily: 'Lucidity',
                fontSize: `${fontSize}px`,
                color: '#57a1ff',
                align: 'right'
                }
            ).setOrigin(1, 0).setDepth(100).setScrollFactor(0);
        };

        // función para reposicionar (llámala en resize o en update si cambia el tamaño)
        this.repositionTomateHUD = function() {
        if (!this.hudTomateIcon || !this.hudTomateText) return;
        const padding = 16;
        const extraOffset = 40; // mismo valor que en createTomateHUD
        const gameWidth = this.sys.game.config.width;
        const iconSize = this.hudTomateIcon.displayWidth || 36;
        const gap = 8;

        // recalcular X del icono y del texto
        this.hudTomateIcon.setX(gameWidth - padding - extraOffset);
        this.hudTomateText.setX(gameWidth - padding - extraOffset - iconSize - gap);
        };


        // Si ya esperas la fuente con document.fonts.ready
        if (document && document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => {
            createTomateHUD();
        });
        } else {
        // fallback inmediato si no usas document.fonts
        createTomateHUD();
        }

        this.createComboHUD();
        this.createMultiplierHUD();



        // Texto de puntaje en pantalla
        //this.textoPuntaje = this.add.text(20, 20, 'Puntaje: 0', {
        //    fontSize: '32px',
        //    fill: '#57a1ff'
        //}).setDepth(100); // siempre al frente;

        

        // Evento para terminar el juego después de 1 minuto
        this.time.delayedCall(this.tiempoMaximo, () => {
            this.finalizarJuego();
        });


        //Imágenes
        this.nube = this.add.image(
            this.sys.game.config.width/2, 
            this.sys.game.config.height/2 + 150, 
            'NubeInicioFin')
            .setOrigin(0.5);

        if (!this.anims.exists('CloudeeCae')) {
            this.anims.create({
                key: 'CloudeeCae',
                frames: [
                    ...this.anims.generateFrameNumbers('falling1', { start: 0, end: 3 }),
                    ...this.anims.generateFrameNumbers('falling2', { start: 0, end: 3 }),
                    ...this.anims.generateFrameNumbers('falling3', { start: 0, end: 3 }),
                    ...this.anims.generateFrameNumbers('falling4', { start: 0, end: 3 }),
                    ...this.anims.generateFrameNumbers('falling5', { start: 0, end: 3 }),
                    ...this.anims.generateFrameNumbers('falling6', { start: 0, end: 3 }),
                    ...this.anims.generateFrameNumbers('falling7', { start: 0, end: 3 }),
                    ...this.anims.generateFrameNumbers('falling8', { start: 0, end: 3 }),
                ],
                frameRate: 12,
                repeat: 0
            });
        }

        
        this.personaje = this.add.sprite(
            this.sys.game.config.width/2, 
            this.sys.game.config.height/2 - 200,
            'falling1')
        .setOrigin(0.5);
        //this.personaje.setScale(1); // escala por defecto


        this.personaje.play('CloudeeCae');

        // Tween para trasladar el personaje hacia el centro
        this.tweens.add({
            targets: this.personaje,
            y: this.sys.game.config.height / 2, // destino: centro vertical
            duration: 2000,                     // duración en ms (ajústalo según la música/animación)
            ease: 'Linear'
        });

        this.personaje.on('animationcomplete', () => {
            this.mostrarLevel1();
        })

        // create()
        this.rayosSpawned = 0;
        this.rayoActive = null; // { sprite, tween } o null
        this.maxRayos = 2;      // máximo 2 (1 garantizado + 1 opcional)
        this.rayoCollisionDistance = 28; // umbral de colisión con personaje (ajusta)
        this.rayoSpeed = this.noteSpeed || 220; // velocidad similar a las notas (px/s)
        this.partidaDuracion = this.partidaDuracion || 60; // si ya la tienes, usa la tuya
        // Guarda referencia para timers si quieres cancelar
        this.rayoTimers = [];

        // create() - programación de rayos
        const startMs = 30000;
        const endMs = 40000;
        const guaranteedLMs = 33000; // segundo 33

        // siempre programamos el garantizado
        this.rayoTimers.push(this.time.delayedCall(guaranteedLMs, () => this.trySpawnRayo(), [], this));

        // decidir si habrá un rayo adicional (50% probabilidad, o según prefieras)
        const spawnExtra = Math.random() < 0.5; // ajusta probabilidad
        if (spawnExtra) {
        // generar tiempo aleatorio entre 30s y 40s, distinto de 33s
        let t;
        do {
            t = Math.floor(startMs + Math.random() * (endMs - startMs));
        } while (Math.abs(t - guaranteedLMs) <= 300); // evitar muy cercano a 33s
        this.rayoTimers.push(this.time.delayedCall(t, () => this.trySpawnRayo(), [], this));
        }

        // create()
        if (!this.anims.exists('choque')) {
            // Si cargaste un spritesheet 'Choque'
            if (this.textures.exists('Choque')) {
                this.anims.create({
                key: 'choque',
                frames: this.anims.generateFrameNumbers('Choque', { start: 0, end: 3 }),
                frameRate: 8,
                repeat: 0
                });
            } else {
                // Si cargaste imágenes separadas Choque1..Choque4
                this.anims.create({
                key: 'choque',
                frames: [
                    { key: 'Choque1' }, { key: 'Choque2' }, { key: 'Choque3' }, { key: 'Choque4' }
                ],
                frameRate: 8,
                repeat: 0
                });
            }
        }


        // Hook temporal: detectar cambios inesperados
        const originalSet = Object.getOwnPropertyDescriptor(this, 'multiplicador');
        Object.defineProperty(this, 'multiplicador', {
        configurable: true,
        enumerable: true,
        get() { return this._multiplicador; },
        set(v) {
            console.log('[MUTACIÓN multiplicador] antes:', this._multiplicador, 'después:', v, new Error().stack.split('\n')[2].trim());
            this._multiplicador = v;
        }
        });
        this._multiplicador = this.baseMultiplicador * this.starMultiplier;

        //Tomates
        this.tomatesRecogidos = 0;
        this.tomatesSpawned = 0;
        this.maxTomates = 5;      // máximo por partida
        this.minTomates = 1;      // mínimo por partida
        this.tomateActive = null; // referencia al tomate actual (si existe)
        this.tomateTimers = [];   // para cancelar delayedCalls si hace falta
        this.partidaDuracion = 60; // segundos de la partida
        this.tomateSpeed = this.noteSpeed || 220; // px/s aproximado

        // --- Generar N entre minTomates y maxTomates ---
        const nTomates = Math.max(this.minTomates, Math.floor(Math.random() * (this.maxTomates - this.minTomates + 1)) + this.minTomates);

        // --- Crear array de tiempos (ms) con uno garantizado en 10s ---
        const totalMs = this.partidaDuracion * 1000;
        const guaranteedMs = 10000; // segundo 10

        const spawnTimesSet = new Set();
        spawnTimesSet.add(guaranteedMs);

        // Generar los restantes aleatorios (evitar duplicados exactos)
        while (spawnTimesSet.size < nTomates) {
            // generar entre 0 y totalMs (excluyendo 0 si prefieres)
            const t = Math.floor(Math.random() * totalMs);
            // opcional: evitar tiempos demasiado cercanos a 10s (por ejemplo +/- 500ms)
            if (Math.abs(t - guaranteedMs) <= 500) continue;
            spawnTimesSet.add(t);
        }

        // Convertir a array y ordenar
        const spawnTimes = Array.from(spawnTimesSet).sort((a,b) => a - b);

        // Programar delayedCalls y guardar referencias
        spawnTimes.forEach((msDelay) => {
            const timer = this.time.delayedCall(msDelay, () => {
                this.trySpawnTomate();
            }, [], this);
            this.tomateTimers.push(timer);
        });

        // Opcional: cancelar timers al finalizar la escena/partida
        this.events.on('shutdown', () => {
            this.tomateTimers.forEach(t => { try { t.remove(false); } catch(e){} });
            this.tomateTimers = [];
        }, this);


    }

    // Añadir en la escena (por ejemplo en create() o justo después)
    updateMultiplicador() {


        console.log('[MULT] antes updateMultiplicador -> base', this.baseMultiplicador, 'star', this.starMultiplier, 'actual', this.multiplicador);
        this.baseMultiplicador = this.baseMultiplicador || 1;
        this.starMultiplier = this.starMultiplier || 1;
        this.multiplicador = this.baseMultiplicador * this.starMultiplier;
        // después de calcular this.multiplicador
        if (this.multiplicador >= this.multiplierThreshold) {
            this.showMultiplier(this.multiplicador);
        } else {
            this.hideMultiplier();
        }
        console.log('[MULT] base', this.baseMultiplicador, 'star', this.starMultiplier, '=> total', this.multiplicador);
    }


    update(time, delta) {
        // ... tu update existente ...

        if (this.rayoActive && this.rayoActive.sprite && this.personaje) {
            const r = this.rayoActive.sprite;
            const dx = r.x - this.personaje.x;
            const dy = r.y - this.personaje.y;
            const dist = Math.sqrt(dx*dx + dy*dy);
            if (dist <= this.rayoCollisionDistance && !r._hit) {
            this.handleRayoImpact(r);
            }
        }
    }


    // Helper para obtener modo activo
    getModoActivo() {
        const top = this.secondaryStack[this.secondaryStack.length - 1];
        return top ? top.key : null;
    }

    trySpawnTomate() {
        // no crear si ya hay uno activo o ya alcanzamos el máximo
        if (this.tomateActive) return;
        if (this.tomatesSpawned >= this.maxTomates) return;

        // no crear durante modo tormenta
        if (this.modoPrincipal === 'tormenta') {
            // reintentar en 500 ms hasta que no estemos en tormenta
            this.time.delayedCall(500, () => this.trySpawnTomate(), [], this);
            return;
        }

        // crear tomate
        this.spawnTomate();
    }

    spawnTomate() {
        // esquinas superiores: 'left' o 'right'
        const corner = (Math.random() < 0.5) ? 'left' : 'right';
        const paddingX = 20; // margen desde el borde
        const startX = (corner === 'left') ? paddingX : this.sys.game.config.width - paddingX;
        const startY = 20; // cerca de la parte superior

        // destino: posición del personaje (centro donde está personaje)
        const destX = this.personaje.x;
        const destY = this.personaje.y;

        // crear sprite
        const tomate = this.add.sprite(
            startX, startY, 'Tomate')
            .setOrigin(0.5)
            .setDepth(50)
            .setScale(0.1);
        tomate.setInteractive({ useHandCursor: true });
        tomate._spawnCorner = corner; // metadata
        tomate._isExploded = false;

        // handler de click
        const onClick = () => {
            if (!tomate || tomate._isExploded) return;
            this.collectTomate(tomate);
        };
        tomate.on('pointerdown', onClick);

        // calcular duración o velocidad
        let durationMs;
        if (this.tomateTravelDuration) {
            durationMs = this.tomateTravelDuration;
        } else {
            // distancia / velocidad
            const dx = destX - startX;
            const dy = destY - startY;
            const dist = Math.sqrt(dx*dx + dy*dy);
            durationMs = Math.max(300, Math.round((dist / this.tomateSpeed) * 1000)); // mínimo 300ms
        }

        // mover con tween hacia el personaje; onComplete => explode
        const tween = this.tweens.add({
            targets: tomate,
            x: destX,
            y: destY,
            duration: durationMs,
            ease: 'Linear',
            onComplete: () => {
                // si aún existe y no fue recogido, explotar
                if (tomate && !tomate._isExploded) {
                    this.explodeTomate(tomate);
                }
            }
        });

        // guardar referencia
        this.tomateActive = { sprite: tomate, tween: tween };
        this.tomatesSpawned++;
    }

    collectTomate(tomate) {
        if (!tomate || tomate._isExploded) return;

        // incrementar contador lógico
        this.tomatesRecogidos = (this.tomatesRecogidos || 0) + 1;

        // detener tween si existe
        if (this.tomateActive && this.tomateActive.tween) {
            try { this.tomateActive.tween.stop(); } catch(e) {}
        }

        // destruir sprite
        tomate.disableInteractive();
        tomate.destroy();
        this.tomateActive = null;

        // actualizar HUD
        this.updateTomateHUD();

        // opcional: reproducir sonido o anim de recogida
    }

    explodeTomate(tomate) {
        if (!tomate) return;
        tomate._isExploded = true;

        // quitar interactividad
        tomate.disableInteractive();

        // cambiar textura a "Tomate explotado"
        tomate.setTexture('TomateExplotado');

        // determinar lado y escala para cubrir zona de notas
        const corner = tomate._spawnCorner || 'left';
        // parámetros de cobertura: ajusta según tu layout de notas
        const coverWidth = this.sys.game.config.width * 0.6; // ancho de la cobertura
        const coverHeight = this.sys.game.config.height * 0.6; // alto de la cobertura
        const scaleX = coverWidth / tomate.width;
        const scaleY = coverHeight / tomate.height;
        const finalScale = Math.max(scaleX, scaleY);

        // posicionar para cubrir la zona de notas del lado correspondiente
        if (corner === 'left') {
            // mover el sprite hacia la mitad izquierda de la pantalla
            tomate.x = this.sys.game.config.width * 0.25;
        } else {
            tomate.x = this.sys.game.config.width * 0.75;
        }
        tomate.y = this.sys.game.config.height * 0.45; // ajustar verticalmente para cubrir zona de notas

        // animar escala y mantener por 5s, luego desvanecer
        this.tweens.add({
            targets: tomate,
            scale: finalScale,
            duration: 300,
            ease: 'Cubic.easeOut',
            onComplete: () => {
                // mantener 5s, luego fade out y destruir
                this.time.delayedCall(5000, () => {
                    this.tweens.add({
                        targets: tomate,
                        alpha: 0,
                        duration: 600,
                        onComplete: () => {
                            try { tomate.destroy(); } catch(e) {}
                        }
                    });
                }, [], this);
            }
        });

        // limpiar referencia de tomate activo para permitir nuevos spawns
        this.tomateActive = null;
    }

    updateTomateHUD() {
        // crear HUD si por alguna razón no existe aún
        if (!this.hudTomateIcon || !this.hudTomateText) {
            // intenta crear de nuevo (usa la misma lógica que en create)
            const padding = 16;
            const gameWidth = this.sys.game.config.width;
            const iconSize = 36;
            const fontSize = 28;

            if (!this.hudTomateIcon) {
            this.hudTomateIcon = this.add.image(gameWidth - padding, padding + 4, 'Tomate')
                .setOrigin(1, 0)
                .setDisplaySize(iconSize, iconSize)
                .setDepth(100);
            }
            if (!this.hudTomateText) {
            this.hudTomateText = this.add.text(gameWidth - padding - iconSize - 8, padding, `${this.tomatesRecogidos}`, {
                fontFamily: 'Lucidity',
                fontSize: `${fontSize}px`,
                color: '#ffffff',
                align: 'right'
            }).setOrigin(1, 0).setDepth(100);
            }
            return;
        }

        // actualizar número
        this.hudTomateText.setText(`${this.tomatesRecogidos}`);
    }

    createComboHUD() {
        const padding = 16;
        const xOffset = 350;   // cuánto desde el borde derecho hacia el centro (aumenta para mover más a la izquierda)
        const yOffset = 180;    // cuánto bajar desde la parte superior (aumenta para bajar más)
        const gameWidth = this.sys.game.config.width;
        const fontSizeLabel = 16;
        const fontSizeNumber = 34;

        // posicionamiento: lo colocamos hacia la izquierda (más centrado) desde el borde derecho
        const rightX = gameWidth - padding - xOffset;

        // contenedor para mover/animar todo junto
        if (!this.hudComboContainer) {
            this.hudComboContainer = this.add.container(rightX, yOffset).setDepth(100).setAlpha(0);
            this.hudComboContainer.setScrollFactor(0);
        } else {
            this.hudComboContainer.setPosition(rightX, yOffset);
        }

        // limpiar hijos previos si existen
        this.hudComboContainer.removeAll(true);

        const label = this.add.text(0, 0, 'COMBO', {
            fontFamily: 'Lucidity',
            fontSize: `${fontSizeLabel}px`,
            color: '#6d67d0',
            align: 'center'
        }).setOrigin(0.5, 0);

        const number = this.add.text(0, 22, '0', {
            fontFamily: 'Lucidity',
            fontSize: `${fontSizeNumber}px`,
            color: '#6d67d0',
            align: 'center'
        }).setOrigin(0.5, 0);

        this.hudComboContainer.add([label, number]);
        this.hudComboLabel = label;
        this.hudComboNumber = number;
    }


    createMultiplierHUD() {
        const padding = 16;
        const xOffset = 350;   // cuánto desde el borde izquierdo hacia el centro (aumenta para mover más a la derecha)
        const yOffset = 180;    // cuánto bajar desde la parte superior
        const fontSizeLabel = 16;
        const fontSizeNumber = 34;

        const leftX = padding + xOffset;

        if (!this.hudMultContainer) {
            this.hudMultContainer = this.add.container(leftX, yOffset).setDepth(100).setAlpha(0);
            this.hudMultContainer.setScrollFactor(0);
        } else {
            this.hudMultContainer.setPosition(leftX, yOffset);
        }

        this.hudMultContainer.removeAll(true);

        const label = this.add.text(0, 0, 'Multiplicador', {
            fontFamily: 'Lucidity',
            fontSize: `${fontSizeLabel}px`,
            color: '#6d67d0',
            align: 'center'
        }).setOrigin(0.5, 0);

        const number = this.add.text(0, 22, 'x1', {
            fontFamily: 'Lucidity',
            fontSize: `${fontSizeNumber}px`,
            color: '#6d67d0',
            align: 'center'
        }).setOrigin(0.5, 0);

        this.hudMultContainer.add([label, number]);
        this.hudMultLabel = label;
        this.hudMultNumber = number;
    }

    showCombo(count) {
        if (!this.hudComboContainer) return;
        this._lastComboShown = count;
        this.hudComboNumber.setText(`${count}`);

        if (this._comboTween) {
            this._comboTween.stop();
            this._comboTween = null;
        }

        if (!this._comboVisible) {
            this._comboVisible = true;
            this.hudComboContainer.setScale(0.8);
            this.hudComboContainer.setAlpha(0);
            this._comboTween = this.tweens.add({
            targets: this.hudComboContainer,
            alpha: 1,
            scale: 1,
            duration: 220,
            ease: 'Back.out(1.2)',
            onComplete: () => { this._comboTween = null; }
            });
        } else {
            // pequeño pop cuando se incrementa
            this.tweens.add({
            targets: this.hudComboContainer,
            scale: 1.08,
            duration: 120,
            yoyo: true,
            ease: 'Sine.easeInOut'
            });
        }
    }

    hideComboShowLastThenFade() {
        if (!this.hudComboContainer || !this._comboVisible) return;
        // mostrar el último valor (ya está en _lastComboShown), luego fade out
        if (this._comboTween) { this._comboTween.stop(); this._comboTween = null; }
        this._comboTween = this.tweens.add({
            targets: this.hudComboContainer,
            alpha: 1,
            duration: 0,
            onComplete: () => {
            // mantener visible 700ms y luego fade out mostrando el último combo
            this.time.delayedCall(700, () => {
                this.tweens.add({
                targets: this.hudComboContainer,
                alpha: 0,
                duration: 600,
                ease: 'Cubic.easeIn',
                onComplete: () => {
                    this._comboVisible = false;
                    this._comboTween = null;
                }
                });
            }, [], this);
            }
        });
    }

    showMultiplier(mult) {
        if (!this.hudMultContainer) return;
        this.hudMultNumber.setText(`x${mult}`);

        if (this._multTween) { this._multTween.stop(); this._multTween = null; }

        if (!this._multVisible) {
            this._multVisible = true;
            this.hudMultContainer.setScale(0.8);
            this.hudMultContainer.setAlpha(0);
            this._multTween = this.tweens.add({
            targets: this.hudMultContainer,
            alpha: 1,
            scale: 1,
            duration: 220,
            ease: 'Back.out(1.2)',
            onComplete: () => { this._multTween = null; }
            });
        } else {
            // pequeño pop al cambiar
            this.tweens.add({
            targets: this.hudMultContainer,
            scale: 1.06,
            duration: 120,
            yoyo: true,
            ease: 'Sine.easeInOut'
            });
        }
    }

    hideMultiplier() {
        if (!this.hudMultContainer || !this._multVisible) return;
        if (this._multTween) { this._multTween.stop(); this._multTween = null; }
        this._multTween = this.tweens.add({
            targets: this.hudMultContainer,
            alpha: 0,
            duration: 500,
            ease: 'Cubic.easeIn',
            onComplete: () => {
            this._multVisible = false;
            this._multTween = null;
            }
        });
    }

    trySpawnRayo() {
        // no crear si ya hay un rayo activo o si ya alcanzamos el máximo
        if (this.rayoActive) return;
        if (this.rayosSpawned >= this.maxRayos) return;

        // opcional: si quieres evitar rayos en modo tormenta, compruébalo aquí
        // if (this.modoPrincipal === 'tormenta') { this.time.delayedCall(500, () => this.trySpawnRayo(), [], this); return; }

        this.spawnRayo();
    }

    spawnRayo() {
        const corner = (Math.random() < 0.5) ? 'left' : 'right';
        const paddingX = 20;
        const startX = (corner === 'left') ? paddingX : this.sys.game.config.width - paddingX;
        const startY = 20;

        const destX = this.personaje.x;
        const destY = this.personaje.y;

        const rayo = this.add.sprite(startX, startY, 'Rayo')
        .setOrigin(0.5).setDepth(60).setScale(0.1);
        rayo._spawnCorner = corner;
        rayo._hit = false;

        // 🔑 Hacerlo clickeable
        rayo.setInteractive({ useHandCursor: true });
        rayo.on('pointerdown', () => {
            this.collectRayo(rayo);
        });

        // calcular duración por distancia/velocidad
        const dx = destX - startX;
        const dy = destY - startY;
        const dist = Math.sqrt(dx*dx + dy*dy);
        const durationMs = Math.max(300, Math.round((dist / this.rayoSpeed) * 1000));

        const tween = this.tweens.add({
            targets: rayo,
            x: destX,
            y: destY,
            duration: durationMs,
            ease: 'Linear',
            onComplete: () => {
            // si llega al destino y no se ha detectado colisión por distancia, tratar como impacto
            if (rayo && !rayo._hit) {
                this.handleRayoImpact(rayo);
            }
            }
        });

        this.rayoActive = { sprite: rayo, tween: tween };
        this.rayosSpawned++;
    }

    collectRayo(rayo) {
        if (!rayo || rayo._hit) return;
        rayo._hit = true;

        // detener tween si existe
        if (this.rayoActive && this.rayoActive.tween) {
            try { this.rayoActive.tween.stop(); } catch(e) {}
        }

        // feedback visual opcional
        this.tweens.add({
            targets: rayo,
            alpha: 0,
            scale: 0.6,
            duration: 300,
            ease: 'Cubic.easeIn',
            onComplete: () => {
            try { rayo.destroy(); } catch(e) {}
            }
        });

        // limpiar referencia activa
        this.rayoActive = null;

        // opcional: reproducir sonido de "evitar rayo"
        // this.sfxRayoEvitar.play();
    }


    handleRayoImpact(rayo) {
        if (!rayo || rayo._hit) return;
        rayo._hit = true;

        // detener tween si existe
        if (this.rayoActive && this.rayoActive.tween) {
            try { this.rayoActive.tween.stop(); } catch(e) {}
        }

        // efecto visual opcional: flash o pequeña escala
        this.tweens.add({
            targets: rayo,
            alpha: 0.9,
            duration: 80,
            yoyo: true
        });

        // restar 3 puntos (usa tu función de score si existe)
        if (typeof this.updateScore === 'function') {
            this.updateScore(-3);
        } else {
            // fallback: intenta ajustar this.puntos o this.score y actualizar texto
            if (typeof this.puntos === 'number') {
            this.puntos = Math.max(0, this.puntos - 3);
            } else if (typeof this.score === 'number') {
            this.score = Math.max(0, this.score - 3);
            }
            if (this.textoPuntaje) {
            const val = (typeof this.puntos === 'number') ? this.puntos : this.score;
            this.textoPuntaje.setText(`Puntos: ${val}`);
            }
        }

        // cambiar animación del personaje a 'choque' durante 1s y luego restaurar
        if (this.personaje && this.personaje.anims) {
            const prevAnim = this.personaje.anims.getCurrentKey ? this.personaje.anims.getCurrentKey() : null;
            // reproducir choque
            this.personaje.play('choque');

            // después de 1s, restaurar animación previa (si existe)
            this.time.delayedCall(1000, () => {
            try {
                if (prevAnim && this.anims.exists(prevAnim)) {
                this.personaje.play(prevAnim);
                } else {
                // fallback: reproducir animación por defecto si la tienes
                if (this.anims.exists('cloudeeBaile')) this.personaje.play('cloudeeBaile');
                }
            } catch (e) { /* defensivo */ }
            }, [], this);
        }

        // destruir rayo con un fade
        this.tweens.add({
            targets: rayo,
            alpha: 0,
            scale: 0.6,
            duration: 400,
            onComplete: () => {
            try { rayo.destroy(); } catch(e) {}
            }
        });

        // limpiar referencia activa
        this.rayoActive = null;
    }


    // Función para recolectar ítems
    recolectarItem(tipo) {
        let puntosGanados = 0;

        if (tipo === 'nota') puntosGanados = 1;
        else if (tipo === 'rayo') puntosGanados = 3;
        else if (tipo === 'tomate') this.tomates++;

        // Multiplicador solo en sumas
        puntosGanados *= this.multiplicador || 1;
        this.puntosNotas += puntosGanados;

        // Combo y lógica de modos secundarios
        if (tipo === 'nota') {
            this.onNotaAcierto();
            this.comboActual++;

            // Si no hay modo estrella activo y alcanzamos objetivo, entrar a estrella indefinida
            if (this.getModoActivo() !== 'estrella' && this.comboActual >= this.comboObjetivo) {
                this.comboActual = 0;
                this.estrellaNivel = 0; // nivel inicial de estrella
                // pasar durationMs = null para indicar "hasta que se rompa la racha"
                this.enterSecondaryMode('estrella', 100, null, this.applyEstrellaEffects, this.cleanupEstrellaEffects);
            } else 
            // --- dentro de recolectarItem, cuando tipo === 'nota' y getModoActivo() === 'estrella' ---
            if (this.getModoActivo() === 'estrella') {
                const top = this.secondaryStack[this.secondaryStack.length - 1];
                top.estrellaSubCombo = (top.estrellaSubCombo || 0) + 1;

                if (top.estrellaSubCombo >= this.comboObjetivo) {
                    top.estrellaSubCombo = 0;
                    // subir nivel hasta max (starMultiplier: 2 -> 3 -> 4)
                    if (this.starMultiplier < 4) {
                        this.starMultiplier++;
                        // recalcular multiplicador total
                        this.updateMultiplicador();
                        console.log('Estrella sube nivel: starMultiplier x' + this.starMultiplier + ', total x' + this.multiplicador);
                    }
                }
            }

        }

        console.log(`Item: ${tipo}, Ganados: ${puntosGanados}, Total: ${this.puntosNotas}, Multiplicador: x${this.multiplicador}`);
        this.actualizarPuntaje();
    }

    onNotaAcierto() {
        console.log('[NOTE_EVENT] onNotaAcierto suppr=', !!this._suppressSecondaryTriggers, 'aciertos=', this.aciertosConsecutivos, 'fallos=', this.fallosConsecutivos, 'modoActivo=', this.getModoActivo());

        // siempre actualizar contadores
        this.fallosConsecutivos = 0;
        this.aciertosConsecutivos = (this.aciertosConsecutivos || 0) + 1;
        // después de incrementar this.aciertosConsecutivos
        if (this.aciertosConsecutivos >= this.comboThreshold) {
            this.showCombo(this.aciertosConsecutivos);
        }


        const activo = this.getModoActivo();

        if (this._suppressSecondaryTriggers) {
            console.log('[NOTE_EVENT] transiciones suprimidas, solo contando aciertos');
            return;
        }

        // LLUVIA: 5 aciertos seguidos -> volver a Espiral
        if (activo === 'lluvia' && this.aciertosConsecutivos >= this.lluviaAciertosObjetivo) {
            this.aciertosConsecutivos = 0;
            this._suppressSecondaryTriggers = true;
            this.exitSecondaryMode('lluvia');
            this.enterSecondaryMode('espiral', this.prioridadEspiral, null, this.applyEspiralEffects, this.cleanupEspiralEffects);
            this.time.delayedCall(0, () => { this._suppressSecondaryTriggers = false; }, [], this);
            return;
        }

        // ESPIRAL: 3 aciertos seguidos -> salir a modo principal (Básico/Tormenta)
        if (activo === 'espiral' && this.aciertosConsecutivos >= this.espiralAciertosObjetivo) {
            this.aciertosConsecutivos = 0;
            this.exitSecondaryMode('espiral');
            return;
        }
    }


    onNotaFallida() {
        // logs de depuración (temporal)
        console.log('[NOTE_EVENT] onNotaFallida suppr=', !!this._suppressSecondaryTriggers, 'fallos=', this.fallosConsecutivos, 'aciertos=', this.aciertosConsecutivos, 'modoActivo=', this.getModoActivo());

        // siempre actualizar contadores (aunque estemos suprimiendo transiciones)
        // antes de resetear aciertosConsecutivos o justo después de detectarlo
        if (this._comboVisible && this.aciertosConsecutivos > 0) {
        // la racha se rompe: mostrar el último combo y desvanecer
        this.hideComboShowLastThenFade();
        }
        this.aciertosConsecutivos = 0;
        this.fallosConsecutivos = (this.fallosConsecutivos || 0) + 1;

        const activo = this.getModoActivo();

        // Si estamos suprimiendo triggers, NO ejecutar las transiciones,
        // pero sí mantener los contadores para que el juego siga contando.
        if (this._suppressSecondaryTriggers) {
            console.log('[NOTE_EVENT] transiciones suprimidas, solo contando fallos');
            return;
        }

        // REGLA LLUVIA: si Lluvia está activo, SOLO se evalúa su fin (5 fallos)
        if (activo === 'lluvia') {
            if (this.fallosConsecutivos >= this.lluviaFallosObjetivo) {
                console.log('Lluvia: 5 fallos seguidos, finalizarJuego()');
                this.finalizarJuego();
            }
            return;
        }

        // REGLA ESPIRAL: si Espiral está activo y se fallan 3 seguidas, entrar a Lluvia
        if (activo === 'espiral' && this.fallosConsecutivos >= this.espiralFallosObjetivo) {
            this.fallosConsecutivos = 0;
            this.aciertosConsecutivos = 0;
            this._suppressSecondaryTriggers = true;
            this.exitSecondaryMode('espiral');
            this.enterSecondaryMode('lluvia', this.prioridadLluvia, null, this.applyLluviaEffects, this.cleanupLluviaEffects);
            // reactivar triggers en el siguiente tick
            this.time.delayedCall(0, () => { this._suppressSecondaryTriggers = false; }, [], this);
            return;
        }

        // REGLA BÁSICO/TORMENTA: si no hay secundario y se fallan 3, entrar Espiral
        if ((this.modoPrincipal === 'basico' || this.modoPrincipal === 'tormenta') &&
            !activo && this.fallosConsecutivos >= this.espiralFallosObjetivo) {
            this.fallosConsecutivos = 0;
            this.enterSecondaryMode('espiral', this.prioridadEspiral, null, this.applyEspiralEffects, this.cleanupEspiralEffects);
            return;
        }
    }


    // Función para terminar el juego
    finalizarJuego() {
        if (this.gameEnded) {
            console.log('[finalizarJuego] llamada ignorada porque gameEnded=true');
            return;
        }
        this.gameEnded = true;

        // detener música de forma segura
        try { if (this.cancion && this.cancion.isPlaying) this.cancion.stop(); } catch(e){}

        // calcular tiempo transcurrido en ms
        const startTs = (typeof this.gameStartTimestamp === 'number') ? this.gameStartTimestamp : this.time.now;
        const elapsedMs = Math.max(0, this.time.now - startTs);
        const elapsedSeconds = elapsedMs / 1000;

        // Para pruebas: usar umbral de test (55s) si está definido, si no usar totalGameSeconds
        const threshold = (typeof this.testWinThresholdSeconds === 'number') ? this.testWinThresholdSeconds : this.totalGameSeconds;
        const won = (elapsedMs >= threshold * 1000);

        console.log('[finalizarJuego] startTs=', startTs, 'time.now=', this.time.now, 'elapsedMs=', elapsedMs, 'elapsedSeconds=', elapsedSeconds.toFixed(3), 'threshold=', threshold, 'won=', won);

        // limpieza básica
        try { this.tweens.killAll(); } catch(e){}
        try { this.input.enabled = false; } catch(e){}
        // cancelar timers guardados
        if (Array.isArray(this.activeTimers)) this.activeTimers.forEach(t => { try { t.remove(false); } catch(e){} });

        const result = { won, elapsedSeconds: Math.floor(elapsedSeconds), threshold };
        if (won) this.handleWin(result); else this.handleLose(result);
    }

    handleWin(result) {
        // protección contra múltiples llamadas
        if (this._ending) return;
        this._ending = true;

        // 1) Parar todo inmediatamente (usa tu helper existente)
        if (typeof this.stopAllGameActivity === 'function') {
            this.stopAllGameActivity();
        } else {
            // fallback defensivo: detener música y timers básicos
            try { if (this.music && this.music.isPlaying) this.music.stop(); } catch(e){}
            try { this.tweens.killAll(); } catch(e){}
            try { this.input.enabled = false; } catch(e){}
            this.gameEnded = true;
        }

        // 2) Preparar contenedor y posiciones
        const centerX = this.sys.game.config.width / 2;
        const centerY = this.sys.game.config.height / 2;
        const seqContainer = this.add.container(0, 0).setDepth(500).setScrollFactor(0);

        // 3) yesdee (misma proporción/propiedades que badee)
        // Si en lose usabas badee con setScale(0.5) y origin 0.5, replicamos eso
        const yesdee = this.add.image(centerX, centerY - 40, 'yesdee')
            .setOrigin(0.5)
            .setAlpha(0)
            .setScale(0.5)   // misma proporción que badee
            .setDepth(505);
        seqContainer.add(yesdee);

        // Tween: fade in + mantener escala 0.5 (zoom-out si prefieres animarlo desde mayor)
        this.tweens.add({
            targets: yesdee,
            alpha: 1,
            scale: 0.5,
            duration: 700,
            ease: 'Cubic.out',
            onComplete: () => {
            // 4) winseal encima con mismas propiedades que badee (ajusta Y si quieres)
            const seal = this.add.image(centerX, centerY + 40, 'winseal')
                .setOrigin(0.5)
                .setAlpha(0)
                .setScale(0.5) // misma proporción que badee
                .setDepth(506);
            seqContainer.add(seal);

            this.tweens.add({
                targets: seal,
                alpha: 1,
                scale: 0.5,
                duration: 450,
                ease: 'Back.out(1.2)',
                delay: 120,
                onComplete: () => {
                // 5) Reemplazar la nube activa por NubeInicioFin
                try {
                    if (this.nubeBasic && this.nubeBasic.scene) {
                    this.nubeBasic.destroy();
                    }
                } catch(e) { console.warn('Error destruyendo nubeBasic en win', e); }
                try {
                    this.nubeBasic = this.add.image(this.sys.game.config.width / 2, this.sys.game.config.height / 2 + 150, 'NubeInicioFin')
                    .setOrigin(0.5).setDepth(2);
                } catch(e) { console.warn('Error creando NubeInicioFin', e); }

                // 6) Reproducir sonidoWin y hacer que el personaje suba
                this.playPersonajeRiseAndSound().then(() => {
                    // 7) pequeña pausa y transición a escena final
                    this.time.delayedCall(300, () => {
                    try { seqContainer.destroy(true); } catch(e){}
                    // Ajusta el key de la escena final si es distinto
                    this.scene.start('Fin', { score: this.puntosNotas || this.score || 0, tomates: this.tomatesRecogidos || 0, keepMusicKey: 'cancionJuego' });
                    }, [], this);
                });
                }
            });
            }
        });
    }


    handleLose(result) {
        // Protección contra múltiples llamadas
        if (this._ending) return;
        this._ending = true;

        // 1) Parar todo inmediatamente
        this.stopAllGameActivity();

        // 2) Preparar contenedores y depth para la secuencia de pérdida
        const centerX = this.sys.game.config.width / 2;
        const centerY = this.sys.game.config.height / 2;

        // Crear un container para la secuencia (fijo en pantalla)
        const seqContainer = this.add.container(0, 0).setDepth(500).setScrollFactor(0);

        // 3) Mostrar badee con zoom-out (similar a level1)
        const badee = this.add.image(centerX, centerY - 40, 'Badee')
        .setOrigin(0.5)
        .setAlpha(0)
        .setScale(0.5);
        seqContainer.add(badee);

        // Tween: fade in + zoom to scale 1 (zoom-out visual)
        this.tweens.add({
            targets: badee,
            alpha: 1,
            scale: 0.5,
            duration: 700,
            ease: 'Cubic.out',
            onComplete: () => {
            // 4) Mostrar LostSeal encima con pequeño delay
            const seal = this.add.image(centerX, centerY + 40, 'LostSeal')
            .setOrigin(0.5)
            .setAlpha(0)
            .setScale(0.3)
            .setDepth(506);
            seqContainer.add(seal);

            this.tweens.add({
                targets: seal,
                alpha: 1,
                scale: 0.3,
                duration: 450,
                ease: 'Back.out(1.2)',
                delay: 120,
                onComplete: () => {
                // 5) Reproducir animación compuesta 'borrador' (Borrador1..Borrador15)
                const borradorY = centerY - 180; // <-- más arriba que antes
                this.playBorradorAnimation(seqContainer, centerX, borradorY + 120).then(() => {
                    // 6) Hacer caer al personaje y reproducir sonidoLost
                    this.playPersonajeFallAndSound().then(() => {
                    // 7) Transición a escena final
                    // pequeña pausa para que todo termine de verse
                    this.time.delayedCall(300, () => {
                        // destruir container de secuencia
                        try { seqContainer.destroy(true); } catch(e){}
                        // pasar a escena fin.js (ajusta key)
                        this.scene.start('Fin', { score: this.puntosNotas || this.score || 0, tomates: this.tomatesRecogidos || 0, keepMusicKey: 'cancionJuego' });
                    }, [], this);
                    });
                });
                }
            });
            }
        });
    }

    playBorradorAnimation(seqContainer, x, y) {
        return new Promise(resolve => {
            // 1) Crear animación 'borrador' si no existe
            if (!this.anims.exists('borrador')) {
            // Si tus Borrador son spritesheets en un solo atlas usa generateFrameNumbers
            // Aquí intento crear la anim con frames individuales si existen
            const frames = [];
            for (let i = 1; i <= 15; i++) {
                const key = `Borrador${i}`;
                if (this.textures.exists(key)) {
                frames.push({ key, frame: 0 });
                }
            }
            this.anims.create({
                key: 'borrador',
                frames: frames.length ? frames : this.anims.generateFrameNumbers('BorradorSheet', { start: 0, end: 14 }),
                frameRate: 18,
                repeat: 0
            });
            }

            // 2) Destruir la nube actual si existe (evitar nulls)
            try {
            if (this.nubeBasic && this.nubeBasic.scene) {
                this.nubeBasic.destroy();
                this.nubeBasic = null;
            }
            } catch (e) {
            console.warn('Error destruyendo nubeBasic antes de borrador', e);
            }

            // 3) Crear sprite que reproducirá la animación, con escala 0.5 y depth alto
            const animSprite = this.add.sprite(x, y, 'Borrador1')
            .setOrigin(0.5)
            .setDepth(510)
            .setScale(0.5)   // <-- escala solicitada
            .setAlpha(1);
            seqContainer.add(animSprite);

            // 4) Reproducir y esperar a que termine
            animSprite.play('borrador');
            animSprite.once(Phaser.Animations.Events.ANIMATION_COMPLETE, () => {
            // pequeña pausa visual y limpieza
            this.time.delayedCall(120, () => {
                try { animSprite.destroy(); } catch(e){}
                resolve();
            }, [], this);
            });
        });
    }


    playPersonajeFallAndSound() {
        return new Promise(resolve => {
            // Helper: crear/obtener instancia de sonido segura
            const ensureSound = (key) => {
            try {
                // si ya existe la instancia guardada, usarla
                if (this.sonidoLost && this.sonidoLost.key === key) return this.sonidoLost;
                // verificar que el asset esté en cache (evita errores si no se cargó)
                if (this.cache && this.cache.audio && this.cache.audio.exists && !this.cache.audio.exists(key)) {
                console.warn('playPersonajeFallAndSound: audio key no encontrada en cache ->', key);
                return null;
                }
                // crear instancia y guardarla
                this.sonidoLost = this.sound.add(key);
                return this.sonidoLost;
            } catch (e) {
                console.warn('playPersonajeFallAndSound: error creando sonido', e);
                return null;
            }
            };

            // Si no hay personaje: crear sonido local y reproducir, esperar 800ms
            if (!this.personaje) {
            const s = ensureSound('sonidoLost');
            try { if (s) s.play(); } catch (e) { console.warn('Error al reproducir sonidoLost (no personaje)', e); }
            this.time.delayedCall(800, resolve, [], this);
            return;
            }

            // Asegurar personaje por encima
            try { this.personaje.setDepth(520); } catch (e) {}

            // Reanudar animaciones si estaban pausadas
            try { if (this.personaje.anims) this.personaje.anims.resume(); } catch (e) {}

            // Preparar promesas para sonido y tween
            const soundPromise = new Promise(soundResolve => {
            const s = ensureSound('sonidoLost');
            if (!s) {
                // si no hay sonido, resolver inmediatamente
                soundResolve();
                return;
            }

            // Intentar reproducir; en algunos navegadores puede fallar por autoplay
            try {
                const playResult = s.play();
                // Si la API devuelve un objeto, esperar evento complete
                s.once && s.once('complete', () => soundResolve());
                // Si no hay evento, resolver tras un timeout razonable (fallback)
                this.time.delayedCall(Math.max(1200, (s.duration || 800) * 1000), soundResolve, [], this);
            } catch (err) {
                console.warn('playPersonajeFallAndSound: fallo al play sonidoLost', err);
                // intentar reanudar contexto de audio (en móviles puede requerir gesto)
                try { if (this.sound && this.sound.context && this.sound.context.resume) this.sound.context.resume(); } catch(e){}
                // fallback: resolver pronto
                this.time.delayedCall(400, soundResolve, [], this);
            }
            });

            const tweenPromise = new Promise(tweenResolve => {
            const targetY = this.sys.game.config.height + (this.personaje.displayHeight || 200);
            this.tweens.add({
                targets: this.personaje,
                y: targetY,
                angle: 20,
                duration: 900,
                ease: 'Cubic.in',
                onComplete: () => {
                // pequeña espera para que el sonido se perciba
                this.time.delayedCall(200, tweenResolve, [], this);
                }
            });
            });

            // Reproducir sonido (no bloquear si no existe) y esperar ambos
            // Iniciar reproducción inmediatamente (soundPromise se encarga de esperar complete)
            try {
            const sInst = ensureSound('sonidoLost');
            if (sInst) {
                try { sInst.play(); } catch(e) { console.warn('Error al iniciar sonidoLost', e); }
            }
            } catch(e) {}

            // Esperar que terminen tween y sonido
            Promise.all([soundPromise, tweenPromise]).then(() => {
            resolve();
            }).catch(err => {
            console.warn('playPersonajeFallAndSound: error en promesas', err);
            resolve();
            });
        });
    }

    playPersonajeRiseAndSound() {
        return new Promise(resolve => {
            // helper para crear/obtener sonido
            const ensureSound = (key) => {
            try {
                if (this.sonidoWin && this.sonidoWin.key === key) return this.sonidoWin;
                // crear instancia segura
                this.sonidoWin = this.sound.add(key);
                return this.sonidoWin;
            } catch (e) {
                console.warn('ensureSound error', e);
                return null;
            }
            };

            // Si no hay personaje, reproducir sonido y resolver tras un timeout
            if (!this.personaje) {
            const s = ensureSound('sonidoWin');
            try { if (s) s.play(); } catch(e){ console.warn('Error play sonidoWin (no personaje)', e); }
            this.time.delayedCall(900, resolve, [], this);
            return;
            }

            // Asegurar que el personaje esté por encima de la secuencia
            try { this.personaje.setDepth(520); } catch(e){}

            // Reanudar animaciones si estaban pausadas
            try { if (this.personaje.anims) this.personaje.anims.resume(); } catch(e){}

            // Promesa para el sonido
            const soundPromise = new Promise(soundResolve => {
            const s = ensureSound('sonidoWin');
            if (!s) {
                soundResolve();
                return;
            }
            try {
                s.play();
                // esperar evento complete si existe
                if (s.once) {
                s.once('complete', () => soundResolve());
                // fallback por si no llega el evento
                this.time.delayedCall(Math.max(1200, (s.duration || 800) * 1000), soundResolve, [], this);
                } else {
                this.time.delayedCall(1200, soundResolve, [], this);
                }
            } catch (err) {
                console.warn('Error reproduciendo sonidoWin', err);
                // intentar reanudar contexto de audio
                try { if (this.sound && this.sound.context && this.sound.context.resume) this.sound.context.resume(); } catch(e){}
                this.time.delayedCall(400, soundResolve, [], this);
            }
            });

            // Promesa para el tween de subida
            const tweenPromise = new Promise(tweenResolve => {
            const targetY = - (this.personaje.displayHeight || 200); // fuera por arriba
            this.tweens.add({
                targets: this.personaje,
                y: targetY,
                angle: -10, // ligera rotación contraria para dramatizar
                duration: 900,
                ease: 'Cubic.in',
                onComplete: () => {
                // opcional: destruir personaje o dejarlo fuera
                try { /* this.personaje.destroy(); */ } catch(e){}
                this.time.delayedCall(200, tweenResolve, [], this);
                }
            });
            });

            // Iniciar reproducción de sonido (soundPromise ya lo hace) y esperar ambos
            Promise.all([soundPromise, tweenPromise]).then(() => {
            resolve();
            }).catch(err => {
            console.warn('playPersonajeRiseAndSound: error', err);
            resolve();
            });
        });
    }


    mostrarLevel1() {
        const level1 = this.add.image(this.sys.game.config.width/2, this.sys.game.config.height/2, 'level1')
            .setOrigin(0.5)
            .setScale(3); // empieza grande

        const sonidoWin = this.sound.add('sonidoWin');
        sonidoWin.play();

        // Zoom out
        this.tweens.add({
            targets: level1,
            scale: 1,
            duration: 800,
            ease: 'Linear',
            onComplete: () => {
                // Fade out después del zoom
                this.tweens.add({
                    targets: level1,
                    alpha: 0,
                    duration: 600,
                    ease: 'Linear',
                    onComplete: () => {
                        this.iniciarJuego();
                    }
                });
            }
        });
    }

    iniciarJuego() {

        // Al iniciar la partida
        this.allowSpawns = true;
        this.gameEnded = false;


        // marca de tiempo en milisegundos usando el reloj de Phaser
        this.gameStartTimestamp = this.time.now; // ms
        this.gameEnded = false;                  // flag para evitar dobles finalizaciones
        this.totalGameSeconds = 60;              // duración objetivo del juego
        this.testWinThresholdSeconds = 55;        // valor de prueba; vuelve a 60 cuando confirmes
        
        // reproducir canción (ejemplo)
        if (this.music) {
            this.music.play();
        }

        // inicializa arrays de timers si los usas
        this.activeTimers = this.activeTimers || [];

        this.cancion = this.sound.add(
            'cancionJuego', 
            { loop: false, 
            volume: 0.7 });
        this.cancion.play();

        // Aquí ya puedes activar la lógica de aparición de ítems según el modo
        this.iniciarModoBasico();

        // Después de 30 segundos → modo tormenta
        this.time.delayedCall(30000, () => {
            this.iniciarModoTormenta();
        });

        // Timer para generar notas cada 1 segundo
        // en iniciarJuego() o create()
        if (!this.eventoNotas || this.eventoNotas.hasDispatched === undefined) {
            this.eventoNotas = this.time.addEvent({
                delay: 1000,
                loop: true,
                callback: () => this.generarNota()
            });
            console.log('Spawner creado');
        } else {
            console.log('Spawner ya existe, no se crea de nuevo');
        }
    }

    iniciarModoBasico() {
        //Variables de Control
        this.modoPrincipal  = 'basico';

        this.updatePersonajeScale();



        this.baseMultiplicador = 1;
        this.updateMultiplicador();
        this.reapplyTopSecondaryEffects(); // esto llamará applyEspiralEffects(entry) si top.key === 'espiral'

        console.log('[MODO] basico -> baseMultiplicador', this.baseMultiplicador, 'starMultiplier', this.starMultiplier, 'multiplicador', this.multiplicador);
        
        //Destruir nube actual y personaje actual
        if (this.nube) {
            this.nube.destroy();
            this.nube = null;
        }

        if (this.personaje) {
            this.personaje.destroy();
            this.personaje = null;
        }

        //Cambiar nube a la nube basic y el personaje al baile básico

        this.nubeBasic = this.add.image(
            this.sys.game.config.width / 2,
            this.sys.game.config.height / 2 + 150,
            'NubeBasic'
        ).setOrigin(0.5).setDepth(2);

        // Crear animación de baile con los 6 sheets
        if (!this.anims.exists('cloudeeBaile')) {
            this.anims.create({
                key: 'cloudeeBaile',
                frames: [
                    ...this.anims.generateFrameNumbers('BaileBasico1', { start: 0, end: 2 }),
                    ...this.anims.generateFrameNumbers('BaileBasico2', { start: 0, end: 2 }),
                    ...this.anims.generateFrameNumbers('BaileBasico3', { start: 0, end: 2 }),
                    ...this.anims.generateFrameNumbers('BaileBasico4', { start: 0, end: 2 }),
                    ...this.anims.generateFrameNumbers('BaileBasico5', { start: 0, end: 2 }),
                    ...this.anims.generateFrameNumbers('BaileBasico6', { start: 0, end: 2 }),
                ],
                frameRate: 12,
                repeat: -1 // loop infinito
            });
        }

        // Crear sprite en el centro
        this.personaje = this.add.sprite(
            this.sys.game.config.width / 2 - 20,
            this.sys.game.config.height / 2 - 100,
            'BaileBasico1'
        ).setOrigin(0.5)
        //.setScale(0.65)
        .setDepth(3);



        // Escalas absolutas (valores solicitados)
        this.personajeScaleBasico = 0.65;    // modo básico y modo estrella
        this.personajeScaleSecondary = 0.28; // espiral y lluvia

        // Asegúrate de que el sprite se cree con la escala base (si lo haces en iniciarModoBasico, mantenlo)
        if (this.personaje) {
        //this.personaje.setScale(this.personajeScaleBasico);
        }


        this.personaje.play('cloudeeBaile');
        this.updatePersonajeScale();


        console.log('[MODO] basico -> baseMultiplicador', this.baseMultiplicador, 'starMultiplier', this.starMultiplier, 'multiplicador', this.multiplicador);
    }

    generarNota() {

        // Protección: no generar si el juego terminó o si los spawns están deshabilitados
        if (this.gameEnded || this.allowSpawns === false) {
            return;
        }

        const tipo = Phaser.Math.Between(1, 2) === 1 ? 'Nota1' : 'Nota2';
        const cx = this.sys.game.config.width / 2;
        const cy = this.sys.game.config.height / 2 + 150;

        const nota = this.add.image(cx, cy, tipo).setOrigin(0.5).setScale(0.1);
        nota.setDepth(1);
        nota.setInteractive({ cursor: 'pointer' });
        nota.setData('tipo', tipo);

        this.notasGroup.add(nota);
        console.log('Nota creada', tipo, 'grupo size', this.notasGroup.getLength());

        const destinoX = Phaser.Math.Between(0, 1) === 0 ? 100 : this.sys.game.config.width - 100;
        const destinoY = this.sys.game.config.height / 2 + Phaser.Math.Between(-150, 150);

        const tween = this.tweens.add({
            targets: nota,
            x: destinoX,
            y: destinoY,
            duration: 3000,
            ease: 'Sine.easeInOut',
            onComplete: () => {
                if (nota.active) {
                    // siempre resta exactamente 1
                    this.puntosNotas -= 1;

                    // romper racha
                    this.comboActual = 0;

                    // Si estamos en modo estrella, salir inmediatamente y restaurar
                    if (this.getModoActivo() === 'estrella') {
                        // vaciar la pila de secundarios o solo sacar estrella
                        this.exitSecondaryMode('estrella');
                        // resetear niveles de estrella
                        this.estrellaNivel = 0;
                    }

                    const tipoNota = nota.getData('tipo') || tipo;
                    if (tipoNota === 'Nota1') nota.setTexture('Nota1Fail'); else nota.setTexture('Nota2Fail');

                    this.time.delayedCall(500, () => {
                        nota.destroy();
                    });
                    this.onNotaFallida();
                    this.actualizarPuntaje();
                }
            }

        });
        nota.setData('tween', tween);

        nota.on('pointerdown', () => {
            // usa recolectarItem para aplicar multiplicador y logs
            this.recolectarItem('nota');
            console.log('Nota clickeada', nota.getData('tipo'));
            // elimina tween si quieres
            const t = nota.getData('tween');
            if (t) t.stop();
            nota.destroy();
        });
    }

    actualizarPuntaje() {
        this.textoPuntaje.setText('Puntaje: ' + this.puntosNotas);
    }

    //MODOS
    iniciarModoTormenta() {
        this.modoPrincipal  = 'tormenta';
        this.updatePersonajeScale();

        // Guardar estado previo (fuentes de verdad)
        this._prevBaseMultiplicador = this.baseMultiplicador || 1;
        this._prevStarMultiplier = this.starMultiplier || 1;

        // Establecer base a 2 y recalcular multiplicador de forma determinista
        this.baseMultiplicador = 2;
        this.updateMultiplicador();
        this.reapplyTopSecondaryEffects();
        console.log('[MODO] tormenta -> baseMultiplicador', this.baseMultiplicador, 'starMultiplier', this.starMultiplier, 'multiplicador', this.multiplicador);

        if (this.videoFondo && this.videoFondo.setDepth) this.videoFondo.setDepth(0);

        // Destruir video actual y reemplazar por fondoThunder
        if (this.videoFondo) {
            this.videoFondo.destroy();
        }

        this.videoFondo = this.add.video(
            this.sys.game.config.width / 2,
            this.sys.game.config.height / 2,
            'fondoThunder'
        ).setOrigin(0.5)
        .setDisplaySize(this.sys.game.config.width/7, this.sys.game.config.height/4);

        this.videoFondo.play(true);
        this.videoFondo.setDepth(0);

        // Timer de 10 segundos → volver al modo básico
        this.time.delayedCall(10000, () => {
            if (this.videoFondo) {
                this.videoFondo.destroy();
            }

            // Restaurar fondoBasic
            this.videoFondo = this.add.video(
                this.sys.game.config.width / 2,
                this.sys.game.config.height / 2,
                'fondoBasic'
            ).setOrigin(0.5)
            .setDisplaySize(this.sys.game.config.width/10, this.sys.game.config.height/5);

            this.videoFondo.play(true);
            this.videoFondo.setDepth(0);

            // Restaurar fuentes de multiplicador y recalcular
            this.baseMultiplicador = this._prevBaseMultiplicador || 1;
            this.starMultiplier = this._prevStarMultiplier || 1;
            
            this.updateMultiplicador();
            this.reapplyTopSecondaryEffects(); // esto llamará applyEspiralEffects(entry) si top.key === 'espiral'
            // Volver al modo básico
            this.iniciarModoBasico();
        });

        console.log('[MODO] tormenta -> baseMultiplicador', this.baseMultiplicador, 'starMultiplier', this.starMultiplier, 'multiplicador', this.multiplicador);
    }



    applyEstrellaEffects(entry) {
        console.log('[APPLY]', entry.key, 'initialized=', entry.initialized, 'createdVideo=', entry.createdVideoRain || entry.createdVideoStar, 'createdNube=', entry.createdNubeEspiral || entry.createdNubeEstrella, 'prevScale=', entry.prevPersonajeScale);

        // Guardar prevs si no están
        entry.prevStarMultiplier = entry.prevStarMultiplier || this.starMultiplier || 1;
        entry.prevVideo = entry.prevVideo || this.videoFondo;
        entry.prevNube = entry.prevNube || this.nubeBasic;

        // Si NO está inicializada, es la primera activación: establecer nivel base de estrella
        if (!entry.initialized) {
            // establecer starMultiplier inicial (solo la primera vez)
            this.starMultiplier = Math.max(this.starMultiplier || 1, 2);
            entry.initialized = true;
        } else {
            // Reaplicación: no tocar starMultiplier, solo asegurar que multiplicador se recalcula
            // (esto mantiene el nivel alcanzado)
        }

        // Recalcular multiplicador determinista
        this.updateMultiplicador();

        const actorDepth = 2;

        // Nube: crear si no existe o si la entrada no la creó aún
        if (!entry.createdNubeEstrella) {
            if (this.nubeBasic) this.nubeBasic.destroy();
            this.nubeBasic = this.add.image(this.sys.game.config.width / 2, this.sys.game.config.height / 2 + 150, 'NubeEstrella')
                .setOrigin(0.5).setDepth(actorDepth);
            entry.createdNubeEstrella = true;
        } else {
            if (this.nubeBasic) this.nubeBasic.setDepth(actorDepth);
        }

        // Video: si el modo principal es 'tormenta' respetar fondoThunder; si no, crear overlay si no existe
        if (this.modoPrincipal === 'tormenta') {
            if (this.videoFondo && this.videoFondo.setDepth) this.videoFondo.setDepth(0);
            // no crear videoStar en tormenta; marcar que no la creó esta entrada
            entry.createdVideoStar = false;
            if (this.videoStar) {
                // si había overlay de otra entrada, ocultarlo para no tapar fondoThunder
                this.videoStar.setVisible(false);
            }
        } else {
            if (!entry.createdVideoStar) {
                this.videoStar = this.add.video(this.sys.game.config.width / 2, this.sys.game.config.height / 2, 'fondoStar')
                    .setOrigin(0.5)
                    .setDisplaySize(this.sys.game.config.width / 10, this.sys.game.config.height / 5)
                    .setDepth(0);
                this.videoStar.play(true);
                entry.createdVideoStar = true;
            } else if (this.videoStar) {
                this.videoStar.setVisible(true);
                this.videoStar.setDepth(0);
            }
        }

        // Animación compuesta: crear si no existe y forzar play y depth
        if (!this.anims.exists('cloudeeEstrella')) {
            // crear anim compuesta (mantén tu implementación)
            // Crear animación compuesta solo si no existe
            if (!this.anims.exists('cloudeeEstrella')) {
                const frames = [
                    ...this.anims.generateFrameNumbers('Pirueta1', { start: 0, end: 2 }),
                    ...this.anims.generateFrameNumbers('Pirueta2', { start: 0, end: 2 }),
                    ...this.anims.generateFrameNumbers('Pirueta3', { start: 0, end: 2 }),
                    ...this.anims.generateFrameNumbers('Pirueta4', { start: 0, end: 2 }),
                    ...this.anims.generateFrameNumbers('Pirueta5', { start: 0, end: 0 }),

                    // bailebasico 1..6 (primera repetición)
                    ...this.anims.generateFrameNumbers('BaileBasico1', { start: 0, end: 2 }),
                    ...this.anims.generateFrameNumbers('BaileBasico2', { start: 0, end: 2 }),
                    ...this.anims.generateFrameNumbers('BaileBasico3', { start: 0, end: 2 }),
                    ...this.anims.generateFrameNumbers('BaileBasico4', { start: 0, end: 2 }),
                    ...this.anims.generateFrameNumbers('BaileBasico5', { start: 0, end: 2 }),
                    ...this.anims.generateFrameNumbers('BaileBasico6', { start: 0, end: 2 }),

                    // bailebasico 1..6 (segunda repetición)
                    ...this.anims.generateFrameNumbers('BaileBasico1', { start: 0, end: 2 }),
                    ...this.anims.generateFrameNumbers('BaileBasico2', { start: 0, end: 2 }),
                    ...this.anims.generateFrameNumbers('BaileBasico3', { start: 0, end: 2 }),
                    ...this.anims.generateFrameNumbers('BaileBasico4', { start: 0, end: 2 }),
                    ...this.anims.generateFrameNumbers('BaileBasico5', { start: 0, end: 2 }),
                    ...this.anims.generateFrameNumbers('BaileBasico6', { start: 0, end: 2 }),
                ];

                this.anims.create({
                    key: 'cloudeeEstrella',
                    frames: frames,
                    frameRate: 12,
                    repeat: -1
                });
            }
        }
        if (this.personaje) {
            this.personaje.setDepth(3);
            this.personaje.play('cloudeeEstrella');
        }

        // Forzar depths de notas y HUD
        if (this.notasGroup) this.notasGroup.getChildren().forEach(n => n.setDepth(1));
        if (this.textoPuntaje) this.textoPuntaje.setDepth(100);

        console.log('Estrella aplicada. starMultiplier x' + this.starMultiplier + ', total x' + this.multiplicador);
    }

 

    cleanupEstrellaEffects(entry) {
        console.log('[CLEANUP]', entry.key, 'willRestore prevVideo=', !!entry.prevVideo, 'prevNube=', !!entry.prevNube, 'prevScale=', entry.prevPersonajeScale);

        // Restaurar starMultiplier al valor previo guardado en la entrada
        this.starMultiplier = entry.prevStarMultiplier || 1;

        // Recalcular multiplicador total
        this.updateMultiplicador();

        // Destruir nube estrella solo si la creó esta entrada
        if (entry.createdNubeEstrella && this.nubeBasic) {
            this.nubeBasic.destroy();
            this.nubeBasic = null;
        }

        // Restaurar nube previa si existe
        if (entry.prevNube && entry.prevNube.scene) {
            this.nubeBasic = entry.prevNube;
            if (this.nubeBasic.setDepth) this.nubeBasic.setDepth(2);
        } else if (!this.nubeBasic && (this.modoPrincipal === 'basico' || this.modoPrincipal === 'tormenta')) {
            this.nubeBasic = this.add.image(this.sys.game.config.width / 2, this.sys.game.config.height / 2 + 150, 'NubeBasic').setOrigin(0.5).setDepth(2);
        }

        // Destruir overlay de videoStar solo si esta entrada lo creó
        if (entry.createdVideoStar && this.videoStar) {
            this.videoStar.destroy();
            this.videoStar = null;
        }

        // Restaurar videoFondo previo si entry.prevVideo existe
        if (entry.prevVideo && entry.prevVideo.scene) {
            this.videoFondo = entry.prevVideo;
            if (this.videoFondo.setDepth) this.videoFondo.setDepth(0);
        }

        // Restaurar animación del personaje al baile básico
        if (this.personaje) {
            this.personaje.setDepth(3);
            this.personaje.play('cloudeeBaile');
        }

        // Forzar depths
        if (this.notasGroup) this.notasGroup.getChildren().forEach(n => n.setDepth(1));
        if (this.textoPuntaje) this.textoPuntaje.setDepth(100);

        console.log('Estrella limpiada. starMultiplier x' + this.starMultiplier + ', total x' + this.multiplicador);
    }


    applyEspiralEffects(entry) {
        console.log('[APPLY]', entry.key, 'initialized=', entry.initialized, 'createdVideo=', entry.createdVideoRain || entry.createdVideoStar, 'createdNube=', entry.createdNubeEspiral || entry.createdNubeEstrella, 'prevScale=', entry.prevPersonajeScale);

        // Guardar prevs si no están
        entry.prevNube = entry.prevNube || this.nubeBasic;
        entry.prevVideo = entry.prevVideo || this.videoFondo;
        entry.initialized = entry.initialized || false;

        // No tocar multiplicadores ni fondo. Solo visuales de espiral.
        const actorDepth = 2;

        // Nube Espiral: crear solo la primera vez que la entrada se inicializa
        if (!entry.createdNubeEspiral) {
            // guardar prev antes de destruir
            entry.prevNube = this.nubeBasic;
            if (this.nubeBasic) this.nubeBasic.destroy();

            this.nubeBasic = this.add.image(
                this.sys.game.config.width / 2,
                this.sys.game.config.height / 2 + 150,
                'NubeEspiral'
            ).setOrigin(0.5).setDepth(actorDepth);

            entry.createdNubeEspiral = true;
        } else {
            // si ya existe, asegurar depth
            if (this.nubeBasic) this.nubeBasic.setDepth(actorDepth);
        }

        // Animación compuesta Espiral: crear si no existe y forzar play
        if (!this.anims.exists('cloudeeEspiral')) {
            const frames = [
                ...this.anims.generateFrameNumbers('Espiral1', { start: 0, end: 2 }),
                ...this.anims.generateFrameNumbers('Espiral2', { start: 0, end: 2 }),
                ...this.anims.generateFrameNumbers('Espiral3', { start: 0, end: 2 }),
                ...this.anims.generateFrameNumbers('Espiral4', { start: 0, end: 2 }),
                ...this.anims.generateFrameNumbers('Espiral5', { start: 0, end: 1 }),
            ];
            this.anims.create({
                key: 'cloudeeEspiral',
                frames: frames,
                frameRate: 12,
                repeat: -1
            });
        }

        // No tocar escala aquí. La escala se gestiona centralmente.
        if (this.personaje) {
            this.personaje.setDepth(actorDepth);
            this.personaje.play('cloudeeEspiral');
        }
        entry.initialized = true;

        // Forzar depths de notas y HUD si hace falta
        if (this.notasGroup) this.notasGroup.getChildren().forEach(n => n.setDepth(1));
        if (this.textoPuntaje) this.textoPuntaje.setDepth(100);

        console.log('Espiral aplicada. entry.createdNubeEspiral=', entry.createdNubeEspiral);
    }

    cleanupEspiralEffects(entry) {
        console.log('[CLEANUP]', entry.key, 'willRestore prevVideo=', !!entry.prevVideo, 'prevNube=', !!entry.prevNube, 'prevScale=', entry.prevPersonajeScale);

        // Destruir nube espiral solo si esta entrada la creó
        if (entry.createdNubeEspiral && this.nubeBasic) {
            this.nubeBasic.destroy();
            this.nubeBasic = null;
        }

        // Restaurar nube previa si existe
        if (entry.prevNube && entry.prevNube.scene) {
            this.nubeBasic = entry.prevNube;
            if (this.nubeBasic.setDepth) this.nubeBasic.setDepth(2);
        } else {
            // Si no hay prevNube, recrear NubeBasic según modo principal
            if (this.modoPrincipal === 'basico' || this.modoPrincipal === 'tormenta') {
                this.nubeBasic = this.add.image(this.sys.game.config.width / 2, this.sys.game.config.height / 2 + 150, 'NubeBasic')
                    .setOrigin(0.5).setDepth(2);
            }
        }

         //Escala: restaurar SIEMPRE a la base global
        if (this.personaje) {
            this.updatePersonajeScale();
            this.personaje.setDepth(2);
            if (this.anims.exists('cloudeeBaile')) this.personaje.play('cloudeeBaile');
        }

        // Restaurar animación del personaje al baile correspondiente del modo principal
        // Si hay otro secundario activo (ej: estrella) su apply debería reponer la animación
        const top = this.secondaryStack[this.secondaryStack.length - 1];
        if (!top || top.key !== 'espiral') {
            // No hay otro secundario encima: restaurar baile básico
            if (this.personaje) {
                this.personaje.setDepth(3);
                this.personaje.play('cloudeeBaile');
            }
        } else {
            // Si hay otro secundario encima, reapplyTopSecondaryEffects se encargará
        }

        // Forzar depths
        if (this.notasGroup) this.notasGroup.getChildren().forEach(n => n.setDepth(1));
        if (this.textoPuntaje) this.textoPuntaje.setDepth(100);

        console.log('Espiral limpiada.');
    }

    applyLluviaEffects(entry) {
        // Al entrar a lluvia, resetear contadores propios para evitar arrastrar rachas previas
        this.fallosConsecutivos = 0;
        this.aciertosConsecutivos = 0;
        console.log('[APPLY]', entry.key, 'initialized=', entry.initialized, 'createdVideo=', entry.createdVideoRain || entry.createdVideoStar, 'createdNube=', entry.createdNubeEspiral || entry.createdNubeEstrella, 'prevScale=', entry.prevPersonajeScale);

        // Guardar prevs si no están
        entry.prevVideo = entry.prevVideo || this.videoFondo;
        entry.prevNube  = entry.prevNube  || this.nubeBasic;

        // No tocar multiplicadores ni nube ni animación (usa la animación de Espiral)
        // Solo cambiar el video de fondo a fondoRain si no lo creó ya esta entrada
        if (!entry.createdVideoRain) {
            // destruir videoFondo actual si existe (guardado en prevVideo)
            if (this.videoFondo) {
                this.videoFondo.destroy();
            }

            // crear fondoRain como videoFondo
            this.videoFondo = this.add.video(
                this.sys.game.config.width / 2,
                this.sys.game.config.height / 2,
                'fondoRain'
            ).setOrigin(0.5)
            .setDisplaySize(
                this.sys.game.config.width / 10, 
                this.sys.game.config.height / 5)
            .setDepth(0);

            this.videoFondo.play(true);
            entry.createdVideoRain = true;
        } else {
            // si ya la creó, asegurar que esté visible y depth correcto
            if (this.videoFondo && this.videoFondo.setDepth) {
                this.videoFondo.setDepth(0);
                this.videoFondo.setVisible(true);
            }
        }

        // Mantener la nube y la animación de Espiral tal como están
        const actorDepth = 2;
        if (this.nubeBasic) this.nubeBasic.setDepth(actorDepth);
        if (this.personaje) {
            // Escala: siempre base
            this.updatePersonajeScale();
            this.personaje.setDepth(actorDepth);
            // forzar que siga el baile de espiral si existe
            if (this.anims.exists('cloudeeEspiral')) this.personaje.play('cloudeeEspiral');
        }

        // Forzar depths de notas y HUD
        if (this.notasGroup) this.notasGroup.getChildren().forEach(n => n.setDepth(1));
        if (this.textoPuntaje) this.textoPuntaje.setDepth(100);

        console.log('Lluvia aplicada. createdVideoRain=', entry.createdVideoRain);
    }

    cleanupLluviaEffects(entry) {

        // Al salir de lluvia, resetear contadores para no disparar inmediatamente otra transición
        this.fallosConsecutivos = 0;
        this.aciertosConsecutivos = 0;
        console.log('[CLEANUP]', entry.key, 'willRestore prevVideo=', !!entry.prevVideo, 'prevNube=', !!entry.prevNube, 'prevScale=', entry.prevPersonajeScale);

        // Destruir fondoRain solo si esta entrada lo creó
        if (entry.createdVideoRain && this.videoFondo) {
            this.videoFondo.destroy();
            this.videoFondo = null;
        }

        // Restaurar video previo si existe
        if (entry.prevVideo && entry.prevVideo.scene) {
            this.videoFondo = entry.prevVideo;
            if (this.videoFondo && this.videoFondo.setDepth) this.videoFondo.setDepth(0);
        } else {
            // Si no hay prevVideo, recrear fondo según modo principal
            if (this.modoPrincipal === 'tormenta') {
                // recrear fondoThunder
                this.videoFondo = this.add.video(this.sys.game.config.width / 2, this.sys.game.config.height / 2, 'fondoThunder')
                    .setOrigin(0.5).setDisplaySize(this.sys.game.config.width/7, this.sys.game.config.height/4).setDepth(0);
                this.videoFondo.play(true);
            } else {
                // recrear fondoBasic
                this.videoFondo = this.add.video(this.sys.game.config.width / 2, this.sys.game.config.height / 2, 'fondoBasic')
                    .setOrigin(0.5).setDisplaySize(this.sys.game.config.width/10, this.sys.game.config.height/5).setDepth(0);
                this.videoFondo.play(true);
            }
        }

        // No tocar nube ni animación (Espiral las maneja)
        const top = this.secondaryStack[this.secondaryStack.length - 1];
        if (!top || top.key !== 'espiral') {
            if (this.personaje) {
                // Escala: aseguramos base al salir
                this.updatePersonajeScale();
                this.personaje.setDepth(2);
                if (this.anims.exists('cloudeeBaile')) this.personaje.play('cloudeeBaile');
            }
        }

        if (this.notasGroup) this.notasGroup.getChildren().forEach(n => n.setDepth(1));
        if (this.textoPuntaje) this.textoPuntaje.setDepth(100);

        console.log('Lluvia limpiada. restored video to prevVideo');
    }

    
    // Entrar en secundario
    enterSecondaryMode(key, prioridad, durationMs, applyEffects, cleanupEffects) {
        
        
        // Evitar duplicados: si ya existe una entrada con la misma key, no apilar otra
        const existingIdx = this.secondaryStack.findIndex(e => e.key === key);
        if (existingIdx !== -1) {
            console.log('[ENTER] ya existe secundario', key, '-> ignorando nueva entrada');
            return;
        }
    
        // Exclusión mutua: si vamos a entrar Lluvia, salir de Espiral; y viceversa
        if (key === 'lluvia' && this.getModoActivo() === 'espiral') {
            
            this._suppressSecondaryTriggers = true;
            this.fallosConsecutivos = 0;
            this.aciertosConsecutivos = 0;
            this.exitSecondaryMode('espiral');
            this.time.delayedCall(0, () => { this._suppressSecondaryTriggers = false; }, [], this);
        
        } else if (key === 'espiral' && this.getModoActivo() === 'lluvia') {
            
            this._suppressSecondaryTriggers = true;
            this.fallosConsecutivos = 0;
            this.aciertosConsecutivos = 0;
            this.exitSecondaryMode('lluvia');
            this.time.delayedCall(0, () => { this._suppressSecondaryTriggers = false; }, [], this);
        }
    
        const top = this.secondaryStack[this.secondaryStack.length - 1];
        if (top && top.prioridad > prioridad) {
            console.log('Secundario ignorado por prioridad', key);
            return;
        }

        const entry = {
            key,
            prioridad,
            prevBaseMultiplicador: this.baseMultiplicador,
            prevStarMultiplier: this.starMultiplier,
            prevNube: this.nubeBasic,
            prevVideo: this.videoFondo,
            applyEffects,
            cleanupEffects,
            timerRef: null,
            estrellaSubCombo: 0,
            createdVideoStar: false,
            createdNubeEstrella: false,
            createdNubeEspiral: false,
            createdVideoRain: false,
            initialized: false,
            targetScale: null
        };

        if (key === 'espiral' || key === 'lluvia' || key === 'estrella') {
            entry.targetScale = this.personajeSecondaryScale; // 0.4
        }

        this.secondaryStack.push(entry);
        if (applyEffects) applyEffects.call(this, entry);

        this.updatePersonajeScale();

        if (typeof durationMs === 'number' && isFinite(durationMs)) {
            entry.timerRef = this.time.delayedCall(durationMs, () => this.exitSecondaryMode(key));
        }

        console.log('Entró secundario', key, 'pila size', this.secondaryStack.length);
    }



    // Salir de secundario
    exitSecondaryMode(key) {
        const idx = this.secondaryStack.findIndex(e => e.key === key);
        if (idx === -1) return;
        const entry = this.secondaryStack[idx];

        // cancelar timer si existe
        if (entry.timerRef) {
            try { entry.timerRef.remove(false); } catch(e) { /* defensivo */ }
            entry.timerRef = null;
        }

        // ejecutar cleanup del secundario
        if (entry.cleanupEffects) {
            try { entry.cleanupEffects.call(this, entry); } catch (err) {
                console.error('[EXIT] cleanupEffects error for', key, err);
            }
        }

        // eliminar la entrada de la pila primero
        this.secondaryStack.splice(idx, 1);

        this.updatePersonajeScale();

        console.log('[EXIT] key=', key, 'stackAfter=', this.secondaryStack.map(e => e.key));
    }


    reapplyTopSecondaryEffects() {
        const top = this.secondaryStack[this.secondaryStack.length - 1];
        if (!top) return;
        // applyEffects ahora es idempotente y no reinicializa starMultiplier si ya inicializado
        if (top.applyEffects) top.applyEffects.call(this, top);
        this.updatePersonajeScale();
        // después de reaplicar, recalcular multiplicador por si algo cambió en base
        this.updateMultiplicador();
        console.log('Reaplicados efectos del secundario', top.key);
    }

    updatePersonajeScale() {
        if (!this.personaje) return;

        // ¿Hay algún secundario activo que requiera escala reducida?
        const hasReducedSecondary = this.secondaryStack.some(e => e && (e.key === 'espiral' || e.key === 'lluvia'));

        // Decidir objetivo
        let targetScale;
        if (hasReducedSecondary) {
            targetScale = this.personajeScaleSecondary;
        } else if (this.modoPrincipal === 'basico' || this.modoPrincipal === 'estrella') {
            targetScale = this.personajeScaleBasico;
        } else {
            // fallback: usar escala de modo básico si no hay otro requerimiento
            targetScale = this.personajeScaleBasico;
        }

        // Aplicar solo si cambia para evitar trabajo innecesario
        if (Math.abs((this.personaje.scaleX || 1) - targetScale) > 0.001) {
            this.personaje.setScale(targetScale);
        }
    }

    stopAllGameActivity() {
        // Marca global para evitar nuevos spawns
        this.gameEnded = true;
        this.allowSpawns = false;


        // Detener música
        try { if (this.music && this.music.isPlaying) this.music.stop(); } catch(e){}

        // Detener videos de fondo
        try {
            if (this.videoFondo && this.videoFondo.stop) this.videoFondo.stop();
            if (this.videoFondo && this.videoFondo.destroy) this.videoFondo.setVisible(false);
        } catch(e){}

        // Parar tweens y animaciones globales
        try { this.tweens.killAll(); } catch(e){}

        // Pausar animaciones del personaje y de otros sprites
        try {
            if (this.personaje && this.personaje.anims) this.personaje.anims.pause();
            this.anims.pauseAll();
        } catch(e){}

        // Cancelar timers guardados en arrays (rayoTimers, activeTimers, etc.)
        try {
            const arrs = ['activeTimers','rayoTimers','notaTimers','tomateTimers'];
            arrs.forEach(name => {
            if (Array.isArray(this[name])) {
                this[name].forEach(t => { try { t.remove(false); } catch(e){} });
                this[name].length = 0;
            }
            });
        } catch(e){}

        // Detener generación de notas/tomates/rayos: si usas flags, setéalos
        try {
            this.allowSpawns = false; // usa esta bandera en tus funciones de spawn
        } catch(e){}

        // Vaciar grupos y desactivar interactividad
        try {
            if (this.notasGroup) {
            this.notasGroup.getChildren().forEach(n => {
                try { n.disableInteractive(); n.body && n.body.stop && n.body.stop(); } catch(e){}
            });
            }
            if (this.tomatesGroup) {
            this.tomatesGroup.getChildren().forEach(t => {
                try { t.disableInteractive(); } catch(e){}
            });
            }
            if (this.rayoActive && this.rayoActive.sprite) {
            try { this.rayoActive.sprite.disableInteractive(); } catch(e){}
            }
        } catch(e){}

        // Desactivar input global
        try { this.input.enabled = false; } catch(e){}
    }



}