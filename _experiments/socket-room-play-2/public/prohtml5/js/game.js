// GAME.JS

// INITIALIZATION
window.addEventListener('load', function(e) {
    console.log('all files loaded, initializing game object. ');
    game.init();
});


// --- GAME OBJECT ---
// Main game object.
let game = {
    // start initializing objects, preloading assets and display start screen
    init: function() {

        // Initialize Objects
        levels.init();
        loader.init();
        mouse.init();

        // hide all game layers and display start screen
        $('.game_view').hide();
        $('#gamestartscreen').show();

        //Get handler for game canvas and context
        game.canvas = document.getElementById('gamecanvas');
        game.context = game.canvas.getContext('2d');
    },

    show_level_screen: function() {
        $('.gamelayer').hide();
        $('#levelselectscreen').show('slow');
    },

    // Game mode
    mode: 'intro',

    // X Y Coordinates of the slingshot
    slingshot_x: 140,
    slingshot_y: 280,

    start: function() {
        $('.gamelayer').hide();

        // dispay the game canvas and score
        $('#gamecanvas').show();
        $('#scorescreen').show();

        game.mode = 'intro';
        game.offset_left = 0;
        game.ended = false;
        game.animation_frame = requestAnimationFrame(game.animate, game.canvas);
    },

    // --- jeffnote: finite-statemachine stuff.
    // maximum panning speed per frame in pixels.
    max_speed: 3,
    min_offset: 0,
    max_offset: 300,

    // current panning offset
    offset_left: 0,
    // score
    score: 0,

    // Pan the screen to the center on 'new_center' jeffnote: magical formula
    pan_to: function(new_center) {

        if (Math.abs(new_center.offset_left - game.canvas.width/4) > 0
            && game.offset_left <= game.max_offset
            && game.offset_left >= game.min_offset) {

            let deltaX = Math.round((new_center - game.offset_left - game.canvas.width/4) / 2);

            if (deltaX && Math.abs(deltaX) > game.max_speed) {
                deltaX = game.max_speed * Math.abs(deltaX) / (deltaX);
            }
            game.offset_left += deltaX;
        } else {
            return true;
        }

        if (game.offset_left < game.min_offset) {
            game.offset_left = game.min_offset;
            return true;
        }
        else if (game.offset_left > game.max_offset) {
            game.offset_left = game.max_offset;
            return true;
        }

        return false;
    },

    //jeffnote: finite state machine action.
    handle_panning: function() {
        // game.offset_left++;

        if (game.mode == 'intro') {
            if (game.pan_to(700)) {
                game.mode = 'load-next-hero';
            }
        }

        if (game.mode == 'waiting-for-firing') {
            if (mouse.dragging) {
                game.pan_to(mouse.x + game.offset_left);
            } else {
                game.pan_to(game.slingshot_x);
            }
        }

        if (game.mode == 'load-next-hero') {
            //TODO:
            // check if any villains are alive, if not, end the level (success/win)
            // check if there are any more heroes left to load, if not, end the level (failure/lose)

            game.mode = 'waiting-for-firing';
        }

        if (game.mode == 'firing') {
            game.pan_to(game.slingshot_x);
        }

        if (game.mode == 'fired') {
            //TODO:
            // Pan to wherever the hero currently is.
        }
    },

    animate: function() {

        // animate the BG
        game.handle_panning();

        // animate characters

        // draw background with parallax scrolling. JEFFNOTE: The magic.
        game.context.drawImage(game.current_level.background_image, game.offset_left/4, 0, 640, 480, 0, 0, 640, 480);
        game.context.drawImage(game.current_level.foreground_image, game.offset_left, 0, 640, 480, 0, 0, 640, 480);

        // draw slingshot
        game.context.drawImage(game.slingshot_image, game.slingshot_x - game.offset_left, game.slingshot_y);
        game.context.drawImage(game.slingshot_front_image, game.slingshot_x - game.offset_left, game.slingshot_y);

        if (!game.ended) {
            game.animation_frame = requestAnimationFrame(game.animate, game.canvas);
        }

    },
};

