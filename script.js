// Function to simulate a delay
function delay(ms, callback) {
    setTimeout(callback, ms);
}

// Update the DOM with the countdown
function updateDisplay(message) {
    document.body.innerHTML = message;
}

// Start countdown from 10 to 1
delay(1000, function() {
    updateDisplay('10');
    delay(1000, function() {
        updateDisplay('9');
        delay(1000, function() {
            updateDisplay('8');
            delay(1000, function() {
                updateDisplay('7');
                delay(1000, function() {
                    updateDisplay('6');
                    delay(1000, function() {
                        updateDisplay('5');
                        delay(1000, function() {
                            updateDisplay('4');
                            delay(1000, function() {
                                updateDisplay('3');
                                delay(1000, function() {
                                    updateDisplay('2');
                                    delay(1000, function() {
                                        updateDisplay('1');
                                        delay(1000, function() {
                                            updateDisplay('Happy Independence Day');
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});
