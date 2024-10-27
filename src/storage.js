import { ref } from "vue"

const storageName = "storageOfTranscriptionApp"
const allData = ref()

// 初期化
if (window.localStorage.getItem(storageName) == null) {
    window.localStorage.setItem(storageName, "[]")
    allData.value = []
} else {
    allData.value = JSON.parse(window.localStorage.getItem(storageName))
}

export function getAllData() {
    return allData
}

export function createData(data) {
    data.id = generateUUID()
    data.date = new Date().toLocaleString()
    if (data.title == "") {
        return "タイトルが入力されていません"
    } else if (data.document == "") {
        return "議事録内容が入力されていません"
    }
    allData.value.push(data)
    saveStorageData(allData)
    return ""
}

export function updateData(data) {
    for (let i of allData.value) {
        if (i.id == data.id) {
            if (data.title == "") {
                return "タイトルが入力されていません"
            } else if (data.document == "") {
                return "議事録内容が入力されていません"
            }
            i.title = data.title
            i.document = data.document
            i.date = new Date().toLocaleString()
        }
    }
    saveStorageData(allData)
    return ""
}

export function deleteData(id) {
    allData.value = allData.value.filter(item => item.id != id)
    saveStorageData(allData)
}

function saveStorageData(localData) {
    window.localStorage.setItem(storageName, JSON.stringify(localData.value))
}

function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0,
          v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
}
