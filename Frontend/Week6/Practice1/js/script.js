// Sayfa yüklendiğinde mevcut öğelere event listener ekle
document.addEventListener("DOMContentLoaded", () => {
    loadTasksFromLocalStorage();
    addEventListenersToItems();
  });
  
  // Yeni öğe ekleme fonksiyonu
  function newElement() {
    const taskInput = document.getElementById("task");
    const taskValue = taskInput.value.trim();
    const list = document.getElementById("list");
  
    if (taskValue === "") {
      showToast('errorToast');
      return;
    }
  
    // Yeni liste öğesi oluştur
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.innerText = taskValue;
  
    // Silme butonu ekle
    const span = document.createElement("span");
    span.innerText = "×";
    span.className = "close float-end";
    span.onclick = () => {
      li.remove();
      saveToLocalStorage();
    };
  
    li.appendChild(span);
    li.onclick = toggleChecked;
  
    list.appendChild(li);
    taskInput.value = "";
    showToast('successToast');
    saveToLocalStorage();
  }
  
  // Yapıldı işaretleme fonksiyonu
  function toggleChecked() {
    this.classList.toggle("checked");
    saveToLocalStorage();
  }
  
  // Local Storage'a kaydet
  function saveToLocalStorage() {
    localStorage.setItem("tasks", document.getElementById("list").innerHTML);
  }
  
  // Local Storage'dan görevleri yükle
  function loadTasksFromLocalStorage() {
    const tasks = localStorage.getItem("tasks");
    if (tasks) {
      document.getElementById("list").innerHTML = tasks;
    }
  }
  
  // Mevcut öğelere olay dinleyici ekle
  function addEventListenersToItems() {
    document.querySelectorAll("#list li").forEach((li) => {
      // Yapıldı olarak işaretleme
      li.onclick = toggleChecked;
  
      // Silme butonu ekleme (eğer yoksa)
      if (!li.querySelector(".close")) {
        const span = document.createElement("span");
        span.innerText = "×";
        span.className = "close float-end";
        span.onclick = (event) => {
          event.stopPropagation(); // Yapıldı özelliğiyle çakışmayı önle
          li.remove();
          saveToLocalStorage();
        };
        li.appendChild(span);
      }
    });
  }
  
  // Toast bildirimleri gösterme
  function showToast(id) {
    const toast = new bootstrap.Toast(document.getElementById(id));
    toast.show();
  }
  