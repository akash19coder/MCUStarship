const movies = [];
const promise = window.fetch(' https://mcuapi.herokuapp.com/api/v1/movies')
  .then((response) => response.json())
  .then((data) => {
    for(let i=0;i<data.data.length-1;i++){
          movies.push(data.data[i]);
    }
  }).then(()=>{
    for(let i=0;i<movies.length;i++){
      let div = document.createElement('div');
      document.getElementsByClassName('events').item(0).append(div);
      document.getElementsByClassName('events').item(0).lastChild.innerHTML = `<div onclick="displayMovieTrailer()" class="card">
      <div class="img">
           <img src="${movies[i].cover_url}" alt=""  >
      </div> 
      <div class="content">
          <h2 id="title">${movies[i].title}</h2>
          <ul>
            
            <li>${movies[i].release_date}</li>
            <li>${movies[i].duration} minutes</li>
          </ul>
      </div>
    </div>`
    }
  })
 function displayMovieTrailer(){
      console.log(document.getElementById('title'));

 }
  
