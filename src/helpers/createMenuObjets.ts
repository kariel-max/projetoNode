type MenuOpitons = '' | 'all' | 'dog' | 'cat' | 'fish';

export const createMenuObejct = (activeMenu: MenuOpitons) => {
    let returnObejct = {
        all: false,
        dog: false,
        cat: false,
        fish: false 
    }

    if (activeMenu !== '') {
        returnObejct[activeMenu] = true;
    }

    return returnObejct;

}