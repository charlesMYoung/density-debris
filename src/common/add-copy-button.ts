const observer = new MutationObserver(addPreCopyButton);
observer.observe(document.body, { childList: true, subtree: true });

document.addEventListener("DOMContentLoaded", addPreCopyButton);

function addPreCopyButton() {
  observer.disconnect();

  let codeBlocks = Array.from(document.querySelectorAll("pre"));

  for (let codeBlock of codeBlocks) {
    if (
      codeBlock.parentElement?.nodeName === "DIV" &&
      codeBlock.parentElement?.classList.contains("code-block")
    )
      continue;

    let wrapper = document.createElement("div");
    wrapper.className = "relative code-block";

    let copyButton = document.createElement("button");
    copyButton.className =
      "text-on-background hover:text-primary bg-surface absolute top-0 right-0 text-sm px-3" +
        " py-2 rounded-bl-lg rounded-tr-lg opacity-75" +
        " hover:opacity-100 transition-all duration-200 ease-in-out";
    copyButton.textContent = "拷贝";

    codeBlock.setAttribute("tabindex", "0");
    if (codeBlock.parentNode) {
      codeBlock.parentNode.insertBefore(wrapper, codeBlock);
    }

    wrapper.appendChild(codeBlock);
    wrapper.appendChild(copyButton);

    copyButton.addEventListener("click", async () => {
      let text = codeBlock?.querySelector("code")?.innerText as string;

      await navigator.clipboard.writeText(text);

      copyButton.textContent = "已拷贝";
      copyButton.classList.toggle("opacity-100");

      setTimeout(() => {
        copyButton.textContent = "拷贝";
        copyButton.classList.toggle("opacity-100");
      }, 700);
    });
  }

  observer.observe(document.body, { childList: true, subtree: true });
}
