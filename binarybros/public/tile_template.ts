interface Tile {
    id: number;
    caption: string;
    description: string;
    image: string;

    // add CSS
    css: string;
    // add JS
    js: string;
}

function createTile(tile: Tile): HTMLElement {
    const tileElem = document.createElement('div');
    tileElem.classList.add('tile');

    const imageElem = document.createElement('img');
    imageElem.src = tile.image;

    const captionElem = document.createElement('h3');
    captionElem.innerText = tile.caption;

    const descriptionElem = document.createElement('p');
    descriptionElem.innerText = tile.description;

    tileElem.appendChild(imageElem);
    tileElem.appendChild(captionElem);
    tileElem.appendChild(descriptionElem);
    
    return tileElem;
}

const tiles: Tile[] = [
    {
        id: 1,
        caption: 'Tile 1',
        description: 'This is tile 1',
        image: 'https://picsum.photos/200/300',
        css: '',
        js: ''
    },

    {
        id: 2,
        caption: 'Tile 2',
        description: 'This is tile 2',
        image: 'https://picsum.photos/200/300',
        css: '',
        js: ''
    },

    {
        id: 3,
        caption: 'Tile 3',
        description: 'This is tile 3',
        image: 'https://picsum.photos/200/300',
        css: '',
        js: ''
    }
];

// @Jignesh add a TileContainer div element to contain the tiles for testing

const TileContainer = document.getElementById('TileContainer');

for (const tile of tiles) {
    const tileElem = createTile(tile);
    TileContainer.appendChild(tileElem);
}
