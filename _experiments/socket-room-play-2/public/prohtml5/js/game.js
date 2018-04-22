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
    }
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
    },

    // Load all data and images for a specific level
    load: function(number) {

        // declare a new current_level object
        game.current_level = {number: number, hero: []};
        game.score = 0;
        $('#score').html(`Score: ${game.score}`);
        let level = levels.data[number];

        // load background, foreground, slingshot images.
        game.current_level.background_image = loader.load_image(`../images/backgrounds/${level.background}.png`);
        game.current_level.foreground_image = loader.load_image(`../images/backgrounds/${level.foreground}.png`);

        game.slingshot_image = loader.load_image(`../images/slingshot.png`);
        game.slingshot_front_image = loader.load_image(`../images/slingshot-front.png`);

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