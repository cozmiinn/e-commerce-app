const wishStorageKey="wish";
function getWishlist(){
    const wishlist = localStorage.getItem(wishStorageKey);
    return wishlist ? JSON.parse(wishlist):[];  //daca este null, se returneaza un array gol
}


function saveWish(product){
    localStorage.setItem(wishStorageKey, JSON.stringify(product));
}


function addToWish(product){
    const wishlist=getWishlist();
    wishlist.push(product);
    saveWish(wishlist);
}


function deleteWish(product){
    const wishlist=getWishlist();
    const updateWish=wishlist.filter((p) => p.id !== product.id);
    saveWish(updateWish);
    window.location.reload(true);
}


function getNumberOfWishlist(){
    const wishlist=getWishlist();
    return wishlist.length;
}

export {getWishlist, saveWish, addToWish, deleteWish, getNumberOfWishlist};
