function back(){
    window.location="activity_1.html"
}
function getSocre(){
 score =   localStorage.getItem("score")
    document.getElementById("result").innerHTML="<h1>Score "+score+"</h1>"
}