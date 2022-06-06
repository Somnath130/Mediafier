function viewfileModalbox() {
  document.getElementById("fileupload").click();
}

function viewfolderModalbox() {
  document.getElementById("folderupload").click();
}

// function addCard() {
//   var x = document.createElement("div");
//   var img = document.createElement("img");
//   var divBox = document.getElementById("folderContent");
//   x.setAttribute("id", "box");

//   x.innerText = "Photos";

//   x.innerHTML = `<div style="height: 100%;width: 100%;display: flex; justify-content: center"><img style="height: 4rem;width: 4rem;" src='./Images/Illustrations/folderadd.png'></div>`;
//   //    img.setAttribute("id", "imgbox");
//   divBox.append(x);
// }

// const constants = {};

//   const form = document.getElementById("fo");
//   console.log(form);

function addCard1() {
  try {
    debugger;
    var form = document.getElementById("FormControlInput1");
    var data = new Date();
    fetch("http://localhost:56072/api/Folders", {
      body: JSON.stringify({
        foldersName: form.value,
        foldersCreatedBy: sessionStorage.getItem("uid"),
        foldersCreatedAt: data.toISOString(),
        foldersIsdeleted: 0,
      }),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((folderCreateResponse) => {
      console.log(folderCreateResponse);
      listFolders();
    });
  } catch (err) {
    console.log(err);
  }
}

function listFolders() {
  try {
    var create = document.getElementById("folderContent");
    create.innerHTML = "";
    fetch(
      "http://localhost:56072/api/Folders/" + sessionStorage.getItem("uid"),
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((folders) => {
        folders.forEach((folder) => {
          var create = document.getElementById("folderContent");
          var art = document.createElement("article");

          var folderBox = document.createElement("div");
          // var img = document.createElement("img");
          var divBox = document.getElementById("folderContent");
          folderBox.setAttribute("id", "box");
          const fold = folder.foldersName;
          console.log(fold);
          var icondiv = document.createElement("div");

          icondiv.setAttribute("id", "icondesign");

          icondiv.innerHTML = `<img style="height: 1.3rem;width: 1.3rem;float:right;" src="Images/Illustrations/info.png"><img style="height: 1.5rem;width: 1.3rem;float:right;" src="Images/Illustrations/trash.png">`;

          folderBox.innerHTML = `<div style="height: 88%;width: 100%;display: inline-grid; justify-content: center"><img style="height: 4rem;width: 4rem;" src='Images/Illustrations/folderadd.png'>${fold}</div>`;

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
          var folderBox = document.createElement("div");
          // var img = document.createElement("img");
          var divBox = document.getElementById("folderContent");
          folderBox.setAttribute("id", "box");
          const fold = folder.foldersName;
          console.log(fold);

          var details_icon = '<i class="uil uil-info-circle"></i>';

          divBox.innerHTML = `<div style="height: 100%;width: 100%;display: inline-grid; justify-content: center"><img style="height: 4rem;width: 4rem;" src='./Images/Illustrations/folderadd.png'>${fold} + ${details_icon}</div>`;
          divBox.appendChild(folderBox);
          divBox.appendChild('<i class="uil uil-info-circle"></i>');
        });
      });
  } catch (err) {
    console.log(err);
  }
}
function logout() {
  var logoutbtn = document.getElementById("log");
  window.location.href = "/home2.html";
  sessionStorage.clear();
}
function onLoad() {
  listFolders();
}

onLoad();
