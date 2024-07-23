function newpage() {
    var domainName = window.location.hostname;


    var inputValue = document.getElementById("inputText").value;
    if (/^\d+$/.test(inputValue)) {
        window.open("http://" + domainName + ":" + inputValue, "_blank");
    } else {
        window.open("https://" + inputValue + ".hoao.fun", "_blank");
    }
}

var sss = document.getElementById("inputText")

if (sss) {
    sss.addEventListener("keyup", function (event) {
        // 使用 event.key 代替 keyCode，以提高兼容性
        if (event.key === "Enter") {
            try {
                // 对 newpage() 函数调用进行异常处理
                newpage();
            } catch (error) {
                console.error("处理 newpage() 函数时发生错误:", error);
                // 可以在这里添加错误处理逻辑，比如用户提示
            }
        }
    });
} else {
    console.warn("没有找到元素 'inputText'，事件监听器未添加。");
}