console.log('***** Music Collection *****')

// create an array collection
let collection = [];

// Test album object
/*
let album0 ={
    title: 'Purple Rain',
    artist:'Prince',
    yearPublished:'1996'
}   // end album
*/

function addToCollection(title, artist, yearPublished){
    //let albumName = (`album`+collection.length);
    //console.log( `The album name is `, albumName );
    let album ={
        title: title,
        artist: artist,
        yearPublished: yearPublished
    };   // end album
    //console.log( `The album name to be pushed is`, album );
    collection.push( album );
    //console.log( collection );
    return album;
} // End addToCollection

console.log( addToCollection(`The Essential Bob Dylan`, `Bob Dylan`, `2016`) );
console.log( addToCollection(`Legend the best of Bob Marley`, `Bob Marley`, `1984`) );
console.log( addToCollection(`Purple Rain`, `Prince`, `1984`) );
console.log( addToCollection(`21`, `Adele`, `2011`) );
console.log( addToCollection(`25`, `Adele`, `2015`) );
console.log( addToCollection(`Traveller`, `Chris Stapleton`, `2015`) );

// Create showCollection function
// log the number of items in the array
function showCollection( array ){
    console.log( collection.length );
    for (let i = 0; i < array.length; i++) {
        console.log( `${array[i].title} by ${array[i].artist} published in ${array[i].yearPublished}` );
    }
}// End showCollection

console.log( showCollection( collection ) );