// --- LEVELS OBJECT ---
// Handles levels and levels initialization.
let levels = {

    //Level data
    data: [
        {
            // first level
            foreground: 'desert-foreground',
            background: 'clouds-background',
            entities: []
        },
        {
            // second level
            foreground: 'desert-foreground',
            background: 'clouds-background',
            entities: []
        }
    ],

    // initialize level selection screen
    init: function() {
        let html = '';
        for (let i = 0; i < levels.data.length; i++) {
            let level = levels.data[i];
            html += `<input type="button" value="${i+1}" >`;
        }
        $('#levelselectscreen').html(html);

        // set the button click handlers TODO: this was missing.
        $('#levelselectscreen input').click(function() {
            levels.load(this.value-1);
            $('#levelselectscreen').hide();
        });
    },

    // Load all data and images for a specific level
    load: function(number) {

        // declare a new current_level object
        game.current_level = {number: number, hero: []};
        game.score = 0;
        $('#score').html(`Score: ${game.score}`);
        let level = levels.data[number];

        // load background, foreground, slingshot images.
        game.current_level.background_image = loader.load_image(`./images/backgrounds/${level.background}.png`);
        game.current_level.foreground_image = loader.load_image(`./images/backgrounds/${level.foreground}.png`);

        game.slingshot_image = loader.load_image(`./images/slingshot.png`);
        game.slingshot_front_image = loader.load_image(`./images/slingshot-front.png`);

        // Call game.start() once the assets have loaded.
        if (loader.loaded) {
            game.start();
        } else {
            loader.onload = game.start;
        }
    }

};

// --- LOADER ---
let loader = {
    loaded: true,
    loaded_count: 0,
    total_count: 0,

    init: function() {
        // check for sound support.
    },

    // load image method
    load_image: function(url) {
        this.total_count++;
        this.loaded = false;
        $('#loadingscreen').show();

        let image = new Image();
        image.src = url;
        image.onload = loader.item_loaded;
        return image;
    },

    // load sound method
    sound_file_extension: '.ogg',

    load_sound: function(url) {
        this.total_count++;
        this.loaded = false;
        $('#loadingscreen').show();

        let audio = new Audio();
        audio.src = `${url}${loader.sound_file_extension}`;
        audio.addEventListener('canplaythrough', loader.item_loaded, false);
        return audio;
    },

    // item-loaded handler.
    item_loaded: function() {
        loader.loaded_count++; // increment loaded counter

        $('#loadingmessage').html(`Loaded ${loader.loaded_count} of ${loader.total_count}`);

        if (loader.loaded_count === loader.loaded_count) {
            // err-thang loaded.
            loader.loaded = true;

            // hide loading screen
            $('#loadingscreen').hide();

            // call the loader.onload if method exists
            if (loader.onload) {
                loader.onload();
                loader.onload = undefined;
            }
        }
    }
};

let mouse = {
    x: 0,
    y: 0,
    down: false,

    init: function() {
        $('#gamecanvas').mousemove(mouse.mousemovehandler);
        $('#gamecanvas').mousedown(mouse.mousedownhandler);
        $('#gamecanvas').mouseup(mouse.mouseuphandler);
        $('#gamecanvas').mouseout(mouse.mouseouthandler);
    },

    mousemovehandler: function(ev) {
        let offset = $('#gamecanvas').offset(); // JEFFNOTE: equivalent to BBOX
        mouse.x = ev.pageX - offset.left;
        mouse.y = ev.pageY - offset.top;

        if (mouse.down) {
            mouse.dragging = true;  // JEFFNOTE: implicit member variable declaration seems okay.
        }
    },

    mousedownhandler: function(ev) {
        mouse.down = true;
        mouse.downX = mouse.x;
        mouse.downY = mouse.y;
        ev.originalEvent.preventDefault();
    },

    mouseuphandler: function(ev) {
        mouse.down = false;
        mouse.dragging = false;
    }
};