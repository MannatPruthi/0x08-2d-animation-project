
    const canvas1 = document.getElementById('myCanvas');
    const ctx1 = canvas1.getContext('2d');

    canvas1.width = window.innerWidth;
    canvas1.height = window.innerHeight;

    // Background
    // Call the function with the path to your audio file
    
    
    // Adding a control button
    const controlBtn = document.createElement('button');
    controlBtn.textContent = 'Pause';
    controlBtn.onclick = function() {
        togglePlayPause();
        controlBtn.textContent = bgAudio.paused ? 'Play' : 'Pause';
    };
    document.body.appendChild(controlBtn);
    function drawBackground() {
        // Day sky
        ctx1.fillStyle = '#87CEEB';
        ctx1.fillRect(0, 0, canvas1.width, canvas1.height);
        
        
        
        
        
        
        // Sun
        ctx1.beginPath();
        ctx1.arc(canvas1.width - 200, 150, 50, 0, Math.PI * 2);
        ctx1.fillStyle = 'yellow';
        ctx1.fill();
        //drawCloud();
        // Clouds
        
        // moveClouds();
    }

    // Clouds
    let cloudX = 0;
    function drawRoad() {
        const roadColor = '#666'; // Road color
        const roadHeight = 200;
        const roadY = canvas1.height - roadHeight;
    
        // Fill the road with the main color
        ctx1.fillStyle = roadColor;
        ctx1.fillRect(0, roadY, canvas1.width, roadHeight);
    
        // Draw white rectangle stripes for road divider
        const stripeWidth = 50; // Width of each stripe
        const gap = 60; // Gap between stripes
        const numStripes = Math.floor(canvas1.width / (stripeWidth + gap)); // Calculate the number of stripes that fit in the canvas width
    
        // Calculate the starting X position for the first stripe
        let startX = (canvas1.width - (numStripes * (stripeWidth + gap) - gap)) / 2;
    
        // Loop to draw each stripe
        for (let i = 0; i < numStripes; i++) {
            ctx1.fillStyle = '#FFF'; // White color for the stripes
            ctx1.fillRect(startX + i * (stripeWidth + gap), roadY + roadHeight / 2 - 5, stripeWidth, 10); // Draw each stripe
        }
    }
    
    function drawCloud(x, y) {
        ctx1.beginPath();
        ctx1.arc(x, y, 30, 0, Math.PI * 2);
        ctx1.arc(x + 40, y, 30, 0, Math.PI * 2);
        ctx1.arc(x + 80, y, 30, 0, Math.PI * 2);
        
        ctx1.arc(x + 50, y, 57, 0, Math.PI * 2);
        ctx1.arc(x + 120, y, 30, 0, Math.PI * 2);
        
        ctx1.arc(x + 120, y, 50, 0, Math.PI * 2);
        ctx1.arc(x + 160, y, 30, 0, Math.PI * 2);
        ctx1.fillStyle = '#FFFFFF';
        ctx1.fill();
    }
    function drawHouse() {
        // House base
        ctx1.fillStyle = '#ff6700';
        ctx1.fillRect(850, 350, 200, 150);

        // Roof
        ctx1.beginPath();
        ctx1.moveTo(850, 355);
        ctx1.lineTo(950, 250);
        ctx1.lineTo(1050, 355);
        ctx1.closePath();
        ctx1.fillStyle = '#7e3517';
        ctx1.fill();

        // Door
        ctx1.fillStyle = '#7e3517';
        ctx1.fillRect(920, 400, 60, 100);

        // Windows
        ctx1.fillStyle = '#faf884';
        ctx1.fillRect(990,370, 50, 50);
        ctx1.fillRect(860, 370, 50, 50);
    }
    let i=0;
    function moveClouds() {
        cloudX -= 0.5; // Subtracting the increment value to move clouds in the opposite direction
        if (cloudX < -900) { // Check if the clouds have moved off the canvas1 to the left
            cloudX = canvas1.width + 200; // Reset cloudX to appear on the right side of the canvas1
        }
        
        drawCloud(cloudX, 100);
        drawCloud(cloudX + 350 + i, 70);
        drawCloud(cloudX + 800 + i, 100);
        drawCloud(cloudX + 1500 + i, 80);
        drawCloud(cloudX + 1600 + i, 100);

    
        
    }
    let global_x=0;

    let isGirlVisible = true;  // Initially, the girl is visible
  
    function drawMan() {
        if (!isGirlVisible) return;  // Don't draw if visibility is false
        
        // Head
        ctx1.fillStyle = '#dbbba4';
        ctx1.beginPath();
        ctx1.arc(225 + global_x, 390, 20, 0, Math.PI * 2);
        ctx1.fill();
        
        // Body
        ctx1.fillStyle = '#292424';
        ctx1.fillRect(200 + global_x, 409, 47, 55);
        
        // Legs
        ctx1.fillStyle = '#2F4F4F';
        ctx1.fillRect(210 + global_x, 463, 8, 40); // Left leg
        ctx1.fillRect(230 + global_x, 463, 8, 40); // Right leg
        
        // Arms
        ctx1.fillRect(195 + global_x, 420, 8, 30); // Left arm
        ctx1.fillRect(245 + global_x, 420, 8, 30); // Right arm
        
        // Facial features and hair
        ctx1.fillStyle = '#000'; // Black color for facial features and hair
        
        // Eyes
        ctx1.beginPath();
        ctx1.arc(220 + global_x, 385, 3, 0, Math.PI * 2); // Left eye
        ctx1.arc(230 + global_x, 385, 3, 0, Math.PI * 2); // Right eye
        ctx1.fill();
        
        // Nose
        ctx1.beginPath();
        ctx1.moveTo(225 + global_x, 390);
        ctx1.lineTo(225 + global_x, 395);
        ctx1.lineTo(227 + global_x, 392);
        ctx1.fill();
        
        // Mouth
        ctx1.beginPath();
        ctx1.arc(225 + global_x, 400, 5, 0, Math.PI); // Mouth
        ctx1.stroke();
        
        //hair
        ctx1.fillStyle = '#964B00'; // Brown color for hair
    ctx1.beginPath();
    ctx1.moveTo(215 + global_x, 370); // Starting point for hair
    ctx1.lineTo(235 + global_x, 370); // Ending point for hair
    ctx1.lineTo(225 + global_x, 385); // Top point for hair
    ctx1.closePath();
    ctx1.fill();
        
        // Pants
        ctx1.fillStyle = '#2F4F4F'; // Dark slate gray color for pants
        ctx1.fillRect(205 + global_x, 409, 37, 60); // Pants
    }
    
    




    

    // Buildings
    function drawBuilding(x, y, width, height) {
        // Building body
        ctx1.fillStyle = '#810541';
        ctx1.fillRect(x, y - height-200, width+20, height);

        // Windows
        const numWindows = Math.floor(height / 40); // Number of windows based on building height
        const windowWidth = width / 5;
        const windowHeight = height / numWindows;
        let k=10;
        for (let i = 0; i < numWindows; i++) {
            ctx1.fillStyle = '#F3E5AB ';
            for (let j = 0; j < 4; j++) {
                ctx1.fillRect(x + j * (windowWidth + 10)+5 , y+k - height-210 + i * windowHeight + 10, windowWidth, windowHeight-k);
            }
        //     ctx1.fillStyle = 'grey';
        // for (let j = 0; j < 4; j++) {
        //     ctx1.fillRect(x + j * (windowWidth + 10) + windowWidth + 5, y - height + i * windowHeight + 10, 2, 10);
        // }  
        //    k+=10;  
     }
    }
    function drawPerson2() {
        // Clear canvas
       // ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw person
        ctx.fillStyle = 'black';

        // Body
        ctx.beginPath();
        ctx.arc(x, y - 20, 10, 0, Math.PI * 2); // Head
        ctx.fill();

        ctx.fillRect(x - 5, y - 10, 10, 20); // Body

        // Legs
        ctx.save();
        ctx.translate(x - 3, y + 10);
        ctx.rotate(legAngle);
        ctx.fillRect(0, 0, 4, 15); // Left leg
        ctx.restore();
        
        ctx.save();
        ctx.translate(x + 3, y + 10);
        ctx.rotate(-legAngle);
        ctx.fillRect(0, 0, 4, 15); // Right leg
        ctx.restore();

        // Arms
        ctx.fillRect(x - 8, y - 5, 6, 15); // Left arm
        ctx.fillRect(x + 2, y - 5, 6, 15); // Right arm

        // Move person
        x += walkingSpeed;
        legAngle = Math.sin(x / 10) * 0.3;

        // Loop animation
        if (x > canvas.width) {
            x = -30;
        }

        requestAnimationFrame(drawPerson);
    }
    
    // Draw the bus
    let busX = -300;

