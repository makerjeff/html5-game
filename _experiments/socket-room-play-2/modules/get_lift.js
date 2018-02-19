module.exports.get_lift = (delay) => {

    return new Promise((resolve, reject) => {
        var num = Math.floor(Math.random() * 3);

        console.log(`lift number generated (${num}), waiting for fulfillment.`);

        setTimeout(() => {
            resolve(num);
        }, delay);
    });


};