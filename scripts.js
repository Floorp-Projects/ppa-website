function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

function copied_popup() {
  var button = document.getElementById("copy-button");
  button.innerText = "Copied successfully";
  button.style.color = "white";
  delay(1000).then(() => (button.innerText = "📋"));
}

function copycmd() {
  navigator.clipboard.writeText(
    "curl -fsSL https://ppa.floorp.app/KEY.gpg | sudo gpg --dearmor -o /usr/share/keyrings/Floorp.gpg\nsudo curl -sS --compressed -o /etc/apt/sources.list.d/Floorp.list 'https://ppa.floorp.app/Floorp.list'\nsudo apt update\nsudo apt install floorp"
  );
  copied_popup();
}