// Function to draw the bus at the current position
function drawBus() {
    const busWidth = 300;   // Width of the bus
    const busHeight = 140;  // Height of the bus
    const busY = canvas1.height - busHeight - 100;  // Position the bus towards the bottom of the canvas1

    // Body of the bus with a gradient color
    const grad = ctx1.createLinearGradient(busX, busY, busX, busY + busHeight);
    grad.addColorStop(0, '#ff002b');  // Top color
    grad.addColorStop(1, '#DAA520');  // Bottom color
    ctx1.fillStyle = grad;
    ctx1.fillRect(busX, busY, busWidth, busHeight);

    // Outline for the bus
    ctx1.strokeStyle = '#333';  // Dark grey outline
    ctx1.strokeRect(busX, busY, busWidth, busHeight);

    // Windows
    const windowHeight = 20;
    const windowSpacing = 15;
    const windowWidth = (busWidth - 5 * windowSpacing) / 4;
    const windowY = busY + 10;
    ctx1.fillStyle = '#E0FFFF';  // Light cyan for the windows
    for (let i = 0; i < 4; i++) {
        ctx1.fillRect(busX + windowSpacing + i * (windowWidth + windowSpacing), windowY, windowWidth, windowHeight+23);
    }
    

    

    // Wheels
    ctx1.fillStyle = '#303030';  // Dark grey for tires
    ctx1.beginPath();
    ctx1.arc(busX + 50, busY + busHeight, 25, 0, 2 * Math.PI);
    ctx1.arc(busX + 250, busY + busHeight, 25, 0, 2 * Math.PI);
    ctx1.fill();

    // Headlights
    ctx1.fillStyle = '#FFFF00';  // Yellow for the headlights
    ctx1.beginPath();
    ctx1.arc(busX + 20, busY + 30, 5, 0, 2 * Math.PI);
    ctx1.arc(busX + busWidth - 20, busY + 30, 5, 0, 2 * Math.PI);
    ctx1.fill();

    // Front grille
    ctx1.fillStyle = '#333';  // Dark grille
    ctx1.fillRect(busX +15, busY + 70, 270, 15);

    // Rear mirror
    ctx1.fillStyle = '#888';  // Grey for the mirror
    ctx1.fillRect(busX + busWidth, busY + 20, 5, 20);
    ctx1.fillRect(busX - 5, busY + 20, 5, 20);
}
const stopSound = new Audio('assets/horn.mp3');
function playStopSound() {
    stopSound.play();
}

