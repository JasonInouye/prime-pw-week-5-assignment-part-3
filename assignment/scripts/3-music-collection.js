console.log('***** Music Collection *****')

// create an array collection
let collection = [];

let album0 ={
    title: 'Purple Rain',
    artist:'Prince',
    yearPublished:'1996'
}   // end album

function addToCollection(title, artist, yearPublished){
    let album0 ={
        title: title,
        artist: artist,
        yearPublished: yearPublished
    }   // end album
    console.log( album0 );
    collection.push( `album0` );
    console.log( collection );
} // End addToCollection
