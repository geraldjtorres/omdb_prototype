// Replace svg with png as fallback if browser can't support svg

if (typeof SVGRect == "undefined") {
    $("img[src$='.svg']").each(function() {
        $(this).attr('src', $(this).attr('src').replace(/\.svg/, '.png'));
    });
}


var MovieSearchApp = {
    sortType : 'TITLE',
    datas : [],

    searchMovie : function(){
        $('#search-input').on('input', function(e) {
            $.ajax('http://www.omdbapi.com/?s='+ e.currentTarget.value).done(function(_datas) {
                MovieSearchApp.datas = _datas.Search;

                MovieSearchApp.render();
            });

        });

        $('#title-input, #date-input').on('change', function(e) {
            switch (e.currentTarget.value) {
                case 'TITLE':
                    sortType = 'TITLE';
                    break;
                case 'DATE':
                    sortType = 'DATE';
                    break;
                default:
                    sortType = 'TITLE';
                    break;
            }

            MovieSearchApp.render();
        });

    },

    sortDatas : function(){
        var sortProp = '';

        switch (MovieSearchApp.sortType) {
            case 'TITLE':
                sortProp = 'Title';
                break;
            case 'DATE':
                sortProp = 'Year';
                break;
            default:
                sortType = 'Title';
                break;
        }

        MovieSearchApp.datas.sort(function(a, b) {
            if(a[sortProp] > b[sortProp])
                return 1;
            if(a[sortProp] < b[sortProp])
                return -1;
            return 0;
        });
    },

    render : function(){

        this.datas && this.datas.length && this.sortDatas();

        $('.movie-list').empty();

        $.each(this.datas, function(index, data) {
            $('.movie-list').append('<div class="movie-item"></div>');
            $('.movie-item').append('<img src="' + data.Poster + '">');
            $('.movie-item').append('<div class="movie-details"></div>');
            $('.movie-details').append('<p class="category">' + data.Type + '</p>');
            $('.movie-details').append('<p class="movie-title">' + data.Title + '</p>');
            $('.movie-details').append('<p class="movie-date">' + data.Year + '</p>');


           
        });


    }

}


MovieSearchApp.searchMovie();




// var sortType = 'TITLE';
// var datas = [];

// $('#search-input').on('input', function(e) {
//     $.ajax('http://www.omdbapi.com/?s='+ e.currentTarget.value).done(function(_datas) {
//         datas = _datas.Search;
//         console.debug(datas);
//         render();
//     });
// });

// $('#title-input, #date-input').on('change', function(e) {
//     switch (e.currentTarget.value) {
//         case 'TITLE':
//             sortType = 'TITLE';
//             break;
//         case 'DATE':
//             sortType = 'DATE';
//             break;
//         default:
//             sortType = 'TITLE';
//             break;
//     }

//     render();
// });

// function sortDatas() {
//     var sortProp = '';

//     switch (sortType) {
//         case 'TITLE':
//             sortProp = 'Title';
//             break;
//         case 'DATE':
//             sortProp = 'Year';
//             break;
//         default:
//             sortType = 'Title';
//             break;
//     }

//     datas.sort(function(a, b) {
//         if(a[sortProp] > b[sortProp])
//             return 1;
//         if(a[sortProp] < b[sortProp])
//             return -1;
//         return 0;
//     });
// }

// function render() {
//     datas && datas.length && sortDatas();

//     $('.film-list').empty();

//     $.each(datas, function(index, data) {

//         $('.film-list').append('<li>'+ data.Title +'</li>')
//         $('.film-list').find('li').eq(index).append('<div style="display: none;">Year: ' + data.Year + ', imdbID: '+ data.imdbID +'<img src="' + data.Poster + '"/> ' + '</div>');
//     });

//     $('.film-list li').on('click', function() {
//         $(this).find('div').slideToggle();
//     });
// }

