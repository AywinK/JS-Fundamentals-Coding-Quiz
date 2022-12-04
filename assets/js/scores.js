
// searches and verifies hiscores data
function searchForHiscoresData() {
    // gets local storage data
    var hiscoresLocalStorage = JSON.parse(localStorage.getItem("hiscoresData"));

    // check if there is hiscoresData in local storage
    var hiscoresDataExists = (hiscoresLocalStorage !== null);

    // checks hiscoresData is loaded before generating hiscores list
    if (hiscoresDataExists) {
        generateHiscores(hiscoresLocalStorage);
    } else {
        console.log("local storage data does not exist.");
    }
}

function generateHiscores(hiscoresLocalStorage) {
    // reorder array from first place to last - function swaps elements based on if function returns negative or positive value
    hiscoresLocalStorage.sort(function (a, b) {
        console.log(a[0].score - b[0].score);
        return b[0].score - a[0].score
    });
    console.log(hiscoresLocalStorage);

    // loop through object and create list items within ordered list
    for (var hiscoresObj of hiscoresLocalStorage) {
        hiscoresObj = hiscoresObj[0]; //extract just the object
        console.log(hiscoresObj); // object with initials and score props
        var orderedListElement = document.getElementById("highscores");
        var newListItem = document.createElement("li");
        var initialsGiven = (hiscoresObj.initials.length > 0);
        if (initialsGiven) {
            newListItem.innerText = `${hiscoresObj.initials} - ${hiscoresObj.score}`;
        } else {
            newListItem.innerText = `anonymous submission - ${hiscoresObj.score}`;
        }
        orderedListElement.appendChild(newListItem);
    }
}

// references clear hiscores button
var hiscoresBtn = document.getElementById("clear");
// adds event listener to hiscoresBtn
hiscoresBtn.addEventListener("click", function (event) {
    console.log(event);
    localStorage.clear();
    location.reload();
})

// searchs for hiscores data when page is loaded or reloaded
searchForHiscoresData();