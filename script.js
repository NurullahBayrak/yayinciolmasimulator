let followers = 0;
let money = 0;
let popularity = 1;

function updateUI() {
    document.getElementById("followers").innerText = followers;
    document.getElementById("money").innerText = money;
    document.getElementById("popularity").innerText = popularity;
}

function stream() {
    let bar = document.getElementById("progressBar");
    let width = 0;

    let interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval);

            let gainedFollowers = Math.floor(Math.random() * 10 * popularity) + 5;
            let earnedMoney = Math.floor(Math.random() * 20 * popularity) + 10;

            followers += gainedFollowers;
            money += earnedMoney;

            updateUI();
            bar.style.width = "0%";
        } else {
            width++;
            bar.style.width = width + "%";
        }
    }, 30);
}

function upgradeMic() {
    if (money >= 100) {
        money -= 100;
        popularity += 1;
        updateUI();
    } else {
        alert("Yetersiz para!");
    }
}

function upgradePC() {
    if (money >= 200) {
        money -= 200;
        popularity += 2;
        updateUI();
    } else {
        alert("Yetersiz para!");
    }
}

updateUI();