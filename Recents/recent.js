function listrecentFiles() {
  try {
    var create = document.getElementById("fileContent");
    var time = new Date();
    create.innerHTML = "";
    fetch(
      "http://localhost:56072/api/Recent/recentsFile/" +
        sessionStorage.getItem("uid") +
        "/" +
        sessionStorage.getItem("fid") +
        "/" +
        time.getHours(),
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

          icondiv.innerHTML = `<img onclick='view(${Documents.docId},"${Documents.docName}",${Documents.docCreatedBy},"${Documents.docCreatedAt}","${Documents.docFolderId}","${Documents.docIsDeleted}")'  style="height: 1.3rem;width: 1.3rem;float:right;cursor:pointer;" src="Images/Illustrations/info.png"><img onclick="deleteFileFunc(${fid})" style="height: 1.5rem;width: 1.3rem;float:right;cursor:pointer;" src="Images/Illustrations/trash.png">`;

          folderBox.innerHTML = `<div class="favouriteICons">
          <div id="favouriteimg">
          <img onclick="addFavouriteFile(${fid})" class="heart" src="./Images/heart.png" alt="likeimage">
          <img onclick="removeFavourite(${fid})" class="like" src="./Images/like.png" alt="likeimage">
          </div>
          </div>

          <div class="imagefolderBox" style="display: block; justify-content: center">
          <div id="folderBoxImage" style="height: 88%;width: 100%;display: inline-grid; justify-content: "center">
              <img onclick="openFiles()" id="folderImage" style="height: 4rem;width: 4rem;cursor:pointer;" src='Images/Illustrations/google-docs.png'></div>
              <div id="fileImageText">${fold}</div>
              </div>`;

          divBox.appendChild(folderBox);
          folderBox.appendChild(icondiv);
        });
      });
  } catch (err) {
    console.log(err);
  }
}

function view(docId, docName, docCreatedBy, docCreatedAt) {
  Swal.fire({
    title:
      "docId:" +
      docId +
      "\n" +
      "docName:" +
      docName +
      "\n" +
      "docCreatedBy:" +
      sessionStorage.getItem("Name") +
      "\n" +
      "docCreatedAt:" +
      docCreatedAt +
      "\n",
    showClass: {
      popup: "animate_animated animate_fadeInDown",
    },
    hideClass: {
      popup: "animate_animated animate_fadeOutUp",
    },
  });
}
