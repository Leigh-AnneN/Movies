
// When the form is submitted, capture the values for each of the inputs and append them 
// to the DOM along with a button to remove each title and rating from the DOM.

let currentId = 0;
let movieList = [];

$(function() {
// on the submit event save the value of the input into variables movie and rating.
    $('movieForm')
    .on('submit',function(evt){
        evt.preventDefault();
        let movie = $('#movie').val();
        let rating = $('#rating').val();

        let movieData = {movie, rating, currentId};
        const HTMLtoAppend = createMovieDataHTML(movieData);
        currentId++;
        movieList.push(movieData);
       
        $("#movie-table-body").append(HTMLtoAppend);
        $("#movieForm").trigger("reset");
  });
    }); 


    $("tbody").on("click", ".btn.btn-danger", function(evt) {
        // find the index where this movie is
        let indexToRemoveAt = moviesList.findIndex(movie => movie.currentId === +$(evt.target).data("deleteId"))
        
        // remove it from the array of movies
        movieList.splice(indexToRemoveAt, 1)
    
        // remove it from the DOM
        $(evt.target)
          .closest("tr")
          .remove();
        
      });
    function createMovieDataHTML(data) {
        return `
          <tr>
            <td>${data.title}</td>
            <td>${data.rating}</td>
            <td>
              <button class="btn btn-danger" data-delete-id=${data.currentId}>
                Delete
              </button>
            </td>
          <tr>
        `;
      }





