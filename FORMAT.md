# Формат задач для сайта-тренажёра

Сайт: `C:\Users\Fara\Desktop\tesis\site\`
- `index.html` — каркас сайта (делает сборщик).
- `gorevler/<ders>-hafta<N>.js` — задачи, один файл на неделю.
- `gorevler/liste.js` — список подключённых файлов задач (их подгружает сайт).

Весь текст задач и решений — **на турецком**.

## Список файлов: `gorevler/liste.js`

```js
window.DERSLER = [
  {
    id: "tesis",
    ad: "Tesis Tasarımı ve Malzeme Aktarma Sistemleri",
    dosyalar: ["gorevler/tesis-hafta3.js", "gorevler/tesis-hafta5.js"]
  }
];
```

Сайт подгружает файлы из `dosyalar` через `<script>`, а не через fetch: так он работает и как файл на компьютере, и на claude.ai, и на GitHub Pages.

## Файл задач: `gorevler/tesis-hafta3.js`

```js
window.GOREV_BANKASI = window.GOREV_BANKASI || [];
window.GOREV_BANKASI.push(
  {
    ders: "tesis",
    id: "tesis-h3-fire-01",          // уникальный, латиница/цифры/дефис
    hafta: 3,
    konu: "Fire Oranı",               // тема; показывается ТОЛЬКО после ответа
    kaynak: "Hafta 3, slayt 14",      // откуда задача (или "Hafta 3'e benzer")
    baslik: "Üç aşamalı hatta hammadde ihtiyacı",
    soru: "<p>...</p><table>...</table>",   // HTML: p, ul/ol, table, b, i, sub, sup, inline <svg>
    cevapTipi: "sayi",                // "sayi" — можно ввести число; "yok" — только кнопка «Çözümü göster»
    cevaplar: [                       // только для "sayi"; можно несколько полей
      { etiket: "Gerekli hammadde (adet)", deger: 1263.2, tolerans: 1, birim: "adet" }
    ],
    mantik: "<p>2–4 cümle: hangi fikirle çözülür.</p>",   // логика решения
    cozum: "<ol><li>Adım 1 ...</li><li>...</li></ol>"    // полное решение по шагам
  }
);
```

Правила:
- `tolerans` — абсолютный допуск: ответ верный, если |ввод − deger| ≤ tolerans. Учитывать округления (например, 0.5 для штук, 0.01 для долей).
- Ввод должен принимать и запятую, и точку как десятичный разделитель.
- Если ответ — раскладка, схема, таблица или выбор, то `cevapTipi: "yok"`, `cevaplar: []`.
- Рисунки — только inline `<svg>` в HTML (никаких внешних картинок). Цвета в svg задавать через `currentColor` или CSS-переменные сайта, чтобы работало в светлой и тёмной теме.
- Никакого JavaScript внутри текстов задач.
