// on page debug

var default_result_div = document.getElementById('result_div');

if (!default_result_div) {
    var result_div = document.createElement('div');
    document.body.appendChild(result_div);
}

var debug = {
    log: function(string, target_div) {

        if (!target_div) {
            target_div = default_result_div;
        }

        target_div.innerHTML = '';
        target_div.innerHTML = string;
        console.log(string);
    }
};
