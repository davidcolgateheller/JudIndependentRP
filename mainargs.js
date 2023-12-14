document.getElementById("prevBtn").hidden = true;
var pagenum = 0;
let maxItem = 1;
      let currentItem = 0;
      prevBtn.style.backgroundColor = "red";
      updateContent();
      document.getElementById("prevBtn").addEventListener("click", function() {
         if(currentItem > 0) {
            currentItem--;
            document.getElementById("nextBtn").disabled = false;
            document.getElementById("nextBtn").hidden = false;
            nextBtn.style.backgroundColor = "";
         }
         if(currentItem === 0) {
            this.disabled = true;
            this.hidden = true;
            prevBtn.style.backgroundColor = "red";
         }
         updateContent() ; 
      });
      document.getElementById("nextBtn").addEventListener("click", function() {
         if(currentItem < maxItem) {
            currentItem++;
            document.getElementById("prevBtn").disabled = false;
            document.getElementById("prevBtn").hidden = false;
            prevBtn.style.backgroundColor = "";
         }
         if(currentItem === maxItem) {
            this.disabled = true;
            this.hidden = true;
            nextBtn.style.backgroundColor = "red";
         }
         updateContent() ;
      });
      function updateContent() {
         // update UI or make API call here
         var content = document.getElementById("content");
         
         if (pagenum == 0) {
            content.innerHTML = "<h1>First of all, we need to look at our main two candidates: Rosh Hashanah and Yom Kippur. They are important because they are two of the four high holy days in Judaism. They are also important because they are part of the Jewish new year: as the year progresses, Jews slowly read through the Torah, which is the book of law in Judaism. Beginning the year means beginning the cycle of reading the Torah, which is central to the religion.</h1>";
            pagenum += 1;
         } else if (pagenum == 1) {
            content.innerHTML = "Now, we need to decide which one is more important. In the Jewish religion, God forgives people who take responsibility and ask for forgiveness. Rosh Hashanah and Yom Kippur are the two days when this happens. On Rosh Hashanah, people start to ask for forgiveness. They continue to atone for ten days. At the end of those ten days, Yom Kippur happens. On Yom Kippur, after all that atonement, each person\'s destiny for the year is decided. That sounds a lot more important than Rosh Hashanah. There is even a Jewish saying, \"On Rosh Hashanah it is inscribed, and on Yom Kippur it is sealed.\" The latter sounds more permanent. On Yom Kippur you fast, literally giving up food and drink to atone as much as you can for your sins. This definitely shows that Yom Kippur is more important.";
            pagenum -= 1;
         }
        }