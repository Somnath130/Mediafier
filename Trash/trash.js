function listFiles() {
  try {
    var create = document.getElementById("folderContent");
    create.innerHTML = "";
    fetch("http://localhost:56072/api/Trash/" + sessionStorage.getItem("fid"), {
      method: "GET",
    })
      .then((response) => response.json())
      .then((documents) => {
        documents.forEach((Documents) => {
          var folderBox = document.createElement("div");
          var divBox = document.getElementById("folderContent");
          folderBox.setAttribute("id", "box");
          const fold = Documents.docName;
          const fid = Documents.docId;
          console.log(fold);
          var icondiv = document.createElement("div");

          icondiv.setAttribute("id", "icondesign");

          icondiv.innerHTML = `<img onclick="deleteFileFunc(${fid})" style="height: 1.5rem;width: 1.3rem;float:right;cursor:pointer;" src="../Images/Illustrations/trash.png">`;

          folderBox.innerHTML = `<div style="width: 100%;display: inline-grid; justify-content: center;margin-top: 2rem;">
                <img onclick="openFiles()" id="folderImage" style="height: 4rem;width: 4rem;cursor:pointer;" src='../Images/Illustrations/google-docs.png'></div><div id="fileImageText">${fold}</div></div>`;

          divBox.appendChild(folderBox);
          folderBox.appendChild(icondiv);
        });
      });
  } catch (err) {
    console.log(err);
  }
}

function deleteFileFunc(did) {
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
          del(did)
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        swalWithBootstrapButtons.fire(
          "Cancelled",
          "Your file is safe",
          "error"
        );
      }
    });
}

function del(did) {
  var d = "";
  var requestOptions = {
    method: "DELETE",
    body: d,
    redirect: "follow",
  };
  let deleteurl = "http://localhost:56072/api/Trash/hardDel/" + did;
  fetch(deleteurl, requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
  location.reload();
}
