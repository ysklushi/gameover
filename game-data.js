// --- START OF FILE game-data.js ---

// =================================================================
// 遊戲資料庫 (Game Database)
// 此檔案專門存放遊戲所需的靜態資料，例如題庫、卡片效果等。
// =================================================================

// 題庫數據 (由各部分組合而成)
// 這裡會合併來自所有 question-partX.js 的資料
// --- START OF JAVASCRIPT FIX ---
// 修正：安全地合併題庫，避免因部分題目檔遺失而導致整個遊戲崩潰。
// 透過 `typeof ... !== 'undefined'` 檢查每個題庫部分變數是否存在，
// 如果存在就將其加入，如果不存在就加入一個空陣列，避免產生錯誤。
const questionBank = [
    ...(typeof questionBankPart1 !== 'undefined' ? questionBankPart1 : []),
    ...(typeof questionBankPart2 !== 'undefined' ? questionBankPart2 : []),
    ...(typeof questionBankPart3 !== 'undefined' ? questionBankPart3 : []),
    ...(typeof questionBankPart4 !== 'undefined' ? questionBankPart4 : []),
    ...(typeof questionBankPart5 !== 'undefined' ? questionBankPart5 : [])
];
// --- END OF JAVASCRIPT FIX ---

// 命運卡片
const fateCards = [
    { id: 1, title: "勞檢突擊！", description: "勞動檢查員突然來訪，發現你準備充分，獲得嘉獎！", effect: "+2❤️", hearts: 2 },
    { id: 2, title: "加班費計算錯誤", description: "發現自己加班費計算有誤，趕緊補救！", effect: "-0.5❤️", hearts: -0.5 },
    { id: 3, title: "工會力量大！", description: "參加工會活動，學到許多勞動權益知識！", effect: "+1❤️", hearts: 1 },
    { id: 4, title: "法條更新了！", description: "法條有新修正，需要重新學習適應。", effect: "-1❤️", hearts: -1 },
    { id: 5, title: "勞基法達人認證", description: "通過專業認證考試，實力大增！", effect: "+2❤️", hearts: 2 }
];

// 機會卡片
const chanceCards = [
    { id: 1, title: "法官明察秋毫", description: "法官讚賞你的法律素養，案件順利解決！", effect: "+2❤️", hearts: 2 },
    { id: 2, title: "證據不足", description: "關鍵證據準備不足，影響案件進行。", effect: "-1❤️", hearts: -1 },
    { id: 3, title: "和解成功", description: "促成勞資雙方達成和解協議！", effect: "+1❤️", hearts: 1 },
    { id: 4, title: "程序瑕疵", description: "訴訟程序出現小瑕疵，需要補正。", effect: "-0.5❤️", hearts: -0.5 },
    { id: 5, title: "專家證人", description: "找到權威專家作為證人，大大加分！", effect: "+2❤️", hearts: 2 }
];