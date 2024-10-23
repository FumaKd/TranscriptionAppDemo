import { ref, computed } from "vue"

export function useTranscription() {
    // フィールド用意
    const userStopFlug = ref(false)
    let prependTextForError = ""
    const transcriptResults = ref()
    const transcriptDisplay = computed(() => {
        let text = prependTextForError
        if (transcriptResults.value == undefined) return;
        for (let i of transcriptResults.value){
            text += i[0].transcript;
        }
        return text
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
        transcriptResults.value = event.results
    }
    recognition.onend = (event) => {
        prependTextForError = transcriptDisplay.value
        
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

    return {recognition: recognition, transcriptDisplay: transcriptDisplay, startBtnPressed: startBtnPressed, stopBtnPressed: stopBtnPressed}
}

// let userStopFlug = false
// let prependTextForError = ""
// const transcriptResults = ref();
// const tsDsp = computed(() => {
//     let text = prependTextForError
//     if (transcriptResults.value == undefined) return;
//     for (let i of transcriptResults.value){
//         text += i[0].transcript;
//     }
//     return text
// })
// const Speechrecognition = window.speechRecognition || webkitSpeechRecognition;
// const recognition = new Speechrecognition();
// recognition.continuous = true;
// recognition.lang = "ja-JP";
// recognition.interimResults = true;
// recognition.maxAlternatives = 3;
// recognition.onresult = (event) => {
//     transcriptResults.value = event.results
//     };
// recognition.onend = (event) => {
//     console.log("end!!")
//     console.log(event)
//     console.log(recognition)
//     prependTextForError = tsDsp.value
    
//     if (userStopFlug) {
//         userStopFlug = false;
//     } else {
//         recognition.start();
//     }
// }
// recognition.onerror = (event) => {
//     console.log("error!!")
//     console.log(event)
// }