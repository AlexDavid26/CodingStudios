var likesNumber = new Array(8).fill(0);

window.onload = function() {
    startLikeButton();
    var video = document.getElementById("Video");
    video.playbackRate = 0.75;
}

function startLikeButton()
{
    for (var i = 0; i < 8; i++)
    {
        likesNumber[i] = Math.floor(Math.random() * 100);
        document.getElementById("likesNumber" + i).innerHTML = likesNumber[i];
    }
}

function redirect(path)
{
    window.location.href = path
}

function openNewTab(path)
{
    window.open(path, '_blank');
}

function like(value) 
{
    image = "image" + value;
    var imageID = document.getElementById(image);

    document.getElementById("likesNumber" + value).innerHTML = likesNumber[value];

    if (imageID.src.match("/CodingStudios/Images/Icons/heartEmpty.png"))
    {
        imageID.src = "/CodingStudios/Images/Icons/heartFilled.png";
        likesNumber[value]++;
        document.getElementById("likesNumber" + value).innerHTML = likesNumber[value];
    }
    else if (imageID.src.match("/CodingStudios/Images/Icons/heartFilled.png"))
    {
        imageID.src = "/CodingStudios/Images/Icons/heartEmpty.png";
        likesNumber[value]--;
        document.getElementById("likesNumber" + value).innerHTML = likesNumber[value];
    }
} 