// Replace svg with png as fallback if browser can't support svg

if (typeof SVGRect == "undefined") {
    $("img[src$='.svg']").each(function() {
        $(this).attr('src', $(this).attr('src').replace(/\.svg/, '.png'));
    });
}

$(".results").hide();


// Lightbox settings

$(".show_lightbox").fancybox({
        maxWidth    : 600,
        maxHeight   : 400,
        fitToView   : false,
        width       : '70%',
        height      : '70%',
        autoSize    : false,
        closeClick  : false,
        openEffect  : 'fade',
        closeEffect : 'fade'
});



var MovieSearchApp = {
    sortType : 'TITLE',
    datas : [],

    searchMovie : function(){

        // Asynchronously searches for the film with the value of the input everytime the input value is changed.
        $('#search-input').on('input', function(e) {

            $.ajax('http://www.omdbapi.com/?s='+ e.currentTarget.value).done(function(response) {
                MovieSearchApp.datas = response.Search;
                MovieSearchApp.render();
            });

        });


    },


    
    render : function(){

        $('.movie-list').empty();

        var movie_item = '';
            
        // Check if datas object has valuesbefore rendering
        if(MovieSearchApp.datas){  
            $(".results").slideDown();
            for (i = 0; i < 9; i++){

                var data = MovieSearchApp.datas[i];

                // Start of table item
                movie_item += '<a href="#movie_info" class="movie-link show_lightbox" onclick="MovieSearchApp.getMovieDetails(\''+ data.imdbID +'\'); return false;">';
                movie_item += '<div class="movie-item">';
                

                // Fallback if movie has no poster
                if (data.Poster == "N/A"){
                    movie_item += '<div class="poster"><div class="no_poster"><p style="margin: 0 0 0 4px; color: white">Poster N/A</p></div></div>';
                    
                }else {
                    movie_item += '<div class="poster"><img src="' + data.Poster + '"></div>';
                }
                
                // movie_item += '<div class="poster"><img src="http://posterposse.com/wp-content/uploads/2015/06/Walker_ant_man_poster_posse-197x300.jpg"></div>';

                movie_item += '<div class="movie-details">';

                if (data.Type == 'series'){
                    movie_item += '<p class="category" style="color: #C5266E">&bullet; ' + data.Type + '</p>';

                } else if(data.Type == 'movie'){
                    movie_item += '<p class="category" style="color: #199ED9">&bullet; ' + data.Type + '</p>';
                } else if(data.Type == 'game'){
                    movie_item += '<p class="category" style="color: #ADADAD">&bullet; ' + data.Type + '</p>';
                }

                movie_item += '<p class="movie-title">' + data.Title + '</p>';
                movie_item += '<p class="movie-date" style="color: #3D3D3A">' + data.Year + '</p>';
                movie_item += '</div></div></a>';
            }   
        } else(
            $(".results").slideUp()
        )
        

        $(".movie-list").html(movie_item);


    },

    getMovieDetails: function(imdb_id){
        $('.movie_info').empty();
        var movie_id = imdb_id;
        var movie_info = '';


        $.ajax('http://www.omdbapi.com/?i='+movie_id+'&plot=short').done(function(response) {
            // MovieSearchApp.datas = _datas.Search;

            movie_info += '<div class="details_poster">';

            if(response.Poster != "N/A"){
                movie_info += '<img src="'+ response.Poster +'">';
            }
            


            movie_info += '</div>';

            movie_info += '<div class="details_info">';
            movie_info += '<h3>' + response.Title + '</h3>';

            movie_info += '<p>Country: ' + response.Country + '</p>';
            movie_info += '<p>Genre: ' + response.Genre + '</p>';
            movie_info += '<p>Release date: ' + response.Released + '</p>';
            movie_info += '<p>Plot: ' + response.Plot + '</p>';
            movie_info += '<p>IMDB Rating: ' + response.imdbRating + '</p>';


            movie_info += '</div>';
            $("#movie_info").html(movie_info).show();
        });

    }
}


MovieSearchApp.searchMovie();



