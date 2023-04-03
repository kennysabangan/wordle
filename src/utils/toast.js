export default function toast(message, time = 1500) {
    const toast = document.createElement("div");
    toast.innerText = message;
    toast.style.position = "absolute";
    toast.style.top = "30%";
    toast.style.left = "50%";
    toast.style.transform = "translate(-50%, -50%)";
    toast.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    toast.style.color = "white";
    toast.style.padding = "10px";
    toast.style.borderRadius = "5px";
    toast.style.zIndex = "9999";
    toast.style.userSelect = "none";
    document.body.appendChild(toast);
    toast.addEventListener("click", () => {
      toast.style.animation = "fade-out 0.4s";
      toast.addEventListener("animationend", () => {
        toast.remove();
      });
    });
    setTimeout(() => {
      toast.style.animation = "fade-out 0.4s";
      toast.addEventListener("animationend", () => {
        toast.remove();
      });
    }, time);
  }