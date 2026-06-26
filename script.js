document.addEventListener("keyup", function (event) {
    console.log(event.key)
    let button = event.key;
    if (button === 'a') {
        let a = document.getElementById(event.key);
        a.style.backgroundColor = "yellow";

        setTimeout(function () {
            a.style.backgroundColor = "white";
        }, 200);
        const A = new Audio("./Audio/A0.mp3");
        A.play()
            .then(() => {
                console.log("Audio played successfully");
            })
            .catch((error) => {
                console.log("Error playing audio:");
            });
    }

    if (button === 'b') {
        let b = document.getElementById(event.key);
        b.style.backgroundColor = "yellow";

        setTimeout(function () {
            b.style.backgroundColor = "white";
        }, 200);
        const B = new Audio("./Audio/A1.mp3");
        B.play()
            .then(() => {
                console.log("Audio played successfully");
            })
            .catch((error) => {
                console.log("Error playing audio:");
            });
    }

    if (button === 'c') {
        let c = document.getElementById(event.key);
        c.style.backgroundColor = "yellow";

        setTimeout(function () {
            c.style.backgroundColor = "white";
        }, 200);
        const C = new Audio("./Audio/A2.mp3");
        C.play()
            .then(() => {
                console.log("Audio played successfully");
            })
            .catch((error) => {
                console.log("Error playing audio:");
            });
    }

    if (button === 'd') {
        let d = document.getElementById(event.key);
        d.style.backgroundColor = "yellow";

        setTimeout(function () {
            d.style.backgroundColor = "white";
        }, 200);
        const D = new Audio("./Audio/A4.mp3");
        D.play()
            .then(() => {
                console.log("Audio played successfully");
            })
            .catch((error) => {
                console.log("Error playing audio:");
            });
    }

    if (button === 'e') {
        let e = document.getElementById(event.key);
        e.style.backgroundColor = "yellow";

        setTimeout(function () {
            e.style.backgroundColor = "white";
        }, 200);
        const E = new Audio("./Audio/A5.mp3");
        E.play()
            .then(() => {
                console.log("Audio played successfully");
            })
            .catch((error) => {
                console.log("Error playing audio:");
            });
    }

    if (button === 'f') {
        let f = document.getElementById(event.key);
        f.style.backgroundColor = "yellow";

        setTimeout(function () {
            f.style.backgroundColor = "white";
        }, 200);
        const F = new Audio("./Audio/A6.mp3");
        F.play()
            .then(() => {
                console.log("Audio played successfully");
            })
            .catch((error) => {
                console.log("Error playing audio:");
            });
    }

    if (button === 'g') {
        let g = document.getElementById(event.key);
        g.style.backgroundColor = "yellow";

        setTimeout(function () {
            g.style.backgroundColor = "white";
        }, 200);
        const G = new Audio("./Audio/A7.mp3");
        G.play()
            .then(() => {
                console.log("Audio played successfully");
            })
            .catch((error) => {
                console.log("Error playing audio:");
            });
    }

    if (button === 'h') {
        let h = document.getElementById(event.key);
        h.style.backgroundColor = "yellow";

        setTimeout(function () {
            h.style.backgroundColor = "white";
        }, 200);
        const H = new Audio("./Audio/Ab1.mp3");
        H.play()
            .then(() => {
                console.log("Audio played successfully");
            })
            .catch((error) => {
                console.log("Error playing audio:");
            });
    }

    if (button === 'i') {
        let i = document.getElementById(event.key);
        i.style.backgroundColor = "yellow";

        setTimeout(function () {
            i.style.backgroundColor = "black";
        }, 200);
        const I = new Audio("./Audio/Ab2.mp3");
        I.play()
            .then(() => {
                console.log("Audio played successfully");
            })
            .catch((error) => {
                console.log("Error playing audio:");
            });
    }

    if (button === 'j') {
        let j = document.getElementById(event.key);
        j.style.backgroundColor = "yellow";

        setTimeout(function () {
            j.style.backgroundColor = "black";
        }, 200);
        const J = new Audio("./Audio/Ab3.mp3");
        J.play()
            .then(() => {
                console.log("Audio played successfully");
            })
            .catch((error) => {
                console.log("Error playing audio");
            });
    }

    if (button === 'k') {
        let k = document.getElementById(event.key);
        k.style.backgroundColor = "yellow";

        setTimeout(function () {
            k.style.backgroundColor = "black";
        }, 200);
        const K = new Audio("./Audio/Ab4.mp3");
        K.play()
            .then(() => {
                console.log("Audio played successfully");
            })
            .catch((error) => {
                console.log("Error playing audio:");
            });
    }

    if (button === 'l') {
        let l = document.getElementById(event.key);
        l.style.backgroundColor = "yellow";

        setTimeout(function () {
            l.style.backgroundColor = "black";
        }, 200);
        const L = new Audio("./Audio/E1.mp3");
        L.play()
            .then(() => {
                console.log("Audio played successfully");
            })
            .catch((error) => {
                console.log("Error playing audio:");
            });
    }

    if (button === 'm') {
        let m = document.getElementById(event.key);
        m.style.backgroundColor = "yellow";

        setTimeout(function () {
            m.style.backgroundColor = "black";
        }, 200);
        const M = new Audio("./Audio/E2.mp3");
        M.play()
            .then(() => {
                console.log("Audio played successfully");
            })
            .catch((error) => {
                console.log("Error playing audio:");
            });
    }

    if (button === 'n') {
        let n = document.getElementById(event.key);
        n.style.backgroundColor = "yellow";

        setTimeout(function () {
            n.style.backgroundColor = "black";
        }, 200);
        const N = new Audio("./Audio/E3.mp3");
        N.play()
            .then(() => {
                console.log("Audio played successfully");
            })
            .catch((error) => {
                console.log("Error playing audio:");
            });
    }



})
