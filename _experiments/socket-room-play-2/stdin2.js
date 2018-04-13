const chalk = require('chalk');
const clear = require('clear');

clear();
process.stdout.write('ping > ');   //same as prompt.

process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
    const chunk = process.stdin.read();

    if (chunk !== null) {
        // process.stdout.write(`data: ${chalk.green(chunk)}`);
        process_input(chunk);

    }
});

process.stdin.on('end', () => {
    process.stdout.write('end');
});


/**
 * Processes the input via stdin during runtime.
 * @param input
 */
function process_input(input) {
    let buffer = input.trim();
    buffer = input.split(',');

    buffer[buffer.length-1] = buffer[buffer.length-1].replace(/\n/g, '');   // strip the new line.
    console.log(`pong: ${chalk.blue(buffer[0])}`);

    // if it's an 'a00' command...
    if (buffer[0] === 'a00') {
        console.log(chalk.green('processing command...'));

        for (let i = 1; i < buffer.length; i++) {
            console.log(chalk.red(buffer[i]));
        }

        // process motor input
    } else {
        process.stdout.write('No recognizable command.');
        process.stdout.write('\n');
    }

    process.stdout.write('ping > ');
}