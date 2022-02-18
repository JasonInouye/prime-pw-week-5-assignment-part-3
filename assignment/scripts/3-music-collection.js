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
    var albumName = title;
    console.log( `The album name is `, albumName );
    var albumName ={
        title: title,
        artist: artist,
        yearPublished: yearPublished
    }   // end albumName
    console.log( `The album name to be pushed is`, title );
    collection.push( title );
    //console.log( collection );
    return albumName;
} // End addToCollection

console.log( addToCollection(`The Essential Bob Dylan`, `Bob Dylan`, `2016`) );
console.log( addToCollection(`Legend the best of Bob Marley`, `Bob Marley`, `1984`) );
console.log( addToCollection(`Purple Rain`, `Prince`, `1984`) );
console.log( addToCollection(`21`, `Adele`, `2011`) );
console.log( addToCollection(`25`, `Adele`, `2015`) );
console.log( addToCollection(`From a Room Vol.1 and Vol.2`, `Chris Stapleton`, `2017`) );
