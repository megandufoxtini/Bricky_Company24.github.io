alert ("I am linked"); //Show that the html and javascript is properly linked together and will work 

//fuction to calculae bricks
function calculateBricks() {
  const brickWidth = (document.getElementById('brickWidth').value);//user input on brick width
  const brickHeight = (document.getElementById('brickHeight').value);//user input on brick height
  const wallWidth = (document.getElementById('wallWidth').value);//users input on wall width
  const wallHeight = (document.getElementById('wallHeight').value);//users input on wall height

  if (brickWidth > 0 && brickHeight > 0 && wallWidth > 0 && wallHeight > 0) {
      const bricksPerRow = wallWidth / brickWidth;
      const rows = wallHeight / brickHeight;
      const totalBricks = Math.ceil(bricksPerRow * rows);

      document.getElementById("result").innerText = "You need approximately" + (totalBricks) + "bricks to build the wall.";
  } else {
      document.getElementById("result").innerText = "Please enter valid positive numbers for all dimensions.";
  }

  }


