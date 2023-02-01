let hideMenuVar = false;
            function hideMenu() {
                if (hideMenuVar === false) {
                    $(".sidenav").css("width","100px");
                    $(".nav-button").css("white-space","nowrap");
                    $(".nav-button").css("justify-content","center");
                    $(".text").css("display","none");
                    $(".rsmy-title").css("display","none");
                    $(".main").css("padding-left","125px");
                    setTimeout(function() {
                        $(".menu-button").css("width","100%");
                        $(".rsmy-favicon").css("display","initial");
                    }, 110);
                    hideMenuVar = true;
                }
                else if (hideMenuVar === true) {
                    $(".nav-button").css("padding-left","25px");
                    $(".text").css("display","initial");
                    $(".sidenav").css("width","300px");
                    $(".rsmy-favicon").css("display","none");
                    $(".rsmy-title").css("display","initial");
                    $(".main").css("padding-left","325px");
                    $(".nav-button").css("justify-content","left");
                    $(".menu-button").css("width","auto");
                    $(".download-button").css("justify-content","center");
                    hideMenuVar = false;
                }
            }
            function getOS() {
                var userAgent = window.navigator.userAgent,
                    platform = window.navigator?.userAgentData?.platform || window.navigator.platform,
                    macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K', 'macOS'],
                    windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
                    iosPlatforms = ['iPhone', 'iPad', 'iPod'],
                    os = null;

                if (macosPlatforms.indexOf(platform) !== -1) {
                    os = 1; // MacOS
                    $(".windows").css("display","none");
                } else if (iosPlatforms.indexOf(platform) !== -1) {
                    os = 2; // iOS
                    $(".ios").css("display","initial");
                    $(".windows").css("display","none");
                } else if (windowsPlatforms.indexOf(platform) !== -1) {
                    os = 3; // Windows
                    $(".unix").css("display","none");
                } else if (/Android/.test(userAgent)) {
                    os = 4; // Android
                    $(".android").css("display","initial");
                } else if (/Linux/.test(platform)) {
                    os = 5; // UNIX/Linux
                }
                else {
                    $(".not-supported").css("display","initial");
                }
                }

            const copyButtonLabel = "<i class='fa-light fa-copy'></i>";

            // use a class selector if available
            let blocks = document.querySelectorAll("pre");

            blocks.forEach((block) => {
            // only add button if browser supports Clipboard API
            if (navigator.clipboard) {
                let button = document.createElement("button");
                button.classList.add("code-copy");

                button.innerHTML = copyButtonLabel;
                button.setAttribute("data-toggle","tooltip");
                button.setAttribute("data-placement","top");
                button.title = "Copy to clipboard";

                block.appendChild(button);

                button.addEventListener("click", async () => {
                await copyCode(block, button);
                });
            }
            });

            async function copyCode(block, button) {
            let code = block.querySelector("code");
            let text = code.innerText;

            await navigator.clipboard.writeText(text);

            // visual feedback that task is completed
            $(button).attr('title', "Copied!");
            $(button).attr('data-bs-original-title', "Copied!");
            $(button).attr('data-original-title', "Copied!");
            $(button).tooltip("update");
            $(button).tooltip("show");
            button.innerHTML = "<i class='fa-regular fa-check'></i>";

            setTimeout(() => {
                button.innerHTML = copyButtonLabel;
                $(button).attr('title', "Copy to clipboard");
                $(button).attr('data-bs-original-title', "Copy to clipboard");
                $(button).attr('data-original-title', "Copy to clipboard");
                $(button).tooltip("update");
                $(button).tooltip("show");
            }, 1500);
            }
            getOS();
            $(function () {
                $('[data-toggle="tooltip"]').tooltip()
              })