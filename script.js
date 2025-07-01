function toggleContact() {
  const modal = document.getElementById("contactModal");
  modal.style.display = modal.style.display === "block" ? "none" : "block";
}

function toggleFreeplay() {
  const section = document.getElementById("freeplay-section");
  section.style.display = section.style.display === "block" ? "none" : "block";
}

function toggleAgent() {
  const modal = document.getElementById("agentModal");
  modal.style.display = modal.style.display === "block" ? "none" : "block";
}

function toggleReport() {
  const modal = document.getElementById("reportModal");
  modal.style.display = modal.style.display === "block" ? "none" : "block";
}

function attachFormHandler(formId, msgId, successMsg, actionUrl) {
  const form = document.getElementById(formId);
  form.action = actionUrl;
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const message = document.getElementById(msgId);
    message.style.display = "none";
    const formData = new FormData(form);
    fetch(form.action, {
      method: "POST",
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      message.style.display = "block";
      message.textContent = response.ok ? successMsg : "❌ Failed to send message.";
      form.reset();
    }).catch(() => {
      message.style.display = "block";
      message.textContent = "❌ Network error. Please try again.";
    });
  });
}

// Initialize form handlers
document.addEventListener('DOMContentLoaded', function() {
  attachFormHandler(
    "contact-form", 
    "thank-you", 
    "✅ Message sent to Manager successfully.",
    atob("aHR0cHM6Ly9ob29rLnVzMi5tYWtlLmNvbS9tMjRya3RhZWYweDc0cnJkM2hocGF2MjkxMW5ieW1kbw==")
  );
  
  attachFormHandler(
    "agent-form", 
    "agent-thank-you", 
    "✅ Message sent to Agent successfully.",
    atob("aHR0cHM6Ly9mb3Jtc3VibWl0LmNvL3doaXRldGlnZXJyZWFsMkBnbWFpbC5jb20=")
  );
  
  attachFormHandler(
    "report-form", 
    "report-thank-you", 
    "Report Sent.",
    atob("aHR0cHM6Ly9mb3Jtc3VibWl0LmNvL2FqYXgvd2hpdGV0aWdlcmdhbWluZzM2NUBnbWFpbC5jb20=")
  );
});

const urlMap = {
  signalTop: "aHR0cHM6Ly9zaWduYWwubWUvI2V1L29xcjVpT1dtYU1fM3NEX21zRGRrRnN2NTBmUmNjcFFTTnJxcFJmZDF3VTZZdmp5SUJIeE4wYmE2UUcwVEZCQjk=",
  deposit: "aHR0cHM6Ly9zYWxsYXBheS5wcm8vMzgzL3B1cmNoYXNl",
  gameVault: "aHR0cDovL2Rvd25sb2FkLmdhbWV2YXVsdDk5OS5jb20=",
  vegasSweeps: "aHR0cDovL20ubGFzdmVnYXNzd2VlcHMuY29t",
  highstakeSweeps: "aHR0cDovL2RsLmhpZ2hzdGFrZXN3ZWVwcy5jb20=",
  juwa: "aHR0cHM6Ly9kbC5qdXdhNzc3LmNvbQ==",
  pandaMaster: "aHR0cHM6Ly9wYW5kYW1hc3Rlci52aXA6ODg4OC9pbmRleC5odG1s",
  risingStar: "aHR0cDovL3Jpc2luZ3N0YXIudmlwOjg1ODAvaW5kZXguaHRtbA==",
  fireKirin: "aHR0cDovL3N0YXJ0LmZpcmVraXJpbi54eXo6ODU4MC9pbmRleC5odG1s",
  orionStars: "aHR0cDovL3N0YXJ0Lm9yaW9uc3RhcnMudmlwOjg1ODAvaW5kZXguaHRtbA==",
  milkyWay: "aHR0cHM6Ly9taWxreXdheWFwcC54eXo=",
  vBlink: "aHR0cDovL3d3dy52Ymxpbms3NzcudXN0Y2x1Yg==",
  ultraPanda: "aHR0cDovL3d3dy51bHRyYXBhbmRhLm1vYmkv",
  riverSweeps: "aHR0cHM6Ly9iZXQ3NzcuZXUvcGxheS8/",
  sirius: "aHR0cHM6Ly9tLmdhbWVzaXJpdXM5OTkuY29t",
  cashMachine: "aHR0cDovL3d3dy5jYXNobWFjaGluZTc3Ny5jb20=",
  telegram: "aHR0cHM6Ly90Lm1lL3doaXRldGlnZXIzMjA=",
  signalSocial: "aHR0cHM6Ly9zaWduYWwubWUvI2V1L29xcjVpT1dtYU1fM3NEX21zRGRrRnN2NTBmUmNjcFFTTnJxcFJmZDF3VTZZdmp5SUJIeE4wYmE2UUcwVEZCQjk=",
  freeplayLink: "aHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3Nha3VyYWdhbWVzdGF0aW9uNS8="
};

function openLink(id) {
  const encodedUrl = urlMap[id];
  if (encodedUrl) {
    const url = atob(encodedUrl);
    window.open(url, '_blank', 'noopener');
  } else {
    console.error("Invalid link ID:", id);
  }
}
