
    function makePage() {
        const body = document.querySelector("body");
        const h1 = document.createElement("h1");
        h1.innerHTML = "Welcome to my Page";
        body.appendChild(h1);
        const p = document.createElement("p");
        p.innerHTML = "This page was created using JavaScript";
        body.appendChild(p);
        const img = document.createElement("img");
        img.src = "https://picsum.photos/200";
        body.appendChild(img);
      }
