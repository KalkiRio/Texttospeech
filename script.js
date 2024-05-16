document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.getElementById('text-input');
    const speakBtn = document.getElementById('speak-btn');
    const stopBtn = document.getElementById('stop-btn');
    const synth = window.speechSynthesis;
    let utterance;

    speakBtn.addEventListener('click', () => {
        const text = textInput.value.trim();
        if (text) {
            if (synth.speaking) {
                console.error('SpeechSynthesisUtterance instance is already speaking.');
                return;
            }

            utterance = new SpeechSynthesisUtterance(text);
            utterance.onend = () => {
                console.log('SpeechSynthesisUtterance.onend');
            };

            utterance.onerror = (event) => {
                console.error('SpeechSynthesisUtterance.onerror', event);
            };

            synth.speak(utterance);
        }
    });

    stopBtn.addEventListener('click', () => {
        if (synth.speaking) {
            synth.cancel();
        }
    });
});
