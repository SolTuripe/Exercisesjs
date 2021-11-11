//Develop a function that draws a 'Card' from a movie in the document using a javascript object as data.

let cardMovie = {
    titulo: "BLADE RUNNER",
    año: "(1982), SCI-FI, THRILLER",
    descripcion:
      "A blade runner must pursue and try to terminate four replicants who stole a ship in space and have returned to Earth to find their creator.",
    img: "http://digitalspyuk.cdnds.net/15/47/1600x800/landscape-1447754794-harrison-ford-blade-runner.jpg",
    trailer: "https://www.youtube.com/watch?v=eogpIG53Cis",
  };
  
  let DOMcardMovie = document.querySelector(".card");
  
  function printCard(object) {
    DOMcardMovie.innerHTML += `<div class="overlay">
      <div class="left"></div>
      <div class="right">
        <h1 class="card-title">${object.titulo}</h1>
        <p class="info">${object.año}</p>
        <p class="description">${object.descripcion}</p>
  
        <a href="${object.trailer}" target="_blank" class="button">WATCH TRAILER</a>
      </div>
    </div>`;
  
    DOMcardMovie.style.backgroundImage = `url(${object.img})`;
  }
  
  printCard(cardMovie);
  

  /* <div class="overlay">
        <div class="left"></div>
        <div class="right">
          <h1 class="card-title">BLADE RUNNER</h1>
          <p class="info">(1982), SCI-FI, THRILLER</p>
          <p class="description">
            A blade runner must pursue and try to terminate four replicants who
            stole a ship in space and have returned to Earth to find their
            creator.
          </p>

          <a href="#" class="button">WATCH TRAILER</a>
        </div>
      </div>
      */