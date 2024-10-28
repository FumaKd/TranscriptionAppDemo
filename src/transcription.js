import { ref, watch } from "vue"

export function useTranscription() {
    // フィールド用意
    const userStopFlug = ref(false)
    const recognitionFlug = ref(false)
    let SavedTextContentWhenErrorOccurred = ref("")
    const transcriptResults = ref()
    const transcriptDisplay = ref("")
    const resultCouner = ref(0)
    watch(transcriptResults, () => {
        let resultData = transcriptResults.value[transcriptResults.value.length - 1]
        if (resultData.isFinal) transcriptDisplay.value += resultData[0].transcript
        resultCouner.value += 1
    })

    // 音声認識設定
    const Speechrecognition = window.speechRecognition || webkitSpeechRecognition;
    const recognition = new Speechrecognition();
    recognition.continuous = true;
    recognition.lang = "ja-JP";
    recognition.interimResults = true;
    recognition.maxAlternatives = 3;
    // イベント設定
    recognition.onresult = (event) => {
        recognitionFlug.value = true
        transcriptResults.value = event.results
    }
    recognition.onend = (event) => {
        SavedTextContentWhenErrorOccurred.value = transcriptDisplay.value == undefined ? "" : transcriptDisplay.value
        recognitionFlug.value = false
        if (userStopFlug.value) {
            userStopFlug.value = false
        } else {
            recognition.start();
        }
    }

    // 音声認識コントローラー
    function startBtnPressed() {
        recognition.start()
    }
    function stopBtnPressed() {
        userStopFlug.value = true
        recognition.stop()
    }

    return {recognition: recognition, recognitionFlug: recognitionFlug, transcriptDisplay: transcriptDisplay, startBtnPressed: startBtnPressed, stopBtnPressed: stopBtnPressed}
}