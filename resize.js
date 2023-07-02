const fs = require('fs');
const resizeImg = require('resize-img');



async function r(a) {
    try {
        const image = await resizeImg(fs.readFileSync('nft/' + a + '.jpg'), {
            width: (1536 / 2.5),
            height: (2048 / 2.5)
        });

        fs.writeFileSync('nftz/' + a + '.jpg', image);
        console.log("Resizing ", a)
    } catch (error) {
        console.log(error);
    }

}

//110000,115000,117500,118500,

async function aa() {
    for (let a = 118500; a < 119500; a++) {
        await r(a);
    }
}

aa()