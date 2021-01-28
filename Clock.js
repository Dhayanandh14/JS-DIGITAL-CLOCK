newFunction();

function newFunction() {
    window.onload = function () {

        var begin = document.querySelector(".start");
        begin.addEventListener("click", sec);
        var en = document.querySelector(".stop");
        en.addEventListener("click", enough);
        var i=0;
        var inter
        function sec(){
           inter=  setInterval(thodangu,1000);
         }
         function enough() {
            clearInterval(inter);
            console.log("end")
        }
        function thodangu() {
            var colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
                                '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
                                '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
                                '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
                                '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
                                '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
                                '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
                                '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
                                '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
                                '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF',
                                '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A'];
            var T = new Date();
            var D = T.getDate();
            var S = T.getSeconds();
            var H = T.getHours();
            var Total = T.toLocaleTimeString();
            var M = T.getMinutes();
            var clock = document.querySelector('#neram');
            clock.innerHTML=Total;
            // changeColor();
            // function getRandomColor() {
            //     var letters = '0123456789ABCDEF';
            //     var color = '#';
            //     for (var i = 0; i < 6; i++ ) {
            //         color += letters[Math.floor(Math.random() * 16)];
            //     }
            //     return color;
            // }
            //COLOR
            // const setBg = () => {
            //     const randomColor = Math.floor(Math.random()*16777215).toString(16);
            //     document.body.style.backgroundColor = "#" + randomColor;
            //     color.innerHTML = "#" + randomColor;
            //   }
              
            //   genNew.addEventListener("click", setBg);
            //   setBg();
            
            // function changeColor(){
            //    clock.style.color= getRandomColor();
            // }
            colo();
          
            function colo(){
                clock.style.color=colorArray[i];
                i=i+1;
                if (i==60) {
                    i=0;
                }
               
            }
        }
        
        















    };
}
