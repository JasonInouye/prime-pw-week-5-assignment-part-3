console.log('***** Music Collection *****')

// create an array collection
let collection = [];

// Test album object

// Initial testing of Object formats
let album ={
    title: 'Purple Rain',
    artist:'Prince',
    yearPublished:'1984',
    tracks:[
        {tracks: 'Computer Blue', duration: `4:00` }
    ]
}   // end album
collection.push( album );
console.log( collection );


function addToCollection(title, artist, yearPublished, [song, duration]){
    //let albumName = (`album`+collection.length);
    //console.log( `The album name is `, album );
    // Check to see if album is in collection already
    for (var i = 0; i < collection.length; i++) {
        console.log( collection[i].title, collection[i].artist, collection[i].yearPublished);
        //if ( title !== collection[i].title && artist !== collection[i].artist && yearPublished !== collection[i].yearPublished ) {
        if (title === collection[i].title ){
        let album ={
            title: title,
            artist: artist,
            yearPublished: yearPublished,
            tracks:[
                {tracks: song, duration: duration}
            ]
        };   // end album
        //console.log( `The album name to be pushed is`, album );
        console.log( `I'm adding this record now`, collection[i].title);
        console.log( `Details of album`, album );
        collection.push( album );
        // console.log( collection );
        // return album;
        } // End if
        // If album details are the same check to see if track exists
        else if ( title === collection[i].title && artist === collection[i].artist && yearPublished === collection[i].yearPublished ) {
            console.log( `album details are the same` );
            // for (var j = 0; j < collection[i].tracks.length; j++) {
            //     if ( song !== collection[i].tracks[j].song ) {
            //         console.log( `Song does not exist, adding new song to colleciton` );
            //         let tracks = {
            //         tracks: song,
            //         duration: duration
            //         }
            //     collection[i].tracks.push( tracks );
            //     } // End if
            // } // End for loop on tracks
        } // End else if
    } // End for loop
} // End addToCollection

// console.log( addToCollection(`The Essential Bob Dylan`, `Bob Dylan`, `2016`, [`Forever Young`, `4:57`]) );
// console.log( addToCollection(`The Essential Bob Dylan`, `Bob Dylan`, `2016`, [`Lay Lady Lay`, `3:21`]) );
// console.log( addToCollection(`Legend the best of Bob Marley`, `Bob Marley`, `1984`, [`Is This Love`, `3:52`]) );
// console.log( addToCollection(`Legend the best of Bob Marley`, `Bob Marley`, `1984`, [`Three Little Birds`, `3:57`]) );
// console.log( addToCollection(`Purple Rain`, `Prince`, `1984`, [`Let's Go Crazy` , `4:40`]) );
// console.log( addToCollection(`Purple Rain`, `Prince`, `1984`, [`When Doves Cry` , `5:53`]) );
// console.log( addToCollection(`Purple Rain`, `Prince`, `1984`, [`Purple Rain` , `8:41`]) );
// console.log( addToCollection(`21`, `Adele`, `2011`) );
// console.log( addToCollection(`25`, `Adele`, `2015`) );
// console.log( addToCollection(`Traveller`, `Chris Stapleton`, `2015`) );

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
        return searchResults;
    } // end else
} // End Search

// test search function
console.log( search( `Prince`, `1984` ) );

// test no results search function
console.log( search( `Prince`, `2006` ) );

// test no parameters
console.log( search() );
