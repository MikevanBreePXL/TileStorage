import * as fs from 'fs';

const data = JSON.parse(fs.readFileSync('.\\Scripts\\Tegels.json', 'utf8'));
console.log(data);

for (let index = 0; index < data.length; index++) {
    const tile = data[index];
    if (tile.image) {
        console.log(index, tile);
    }
}