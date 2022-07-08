function listfavFiles() {
  try {
    var create = document.getElementById("fileContent");
    create.innerHTML = "";
    fetch(
      "http://localhost:56072/api/Favourite/favFile/" +
        sessionStorage.getItem("fid"),
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((documents) => {
        documents.forEach((Documents) => {
          var folderBox = document.createElement("div");
          var divBox = document.getElementById("fileContent");
          folderBox.setAttribute("id", "box");
          const fold = Documents.docName;
          const fid = Documents.docId;
          console.log(fold);
          var icondiv = document.createElement("div");

          icondiv.setAttribute("id", "icondesign");

          icondiv.innerHTML = `<div class="footerIcons"> 
          <div class="<img onclick='view(${Documents.docId},"${Documents.docName}",${Documents.docCreatedBy},"${Documents.docCreatedAt}","${Documents.docFolderId}","${Documents.docIsDeleted}")'  style="height: 1.3rem;width: 1.3rem;float:right;cursor:pointer;" src="../Images/Illustrations/info.png"><img onclick="deleteFileFunc(${fid})" style="height: 1.5rem;width: 1.3rem;float:right;cursor:pointer;" src="../Images/Illustrations/trash.png"></div>`;

          folderBox.innerHTML = `<div class="fileBox"><div id="favouriteimg">
          <img onclick="removeFavourite(${fid})" class="like" src="../Images/like.png" alt="likeimage">
          </div><div class="fileImageBox" style="height: 70%;width: 100%;display: inline-grid; justify-content: center">
          
          <div id="folderBoxImage" style="display: inline-grid; justify-content: "center">
              <img onclick="openFiles()" id="folderImage" style="height: 4rem;width: 4rem;cursor:pointer;" src='../Images/Illustrations/google-docs.png'>
              </div>
              <div id="fileImageText">${fold}</div>
              </div>
              </div>`;

          divBox.appendChild(folderBox);
          folderBox.appendChild(icondiv);
        });
      });
  } catch (err) {
    console.log(err);
  }
}


function removeFavourite(folderid) {
  var d = "";
  var requestOptions = {
    method: "PUT",
    body: d,
    redirect: "follow",
  };
  let deleteurl =
    "http://localhost:56072/api/Documents/removefavourite/" + folderid;

  fetch(deleteurl, requestOptions)
    .then((response) => response.text())

    .then((result) => listfavFiles())

    .catch((error) => console.log("error", error));
}
