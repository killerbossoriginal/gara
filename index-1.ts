import { cin } from "node-cin";

let cmd: any, x: number = 0, y: number = 0;

cmd = await cin('> ', false)
while (cmd != 0) {
    if (cmd == 'w') {
        y++;
    }
    if (cmd == 'a') {
        x--;
    }
    if (cmd == 's') {
        y--;
    }
    if (cmd == 'd') {
        x++;
    }

    if (x == -1) x = 0;
    else if (x == 4) x = 3;

    if (y == 4) y = 0;
    else if (y == -1) y = 3;

    console.log(`(${x}, ${y})`);

    cmd = await cin('> ', false);
}

console.log('Addio!')