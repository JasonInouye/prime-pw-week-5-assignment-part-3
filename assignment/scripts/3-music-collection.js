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

// Create findByArtist funciton
function findByArtist( artist ){
    console.log( `inside findByArtist function` );
    let results = [];
    for (var i = 0; i < collection.length; i++) {
        console.log( collection[i].artist );
        if ( artist === collection[i].artist  ) {
            // console.log( `inside IF statement`, collection[i].artist );

            let albumResult ={
                title: collection[i].title,
                artist: collection[i].artist,
                yearPublished: collection[i].yearPublished
            };   // end albumResult
            results.push( albumResult );

        } // End of If
    } // End of For Loop
    return results;
} // End findByArtist

console.log( findByArtist( `Adele` ) );
// test of non existing artist
// console.log( findByArtist( `The Beatles` ) );

// STRETCH GOALS
// Create search funciton

function search( artist, year ){
    console.log( `inside of search function` );
    //console.log( `artist is:`, artist);
    //console.log( `year is:`, year);
    let searchResults = [];
    if ( artist === undefined && year === undefined ) {
        console.log( `The parameters are empty here is the entire collection` );
        console.log( collection );
    }
    else {
    for (var i = 0; i < collection.length; i++) {
        console.log( collection[i].artist, collection[i].yearPublished );
        if ( artist === collection[i].artist && year === collection[i].yearPublished  ) {
            // console.log( `inside IF statement`, collection[i].artist );
            console.log( `inside if search` );
            let albumSearchResult ={
                title: collection[i].title,
                artist: collection[i].artist,
                yearPublished: collection[i].yearPublished
            };   // end albumResult
            searchResults.push( albumSearchResult );
        } // End of If
    } // End of For Loop
    // return searchResults;
    }
} // End Search

// test search function
console.log( search( `Prince`, `1984` ) );

// test no results search function
console.log( search( `Prince`, `2006` ) );

// test no parameters
console.log( search() );
