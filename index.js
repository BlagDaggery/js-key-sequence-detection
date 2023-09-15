const keysPressed = [];
const secretCode = 'blagdaggery';

function testForSecretCode(e) {
    keysPressed.push(e.key);
    keysPressed.splice(-secretCode.length - 1, keysPressed.length - secretCode.length);

    if (keysPressed.join('').includes(secretCode)) {
        cornify_add();
    }
}

window.addEventListener('keyup', testForSecretCode);
