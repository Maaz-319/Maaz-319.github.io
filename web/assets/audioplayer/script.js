$(function () {
    let songName, songGenre, songArtist;

    $(".dropping__zone label").on("dragover", function (e) {
        e.preventDefault();
        $(this).addClass("bg-gray-200");
    }).on("dragleave", function () {
        $(this).removeClass("bg-gray-200");
    }).on("drop", function (e) {
        e.preventDefault();
        $(this).removeClass("bg-gray-200");
        let file = e.originalEvent.dataTransfer.files[0];
        if (file) {
            playAudio(file);
            getMetadata(file);
        }
    });

    $("#dropzone-file").on("change", function () {
        let file = this.files[0];
        if (file) {
            playAudio(file);
            getMetadata(file);
        }
    });

    function playAudio(file) {
        let fileURL = URL.createObjectURL(file);
        $("#audio-player").attr("src", fileURL).show()[0].play();
    }

    function getMetadata(file) {
        jsmediatags.read(file, {
            onSuccess: function (tag) {
                $(".musicInfo__div").slideDown(500);
                songName = tag.tags.title || "-";
                songGenre = tag.tags.genre || "-";
                songArtist = tag.tags.artist || "-";

                $('.song__name').text(songName);
                $('.song__genre').text(songGenre);
                $('.song__artist').text(songArtist);

                getAlbumArt();
            },
            onError: function (error) {
                console.log("Error reading tags:", error);
            }
        });
    }
});

function navToggle() {
    $('.inPage__links').slideToggle();
}