let stopPosition=-10000;
// Function to update the bus position and redraw
let busStopped = false;  // Variable to track if the bus is stopped
canvas1.addEventListener('click', function(event) {
    // Update the stopPosition to where the click occurred
    stopPosition = event.clientX;
   global_x=stopPosition-250;
});
function moveBus() {
    if (!busStopped) {
        busX += 3;
        if (busX >= 110 && busX <= 111) { // Check if bus is at the stopping point
            busStopped = true;  // Stop the bus
            playStopSound();
            
            isGirlVisible = false;
            // check=0
            // Make the girl disappear
            setTimeout(() => {  // After 2 seconds, resume movement
                busStopped = false;
            }, 2000);
        }
        if (stopPosition !== null && busX >= stopPosition - 200 && busX <= stopPosition ) {
            busStopped = true;  // Stop the bus
            //isGirlVisible = false;  // Make the girl disappear
            setTimeout(() => {  // After 2 seconds, resume movement
                busStopped = false;
                isGirlVisible = true;
                // drawMan2(20,20);
                  // Make the girl reappear
                stopPosition = null;  // Reset stopPosition
            }, 2000);
        }

        if (busX > canvas1.width) {
            busX = -300;  // Reset bus position
        }
    }

    drawBus();  // Redraw the bus at the new position
    canvas1.addEventListener('click', function(event) {
        if (busStopped) {
            // Update bus position to where the click occurred
            busX = event.clientX - canvas1.getBoundingClientRect().left - 150; // Adjusting for bus width
            // Stop the bus
            playStopSound();
            busStopped = true;
            // Resume movement after 2 seconds (2000 milliseconds)
            setTimeout(() => {
                busStopped = false;
            }, 2000);
        }
    });
}


