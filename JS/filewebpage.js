function viewfileModalbox() {
  document.getElementById("fileupload").click();
}

function viewfolderModalbox() {
  document.getElementById("folderupload").click();
}

async function addfile() {
  try {
    var file = document.getElementById("fileupload").files[0];

    var data = new Date();

    var formData = new FormData();

    formData.append("file", file);

    var requestOptions = {
      method: "POST",

      body: formData,
    };

    await fetch(
      "http://localhost:56072/api/Documents/upload/" +
        sessionStorage.getItem("uid") +
        "/" +
        data.toISOString() +
        "/" +
        sessionStorage.getItem("fid"),
      requestOptions
    ).then((fileCreateResponse) => {
      console.log(fileCreateResponse);

      listFiles();
    });
  } catch (err) {
    console.log(err);
  }
}

// try {
//   var form = document.getElementById("Fileinput");
//   var data = new Date();
//   fetch("http://localhost:56072/api/Documents", {
//     body: JSON.stringify({
//       docName: form.value,
//       docContentType: "document",
//       docSize: 0,
//       docCreatedBy: sessionStorage.getItem("uid"),
//       docCreatedAt: data.toISOString(),
//       docFolderId: sessionStorage.getItem("fid"),
//       docIsDeleted: false,
//     }),
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   }).then((folderCreateResponse) => {
//     console.log(folderCreateResponse);
//     listFiles();
//   });
// } catch (err) {
//   console.log(err);
// }
//   }

function listFiles() {
  try {
    var create = document.getElementById("folderContent");
    create.innerHTML = "";
    fetch(
      "http://localhost:56072/api/Documents/" + sessionStorage.getItem("fid"),
      {
        method: "GET",
      }
    )
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

          icondiv.innerHTML = `<img onclick='view(${Documents.docId},"${Documents.docName}",${Documents.docCreatedBy},"${Documents.docCreatedAt}","${Documents.docFolderId}","${Documents.docIsDeleted}")'  style="height: 1.3rem;width: 1.3rem;float:right;cursor:pointer;" src="Images/Illustrations/info.png"><img onclick="del(${Documents.docId})" style="height: 1.5rem;width: 1.3rem;float:right;cursor:pointer;" src="Images/Illustrations/trash.png">`;

          folderBox.innerHTML = `<div style="height: 88%;width: 100%;display: inline-grid; justify-content: center">
              <img onclick="openFiles()" style="height: 4rem;width: 4rem;cursor:pointer;" src='Images/Illustrations/folderadd.png'>${fold}</div>`;

          divBox.appendChild(folderBox);
          folderBox.appendChild(icondiv);
        });
      });
  } catch (err) {
    console.log(err);
  }
}

function search() {
  try {
    var create = document.getElementById("folderContent");

    var search1 = document.getElementById("inp");

    create.innerHTML = "";

    fetch(
      "http://localhost:56072/api/Folders/Folders/" +
        sessionStorage.getItem("uid") +
        "/" +
        search1.value,

      {
        method: "GET",
      }
    )
      .then((response) => response.json())

      .then((folders) => {
        folders.forEach((folder) => {
          var divBox = document.getElementById("folderContent");

          var folderBox = document.createElement("div");

          folderBox.setAttribute("id", "box");

          const fold = folder.foldersName;
          folderBox.innerHTML = `<div style="height: 100%;width: 100%;display: inline-grid; justify-content: center"><img style="height: 4rem;width: 4rem;" src='./Images/Illustrations/folderadd.png'>${fold}</div>`;

          divBox.append(folderBox);
        });
      });
  } catch (err) {
    console.log(err);
  }
}

function del(did) {
  var d = "";
  var requestOptions = {
    method: "DELETE",
    body: d,
    redirect: "follow",
  };
  let deleteurl = "http://localhost:56072/api/Documents/" + did;
  fetch(deleteurl, requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
  location.reload();
}

function view(docId, docName, docCreatedBy, docCreatedAt) {
  alert(
    "docId:" +
      docId +
      "\n" +
      "docName:" +
      docName +
      "\n" +
      "docCreatedBy:" +
      docCreatedBy +
      "\n" +
      "docCreatedAt:" +
      docCreatedAt +
      "\n"
  );
}

function onLoad() {
  listFiles();
}

onLoad();
