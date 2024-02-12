openTab("about-tab")

function hideAllTabs() {
    //hide content
    let tabs = document.getElementsByClassName("tab-section")
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none"
    }
}

function openTab(tabName) {
    hideAllTabs()
    let tabClicked = document.getElementById(tabName)
    tabClicked.style.display = "block"
    topFunction()
}

function topFunction() {
    document.documentElement.scrollTop = 0;
}

function openDialog(dialogBox) {
    topFunction()
    let dialogEl = document.getElementById(dialogBox)
    dialogEl.showModal()
}

function closeDialog(dialogBox) {
    let dialogEl = document.getElementById(dialogBox)
    dialogEl.close()
}