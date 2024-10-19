function navToggle() {
    $('.inPage__links').slideToggle();
}

function getSystemInfo() {
    $('.square').show();
    $('.hr_line').show();

    var browserInfo = {
        appName: navigator.appName,
        appVersion: navigator.appVersion,
        userAgent: navigator.userAgent,
        platform: navigator.platform
    };

    var screenInfo = {
        width: screen.width,
        height: screen.height,
        availableWidth: screen.availWidth,
        availableHeight: screen.availHeight,
        colorDepth: screen.colorDepth
    };

    var memoryInfo = navigator.deviceMemory;

    var cpuCores = navigator.hardwareConcurrency;

    var onlineStatus = navigator.onLine;
    var timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    var language = navigator.language || navigator.userLanguage; // Get preferred language
    var touchSupport = 'ontouchstart' in window || navigator.maxTouchPoints > 0;



    $(".browserInfo__div").html(`App Name: <span class="ml-8 text-green-800 text-xl">${browserInfo.appName}</span><br>App Version: <span class="text-green-800 ml-5 text-xl">${browserInfo.appVersion}</span><br>Browser: <span class="text-green-800 ml-11 text-xl">${browserInfo.userAgent}</span><br>Platform/OS: <span class="text-green-800 ml-4 text-xl">${browserInfo.platform}</span>`);
    $(".screenInfo__div").html(`Width: <span class="ml-14 text-green-800 text-xl">${screenInfo.width} px</span><br>Height: <span class="text-green-800 ml-14 text-xl">${screenInfo.height} px</span><br>Color Depth: <span class="text-green-800 ml-4 text-xl">${screenInfo.colorDepth} bpp</span>`);
    if (memoryInfo == undefined){
        memoryInfo = "Not Available"
    }
    $(".memoryInfo__div").html(`Memory: <span class="ml-10 text-green-800 text-xl">${memoryInfo}</span>`);
    $(".onlineInfo__div").html(`Online Status: <span class="ml-2 text-green-800 text-xl">${onlineStatus}</span>`);
    $(".cpuInfo__div").html(`CPU Cores: <span class="ml-8 text-green-800 text-xl">${cpuCores}</span>`);
    $(".timezoneInfo__div").html(`Timezone: <span class="ml-8 text-green-800 text-xl">${timeZone}</span>`);
    $(".languageInfo__div").html(`Language: <span class="ml-8 text-green-800 text-xl">${language}</span>`);
    // $(".batteryInfo__div").html(`Level: <span class="ml-8 text-green-800 text-xl">${batteryInfo.level}</span><br>Charging: <span class="ml-8 text-green-800 text-xl">${batteryInfo.charging}</span>`);
    // $(".cookiesInfo__div").html(`Cookies: <span class="ml-8 text-green-800 text-xl">${cookieEnabled}</span>`);
    $(".touchInfo__div").html(`Touch: <span class="ml-8 text-green-800 text-xl">${touchSupport}</span>`);
    $('.square').hide();

}