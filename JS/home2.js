function viewfileModalbox() {
  document.getElementById("fileupload").click();
}


function viewfolderModalbox() {
  document.getElementById("folderupload").click();
}

function addCard()
{
  var x = document.createElement("div");
  var img = document.createElement("img");
  var divBox = document.getElementById("folderContent");
  x.setAttribute("id", "box");

  x.innerText = "Photos";

  x.innerHTML = `<div style="height: 100%;width: 100%;display: flex; justify-content: center"><img style="height: 4rem;width: 4rem;" src='./Images/Illustrations/folderadd.png'></div>`;
  //    img.setAttribute("id", "imgbox");
  divBox.append(x);

}