// ชุดสีพาสเทลสำหรับแผนที่
const regionColors = ['#ff9999', '#ffcc80', '#81c784', '#64b5f6', '#9575cd', '#e57373', '#f06292', '#b0bec5'];

// ข้อมูลภูมิภาคและจังหวัด (อัปเดตลิงก์รูปภาพเป็น Special:FilePath ของ Wikimedia Commons เพื่อกันลิงก์เสีย)
const japanData = [
    { 
        region: "北海道", romaji: "Hokkaido", 
        img: "https://commons.wikimedia.org/wiki/Special:FilePath/Hokkaido_in_Japan_(de-facto).svg", 
        prefectures: [{ id: 1, kanji: "北海道", romaji: "Hokkaidō" }] 
    },
    { 
        region: "東北", romaji: "Tohoku", 
        img: "https://commons.wikimedia.org/wiki/Special:FilePath/Tohoku_Region_in_Japan.svg", 
        prefectures: [
            { id: 2, kanji: "青森県", romaji: "Aomori" }, { id: 3, kanji: "岩手県", romaji: "Iwate" }, 
            { id: 4, kanji: "宮城県", romaji: "Miyagi" }, { id: 5, kanji: "秋田県", romaji: "Akita" }, 
            { id: 6, kanji: "山形県", romaji: "Yamagata" }, { id: 7, kanji: "福島県", romaji: "Fukushima" }
        ] 
    },
    { 
        region: "関東", romaji: "Kanto", 
        img: "https://commons.wikimedia.org/wiki/Special:FilePath/Kanto_Region_in_Japan.svg", 
        prefectures: [
            { id: 8, kanji: "茨城県", romaji: "Ibaraki" }, { id: 9, kanji: "栃木県", romaji: "Tochigi" }, 
            { id: 10, kanji: "群馬県", romaji: "Gunma" }, { id: 11, kanji: "埼玉県", romaji: "Saitama" }, 
            { id: 12, kanji: "千葉県", romaji: "Chiba" }, { id: 13, kanji: "東京都", romaji: "Tokyo" }, 
            { id: 14, kanji: "神奈川県", romaji: "Kanagawa" }
        ] 
    },
    { 
        region: "中部", romaji: "Chubu", 
        img: "https://commons.wikimedia.org/wiki/Special:FilePath/Chubu_Region_in_Japan.svg", 
        prefectures: [
            { id: 15, kanji: "新潟県", romaji: "Niigata" }, { id: 16, kanji: "富山県", romaji: "Toyama" }, 
            { id: 17, kanji: "石川県", romaji: "Ishikawa" }, { id: 18, kanji: "福井県", romaji: "Fukui" }, 
            { id: 19, kanji: "山梨県", romaji: "Yamanashi" }, { id: 20, kanji: "長野県", romaji: "Nagano" }, 
            { id: 21, kanji: "岐阜県", romaji: "Gifu" }, { id: 22, kanji: "静岡県", romaji: "Shizuoka" }, 
            { id: 23, kanji: "愛知県", romaji: "Aichi" }
        ] 
    },
    { 
        region: "近畿", romaji: "Kansai", 
        img: "https://commons.wikimedia.org/wiki/Special:FilePath/Kansai_Region_in_Japan.svg", 
        prefectures: [
            { id: 24, kanji: "三重県", romaji: "Mie" }, { id: 25, kanji: "滋賀県", romaji: "Shiga" }, 
            { id: 26, kanji: "京都府", romaji: "Kyoto" }, { id: 27, kanji: "大阪府", romaji: "Osaka" }, 
            { id: 28, kanji: "兵庫県", romaji: "Hyogo" }, { id: 29, kanji: "奈良県", romaji: "Nara" }, 
            { id: 30, kanji: "和歌山県", romaji: "Wakayama" }
        ] 
    },
    { 
        region: "中国", romaji: "Chugoku", 
        img: "https://commons.wikimedia.org/wiki/Special:FilePath/Chugoku_Region_in_Japan.svg", 
        prefectures: [
            { id: 31, kanji: "鳥取県", romaji: "Tottori" }, { id: 32, kanji: "島根県", romaji: "Shimane" }, 
            { id: 33, kanji: "岡山県", romaji: "Okayama" }, { id: 34, kanji: "広島県", romaji: "Hiroshima" }, 
            { id: 35, kanji: "山口県", romaji: "Yamaguchi" }
        ] 
    },
    { 
        region: "四国", romaji: "Shikoku", 
        img: "https://commons.wikimedia.org/wiki/Special:FilePath/Shikoku_Region_in_Japan.svg", 
        prefectures: [
            { id: 36, kanji: "徳島県", romaji: "Tokushima" }, { id: 37, kanji: "香川県", romaji: "Kagawa" }, 
            { id: 38, kanji: "愛媛県", romaji: "Ehime" }, { id: 39, kanji: "高知県", romaji: "Kochi" }
        ] 
    },
    { 
        region: "九州・沖縄", romaji: "Kyushu", 
        img: "https://commons.wikimedia.org/wiki/Special:FilePath/Kyushu_Region_in_Japan.svg", 
        prefectures: [
            { id: 40, kanji: "福岡県", romaji: "Fukuoka" }, { id: 41, kanji: "佐賀県", romaji: "Saga" }, 
            { id: 42, kanji: "長崎県", romaji: "Nagasaki" }, { id: 43, kanji: "熊本県", romaji: "Kumamoto" }, 
            { id: 44, kanji: "大分県", romaji: "Oita" }, { id: 45, kanji: "宮崎県", romaji: "Miyazaki" }, 
            { id: 46, kanji: "鹿児島県", romaji: "Kagoshima" }, { id: 47, kanji: "沖縄県", romaji: "Okinawa" }
        ] 
    }
];
