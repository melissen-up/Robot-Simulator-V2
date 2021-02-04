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
   
     
        let timer = setInterval(movement, 500)

        function movement(){
          
          if (movesContainer.querySelectorAll('li').length=== 0){
            clearInterval(timer)
           } else{
            let li = movesContainer.querySelector("li")
            move(li.textContent)
            li.remove()
           }


        }
        

        
      
  })
});
