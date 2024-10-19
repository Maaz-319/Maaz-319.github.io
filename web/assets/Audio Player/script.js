function playAudio() {
    var audioFile = $('#dropzone-file').val();
    $('.audio__player').attr('src', audioFile);
    $('.audio__player').trigger('play');
}