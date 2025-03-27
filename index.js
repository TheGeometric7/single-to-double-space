const inputBox = document.getElementById("inputBox");
const outputBox = document.getElementById("outputBox");
const copyOutput = document.getElementById("copyOutput");
function transformText(source, target) {
    const lines = source.value.split("\n");
    const transformedLines = lines.map(line => {
        return line.replace(/ /g, "  ");
    });
    target.value = transformedLines.join("\n");
}
async function copyToClipboard(element) {
    try {
        await navigator.clipboard.writeText(element.value);
    } catch (err) {
        console.error("Failed to copy text: ", err);
    }
}
inputBox.addEventListener("input", () => {
    transformText(inputBox, outputBox);
});
outputBox.addEventListener("input", () => {
    const lines = outputBox.value.split("\n");
    const transformedLines = lines.map(line => {
        return line.replace(/  /g, " ");
    });
    inputBox.value = transformedLines.join("\n");
});
copyOutput.addEventListener("click", () => {
    copyToClipboard(outputBox);
});