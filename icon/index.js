import dicon from './dicon';
import uicon from './uicon';

function iconsAll() {
    let css = dicon + uicon;
    const pureCss = css.replace(/\t|\n|\r/g, '');

    const reg = /\.(uicon|dicon)-([\s\S]*?)\:before\s*\{([\s\S]*?)\}/g;  //  /\.(dicon|uicon)-([a-z\-]+[a-z])\:before\s*\{\s*content\:\s*'\\([a-z\d]+)';\}/g;
    const icons = {uicon: [], dicon: []};

    for (const [, type, name, code] of pureCss.matchAll(reg)) {
        if (!icons[type]) {
            icons[type] = [];
        }
        icons[type].push({name, code});
    }

    console.log(icons)

    return icons;
}
