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
// Failed attemp to add tracks
// unable to get if statement on line 31 to work (check if track exists)
// function addToCollection(title, artist, yearPublished, [song, duration]){
//     for (var i = 0; i < collection.length; i++) {
//         if (collection.filter( i => i.title === title).length > 0) {
//             console.log( `inside filter IF statment`);
//             console.log( `the title filter is :`, collection.filter( i => i.title === title));
//             console.log( `The song filter is:`, collection.filter( i => i.tracks === song));
//             console.log( `the the title is :`, ( i => i.title === title).length);
//             console.log( `the the track is :`, ( i => i.tracks === song).length);
//             console.log( `The track names are:`, collection[i].tracks);
//                 for (var j = 0; j < collection[i].tracks.length; j++) {
//                     console.log( `j value`, j);
//                     console.log( `Track name again`, collection[i].tracks);
//                     console.log( `Filter Results:`, collection.filter( j => collection[i].tracks[j] === song));
//                     //if ( song !== collection[i].tracks[j].song ) {
//                     //if (collection.tracks.filter( j => i.collection.tracks === song).length > 0) {
//                     if (collection.filter( j => collection[i].tracks === song).length > 0) {
//                         console.log( `The song is:`, song);
//                         console.log( `The song filter is:`, collection.filter( j => j.tracks === song));
//                         console.log( `The song is:`, j => j.tracks );
//                         console.log( `What is i:`, j);
//                         console.log( `Length of song`, ( j => j.tracks === song).length );
//                         console.log( `Song does exist, adding new song to colleciton` );
//                         // let tracks = {
//                         // tracks: song,
//                         // duration: duration
//                         // }
//                     //collection[i].tracks.push( tracks );
//                     } // End if
//                 } // End for loop on tracks
//             return true;
//         }
//         else {
//             console.log( `inside filter else statment`);
//             return false;
//         }


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
