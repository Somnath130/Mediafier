$(document).ready(function () {
  $("#sidebarCollapse").on("click", function () {
    $("#sidebar").toggleClass("active");
  });
});
function listfavFolders() {
  try {
    var create = document.getElementById("folderContent");
    create.innerHTML = "";
    fetch(
      "http://localhost:56072/api/Favourite/favFold/" +
        sessionStorage.getItem("uid"),
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((folders) => {
        console.log(folders.length);
        folders.forEach((folder) => {
          var folderBox = document.createElement("div");
          var divBox = document.getElementById("folderContent");
          folderBox.setAttribute("id", "box");
          const fold = folder.foldersName;
          const fid = folder.foldersId;
          // console.log(fold);
          var icondiv = document.createElement("div");

          icondiv.setAttribute("id", "icondesign");

          icondiv.innerHTML = `<img onclick='view(${folder.foldersId},"${folder.foldersName}",${folder.foldersCreatedBy},"${folder.foldersCreatedAt}")'  style="height: 1.3rem;width: 1.3rem;float:right;cursor:pointer;" src="Images/Illustrations/info.png">`;

          folderBox.innerHTML = `<div id="imagefolderBox">
          <div id="favouriteimg">
          <img onclick="removeFavourite(${fid})" class="like" src="./Images/like.png" alt="likeimage">
          </div>
          <div id="folderBoxImage" style="display: inline-grid; justify-content: "center">
          <img onclick="openFiles(${folder.foldersId})" id="folderImage" style="height: 4.5rem;width: 4rem;cursor:pointer;" src='Images/Illustrations/folderadd.png'>
          </div>
          <div id="folderImageText">${fold}</div> 
          </div>`;

          divBox.appendChild(folderBox);
          folderBox.appendChild(icondiv);
        });
      });
  } catch (err) {
    console.log(err);
  }
}

function view(folderid, foldername, foldercreatedby, foldercreatedat) {
  Swal.fire({
    title:
      "Folder id: " +
      folderid +
      "\n" +
      "Folder name: " +
      foldername +
      "\n" +
      "Folder created by: " +
      foldercreatedby +
      "\n" +
      "Folder created at: " +
      foldercreatedat +
      "\n",
    showClass: {
      popup: "animate_animated animate_fadeInDown",
    },
    hideClass: {
      popup: "animate_animated animate_fadeOutUp",
    },
  });
}


function removeFavourite(folderid) {
  var d = "";
  var requestOptions = {
    method: "PUT",
    body: d,
    redirect: "follow",
  };
  let deleteurl =
    "http://localhost:56072/api/Folders/removefavourite/" + folderid;

  fetch(deleteurl, requestOptions)
    .then((response) => response.text())

    .then((result) => listfavFolders())

    .catch((error) => console.log("error", error));
}


function deleteFileFunc(fid) {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: false,
  });

  swalWithBootstrapButtons
    .fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
    })
    .then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          "Deleted!",
          "Your file has been deleted.",
          "success",
          del(fid)
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        swalWithBootstrapButtons.fire(
          "Cancelled",
          "Your file is safe",
          "error"
        );
      }
    });

    function del(folderid) {
      var d = "";
      var requestOptions = {
        method: "PUT",

        body: d,

        redirect: "follow",
      };

      let deleteurl = "http://localhost:56072/api/Folders/del/" + folderid;

      fetch(deleteurl, requestOptions)
        .then((response) => response.text())

        .then((result) => console.log(listfavFolders()))

        .catch((error) => console.log("error", error));
    }
}