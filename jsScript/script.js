// Changing bg-color randomly
function changeBgColor(){
    const colors = ["bg-red-100", "bg-green-100", "bg-yellow-100", "bg-purple-100", "bg-gray-100"];
    const body = document.body;
    body.classList.remove("bg-blue-100", "bg-red-100", "bg-green-100", "bg-yellow-100", "bg-purple-100", "bg-gray-100");

    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    body.classList.add(randomColor);
}



