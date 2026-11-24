window.GOREV_BANKASI = window.GOREV_BANKASI || [];
window.GOREV_BANKASI.push(
  {
    "ders": "tesis",
    "id": "tesis-h2-fire-01",
    "hafta": 2,
    "konu": "Fire Oranı (Iskarta) ve Üretim Miktarı",
    "kaynak": "Hafta 2, slayt 53-54 (Örnek-1)",
    "baslik": "Seri bağlı üç operasyonda ilk operasyona girmesi gereken parça sayısı",
    "soru": "<p>Pazar tahmini <b>97.000 parça</b> olan bir ürün, seri bağlı üç farklı süreçten sırasıyla geçmektedir: <b>tornalama</b>, <b>frezeleme</b> ve <b>delme</b>. Süreçlere ait ıskarta (fire) oranları sırasıyla <b>%4</b>, <b>%1</b> ve <b>%3</b> olarak tahmin edilmektedir.</p><p>Bir önceki operasyondan çıkan parçaların tamamı bir sonraki operasyona girmektedir. Müşteri talebinin (97.000 adet hatasız parça) karşılanabilmesi için:</p><ol><li>delme operasyonuna girmesi gereken parça sayısını,</li><li>frezeleme operasyonuna girmesi gereken parça sayısını,</li><li>ilk operasyonda, yani tornalama sürecine girmesi gereken parça sayısını hesaplayınız.</li></ol>",
    "cevapTipi": "sayi",
    "cevaplar": [
      {
        "etiket": "Delmeye giren parça (adet)",
        "deger": 100000,
        "tolerans": 1,
        "birim": "adet"
      },
      {
        "etiket": "Frezelemeye giren parça (adet)",
        "deger": 101010.1,
        "tolerans": 1,
        "birim": "adet"
      },
      {
        "etiket": "Tornalamaya giren parça (adet)",
        "deger": 105218.86,
        "tolerans": 1.5,
        "birim": "adet"
      }
    ],
    "mantik": "<p>Fire oranı f olan bir operasyondan çıkan sağlam parça, operasyona giren parçanın (1 − f) katıdır. Bu yüzden operasyona girmesi gereken miktar, istenen çıkış miktarının (1 − f)'ye bölünmesiyle bulunur. Hesap, talepten başlayıp süreç akışının tersine, delmeden tornalamaya doğru geriye doğru yapılır.</p>",
    "cozum": "<ol><li>Son operasyon delme (fire %3). Çıkışta 97.000 sağlam parça lazım: I<sub>3</sub> = 97.000 / (1 − 0,03) = 97.000 / 0,97 = <b>100.000</b> parça.</li><li>Frezeleme (fire %1) çıkışında 100.000 parça gerekiyor: I<sub>2</sub> = 100.000 / (1 − 0,01) = 100.000 / 0,99 = <b>101.010,1</b> parça.</li><li>Tornalama (fire %4) çıkışında 101.010,1 parça gerekiyor: I<sub>1</sub> = 101.010,1 / (1 − 0,04) = 101.010,1 / 0,96 = <b>105.218,9</b> parça.</li><li>Tek adımda da bulunur: I<sub>1</sub> = 97.000 / [(1 − 0,04)(1 − 0,01)(1 − 0,03)] = 97.000 / 0,921888 ≈ 105.218,9.</li><li>Parça sayısı tam sayı olmalı ve sağlam çıkış 97.000'in altına düşmemeli, o yüzden yukarı yuvarlayıp <b>105.219 adet</b> parça ile başlanır. Slaytta aynı sonuç 105.218 olarak gösterilmiştir (slaytta ondalık kısım atılmıştır); cevap kontrolünde ±1,5 tolerans verilmiştir.</li><li>Kontrol: 105.219 × 0,96 × 0,99 × 0,97 ≈ 97.000,1 ≥ 97.000.</li></ol><p><i>Not:</i> Fire oranlarını toplayıp (%4 + %1 + %3 = %8) 97.000 / 0,92 yapmak yanlıştır (≈ 105.435); her operasyonun firesi, o operasyona <b>giren</b> miktar üzerinden hesaplanır.</p>"
  },
  {
    "ders": "tesis",
    "id": "tesis-h2-fire-02",
    "hafta": 2,
    "konu": "Fire Oranı (Iskarta) ve Üretim Miktarı",
    "kaynak": "Hafta 2, slayt 55 (Örnek-2)",
    "baslik": "Seri bağlı olmayan ürün süreçlerinde A ve B parçası girdi miktarları",
    "soru": "<p>Bir ürün iki parçadan oluşur. <b>Parça A</b> sırasıyla 1. ve 2. operasyondan, <b>Parça B</b> yalnızca 3. operasyondan geçer. Daha sonra bir A ve bir B parçası <b>4. operasyonda birleştirilir</b> ve ürün 5. operasyondan geçerek sistemden çıkar (süreçler seri bağlı değildir). Operasyonların fire oranları şekilde verilmiştir: s<sub>1</sub> = %1, s<sub>2</sub> = %2, s<sub>3</sub> = %2, s<sub>4</sub> = %1, s<sub>5</sub> = %4.</p><svg viewBox=\"0 0 420 335\" width=\"360\" role=\"img\" aria-label=\"Seri bağlı olmayan üretim akışı: Parça A (1-2) ve Parça B (3), 4. operasyonda birleşir, ardından 5. operasyon\" style=\"max-width:100%;height:auto;color:inherit\" xmlns=\"http://www.w3.org/2000/svg\"><defs><marker id=\"ok2\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"currentColor\"/></marker></defs><text x=\"110\" y=\"16\" text-anchor=\"middle\" font-size=\"13\" fill=\"currentColor\">Parça A</text><text x=\"310\" y=\"16\" text-anchor=\"middle\" font-size=\"13\" fill=\"currentColor\">Parça B</text><line x1=\"110\" y1=\"22\" x2=\"110\" y2=\"38\" stroke=\"currentColor\" stroke-width=\"1.5\" marker-end=\"url(#ok2)\"/><circle cx=\"110\" cy=\"58\" r=\"18\" fill=\"currentColor\" fill-opacity=\"0.08\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"110\" y=\"63\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">1</text><line x1=\"110\" y1=\"76\" x2=\"110\" y2=\"98\" stroke=\"currentColor\" stroke-width=\"1.5\" marker-end=\"url(#ok2)\"/><circle cx=\"110\" cy=\"118\" r=\"18\" fill=\"currentColor\" fill-opacity=\"0.08\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"110\" y=\"123\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">2</text><line x1=\"310\" y1=\"22\" x2=\"310\" y2=\"98\" stroke=\"currentColor\" stroke-width=\"1.5\" marker-end=\"url(#ok2)\"/><circle cx=\"310\" cy=\"118\" r=\"18\" fill=\"currentColor\" fill-opacity=\"0.08\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"310\" y=\"123\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">3</text><polyline points=\"110,136 110,200 290,200\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" marker-end=\"url(#ok2)\"/><line x1=\"310\" y1=\"136\" x2=\"310\" y2=\"180\" stroke=\"currentColor\" stroke-width=\"1.5\" marker-end=\"url(#ok2)\"/><circle cx=\"310\" cy=\"200\" r=\"18\" fill=\"currentColor\" fill-opacity=\"0.08\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"310\" y=\"205\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">4</text><line x1=\"310\" y1=\"218\" x2=\"310\" y2=\"244\" stroke=\"currentColor\" stroke-width=\"1.5\" marker-end=\"url(#ok2)\"/><circle cx=\"310\" cy=\"264\" r=\"18\" fill=\"currentColor\" fill-opacity=\"0.08\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"310\" y=\"269\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">5</text><line x1=\"310\" y1=\"282\" x2=\"310\" y2=\"306\" stroke=\"currentColor\" stroke-width=\"1.5\" marker-end=\"url(#ok2)\"/><text x=\"310\" y=\"326\" text-anchor=\"middle\" font-size=\"12\" fill=\"currentColor\">100.000 adet (hatasız ürün)</text><text x=\"84\" y=\"62\" text-anchor=\"end\" font-size=\"12\" fill=\"currentColor\">%1</text><text x=\"84\" y=\"122\" text-anchor=\"end\" font-size=\"12\" fill=\"currentColor\">%2</text><text x=\"284\" y=\"122\" text-anchor=\"end\" font-size=\"12\" fill=\"currentColor\">%2</text><text x=\"284\" y=\"224\" text-anchor=\"end\" font-size=\"12\" fill=\"currentColor\">%1</text><text x=\"284\" y=\"268\" text-anchor=\"end\" font-size=\"12\" fill=\"currentColor\">%4</text><text x=\"84\" y=\"76\" text-anchor=\"end\" font-size=\"10\" fill=\"currentColor\">fire</text></svg><p>Sistemden <b>100.000 adet</b> hatasız ürün çıkması gerekiyor. Hesap, hattın sonundan başa doğru (geriye doğru) yapılır; her adımda sonuç slayttaki gibi bir sonraki adıma yuvarlanmış değerle taşınabilir. Bulunuz:</p><ol><li>5. operasyona giren parça sayısını,</li><li>4. operasyona giren parça sayısını,</li><li>sisteme verilmesi gereken B parçası sayısını,</li><li>sisteme verilmesi gereken A parçası sayısını.</li></ol>",
    "cevapTipi": "sayi",
    "cevaplar": [
      {
        "etiket": "5. operasyona giren (adet)",
        "deger": 104166.67,
        "tolerans": 1,
        "birim": "adet"
      },
      {
        "etiket": "4. operasyona giren (adet)",
        "deger": 105218.86,
        "tolerans": 1.5,
        "birim": "adet"
      },
      {
        "etiket": "Sisteme verilecek B parçası (adet)",
        "deger": 107366.18,
        "tolerans": 1,
        "birim": "adet"
      },
      {
        "etiket": "Sisteme verilecek A parçası (adet)",
        "deger": 108450.69,
        "tolerans": 1.5,
        "birim": "adet"
      }
    ],
    "mantik": "<p>Operasyona girmesi gereken miktar, çıkması istenen miktarın (1 − fire oranı) değerine bölünmesiyle bulunur. Hat seri olmadığı için iki kol 4. operasyona birleşene kadar ayrı hesaplanır: 4. operasyonun girdisi hem A kolunun (2. operasyon çıkışı) hem B kolunun (3. operasyon çıkışı) çıkış miktarını belirler. Hesap sondan başa doğru ilerler.</p>",
    "cozum": "<ol><li>5. operasyon (fire %4): I<sub>5</sub> = 100.000 / 0,96 = <b>104.166,7</b> ≈ 104.167.</li><li>4. operasyon (fire %1): I<sub>4</sub> = 104.167 / 0,99 = <b>105.218,9</b> ≈ 105.219. Bir A ve bir B birleştiği için 2. ve 3. operasyonların çıkışı da 105.219 olmalıdır.</li><li>B kolu, 3. operasyon (fire %2): I<sub>3</sub> = 105.219 / 0,98 = <b>107.366,2</b> ≈ 107.366 adet B parçası sisteme girmelidir (B sadece 3. operasyondan geçer).</li><li>A kolu, 2. operasyon (fire %2): I<sub>2</sub> = 105.219 / 0,98 = 107.366 (1. operasyonun çıkışı).</li><li>A kolu, 1. operasyon (fire %1): I<sub>1</sub> = 107.366 / 0,99 = <b>108.450,7</b> ≈ 108.451 adet A parçası sisteme girmelidir.</li></ol><p>Slayttaki sonuç: 107.366 adet B, 108.451 adet A. Yuvarlamasız hesapta A = 108.450,69 çıkar; fark yuvarlamadandır, cevap alanında ±1,5 tolerans verilmiştir.</p>"
  },
  {
    "ders": "tesis",
    "id": "tesis-h2-rework-01",
    "hafta": 2,
    "konu": "Fire Oranı (Iskarta) ve Üretim Miktarı",
    "kaynak": "Hafta 2, slayt 57-58 (Örnek-3)",
    "baslik": "Yeniden işleme (rework) ve fire oranları dikkate alınarak üretim miktarı",
    "soru": "<p>Pazar tahmini <b>50.000 adet</b> parçadır. Tek süreç ve tek operasyon vardır; operasyon fire oranı <b>%5</b>'tir. Hurdaya ayrılan parçalar <b>yeniden işlenebilmektedir</b> ve yeniden işlemedeki fire oranı <b>%40</b>'tır.</p><p>Slayttaki gösterim: P = operasyon fire oranı, R = yeniden işleme sırasındaki fire oranı; müşteriye ulaşacak miktar Q = I·(1 − P) + I·P·(1 − R).</p><ol><li>Operasyon başında üretimine başlanan parça sayısı ne kadardır?</li><li>Operasyonda ne kadar fire (hurda) verilir?</li><li>Hatasız (ilk geçişte sağlam çıkan) parça sayısı kaçtır?</li><li>Yeniden işleme ile kurtarılan parça sayısı kaçtır?</li><li>Müşteri talebi karşılanabilir mi?</li></ol>",
    "cevapTipi": "sayi",
    "cevaplar": [
      {
        "etiket": "Başlanan parça sayısı I (adet)",
        "deger": 51020.41,
        "tolerans": 1,
        "birim": "adet"
      },
      {
        "etiket": "Fire (hurdaya ayrılan) (adet)",
        "deger": 2551.02,
        "tolerans": 1,
        "birim": "adet"
      },
      {
        "etiket": "Hatasız üretim (ilk geçiş) (adet)",
        "deger": 48469.39,
        "tolerans": 1,
        "birim": "adet"
      },
      {
        "etiket": "Yeniden işlemeyle kurtarılan (adet)",
        "deger": 1530.61,
        "tolerans": 1,
        "birim": "adet"
      }
    ],
    "mantik": "<p>Hurdaya ayrılan I·P parçanın (1 − R) oranı yeniden işlemeyle kurtarılır. Bu yüzden operasyondan müşteriye giden miktar, ilk geçişte sağlam çıkanlar ile kurtarılanların toplamıdır: Q = I·[(1 − P) + P·(1 − R)]. Q = 50.000 olacak şekilde I çekilir.</p>",
    "cozum": "<ol><li>I·(1 − 0,05) + I·0,05·(1 − 0,4) = 50.000 → I·(0,95 + 0,03) = I·0,98 = 50.000 → I = <b>51.020,4</b> ≈ 51.020 adet.</li><li>Fire: 51.020 × 0,05 = <b>2.551</b> adet (yuvarlamasız 2.551,02).</li><li>Hatasız üretim: 51.020 − 2.551 = <b>48.469</b> adet.</li><li>Yeniden işlemeyle kurtarılan: 2.551 × 0,6 = <b>1.531</b> adet (yuvarlamasız 1.530,6).</li><li>Kontrol: 48.469 + 1.531 = 50.000. <b>Müşteri talebi karşılanabilir</b> (tam olarak 50.000 adet hatasız ürün elde edilir). Hurdaya giden toplam: 2.551 − 1.531 = 1.020 adet.</li></ol><p>Slayt 58'deki değerlerle aynıdır (51.020; 2.551; 48.469; 1.531). Yuvarlamasız hesapta 51.020,41 / 2.551,02 / 48.469,39 / 1.530,61 çıkar; ±1 tolerans verilmiştir.</p>"
  },
  {
    "ders": "tesis",
    "id": "tesis-h2-montaj-01",
    "hafta": 2,
    "konu": "Fire Oranı (Iskarta) ve Üretim Miktarı",
    "kaynak": "Hafta 2, slayt 59 (Örnek-4, Ödev-1)",
    "baslik": "Montaj içeren süreçte gerekli X, Y ve Z hammadde miktarları",
    "soru": "<p>Son ürüne ait pazar talep tahmini <b>50.000 adet</b>tir. Son ürün iki farklı yarı mamulün (A ve B) montajından elde edilmektedir. Nihai ürünün montajında <b>2 adet A</b> ve <b>1 adet B</b> yarı mamulü kullanılmaktadır.</p><p>A yarı mamulü <b>4 adet X</b> hammaddesi ve <b>3 adet Y</b> hammaddesinden; B yarı mamulü ise <b>1 adet Z</b> ve <b>2 adet Y</b> hammaddesinden oluşmaktadır.</p><p>Parçalar üretilirken ortaya çıkan fire oranları: A yarı mamulü için %3, B yarı mamulü için %2, X hammaddesi için %6, Y hammaddesi için %5, Z hammaddesi için %4'tür.</p><table><thead><tr><th>Parça</th><th>A</th><th>B</th><th>X</th><th>Y</th><th>Z</th></tr></thead><tbody><tr><th>Fire oranı</th><td>%3</td><td>%2</td><td>%6</td><td>%5</td><td>%4</td></tr></tbody></table><p>X, Y ve Z hammaddelerinden montaj işlemi başlangıcında bulundurulması gereken miktarları bulunuz.</p>",
    "cevapTipi": "sayi",
    "cevaplar": [
      {
        "etiket": "X hammaddesi (adet)",
        "deger": 438693,
        "tolerans": 1,
        "birim": "adet"
      },
      {
        "etiket": "Y hammaddesi (adet)",
        "deger": 432967.54,
        "tolerans": 1.6,
        "birim": "adet"
      },
      {
        "etiket": "Z hammaddesi (adet)",
        "deger": 53146.26,
        "tolerans": 1,
        "birim": "adet"
      }
    ],
    "mantik": "<p>Ürün ağacında aşağıdan yukarıya değil, talepten başlayıp geriye doğru gidilir: önce ürün için gereken A ve B (net), sonra fire payıyla başlanması gereken A ve B, ardından bu miktarların içerdiği net hammadde ihtiyacı ve en sonda hammaddenin kendi fire oranıyla brüt hammadde miktarı bulunur. Her adımda gereken miktar (1 − fire) değerine bölünür.</p>",
    "cozum": "<ol><li>Net yarı mamul ihtiyacı: A = 2 × 50.000 = 100.000; B = 1 × 50.000 = 50.000.</li><li>Fire dahil üretilecek yarı mamul: A = 100.000 / 0,97 = 103.092,8; B = 50.000 / 0,98 = 51.020,4.</li><li>Bu miktarlar için net hammadde: X = 4 × 103.092,8 = 412.371,1; Y = 3 × 103.092,8 + 2 × 51.020,4 = 309.278,4 + 102.040,8 = 411.319,2; Z = 1 × 51.020,4 = 51.020,4.</li><li>Hammadde fire payı: X = 412.371,1 / 0,94 = <b>438.692,7 ≈ 438.693</b>; Y = 411.319,2 / 0,95 = <b>432.967,5 ≈ 432.968</b>; Z = 51.020,4 / 0,96 = <b>53.146,3 ≈ 53.147</b>.</li></ol><p>Slayttaki cevap: 438.693 X, 432.966 Y, 53.146 Z. X aynıdır; Y ve Z'deki 1-2 adetlik fark ara değerlerin yuvarlanmasından kaynaklanır. Cevap alanlarında 438.693, 432.966-432.968, 53.146-53.147 kabul edilir.</p>"
  },
  {
    "ders": "tesis",
    "id": "tesis-h2-makine-01",
    "hafta": 2,
    "konu": "Gerekli Makine/Teçhizat Sayısının Belirlenmesi",
    "kaynak": "Hafta 2, slayt 62-64 (Örnek-5)",
    "baslik": "Frezeleme için vardiya başına gerekli tezgah sayısı",
    "soru": "<p>Bir parçanın freze tezgahında işlenme süresi <b>2,8 dakika</b>dır. 8 saatlik bir vardiya boyunca <b>200 adet</b> parça imal edilecektir. Üretim için, 480 dakikanın <b>%80</b>'inde freze tezgahı çalışacaktır. Tezgah çalıştığı sürece, parçalar standart hızın <b>%95</b>'ine eşit bir hızda üretilmektedir.</p><p>Deterministik donanım oranı modeli: F = S·Q / (E·H·R). Burada S = bir birim ürünün standart zamanı, Q = vardiya başına üretilecek ürün sayısı, E = donanım etkinliği, H = makine başına mevcut kullanım süresi, R = güvenilirlik.</p><p>Kaç adet freze tezgahı gerektiğini bulunuz (önce tezgah oranını, sonra satın alınacak/ayrılacak tam sayıyı).</p>",
    "cevapTipi": "sayi",
    "cevaplar": [
      {
        "etiket": "Tezgah oranı F (tezgah/vardiya)",
        "deger": 1.535,
        "tolerans": 0.005,
        "birim": "tezgah"
      },
      {
        "etiket": "Gerekli tezgah sayısı (tam sayı)",
        "deger": 2,
        "tolerans": 0,
        "birim": "adet"
      }
    ],
    "mantik": "<p>Gerekli makine oranı, toplam gerekli sürenin (S·Q) fiilen kullanılabilir süreye (E·H·R) bölünmesiyle bulunur. Kesirli sonuç, makine sayısı tam sayı olacağından bir üst tam sayıya yuvarlanır.</p>",
    "cozum": "<ol><li>S = 2,8 dak/parça, Q = 200 parça/vardiya, H = 480 dak/vardiya, E = 0,95, R = 0,80.</li><li>F = S·Q / (E·H·R) = (2,8 × 200) / (0,95 × 480 × 0,80) = 560 / 364,8 = <b>1,535</b> tezgah/vardiya.</li><li>Tezgah sayısı tam sayı olmalıdır; 1,535 bir üst tam sayıya yuvarlanır: <b>2 freze tezgahı</b>.</li></ol><p>Slayt 64'te sonuç F = 1,535 tezgah/vardiya olarak verilmiştir.</p>"
  },
  {
    "ders": "tesis",
    "id": "tesis-h2-makine-02",
    "hafta": 2,
    "konu": "Gerekli Makine/Teçhizat Sayısının Belirlenmesi",
    "kaynak": "Hafta 2, slayt 67-68 (Örnek-6)",
    "baslik": "Birden fazla operasyonda kullanılan M2 makinesinin toplam sayısı",
    "soru": "<p>M2 makinesi, şekilde 2 ve 3 numaralı operasyonlarda kullanılmaktadır (1. operasyon M1, 4. operasyon M3, 5. operasyon M4 makinesindedir). Parça A 1. ve 2., parça B 3. operasyondan geçer; sonra 4. operasyonda birleştirilip 5. operasyondan çıkar. Fire oranları şekildedir (%1, %2, %2, %1, %4). Sistemden yıllık <b>100.000 adet</b> hatasız ürün çıkması istenmektedir.</p><svg viewBox=\"0 0 420 335\" width=\"360\" role=\"img\" aria-label=\"Seri bağlı olmayan üretim akışı: Parça A (1-2) ve Parça B (3), 4. operasyonda birleşir, ardından 5. operasyon\" style=\"max-width:100%;height:auto;color:inherit\" xmlns=\"http://www.w3.org/2000/svg\"><defs><marker id=\"ok6\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"currentColor\"/></marker></defs><text x=\"110\" y=\"16\" text-anchor=\"middle\" font-size=\"13\" fill=\"currentColor\">Parça A</text><text x=\"310\" y=\"16\" text-anchor=\"middle\" font-size=\"13\" fill=\"currentColor\">Parça B</text><line x1=\"110\" y1=\"22\" x2=\"110\" y2=\"38\" stroke=\"currentColor\" stroke-width=\"1.5\" marker-end=\"url(#ok6)\"/><circle cx=\"110\" cy=\"58\" r=\"18\" fill=\"currentColor\" fill-opacity=\"0.08\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"110\" y=\"63\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">1</text><line x1=\"110\" y1=\"76\" x2=\"110\" y2=\"98\" stroke=\"currentColor\" stroke-width=\"1.5\" marker-end=\"url(#ok6)\"/><circle cx=\"110\" cy=\"118\" r=\"18\" fill=\"currentColor\" fill-opacity=\"0.08\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"110\" y=\"123\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">2</text><line x1=\"310\" y1=\"22\" x2=\"310\" y2=\"98\" stroke=\"currentColor\" stroke-width=\"1.5\" marker-end=\"url(#ok6)\"/><circle cx=\"310\" cy=\"118\" r=\"18\" fill=\"currentColor\" fill-opacity=\"0.08\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"310\" y=\"123\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">3</text><polyline points=\"110,136 110,200 290,200\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" marker-end=\"url(#ok6)\"/><line x1=\"310\" y1=\"136\" x2=\"310\" y2=\"180\" stroke=\"currentColor\" stroke-width=\"1.5\" marker-end=\"url(#ok6)\"/><circle cx=\"310\" cy=\"200\" r=\"18\" fill=\"currentColor\" fill-opacity=\"0.08\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"310\" y=\"205\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">4</text><line x1=\"310\" y1=\"218\" x2=\"310\" y2=\"244\" stroke=\"currentColor\" stroke-width=\"1.5\" marker-end=\"url(#ok6)\"/><circle cx=\"310\" cy=\"264\" r=\"18\" fill=\"currentColor\" fill-opacity=\"0.08\" stroke=\"currentColor\" stroke-width=\"1.5\"/><text x=\"310\" y=\"269\" text-anchor=\"middle\" font-size=\"14\" fill=\"currentColor\">5</text><line x1=\"310\" y1=\"282\" x2=\"310\" y2=\"306\" stroke=\"currentColor\" stroke-width=\"1.5\" marker-end=\"url(#ok6)\"/><text x=\"310\" y=\"326\" text-anchor=\"middle\" font-size=\"12\" fill=\"currentColor\">100.000 adet (hatasız ürün)</text><text x=\"84\" y=\"62\" text-anchor=\"end\" font-size=\"12\" fill=\"currentColor\">%1</text><text x=\"84\" y=\"122\" text-anchor=\"end\" font-size=\"12\" fill=\"currentColor\">%2</text><text x=\"284\" y=\"122\" text-anchor=\"end\" font-size=\"12\" fill=\"currentColor\">%2</text><text x=\"284\" y=\"224\" text-anchor=\"end\" font-size=\"12\" fill=\"currentColor\">%1</text><text x=\"284\" y=\"268\" text-anchor=\"end\" font-size=\"12\" fill=\"currentColor\">%4</text><text x=\"84\" y=\"76\" text-anchor=\"end\" font-size=\"10\" fill=\"currentColor\">fire</text><text x=\"136\" y=\"62\" text-anchor=\"start\" font-size=\"12\" fill=\"currentColor\">M1</text><text x=\"136\" y=\"122\" text-anchor=\"start\" font-size=\"12\" fill=\"currentColor\">M2</text><text x=\"336\" y=\"122\" text-anchor=\"start\" font-size=\"12\" fill=\"currentColor\">M2</text><text x=\"336\" y=\"204\" text-anchor=\"start\" font-size=\"12\" fill=\"currentColor\">M3</text><text x=\"336\" y=\"268\" text-anchor=\"start\" font-size=\"12\" fill=\"currentColor\">M4</text></svg><ul><li>M2 makinesindeki standart operasyon süreleri birim başına: 2. operasyon <b>0,043 saat</b>, 3. operasyon <b>0,022 saat</b>.</li><li>M2 makinesinin etkinliği: 2. operasyon için <b>%98</b>, 3. operasyon için <b>%90</b>.</li><li>M2 makinesinin her iki operasyon için güvenilirlik faktörü <b>%99</b>'dur.</li><li>Makine için yıllık mevcut kullanım süresi <b>2000 saat</b>tir.</li></ul><p>Her operasyon için makine oranını F = S·Q / (E·H·R) ile hesaplayınız (Q: o operasyona yıllık giren parça sayısı) ve gerekli toplam M2 makinesi sayısını bulunuz.</p>",
    "cevapTipi": "sayi",
    "cevaplar": [
      {
        "etiket": "2. ve 3. operasyona yıllık giren parça (adet)",
        "deger": 107366,
        "tolerans": 1,
        "birim": "adet"
      },
      {
        "etiket": "2. operasyon için makine oranı F2",
        "deger": 2.38,
        "tolerans": 0.01,
        "birim": ""
      },
      {
        "etiket": "3. operasyon için makine oranı F3",
        "deger": 1.33,
        "tolerans": 0.015,
        "birim": ""
      },
      {
        "etiket": "Toplam makine oranı (F2 + F3)",
        "deger": 3.705,
        "tolerans": 0.011,
        "birim": ""
      },
      {
        "etiket": "Gerekli M2 makinesi sayısı (tam sayı)",
        "deger": 4,
        "tolerans": 0,
        "birim": "adet"
      }
    ],
    "mantik": "<p>Önce Örnek-2'deki gibi sondan başa doğru hesapla 2. ve 3. operasyona girecek miktar bulunur. Sonra her operasyon için makine oranı F = S·Q / (E·H·R) hesaplanır. Aynı makine tipinde birden fazla operasyon yapıldığı için oranlar toplanır ve toplam bir üst tam sayıya yuvarlanır.</p>",
    "cozum": "<ol><li>I<sub>5</sub> = 100.000 / 0,96 = 104.167; I<sub>4</sub> = 104.167 / 0,99 = 105.219 (slaytta 105.218); 2. ve 3. operasyonun çıkışı 105.219 olmalı.</li><li>I<sub>3</sub> = 105.219 / 0,98 = <b>107.366</b> (B, 3. operasyon M2'de); I<sub>2</sub> = 105.219 / 0,98 = <b>107.366</b> (A, 2. operasyon M2'de).</li><li>F<sub>2</sub> = (107.366 × 0,043) / (2000 × 0,98 × 0,99) = 4.616,7 / 1.940,4 = <b>2,38</b>.</li><li>F<sub>3</sub> = (107.366 × 0,022) / (2000 × 0,90 × 0,99) = 2.362,1 / 1.782 = <b>1,33</b>.</li><li>Toplam = 2,379 + 1,326 = 3,705 ≈ 3,70 (slayttaki gibi; iki basamağa yuvarlanmış oranlar toplanırsa 2,38 + 1,33 = 3,71) → bir üst tam sayıya yuvarlanarak <b>4 adet M2 makinesi</b> gerekir (atölye tipi yerleşim için uygun).</li></ol><p><i>Slayttaki yazım hataları:</i> Slayt 68'de payda \"200\" yazılmıştır, hesapta 2000 saat kullanılmıştır (2,38 ve 1,33 ancak 2000 ile çıkar). F<sub>3</sub> paydasında 0,98 yazılmıştır, ancak 1,33 sonucu güvenilirlik 0,99 ile elde edilir (0,98 ile 1,34 çıkardı); sonuç yine 4 makine olur.</p>"
  }
);
