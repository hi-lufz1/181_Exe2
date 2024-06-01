function kirimData() {
    // Get form elements
    const name = document.getElementById('name').value;
    const surveyDate = document.getElementById('survey_date').value;
    const albumRating = document.getElementById('album_rating').value;
    const titleTrackRating = document.querySelector('input[name="title_track_rating"]:checked').value;
    const comments = document.getElementById('comments').value;

    // Get favorite tracks
    const favoriteTracks = [];
    document.querySelectorAll('input[name="bonus_tracks[]"]:checked').forEach((checkbox) => {
        favoriteTracks.push(checkbox.value);
    });

    // Get favorite member
    const favoriteMember = document.getElementById('favorite_member').value;

    // Create the alert message
    const alertMessage = `Your Name: ${name}\n` +
                         `Survey Date: ${surveyDate}\n` +
                         `Album Rating: ${albumRating}\n` +
                         `Title Track Rating: ${titleTrackRating}\n` +
                         `Comments/Suggestions: ${comments}\n` +
                         `Favorite Tracks: ${favoriteTracks.join(', ')}\n` +
                         `Favorite Member: ${favoriteMember}`;

    // Display the alert
    alert(alertMessage);
}
