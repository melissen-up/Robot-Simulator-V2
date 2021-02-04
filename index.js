document.addEventListener("DOMContentLoaded", function() {
  // initializes the board
  init();

  let movesContainer = document.querySelector('#moves-container')

  function print(direction){
    let print = document.createElement('li')
    print.textContent = direction
    movesContainer.append(print)
  }

  document.addEventListener('keyup', function(e){
    console.log(e.key)
    if (e.key === "ArrowLeft") {
      print("left")
      console.log(movesContainer)
    }

    if (e.key === "ArrowRight") {
      print('right')
    }

    if (e.key === "ArrowUp") {
      print("up")
    }

    if (e.key === "ArrowDown") {
      print("down")
    }
  })

  let moveBtn = document.querySelector('#move-button')

  moveBtn.addEventListener('click', function(e){
    let moves = movesContainer.getElementsByTagName("li")
    

    
      // setTimeout(function(){ 
      //   for(const element of moves){
      //     move(element.textContent)}}, 2000)
     
        // for(const element of moves){
        //   delay(element.textContent)
        //   // let word = element.textContent
        //   // setTimeout(function(){move(word)}, 2000)
        // }


        // var array = [1, 2, 3, 4, 5]
        for(var i = 0; i < moves.length; i++) {
           delay(i.textContent)
         }
        function delay(i) {
          setTimeout(() => {
            move(i)
          }, 1000);
        }
    ;

  })
});
