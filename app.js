function fetchApiLink() {
    var selectCategory = document.getElementById('selectCategory').value;
    var selectDifficulty = document.getElementById('selectDifficulty').value;

    if (selectDifficulty=="any" && selectCategory=="any") {
        var ApiValue = "https://opentdb.com/api.php?amount=10&type=multiple";
        }
    else if (selectDifficulty=="any") {
        var ApiValue = "https://opentdb.com/api.php?amount=10" +
                       "&Category=" + selectCategory +
                       "&type=multiple";
        }
    else if (selectCategory=="any") {
        var ApiValue = "https://opentdb.com/api.php?amount=10" +
                       "&Difficulty=" + selectDifficulty +
                       "&type=multiple";
        }
    else {
        var ApiValue = "https://opentdb.com/api.php?amount=10" +
                       "&category=" + selectCategory + 
                       "&difficulty=" + selectDifficulty +
                       "&type=multiple";
        }
    
    localStorage.setItem('Fetch Api Link', ApiValue);
}


function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }