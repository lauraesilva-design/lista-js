  function gerar() {
     let n = Number(document.getElementById("num").value);
            let res = document.getElementById("resultado");
            res.textContent = "";

            for (let i = 1; i <= 10; i++) {
                res.textContent += `${n} + ${i} = ${n + i}\n`;
            }
  
  }
           