
// QUICK AJAX METHOD


var quickJax = {
    get: function (url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'json';

        xhr.onload = function(e) {
            if (this.status === 200) {
                callback(this.response);
            } else {
                console.error('error ajax: get');
            }
        };

        xhr.send();
    },

    post: function(data, url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.open('POST',url, true);
        xhr.responseType = 'json';

        xhr.onload = function(e) {
            if (this.status === 200) {
                callback(this.response);
            } else {
                console.error('error ajax: post');
            }
        };

        xhr.send(data);
    }
};


// function quick_ajax(method, url, callback) {
//
//
//         var xhr = new XMLHttpRequest();
//         xhr.open('GET', url, true);
//         xhr.responseType = 'json';
//
//         xhr.onload = function(e) {
//             if (this.status === 200) {
// //                return this.response;
//                 callback(this.response);
//             } else {
//                 console.log('error ajax: get');
//             }
//         };
//         xhr.send();
//
//
// }