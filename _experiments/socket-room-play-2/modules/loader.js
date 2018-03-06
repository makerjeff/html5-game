var loader = {
    loaded: true,
    loaded_count: 0,
    total_count: 0,

    init: function() {},

    load_image: function(url) {
        console.log('preloading images ' + url);
        this.total_count++;
        this.loaded = false;

        var image = new Image();
        image.src = url;
        image.onload = loader.item_loaded;
        return image;
    },

    item_loaded: function() {
        loader.loaded_count++;

        if (loader.loaded_count === loader.total_count) {

            loader.loaded = true;

            if (loader.onload) {
                loader.onload();
                loader.onload = undefined;
            }
        }
    },

    onload: function() {
        console.log('all images loaded, ready to run server.');
    }
};


// export module
module.exports.loader = loader;