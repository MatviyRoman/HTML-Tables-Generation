/*Get information all cells*/

$(document).keyup(function() {
    var tdRows = $('#inputTd').val();
    var trColl = $('#inputTr').val();
    var tdRows = $('#inputTd').val();
    var allCells = trColl * tdRows;
    $('.allCells').text(allCells);
});

/*Get information user input*/

$(document).ready(function() {

    $("#inputTr").keyup(function() {
        $(".resultTr").text($("#inputTr").val());
    });
    $('#inputTd').keyup(function() {
        $('.resultTd').text($('#inputTd').val());
        $('#result').show();
    });
});

/*Tables generation last version*/

$(window).on('load', function() {

    $('#btn').click(function() {

        $('#tablesSource').empty();
        $('#tablesCode').empty();

        $('#tablesResult').show();

        var trColl = $('#inputTr').val();
        var tdRows = $('#inputTd').val();

        $('#tablesSource').append('&lt;table&gt;');
        $('#tablesCode').append('<table>');

        for (a = 1; a <= tdRows; a++) {

            $('#tablesSource').append('&lt;tr&gt;');
            $('#tablesCode').append('<tr>');

            for (b = 1; b <= trColl; b++) {

                $('#tablesSource').append('&lt;td&gt;' + b + '\) result' + '&lt;/td&gt;');
                $('#tablesCode').append('<td>' + b + '\) result ' + '</td>');
            }

            $('#tablesSource').append('&lt;/tr&gt;');
            $('#tablesCode').append('</tr>');
        }

        $('#tablesSource').append('&lt;/table&gt;');
        $('#tablesCode').append('</table>');

    });
});
