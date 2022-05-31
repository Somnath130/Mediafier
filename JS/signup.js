function signupsuccess() {
  Swal.fire({
    title: "<strong>Success</strong>",
    icon: "success",
    html: `Account created successfully`,
    //   showCloseButton: true,
    //   showCancelButton: true,
    //   focusConfirm: false,
    //   reverseButtons: true,
    //   focusCancel: true,
    confirmButtonText: `Go to drive`,
  }).then((result) => {
    if (result.value) {
      window.location.href = `../../home.html`;
    }
  });
}
