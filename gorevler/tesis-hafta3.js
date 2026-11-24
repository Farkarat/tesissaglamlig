window.GOREV_BANKASI = window.GOREV_BANKASI || [];
window.GOREV_BANKASI.push(
  {
    "ders": "tesis",
    "hafta": 3,
    "id": "tesis-h3-makine-01",
    "konu": "Gerekli Makine Sayısının Belirlenmesi",
    "kaynak": "Hafta 3, slayt 3-5 (Örnek-1)",
    "baslik": "Seri bağlı üç operasyonlu A ürünü için toplam makine sayısı",
    "soru": "<p>Bir işletmede üretilen A ürünü, seri bağlı 3 farklı operasyon izlemektedir. Operasyonlara ait veriler aşağıdadır.</p><table><thead><tr><th>Operasyon</th><th>Makine</th><th>Güvenilirlik</th><th>Etkinlik</th><th>Fire oranı</th><th>Standart süre</th><th>Yeniden işleme</th></tr></thead><tbody><tr><td>1</td><td>M<sub>1</sub></td><td>%95</td><td>%85</td><td>%5</td><td>5 dk</td><td>—</td></tr><tr><td>2</td><td>M<sub>2</sub></td><td>%90</td><td>%75</td><td>%10</td><td>4 dk</td><td>Hatalı ürünlerin %60'ı yeniden işlenerek hatasız hale getirilir; yeniden işleme standart süresi 2 dk (her hatalı ürün için)</td></tr><tr><td>3 (montaj)</td><td>M<sub>3</sub> (tezgâh)</td><td>%80</td><td>%85</td><td>%7</td><td>1,5 dk</td><td>—</td></tr></tbody></table><p>İşletme haftanın 6 günü, günde 8 saatlik 2 vardiya çalışmaktadır. A ürününün haftalık talebi 50.000 adettir. Her operasyona girmesi gereken miktarı ve işletmenin sahip olması gereken makine/tezgâh sayılarını hesaplayınız (makine sayılarını yukarı yuvarlayınız).</p>",
    "cevapTipi": "sayi",
    "cevaplar": [
      {
        "etiket": "3. operasyona giren miktar I₃",
        "deger": 53763.44,
        "tolerans": 1,
        "birim": "adet"
      },
      {
        "etiket": "2. operasyona giren miktar I₂",
        "deger": 56003.58,
        "tolerans": 1,
        "birim": "adet"
      },
      {
        "etiket": "1. operasyona giren miktar I₁",
        "deger": 58951.14,
        "tolerans": 1,
        "birim": "adet"
      },
      {
        "etiket": "M₁ makine sayısı",
        "deger": 64,
        "tolerans": 0,
        "birim": "adet"
      },
      {
        "etiket": "M₂ makine sayısı",
        "deger": 61,
        "tolerans": 0,
        "birim": "adet"
      },
      {
        "etiket": "M₃ tezgâh sayısı",
        "deger": 21,
        "tolerans": 0,
        "birim": "adet"
      }
    ],
    "mantik": "<p>Önce talepten geriye doğru her operasyona girmesi gereken miktar bulunur (çıkış = giriş × (1 − fire); yeniden işlenebilen hatalı ürünler çıkışa geri eklenir). Sonra her makine için F = (giriş × süre) / (güvenilirlik × etkinlik × haftalık süre) formülü kullanılır; yeniden işleme süresi hatalı ürün sayısı kadar yüke eklenir. Sonuç yukarı yuvarlanır.</p>",
    "cozum": "<ol><li><b>Haftalık süre:</b> H = 6 × 2 × 8 × 60 = 5.760 dk.</li><li><b>3. operasyon (montaj):</b> I₃ = 50.000 / (1 − 0,07) = 53.763,44 adet.</li><li><b>2. operasyon:</b> iyi çıkış = I₂(1 − 0,10) + I₂·0,10·0,60 = 0,96·I₂ = 53.763,44 ⇒ I₂ = 56.003,58 adet.</li><li><b>1. operasyon:</b> I₁ = 56.003,58 / (1 − 0,05) = 58.951,14 adet.</li><li><b>M₁:</b> F₁ = (58.951,14 × 5) / (0,95 × 0,85 × 5.760) = 63,37 ≈ <b>64</b> adet.</li><li><b>M₂:</b> F₂ = (56.003,58 × 4 + 56.003,58 × 0,10 × 2) / (0,75 × 0,90 × 5.760) = 60,50 ≈ <b>61</b> adet.</li><li><b>M₃:</b> F₃ = (53.763,44 × 1,5) / (0,85 × 0,80 × 5.760) = 20,59 ≈ <b>21</b> adet.</li></ol><p><i>Not: Slayttaki değerler ara sonuçların yuvarlanması nedeniyle çok az farklıdır (F₂ = 60,48; F₃ = 20,58); yuvarlanmış sonuçlar aynıdır: 64, 61 ve 21.</i></p>"
  },
  {
    "ders": "tesis",
    "hafta": 3,
    "id": "tesis-h3-makine-02",
    "konu": "Gerekli Makine Sayısının Belirlenmesi",
    "kaynak": "Hafta 3, slayt 6-8 (Örnek-2)",
    "baslik": "İki ürünlü sistemde X ve Y makine sayıları (ayar süreli)",
    "soru": "<p>Bir işletmede A ve B olmak üzere iki ürün üretilmektedir. İki ürün de sırasıyla X ve Y makinelerinde işlem görmektedir. Veriler:</p><table><thead><tr><th>Ürün</th><th>X: işlem süresi</th><th>X: fire</th><th>Y: işlem süresi</th><th>Y: fire</th></tr></thead><tbody><tr><td>A</td><td>10 dk</td><td>%5</td><td>15 dk</td><td>%8</td></tr><tr><td>B</td><td>5 dk</td><td>%10</td><td>12 dk</td><td>%7</td></tr></tbody></table><table><thead><tr><th>Makine</th><th>Etkinlik</th><th>Güvenilirlik</th></tr></thead><tbody><tr><td>X</td><td>%80</td><td>%90</td></tr><tr><td>Y</td><td>%95</td><td>%85</td></tr></tbody></table><p>Y makinesinde her 100 adetlik işlemden sonra (A ve B ürünleri ayrımı yapılmaksızın) 80 dk'lık bir ayar süresi gerekmektedir. Ayar sayısı Y makinesine giren (Y'de işlem gören) toplam adet üzerinden hesaplanır; yalnızca tamamlanan tam 100 adetlik gruplar sayılır (aşağı yuvarlayınız). İşletme günde 8 saat, haftada 5 gün ve 2 vardiya çalışarak her iki ürün için haftalık 1.000'er adet talebi karşılamaya çalışmaktadır.</p><p>Müşteri taleplerini karşılamak için işletmenin kaç adet X ve kaç adet Y makinesine ihtiyacı vardır?</p>",
    "cevapTipi": "sayi",
    "cevaplar": [
      {
        "etiket": "X makinesi işlem yükü F_X (yuvarlamadan önce)",
        "deger": 5.04,
        "tolerans": 0.02,
        "birim": "makine"
      },
      {
        "etiket": "Gerekli X makinesi sayısı",
        "deger": 6,
        "tolerans": 0,
        "birim": "adet"
      },
      {
        "etiket": "Y makinesinde ayar sayısı",
        "deger": 21,
        "tolerans": 0,
        "birim": "defa"
      },
      {
        "etiket": "Y makinesi işlem süresi (ayar hariç)",
        "deger": 36170.37,
        "tolerans": 2,
        "birim": "dk"
      },
      {
        "etiket": "Gerekli Y makinesi sayısı",
        "deger": 8,
        "tolerans": 0,
        "birim": "adet"
      }
    ],
    "mantik": "<p>Her ürün için son operasyondan geriye doğru girdi miktarları bulunur. X makinesinin yükü iki ürünün girdi × süre toplamının (etkinlik × güvenilirlik × haftalık süre)'ye bölünmesiyle bulunur. Y makinesinde ise önce işlem süresi (etkinlik × güvenilirliğe bölünmüş) hesaplanır, buna ayar süreleri eklenir ve toplam haftalık süreye bölünür.</p>",
    "cozum": "<ol><li><b>Haftalık süre:</b> H = 8 × 5 × 2 × 60 = 4.800 dk.</li><li><b>A ürünü:</b> I_Y = 1.000 / (1 − 0,08) = 1.086,96 (= O_X); I_X = 1.086,96 / (1 − 0,05) = 1.144,16.</li><li><b>B ürünü:</b> I_Y = 1.000 / (1 − 0,07) = 1.075,27; I_X = 1.075,27 / (1 − 0,10) = 1.194,74.</li><li><b>X makinesi:</b> F_X = (1.144,16 × 10 + 1.194,74 × 5) / (0,8 × 0,9 × 4.800) = 5,04 ≈ <b>6</b> adet.</li><li><b>Y işlem süresi:</b> (1.086,96 × 15 + 1.075,27 × 12) / (0,95 × 0,85) = 36.170,37 dk.</li><li><b>Ayar:</b> (1.086,96 + 1.075,27) / 100 = 21,6 ⇒ 21 defa; 21 × 80 = 1680 dk.</li><li><b>Y makinesi:</b> (36.170,37 + 1680) / 4.800 = 7,89 ≈ <b>8</b> adet.</li></ol><p><i>Slayttaki değerler (5,03 ve 7,88) ara sonuçların yuvarlanmasından dolayı çok az farklıdır; yuvarlanmış sonuç aynıdır: 6 X ve 8 Y makinesi.</i></p>"
  },
  {
    "ders": "tesis",
    "hafta": 3,
    "id": "tesis-h3-makine-03",
    "konu": "Gerekli Makine Sayısının Belirlenmesi",
    "kaynak": "Hafta 3, slayt 9 (Örnek-3, Ödev-1)",
    "baslik": "X – Y – X rotalı ürün: yeniden işleme ve demontaj ile makine sayısı",
    "soru": "<p>Bir A ürünü önce X makinesinde işlenmekte, sonra Y tezgâhında işlenip son montajın yapılabilmesi için tekrar X makinesinde işlem görmektedir (rota: X → Y → X). Veriler:</p><table><thead><tr><th>Operasyon</th><th>Yer</th><th>Fire</th><th>Standart süre</th><th>Yeniden işleme</th></tr></thead><tbody><tr><td>1. işlem</td><td>X</td><td>%10</td><td>4 dk</td><td>—</td></tr><tr><td>2. işlem</td><td>Y</td><td>%8</td><td>5 dk</td><td>Hatalı ürünlerin %60'ı yeniden işlenerek hatasız hale gelir; yeniden işleme süresi 5 dk</td></tr><tr><td>3. işlem (son montaj)</td><td>X</td><td>%5</td><td>7 dk</td><td>Hatalı ürünlerin %70'i demonte edilip montaj tekrarı yapılır; tekrar süresi 3 dk</td></tr></tbody></table><table><thead><tr><th>Makine</th><th>Etkinlik</th><th>Güvenilirlik</th></tr></thead><tbody><tr><td>X</td><td>%85</td><td>%90</td></tr><tr><td>Y</td><td>%90</td><td>%80</td></tr></tbody></table><p>Yeniden işleme süresi, hatalı ürünlerin sayısı kadar yüke eklenir (her hatalı ürün için ayrı). İşletme haftada 5 gün, günde 8 saatlik 2 vardiya çalışmaktadır. Haftalık 10.000 adet A ürünü üretmek için gerekli X makinesi ve Y tezgâhı sayılarını bulunuz.</p>",
    "cevapTipi": "sayi",
    "cevaplar": [
      {
        "etiket": "Y tezgâhı yükü F_Y (yuvarlamadan önce)",
        "deger": 16.39,
        "tolerans": 0.03,
        "birim": ""
      },
      {
        "etiket": "Gerekli Y tezgâhı sayısı",
        "deger": 17,
        "tolerans": 0,
        "birim": "adet"
      },
      {
        "etiket": "X makinesi yükü F_X (yuvarlamadan önce)",
        "deger": 32.46,
        "tolerans": 0.03,
        "birim": ""
      },
      {
        "etiket": "Gerekli X makinesi sayısı",
        "deger": 33,
        "tolerans": 0,
        "birim": "adet"
      }
    ],
    "mantik": "<p>Rota boyunca çıkıştan girişe doğru gidilir. Yeniden işlenebilen hatalı ürünler çıkışa geri eklendiği için \"iyi çıkış = giriş × (1 − fire + fire × geri kazanım oranı)\" olur. X makinesi iki ayrı operasyonda kullanıldığından yükü iki operasyonun toplamıdır. Her operasyonun süresi = standart süre + fire × yeniden işleme süresidir.</p>",
    "cozum": "<ol><li>H = 5 × 8 × 2 × 60 = 4.800 dk.</li><li><b>3. işlem (X, montaj):</b> iyi çıkış = I₃(0,95 + 0,05 × 0,70) = 0,985·I₃ = 10.000 ⇒ I₃ = 10.152,28.</li><li><b>2. işlem (Y):</b> 0,92 + 0,08 × 0,60 = 0,968 ⇒ I₂ = 10.152,28 / 0,968 = 10.487,90.</li><li><b>1. işlem (X):</b> I₁ = 10.487,90 / 0,90 = 11.653,22.</li><li><b>Y:</b> F_Y = 10.487,90 × (5 + 0,08 × 5) / (0,90 × 0,80 × 4.800) = 16,39 ≈ <b>17</b> adet.</li><li><b>X:</b> F_X = (11.653,22 × 4 + 10.152,28 × (7 + 0,05 × 3)) / (0,85 × 0,90 × 4.800) = 32,46 ≈ <b>33</b> adet.</li></ol><p>Slayttaki cevap: <b>17 adet Y, 33 adet X</b> — hesapla aynıdır.</p>"
  },
  {
    "ders": "tesis",
    "hafta": 3,
    "id": "tesis-h3-makine-04",
    "konu": "Gerekli Makine Sayısının Belirlenmesi",
    "kaynak": "Hafta 3, slayt 10-12 (Örnek-4)",
    "baslik": "Freze tezgâhı sayısı: standart/fiili süre, duruş ve takım değiştirme",
    "soru": "<p>Bir X hammaddesi, bir freze tezgâhında sırasıyla gerçekleştirilen A ve B operasyonlarından sonra yarı mamul haline gelmektedir. Haftada 2.500 adet kusursuz yarı mamul üretilebilmesi için gereksinim duyulan freze tezgâhı sayısını hesaplayınız.</p><ul><li>Firma günde toplam 18 saat olmak üzere 2 vardiya (vardiya başına 9 saat) ve haftada 5 gün çalışmaktadır.</li><li>A ve B operasyonlarının standart süreleri sırasıyla 5 dk ve 10 dk'dır; operatörlerin deneyim eksikliği nedeniyle A operasyonu 6 dk'da, B operasyonu 11 dk'da gerçekleştirilmektedir (etkinlik = standart süre / fiili süre).</li><li>A operasyonuna giren parçaların %2'si, B operasyonuna giren parçaların %5'i hurdaya ayrılmaktadır.</li><li>Freze tezgâhlarının her biri vardiya başına 54 dk çalışamamaktadır (güvenilirlik = (vardiya süresi − duruş) / vardiya süresi).</li><li>Her 400 adetlik parti üretimi sonrasında takım değiştirme ve koruyucu bakım gerekir ve bu işlemler 1 saat sürer. Bu süre parça başına dağıtılarak (1 saat / 400 = 0,15 dk/adet) hem A hem B için standart süreye eklenir.</li></ul><p>(a) A ve B operasyonları aynı freze tezgâhlarında yapılırsa (işleme/süreç yerleşimi) kaç tezgâh gerekir? (b) A ve B için ayrı tezgâhlar kullanılırsa (ürüne göre/hat tipi yerleşim) kaç tezgâh gerekir?</p>",
    "cevapTipi": "sayi",
    "cevaplar": [
      {
        "etiket": "B'ye giren miktar I_B",
        "deger": 2631.58,
        "tolerans": 0.05,
        "birim": "adet"
      },
      {
        "etiket": "A'ya giren miktar I_A",
        "deger": 2685.28,
        "tolerans": 0.05,
        "birim": "adet"
      },
      {
        "etiket": "A için gereken tezgâh (kesirli)",
        "deger": 3.415,
        "tolerans": 0.02,
        "birim": ""
      },
      {
        "etiket": "B için gereken tezgâh (kesirli)",
        "deger": 6.05,
        "tolerans": 0.02,
        "birim": ""
      },
      {
        "etiket": "(a) Süreç yerleşiminde tezgâh sayısı",
        "deger": 10,
        "tolerans": 0,
        "birim": "adet"
      },
      {
        "etiket": "(b) Ürüne göre yerleşimde tezgâh sayısı",
        "deger": 11,
        "tolerans": 0,
        "birim": "adet"
      }
    ],
    "mantik": "<p>Önce kusursuz çıkıştan geriye doğru girdi miktarları bulunur. Etkinlik, standart sürenin fiili süreye oranıdır; güvenilirlik vardiyadaki fiilen çalışılabilen süreyi verir. Takım değiştirme süresi parça başına standart süreye eklenir. Operasyonlar aynı tezgâhı paylaşıyorsa yükler toplanıp bir kez yukarı yuvarlanır; ayrı tezgâhlarda her operasyon için ayrı yukarı yuvarlanır.</p>",
    "cozum": "<ol><li>H = 9 × 2 × 5 × 60 = 5.400 dk/hafta.</li><li>I_B = 2.500 / (1 − 0,05) = 2.631,58; I_A = 2.631,58 / (1 − 0,02) = 2.685,28.</li><li>E_A = 5/6 ≈ %83,3; E_B = 10/11 ≈ %90,9; güvenilirlik R = (9·60 − 54) / 540 = %90.</li><li>Süreler: S_A = 5 + 0,15 = 5,15 dk/adet; S_B = 10 + 0,15 = 10,15 dk/adet.</li><li>F_A = 2.685,28 × 5,15 / (0,833 × 0,90 × 5.400) = 3,415; F_B = 2.631,58 × 10,15 / (0,909 × 0,90 × 5.400) = 6,046.</li><li><b>(a)</b> Toplam = 9,460 ≈ <b>10</b> adet freze tezgâhı.</li><li><b>(b)</b> 4 + 7 = <b>11</b> adet freze tezgâhı.</li></ol><p><i>Not: Slayttaki formülde E_A = 0,83 ve E_B = 0,91 yazılmıştır, ancak verilen sonuçlar (3,415 ve 6,046) kesirli etkinliklerle (5/6 ve 10/11) elde edilir; yuvarlanmış etkinliklerle 3,428 ve 6,040 çıkar. Her iki durumda toplam ≈ 9,46 → 10 tezgâh; ayrı tezgâhlarda 4 + 7 = 11 tezgâh.</i></p>"
  },
  {
    "ders": "tesis",
    "hafta": 3,
    "id": "tesis-h3-makine-05",
    "konu": "Gerekli Makine Sayısının Belirlenmesi",
    "kaynak": "Hafta 3, slayt 13-16 (Örnek-5); LINGO sonucu slayt 18",
    "baslik": "Montajlı A ürünü: güvenlik stoku, yeniden işleme, bakım ve ayar süreleri",
    "soru": "<p>Bir işletmede A ürününe ait haftalık talep yaklaşık 3.000 adettir. Talepteki dalgalanmalara karşı %5'lik güvenlik stok payı belirlenmiştir (üretilecek miktar = 3.000 × 1,05).</p><p><b>Final montaj (Y tezgâhı):</b> 1 adet A ürünü; 2 adet B ve 3 adet C yarı mamulünün Y tezgâhında final montajı ile üretilir. Final montaj ve montaj tekrarı için standart süre 5 dk'dır; operatörün deneyim eksikliği nedeniyle bu işlemler 6 dk'da ve %3 fire oranı ile gerçekleştirilir (etkinlik = 5/6). Final montajdan çıkan hatalı ürünlerin %60'ı demonte edilip yeniden işlenir; montaj tekrarı süresi (5 dk) tüm hatalı ürünler için yüke eklenir (I_Y × 0,03 × 5). Y tezgâhları vardiya başına 48 dk çalışamaz (vardiya 8 saat) ve her 318 adetlik parti montajı sonrasında 30 dk koruyucu bakım gerekir.</p><p><b>Alt montaj (X makinesi):</b> B ve C yarı mamulleri Y'de montajdan önce X makinesinde alt montaja girer. B'nin alt montajı 2 dk sürer ve %5 fire içerir (1 adet D + 2 adet E hammaddesi). C'nin alt montajı 1 dk sürer ve %8 fire içerir (2 adet E + 3 adet F hammaddesi). X makinesi her 1.000 adetlik alt montajdan sonra (B/C ayrımı yok) 45 dk ayar süresi gerektirir. X her iki yarı mamulde %80 etkinlik ve %90 güvenilirlikle çalışır.</p><p>İşletme günde toplam 16 saat (2 vardiya) ve haftada 5 gün çalışmaktadır (H = 4.800 dk). Bakım ve ayar sayıları, tezgâhta/makinede yapılan toplam işlem adedi üzerinden hesaplanır (Y'de: ilk montajlar I_Y + hatalı ürün sayısı kadar montaj tekrarı I_Y × 0,03; X'te: alt montaja giren B ve C adetleri); yalnızca tamamlanan tam partiler sayılır (aşağı yuvarlayınız). A ürününün haftalık talebini karşılamak için gereken Y tezgâhı ve X makinesi sayılarını bulunuz.</p>",
    "cevapTipi": "sayi",
    "cevaplar": [
      {
        "etiket": "Y tezgâhına giren montaj miktarı I_Y",
        "deger": 3188.26,
        "tolerans": 1,
        "birim": "adet"
      },
      {
        "etiket": "Y tezgâhında koruyucu bakım sayısı",
        "deger": 10,
        "tolerans": 0,
        "birim": "defa"
      },
      {
        "etiket": "Y tezgâhı yükü (kesirli)",
        "deger": 4.62,
        "tolerans": 0.02,
        "birim": ""
      },
      {
        "etiket": "Gerekli Y tezgâhı sayısı",
        "deger": 5,
        "tolerans": 0,
        "birim": "adet"
      },
      {
        "etiket": "X makinesinde ayar sayısı",
        "deger": 17,
        "tolerans": 0,
        "birim": "defa"
      },
      {
        "etiket": "X makinesi yükü (kesirli)",
        "deger": 7.05,
        "tolerans": 0.02,
        "birim": ""
      },
      {
        "etiket": "Gerekli X makinesi sayısı",
        "deger": 8,
        "tolerans": 0,
        "birim": "adet"
      }
    ],
    "mantik": "<p>Üretim miktarından geriye doğru gidilir: önce final montaj girdisi (yeniden işlenen hatalı ürünler hesaba katılarak), sonra 1 A başına 2 B ve 3 C gerektiğinden alt montaj çıkışları, sonra alt montaj girdileri (fireye göre). Her makinenin süresi = işlem yükü / (etkinlik × güvenilirlik) + bakım/ayar süreleridir; toplam haftalık süreye bölünüp yukarı yuvarlanır.</p>",
    "cozum": "<ol><li><b>Hedef çıkış:</b> 3.000 × 1,05 = 3.150 adet.</li><li><b>Final montaj:</b> I_Y × 0,97 + I_Y × 0,03 × 0,60 = 3.150 ⇒ I_Y = 3.150 / 0,988 = 3.188,26 adet.</li><li><b>Y yükü:</b> (3.188,26 × 5 + 3.188,26 × 0,03 × 5) / (5/6 × 0,90) ≈ 21.892,71 dk (slaytta 0,833 ile 21.901,47; E = 5/6, R = (480 − 48) / 480 = 0,90).</li><li><b>Bakım:</b> (3.188,26 + 95,65) / 318 = 10,33 ⇒ 10 bakım; 10 × 30 = 300 dk.</li><li><b>Y:</b> F_Y = (21.892,71 + 300) / 4.800 = 4,62 ≈ <b>5</b> adet.</li><li><b>Alt montaj çıkışları:</b> B: 3.188,26 × 2 = 6.376,52; C: 3.188,26 × 3 = 9.564,78.</li><li><b>Alt montaj girdileri:</b> I_XB = 6.376,52 / 0,95 = 6.712,12; I_XC = 9.564,78 / 0,92 = 10.396,50.</li><li><b>X yükü:</b> (6.712,12 × 2 + 10.396,50 × 1) / (0,8 × 0,9) = 33.084,37 dk.</li><li><b>Ayar:</b> (6.712,12 + 10.396,50) / 1.000 = 17,109 ⇒ 17 ayar; 17 × 45 = 765 dk.</li><li><b>X:</b> F_X = (33.084,37 + 765) / 4.800 = 7,05 ≈ <b>8</b> adet.</li></ol><p><i>Not: Slayt aynı yöntemle F_Y = 4,63 ve F_X = 7,05 bulur; LINGO modeli 4,625 ve 7,053 verir. Slaytta bir yerde I_Y ≈ 3.189 yuvarlanıp B ve C miktarları 6.378 / 9.567 alınmıştır; bu yalnızca küçük sayısal farklar yaratır, sonuç değişmez. Yuvarlanmış sonuç: 5 Y tezgâhı, 8 X makinesi.</i></p>"
  },
  {
    "ders": "tesis",
    "hafta": 3,
    "id": "tesis-h3-maksuret-01",
    "konu": "Maksimum Üretim Miktarının Hesaplanması",
    "kaynak": "Hafta 3, slayt 19-21 (Örnek-6)",
    "baslik": "A-B-C makinelerinde maksimum X ve Y üretimi",
    "soru": "<p>Bir üretim tesisinde X ve Y ürünleri sırası ile A, B ve C makinelerinde işlem görmektedir. Makinelerin ürün bazlı fire oranları, yeniden işleme fire oranları (yeniden işlenen ürünün tekrar hatalı çıkma oranı), işlem süreleri ve yeniden işleme süreleri aşağıdaki tabloda verilmiştir. B makinesinde yeniden işleme yapılamamaktadır.</p><table><thead><tr><th></th><th>A: X için</th><th>A: Y için</th><th>B: X için</th><th>B: Y için</th><th>C: X için</th><th>C: Y için</th></tr></thead><tbody><tr><th>Fire oranı</th><td>0,08</td><td>0,12</td><td>0,05</td><td>0,09</td><td>0,03</td><td>0,05</td></tr><tr><th>Yeniden işleme fire oranı</th><td>0,45</td><td>0,55</td><td>—</td><td>—</td><td>0,65</td><td>0,40</td></tr><tr><th>İşlem süresi (dk)</th><td>5</td><td>8</td><td>3</td><td>8</td><td>8</td><td>6</td></tr><tr><th>Yeniden işleme süresi (dk)</th><td>12</td><td>16</td><td>—</td><td>—</td><td>14</td><td>12</td></tr></tbody></table><p>Tüm makinelerin etkinlik oranları %85, güvenilirlik oranları %95'tir. İşletme süreç/proses odaklı üretim yapmakta; üretim süresinin 1/3'ünü X üretimi için, 2/3'ünü de Y üretimi için kullanmaktadır. İşletmede A makinesinden 5 adet, B makinesinden 3 adet ve C makinesinden 6 adet vardır; işletme günlük 8 saatlik tek vardiya, haftada 5 gün çalışmaktadır.</p><p>Yöntem: Her makinenin bir ürün için kapasitesi (girdi adedi) = makine sayısı × ürüne ayrılan süre × etkinlik × güvenilirlik / (işlem süresi + yeniden işleme süresi × fire oranı). Makineler baştan sona sırayla hesaplanır; bir makinenin girdisi, kapasitesi ile önceki makineden gelen iyi ürün miktarından küçük olanıdır. Hatalı ürünlerin yeniden işleme sonucu hatasız çıkanları (1 − yeniden işleme fire oranı) çıkışa eklenir.</p><p>Bir haftada maksimum kaç adet X ve Y ürünü üretilebilir? (Hesaplarda ara sonuçları yuvarlayabilirsiniz; ±2 adet fark kabul edilir.)</p>",
    "cevapTipi": "sayi",
    "cevaplar": [
      {
        "etiket": "Maksimum X ürünü",
        "deger": 450,
        "tolerans": 2,
        "birim": "adet"
      },
      {
        "etiket": "Maksimum Y ürünü",
        "deger": 431,
        "tolerans": 2,
        "birim": "adet"
      }
    ],
    "mantik": "<p>Süre ürünlere bölünür (X için 800 dk, Y için 1.600 dk). Her ürün için makineler sırayla baştan sona hesaplanır; darboğaz, kapasitesi önceki makineden gelen iyi ürün miktarından düşük olan makinedir ve üretimi o belirler. Slayt vurgusu: \"sondan başa değil, baştan sona hesapla\".</p>",
    "cozum": "<ol><li><b>Süre:</b> haftalık 8 × 5 × 60 = 2.400 dk; X için 800 dk, Y için 1.600 dk. Etkinlik × güvenilirlik = 0,85 × 0,95 = 0,8075.</li><li><b>X – A makinesi:</b> girdi ≤ 5 × 800 × 0,8075 / (5 + 12 × 0,08) = 541,9 → 541 (aşağı yuvarlanır). İyi: 541 × 0,92 ≈ 497; fire 541 × 0,08 ≈ 44; yeniden işlemeden iyi çıkan 44 × 0,55 ≈ 24. Çıkış ≈ 497 + 24 = 521.</li><li><b>X – B makinesi:</b> kapasite 3 × 800 × 0,8075 / 3 = 646, gelen 521 daha az ⇒ girdi 521; çıkış 521 × 0,95 ≈ 495.</li><li><b>X – C makinesi:</b> kapasite 6 × 800 × 0,8075 / (8 + 14 × 0,03) = 460,3 ≈ 460 < 495 ⇒ darboğaz C. İyi: 460 × 0,97 ≈ 446; fire ≈ 14; yeniden işlemeden iyi çıkan 14 × 0,35 ≈ 4. Çıkış ≈ 446 + 4 = <b>450 adet X</b>.</li><li><b>Y – A makinesi:</b> girdi ≤ 5 × 1.600 × 0,8075 / (8 + 16 × 0,12) = 651,2 ≈ 651; çıkış ≈ 573 + 35 ≈ 608.</li><li><b>Y – B makinesi:</b> kapasite 3 × 1.600 × 0,8075 / 8 = 484,5 ≈ 484 < 608 ⇒ darboğaz B; iyi çıkış 484 × 0,91 ≈ 440.</li><li><b>Y – C makinesi:</b> kapasite 6 × 1.600 × 0,8075 / (6 + 12 × 0,05) = 1.175 > 440 ⇒ girdi 440. İyi: 440 × 0,95 = 418; fire 22; yeniden işlemeden iyi çıkan 22 × 0,60 ≈ 13. Çıkış ≈ 418 + 13 = <b>431 adet Y</b>.</li></ol><p><i>Not: Slayttaki cevap 450 X ve 431 Y'dir. Ara sonuçlar yuvarlanmadan hesaplanırsa 451,4 X ve 432,1 Y bulunur; fark yalnızca yuvarlamadan kaynaklanır.</i></p>"
  },
  {
    "ders": "tesis",
    "hafta": 3,
    "id": "tesis-h3-iskarta-01",
    "konu": "Iskarta Payı Problemi",
    "kaynak": "Hafta 3, slayt 24-27 (Örnek-7)",
    "baslik": "Döküm atölyesi: beklenen kârı en büyükleyen döküm miktarı",
    "soru": "<p>Bir döküm atölyesi 20 adet özel döküm siparişi almıştır. Döküm sürecinin maliyeti birim başına 700 $'dır. Döküm iyi çıkarsa, son şekline getirmek için üzerinde bir işlem daha yapılmakta ve bunun maliyeti birim başına 500 $'dır. Satılmayan dökümler ve kusurlu ürünler tekrar eritilip kullanılmakta; bu da birim başına 300 $'lık geri dönüşüm değeri sağlamaktadır. Müşteri 20 adet kabul edilebilir döküm için birim başına 2.000 $ vermeye razıdır. Ayrıca fazladan 1 ya da 2 dökümü birim başına 1.500 $ ödeyerek satın alabileceğini bildirmiştir. Fakat 20'den az veya 22'den fazla ürün satın almayacaktır (x &lt; 20 ise hiçbir şey satın almaz; bu durumda tüm ürünler geri dönüştürülür).</p><p>Geçmiş dönem kayıtlarında, farklı döküm miktarlarına (Q) göre elde edilen uygun/kusursuz ürün sayıları (x) ve ilgili olasılıkları p(x) aşağıdaki tabloda yer almaktadır (her sütun, ilgili Q için olasılık dağılımıdır; toplam 1).</p><table><thead><tr><th>x \\ Q</th><th>20</th><th>21</th><th>22</th><th>23</th><th>24</th><th>25</th><th>26</th><th>27</th><th>28</th><th>29</th><th>30</th></tr></thead><tbody><tr><th>12</th><td>0,10</td><td>0,05</td><td>0,00</td><td>0,00</td><td>0,00</td><td>0,00</td><td>0,00</td><td>0,00</td><td>0,00</td><td>0,00</td><td>0,00</td></tr><tr><th>13</th><td>0,10</td><td>0,10</td><td>0,05</td><td>0,05</td><td>0,05</td><td>0,05</td><td>0,00</td><td>0,00</td><td>0,00</td><td>0,00</td><td>0,00</td></tr><tr><th>14</th><td>0,10</td><td>0,10</td><td>0,10</td><td>0,05</td><td>0,05</td><td>0,05</td><td>0,05</td><td>0,00</td><td>0,00</td><td>0,00</td><td>0,00</td></tr><tr><th>15</th><td>0,10</td><td>0,10</td><td>0,10</td><td>0,10</td><td>0,05</td><td>0,05</td><td>0,05</td><td>0,00</td><td>0,00</td><td>0,00</td><td>0,00</td></tr><tr><th>16</th><td>0,10</td><td>0,10</td><td>0,10</td><td>0,10</td><td>0,05</td><td>0,05</td><td>0,05</td><td>0,05</td><td>0,00</td><td>0,00</td><td>0,00</td></tr><tr><th>17</th><td>0,10</td><td>0,10</td><td>0,10</td><td>0,10</td><td>0,10</td><td>0,05</td><td>0,05</td><td>0,05</td><td>0,05</td><td>0,00</td><td>0,00</td></tr><tr><th>18</th><td>0,20</td><td>0,10</td><td>0,10</td><td>0,10</td><td>0,10</td><td>0,05</td><td>0,05</td><td>0,10</td><td>0,05</td><td>0,05</td><td>0,05</td></tr><tr><th>19</th><td>0,10</td><td>0,15</td><td>0,10</td><td>0,10</td><td>0,10</td><td>0,10</td><td>0,10</td><td>0,10</td><td>0,10</td><td>0,05</td><td>0,05</td></tr><tr><th>20</th><td>0,10</td><td>0,10</td><td>0,15</td><td>0,10</td><td>0,10</td><td>0,10</td><td>0,10</td><td>0,10</td><td>0,10</td><td>0,10</td><td>0,05</td></tr><tr><th>21</th><td>0,00</td><td>0,10</td><td>0,10</td><td>0,10</td><td>0,10</td><td>0,10</td><td>0,10</td><td>0,10</td><td>0,10</td><td>0,10</td><td>0,10</td></tr><tr><th>22</th><td>0,00</td><td>0,00</td><td>0,10</td><td>0,10</td><td>0,10</td><td>0,10</td><td>0,10</td><td>0,10</td><td>0,10</td><td>0,10</td><td>0,10</td></tr><tr><th>23</th><td>0,00</td><td>0,00</td><td>0,00</td><td>0,10</td><td>0,10</td><td>0,10</td><td>0,10</td><td>0,10</td><td>0,10</td><td>0,10</td><td>0,10</td></tr><tr><th>24</th><td>0,00</td><td>0,00</td><td>0,00</td><td>0,00</td><td>0,10</td><td>0,10</td><td>0,10</td><td>0,10</td><td>0,10</td><td>0,10</td><td>0,10</td></tr><tr><th>25</th><td>0,00</td><td>0,00</td><td>0,00</td><td>0,00</td><td>0,00</td><td>0,10</td><td>0,10</td><td>0,10</td><td>0,10</td><td>0,10</td><td>0,10</td></tr><tr><th>26</th><td>0,00</td><td>0,00</td><td>0,00</td><td>0,00</td><td>0,00</td><td>0,00</td><td>0,05</td><td>0,05</td><td>0,10</td><td>0,10</td><td>0,10</td></tr><tr><th>27</th><td>0,00</td><td>0,00</td><td>0,00</td><td>0,00</td><td>0,00</td><td>0,00</td><td>0,00</td><td>0,05</td><td>0,05</td><td>0,10</td><td>0,10</td></tr><tr><th>28</th><td>0,00</td><td>0,00</td><td>0,00</td><td>0,00</td><td>0,00</td><td>0,00</td><td>0,00</td><td>0,00</td><td>0,05</td><td>0,05</td><td>0,05</td></tr><tr><th>29</th><td>0,00</td><td>0,00</td><td>0,00</td><td>0,00</td><td>0,00</td><td>0,00</td><td>0,00</td><td>0,00</td><td>0,00</td><td>0,05</td><td>0,05</td></tr><tr><th>30</th><td>0,00</td><td>0,00</td><td>0,00</td><td>0,00</td><td>0,00</td><td>0,00</td><td>0,00</td><td>0,00</td><td>0,00</td><td>0,00</td><td>0,05</td></tr></tbody></table><p>Beklenen kârı en büyüklemek için işletme kaç adet döküm yapmalıdır? Ayrıca Q = 25 için beklenen kârı ve en iyi Q için beklenen kârı bulunuz.</p>",
    "cevapTipi": "sayi",
    "cevaplar": [
      {
        "etiket": "Q = 25 için beklenen kâr E[P(25)]",
        "deger": 5030,
        "tolerans": 1,
        "birim": "$"
      },
      {
        "etiket": "Optimum döküm miktarı Q*",
        "deger": 29,
        "tolerans": 0,
        "birim": "adet"
      },
      {
        "etiket": "Q* için beklenen kâr",
        "deger": 11050,
        "tolerans": 1,
        "birim": "$"
      }
    ],
    "mantik": "<p>Her Q için kusursuz ürün sayısı x rastgele bir değişkendir. Önce gelir R(Q,x) ve maliyet C(Q,x) fonksiyonları, sonra kâr P(Q,x) = R − C yazılır; her Q için E[P(Q)] = Σ P(Q,x)·p(x) hesaplanır ve en büyük değeri veren Q seçilir.</p>",
    "cozum": "<ol><li><b>Gelir:</b> R(Q,x) = 300Q (x &lt; 20); 2000·20 + 1500(x − 20) + 300(Q − x) (20 ≤ x ≤ 22); 2000·20 + 1500·2 + 300(Q − 22) (x &gt; 22).</li><li><b>Maliyet:</b> C(Q,x) = 700Q (x &lt; 20); 700Q + 500x (20 ≤ x ≤ 22); 700Q + 500·22 (x &gt; 22). (Son işlem yalnızca satılan ürünler için yapılır.)</li><li><b>Kâr:</b> P(Q,x) = −400Q (x &lt; 20); 10.000 + 700x − 400Q (20 ≤ x ≤ 22); 25.400 − 400Q (x &gt; 22).</li><li><b>Beklenen kâr:</b> E[P(Q)] = −400Q + 24.000·p(20) + 24.700·p(21) + 25.400·Σ<sub>x ≥ 22</sub> p(x).</li><li><b>Örnek (Q = 25):</b> −400·25 + 24.000·0,10 + 24.700·0,10 + 25.400·0,40 = 5.030 $.</li><li><b>Tüm değerler:</b></li></ol><table><thead><tr><th>Q</th><th>E[P(Q)] ($)</th></tr></thead><tbody><tr><th>20</th><td>-5.600</td></tr><tr><th>21</th><td>-3.530</td></tr><tr><th>22</th><td>-190</td></tr><tr><th>23</th><td>750</td></tr><tr><th>24</th><td>2.890</td></tr><tr><th>25</th><td>5.030</td></tr><tr><th>26</th><td>5.900</td></tr><tr><th>27</th><td>6.770</td></tr><tr><th>28</th><td>8.910</td></tr><tr><th>29</th><td>11.050</td></tr><tr><th>30</th><td>10.720</td></tr></tbody></table><p>En büyük beklenen kâr Q = <b>29</b> için 11.050 $'dır: 29 döküm yapılır, 22 tanesi müşteriye satılır, kalan 7 tanesi eritilerek geri kazanılır.</p>"
  },
  {
    "ders": "tesis",
    "hafta": 3,
    "id": "tesis-h3-iskarta-02",
    "konu": "Iskarta Payı Problemi",
    "kaynak": "Hafta 3, slayt 28-29 (Örnek-8, Ödev)",
    "baslik": "Sipariş üzerine üretim: gelir, maliyet ve kazancın beklenen değer fonksiyonları",
    "soru": "<p>Sipariş üzerine üretim yapan bir işletme, küçük adetli siparişlerle çalıştığından ötürü her bir işlem için belirli bir fire oranını bilememekte; fakat üretim adetlerine göre fire adetleri için olasılıkları belirleyebilmektedir. İşletmeye gelen bir sipariş doğrultusunda müşteri 42 adet ürün istemektedir. Her bir ürün müşteriye 750 TL'den satılacaktır. İşletme fireler ile ilgili özel durumunu müşteriye ilettiğinde, müşteri en az 40, en fazla 44 ürün alabileceğini belirtmiştir. Müşteri kaliteli üründen bahsetmektedir. İşletme, ürünlerin adedini 425 TL'ye üretebilmektedir. Kalitesiz ya da satılmayan ürünlerden ürün başına 150 TL'lik malzeme geri kazanılmaktadır (geri dönüşüm).</p><p><b>(a)</b> Q adet üretildiğinde x adedinin kaliteli olması durumunda gelir R(Q,x), maliyet C(Q,x) ve kâr P(Q,x) fonksiyonlarını yazınız; p(x) olasılıklarını kullanarak gelirin, maliyetin ve kazancın beklenen değer fonksiyonlarını formüle ediniz. (Yorum: x &lt; 40 ise müşteri hiçbir şey almaz, tüm ürünler geri dönüştürülür; 40 ≤ x ≤ 44 ise x ürün alınır; x &gt; 44 ise 44 ürün alınır.)</p><p><b>(b)</b> Müşteri şöyle bir teklif sunsun: kaliteli ürün sayısı tam 42 ise 42 ürünün her birine 750 TL öder. x &lt; 40 ise hiç ürün almaz. 40 ≤ x ≤ 41 ise x ürünün tamamını, x ≥ 43 ise en fazla 45 ürünü (min{x, 45} adet) alır ve bu durumlarda aldığı <i>her</i> ürün için 50 TL az, yani 700 TL öder. İşletme, müşterinin alabileceği kaliteli ürünlerin tamamını teslim eder (x ≥ 43 iken yalnızca 42 adet teslim etme seçeneği yoktur). İşletme de şu imkâna sahip olsun: satılmayan her kaliteli üründen 250 TL'lik malzeme geri kazanılır (kalitesiz ürünlerde 150 TL aynen kalır). Üretim maliyeti: ilk 25 kaliteli ürünün her biri 425 TL, 26. kaliteli ürün <i>dahil</i> sonraki her kaliteli ürün 400 TL; kalitesiz ürünlerin her biri 425 TL. Diğer bilgiler ilk durumla aynıdır. Bu yeni durum için gelir, maliyet ve kazancın beklenen değer fonksiyonlarını oluşturunuz.</p>",
    "cevapTipi": "yok",
    "cevaplar": [],
    "mantik": "<p>Önce x (kaliteli adet) için durumlar ayrılır: sipariş alt sınırının altı, sipariş aralığı, üst sınırın üstü. Her durum için gelir (satış + geri dönüşüm) ve maliyet yazılır, kâr = gelir − maliyet olur. Beklenen değer, her durumun fonksiyonunun olasılıkla çarpılıp x üzerinden toplanmasıdır (Örnek-7'deki yapı).</p>",
    "cozum": "<p><b>(a)</b></p><ol><li><b>Gelir:</b> R(Q,x) = 150Q (x &lt; 40); 750x + 150(Q − x) (40 ≤ x ≤ 44); 750·44 + 150(Q − 44) (x &gt; 44).</li><li><b>Maliyet:</b> C(Q,x) = 425Q (her x için).</li><li><b>Kâr:</b> P(Q,x) = R − C = −275Q (x &lt; 40); 600x − 275Q (40 ≤ x ≤ 44); 26.400 − 275Q (x &gt; 44).</li><li><b>Beklenen değerler:</b> E[R(Q)] = Σ<sub>x=0</sub><sup>Q</sup> R(Q,x)·p(x); E[C(Q)] = 425Q; E[P(Q)] = Σ<sub>x=0</sub><sup>Q</sup> P(Q,x)·p(x) = −275Q + 600·Σ<sub>x=40</sub><sup>44</sup> x·p(x) + 26.400·Σ<sub>x=45</sub><sup>Q</sup> p(x).</li></ol><p><b>(b)</b> (Koşuldaki yoruma göre: 42 dışındaki miktarlarda alınan tüm ürünler 700 TL'den satılır, işletme alınabilecek tüm kaliteli ürünleri teslim eder.) Satılan adet s = min(x, 45) (x ≥ 40 ise).</p><ol><li><b>Gelir:</b> R(Q,x) = 250x + 150(Q − x) = 150Q + 100x (x &lt; 40, satın alınmaz); 700x + 150(Q − x) (40 ≤ x ≤ 45, x ≠ 42); 750·42 + 150(Q − 42) (x = 42); 700·45 + 250(x − 45) + 150(Q − x) (x &gt; 45).</li><li><b>Maliyet:</b> C(Q,x) = 425Q − 25·(x − 25)<sup>+</sup> (burada (x − 25)<sup>+</sup> = max{x − 25, 0}: 26. kaliteli üründen sonra her kaliteli ürün 25 TL daha ucuz).</li><li><b>Kâr:</b> P(Q,x) = R(Q,x) − C(Q,x) = −275Q + 100x + 25·(x − 25)<sup>+</sup> (x &lt; 40); 575x − 625 − 275Q (40 ≤ x ≤ 45, x ≠ 42); 25.625 − 275Q (x = 42); 125x + 19.625 − 275Q (x &gt; 45).</li><li><b>Beklenen değer:</b> E[R(Q)] = Σ<sub>x=0</sub><sup>Q</sup> R(Q,x)·p(x); E[C(Q)] = Σ<sub>x=0</sub><sup>Q</sup> C(Q,x)·p(x); E[P(Q)] = E[R(Q)] − E[C(Q)] = Σ<sub>x=0</sub><sup>Q</sup> P(Q,x)·p(x). Açık hali: E[P(Q)] = −275Q + Σ<sub>x=0</sub><sup>39</sup> [100x + 25·(x − 25)<sup>+</sup>]·p(x) + Σ<sub>x∈{40,41,43,44,45}</sub> (575x − 625)·p(x) + 25.625·p(42) + Σ<sub>x=46</sub><sup>Q</sup> (125x + 19.625)·p(x).</li></ol><p><i>Not: Slaytta bu ödevin cevabı verilmemiştir (cevap anahtarı yoktur); metindeki belirsiz ifadeler (özellikle \"50 TL az\" ve \"25 kaliteli ürüne kadar\") koşulda sabitlenen yorumla ele alınmıştır. Koşul bu yorumu açıkça sabitlediği için çözüm tektir. Slayttaki orijinal metin farklı okunabilir (ör. indirim yalnızca 42'yi aşan ürünlere ya da işletme x ≥ 43 iken yalnızca 42 adet teslim edebilir); sınavda yorumunuzu açıkça yazın.</i></p>"
  },
  {
    "ders": "tesis",
    "hafta": 3,
    "id": "tesis-h3-insanmak-01",
    "konu": "İnsan-Makine Şemaları",
    "kaynak": "Hafta 3, slayt 32-35",
    "baslik": "Bir operatör – bir makine ve bir operatör – üç makine: çevrim süresi ve boşta kalma",
    "soru": "<p>Bir operatör yarı otomatik makinelerle çalışmaktadır. Veriler:</p><ul><li>Operatörün parçayı makineye yüklemesi: 1 dk</li><li>Operatörün parçayı makineden sökmesi (boşaltma): 1 dk</li><li>Makinenin otomatik işlem süresi: 6 dk</li><li>Operatörün işlenmiş parçayı muayene edip paketlemesi: 0,5 dk</li><li>Makineler arası yürüme süresi: 0,5 dk (yalnızca birden fazla makine varsa)</li></ul><p><b>(a)</b> Operatör tek bir makineye bakıyorsa: çevrim süresi, bir çevrimde operatörün boşta kalma süresi, makinenin boşta kalma süresi ve üretim oranını (parça/dk) bulunuz.</p><p><b>(b)</b> Operatör aynı özellikte 3 makineye bakıyorsa (muayene ve paketleme her parça için yapılır): kararlı durumda çevrim süresini, operatörün ve her makinenin bir çevrimdeki boşta kalma süresini ve üretim oranını bulunuz. (a = ortak faaliyet süresi = yükleme + boşaltma; b = operatörün bağımsız faaliyet süresi = yürüme + muayene.)</p>",
    "cevapTipi": "sayi",
    "cevaplar": [
      {
        "etiket": "(a) Çevrim süresi",
        "deger": 8,
        "tolerans": 0.01,
        "birim": "dk"
      },
      {
        "etiket": "(a) Operatörün boşta kalma süresi",
        "deger": 5.5,
        "tolerans": 0.01,
        "birim": "dk"
      },
      {
        "etiket": "(a) Makinenin boşta kalma süresi",
        "deger": 0,
        "tolerans": 0.01,
        "birim": "dk"
      },
      {
        "etiket": "(a) Üretim oranı",
        "deger": 0.125,
        "tolerans": 0.001,
        "birim": "parça/dk"
      },
      {
        "etiket": "(b) Kararlı durum çevrim süresi (3 makine)",
        "deger": 9,
        "tolerans": 0.01,
        "birim": "dk"
      },
      {
        "etiket": "(b) Operatörün boşta kalma süresi",
        "deger": 0,
        "tolerans": 0.01,
        "birim": "dk"
      },
      {
        "etiket": "(b) Her makinenin boşta kalma süresi",
        "deger": 1,
        "tolerans": 0.01,
        "birim": "dk"
      },
      {
        "etiket": "(b) Üretim oranı",
        "deger": 0.333,
        "tolerans": 0.004,
        "birim": "parça/dk"
      }
    ],
    "mantik": "<p>Çevrimi ya makine (a + t) ya da operatör (m·(a + b)) belirler; hangisi büyükse çevrim süresi odur. Küçük olan tarafta boşta kalma oluşur. Üretim oranı = çevrimde üretilen parça sayısı / çevrim süresidir (her makinede bir çevrimde bir parça).</p>",
    "cozum": "<p><b>(a)</b> Tek makine: a = 1 + 1 = 2 dk, t = 6 dk; yürüme yok, operatör yalnızca muayene yapar (b = 0,5 dk).</p><ol><li>Çevrim süresi: T<sub>c</sub> = a + t = 2 + 6 = <b>8 dk</b> (makine belirler).</li><li>Operatörün boş süresi: I<sub>o</sub> = (a + t) − m(a + b) = 8 − 1·(2 + 0,5) = <b>5,5 dk</b>. Makine boşta kalmaz: I<sub>m</sub> = <b>0</b>.</li><li>Üretim oranı: 1/8 = <b>0,125 parça/dk</b> (8 dk'da bir adet).</li></ol><div style=\"text-align:center;margin:12px 0\"><svg viewBox=\"0 0 270 274\" width=\"337.5\" role=\"img\" aria-label=\"Bir operatör bir makine insan-makine şeması\" style=\"max-width:100%;height:auto;color:inherit\" xmlns=\"http://www.w3.org/2000/svg\"><defs><pattern id=\"hp1\" width=\"6\" height=\"6\" patternUnits=\"userSpaceOnUse\" patternTransform=\"rotate(45)\"><line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1\" stroke-opacity=\"0.55\"/></pattern></defs><line x1=\"31\" y1=\"26\" x2=\"270\" y2=\"26\" stroke=\"currentColor\" stroke-opacity=\"0.18\" stroke-dasharray=\"2 3\" stroke-width=\"0.6\"/><text x=\"29\" y=\"29\" text-anchor=\"end\" font-size=\"8.5\" fill=\"currentColor\">0</text><line x1=\"31\" y1=\"41\" x2=\"270\" y2=\"41\" stroke=\"currentColor\" stroke-opacity=\"0.18\" stroke-dasharray=\"2 3\" stroke-width=\"0.6\"/><text x=\"29\" y=\"44\" text-anchor=\"end\" font-size=\"8.5\" fill=\"currentColor\">1</text><line x1=\"31\" y1=\"131\" x2=\"270\" y2=\"131\" stroke=\"currentColor\" stroke-opacity=\"0.18\" stroke-dasharray=\"2 3\" stroke-width=\"0.6\"/><text x=\"29\" y=\"134\" text-anchor=\"end\" font-size=\"8.5\" fill=\"currentColor\">7</text><line x1=\"31\" y1=\"146\" x2=\"270\" y2=\"146\" stroke=\"currentColor\" stroke-opacity=\"0.18\" stroke-dasharray=\"2 3\" stroke-width=\"0.6\"/><text x=\"29\" y=\"149\" text-anchor=\"end\" font-size=\"8.5\" fill=\"currentColor\">8</text><line x1=\"31\" y1=\"161\" x2=\"270\" y2=\"161\" stroke=\"currentColor\" stroke-opacity=\"0.18\" stroke-dasharray=\"2 3\" stroke-width=\"0.6\"/><text x=\"29\" y=\"164\" text-anchor=\"end\" font-size=\"8.5\" fill=\"currentColor\">9</text><line x1=\"31\" y1=\"168.5\" x2=\"270\" y2=\"168.5\" stroke=\"currentColor\" stroke-opacity=\"0.18\" stroke-dasharray=\"2 3\" stroke-width=\"0.6\"/><text x=\"29\" y=\"171.5\" text-anchor=\"end\" font-size=\"8.5\" fill=\"currentColor\">9,5</text><line x1=\"31\" y1=\"251\" x2=\"270\" y2=\"251\" stroke=\"currentColor\" stroke-opacity=\"0.18\" stroke-dasharray=\"2 3\" stroke-width=\"0.6\"/><text x=\"29\" y=\"254\" text-anchor=\"end\" font-size=\"8.5\" fill=\"currentColor\">15</text><line x1=\"31\" y1=\"266\" x2=\"270\" y2=\"266\" stroke=\"currentColor\" stroke-opacity=\"0.18\" stroke-dasharray=\"2 3\" stroke-width=\"0.6\"/><text x=\"29\" y=\"269\" text-anchor=\"end\" font-size=\"8.5\" fill=\"currentColor\">16</text><text x=\"4\" y=\"12\" font-size=\"8.5\" fill=\"currentColor\">dk</text><text x=\"93\" y=\"16\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"currentColor\">Operatör</text><rect x=\"38\" y=\"26\" width=\"110\" height=\"15\" fill=\"currentColor\" fill-opacity=\"0.34\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"93\" y=\"36.5\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">Yükleme</text><rect x=\"38\" y=\"41\" width=\"110\" height=\"90\" fill=\"url(#hp1)\" stroke=\"currentColor\" stroke-opacity=\"0.5\" stroke-width=\"0.8\"/><text x=\"93\" y=\"89\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">Boş</text><rect x=\"38\" y=\"131\" width=\"110\" height=\"15\" fill=\"currentColor\" fill-opacity=\"0.34\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"93\" y=\"141.5\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">Boşaltma</text><rect x=\"38\" y=\"146\" width=\"110\" height=\"15\" fill=\"currentColor\" fill-opacity=\"0.34\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"93\" y=\"156.5\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">Yükleme</text><rect x=\"38\" y=\"161\" width=\"110\" height=\"7.5\" fill=\"currentColor\" fill-opacity=\"0.2\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><rect x=\"38\" y=\"168.5\" width=\"110\" height=\"82.5\" fill=\"url(#hp1)\" stroke=\"currentColor\" stroke-opacity=\"0.5\" stroke-width=\"0.8\"/><text x=\"93\" y=\"212.75\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">Boş</text><rect x=\"38\" y=\"251\" width=\"110\" height=\"15\" fill=\"currentColor\" fill-opacity=\"0.34\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"93\" y=\"261.5\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">Boşaltma</text><text x=\"211\" y=\"16\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"currentColor\">Makine</text><rect x=\"156\" y=\"26\" width=\"110\" height=\"15\" fill=\"currentColor\" fill-opacity=\"0.34\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"211\" y=\"36.5\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">Yükleme</text><rect x=\"156\" y=\"41\" width=\"110\" height=\"90\" fill=\"currentColor\" fill-opacity=\"0.08\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"211\" y=\"89\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">Otomatik çalışma</text><rect x=\"156\" y=\"131\" width=\"110\" height=\"15\" fill=\"currentColor\" fill-opacity=\"0.34\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"211\" y=\"141.5\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">Boşaltma</text><rect x=\"156\" y=\"146\" width=\"110\" height=\"15\" fill=\"currentColor\" fill-opacity=\"0.34\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"211\" y=\"156.5\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">Yükleme</text><rect x=\"156\" y=\"161\" width=\"110\" height=\"90\" fill=\"currentColor\" fill-opacity=\"0.08\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"211\" y=\"209\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">Otomatik çalışma</text><rect x=\"156\" y=\"251\" width=\"110\" height=\"15\" fill=\"currentColor\" fill-opacity=\"0.34\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"211\" y=\"261.5\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">Boşaltma</text></svg></div><p><b>(b)</b> 3 makine: a = 2 dk, b = 0,5 (yürüme) + 0,5 (muayene) = 1 dk, t = 6 dk. İdeal makine sayısı n' = (a + t)/(a + b) = 8/3 = 2,67 &lt; 3 olduğundan operatör çevrimi belirler.</p><ol><li>Çevrim süresi: T<sub>c</sub> = m(a + b) = 3·(2 + 1) = <b>9 dk</b>.</li><li>Operatör boşta kalmaz: I<sub>o</sub> = <b>0</b>. Her makine: I<sub>m</sub> = m(a + b) − (a + t) = 9 − 8 = <b>1 dk</b>.</li><li>Üretim oranı: 3/9 = <b>0,33 parça/dk</b>.</li><li>Şemada ilk 12 dk <i>geçişli durum</i>, 12. dk'dan sonraki 9 dk'lık tekrar eden kısım <i>durağan durum</i>dur; hesaplar durağan duruma aittir.</li></ol><div style=\"text-align:center;margin:12px 0\"><svg viewBox=\"0 0 386 298\" width=\"482.5\" role=\"img\" aria-label=\"Bir operatör üç makine insan-makine şeması\" style=\"max-width:100%;height:auto;color:inherit\" xmlns=\"http://www.w3.org/2000/svg\"><defs><pattern id=\"hp2\" width=\"6\" height=\"6\" patternUnits=\"userSpaceOnUse\" patternTransform=\"rotate(45)\"><line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1\" stroke-opacity=\"0.55\"/></pattern></defs><line x1=\"31\" y1=\"26\" x2=\"386\" y2=\"26\" stroke=\"currentColor\" stroke-opacity=\"0.18\" stroke-dasharray=\"2 3\" stroke-width=\"0.6\"/><text x=\"29\" y=\"29\" text-anchor=\"end\" font-size=\"8.5\" fill=\"currentColor\">0</text><line x1=\"31\" y1=\"59\" x2=\"386\" y2=\"59\" stroke=\"currentColor\" stroke-opacity=\"0.18\" stroke-dasharray=\"2 3\" stroke-width=\"0.6\"/><text x=\"29\" y=\"62\" text-anchor=\"end\" font-size=\"8.5\" fill=\"currentColor\">3</text><line x1=\"31\" y1=\"92\" x2=\"386\" y2=\"92\" stroke=\"currentColor\" stroke-opacity=\"0.18\" stroke-dasharray=\"2 3\" stroke-width=\"0.6\"/><text x=\"29\" y=\"95\" text-anchor=\"end\" font-size=\"8.5\" fill=\"currentColor\">6</text><line x1=\"31\" y1=\"125\" x2=\"386\" y2=\"125\" stroke=\"currentColor\" stroke-opacity=\"0.18\" stroke-dasharray=\"2 3\" stroke-width=\"0.6\"/><text x=\"29\" y=\"128\" text-anchor=\"end\" font-size=\"8.5\" fill=\"currentColor\">9</text><line x1=\"31\" y1=\"158\" x2=\"386\" y2=\"158\" stroke=\"currentColor\" stroke-opacity=\"0.18\" stroke-dasharray=\"2 3\" stroke-width=\"0.6\"/><text x=\"29\" y=\"161\" text-anchor=\"end\" font-size=\"8.5\" fill=\"currentColor\">12</text><line x1=\"31\" y1=\"191\" x2=\"386\" y2=\"191\" stroke=\"currentColor\" stroke-opacity=\"0.18\" stroke-dasharray=\"2 3\" stroke-width=\"0.6\"/><text x=\"29\" y=\"194\" text-anchor=\"end\" font-size=\"8.5\" fill=\"currentColor\">15</text><line x1=\"31\" y1=\"224\" x2=\"386\" y2=\"224\" stroke=\"currentColor\" stroke-opacity=\"0.18\" stroke-dasharray=\"2 3\" stroke-width=\"0.6\"/><text x=\"29\" y=\"227\" text-anchor=\"end\" font-size=\"8.5\" fill=\"currentColor\">18</text><line x1=\"31\" y1=\"257\" x2=\"386\" y2=\"257\" stroke=\"currentColor\" stroke-opacity=\"0.18\" stroke-dasharray=\"2 3\" stroke-width=\"0.6\"/><text x=\"29\" y=\"260\" text-anchor=\"end\" font-size=\"8.5\" fill=\"currentColor\">21</text><line x1=\"31\" y1=\"290\" x2=\"386\" y2=\"290\" stroke=\"currentColor\" stroke-opacity=\"0.18\" stroke-dasharray=\"2 3\" stroke-width=\"0.6\"/><text x=\"29\" y=\"293\" text-anchor=\"end\" font-size=\"8.5\" fill=\"currentColor\">24</text><text x=\"4\" y=\"12\" font-size=\"8.5\" fill=\"currentColor\">dk</text><text x=\"78\" y=\"16\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"currentColor\">Operatör</text><rect x=\"38\" y=\"26\" width=\"80\" height=\"11\" fill=\"currentColor\" fill-opacity=\"0.34\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"78\" y=\"34.5\" text-anchor=\"middle\" font-size=\"7.5\" fill=\"currentColor\">Y1</text><rect x=\"38\" y=\"37\" width=\"80\" height=\"5.5\" fill=\"currentColor\" fill-opacity=\"0.2\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><rect x=\"38\" y=\"42.5\" width=\"80\" height=\"11\" fill=\"currentColor\" fill-opacity=\"0.34\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"78\" y=\"51\" text-anchor=\"middle\" font-size=\"7.5\" fill=\"currentColor\">Y2</text><rect x=\"38\" y=\"53.5\" width=\"80\" height=\"5.5\" fill=\"currentColor\" fill-opacity=\"0.2\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><rect x=\"38\" y=\"59\" width=\"80\" height=\"11\" fill=\"currentColor\" fill-opacity=\"0.34\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"78\" y=\"67.5\" text-anchor=\"middle\" font-size=\"7.5\" fill=\"currentColor\">Y3</text><rect x=\"38\" y=\"70\" width=\"80\" height=\"5.5\" fill=\"currentColor\" fill-opacity=\"0.2\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><rect x=\"38\" y=\"75.5\" width=\"80\" height=\"27.5\" fill=\"url(#hp2)\" stroke=\"currentColor\" stroke-opacity=\"0.5\" stroke-width=\"0.8\"/><text x=\"78\" y=\"92.25\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">Boş</text><rect x=\"38\" y=\"103\" width=\"80\" height=\"11\" fill=\"currentColor\" fill-opacity=\"0.34\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"78\" y=\"111.5\" text-anchor=\"middle\" font-size=\"7.5\" fill=\"currentColor\">B1</text><rect x=\"38\" y=\"114\" width=\"80\" height=\"11\" fill=\"currentColor\" fill-opacity=\"0.34\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"78\" y=\"122.5\" text-anchor=\"middle\" font-size=\"7.5\" fill=\"currentColor\">Y1</text><rect x=\"38\" y=\"125\" width=\"80\" height=\"5.5\" fill=\"currentColor\" fill-opacity=\"0.2\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><rect x=\"38\" y=\"130.5\" width=\"80\" height=\"5.5\" fill=\"currentColor\" fill-opacity=\"0.2\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><rect x=\"38\" y=\"136\" width=\"80\" height=\"11\" fill=\"currentColor\" fill-opacity=\"0.34\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"78\" y=\"144.5\" text-anchor=\"middle\" font-size=\"7.5\" fill=\"currentColor\">B2</text><rect x=\"38\" y=\"147\" width=\"80\" height=\"11\" fill=\"currentColor\" fill-opacity=\"0.34\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"78\" y=\"155.5\" text-anchor=\"middle\" font-size=\"7.5\" fill=\"currentColor\">Y2</text><rect x=\"38\" y=\"158\" width=\"80\" height=\"5.5\" fill=\"currentColor\" fill-opacity=\"0.2\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><rect x=\"38\" y=\"163.5\" width=\"80\" height=\"5.5\" fill=\"currentColor\" fill-opacity=\"0.2\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><rect x=\"38\" y=\"169\" width=\"80\" height=\"11\" fill=\"currentColor\" fill-opacity=\"0.34\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"78\" y=\"177.5\" text-anchor=\"middle\" font-size=\"7.5\" fill=\"currentColor\">B3</text><rect x=\"38\" y=\"180\" width=\"80\" height=\"11\" fill=\"currentColor\" fill-opacity=\"0.34\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"78\" y=\"188.5\" text-anchor=\"middle\" font-size=\"7.5\" fill=\"currentColor\">Y3</text><rect x=\"38\" y=\"191\" width=\"80\" height=\"5.5\" fill=\"currentColor\" fill-opacity=\"0.2\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><rect x=\"38\" y=\"196.5\" width=\"80\" height=\"5.5\" fill=\"currentColor\" fill-opacity=\"0.2\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><rect x=\"38\" y=\"202\" width=\"80\" height=\"11\" fill=\"currentColor\" fill-opacity=\"0.34\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"78\" y=\"210.5\" text-anchor=\"middle\" font-size=\"7.5\" fill=\"currentColor\">B1</text><rect x=\"38\" y=\"213\" width=\"80\" height=\"11\" fill=\"currentColor\" fill-opacity=\"0.34\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"78\" y=\"221.5\" text-anchor=\"middle\" font-size=\"7.5\" fill=\"currentColor\">Y1</text><rect x=\"38\" y=\"224\" width=\"80\" height=\"5.5\" fill=\"currentColor\" fill-opacity=\"0.2\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><rect x=\"38\" y=\"229.5\" width=\"80\" height=\"5.5\" fill=\"currentColor\" fill-opacity=\"0.2\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><rect x=\"38\" y=\"235\" width=\"80\" height=\"11\" fill=\"currentColor\" fill-opacity=\"0.34\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"78\" y=\"243.5\" text-anchor=\"middle\" font-size=\"7.5\" fill=\"currentColor\">B2</text><rect x=\"38\" y=\"246\" width=\"80\" height=\"11\" fill=\"currentColor\" fill-opacity=\"0.34\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"78\" y=\"254.5\" text-anchor=\"middle\" font-size=\"7.5\" fill=\"currentColor\">Y2</text><rect x=\"38\" y=\"257\" width=\"80\" height=\"5.5\" fill=\"currentColor\" fill-opacity=\"0.2\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><rect x=\"38\" y=\"262.5\" width=\"80\" height=\"5.5\" fill=\"currentColor\" fill-opacity=\"0.2\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><rect x=\"38\" y=\"268\" width=\"80\" height=\"11\" fill=\"currentColor\" fill-opacity=\"0.34\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"78\" y=\"276.5\" text-anchor=\"middle\" font-size=\"7.5\" fill=\"currentColor\">B3</text><rect x=\"38\" y=\"279\" width=\"80\" height=\"11\" fill=\"currentColor\" fill-opacity=\"0.34\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"78\" y=\"287.5\" text-anchor=\"middle\" font-size=\"7.5\" fill=\"currentColor\">Y3</text><text x=\"166\" y=\"16\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"currentColor\">Makine 1</text><rect x=\"126\" y=\"26\" width=\"80\" height=\"11\" fill=\"currentColor\" fill-opacity=\"0.34\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"166\" y=\"34.5\" text-anchor=\"middle\" font-size=\"7.5\" fill=\"currentColor\">Y</text><rect x=\"126\" y=\"37\" width=\"80\" height=\"66\" fill=\"currentColor\" fill-opacity=\"0.08\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"166\" y=\"73\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">R</text><rect x=\"126\" y=\"103\" width=\"80\" height=\"11\" fill=\"currentColor\" fill-opacity=\"0.34\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"166\" y=\"111.5\" text-anchor=\"middle\" font-size=\"7.5\" fill=\"currentColor\">B</text><rect x=\"126\" y=\"114\" width=\"80\" height=\"11\" fill=\"currentColor\" fill-opacity=\"0.34\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"166\" y=\"122.5\" text-anchor=\"middle\" font-size=\"7.5\" fill=\"currentColor\">Y</text><rect x=\"126\" y=\"125\" width=\"80\" height=\"66\" fill=\"currentColor\" fill-opacity=\"0.08\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"166\" y=\"161\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">R</text><rect x=\"126\" y=\"191\" width=\"80\" height=\"11\" fill=\"url(#hp2)\" stroke=\"currentColor\" stroke-opacity=\"0.5\" stroke-width=\"0.8\"/><text x=\"166\" y=\"199.5\" text-anchor=\"middle\" font-size=\"7.5\" fill=\"currentColor\">Boş</text><rect x=\"126\" y=\"202\" width=\"80\" height=\"11\" fill=\"currentColor\" fill-opacity=\"0.34\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"166\" y=\"210.5\" text-anchor=\"middle\" font-size=\"7.5\" fill=\"currentColor\">B</text><rect x=\"126\" y=\"213\" width=\"80\" height=\"11\" fill=\"currentColor\" fill-opacity=\"0.34\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"166\" y=\"221.5\" text-anchor=\"middle\" font-size=\"7.5\" fill=\"currentColor\">Y</text><rect x=\"126\" y=\"224\" width=\"80\" height=\"66\" fill=\"currentColor\" fill-opacity=\"0.08\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"166\" y=\"260\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">R</text><text x=\"254\" y=\"16\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"currentColor\">Makine 2</text><rect x=\"214\" y=\"26\" width=\"80\" height=\"16.5\" fill=\"url(#hp2)\" stroke=\"currentColor\" stroke-opacity=\"0.5\" stroke-width=\"0.8\"/><text x=\"254\" y=\"37.25\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">Boş</text><rect x=\"214\" y=\"42.5\" width=\"80\" height=\"11\" fill=\"currentColor\" fill-opacity=\"0.34\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"254\" y=\"51\" text-anchor=\"middle\" font-size=\"7.5\" fill=\"currentColor\">Y</text><rect x=\"214\" y=\"53.5\" width=\"80\" height=\"66\" fill=\"currentColor\" fill-opacity=\"0.08\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"254\" y=\"89.5\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">R</text><rect x=\"214\" y=\"119.5\" width=\"80\" height=\"16.5\" fill=\"url(#hp2)\" stroke=\"currentColor\" stroke-opacity=\"0.5\" stroke-width=\"0.8\"/><text x=\"254\" y=\"130.75\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">Boş</text><rect x=\"214\" y=\"136\" width=\"80\" height=\"11\" fill=\"currentColor\" fill-opacity=\"0.34\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"254\" y=\"144.5\" text-anchor=\"middle\" font-size=\"7.5\" fill=\"currentColor\">B</text><rect x=\"214\" y=\"147\" width=\"80\" height=\"11\" fill=\"currentColor\" fill-opacity=\"0.34\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"254\" y=\"155.5\" text-anchor=\"middle\" font-size=\"7.5\" fill=\"currentColor\">Y</text><rect x=\"214\" y=\"158\" width=\"80\" height=\"66\" fill=\"currentColor\" fill-opacity=\"0.08\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"254\" y=\"194\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">R</text><rect x=\"214\" y=\"224\" width=\"80\" height=\"11\" fill=\"url(#hp2)\" stroke=\"currentColor\" stroke-opacity=\"0.5\" stroke-width=\"0.8\"/><text x=\"254\" y=\"232.5\" text-anchor=\"middle\" font-size=\"7.5\" fill=\"currentColor\">Boş</text><rect x=\"214\" y=\"235\" width=\"80\" height=\"11\" fill=\"currentColor\" fill-opacity=\"0.34\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"254\" y=\"243.5\" text-anchor=\"middle\" font-size=\"7.5\" fill=\"currentColor\">B</text><rect x=\"214\" y=\"246\" width=\"80\" height=\"11\" fill=\"currentColor\" fill-opacity=\"0.34\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"254\" y=\"254.5\" text-anchor=\"middle\" font-size=\"7.5\" fill=\"currentColor\">Y</text><rect x=\"214\" y=\"257\" width=\"80\" height=\"33\" fill=\"currentColor\" fill-opacity=\"0.08\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"254\" y=\"276.5\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">R</text><text x=\"342\" y=\"16\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"currentColor\">Makine 3</text><rect x=\"302\" y=\"26\" width=\"80\" height=\"33\" fill=\"url(#hp2)\" stroke=\"currentColor\" stroke-opacity=\"0.5\" stroke-width=\"0.8\"/><text x=\"342\" y=\"45.5\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">Boş</text><rect x=\"302\" y=\"59\" width=\"80\" height=\"11\" fill=\"currentColor\" fill-opacity=\"0.34\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"342\" y=\"67.5\" text-anchor=\"middle\" font-size=\"7.5\" fill=\"currentColor\">Y</text><rect x=\"302\" y=\"70\" width=\"80\" height=\"66\" fill=\"currentColor\" fill-opacity=\"0.08\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"342\" y=\"106\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">R</text><rect x=\"302\" y=\"136\" width=\"80\" height=\"33\" fill=\"url(#hp2)\" stroke=\"currentColor\" stroke-opacity=\"0.5\" stroke-width=\"0.8\"/><text x=\"342\" y=\"155.5\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">Boş</text><rect x=\"302\" y=\"169\" width=\"80\" height=\"11\" fill=\"currentColor\" fill-opacity=\"0.34\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"342\" y=\"177.5\" text-anchor=\"middle\" font-size=\"7.5\" fill=\"currentColor\">B</text><rect x=\"302\" y=\"180\" width=\"80\" height=\"11\" fill=\"currentColor\" fill-opacity=\"0.34\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"342\" y=\"188.5\" text-anchor=\"middle\" font-size=\"7.5\" fill=\"currentColor\">Y</text><rect x=\"302\" y=\"191\" width=\"80\" height=\"66\" fill=\"currentColor\" fill-opacity=\"0.08\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"342\" y=\"227\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">R</text><rect x=\"302\" y=\"257\" width=\"80\" height=\"11\" fill=\"url(#hp2)\" stroke=\"currentColor\" stroke-opacity=\"0.5\" stroke-width=\"0.8\"/><text x=\"342\" y=\"265.5\" text-anchor=\"middle\" font-size=\"7.5\" fill=\"currentColor\">Boş</text><rect x=\"302\" y=\"268\" width=\"80\" height=\"11\" fill=\"currentColor\" fill-opacity=\"0.34\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"342\" y=\"276.5\" text-anchor=\"middle\" font-size=\"7.5\" fill=\"currentColor\">B</text><rect x=\"302\" y=\"279\" width=\"80\" height=\"11\" fill=\"currentColor\" fill-opacity=\"0.34\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"342\" y=\"287.5\" text-anchor=\"middle\" font-size=\"7.5\" fill=\"currentColor\">Y</text></svg></div><p><i>Operatör sütununda Y = yükleme, B = boşaltma; ardışık iki açık bloktan ilki muayene-paketleme (M&amp;P), ikincisi yürümedir (0,5'er dk).</i></p><p><i>Şemada koyu bloklar operatör ve makinenin ortak faaliyetini (yükleme/boşaltma), açık bloklar operatörün bağımsız faaliyetini (yürüme, muayene), \"R\" makinenin otomatik çalışmasını, taramalı bloklar boş kalmayı gösterir.</i></p>"
  },
  {
    "ders": "tesis",
    "hafta": 3,
    "id": "tesis-h3-insanmak-02",
    "konu": "İnsan-Makine Şemaları",
    "kaynak": "Hafta 3, slayt 38-40 (Örnek-9, Örnek-9.1)",
    "baslik": "Bir operatöre atanabilecek ideal makine sayısı ve boş süreler",
    "soru": "<p>Aynı özellikte yarı otomatik makinelere bakan bir operatör için: a = 2 dk (makine yükleme + boşaltma süresi, ortak faaliyet), t = 6 dk (makinenin otomatik çalışma süresi), b = 1 dk (operatörün bağımsız faaliyeti: yürüme + muayene ve paketleme).</p><p>(a) İdeal (teorik) makine sayısı n' kaçtır? (b) Operatöre m = 2 makine atanırsa tekrarlı çevrim süresi T<sub>c</sub>, operatörün boş zamanı I<sub>o</sub> ve makinenin boş zamanı I<sub>m</sub> nedir? (c) m = 3 makine atanırsa T<sub>c</sub>, I<sub>o</sub> ve I<sub>m</sub> nedir?</p>",
    "cevapTipi": "sayi",
    "cevaplar": [
      {
        "etiket": "(a) n'",
        "deger": 2.67,
        "tolerans": 0.01,
        "birim": "makine"
      },
      {
        "etiket": "(b) m = 2 için T_c",
        "deger": 8,
        "tolerans": 0.01,
        "birim": "dk"
      },
      {
        "etiket": "(b) m = 2 için I_o",
        "deger": 2,
        "tolerans": 0.01,
        "birim": "dk"
      },
      {
        "etiket": "(b) m = 2 için I_m",
        "deger": 0,
        "tolerans": 0.01,
        "birim": "dk"
      },
      {
        "etiket": "(c) m = 3 için T_c",
        "deger": 9,
        "tolerans": 0.01,
        "birim": "dk"
      },
      {
        "etiket": "(c) m = 3 için I_o",
        "deger": 0,
        "tolerans": 0.01,
        "birim": "dk"
      },
      {
        "etiket": "(c) m = 3 için I_m",
        "deger": 1,
        "tolerans": 0.01,
        "birim": "dk"
      }
    ],
    "mantik": "<p>İdeal durumda ne operatör ne makine boş kalır: makine çevrimi (a + t), operatörün bir makineye harcadığı süre (a + b) olduğundan n' = (a + t)/(a + b). Gerçek makine sayısı m tam sayıdır. m ≤ n' ise çevrimi makine belirler (T<sub>c</sub> = a + t, operatör boşta kalır); m &gt; n' ise çevrimi operatör belirler (T<sub>c</sub> = m(a + b), makineler boşta kalır).</p>",
    "cozum": "<ol><li><b>(a)</b> n' = (a + t)/(a + b) = (2 + 6)/(2 + 1) = 8/3 = <b>2,67</b>. Kesirli sayıda makine atanamayacağından m = 2 veya 3 değerlendirilir.</li><li><b>(b) m = 2 ≤ n':</b> T<sub>c</sub> = a + t = <b>8 dk</b>. I<sub>o</sub> = (a + t) − m(a + b) = 8 − 2·3 = <b>2 dk</b>. I<sub>m</sub> = <b>0</b>. Üretim periyodunu makine belirler, operatör boşta kalır.</li><li><b>(c) m = 3 &gt; n':</b> T<sub>c</sub> = m(a + b) = 3·3 = <b>9 dk</b>. I<sub>o</sub> = <b>0</b>. I<sub>m</sub> = m(a + b) − (a + t) = 9 − 8 = <b>1 dk</b>. Çevrimi operatör belirler, her makine 1 dk boşta kalır.</li></ol>"
  },
  {
    "ders": "tesis",
    "hafta": 3,
    "id": "tesis-h3-insanmak-03",
    "konu": "İnsan-Makine Şemaları",
    "kaynak": "Hafta 3, slayt 41-45 (Örnek-10, Örnek-9.2)",
    "baslik": "Birim üretim maliyeti ve θ ölçütü ile operatöre atanacak makine sayısı",
    "soru": "<p>Birim üretim başına makine ve işçilik maliyetleri toplamı en küçüklenmek istenmektedir. c<sub>1</sub> = adam-saat başına maliyet, c<sub>2</sub> = makine-saat başına maliyet; m makine atandığında birim üretim maliyeti TC(m) = (c<sub>1</sub> + m·c<sub>2</sub>)·T<sub>c</sub> / m olarak tanımlanır. n, n' değerinin tam sayı kısmıdır ve θ = TC(n) / TC(n + 1) oranı kullanılır (θ &lt; 1 ise n, θ &gt; 1 ise n + 1 makine atanır).</p><p><b>(a)</b> θ için formülü çıkarınız (ε = c<sub>1</sub>/c<sub>2</sub> alınız).</p><p><b>(b)</b> Örnek-9.2: c<sub>1</sub> = 15 $/saat, c<sub>2</sub> = 50 $/saat ve n' = 2,67 (a = 2 dk, t = 6 dk, b = 1 dk) ise ε, θ ve operatöre atanması gereken makine sayısını bulunuz.</p>",
    "cevapTipi": "sayi",
    "cevaplar": [
      {
        "etiket": "ε = c₁/c₂",
        "deger": 0.3,
        "tolerans": 0.005,
        "birim": ""
      },
      {
        "etiket": "θ (n' = 2,67, n = 2)",
        "deger": 0.93,
        "tolerans": 0.005,
        "birim": ""
      },
      {
        "etiket": "Atanacak makine sayısı",
        "deger": 2,
        "tolerans": 0,
        "birim": "makine"
      }
    ],
    "mantik": "<p>n makinede çevrimi makine (a + t), n + 1 makinede operatör (n + 1)(a + b) belirler. Bu iki durum maliyet oranında yerine konunca (a + t)/(a + b) = n' ortaya çıkar ve θ = (n'/n)·(ε + n)/(ε + n + 1) olur. θ &lt; 1 ise n makine, θ &gt; 1 ise n + 1 makine daha ucuzdur.</p>",
    "cozum": "<p><b>(a) Formülün çıkarılması</b></p><ol><li>TC(n) = [T<sub>c</sub>(n)/(60·n)]·(c<sub>1</sub> + n·c<sub>2</sub>), TC(n + 1) = [T<sub>c</sub>(n + 1)/(60·(n + 1))]·[c<sub>1</sub> + (n + 1)·c<sub>2</sub>].</li><li>n ≤ n' olduğundan n makinede çevrimi makine belirler: T<sub>c</sub>(n) = a + t. (n + 1) &gt; n' olduğundan (n + 1) makinede çevrimi operatör belirler: T<sub>c</sub>(n + 1) = (n + 1)(a + b).</li><li>θ = [(1/n)·(a + t)·(c<sub>1</sub> + n·c<sub>2</sub>)] / [(1/(n + 1))·(n + 1)(a + b)·(c<sub>1</sub> + (n + 1)·c<sub>2</sub>)] = (1/n)·[(a + t)/(a + b)]·(c<sub>1</sub> + n·c<sub>2</sub>)/(c<sub>1</sub> + n·c<sub>2</sub> + c<sub>2</sub>).</li><li>(a + t)/(a + b) = n' ve pay ve paydayı c<sub>2</sub>'ye bölüp ε = c<sub>1</sub>/c<sub>2</sub> alınca: <b>θ = (n'/n)·(ε + n)/(ε + n + 1)</b>.</li></ol><p><b>(b)</b></p><ol><li>ε = 15/50 = <b>0,30</b>; n' = 2,67 ⇒ n = 2.</li><li>θ = (2,67/2)·(0,30 + 2)/(0,30 + 2 + 1) = 1,335 × 0,697 = <b>0,930</b>.</li><li>θ = 0,930 &lt; 1 olduğundan TC(2) &lt; TC(3): operatöre <b>2 makine</b> atanmalıdır.</li></ol>"
  },
  {
    "ders": "tesis",
    "hafta": 3,
    "id": "tesis-h3-insanmak-04",
    "konu": "İnsan-Makine Şemaları",
    "kaynak": "Hafta 3, slayt 46-51 (Örnek-11)",
    "baslik": "Teorik makine sayısı, periyot, boş süreler, maliyet ve üretim oranına göre makine sayısı",
    "soru": "<p>Benzer tip kapasitede yarı otomatik makineler bulunan bir işletmede, bir operatöre atanacak optimum makine sayısının tespiti istenmektedir. Makine ve operatörün ortaklaşa faaliyetleri toplamı 2,5 dk, makinelerin otomatik çalışma süresi 4,5 dk'dır. Kontrol ve yürüme olmadığından b = 0 alınız. Ayrıca birim makine ve işçilik maliyetlerinin eşit olduğu bilinmektedir.</p><p><b>(a)</b> Kuramsal makine sayısı n' ile m = 2 ve m = 3 için periyot zamanlarını, operatörün m = 2 için ve her makinenin m = 3 için bir periyotta boş geçen sürelerini hesaplayınız.</p><p><b>(b)</b> Üretilen parça başına toplam maliyeti minimum kılan makine sayısını θ ile bulunuz (ε = 1).</p><p><b>(c)</b> Birim işçilik saati maliyeti 3 TL/saat, makine işletim maliyeti 10 TL/saat ise operatöre atanacak optimum makine sayısını bulunuz.</p><p><b>(d)</b> Standart üretim oranı q<sub>st</sub>(m) = m / T<sub>c</sub>(m) ölçütüne göre m = 2 ve m = 3 için üretim oranlarını bulunuz ve insan-makine şemaları ile doğrulayınız (şemaları kendiniz çizip çözümdeki şemalarla karşılaştırın).</p>",
    "cevapTipi": "sayi",
    "cevaplar": [
      {
        "etiket": "(a) n'",
        "deger": 2.8,
        "tolerans": 0.01,
        "birim": "makine"
      },
      {
        "etiket": "(a) T_c(2)",
        "deger": 7,
        "tolerans": 0.01,
        "birim": "dk"
      },
      {
        "etiket": "(a) T_c(3)",
        "deger": 7.5,
        "tolerans": 0.01,
        "birim": "dk"
      },
      {
        "etiket": "(a) m = 2 için operatörün boş süresi I_o",
        "deger": 2,
        "tolerans": 0.01,
        "birim": "dk"
      },
      {
        "etiket": "(a) m = 3 için her makinenin boş süresi I_m",
        "deger": 0.5,
        "tolerans": 0.01,
        "birim": "dk"
      },
      {
        "etiket": "(b) θ (ε = 1)",
        "deger": 1.05,
        "tolerans": 0.005,
        "birim": ""
      },
      {
        "etiket": "(b) Optimum makine sayısı",
        "deger": 3,
        "tolerans": 0,
        "birim": "makine"
      },
      {
        "etiket": "(c) θ (ε = 0,3)",
        "deger": 0.976,
        "tolerans": 0.007,
        "birim": ""
      },
      {
        "etiket": "(c) Optimum makine sayısı",
        "deger": 2,
        "tolerans": 0,
        "birim": "makine"
      },
      {
        "etiket": "(d) q_st(2)",
        "deger": 0.2857,
        "tolerans": 0.005,
        "birim": "adet/dk"
      },
      {
        "etiket": "(d) q_st(3)",
        "deger": 0.4,
        "tolerans": 0.002,
        "birim": "adet/dk"
      }
    ],
    "mantik": "<p>n' = (a + t)/(a + b) teorik sayıyı verir; n = ⌊n'⌋ ve n + 1 aday sayılardır. Süreyi hangi tarafın belirlediğine göre T<sub>c</sub> ve boş süreler hesaplanır. Maliyete göre karar θ = (n'/n)(ε + n)/(ε + n + 1) ile (θ &lt; 1 ⇒ n; θ &gt; 1 ⇒ n + 1), üretim hızına göre karar ise q<sub>st</sub> = m/T<sub>c</sub> değeri büyük olan seçilerek verilir.</p>",
    "cozum": "<ol><li><b>(a)</b> a = 2,5; t = 4,5; b = 0 ⇒ n' = (2,5 + 4,5)/(2,5 + 0) = <b>2,8</b>; 2 &lt; 2,8 &lt; 3.</li><li>m = 2 &lt; n': T<sub>c</sub> = a + t = <b>7 dk</b>; I<sub>o</sub> = (a + t) − m(a + b) = 7 − 2·2,5 = <b>2 dk</b>; I<sub>m</sub> = 0.</li><li>m = 3 &gt; n': T<sub>c</sub> = m(a + b) = 3·2,5 = <b>7,5 dk</b>; I<sub>o</sub> = 0; her makine için I<sub>m</sub> = 3·2,5 − 7 = <b>0,5 dk</b>.</li><li><b>(b)</b> ε = c<sub>1</sub>/c<sub>2</sub> = 1; n = 2: θ = (2,8/2)·(1 + 2)/(1 + 2 + 1) = 1,05 &gt; 1 ⇒ TC(2) &gt; TC(3) ⇒ <b>3 makine</b>.</li><li><b>(c)</b> ε = 3/10 = 0,3: θ = (2,8/2)·(0,3 + 2)/(0,3 + 3) = 0,976 &lt; 1 (slayt 0,97) ⇒ <b>2 makine</b>.</li><li><b>(d)</b> q<sub>st</sub>(2) = 2/7 ≈ 0,286 adet/dk; q<sub>st</sub>(3) = 3/7,5 = 0,4 adet/dk. Üretim oranının büyük olması istenir, q<sub>st</sub>(3) &gt; q<sub>st</sub>(2) ⇒ üretim oranına göre <b>3 makine</b>.</li></ol><p><b>İki makine için insan-makine şeması (T<sub>c</sub> = 7 dk, operatör 2 dk boşta):</b></p><div style=\"text-align:center;margin:12px 0\"><svg viewBox=\"0 0 346 298\" width=\"432.5\" role=\"img\" aria-label=\"2 makine için insan-makine şeması\" style=\"max-width:100%;height:auto;color:inherit\" xmlns=\"http://www.w3.org/2000/svg\"><defs><pattern id=\"hp3\" width=\"6\" height=\"6\" patternUnits=\"userSpaceOnUse\" patternTransform=\"rotate(45)\"><line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1\" stroke-opacity=\"0.55\"/></pattern></defs><line x1=\"31\" y1=\"26\" x2=\"346\" y2=\"26\" stroke=\"currentColor\" stroke-opacity=\"0.18\" stroke-dasharray=\"2 3\" stroke-width=\"0.6\"/><text x=\"29\" y=\"29\" text-anchor=\"end\" font-size=\"8.5\" fill=\"currentColor\">0</text><line x1=\"31\" y1=\"81\" x2=\"346\" y2=\"81\" stroke=\"currentColor\" stroke-opacity=\"0.18\" stroke-dasharray=\"2 3\" stroke-width=\"0.6\"/><text x=\"29\" y=\"84\" text-anchor=\"end\" font-size=\"8.5\" fill=\"currentColor\">2,5</text><line x1=\"31\" y1=\"136\" x2=\"346\" y2=\"136\" stroke=\"currentColor\" stroke-opacity=\"0.18\" stroke-dasharray=\"2 3\" stroke-width=\"0.6\"/><text x=\"29\" y=\"139\" text-anchor=\"end\" font-size=\"8.5\" fill=\"currentColor\">5</text><line x1=\"31\" y1=\"180\" x2=\"346\" y2=\"180\" stroke=\"currentColor\" stroke-opacity=\"0.18\" stroke-dasharray=\"2 3\" stroke-width=\"0.6\"/><text x=\"29\" y=\"183\" text-anchor=\"end\" font-size=\"8.5\" fill=\"currentColor\">7</text><line x1=\"31\" y1=\"235\" x2=\"346\" y2=\"235\" stroke=\"currentColor\" stroke-opacity=\"0.18\" stroke-dasharray=\"2 3\" stroke-width=\"0.6\"/><text x=\"29\" y=\"238\" text-anchor=\"end\" font-size=\"8.5\" fill=\"currentColor\">9,5</text><line x1=\"31\" y1=\"290\" x2=\"346\" y2=\"290\" stroke=\"currentColor\" stroke-opacity=\"0.18\" stroke-dasharray=\"2 3\" stroke-width=\"0.6\"/><text x=\"29\" y=\"293\" text-anchor=\"end\" font-size=\"8.5\" fill=\"currentColor\">12</text><text x=\"4\" y=\"12\" font-size=\"8.5\" fill=\"currentColor\">dk</text><text x=\"86\" y=\"16\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"currentColor\">Operatör</text><rect x=\"38\" y=\"26\" width=\"96\" height=\"55\" fill=\"currentColor\" fill-opacity=\"0.34\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"86\" y=\"56.5\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">Haz.+Yükl. (1)</text><rect x=\"38\" y=\"81\" width=\"96\" height=\"55\" fill=\"currentColor\" fill-opacity=\"0.34\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"86\" y=\"111.5\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">Haz.+Yükl. (2)</text><rect x=\"38\" y=\"136\" width=\"96\" height=\"44\" fill=\"url(#hp3)\" stroke=\"currentColor\" stroke-opacity=\"0.5\" stroke-width=\"0.8\"/><text x=\"86\" y=\"161\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">Boş</text><rect x=\"38\" y=\"180\" width=\"96\" height=\"55\" fill=\"currentColor\" fill-opacity=\"0.34\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"86\" y=\"210.5\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">Haz.+Yükl. (1)</text><rect x=\"38\" y=\"235\" width=\"96\" height=\"55\" fill=\"currentColor\" fill-opacity=\"0.34\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"86\" y=\"265.5\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">Haz.+Yükl. (2)</text><text x=\"190\" y=\"16\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"currentColor\">Makine 1</text><rect x=\"142\" y=\"26\" width=\"96\" height=\"55\" fill=\"currentColor\" fill-opacity=\"0.34\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"190\" y=\"56.5\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">Haz.+Yükl.</text><rect x=\"142\" y=\"81\" width=\"96\" height=\"99\" fill=\"currentColor\" fill-opacity=\"0.08\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"190\" y=\"133.5\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">R</text><rect x=\"142\" y=\"180\" width=\"96\" height=\"55\" fill=\"currentColor\" fill-opacity=\"0.34\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"190\" y=\"210.5\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">Haz.+Yükl.</text><rect x=\"142\" y=\"235\" width=\"96\" height=\"55\" fill=\"currentColor\" fill-opacity=\"0.08\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"190\" y=\"265.5\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">R</text><text x=\"294\" y=\"16\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"currentColor\">Makine 2</text><rect x=\"246\" y=\"26\" width=\"96\" height=\"55\" fill=\"currentColor\" fill-opacity=\"0.08\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"294\" y=\"56.5\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">R</text><rect x=\"246\" y=\"81\" width=\"96\" height=\"55\" fill=\"currentColor\" fill-opacity=\"0.34\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"294\" y=\"111.5\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">Haz.+Yükl.</text><rect x=\"246\" y=\"136\" width=\"96\" height=\"99\" fill=\"currentColor\" fill-opacity=\"0.08\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"294\" y=\"188.5\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">R</text><rect x=\"246\" y=\"235\" width=\"96\" height=\"55\" fill=\"currentColor\" fill-opacity=\"0.34\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"294\" y=\"265.5\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">Haz.+Yükl.</text></svg></div><p><b>Üç makine için insan-makine şeması (T<sub>c</sub> = 7,5 dk, operatör boşta kalmaz, her makine 0,5 dk boşta):</b></p><div style=\"text-align:center;margin:12px 0\"><svg viewBox=\"0 0 370 309\" width=\"462.5\" role=\"img\" aria-label=\"3 makine için insan-makine şeması\" style=\"max-width:100%;height:auto;color:inherit\" xmlns=\"http://www.w3.org/2000/svg\"><defs><pattern id=\"hp4\" width=\"6\" height=\"6\" patternUnits=\"userSpaceOnUse\" patternTransform=\"rotate(45)\"><line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1\" stroke-opacity=\"0.55\"/></pattern></defs><line x1=\"31\" y1=\"26\" x2=\"370\" y2=\"26\" stroke=\"currentColor\" stroke-opacity=\"0.18\" stroke-dasharray=\"2 3\" stroke-width=\"0.6\"/><text x=\"29\" y=\"29\" text-anchor=\"end\" font-size=\"8.5\" fill=\"currentColor\">0</text><line x1=\"31\" y1=\"81\" x2=\"370\" y2=\"81\" stroke=\"currentColor\" stroke-opacity=\"0.18\" stroke-dasharray=\"2 3\" stroke-width=\"0.6\"/><text x=\"29\" y=\"84\" text-anchor=\"end\" font-size=\"8.5\" fill=\"currentColor\">2,5</text><line x1=\"31\" y1=\"136\" x2=\"370\" y2=\"136\" stroke=\"currentColor\" stroke-opacity=\"0.18\" stroke-dasharray=\"2 3\" stroke-width=\"0.6\"/><text x=\"29\" y=\"139\" text-anchor=\"end\" font-size=\"8.5\" fill=\"currentColor\">5</text><line x1=\"31\" y1=\"180\" x2=\"370\" y2=\"180\" stroke=\"currentColor\" stroke-opacity=\"0.18\" stroke-dasharray=\"2 3\" stroke-width=\"0.6\"/><text x=\"29\" y=\"183\" text-anchor=\"end\" font-size=\"8.5\" fill=\"currentColor\">7</text><line x1=\"31\" y1=\"191\" x2=\"370\" y2=\"191\" stroke=\"currentColor\" stroke-opacity=\"0.18\" stroke-dasharray=\"2 3\" stroke-width=\"0.6\"/><text x=\"29\" y=\"194\" text-anchor=\"end\" font-size=\"8.5\" fill=\"currentColor\">7,5</text><line x1=\"31\" y1=\"246\" x2=\"370\" y2=\"246\" stroke=\"currentColor\" stroke-opacity=\"0.18\" stroke-dasharray=\"2 3\" stroke-width=\"0.6\"/><text x=\"29\" y=\"249\" text-anchor=\"end\" font-size=\"8.5\" fill=\"currentColor\">10</text><line x1=\"31\" y1=\"301\" x2=\"370\" y2=\"301\" stroke=\"currentColor\" stroke-opacity=\"0.18\" stroke-dasharray=\"2 3\" stroke-width=\"0.6\"/><text x=\"29\" y=\"304\" text-anchor=\"end\" font-size=\"8.5\" fill=\"currentColor\">12,5</text><text x=\"4\" y=\"12\" font-size=\"8.5\" fill=\"currentColor\">dk</text><text x=\"76\" y=\"16\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"currentColor\">Operatör</text><rect x=\"38\" y=\"26\" width=\"76\" height=\"55\" fill=\"currentColor\" fill-opacity=\"0.34\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"76\" y=\"56.5\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">H+Y (1)</text><rect x=\"38\" y=\"81\" width=\"76\" height=\"55\" fill=\"currentColor\" fill-opacity=\"0.34\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"76\" y=\"111.5\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">H+Y (2)</text><rect x=\"38\" y=\"136\" width=\"76\" height=\"55\" fill=\"currentColor\" fill-opacity=\"0.34\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"76\" y=\"166.5\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">H+Y (3)</text><rect x=\"38\" y=\"191\" width=\"76\" height=\"55\" fill=\"currentColor\" fill-opacity=\"0.34\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"76\" y=\"221.5\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">H+Y (1)</text><rect x=\"38\" y=\"246\" width=\"76\" height=\"55\" fill=\"currentColor\" fill-opacity=\"0.34\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"76\" y=\"276.5\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">H+Y (2)</text><text x=\"160\" y=\"16\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"currentColor\">Makine 1</text><rect x=\"122\" y=\"26\" width=\"76\" height=\"55\" fill=\"currentColor\" fill-opacity=\"0.34\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"160\" y=\"56.5\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">H+Y</text><rect x=\"122\" y=\"81\" width=\"76\" height=\"99\" fill=\"currentColor\" fill-opacity=\"0.08\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"160\" y=\"133.5\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">R</text><rect x=\"122\" y=\"180\" width=\"76\" height=\"11\" fill=\"url(#hp4)\" stroke=\"currentColor\" stroke-opacity=\"0.5\" stroke-width=\"0.8\"/><rect x=\"122\" y=\"191\" width=\"76\" height=\"55\" fill=\"currentColor\" fill-opacity=\"0.34\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"160\" y=\"221.5\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">H+Y</text><rect x=\"122\" y=\"246\" width=\"76\" height=\"55\" fill=\"currentColor\" fill-opacity=\"0.08\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"160\" y=\"276.5\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">R</text><text x=\"244\" y=\"16\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"currentColor\">Makine 2</text><rect x=\"206\" y=\"26\" width=\"76\" height=\"44\" fill=\"currentColor\" fill-opacity=\"0.08\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"244\" y=\"51\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">R</text><rect x=\"206\" y=\"70\" width=\"76\" height=\"11\" fill=\"url(#hp4)\" stroke=\"currentColor\" stroke-opacity=\"0.5\" stroke-width=\"0.8\"/><rect x=\"206\" y=\"81\" width=\"76\" height=\"55\" fill=\"currentColor\" fill-opacity=\"0.34\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"244\" y=\"111.5\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">H+Y</text><rect x=\"206\" y=\"136\" width=\"76\" height=\"99\" fill=\"currentColor\" fill-opacity=\"0.08\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"244\" y=\"188.5\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">R</text><rect x=\"206\" y=\"235\" width=\"76\" height=\"11\" fill=\"url(#hp4)\" stroke=\"currentColor\" stroke-opacity=\"0.5\" stroke-width=\"0.8\"/><rect x=\"206\" y=\"246\" width=\"76\" height=\"55\" fill=\"currentColor\" fill-opacity=\"0.34\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"244\" y=\"276.5\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">H+Y</text><text x=\"328\" y=\"16\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"currentColor\">Makine 3</text><rect x=\"290\" y=\"26\" width=\"76\" height=\"99\" fill=\"currentColor\" fill-opacity=\"0.08\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"328\" y=\"78.5\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">R</text><rect x=\"290\" y=\"125\" width=\"76\" height=\"11\" fill=\"url(#hp4)\" stroke=\"currentColor\" stroke-opacity=\"0.5\" stroke-width=\"0.8\"/><rect x=\"290\" y=\"136\" width=\"76\" height=\"55\" fill=\"currentColor\" fill-opacity=\"0.34\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"328\" y=\"166.5\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">H+Y</text><rect x=\"290\" y=\"191\" width=\"76\" height=\"99\" fill=\"currentColor\" fill-opacity=\"0.08\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"328\" y=\"243.5\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">R</text><rect x=\"290\" y=\"290\" width=\"76\" height=\"11\" fill=\"url(#hp4)\" stroke=\"currentColor\" stroke-opacity=\"0.5\" stroke-width=\"0.8\"/></svg></div><p><i>Şemada koyu bloklar operatör ve makinenin ortak faaliyetini (yükleme/boşaltma), açık bloklar operatörün bağımsız faaliyetini (yürüme, muayene), \"R\" makinenin otomatik çalışmasını, taramalı bloklar boş kalmayı gösterir.</i></p>"
  },
  {
    "ders": "tesis",
    "hafta": 3,
    "id": "tesis-h3-insanmak-05",
    "konu": "İnsan-Makine Şemaları",
    "kaynak": "Hafta 3, slayt 52-54 (Örnek-12)",
    "baslik": "Bilinen boş makine zamanından yürüme süresi b ve n, n + 1 makine karşılaştırması",
    "soru": "<p>Benzer tip ve kapasitede yarı otomatik makineler bulunan bir işletmede bir periyot ve bir makine başına şu zaman değerleri bilinmektedir: bağımsız makine faaliyeti t = 6 dk; makine ve operatörlerin ortaklaşa faaliyetleri toplamı a = 8 dk (yükleme 4 dk, boşaltma 4 dk). İşçilik maliyeti C<sub>1</sub> = 5 TL/saat, makine işletim maliyeti C<sub>2</sub> = 2 TL/saat. 2 makine olması halinde bir periyottaki <b>toplam</b> boş makine zamanı 12 dk'dır (makine başına 6 dk). Operatörün bağımsız faaliyeti (yürüme) b yalnızca birden fazla makine olduğunda vardır; tek makinede b = 0 alınız.</p><p>n ve n + 1 makine sayıları için; (a) b süresini, teorik makine sayısı n' ve periyot değerlerini, (b) bir periyotta boş geçen operatör zamanlarını, (c) saatlik standart üretim oranlarını hesaplayınız; (d) θ ile optimum makine sayısını belirleyiniz ve insan-makine şemalarını çiziniz.</p>",
    "cevapTipi": "sayi",
    "cevaplar": [
      {
        "etiket": "(a) Yürüme süresi b",
        "deger": 2,
        "tolerans": 0.01,
        "birim": "dk"
      },
      {
        "etiket": "(a) n' = (a + t)/(a + b)",
        "deger": 1.4,
        "tolerans": 0.01,
        "birim": "makine"
      },
      {
        "etiket": "(a) T_c(1)",
        "deger": 14,
        "tolerans": 0.01,
        "birim": "dk"
      },
      {
        "etiket": "(a) T_c(2)",
        "deger": 20,
        "tolerans": 0.01,
        "birim": "dk"
      },
      {
        "etiket": "(b) I_o(1) (tek makine)",
        "deger": 6,
        "tolerans": 0.01,
        "birim": "dk"
      },
      {
        "etiket": "(b) I_o(2)",
        "deger": 0,
        "tolerans": 0.01,
        "birim": "dk"
      },
      {
        "etiket": "(c) q_st(1)",
        "deger": 4.286,
        "tolerans": 0.01,
        "birim": "adet/saat"
      },
      {
        "etiket": "(c) q_st(2)",
        "deger": 6,
        "tolerans": 0.01,
        "birim": "adet/saat"
      },
      {
        "etiket": "(d) θ (ε = 2,5)",
        "deger": 1.089,
        "tolerans": 0.01,
        "birim": ""
      },
      {
        "etiket": "(d) Optimum makine sayısı",
        "deger": 2,
        "tolerans": 0,
        "birim": "makine"
      }
    ],
    "mantik": "<p>2 makinede operatör boşta kalmıyorsa m = 2 &gt; n' olduğundan çevrimi operatör belirler ve boş süreyi makineler taşır: I<sub>m</sub> = m(a + b) − (a + t). Bu denklemde bilinmeyen b çözülür. Sonra n' ve n = 1, n + 1 = 2 için standart usul uygulanır.</p>",
    "cozum": "<ol><li><b>b'nin bulunması:</b> m = 2 için makine başına boş süre 6 dk: I<sub>m</sub> = 2(8 + b) − (8 + 6) = 6 ⇒ 4 = 2b ⇒ <b>b = 2 dk</b>.</li><li><b>(a)</b> n' = (8 + 6)/(8 + 2) = <b>1,4</b> (1 &lt; n' &lt; 2). T<sub>c</sub>(1) = a + t = 8 + 6 = <b>14 dk</b>. T<sub>c</sub>(2) = 2·(8 + 2) = <b>20 dk</b>.</li><li><b>(b)</b> I<sub>o</sub>(1) = (a + t) − 1·(a + 0) = 14 − 8 = <b>6 dk</b>; I<sub>o</sub>(2) = <b>0</b> (I<sub>m</sub>(1) = 0; I<sub>m</sub>(2) = 2·10 − 14 = 6 dk makine başına).</li><li><b>(c)</b> q<sub>st</sub>(m) = 60·m / T<sub>c</sub>(m): q<sub>st</sub>(1) = 60/14 = <b>4,286</b> adet/saat; q<sub>st</sub>(2) = 120/20 = <b>6</b> adet/saat ⇒ üretim oranına göre 2 makine.</li><li><b>(d)</b> ε = C<sub>1</sub>/C<sub>2</sub> = 5/2 = 2,5; n = 1: θ = (1,4/1)·(2,5 + 1)/(2,5 + 1 + 1) = 1,089 ≈ 1,09 &gt; 1 ⇒ TC(1) &gt; TC(2) ⇒ <b>m<sub>opt</sub> = 2 makine</b>.</li></ol><p><b>Tek makine (T<sub>c</sub> = 14 dk):</b></p><div style=\"text-align:center;margin:12px 0\"><svg viewBox=\"0 0 250 230\" width=\"312.5\" role=\"img\" aria-label=\"1 makine için insan-makine şeması\" style=\"max-width:100%;height:auto;color:inherit\" xmlns=\"http://www.w3.org/2000/svg\"><defs><pattern id=\"hp5\" width=\"6\" height=\"6\" patternUnits=\"userSpaceOnUse\" patternTransform=\"rotate(45)\"><line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1\" stroke-opacity=\"0.55\"/></pattern></defs><line x1=\"31\" y1=\"26\" x2=\"250\" y2=\"26\" stroke=\"currentColor\" stroke-opacity=\"0.18\" stroke-dasharray=\"2 3\" stroke-width=\"0.6\"/><text x=\"29\" y=\"29\" text-anchor=\"end\" font-size=\"8.5\" fill=\"currentColor\">0</text><line x1=\"31\" y1=\"82\" x2=\"250\" y2=\"82\" stroke=\"currentColor\" stroke-opacity=\"0.18\" stroke-dasharray=\"2 3\" stroke-width=\"0.6\"/><text x=\"29\" y=\"85\" text-anchor=\"end\" font-size=\"8.5\" fill=\"currentColor\">4</text><line x1=\"31\" y1=\"166\" x2=\"250\" y2=\"166\" stroke=\"currentColor\" stroke-opacity=\"0.18\" stroke-dasharray=\"2 3\" stroke-width=\"0.6\"/><text x=\"29\" y=\"169\" text-anchor=\"end\" font-size=\"8.5\" fill=\"currentColor\">10</text><line x1=\"31\" y1=\"222\" x2=\"250\" y2=\"222\" stroke=\"currentColor\" stroke-opacity=\"0.18\" stroke-dasharray=\"2 3\" stroke-width=\"0.6\"/><text x=\"29\" y=\"225\" text-anchor=\"end\" font-size=\"8.5\" fill=\"currentColor\">14</text><text x=\"4\" y=\"12\" font-size=\"8.5\" fill=\"currentColor\">dk</text><text x=\"88\" y=\"16\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"currentColor\">Operatör</text><rect x=\"38\" y=\"26\" width=\"100\" height=\"56\" fill=\"currentColor\" fill-opacity=\"0.34\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"88\" y=\"57\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">L-1</text><rect x=\"38\" y=\"82\" width=\"100\" height=\"84\" fill=\"url(#hp5)\" stroke=\"currentColor\" stroke-opacity=\"0.5\" stroke-width=\"0.8\"/><text x=\"88\" y=\"127\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">Boş</text><rect x=\"38\" y=\"166\" width=\"100\" height=\"56\" fill=\"currentColor\" fill-opacity=\"0.34\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"88\" y=\"197\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">U-1</text><text x=\"196\" y=\"16\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"currentColor\">Makine I</text><rect x=\"146\" y=\"26\" width=\"100\" height=\"56\" fill=\"currentColor\" fill-opacity=\"0.34\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"196\" y=\"57\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">L-1</text><rect x=\"146\" y=\"82\" width=\"100\" height=\"84\" fill=\"currentColor\" fill-opacity=\"0.08\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"196\" y=\"127\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">R</text><rect x=\"146\" y=\"166\" width=\"100\" height=\"56\" fill=\"currentColor\" fill-opacity=\"0.34\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"196\" y=\"197\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">U-1</text></svg></div><p><b>İki makine (T<sub>c</sub> = 20 dk):</b></p><div style=\"text-align:center;margin:12px 0\"><svg viewBox=\"0 0 310 294\" width=\"387.5\" role=\"img\" aria-label=\"2 makine için insan-makine şeması\" style=\"max-width:100%;height:auto;color:inherit\" xmlns=\"http://www.w3.org/2000/svg\"><defs><pattern id=\"hp6\" width=\"6\" height=\"6\" patternUnits=\"userSpaceOnUse\" patternTransform=\"rotate(45)\"><line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1\" stroke-opacity=\"0.55\"/></pattern></defs><line x1=\"31\" y1=\"26\" x2=\"310\" y2=\"26\" stroke=\"currentColor\" stroke-opacity=\"0.18\" stroke-dasharray=\"2 3\" stroke-width=\"0.6\"/><text x=\"29\" y=\"29\" text-anchor=\"end\" font-size=\"8.5\" fill=\"currentColor\">0</text><line x1=\"31\" y1=\"66\" x2=\"310\" y2=\"66\" stroke=\"currentColor\" stroke-opacity=\"0.18\" stroke-dasharray=\"2 3\" stroke-width=\"0.6\"/><text x=\"29\" y=\"69\" text-anchor=\"end\" font-size=\"8.5\" fill=\"currentColor\">4</text><line x1=\"31\" y1=\"86\" x2=\"310\" y2=\"86\" stroke=\"currentColor\" stroke-opacity=\"0.18\" stroke-dasharray=\"2 3\" stroke-width=\"0.6\"/><text x=\"29\" y=\"89\" text-anchor=\"end\" font-size=\"8.5\" fill=\"currentColor\">6</text><line x1=\"31\" y1=\"126\" x2=\"310\" y2=\"126\" stroke=\"currentColor\" stroke-opacity=\"0.18\" stroke-dasharray=\"2 3\" stroke-width=\"0.6\"/><text x=\"29\" y=\"129\" text-anchor=\"end\" font-size=\"8.5\" fill=\"currentColor\">10</text><line x1=\"31\" y1=\"166\" x2=\"310\" y2=\"166\" stroke=\"currentColor\" stroke-opacity=\"0.18\" stroke-dasharray=\"2 3\" stroke-width=\"0.6\"/><text x=\"29\" y=\"169\" text-anchor=\"end\" font-size=\"8.5\" fill=\"currentColor\">14</text><line x1=\"31\" y1=\"186\" x2=\"310\" y2=\"186\" stroke=\"currentColor\" stroke-opacity=\"0.18\" stroke-dasharray=\"2 3\" stroke-width=\"0.6\"/><text x=\"29\" y=\"189\" text-anchor=\"end\" font-size=\"8.5\" fill=\"currentColor\">16</text><line x1=\"31\" y1=\"226\" x2=\"310\" y2=\"226\" stroke=\"currentColor\" stroke-opacity=\"0.18\" stroke-dasharray=\"2 3\" stroke-width=\"0.6\"/><text x=\"29\" y=\"229\" text-anchor=\"end\" font-size=\"8.5\" fill=\"currentColor\">20</text><line x1=\"31\" y1=\"266\" x2=\"310\" y2=\"266\" stroke=\"currentColor\" stroke-opacity=\"0.18\" stroke-dasharray=\"2 3\" stroke-width=\"0.6\"/><text x=\"29\" y=\"269\" text-anchor=\"end\" font-size=\"8.5\" fill=\"currentColor\">24</text><line x1=\"31\" y1=\"286\" x2=\"310\" y2=\"286\" stroke=\"currentColor\" stroke-opacity=\"0.18\" stroke-dasharray=\"2 3\" stroke-width=\"0.6\"/><text x=\"29\" y=\"289\" text-anchor=\"end\" font-size=\"8.5\" fill=\"currentColor\">26</text><text x=\"4\" y=\"12\" font-size=\"8.5\" fill=\"currentColor\">dk</text><text x=\"80\" y=\"16\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"currentColor\">Operatör</text><rect x=\"38\" y=\"26\" width=\"84\" height=\"40\" fill=\"currentColor\" fill-opacity=\"0.34\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"80\" y=\"49\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">L-1</text><rect x=\"38\" y=\"66\" width=\"84\" height=\"20\" fill=\"currentColor\" fill-opacity=\"0.2\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"80\" y=\"79\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">Yürüme 1→2</text><rect x=\"38\" y=\"86\" width=\"84\" height=\"40\" fill=\"currentColor\" fill-opacity=\"0.34\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"80\" y=\"109\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">U-2</text><rect x=\"38\" y=\"126\" width=\"84\" height=\"40\" fill=\"currentColor\" fill-opacity=\"0.34\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"80\" y=\"149\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">L-2</text><rect x=\"38\" y=\"166\" width=\"84\" height=\"20\" fill=\"currentColor\" fill-opacity=\"0.2\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"80\" y=\"179\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">Yürüme 2→1</text><rect x=\"38\" y=\"186\" width=\"84\" height=\"40\" fill=\"currentColor\" fill-opacity=\"0.34\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"80\" y=\"209\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">U-1</text><rect x=\"38\" y=\"226\" width=\"84\" height=\"40\" fill=\"currentColor\" fill-opacity=\"0.34\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"80\" y=\"249\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">L-1</text><rect x=\"38\" y=\"266\" width=\"84\" height=\"20\" fill=\"currentColor\" fill-opacity=\"0.2\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"80\" y=\"279\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">Yür.</text><text x=\"172\" y=\"16\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"currentColor\">Makine I</text><rect x=\"130\" y=\"26\" width=\"84\" height=\"40\" fill=\"currentColor\" fill-opacity=\"0.34\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"172\" y=\"49\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">L-1</text><rect x=\"130\" y=\"66\" width=\"84\" height=\"60\" fill=\"currentColor\" fill-opacity=\"0.08\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"172\" y=\"99\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">R</text><rect x=\"130\" y=\"126\" width=\"84\" height=\"60\" fill=\"url(#hp6)\" stroke=\"currentColor\" stroke-opacity=\"0.5\" stroke-width=\"0.8\"/><text x=\"172\" y=\"159\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">Boş</text><rect x=\"130\" y=\"186\" width=\"84\" height=\"40\" fill=\"currentColor\" fill-opacity=\"0.34\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"172\" y=\"209\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">U-1</text><rect x=\"130\" y=\"226\" width=\"84\" height=\"40\" fill=\"currentColor\" fill-opacity=\"0.34\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"172\" y=\"249\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">L-1</text><rect x=\"130\" y=\"266\" width=\"84\" height=\"20\" fill=\"currentColor\" fill-opacity=\"0.08\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"172\" y=\"279\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">R</text><text x=\"264\" y=\"16\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"currentColor\">Makine II</text><rect x=\"222\" y=\"26\" width=\"84\" height=\"60\" fill=\"currentColor\" fill-opacity=\"0.08\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"264\" y=\"59\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">R</text><rect x=\"222\" y=\"86\" width=\"84\" height=\"40\" fill=\"currentColor\" fill-opacity=\"0.34\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"264\" y=\"109\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">U-2</text><rect x=\"222\" y=\"126\" width=\"84\" height=\"40\" fill=\"currentColor\" fill-opacity=\"0.34\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"264\" y=\"149\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">L-2</text><rect x=\"222\" y=\"166\" width=\"84\" height=\"60\" fill=\"currentColor\" fill-opacity=\"0.08\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"264\" y=\"199\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">R</text><rect x=\"222\" y=\"226\" width=\"84\" height=\"60\" fill=\"url(#hp6)\" stroke=\"currentColor\" stroke-opacity=\"0.5\" stroke-width=\"0.8\"/><text x=\"264\" y=\"259\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">Boş</text></svg></div><p><i>Şemada koyu bloklar operatör ve makinenin ortak faaliyetini (yükleme/boşaltma), açık bloklar operatörün bağımsız faaliyetini (yürüme, muayene), \"R\" makinenin otomatik çalışmasını, taramalı bloklar boş kalmayı gösterir.</i></p>"
  },
  {
    "ders": "tesis",
    "hafta": 3,
    "id": "tesis-h3-insanmak-06",
    "konu": "İnsan-Makine Şemaları",
    "kaynak": "Hafta 3, slayt 55-58 (Örnek-13)",
    "baslik": "Kepçe – kamyon sistemi: kamyon sayısı, maliyet ve boş zamanlar",
    "soru": "<p>Bir otoyol firması, dolgu malzemeleri üretmekte ve otoyol inşaatında kullanmak üzere kepçe makineleri ve kamyon filosu kurarak damperli kamyonlar ile inşaat alanına taşımaktadır. Zaman etütleri sonucunda: bir kamyonun doldurulma süresi 20 dk, doldurulan kamyonun inşaat alanına varış süresi 30 dk, bir kamyonu boşaltma zamanı 5 dk ve boş kamyonun doldurma noktasına dönüş zamanı 20 dk'dır. Bir kepçe makinesinin saatlik maliyeti 40 TL ve bir kamyonun saatlik kullanım maliyeti 30 TL'dir.</p><p>(Modelleme: kepçe operatör, kamyon makine gibidir; a = doldurma süresi = ortak faaliyet, t = kamyonun kepçeden bağımsız faaliyetleri = 30 + 5 + 20, b = 0.)</p><p><b>(a)</b> Taşınan kamyon yükü başına maliyeti minimize etmek için 1 kepçeye tahsis edilmesi gereken kamyon sayısı ne olmalıdır? Bu durumdaki bir kamyon yükünün ve bir periyottaki toplam taşıma maliyeti nedir? (Kamyon yükü başına maliyet = [C<sub>1</sub> + m·C<sub>2</sub>]·(a + b)/60 formülüyle bulunur; bir periyottaki toplam maliyet bunun m katıdır.)</p><p><b>(b)</b> Kepçenin boş zamanını önleyecek minimum kamyon sayısı ve kamyonların her birinin boş zamanlarının sıfır olacağı maksimum kamyon sayısı ne kadardır? Bu durumların her biri için bir saatte toplam kaç kamyon yükü taşındığını, boş zamanları bulunuz ve insan-makine şemalarını çiziniz.</p>",
    "cevapTipi": "sayi",
    "cevaplar": [
      {
        "etiket": "(a) n' = (a + t)/(a + b)",
        "deger": 3.75,
        "tolerans": 0.01,
        "birim": ""
      },
      {
        "etiket": "(a) θ",
        "deger": 1.016,
        "tolerans": 0.01,
        "birim": ""
      },
      {
        "etiket": "(a) Optimum kamyon sayısı",
        "deger": 4,
        "tolerans": 0,
        "birim": "kamyon"
      },
      {
        "etiket": "(a) Bir kamyon yükünün maliyeti",
        "deger": 53.33,
        "tolerans": 0.1,
        "birim": "TL"
      },
      {
        "etiket": "(a) Bir periyottaki toplam maliyet",
        "deger": 213.2,
        "tolerans": 0.5,
        "birim": "TL"
      },
      {
        "etiket": "(b) Kamyonlarda boş zamanı önleyen en fazla sayı",
        "deger": 3,
        "tolerans": 0,
        "birim": "kamyon"
      },
      {
        "etiket": "(b) Kepçede boş zamanı önleyen en az sayı",
        "deger": 4,
        "tolerans": 0,
        "birim": "kamyon"
      },
      {
        "etiket": "(b) 3 kamyonla saatte taşınan yük",
        "deger": 2.4,
        "tolerans": 0.01,
        "birim": "sefer/saat"
      },
      {
        "etiket": "(b) 4 kamyonla saatte taşınan yük",
        "deger": 3,
        "tolerans": 0.01,
        "birim": "sefer/saat"
      },
      {
        "etiket": "(b) 3 kamyonda kepçenin boş zamanı",
        "deger": 15,
        "tolerans": 0.01,
        "birim": "dk"
      },
      {
        "etiket": "(b) 4 kamyonda her kamyonun boş zamanı",
        "deger": 5,
        "tolerans": 0.01,
        "birim": "dk"
      }
    ],
    "mantik": "<p>Kepçe operatör, kamyon makine gibi ele alınır. n' = (a + t)/(a + b) ile teorik kamyon sayısı bulunur; n = 3 ve n + 1 = 4 adaydır. Karar θ = (n'/n)·(ε + n)/(ε + n + 1) ile verilir. n kamyonda çevrimi kamyon (a + t), n + 1 kamyonda ise kepçe m(a + b) belirler; böylece biri kepçenin, diğeri kamyonların boş kalacağı durumdur.</p>",
    "cozum": "<ol><li><b>Veriler:</b> a = L = 20 dk; t = 30 + 5 + 20 = 55 dk; b = 0; C<sub>1</sub> = 40, C<sub>2</sub> = 30 TL/saat.</li><li><b>(a)</b> n' = (20 + 55)/(20 + 0) = <b>3,75</b> (3 &lt; n' &lt; 4); ε = 40/30 = 1,33.</li><li>θ = (3,75/3)·(1,33 + 3)/(1,33 + 3 + 1) = 1,016 (slayt 1,01) &gt; 1 ⇒ TC(3) &gt; TC(4) ⇒ <b>m<sub>opt</sub> = n + 1 = 4 kamyon</b>.</li><li>m = 4 &gt; n' olduğundan çevrimi kepçe belirler: T<sub>c</sub> = 4·(20 + 0) = 80 dk. Bir kamyon yükünün maliyeti = (40 + 4·30)·20/60 = <b>53,3 TL</b>; bir periyottaki toplam maliyet = 53,3 × 4 ≈ <b>213,2 TL</b> (tam değer 213,33).</li><li><b>(b) n = 3 kamyon (kamyonların boş kalmadığı en fazla sayı):</b> T<sub>c</sub>(3) = a + t = 75 dk; q<sub>st</sub>(3) = 3·60/75 = <b>2,4 sefer/saat</b>; kepçenin boş zamanı I<sub>o</sub> = (a + t) − m(a + b) = 75 − 3·20 = <b>15 dk</b>.</li><li><b>n + 1 = 4 kamyon (kepçenin boş kalmadığı en az sayı):</b> T<sub>c</sub>(4) = 4·20 = 80 dk; q<sub>st</sub>(4) = 4·60/80 = <b>3 sefer/saat</b>; her kamyonun boş zamanı I<sub>m</sub> = m(a + b) − (a + t) = 80 − 75 = <b>5 dk</b>.</li></ol><p><b>3 kamyon için şema (çevrimi kamyon belirler, T<sub>c</sub> = 75 dk):</b></p><div style=\"text-align:center;margin:12px 0\"><svg viewBox=\"0 0 354 338\" width=\"442.5\" role=\"img\" aria-label=\"3 kamyon için insan-makine şeması\" style=\"max-width:100%;height:auto;color:inherit\" xmlns=\"http://www.w3.org/2000/svg\"><defs><pattern id=\"hp7\" width=\"6\" height=\"6\" patternUnits=\"userSpaceOnUse\" patternTransform=\"rotate(45)\"><line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1\" stroke-opacity=\"0.55\"/></pattern></defs><line x1=\"31\" y1=\"26\" x2=\"354\" y2=\"26\" stroke=\"currentColor\" stroke-opacity=\"0.18\" stroke-dasharray=\"2 3\" stroke-width=\"0.6\"/><text x=\"29\" y=\"29\" text-anchor=\"end\" font-size=\"8.5\" fill=\"currentColor\">0</text><line x1=\"31\" y1=\"90\" x2=\"354\" y2=\"90\" stroke=\"currentColor\" stroke-opacity=\"0.18\" stroke-dasharray=\"2 3\" stroke-width=\"0.6\"/><text x=\"29\" y=\"93\" text-anchor=\"end\" font-size=\"8.5\" fill=\"currentColor\">20</text><line x1=\"31\" y1=\"154\" x2=\"354\" y2=\"154\" stroke=\"currentColor\" stroke-opacity=\"0.18\" stroke-dasharray=\"2 3\" stroke-width=\"0.6\"/><text x=\"29\" y=\"157\" text-anchor=\"end\" font-size=\"8.5\" fill=\"currentColor\">40</text><line x1=\"31\" y1=\"218\" x2=\"354\" y2=\"218\" stroke=\"currentColor\" stroke-opacity=\"0.18\" stroke-dasharray=\"2 3\" stroke-width=\"0.6\"/><text x=\"29\" y=\"221\" text-anchor=\"end\" font-size=\"8.5\" fill=\"currentColor\">60</text><line x1=\"31\" y1=\"266\" x2=\"354\" y2=\"266\" stroke=\"currentColor\" stroke-opacity=\"0.18\" stroke-dasharray=\"2 3\" stroke-width=\"0.6\"/><text x=\"29\" y=\"269\" text-anchor=\"end\" font-size=\"8.5\" fill=\"currentColor\">75</text><line x1=\"31\" y1=\"330\" x2=\"354\" y2=\"330\" stroke=\"currentColor\" stroke-opacity=\"0.18\" stroke-dasharray=\"2 3\" stroke-width=\"0.6\"/><text x=\"29\" y=\"333\" text-anchor=\"end\" font-size=\"8.5\" fill=\"currentColor\">95</text><text x=\"4\" y=\"12\" font-size=\"8.5\" fill=\"currentColor\">dk</text><text x=\"74\" y=\"16\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"currentColor\">Kepçe</text><rect x=\"38\" y=\"26\" width=\"72\" height=\"64\" fill=\"currentColor\" fill-opacity=\"0.34\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"74\" y=\"61\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">L-1</text><rect x=\"38\" y=\"90\" width=\"72\" height=\"64\" fill=\"currentColor\" fill-opacity=\"0.34\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"74\" y=\"125\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">L-2</text><rect x=\"38\" y=\"154\" width=\"72\" height=\"64\" fill=\"currentColor\" fill-opacity=\"0.34\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"74\" y=\"189\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">L-3</text><rect x=\"38\" y=\"218\" width=\"72\" height=\"48\" fill=\"url(#hp7)\" stroke=\"currentColor\" stroke-opacity=\"0.5\" stroke-width=\"0.8\"/><text x=\"74\" y=\"245\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">Boş</text><rect x=\"38\" y=\"266\" width=\"72\" height=\"64\" fill=\"currentColor\" fill-opacity=\"0.34\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"74\" y=\"301\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">L-1</text><text x=\"154\" y=\"16\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"currentColor\">Kamyon 1</text><rect x=\"118\" y=\"26\" width=\"72\" height=\"64\" fill=\"currentColor\" fill-opacity=\"0.34\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"154\" y=\"61\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">L-1</text><rect x=\"118\" y=\"90\" width=\"72\" height=\"176\" fill=\"currentColor\" fill-opacity=\"0.08\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"154\" y=\"181\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">R</text><rect x=\"118\" y=\"266\" width=\"72\" height=\"64\" fill=\"currentColor\" fill-opacity=\"0.34\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"154\" y=\"301\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">L-1</text><text x=\"234\" y=\"16\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"currentColor\">Kamyon 2</text><rect x=\"198\" y=\"26\" width=\"72\" height=\"64\" fill=\"currentColor\" fill-opacity=\"0.08\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"234\" y=\"61\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">R</text><rect x=\"198\" y=\"90\" width=\"72\" height=\"64\" fill=\"currentColor\" fill-opacity=\"0.34\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"234\" y=\"125\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">L-2</text><rect x=\"198\" y=\"154\" width=\"72\" height=\"176\" fill=\"currentColor\" fill-opacity=\"0.08\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"234\" y=\"245\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">R</text><text x=\"314\" y=\"16\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"currentColor\">Kamyon 3</text><rect x=\"278\" y=\"26\" width=\"72\" height=\"128\" fill=\"currentColor\" fill-opacity=\"0.08\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"314\" y=\"93\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">R</text><rect x=\"278\" y=\"154\" width=\"72\" height=\"64\" fill=\"currentColor\" fill-opacity=\"0.34\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"314\" y=\"189\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">L-3</text><rect x=\"278\" y=\"218\" width=\"72\" height=\"112\" fill=\"currentColor\" fill-opacity=\"0.08\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"314\" y=\"277\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">R</text></svg></div><p><b>4 kamyon için şema (çevrimi kepçe belirler, T<sub>c</sub> = 80 dk):</b></p><div style=\"text-align:center;margin:12px 0\"><svg viewBox=\"0 0 404 370\" width=\"505\" role=\"img\" aria-label=\"4 kamyon için insan-makine şeması\" style=\"max-width:100%;height:auto;color:inherit\" xmlns=\"http://www.w3.org/2000/svg\"><defs><pattern id=\"hp8\" width=\"6\" height=\"6\" patternUnits=\"userSpaceOnUse\" patternTransform=\"rotate(45)\"><line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"6\" stroke=\"currentColor\" stroke-width=\"1\" stroke-opacity=\"0.55\"/></pattern></defs><line x1=\"31\" y1=\"26\" x2=\"404\" y2=\"26\" stroke=\"currentColor\" stroke-opacity=\"0.18\" stroke-dasharray=\"2 3\" stroke-width=\"0.6\"/><text x=\"29\" y=\"29\" text-anchor=\"end\" font-size=\"8.5\" fill=\"currentColor\">0</text><line x1=\"31\" y1=\"68\" x2=\"404\" y2=\"68\" stroke=\"currentColor\" stroke-opacity=\"0.18\" stroke-dasharray=\"2 3\" stroke-width=\"0.6\"/><text x=\"29\" y=\"71\" text-anchor=\"end\" font-size=\"8.5\" fill=\"currentColor\">20</text><line x1=\"31\" y1=\"110\" x2=\"404\" y2=\"110\" stroke=\"currentColor\" stroke-opacity=\"0.18\" stroke-dasharray=\"2 3\" stroke-width=\"0.6\"/><text x=\"29\" y=\"113\" text-anchor=\"end\" font-size=\"8.5\" fill=\"currentColor\">40</text><line x1=\"31\" y1=\"152\" x2=\"404\" y2=\"152\" stroke=\"currentColor\" stroke-opacity=\"0.18\" stroke-dasharray=\"2 3\" stroke-width=\"0.6\"/><text x=\"29\" y=\"155\" text-anchor=\"end\" font-size=\"8.5\" fill=\"currentColor\">60</text><line x1=\"31\" y1=\"194\" x2=\"404\" y2=\"194\" stroke=\"currentColor\" stroke-opacity=\"0.18\" stroke-dasharray=\"2 3\" stroke-width=\"0.6\"/><text x=\"29\" y=\"197\" text-anchor=\"end\" font-size=\"8.5\" fill=\"currentColor\">80</text><line x1=\"31\" y1=\"236\" x2=\"404\" y2=\"236\" stroke=\"currentColor\" stroke-opacity=\"0.18\" stroke-dasharray=\"2 3\" stroke-width=\"0.6\"/><text x=\"29\" y=\"239\" text-anchor=\"end\" font-size=\"8.5\" fill=\"currentColor\">100</text><line x1=\"31\" y1=\"278\" x2=\"404\" y2=\"278\" stroke=\"currentColor\" stroke-opacity=\"0.18\" stroke-dasharray=\"2 3\" stroke-width=\"0.6\"/><text x=\"29\" y=\"281\" text-anchor=\"end\" font-size=\"8.5\" fill=\"currentColor\">120</text><line x1=\"31\" y1=\"320\" x2=\"404\" y2=\"320\" stroke=\"currentColor\" stroke-opacity=\"0.18\" stroke-dasharray=\"2 3\" stroke-width=\"0.6\"/><text x=\"29\" y=\"323\" text-anchor=\"end\" font-size=\"8.5\" fill=\"currentColor\">140</text><line x1=\"31\" y1=\"362\" x2=\"404\" y2=\"362\" stroke=\"currentColor\" stroke-opacity=\"0.18\" stroke-dasharray=\"2 3\" stroke-width=\"0.6\"/><text x=\"29\" y=\"365\" text-anchor=\"end\" font-size=\"8.5\" fill=\"currentColor\">160</text><text x=\"4\" y=\"12\" font-size=\"8.5\" fill=\"currentColor\">dk</text><text x=\"71\" y=\"16\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"currentColor\">Kepçe</text><rect x=\"38\" y=\"26\" width=\"66\" height=\"42\" fill=\"currentColor\" fill-opacity=\"0.34\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"71\" y=\"50\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">L-1</text><rect x=\"38\" y=\"68\" width=\"66\" height=\"42\" fill=\"currentColor\" fill-opacity=\"0.34\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"71\" y=\"92\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">L-2</text><rect x=\"38\" y=\"110\" width=\"66\" height=\"42\" fill=\"currentColor\" fill-opacity=\"0.34\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"71\" y=\"134\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">L-3</text><rect x=\"38\" y=\"152\" width=\"66\" height=\"42\" fill=\"currentColor\" fill-opacity=\"0.34\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"71\" y=\"176\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">L-4</text><rect x=\"38\" y=\"194\" width=\"66\" height=\"42\" fill=\"currentColor\" fill-opacity=\"0.34\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"71\" y=\"218\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">L-1</text><rect x=\"38\" y=\"236\" width=\"66\" height=\"42\" fill=\"currentColor\" fill-opacity=\"0.34\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"71\" y=\"260\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">L-2</text><rect x=\"38\" y=\"278\" width=\"66\" height=\"42\" fill=\"currentColor\" fill-opacity=\"0.34\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"71\" y=\"302\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">L-3</text><rect x=\"38\" y=\"320\" width=\"66\" height=\"42\" fill=\"currentColor\" fill-opacity=\"0.34\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"71\" y=\"344\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">L-4</text><text x=\"145\" y=\"16\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"currentColor\">Kamyon 1</text><rect x=\"112\" y=\"26\" width=\"66\" height=\"42\" fill=\"currentColor\" fill-opacity=\"0.34\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"145\" y=\"50\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">L-1</text><rect x=\"112\" y=\"68\" width=\"66\" height=\"115.5\" fill=\"currentColor\" fill-opacity=\"0.08\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"145\" y=\"128.75\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">R</text><rect x=\"112\" y=\"183.5\" width=\"66\" height=\"10.5\" fill=\"url(#hp8)\" stroke=\"currentColor\" stroke-opacity=\"0.5\" stroke-width=\"0.8\"/><rect x=\"112\" y=\"194\" width=\"66\" height=\"42\" fill=\"currentColor\" fill-opacity=\"0.34\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"145\" y=\"218\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">L-1</text><rect x=\"112\" y=\"236\" width=\"66\" height=\"115.5\" fill=\"currentColor\" fill-opacity=\"0.08\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"145\" y=\"296.75\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">R</text><rect x=\"112\" y=\"351.5\" width=\"66\" height=\"10.5\" fill=\"url(#hp8)\" stroke=\"currentColor\" stroke-opacity=\"0.5\" stroke-width=\"0.8\"/><text x=\"219\" y=\"16\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"currentColor\">Kamyon 2</text><rect x=\"186\" y=\"26\" width=\"66\" height=\"31.5\" fill=\"currentColor\" fill-opacity=\"0.08\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"219\" y=\"44.75\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">R</text><rect x=\"186\" y=\"57.5\" width=\"66\" height=\"10.5\" fill=\"url(#hp8)\" stroke=\"currentColor\" stroke-opacity=\"0.5\" stroke-width=\"0.8\"/><rect x=\"186\" y=\"68\" width=\"66\" height=\"42\" fill=\"currentColor\" fill-opacity=\"0.34\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"219\" y=\"92\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">L-2</text><rect x=\"186\" y=\"110\" width=\"66\" height=\"115.5\" fill=\"currentColor\" fill-opacity=\"0.08\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"219\" y=\"170.75\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">R</text><rect x=\"186\" y=\"225.5\" width=\"66\" height=\"10.5\" fill=\"url(#hp8)\" stroke=\"currentColor\" stroke-opacity=\"0.5\" stroke-width=\"0.8\"/><rect x=\"186\" y=\"236\" width=\"66\" height=\"42\" fill=\"currentColor\" fill-opacity=\"0.34\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"219\" y=\"260\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">L-2</text><rect x=\"186\" y=\"278\" width=\"66\" height=\"84\" fill=\"currentColor\" fill-opacity=\"0.08\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"219\" y=\"323\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">R</text><text x=\"293\" y=\"16\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"currentColor\">Kamyon 3</text><rect x=\"260\" y=\"26\" width=\"66\" height=\"73.5\" fill=\"currentColor\" fill-opacity=\"0.08\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"293\" y=\"65.75\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">R</text><rect x=\"260\" y=\"99.5\" width=\"66\" height=\"10.5\" fill=\"url(#hp8)\" stroke=\"currentColor\" stroke-opacity=\"0.5\" stroke-width=\"0.8\"/><rect x=\"260\" y=\"110\" width=\"66\" height=\"42\" fill=\"currentColor\" fill-opacity=\"0.34\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"293\" y=\"134\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">L-3</text><rect x=\"260\" y=\"152\" width=\"66\" height=\"115.5\" fill=\"currentColor\" fill-opacity=\"0.08\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"293\" y=\"212.75\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">R</text><rect x=\"260\" y=\"267.5\" width=\"66\" height=\"10.5\" fill=\"url(#hp8)\" stroke=\"currentColor\" stroke-opacity=\"0.5\" stroke-width=\"0.8\"/><rect x=\"260\" y=\"278\" width=\"66\" height=\"42\" fill=\"currentColor\" fill-opacity=\"0.34\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"293\" y=\"302\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">L-3</text><rect x=\"260\" y=\"320\" width=\"66\" height=\"42\" fill=\"currentColor\" fill-opacity=\"0.08\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"293\" y=\"344\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">R</text><text x=\"367\" y=\"16\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"currentColor\">Kamyon 4</text><rect x=\"334\" y=\"26\" width=\"66\" height=\"115.5\" fill=\"currentColor\" fill-opacity=\"0.08\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"367\" y=\"86.75\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">R</text><rect x=\"334\" y=\"141.5\" width=\"66\" height=\"10.5\" fill=\"url(#hp8)\" stroke=\"currentColor\" stroke-opacity=\"0.5\" stroke-width=\"0.8\"/><rect x=\"334\" y=\"152\" width=\"66\" height=\"42\" fill=\"currentColor\" fill-opacity=\"0.34\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"367\" y=\"176\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">L-4</text><rect x=\"334\" y=\"194\" width=\"66\" height=\"115.5\" fill=\"currentColor\" fill-opacity=\"0.08\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"367\" y=\"254.75\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">R</text><rect x=\"334\" y=\"309.5\" width=\"66\" height=\"10.5\" fill=\"url(#hp8)\" stroke=\"currentColor\" stroke-opacity=\"0.5\" stroke-width=\"0.8\"/><rect x=\"334\" y=\"320\" width=\"66\" height=\"42\" fill=\"currentColor\" fill-opacity=\"0.34\" stroke=\"currentColor\" stroke-opacity=\"0.6\" stroke-width=\"0.8\"/><text x=\"367\" y=\"344\" text-anchor=\"middle\" font-size=\"9\" fill=\"currentColor\">L-4</text></svg></div><p><i>Şemada koyu bloklar operatör ve makinenin ortak faaliyetini (yükleme/boşaltma), açık bloklar operatörün bağımsız faaliyetini (yürüme, muayene), \"R\" makinenin otomatik çalışmasını, taramalı bloklar boş kalmayı gösterir.</i></p>"
  },
  {
    "ders": "tesis",
    "hafta": 3,
    "id": "tesis-h3-insanmak-07",
    "konu": "İnsan-Makine Şemaları",
    "kaynak": "Hafta 3, slayt 59 (Örnek-14, Ödev)",
    "baslik": "Robot kol – AGV sistemi: AGV sayısı, maliyet ve boşta kalma",
    "soru": "<p>Bir esnek imalat sisteminde, robot kollar ile CNC tezgâhlardan alınan bitmiş ürünler otomatik yönlendirmeli araçlara (AGV) aktarılmakta ve bu araçlar ile otomatik depolama ve erişim sistemlerine (AS/RS) taşınmaktadır. Zaman etütlerine göre: bir robot kolun CNC tezgâhından bitmiş ürünleri alıp tezgâhı boşaltma süresi 5 sn, bitmiş ürünleri AGV'ye aktarıp AGV'yi yükleme süresi 15 sn, yüklenen AGV'nin AS/RS sistemine varış süresi 35 sn, AGV'nin bitmiş ürünleri AS/RS sistemine boşaltma süresi 5 sn ve boş AGV'nin CNC tezgâhlarına geri dönüş süresi 20 sn'dir. Bir robot kolun maliyeti 40 TL/dk, bir AGV'nin kullanım maliyeti 30 TL/dk olarak belirlenmiştir.</p><p>Modelleme: robot kol operatör, AGV makine gibi alınır. AGV'nin yüklenmesi (15 sn) robot ve AGV'nin ortak faaliyetidir (a); CNC tezgâhını boşaltma (5 sn) robotun AGV'den bağımsız faaliyetidir (b); AGV'nin robottan bağımsız faaliyeti t = 35 + 5 + 20 sn'dir. Süreler saniye, maliyetler TL/dk olduğundan süre 60'a bölünerek dakikaya çevrilir: AGV yükü başına maliyet = (C<sub>1</sub> + m·C<sub>2</sub>)·(a + b)/60; bir periyottaki (çevrimdeki) toplam maliyet bunun m katıdır, yani (C<sub>1</sub> + m·C<sub>2</sub>)·T<sub>c</sub>/60.</p><p><b>(a)</b> Toplam taşıma-aktarma maliyetlerini en küçüklemek amacıyla bir robot kola tahsis edilmesi gereken AGV sayısı ne olmalıdır? Bu durumda bir periyotta (çevrimde) işletmenin katlanması gereken toplam taşıma-aktarma maliyetini hesaplayınız.</p><p><b>(b)</b> Bir önceki şıkta belirlediğiniz optimal AGV sayısı ile robot kol mu, yoksa AGV'ler mi boşta kalır? Toplam boşta kalma süresini hesaplayınız.</p>",
    "cevapTipi": "sayi",
    "cevaplar": [
      {
        "etiket": "(a) n' = (a + t)/(a + b)",
        "deger": 3.75,
        "tolerans": 0.01,
        "birim": ""
      },
      {
        "etiket": "(a) Optimum AGV sayısı",
        "deger": 4,
        "tolerans": 0,
        "birim": "AGV"
      },
      {
        "etiket": "(a) Bir periyottaki toplam taşıma-aktarma maliyeti",
        "deger": 213.2,
        "tolerans": 0.5,
        "birim": "TL"
      },
      {
        "etiket": "(b) Toplam AGV boşta kalma süresi",
        "deger": 20,
        "tolerans": 0.01,
        "birim": "sn"
      }
    ],
    "mantik": "<p>Örnek-13 ile aynı tiptir: n' = (a + t)/(a + b) = 3,75 ⇒ n = 3, n + 1 = 4. θ &gt; 1 çıktığı için 4 AGV atanır. 4 &gt; n' olduğundan çevrimi robot kol belirler; fazla kapasite AGV'lerde boşta kalma olarak görünür.</p>",
    "cozum": "<ol><li><b>Veriler:</b> a = 15 sn (AGV yükleme, ortak); b = 5 sn (CNC boşaltma, robotun bağımsız işi); t = 35 + 5 + 20 = 60 sn.</li><li><b>(a)</b> n' = (15 + 60)/(15 + 5) = <b>3,75</b>; ε = 40/30 = 1,33; θ = (3,75/3)·(1,33 + 3)/(1,33 + 3 + 1) = 1,016 &gt; 1 ⇒ <b>4 AGV</b>.</li><li>Çevrim: T<sub>c</sub>(4) = 4·(15 + 5) = 80 sn. Bir AGV yükünün maliyeti = (40 + 4·30) TL/dk × 20 sn / 60 = 53,3 TL; periyottaki toplam maliyet = (40 + 4·30) × 80/60 = 53,3 × 4 ≈ <b>213,2 TL</b> (tam değer 213,33).</li><li><b>(b)</b> m = 4 &gt; n' olduğundan robot kol hiç boşta kalmaz, <b>AGV'ler boşta kalır</b>: her AGV için I<sub>m</sub> = m(a + b) − (a + t) = 80 − 75 = 5 sn; toplam = 4 × 5 = <b>20 sn</b>.</li></ol><p><i>Not: Slayttaki cevap (4 adet ve 213,2 TL; AGV'ler boşta, toplam 20 sn) bu çözümle aynıdır. Slaytta maliyetler \"TL/sn\" yazılmıştır, fakat 213,2 TL ancak maliyetler TL/dk alınıp saniye cinsinden süre 60'a bölündüğünde çıkar; TL/sn ile tutarlı hesap bir periyot için (40 + 4·30) × 80 = 12.800 TL verirdi. Slayttaki \"dakikalık maliyet\" ifadesi de bu nedenle \"bir periyottaki (80 sn) maliyet\" olarak okunmalıdır (dakikalık maliyet 160 TL/dk olurdu). Hesapta birimleri her zaman kontrol edin.</i></p>"
  }
);
