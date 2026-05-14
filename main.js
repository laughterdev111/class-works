<input type="number" id="amount"> <select id="from"> <option value="USD">USD</option> <option value="RWF">RWF</option> </select>
<select id="to"> <option value="RWF">RWF</option> <option value="USD">USD</option> </select>

<button onclick="convert()">Convert</button> <h2 id="resultText">Result: </h2> ```

---

### 2. The Simple JavaScript
Add this inside a `<script>` tag at the bottom of your HTML:

```javascript
function convert() {
    // 1. Get the number from the input box
    let money = document.getElementById("amount").value;

    // 2. Get which currencies are selected
    let fromUnit = document.getElementById("from").value;
    let toUnit = document.getElementById("to").value;

    // 3. Set the exchange rate (Example: 1 USD = 1300 RWF)
    let rate = 1300;
    let finalAnswer = 0;

    // 4. Do the math logic
    if (fromUnit == "USD" && toUnit == "RWF") {
        finalAnswer = money * rate; // Multiply to get RWF
    } 
    else if (fromUnit == "RWF" && toUnit == "USD") {
        finalAnswer = money / rate; // Divide to get USD
    } 
    else {
        finalAnswer = money; // If currencies are the same, no change
    }

    // 5. Put the answer on the screen
    document.getElementById("resultText").innerText = "Result: " + finalAnswer;
}