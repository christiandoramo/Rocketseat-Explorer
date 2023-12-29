
async function getLoremIpsum(){
    const paragraphs = '1'
    const max_length = '100'
    $.ajax({
        method: 'GET',
        url: `https://api.api-ninjas.com/v1/loremipsum?paragraphs=${paragraphs}&max_length=${max_length}`,
        headers: { 'X-Api-Key': 'UQOMcJLHruiJJ2CbNOmq2Q==rfKce1KzdYb3dyXV'},
        contentType: 'application/json',
        success: function(result) {
            console.log(result.text);
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    });
}