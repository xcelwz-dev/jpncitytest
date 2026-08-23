// ชุดสีภูมิภาค (รองรับทั้งโหมดสว่างและมืด)
const regionColors = ['#ff7675', '#f3a683', '#55efc4', '#74b9ff', '#a29bfe', '#e17055', '#fd79a8', '#b2bec3'];

// ข้อมูลทั้งหมด 47 จังหวัด พร้อมคำอ่านและคำแปลภาษาไทย
const japanData = [
    { region: "北海道", romaji: "Hokkaido", thai: "ฮอกไกโด", color: regionColors[0], prefectures: [
        { id: 1, kanji: "北海道", romaji: "Hokkaidō", thai: "ฮอกไกโด" }
    ]},
    { region: "東北", romaji: "Tohoku", thai: "โทโฮคุ", color: regionColors[1], prefectures: [
        { id: 2, kanji: "青森県", romaji: "Aomori", thai: "อาโอโมริ" },
        { id: 3, kanji: "岩手県", romaji: "Iwate", thai: "อิวาเตะ" },
        { id: 4, kanji: "宮城県", romaji: "Miyagi", thai: "มิยางิ" },
        { id: 5, kanji: "秋田県", romaji: "Akita", thai: "อากิตะ" },
        { id: 6, kanji: "山形県", romaji: "Yamagata", thai: "ยามางาตะ" },
        { id: 7, kanji: "福島県", romaji: "Fukushima", thai: "ฟุกุชิมะ" }
    ]},
    { region: "関東", romaji: "Kanto", thai: "คันโต", color: regionColors[2], prefectures: [
        { id: 8, kanji: "茨城県", romaji: "Ibaraki", thai: "อิบารากิ" },
        { id: 9, kanji: "栃木県", romaji: "Tochigi", thai: "โทจิงิ" },
        { id: 10, kanji: "群馬県", romaji: "Gunma", thai: "กุมมะ" },
        { id: 11, kanji: "埼玉県", romaji: "Saitama", thai: "ไซตามะ" },
        { id: 12, kanji: "千葉県", romaji: "Chiba", thai: "ชิบะ" },
        { id: 13, kanji: "東京都", romaji: "Tokyo", thai: "โตเกียว" },
        { id: 14, kanji: "神奈川県", romaji: "Kanagawa", thai: "คานางาวะ" }
    ]},
    { region: "中部", romaji: "Chubu", thai: "ชูบุ", color: regionColors[3], prefectures: [
        { id: 15, kanji: "新潟県", romaji: "Niigata", thai: "นีงาตะ" },
        { id: 16, kanji: "富山県", romaji: "Toyama", thai: "โทยามะ" },
        { id: 17, kanji: "石川県", romaji: "Ishikawa", thai: "อิชิกาวะ" },
        { id: 18, kanji: "福井県", romaji: "Fukui", thai: "ฟุกุอิ" },
        { id: 19, kanji: "山梨県", romaji: "Yamanashi", thai: "ยามานาชิ" },
        { id: 20, kanji: "長野県", romaji: "Nagano", thai: "นางาโนะ" },
        { id: 21, kanji: "岐阜県", romaji: "Gifu", thai: "กิฟุ" },
        { id: 22, kanji: "静岡県", romaji: "Shizuoka", thai: "ชิซุโอกะ" },
        { id: 23, kanji: "愛知県", romaji: "Aichi", thai: "ไอจิ" }
    ]},
    { region: "近畿", romaji: "Kansai (Kinki)", thai: "คันไซ", color: regionColors[4], prefectures: [
        { id: 24, kanji: "三重県", romaji: "Mie", thai: "มิเอะ" },
        { id: 25, kanji: "滋賀県", romaji: "Shiga", thai: "ชิงะ" },
        { id: 26, kanji: "京都府", romaji: "Kyoto", thai: "เกียวโต" },
        { id: 27, kanji: "大阪府", romaji: "Osaka", thai: "โอซาก้า" },
        { id: 28, kanji: "兵庫県", romaji: "Hyogo", thai: "เฮียวโงะ" },
        { id: 29, kanji: "奈良県", romaji: "Nara", thai: "นารา" },
        { id: 30, kanji: "和歌山県", romaji: "Wakayama", thai: "วากายามะ" }
    ]},
    { region: "中国", romaji: "Chugoku", thai: "ชูโงกุ", color: regionColors[5], prefectures: [
        { id: 31, kanji: "鳥取県", romaji: "Tottori", thai: "ทตโตริ" },
        { id: 32, kanji: "島根県", romaji: "Shimane", thai: "ชิมาเนะ" },
        { id: 33, kanji: "岡山県", romaji: "Okayama", thai: "โอกายามะ" },
        { id: 34, kanji: "広島県", romaji: "Hiroshima", thai: "ฮิโรชิมะ" },
        { id: 35, kanji: "山口県", romaji: "Yamaguchi", thai: "ยามางุจิ" }
    ]},
    { region: "四国", romaji: "Shikoku", thai: "ชิโกกุ", color: regionColors[6], prefectures: [
        { id: 36, kanji: "徳島県", romaji: "Tokushima", thai: "โทคุชิมะ" },
        { id: 37, kanji: "香川県", romaji: "Kagawa", thai: "คางาวะ" },
        { id: 38, kanji: "愛媛県", romaji: "Ehime", thai: "เอฮิเมะ" },
        { id: 39, kanji: "高知県", romaji: "Kochi", thai: "โคจิ" }
    ]},
    { region: "九州・沖縄", romaji: "Kyushu & Okinawa", thai: "คิวชูและโอกินาวะ", color: regionColors[7], prefectures: [
        { id: 40, kanji: "福岡県", romaji: "Fukuoka", thai: "ฟุกุโอกะ" },
        { id: 41, kanji: "佐賀県", romaji: "Saga", thai: "ซางะ" },
        { id: 42, kanji: "長崎県", romaji: "Nagasaki", thai: "นางาซากิ" },
        { id: 43, kanji: "熊本県", romaji: "Kumamoto", thai: "คุมาโมโตะ" },
        { id: 44, kanji: "大分県", romaji: "Oita", thai: "โออิตะ" },
        { id: 45, kanji: "宮崎県", romaji: "Miyazaki", thai: "มิยาซากิ" },
        { id: 46, kanji: "鹿児島県", romaji: "Kagoshima", thai: "คาโงชิมะ" },
        { id: 47, kanji: "沖縄県", romaji: "Okinawa", thai: "โอกินาวะ" }
    ]}
];
