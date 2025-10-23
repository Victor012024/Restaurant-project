document.querySelector(".contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  let storeContact = JSON.parse(localStorage.getItem("contact")) || [];

  const info = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  storeContact.push(info);

  try {
    if (!info) return;
    localStorage.setItem("contact", JSON.stringify(storeContact));
    Swal.fire({
      title: "Message saved",
      text: "We will get in touch with you very soon",
      icon: "success",
      confirmButtonColor: "green",
    });
    e.target.reset();
  } catch (err) {console.error(err)}
});