// Set this to call the moveBus function every 16 milliseconds (approximately 60 FPS)
setInterval(moveBus, 16);

    
     // Draw the clock tower
     function drawClockTower() {
        // Tower base
        ctx1.fillStyle = '#8B4513';
        ctx1.fillRect(100, 305, 100, 200);

        // Clock top (conical)
        ctx1.fillStyle = '#8B4513';
        ctx1.beginPath();
        ctx1.moveTo(100, 205);
        ctx1.lineTo(200, 205);
        ctx1.lineTo(150, 155);
        ctx1.closePath();
        ctx1.fill();

        // Tower body
        ctx1.fillStyle = '#B8860B';
        ctx1.fillRect(110, 205, 80, 100);

        // Clock
        ctx1.fillStyle = '#fff';
        ctx1.beginPath();
        ctx1.arc(150, 255, 40, 0, Math.PI * 2);
        ctx1.fill();
        
        // Clock markings
        ctx1.strokeStyle = '#000';
        ctx1.lineWidth = 3;
        for (let i = 0; i < 12; i++) {
            const angle = (i / 12) * Math.PI * 2;
            const x1 = 150 + Math.cos(angle) * 35;
            const y1 = 255 + Math.sin(angle) * 35;
            const x2 = 150 + Math.cos(angle) * 30;
            const y2 = 255 + Math.sin(angle) * 30;
            ctx1.beginPath();
            ctx1.moveTo(x1, y1);
            ctx1.lineTo(x2, y2);
            ctx1.stroke();
        }
    }

    function drawClockHands() {
        const date = new Date();
        const hours = date.getHours() % 12;
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        
        const hourAngle = ((hours + minutes / 60) / 12) * Math.PI * 2 - Math.PI / 2;
        const minuteAngle = (minutes / 60) * Math.PI * 2 - Math.PI / 2;
        const secondAngle = (seconds / 60) * Math.PI * 2 - Math.PI / 2;

        // Draw hour hand
        ctx1.strokeStyle = '#000';
        ctx1.lineWidth = 4;
        ctx1.beginPath();
        ctx1.moveTo(150, 255);
        ctx1.lineTo(150 + Math.cos(hourAngle) * 20, 255 + Math.sin(hourAngle) * 20);
        ctx1.stroke();

        // Draw minute hand
        ctx1.lineWidth = 2;
        ctx1.beginPath();
        ctx1.moveTo(150, 255);
        ctx1.lineTo(150 + Math.cos(minuteAngle) * 30, 255 + Math.sin(minuteAngle) * 30);
        ctx1.stroke();

        // Draw second hand
        ctx1.strokeStyle = 'red';
        ctx1.lineWidth = 1;
        ctx1.beginPath();
        ctx1.moveTo(150, 255);
        ctx1.lineTo(150 + Math.cos(secondAngle) * 35, 255 + Math.sin(secondAngle) * 35);
        ctx1.stroke();
    }

    function drawClock() {
        //ctx1.clearRect(0, 0, canvas1.width, canvas1.height);
        drawClockTower();
        drawClockHands();
    }

    setInterval(drawClock, 1000);
    

    // Draw scene
    
    function drawTree() {
        // Trunk
        ctx.fillStyle = '#8B4513';
        ctx.fillRect(710, 400, 40, 100);

        // Leaves
        ctx.beginPath();
        ctx.arc(705, 360, 80, 0, Math.PI * 2);
        ctx.fillStyle = '#3A5F0B';
        ctx.fill();
        ctx.beginPath();
        ctx.arc(738, 280, 80, 0, Math.PI * 2);
        ctx.fillStyle = '#3A5F0B';
        ctx.fill();
        ctx.beginPath();
        ctx.arc(770, 360, 80, 0, Math.PI * 2);
        ctx.fillStyle = '#3A5F0B';
        ctx.fill();
    }
    function drawTree2() {
        // Trunk
        ctx.fillStyle = '#8B4513';
        ctx.fillRect(1370, 400, 20, 100);

        // Leaves
        ctx.beginPath();
        ctx.arc(1350, 400, 50, 0, Math.PI * 2);
        ctx.fillStyle = '#3A5F0B';
        ctx.fill();
        ctx.beginPath();
        ctx.arc(1383, 340, 60, 0, Math.PI * 2);
        ctx.fillStyle = '#3A5F0B';
        ctx.fill();
        ctx.beginPath();
        ctx.arc(1415, 400, 50, 0, Math.PI * 2);
        ctx.fillStyle = '#3A5F0B';
        ctx.fill();
    }
    function drawlamp(){
        ctx.beginPath();
        ctx.rect(40, 200, 10, 300); // x, y, width, height
        ctx.fillStyle = 'gray';
        ctx.fill();
    
        // Draw the lamp head
        ctx.beginPath();
        ctx.arc(46, 200, 20, 0, Math.PI, true); // x, y, radius, startAngle, endAngle, counterclockwise
        ctx.closePath();
        ctx.fillStyle = 'black';
        ctx.fill();
    
        // Draw the light
        ctx.beginPath();
        ctx.arc(46, 200, 10, 0, 2 * Math.PI); // smaller circle for light
        ctx.fillStyle = 'yellow';
        ctx.fill();
    }
    function drawlamp2(){
        ctx.beginPath();
        ctx.rect(1090, 200, 10, 300); // x, y, width, height
        ctx.fillStyle = 'gray';
        ctx.fill();
    
        // Draw the lamp head
        ctx.beginPath();
        ctx.arc(1096, 200, 20, 0, Math.PI, true); // x, y, radius, startAngle, endAngle, counterclockwise
        ctx.closePath();
        ctx.fillStyle = 'black';
        ctx.fill();
    
        // Draw the light
        ctx.beginPath();
        ctx.arc(1096, 200, 10, 0, 2 * Math.PI); // smaller circle for light
        ctx.fillStyle = 'yellow';
        ctx.fill();
    }
    function drawBusStopPole() {
        const poleWidth = 10;
        const poleHeight = 190;
        const poleX = canvas.width / 2 - poleWidth / 2; // Center the pole horizontally
        const poleY = canvas.height - poleHeight - 50; // Position from the bottom of the canvas

        // Draw the pole
        ctx.fillStyle = 'gray';
        ctx.fillRect(poleX-460, poleY-150, poleWidth, poleHeight);

        // Draw the sign circle
        const signRadius = 40;
        const signX = canvas.width / 2; // Center horizontally
        const signY = poleY; // Attach to the top of the pole
        ctx.beginPath();
        ctx.arc(signX-460, signY-150, signRadius, 0, Math.PI * 2, true);
        ctx.fillStyle = 'RED';
        ctx.fill();

        // Add text inside the sign
        ctx.fillStyle = 'white';
        ctx.font = 'bold 16px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('BUS', signX-460, signY-158);
        ctx.fillText('STOP', signX-460, signY-138);
    }

    class Bird {
        constructor(x, y, speedX, speedY) {
            this.x = x;
            this.y = y;
            this.speedX = speedX; // Horizontal speed
            this.speedY = speedY; // Vertical speed
        }
    
        draw(ctx) {
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(this.x - 15, this.y + 10);
            ctx.lineTo(this.x + 15, this.y + 10);
            ctx.strokeStyle = 'black';
            ctx.stroke();
        }
    
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
        }
    }
    // Array to store birds
