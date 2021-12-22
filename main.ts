tiles.setTilemap(tilemap`レベル1`)
let Flag = 0
game.onUpdate(function () {
    if (Flag == 1) {
        tiles.setTilemap(tilemap`レベル2`)
    } else if (Flag == 2) {
        tiles.setTilemap(tilemap`レベル3`)
    } else if (Flag == 3) {
        tiles.setTilemap(tilemap`レベル4`)
    } else if (Flag == 4) {
        tiles.setTilemap(tilemap`レベル5`)
    }
})