let birds = [];

// Function to create birds
function createBirds() {
    // Create birds at the right edge with a motion towards the top
    for (let i = 0; i < 5; i++) { // Create 5 birds for demonstration
        let x = canvas1.width ; // Start beyond the right edge
        let y = canvas1.height - 0.5* canvas1.height/(3/4) ; // Start from lower half
        let speedX = -Math.random() * 4 - 0.3; // Speed to the left
        let speedY = -Math.random() * 2 - 0.2; // Speed upwards
        birds.push(new Bird(x, y, speedX, speedY));
    }
}

// Function to draw and update birds
function handleBirds() {
    birds.forEach((bird, index) => {
        bird.update();
        bird.draw(ctx1);
        // Remove birds that go off screen
        if (bird.x < 0 || bird.y < 0) {
            birds.splice(index, 1);
        }
    });
}

// Create birds initially
createBirds();

// Call this function periodically to add more birds
setInterval(createBirds, 50000); // Every 5000 milliseconds (5 seconds)

    
    
    function drawScene() {
        
        // Buildings
        
        
        
        // Create a gradient for the sky
const gradient = ctx1.createLinearGradient(0, 0, 0, canvas1.height);
gradient.addColorStop(0, '#43c6db'); // Light blue at the top
gradient.addColorStop(1, '#ffffff'); // Light blue at the bottom

// Fill the sky with the gradient
ctx1.fillStyle = gradient;
ctx1.fillRect(0, 0, canvas1.width, canvas1.height);

        ctx1.beginPath();
        ctx1.arc(canvas1.width - 200, 150, 50, 0, Math.PI * 2);
        ctx1.fillStyle = '#FDB813 ';
        ctx1.fill();
        drawClock();
        moveClouds();
        
        drawRoad();
        drawBuilding(330, canvas1.height, 140, 355);
        drawBuilding(500, canvas1.height, 100, 250);
        
        drawBuilding(1150, canvas1.height, 100, 250);
        drawHouse();
        drawTree();
        drawTree2();
        drawlamp();
        drawlamp2();
        drawBusStopPole();
        
        drawMan();
        drawBus();
        handleBirds();
        

        requestAnimationFrame(drawScene);
    }
    // Animation loop
   drawScene()
   class Particle {
        constructor(x, y, radius, color, speedX, speedY) {
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.color = color;
            this.speedX = speedX;
            this.speedY = speedY;
            this.opacity = 1;
            
        }

        draw() {
            ctx1.save();
            ctx1.globalAlpha = this.opacity;
            ctx1.fillStyle = this.color;
            ctx1.beginPath();
            ctx1.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx1.fill();
            ctx1.restore();
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            this.opacity -= 0.01;
        }
    }

    

    



    

   

    // Click event handler
    

   
    

    // Start animation
