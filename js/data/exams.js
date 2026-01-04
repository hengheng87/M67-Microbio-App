// ==========================================
// M67 微免考古題庫 (V11.0 Stable Merged)
// 收錄範圍：113期末、112期末(精選)
// ==========================================

export const pastExamDB = [
    // ------------------------------------------------
    // 113 學年度期末考 (113-Final)
    // ------------------------------------------------
    {
        id: "113-final-01",
        source: "113-微免期末",
        relatedPathogen: "general_virology",
        type: "mechanism",
        question: "病毒最常利用下列何種蛋白質進行吸附步驟？(What type of protein do viruses most commonly use to carry out the attachment step?)",
        options: ["(A) 基質蛋白 (Matrix protein)", "(B) 蛋白水解酶 (Protease)", "(C) 棘蛋白 (Spike protein)", "(D) 核心蛋白 (Core protein)"],
        correctAnswer: "C", 
        userNote: ""
    },
    {
        id: "113-final-02",
        source: "113-微免期末",
        relatedPathogen: "general_virology",
        type: "mechanism",
        question: "下列何者是正確的病毒複製步驟？\n步驟代號：(1)去殼 (uncoating) (2)認識目標細胞 (recognition)/附著 (attachment) (3)巨分子合成 (macromolecule synthesis) (4)穿入 (penetration) (5)病毒組合 (assembly) (6)病毒釋出 (release)",
        options: ["(A) 241356", "(B) 123456", "(C) 132456", "(D) 214356"],
        correctAnswer: "A",
        userNote: ""
    },
    {
        id: "113-final-03",
        source: "113-微免期末",
        relatedPathogen: "immunology",
        type: "mechanism",
        question: "下列那一個最有可能是病毒感染引發「全身性類感冒症狀」之因子？",
        options: ["(A) T細胞", "(B) 干擾素或細胞激素", "(C) 抗體", "(D) 免疫複合物"],
        correctAnswer: "B",
        userNote: ""
    },
    {
        id: "113-final-04",
        source: "113-微免期末",
        relatedPathogen: "lab_diagnosis",
        type: "basic",
        question: "下列何種技術或系統無法用來進行病毒的培養？",
        options: ["(A) 活體實驗動物", "(B) 雞胚胎蛋", "(C) 初代細胞培養", "(D) 血液瓊脂 (Blood agar)"],
        correctAnswer: "D",
        userNote: ""
    },
    {
        id: "113-final-05",
        source: "113-微免期末",
        relatedPathogen: "antiviral",
        type: "pharmacology",
        question: "下列有關抗病毒藥物之敘述，何者最不適當？",
        options: ["(A) Indinavir 常用來治療單純疱疹病毒", "(B) Ribavirin 合併干擾素可用於治療 C 型肝炎", "(C) 被狂犬病動物咬到之病人，必須施打免疫球蛋白", "(D) Amantadine 可抑制 A 型流行性感冒病毒"],
        correctAnswer: "A",
        userNote: ""
    },
    {
        id: "113-final-06",
        source: "113-微免期末",
        relatedPathogen: "prion",
        type: "clinical",
        question: "目前科學家認為克魯氏症 (Kuru) 是由 prion 所致的人類疾病，下列敘述何者正確？",
        options: ["(A) Kuru 類似典型的帕金森疾病，限於老人", "(B) Kuru 是一種人類退化性傳染性海綿狀腦病", "(C) 食物經高溫烹煮後再食用，可避免此疾病的傳播", "(D) 此疾病的傳染途徑和庫賈氏症 (CJD) 的傳染途徑相同"],
        correctAnswer: "B",
        userNote: ""
    },
    {
        id: "113-final-07",
        source: "113-微免期末",
        relatedPathogen: "hpv",
        type: "clinical",
        question: "下列有關人類乳突狀瘤病毒 (HPV) 的敘述，何者最不適當？",
        options: ["(A) 是一種常見的性行為傳染疾病", "(B) 高危險型 HPV 可能導致肛門癌", "(C) 會藉由產道由媽媽傳給小孩", "(D) 可感染人類的黏膜和皮膚，多數感染者均有明顯症狀"],
        correctAnswer: "D",
        userNote: ""
    },
    {
        id: "113-final-08",
        source: "113-微免期末",
        relatedPathogen: "rabies",
        type: "virology",
        question: "下列有關狂犬病毒 (rabies virus) 的敘述，何者錯誤？",
        options: ["(A) 為具套膜的單股負股 RNA 病毒", "(B) 可用 PCR 在被感染動物的口水中偵測病毒", "(C) 狂犬病毒可引起恐水症", "(D) 病毒主要在中樞神經系統大量複製並破壞，不會散播到其它器官或腺體"],
        correctAnswer: "D",
        userNote: ""
    },
    {
        id: "113-final-09",
        source: "113-微免期末",
        relatedPathogen: "picornavirus",
        type: "virology",
        question: "腸病毒與鼻病毒同屬小 RNA 病毒科，下列敘述何者錯誤？",
        options: ["(A) 兩者皆在細胞質內複製及組裝", "(B) 兩者皆對酒精處理有抗性", "(C) 兩者皆是單股正股 RNA 病毒", "(D) 兩者皆抗酸"],
        correctAnswer: "D",
        userNote: ""
    },
    {
        id: "113-final-10",
        source: "113-微免期末",
        relatedPathogen: "hsv",
        type: "clinical",
        question: "下列關於單純疱疹病毒一型 (HSV-1) 感染所引起的病症之敘述，何者正確？",
        options: ["(A) 大部分的原發性疱疹齦口炎發生在 70 歲以上的患者", "(B) 再發性疱疹感染只出現在下唇黏膜", "(C) 一般成年人感染後較不可能出現腹瀉", "(D) 在組織病理切片上可以看見 koilocytes，是其診斷特徵"],
        correctAnswer: "C",
        userNote: ""
    },
    {
        id: "113-final-11",
        source: "113-微免期末",
        relatedPathogen: "vzv",
        type: "clinical",
        question: "下列有關水痘帶狀疱疹病毒 (VZV) 及其疾病之敘述，何者錯誤？",
        options: ["(A) VZV 基因體為 DNA", "(B) VZV 感染可能會造成孩童有水痘，成人患者有帶狀疱疹", "(C) Acyclovir 不可用於治療 VZV 感染", "(D) 施打減毒疫苗可以預防感染"],
        correctAnswer: "C",
        userNote: ""
    },
    {
        id: "113-final-12",
        source: "113-微免期末",
        relatedPathogen: "ebv",
        type: "clinical",
        question: "下列有關 EB virus 之敘述，何者錯誤？",
        options: ["(A) 感染過 EB virus 的人非常少", "(B) Early antigen EA-R 的產生是進入 lytic cycle 的徵象", "(C) 感染後可能造成發燒、喉嚨痛、淋巴結腫大", "(D) 可能經由共食或接吻而傳染"],
        correctAnswer: "A",
        userNote: ""
    },
    {
        id: "113-final-13",
        source: "113-微免期末",
        relatedPathogen: "poxvirus",
        type: "clinical",
        question: "下列有關 M 痘 (Mpox) 的敘述，何者最適當？",
        options: ["(A) 由天花病毒所引起", "(B) 只會由感染 M 痘的猴子傳染給人", "(C) 接種減弱天花病毒株製成之疫苗可減低得到 M 痘的機會", "(D) M 痘病毒感染也造成傳染性濕疣"],
        correctAnswer: "C",
        userNote: ""
    },
    {
        id: "113-final-14",
        source: "113-微免期末",
        relatedPathogen: "polio",
        type: "epidemiology",
        question: "下列有關野生株小兒麻痺病毒的敘述，何者最不合適？",
        options: ["(A) 屬於微小 RNA 病毒科", "(B) 脊髓灰質炎致死率可到 2~5%", "(C) 感染多年後仍有可能發生後小兒麻痺症狀", "(D) 在大多數國家仍可發現野生株小兒麻痺病毒"],
        correctAnswer: "D",
        userNote: ""
    },
    {
        id: "113-final-15",
        source: "113-微免期末",
        relatedPathogen: "parvo",
        type: "virology",
        question: "下列有關小病毒 B19 (parvovirus B19) 的敘述，何者最適當？",
        options: ["(A) 為雙股 DNA 病毒", "(B) 主要傳播途徑為糞口傳染", "(C) 感染並引起紅血球的先驅細胞溶解", "(D) 感染兒童時，造成嬰兒玫瑰疹"],
        correctAnswer: "C",
        userNote: ""
    },
    {
        id: "113-final-16",
        source: "113-微免期末",
        relatedPathogen: "rna_retro",
        type: "virology",
        question: "有關反轉錄病毒 (retrovirus) 的敘述，何者最不適當？",
        options: ["(A) 原病毒 (Provirus) 只出現在其宿主細胞染色體固定的位置", "(B) 反轉錄酶可以利用 cDNA 為模板合成雙股 DNA", "(C) 在病毒顆粒中基因體具有兩套單股 RNA", "(D) 病毒顆粒中帶有反轉錄病毒酶"],
        correctAnswer: "A",
        userNote: ""
    },
    {
        id: "113-final-17",
        source: "113-微免期末",
        relatedPathogen: "dna_adeno",
        type: "clinical",
        question: "下列何種病毒最可能引發咽喉結膜熱？",
        options: ["(A) HHV-7", "(B) EBV", "(C) HSV-1", "(D) 腺病毒 (Adenovirus)"],
        correctAnswer: "D",
        userNote: ""
    },
    {
        id: "113-final-18",
        source: "113-微免期末",
        relatedPathogen: "dna_pap_poly",
        type: "clinical",
        question: "進行性多灶性白質腦病 (PML) 主要由何種病毒引起？",
        options: ["(A) 日本腦炎病毒", "(B) BK virus", "(C) Parvovirus B19", "(D) JC virus"],
        correctAnswer: "D",
        userNote: ""
    },
    {
        id: "113-final-19",
        source: "113-微免期末",
        relatedPathogen: "dna_herpes",
        type: "mechanism",
        question: "Epstein-Barr virus 可導致下列何種細胞的不死化？",
        options: ["(A) T 淋巴球", "(B) 上皮細胞", "(C) B 淋巴球", "(D) 單核球"],
        correctAnswer: "C",
        userNote: ""
    },
    {
        id: "113-final-20",
        source: "113-微免期末",
        relatedPathogen: "rna_retro",
        type: "clinical",
        question: "下列何種症狀最可能為 HIV 感染或罹患愛滋病？",
        options: ["(A) 28 歲男性，持續咳嗽", "(B) 44 歲女性，舌側緣有毛狀白斑", "(C) 81 歲男性，患有帕金森病", "(D) 65 歲女性，有義齒性口炎"],
        correctAnswer: "B",
        userNote: ""
    },
    {
        id: "113-final-21",
        source: "113-微免期末",
        relatedPathogen: "rna_retro",
        type: "mechanism",
        question: "HIV 最主要是殺死下列何種細胞而導致愛滋病？",
        options: ["(A) B 細胞", "(B) 單核球", "(C) 含 CD4 的 T 細胞", "(D) 含 CD8 的 T 細胞"],
        correctAnswer: "C",
        userNote: ""
    },
    {
        id: "113-final-22",
        source: "113-微免期末",
        relatedPathogen: "rna_picorna",
        type: "clinical",
        question: "下列何者與引起疱疹性咽喉炎及手足口病的致病原最相關？",
        options: ["(A) VZV", "(B) HSV", "(C) EBV", "(D) 柯沙奇病毒 (Coxsackievirus)"],
        correctAnswer: "D",
        userNote: ""
    },
    {
        id: "113-final-23",
        source: "113-微免期末",
        relatedPathogen: "rna_reo",
        type: "clinical",
        question: "一歲男嬰水瀉嘔吐兩天且輕微發燒，最可能受到何種病毒感染？",
        options: ["(A) 輪狀病毒 (Rotavirus)", "(B) 流感病毒", "(C) B 型肝炎病毒", "(D) EBV"],
        correctAnswer: "A",
        userNote: ""
    },
    {
        id: "113-final-24",
        source: "113-微免期末",
        relatedPathogen: "general_virology",
        type: "clinical",
        question: "下列何種病毒感染不會引發胎兒的先天性缺陷？",
        options: ["(A) CMV", "(B) Parvovirus B19", "(C) HPV", "(D) Rubella virus"],
        correctAnswer: "C",
        userNote: ""
    },
    {
        id: "113-final-25",
        source: "113-微免期末",
        relatedPathogen: "dna_parvo",
        type: "clinical",
        question: "下列何種病毒感染最有可能造成關節炎的症狀？",
        options: ["(A) CMV", "(B) EBV", "(C) HPV", "(D) Parvovirus B19"],
        correctAnswer: "D",
        userNote: ""
    },
    {
        id: "113-final-26",
        source: "113-微免期末",
        relatedPathogen: "prion",
        type: "diagnosis",
        question: "一種新的檢驗方式稱作 RT-QuIC，可以快速檢驗出檢體內是否含有 PrPSc。請問這是利用 prion 的那一種特性？",
        options: ["(A) PrPC 會聚集成纖絲", "(B) PrPSc 會聚集成纖絲", "(C) PrPSc 會將 PrPC 轉換成 PrPSc", "(D) PrPSc 的蛋白質半衰期較 PrPC 短"],
        correctAnswer: "C",
        userNote: ""
    },
    {
        id: "113-final-27",
        source: "113-微免期末",
        relatedPathogen: "antiviral",
        type: "pharmacology",
        question: "Acyclovir 可抑制下列何者之功能？",
        options: ["(A) 胸腺嘧啶激酶 (TK)", "(B) 病毒的 DNA 聚合酶", "(C) 神經胺酸酶 (NA)", "(D) 血球凝集素 (HA)"],
        correctAnswer: "B",
        userNote: ""
    },
    {
        id: "113-final-28",
        source: "113-微免期末",
        relatedPathogen: "antiviral",
        type: "pharmacology",
        question: "下列何種藥物可用來抑制 HIV-1 最終組裝和成熟步驟所需的酵素活性？",
        options: ["(A) 反轉錄酶抑制劑", "(B) 蛋白酶抑制劑 (Protease inhibitor)", "(C) 融合抑制劑", "(D) 嵌入酶抑制劑"],
        correctAnswer: "B",
        userNote: ""
    },
    {
        id: "113-final-29",
        source: "113-微免期末",
        relatedPathogen: "dna_pap_poly",
        type: "vaccine",
        question: "下列有關 HPV 疫苗的敘述，何者錯誤？",
        options: ["(A) 為 virus-like particle (VLP) 疫苗", "(B) 目前劑型大多皆由肌肉注射", "(C) 通常會含有血清型第 6, 11, 16, 18 型等病毒", "(D) 可預防子宮頸癌"],
        correctAnswer: "C", // (C) 九價才有含那麼多型，且選項語意不清，但一般認為C選項若指四價是正確的。此題爭議在D，D絕對正確。C通常包含6,11,16,18(四價)是正確敘述。題目問錯誤。原題答案可能是B或C? 肌肉注射是正確的。查證：HPV疫苗通常包含6,11,16,18 (四價/九價)。若題目是指二價(16,18)則C錯。根據113考題答案應為(C) 描述不夠精確 (例如二價不含6,11)。(註: 依照一般考題庫 C 是最可能被選為錯誤的細節，若考二價疫苗)。暫定 C。
        userNote: ""
    },
    {
        id: "113-final-30",
        source: "113-微免期末",
        relatedPathogen: "general_virology",
        type: "clinical",
        question: "下列病毒中，何者引起的主要臨床表徵是因其會造成潛伏感染，感染並潛藏在感覺神經元細胞內所致？\n①HSV ②Poliovirus ③VZV",
        options: ["(A) 123", "(B) 僅①②", "(C) 僅②③", "(D) 僅①③"],
        correctAnswer: "D",
        userNote: ""
    },
    {
        id: "113-final-31",
        source: "113-微免期末",
        relatedPathogen: "general_virology",
        type: "virology",
        question: "下列哪些病毒對乾洗手 (含有 70% 酒精) 的處理有抗性？\n①Coxsackievirus ②Rotavirus ③VZV ④HEV",
        options: ["(A) 123", "(B) 234", "(C) 124", "(D) 1234"],
        correctAnswer: "C", // 1,2,4 為無套膜病毒，具抗性。3有套膜。
        userNote: ""
    },
    {
        id: "113-final-32",
        source: "113-微免期末",
        relatedPathogen: "hepatitis",
        type: "virology",
        question: "下列有關 D 型肝炎病毒的敘述，何者錯誤？",
        options: ["(A) HDV 可藉由施打 B 型肝炎疫苗來預防感染", "(B) 主要藉由糞口傳染", "(C) 在分類上屬於 deltavirus", "(D) 目前沒有以 D 型肝炎病毒為標的的有效治療方式"],
        correctAnswer: "B", // 體液血液傳染，非糞口
        userNote: ""
    },
    {
        id: "113-final-33",
        source: "113-微免期末",
        relatedPathogen: "rna_ortho",
        type: "virology",
        question: "下列有關流感病毒 (influenza virus) 的敘述，何者錯誤？",
        options: ["(A) 利用 NP 與 M1 蛋白的差異，來區別流感病毒 A、B、C 三型", "(B) 利用 HA 與 NA 蛋白的差異，來區別 A 型流感病毒的亞型", "(C) B 型很容易發生抗原移行 (Antigenic shift)", "(D) 流感疫苗可預防 A 及 B 型病毒株感染"],
        correctAnswer: "C", // B型只會 Drift，不會 Shift
        userNote: ""
    },
    {
        id: "113-final-34",
        source: "113-微免期末",
        relatedPathogen: "general_virology",
        type: "epidemiology",
        question: "下列那幾種病毒不經由動物暨節肢動物而傳播？\n①Hantavirus ②JEV ③Yellow fever ④Rubella",
        options: ["(A) 14", "(B) 12", "(C) 34", "(D) 24"],
        correctAnswer: "A", // 1 是老鼠排泄物氣溶膠(非節肢動物叮咬)，4是飛沫。2,3是蚊子。題目陷阱在"節肢動物"。漢他是動物傳播但非節肢動物。若題目意指 Zoonosis，則1是。若指 Arbovirus，則1,4都不是。此題通常選非 Arbovirus: (A) 1,4
        userNote: ""
    },
    {
        id: "113-final-35",
        source: "113-微免期末",
        relatedPathogen: "general_virology",
        type: "virology",
        question: "下列何者不是負股 RNA 病毒？",
        options: ["(A) 登革熱病毒 (dengue virus)", "(B) 伊波拉病毒 (Ebola virus)", "(C) 副流感病毒 (parainfluenza virus)", "(D) 流感病毒 (influenza virus)"],
        correctAnswer: "A", // Dengue 是 +ssRNA
        userNote: ""
    },
    {
        id: "113-final-36",
        source: "113-微免期末",
        relatedPathogen: "rna_paramyxo",
        type: "virology",
        question: "下列何者是流行性感冒病毒 (Influenza) 和副流行性感冒病毒 (Parainfluenza) 的不同點？",
        options: ["(A) 前者為正股 RNA，後者為負股 RNA", "(B) 前者為負股 RNA，後者為正股 RNA", "(C) 前者在細胞核複製，後者是在細胞質複製", "(D) 前者的基因體是不分段型，後者是分段型"],
        correctAnswer: "C",
        userNote: ""
    },
    {
        id: "113-final-37",
        source: "113-微免期末",
        relatedPathogen: "hepatitis",
        type: "clinical",
        question: "罹患慢性 B 型肝炎的孕婦，若是測到以下哪一種抗原呈現陽性，則其新生兒必須在出生 24 小時內接受 B 型肝炎免疫球蛋白注射一劑？",
        options: ["(A) HBsAg", "(B) HBeAg", "(C) HBcAg", "(D) Anti-HBs"],
        correctAnswer: "B", // e抗原陽性代表高傳染力
        userNote: ""
    },
    {
        id: "113-final-38",
        source: "113-微免期末",
        relatedPathogen: "myco_intro",
        type: "basic",
        question: "構成真菌細胞壁之主要成分為何？",
        options: ["(A) 幾丁質以及 α-1-4-葡萄聚醣", "(B) 幾丁質以及 β-1-3-葡萄聚醣", "(C) 肽醣以及 β-1-4-葡萄聚醣", "(D) 幾丁質以及 α-1-6-葡萄聚醣"],
        correctAnswer: "B",
        userNote: ""
    },
    {
        id: "113-final-39",
        source: "113-微免期末",
        relatedPathogen: "myco_pharma",
        type: "pharmacology",
        question: "下列何種抗黴菌藥物，其作用機轉是和黴菌細胞膜之麥角脂醇 (ergosterol) 結合，造成黴菌細胞內容物流出而殺死黴菌？",
        options: ["(A) Ketoconazole", "(B) Griseofulvin", "(C) Amphotericin B", "(D) Echinocandins"],
        correctAnswer: "C",
        userNote: ""
    },
    {
        id: "113-final-40",
        source: "113-微免期末",
        relatedPathogen: "rna_arbo",
        type: "virology",
        question: "下列有關日本腦炎病毒與登革熱病毒特性之敘述，何者正確？",
        options: ["(A) 均可注射疫苗，預防感染", "(B) 被感染之宿主可再直接散播病毒", "(C) 均由埃及斑蚊傳播", "(D) 感染後均產生感冒般症狀"],
        correctAnswer: "B", // (B) 敘述怪怪的，宿主(蚊子)可散播。人(終端宿主)不可。登革熱病人可傳給蚊子。日本腦炎病人不可。此題應選最不誇張的? (A)登革熱疫苗不普遍。(C)日腦是家蚊。(D)症狀不同。修正：登革熱有疫苗但有爭議，日腦有。此題可能有爭議或舊題。一般選 (B) 指的是 Viremia 期可傳給蚊子? 但日腦人不會。如果宿主指動物(豬)則對。暫定B或無解，依據考古題常態選B可能性較高(指增幅宿主)。
        userNote: "注意：日本腦炎主要由豬增幅，登革熱由人增幅。"
    },
    {
        id: "113-final-41",
        source: "113-微免期末",
        relatedPathogen: "general_virology",
        type: "immunology",
        question: "感染下列那些病毒後，病人可獲得終身免疫力？\n①麻疹病毒 ②單純疱疹病毒 ③腺病毒 ④腮腺炎病毒",
        options: ["(A) 14", "(B) 34", "(C) 13", "(D) 12"],
        correctAnswer: "A", // 麻疹與腮腺炎感染後終身免疫。HSV潛伏復發。腺病毒型別多。
        userNote: ""
    },
    {
        id: "113-final-42",
        source: "113-微免期末",
        relatedPathogen: "hepatitis",
        type: "virology",
        question: "下列有關 E 型肝炎病毒的敘述，何者最適當？",
        options: ["(A) 為不具外套膜之病毒", "(B) 病毒顆粒帶有一個約 7.2kb 的負股 RNA 基因组", "(C) 只有兩種基因型的 HEV 可以感染人類", "(D) 此類病毒不會感染豬"],
        correctAnswer: "A",
        userNote: ""
    },
    {
        id: "113-final-43",
        source: "113-微免期末",
        relatedPathogen: "rna_paramyxo",
        type: "clinical",
        question: "下列何種病毒，會引起睪丸、卵巢、胰臟等腺體發炎之病症？",
        options: ["(A) 麻疹病毒", "(B) 呼吸道融合病毒", "(C) 副流行性感冒病毒", "(D) 腮腺炎病毒 (Mumps)"],
        correctAnswer: "D",
        userNote: ""
    },
    {
        id: "113-final-44",
        source: "113-微免期末",
        relatedPathogen: "hepatitis",
        type: "clinical",
        question: "病患若先感染 B 型肝炎病毒後，再感染下列何種肝炎病毒，極易引發猛爆性肝炎？",
        options: ["(A) A 型", "(B) C 型", "(C) D 型 (HDV)", "(D) E 型"],
        correctAnswer: "C", // Super-infection
        userNote: ""
    },
    {
        id: "113-final-45",
        source: "113-微免期末",
        relatedPathogen: "rna_paramyxo",
        type: "clinical",
        question: "一名兩歲幼童出現發高燒、3C症狀及 Koplik spots。請問造成這個孩子的疾病及病原的描述，何者不正確？",
        options: ["(A) 該病毒感染與青少年糖尿病有關", "(B) 紅疹/皮疹會先出現在臉，之後再散佈到軀幹", "(C) 該疾病可用 MMR 疫苗加以預防", "(D) 患者口腔內會出現柯氏斑點"],
        correctAnswer: "A", // 糖尿病是 Coxsackie B 或 Mumps 的關聯，非 Measles。
        userNote: ""
    },
    {
        id: "113-final-46",
        source: "113-微免期末",
        relatedPathogen: "myco_superficial",
        type: "clinical",
        question: "有關花斑癬 (pityriasis versicolor) 之敘述，下列何者錯誤？",
        options: ["(A) 最常見於年輕人", "(B) 致病原為馬拉色菌綜合菌", "(C) 致病原未歸類為自然界腐生菌", "(D) 無法由檢體直接做鏡檢診斷"],
        correctAnswer: "D", // 可以直接鏡檢 (Spaghetti and meatballs)
        userNote: ""
    },
    {
        id: "113-final-47",
        source: "113-微免期末",
        relatedPathogen: "general_virology",
        type: "vaccine",
        question: "下列何種病毒目前尚無有效的疫苗可以預防感染？",
        options: ["(A) 小兒麻痺病毒", "(B) 登革熱病毒", "(C) 麻疹病毒", "(D) 流行性感冒病毒"],
        correctAnswer: "B", // 登革熱疫苗目前尚未普及或完全有效(爭議)。相較之下其他都有極有效疫苗。
        userNote: ""
    },
    {
        id: "113-final-48",
        source: "113-微免期末",
        relatedPathogen: "rna_arbo",
        type: "virology",
        question: "下列關於馬堡病毒 (Marburg) 和伊波拉病毒 (Ebola) 之敘述，何者正確？",
        options: ["(A) 伊波拉病毒為飲食傳播", "(B) 馬堡病毒有 2 種亞型", "(C) 兩者皆屬於絲狀病毒科 (Filoviridae)", "(D) 兩者皆為生物安全等級第三級"],
        correctAnswer: "C", // BSL-4
        userNote: ""
    },
    {
        id: "113-final-49",
        source: "113-微免期末",
        relatedPathogen: "myco_intro",
        type: "basic",
        question: "有關黴菌 (fungus) 的敘述，下列何者錯誤？",
        options: ["(A) 有典型的細胞核", "(B) 細胞壁特有成分是幾丁質", "(C) 最適生長 pH 值為微酸環境", "(D) 最適生長溫度為 37℃"],
        correctAnswer: "D", // 黴菌(Mold)最適通常是 25度。體內(Yeast)才是37度。一般黴菌培養在 25-30度。
        userNote: ""
    },
    {
        id: "113-final-50",
        source: "113-微免期末",
        relatedPathogen: "myco_intro",
        type: "basic",
        question: "真菌之無性孢子 (asexual spores) 可分成那兩大類？",
        options: ["(A) 分生孢子 (conidia) 及囊孢子 (sporangiospores)", "(B) 瓶孢子及分節孢子", "(C) 厚膜孢子及分節孢子", "(D) 分節孢子及芽生孢子"],
        correctAnswer: "A",
        userNote: ""
    },

    // ------------------------------------------------
    // 112 學年度期末考 (精選試題) - 已修復並合併
    // ------------------------------------------------
    {
        id: "112-final-01",
        source: "112-微免期末 (M65)",
        relatedPathogen: "rna_retro",
        type: "clinical",
        question: "下列有關人類免疫缺陷病毒 (HIV) 及愛滋病 (AIDS) 的敘述，何者是錯誤的?",
        options: ["(A) 與愛滋病患者日常生活的接觸不是 HIV 的傳染途徑", "(B) 罹患愛滋病的母親盡量避免哺育母乳，以免感染孩子", "(C) HIV 感染後一星期之內血清中可以測到 HIV 抗體", "(D) 目前利用 HAART 療法 (雞尾酒療法) 可以延緩抗藥性病毒株的出現"],
        correctAnswer: "C",
        userNote: ""
    },
    {
        id: "112-final-02",
        source: "112-微免期末 (M65)",
        relatedPathogen: "rna_retro",
        type: "virology",
        question: "下列何種不是人類免疫缺陷病毒 (HIV) 感染的細胞種類?",
        options: ["(A) CD4 T 細胞", "(B) 嗜中性白血球", "(C) 巨噬細胞", "(D) 樹突細胞"],
        correctAnswer: "B",
        userNote: ""
    },
    {
        id: "112-final-03",
        source: "112-微免期末 (M65)",
        relatedPathogen: "rna_retro",
        type: "virology",
        question: "HIV 會因為對細胞親和性的不同，而區分為 X4 strain 或 R5 strain。請問下列哪一個基因的點突變，會改變 HIV 對細胞的親和性?",
        options: ["(A) env", "(B) gag", "(C) tat", "(D) pol"],
        correctAnswer: "A",
        userNote: ""
    },
    {
        id: "112-final-04",
        source: "112-微免期末 (M65)",
        relatedPathogen: "rna_retro",
        type: "diagnosis",
        question: "下列有關人類免疫缺陷病毒 (HIV) 檢測的描述，何者錯誤?",
        options: ["(A) 可以用 ELISA 做血清抗體的篩檢", "(B) 通常可用 Western blot 為確認試驗", "(C) 通常會檢測 CD4 細胞中的 HIV RNA 數量，來決定治療效果", "(D) 在血清抗體空窗期可以檢測病毒之核酸或 p24 抗原"],
        correctAnswer: "C", // 檢測血漿中的 RNA，非 CD4 細胞內的。
        userNote: ""
    },
    {
        id: "112-final-05",
        source: "112-微免期末 (M65)",
        relatedPathogen: "rna_retro",
        type: "clinical",
        question: "下列有關成人 T 細胞白血病 (adult T-cell leukemia) 的敘述，何者正確?",
        options: ["(A) 會經由呼吸道飛沫或糞口傳播", "(B) 血液中癌化的 T 細胞內可檢測到 HTLV-1 的機率很高", "(C) 隨著病程進展，血液中 CD4+ 細胞的數量越來越少", "(D) AZT 可以延緩病程，減低死亡率"],
        correctAnswer: "B",
        userNote: ""
    },
    {
        id: "112-final-06",
        source: "112-微免期末 (M65)",
        relatedPathogen: "poxvirus",
        type: "virology",
        question: "下列有關痘病毒 (poxvirus) 的敘述，何者正確?",
        options: ["(A) 天花的撲滅，是因為全面接種牛痘病毒疫苗", "(B) 傳染性軟疣病毒會造成人畜感染，也會造成人傳人", "(C) Orf 病毒會造成人畜感染，也會造成人傳人", "(D) 猴痘病毒會造成人畜感染，也會造成人傳人"],
        correctAnswer: "D", // 猴痘是 Zoonosis 且可人傳人。A 選項牛痘疫苗是對的，但撲滅原因更包含無帶原者等。Orf人不會傳人。軟疣只感染人。
        userNote: ""
    },
    {
        id: "112-final-07",
        source: "112-微免期末 (M65)",
        relatedPathogen: "hepatitis",
        type: "virology",
        question: "下列有關 D 型肝炎病毒的敘述，何者錯誤?",
        options: ["(A) HDV 的基因體為雙股 RNA", "(B) HD antigen 是 D 型肝炎病毒唯一會表現的蛋白質", "(C) 在分類上屬於 deltavirus", "(D) 目前沒有以 D 型肝炎病毒為標的的有效治療方式"],
        correctAnswer: "A", // ssRNA
        userNote: ""
    },
    {
        id: "112-final-08",
        source: "112-微免期末 (M65)",
        relatedPathogen: "rna_ortho",
        type: "virology",
        question: "下列有關流感病毒 (influenza virus) 的敘述，何者錯誤?",
        options: ["(A) 利用 NP 與 M1 蛋白的差異，來區分流感病毒 A、B、C 三型", "(B) 利用 HA 與 NA 蛋白的差異，來區分 A 型流感病毒的亞型", "(C) A、B、C 三型中，抗原變異最大的是 A 型", "(D) C 型曾造成大流行"],
        correctAnswer: "D", // C型通常只造成輕微感染
        userNote: ""
    },
    {
        id: "112-final-09",
        source: "112-微免期末 (M65)",
        relatedPathogen: "general_virology",
        type: "epidemiology",
        question: "下列哪幾種病毒可經由動物暨節肢動物而傳播? \n①漢他病毒 ②日本腦炎病毒 ③黃熱病病毒 ④狂犬病病毒",
        options: ["(A) 1, 2", "(B) 2, 3", "(C) 3, 4", "(D) 2, 4"],
        correctAnswer: "B",
        userNote: ""
    },
    {
        id: "112-final-10",
        source: "112-微免期末 (M65)",
        relatedPathogen: "general_virology",
        type: "virology",
        question: "下列何者不是負股 RNA 病毒?",
        options: ["(A) 流感病毒", "(B) 伊波拉病毒", "(C) 狂犬病病毒", "(D) 登革熱病毒"],
        correctAnswer: "D",
        userNote: ""
    },
    {
        id: "112-final-11",
        source: "112-微免期末 (M65)",
        relatedPathogen: "rna_paramyxo",
        type: "virology",
        question: "下列何者是流行性感冒病毒和副流行性感冒病毒的不同點?",
        options: ["(A) 前者為正股 RNA，後者為負股 RNA", "(B) 前者為負股 RNA，後者為正股 RNA", "(C) 前者在細胞核複製，後者是在細胞質複製", "(D) 前者的基因體是不分段型，後者是分段型"],
        correctAnswer: "C",
        userNote: ""
    },
    {
        id: "112-final-12",
        source: "112-微免期末 (M65)",
        relatedPathogen: "general_virology",
        type: "safety",
        question: "有關生物安全等級-3 (BSL-3) 實驗室設計上的防護，下列敘述何者錯誤?",
        options: ["(A) 實驗室與走廊通道有物理性分隔", "(B) 具備可自動關的雙門，且雙門不會同時打開", "(C) 排放的廢氣不再循環", "(D) 正壓氣流進入實驗室"],
        correctAnswer: "D", // 應為負壓
        userNote: ""
    },
    {
        id: "112-final-13",
        source: "112-微免期末 (M65)",
        relatedPathogen: "myco_intro",
        type: "basic",
        question: "構成真菌細胞壁之主要成分為何?",
        options: ["(A) 幾丁質以及 α-1-4-葡萄聚醣", "(B) 幾丁質以及 β-1-3-葡萄聚醣", "(C) 肽醣以及 β-1-4-葡萄聚醣", "(D) 幾丁質以及 α-1-6-葡萄聚醣"],
        correctAnswer: "B",
        userNote: ""
    },
    {
        id: "112-final-14",
        source: "112-微免期末 (M65)",
        relatedPathogen: "general_virology",
        type: "virology",
        question: "下列何者不是 Bunyaviruses 與 Arenaviruses 共同具有的特性?",
        options: ["(A) 為人畜共同傳染的病毒", "(B) 基因體為片段 RNA 組成", "(C) 可能造成出血熱", "(D) 二者病毒顆粒中都沒有包裹核糖體"],
        correctAnswer: "D", // Arena 有核糖體
        userNote: ""
    },
    {
        id: "112-final-15",
        source: "112-微免期末 (M65)",
        relatedPathogen: "rna_arbo",
        type: "virology",
        question: "下列有關日本腦炎病毒與登革熱病毒特性之敘述，何者正確?",
        options: ["(A) 均可注射疫苗，預防感染", "(B) 被感染之宿主可再直接散播病毒", "(C) 均由埃及斑蚊傳播", "(D) 感染後均產生感冒般症狀"],
        correctAnswer: "B", // 再次確認，112考題標準答案給B。
        userNote: ""
    },
    {
        id: "112-final-16",
        source: "112-微免期末 (M65)",
        relatedPathogen: "hepatitis",
        type: "virology",
        question: "下列有關 E 型肝炎病毒的敘述，何者最適當?",
        options: ["(A) 為不具外套膜之病毒", "(B) 病毒顆粒帶有一個約 7.2kb 的負股 RNA 基因組", "(C) 只有兩種基因型的 HEV 可以感染人類", "(D) 此類病毒不會感染豬"],
        correctAnswer: "A",
        userNote: ""
    },
    {
        id: "112-final-17",
        source: "112-微免期末 (M65)",
        relatedPathogen: "immunology",
        type: "vaccine",
        question: "感染下列哪些病毒後，病人可獲得終身免疫力? \n①麻疹病毒 ②單純疱疹病毒 ③腺病毒 ④腮腺炎病毒",
        options: ["(A) 1, 2", "(B) 3, 4", "(C) 1, 3", "(D) 1, 4"],
        correctAnswer: "D",
        userNote: ""
    },
    {
        id: "112-final-18",
        source: "112-微免期末 (M65)",
        relatedPathogen: "rna_paramyxo",
        type: "clinical",
        question: "下列何種病毒，會引起睪丸、卵巢、胰臟等腺體發炎之病症?",
        options: ["(A) 麻疹病毒", "(B) 呼吸道融合病毒", "(C) 副流行性感冒病毒", "(D) 腮腺炎病毒"],
        correctAnswer: "D",
        userNote: ""
    },
    {
        id: "112-final-19",
        source: "112-微免期末 (M65)",
        relatedPathogen: "hepatitis",
        type: "clinical",
        question: "病患若先感染 B 型肝炎病毒後，再感染下列何種肝炎病毒，極易引發猛爆性肝炎?",
        options: ["(A) A 型", "(B) C 型", "(C) D 型", "(D) E 型"],
        correctAnswer: "C",
        userNote: ""
    },
    {
        id: "112-final-20",
        source: "112-微免期末 (M65)",
        relatedPathogen: "rna_ortho",
        type: "epidemiology",
        question: "下列有關流感病毒的敘述，何者正確?",
        options: ["(A) 目前抗病毒藥物克流感僅可用來治療 A 型流感病毒感染", "(B) A 型流感病毒可能因為不同亞型的基因片段互換造成抗原移位 (Antigenic shift)", "(C) 高病原性禽流感病毒 A (H5N1) 亞型無法感染人類", "(D) 犬類不會被 A 型流感病毒感染"],
        correctAnswer: "B",
        userNote: ""
    },
    {
        id: "112-final-21",
        source: "112-微免期末 (M65)",
        relatedPathogen: "myco_superficial",
        type: "clinical",
        question: "有關花斑癬 (pityriasis versicolor) 之敘述，下列何者錯誤?",
        options: ["(A) 最常見於年輕人", "(B) 致病原為粃糠馬拉色菌綜合菌", "(C) 致病原未歸類為自然界腐生菌", "(D) 無法由檢體直接做鏡檢診斷"],
        correctAnswer: "D",
        userNote: ""
    },
    {
        id: "112-final-22",
        source: "112-微免期末 (M65)",
        relatedPathogen: "vaccine",
        type: "vaccine",
        question: "下列何種病毒目前尚無有效的疫苗可以預防感染?",
        options: ["(A) 小兒麻痺病毒", "(B) 登革熱病毒", "(C) 麻疹病毒", "(D) 流行性感冒病毒"],
        correctAnswer: "B",
        userNote: ""
    },
    {
        id: "112-final-23",
        source: "112-微免期末 (M65)",
        relatedPathogen: "rna_ortho",
        type: "clinical",
        question: "感染下列何種病毒，若自行服用阿斯匹靈 (aspirin) 等水楊酸類退燒藥物後，最易增加兒童罹患雷氏症候群 (Reye syndrome) 的風險?",
        options: ["(A) 德國麻疹病毒", "(B) 麻疹病毒", "(C) 流感病毒", "(D) 狂犬病病毒"],
        correctAnswer: "C",
        userNote: ""
    },
    {
        id: "112-final-24",
        source: "112-微免期末 (M65)",
        relatedPathogen: "rna_arbo",
        type: "virology",
        question: "有關登革病毒之敘述，下列何者正確?",
        options: ["(A) 屬於 Bunyaviridae", "(B) 可造成休克症狀", "(C) 含有三個血清型別", "(D) 所含之病毒基因體為負股 RNA 片段"],
        correctAnswer: "B",
        userNote: ""
    },
    {
        id: "112-final-25",
        source: "112-微免期末 (M65)",
        relatedPathogen: "myco_intro",
        type: "basic",
        question: "真菌之無性孢子 (asexual spores) 可分為哪兩大類?",
        options: ["(A) 分生孢子及囊孢子", "(B) 瓶孢子及分節孢子", "(C) 厚膜孢子及分節孢子", "(D) 分節孢子及芽生孢子"],
        correctAnswer: "A",
        userNote: ""
    },
    {
        id: "112-final-26",
        source: "112-微免期末 (M65)",
        relatedPathogen: "general_virology",
        type: "virology",
        question: "下列哪一類病毒對酒精敏感，而且病毒顆粒內必須攜帶 RNA-dependent RNA polymerase?",
        options: ["(A) Enveloped ssRNA(+)", "(B) Enveloped ssRNA(-)", "(C) Non-enveloped ssRNA(+)", "(D) Non-enveloped ssRNA(-)"],
        correctAnswer: "B",
        userNote: ""
    },
    {
        id: "112-final-27",
        source: "112-微免期末 (M65)",
        relatedPathogen: "general_virology",
        type: "virology",
        question: "下列有關病毒的敘述，何者最適當?",
        options: ["(A) 病毒複製的速率是以等比級數方式增加", "(B) 所有 RNA 病毒均在寄主細胞質中完成複製工作", "(C) RNA 病毒複製時，基因體的複製錯誤率大於 DNA 病毒", "(D) 新冠肺炎病毒 (SARS-CoV-2) 對環境的耐受性比腸病毒 (enterovirus) 強"],
        correctAnswer: "C",
        userNote: ""
    },
    {
        id: "112-final-28",
        source: "112-微免期末 (M65)",
        relatedPathogen: "general_virology",
        type: "virology",
        question: "下列有關病毒與細胞受體的配對，何者正確? \n1. Epstein-Barr: CD4 \n2. Rhinovirus: ICAM-1 \n3. Rabies virus: acetylcholine receptor \n4. B19 virus: Erythrocyte P antigen",
        options: ["(A) 1, 3, 4", "(B) 1, 2, 3, 4", "(C) 2, 3, 4", "(D) 2, 3"],
        correctAnswer: "C",
        userNote: ""
    },
    {
        id: "112-final-29",
        source: "112-微免期末 (M65)",
        relatedPathogen: "hepatitis",
        type: "diagnosis",
        question: "以下有關實驗室檢驗的描述，何者不正確?",
        options: ["(A) B 型肝炎病毒表面抗原呈現陽性，代表受試者為 B 型肝炎患者", "(B) B 型肝炎病毒表面抗體呈現陽性，代表受試者對 B 型肝炎病毒有免疫力", "(C) 病理切片發現多核巨大細胞，代表切片來自於被單純疱疹病毒感染的病患", "(D) 科霍氏原則是判斷病原及疾病相關性的方法"],
        correctAnswer: "A", // HBsAg 陽性也可能是帶原者，不一定發病。
        userNote: ""
    },
    {
        id: "112-final-30",
        source: "112-微免期末 (M65)",
        relatedPathogen: "rna_retro",
        type: "vaccine",
        question: "愛滋病患者若需要進行疫苗接種，不適合接種下列哪一種疫苗?",
        options: ["(A) 沙克疫苗", "(B) 狂犬病疫苗", "(C) 帶狀疱疹疫苗 (Zoster vaccine)", "(D) 腸病毒 71 型疫苗"],
        correctAnswer: "C", // 帶狀疱疹疫苗舊款為活毒 (Zostavax)，免疫不全者禁忌。(新款Shingrix為死毒，但考題通常指活毒)
        userNote: ""
    },
    {
        id: "112-final-31",
        source: "112-微免期末 (M65)",
        relatedPathogen: "antiviral",
        type: "pharmacology",
        question: "下列有關抗病毒藥、作用機轉與病毒的配對，何者正確? \n① Lamivudine: 核酸複製: HIV \n② Acyclovir: 核酸複製: CMV \n③ Amantadine: 去蛋白衣: Influenza A \n④ Ribavirin: 核酸複製: HCV \n⑤ Ritonavir: 核酸複製: HIV",
        options: ["(A) 1, 3, 4", "(B) 1, 2, 3", "(C) 1, 3, 5", "(D) 2, 4, 5"],
        correctAnswer: "A",
        userNote: ""
    },
    {
        id: "112-final-32",
        source: "112-微免期末 (M65)",
        relatedPathogen: "antiviral",
        type: "pharmacology",
        question: "有關抗病毒藥物 acyclovir 的敘述，下列何者錯誤?",
        options: ["(A) 此藥物為核苷類似物", "(B) 此藥物須先經由病毒蛋白質作用後才能發揮作用", "(C) 病毒的 thymidine kinase 基因突變可能會導致病毒對 acyclovir 產生抗藥性", "(D) 此藥物可以避免病毒的潛伏感染"],
        correctAnswer: "D", // 無法根除潛伏
        userNote: ""
    },
    {
        id: "112-final-33",
        source: "112-微免期末 (M65)",
        relatedPathogen: "dna_herpes",
        type: "clinical",
        question: "關於疱疹病毒所引起的疾病或現象，下列敘述何者正確?",
        options: ["(A) 急性疱疹性口齦炎是 HHV-8 所引起", "(B) Burkitt's lymphoma 的發生與人類巨細胞病毒的感染有關", "(C) 單純疱疹病毒第二型的感染都在腰部以下，不會有口腔內的感染", "(D) 疱疹性唇炎 (herpes labialis) 為單純疱疹病毒第一型潛伏再復發後所造成的疾病"],
        correctAnswer: "D",
        userNote: ""
    },
    {
        id: "112-final-34",
        source: "112-微免期末 (M65)",
        relatedPathogen: "rna_reo",
        type: "virology",
        question: "下列有關輪狀病毒 (rotavirus) 的敘述，何者錯誤?",
        options: ["(A) 可用抗病毒藥物治療", "(B) 已有疫苗可供接種", "(C) 為一個主要造成嬰幼兒嚴重腹瀉的病毒", "(D) 如果同時感染兩個不同血清型的病毒，基因體重組 (reassortment) 可能發生"],
        correctAnswer: "A",
        userNote: ""
    },
    {
        id: "112-final-35",
        source: "112-微免期末 (M65)",
        relatedPathogen: "rna_picorna",
        type: "virology",
        question: "下列何者為鼻病毒 (rhinovirus) 之特性?",
        options: ["(A) 細胞病變呈葡萄球狀聚集", "(B) 造成下呼吸道感染比上呼吸道感染常見", "(C) 對酸敏感", "(D) 具有套膜之病毒"],
        correctAnswer: "C",
        userNote: ""
    },
    {
        id: "112-final-36",
        source: "112-微免期末 (M65)",
        relatedPathogen: "rabies",
        type: "clinical",
        question: "下列有關狂犬病毒 (rabies virus) 的敘述，何者最不適當?",
        options: ["(A) 此病毒可以侵犯中樞神經系統", "(B) 有部分受感染的人會產生恐水症", "(C) 疫苗對已經受感染病人並無任何治療效果", "(D) 此病毒可能存在被感染動物的唾液中"],
        correctAnswer: "C", // 暴露後打疫苗有效 (PEP)
        userNote: ""
    },
    {
        id: "112-final-37",
        source: "112-微免期末 (M65)",
        relatedPathogen: "prion",
        type: "clinical",
        question: "下列關於庫賈氏病 (CJD) 之敘述，何者錯誤?",
        options: ["(A) 是由一種具感染性的普利昂蛋白 (prion) 造成的疾病", "(B) 因為星狀細胞吞噬受傷的神經細胞，而使腦組織變成海綿樣", "(C) 若是因吃入遭受污染的牛肉或相關內臟、骨粉，則潛伏期通常較短", "(D) 可藉由侵入性醫療裝置傳染"],
        correctAnswer: "C", // vCJD 潛伏期也長，且 CJD 主要不是吃牛肉 (vCJD 才是)，但 C 選項描述潛伏期短是錯的，通常很長。
        userNote: ""
    },
    {
        id: "112-final-38",
        source: "112-微免期末 (M65)",
        relatedPathogen: "general_virology",
        type: "diagnosis",
        question: "下列何種病毒無法利用抗原特異性來區分型別?",
        options: ["(A) 小兒麻痺病毒", "(B) 人類乳突狀瘤病毒 (HPV)", "(C) 單純疱疹病毒", "(D) 腺病毒"],
        correctAnswer: "B", // HPV 分型靠 DNA 序列 (基因型)，無法用血清學/抗原分型 (因難以培養且 L1 蛋白抗原性相似)。
        userNote: ""
    },
    {
        id: "112-final-39",
        source: "112-微免期末 (M65)",
        relatedPathogen: "vzv",
        type: "clinical",
        question: "下列何者較不可能發生於初次感染水痘帶狀疱疹病毒 (VZV) 的成年人?",
        options: ["(A) 病毒血症", "(B) 發燒", "(C) 帶狀疱疹", "(D) 肺炎"],
        correctAnswer: "C", // 初次感染是水痘，復發才是帶狀疱疹。
        userNote: ""
    },
    {
        id: "112-final-40",
        source: "112-微免期末 (M65)",
        relatedPathogen: "ebv",
        type: "mechanism",
        question: "Epstein-Barr virus 感染可導致下列何種細胞的不死化?",
        options: ["(A) T 淋巴球", "(B) 上皮細胞", "(C) B 淋巴球", "(D) 紅血球"],
        correctAnswer: "C",
        userNote: ""
    },
    {
        id: "112-final-41",
        source: "112-微免期末 (M65)",
        relatedPathogen: "dna_herpes",
        type: "virology",
        question: "下列何種病毒的潛伏感染部位最常在單核球 (monocyte)?",
        options: ["(A) HSV", "(B) VZV", "(C) Adenovirus", "(D) CMV"],
        correctAnswer: "D",
        userNote: ""
    },
    {
        id: "112-final-42",
        source: "112-微免期末 (M65)",
        relatedPathogen: "rna_picorna",
        type: "clinical",
        question: "下列何者與引起疱疹性咽喉炎及手足口病的致病原最相關?",
        options: ["(A) VZV", "(B) 腺病毒", "(C) Parvovirus B19", "(D) Coxsackievirus"],
        correctAnswer: "D",
        userNote: ""
    },
    {
        id: "112-final-43",
        source: "112-微免期末 (M65)",
        relatedPathogen: "dna_parvo",
        type: "clinical",
        question: "孕婦感染下列何種病毒較易造成胎兒水腫 (hydrops fetalis)?",
        options: ["(A) BK virus", "(B) VZV", "(C) Parvovirus B19", "(D) Coxsackievirus"],
        correctAnswer: "C",
        userNote: ""
    },
    {
        id: "112-final-44",
        source: "112-微免期末 (M65)",
        relatedPathogen: "hpv",
        type: "clinical",
        question: "下列何種疾病與人類乳突狀瘤病毒 (HPV) 最無關?",
        options: ["(A) 膀胱炎", "(B) 子宮頸癌", "(C) 頭頸部良性腫瘤", "(D) 尖型濕疣"],
        correctAnswer: "A",
        userNote: ""
    },
    {
        id: "112-final-45",
        source: "112-微免期末 (M65)",
        relatedPathogen: "dna_pap_poly",
        type: "clinical",
        question: "下列何種病毒的感染與常見於腎臟移植病患的輸尿管狹窄最相關?",
        options: ["(A) B19", "(B) JC", "(C) BK", "(D) HPV"],
        correctAnswer: "C",
        userNote: ""
    },
    {
        id: "112-final-46",
        source: "112-微免期末 (M65)",
        relatedPathogen: "dna_adeno",
        type: "clinical",
        question: "下列何者為腺病毒 (adenovirus) 第 41 型所引發的主要臨床症狀?",
        options: ["(A) 結膜角膜炎", "(B) 上呼吸道感染", "(C) 紅疹", "(D) 腸胃道感染"],
        correctAnswer: "D",
        userNote: ""
    },
    {
        id: "112-final-47",
        source: "112-微免期末 (M65)",
        relatedPathogen: "rna_picorna",
        type: "clinical",
        question: "一位小朋友發高燒 5 天，持續出現食慾不佳、意識模糊和四肢無力。家長自述一星期前幼稚園的同學也出現同樣的情形。最需要考慮下列何種病毒感染?",
        options: ["(A) 鼻病毒", "(B) 腸病毒 71 型", "(C) 腺病毒", "(D) 狂犬病毒"],
        correctAnswer: "B",
        userNote: ""
    },
    {
        id: "112-final-48",
        source: "112-微免期末 (M65)",
        relatedPathogen: "ebv",
        type: "clinical",
        question: "一位大學新生持續 2 週有頭痛、發燒、疲倦。這兩天又有喉嚨痛及淋巴腫大、診斷為嗜異性抗體陽性。下列有關該病毒及疾病的描述何者正確?",
        options: ["(A) 會藉由糞口或呼吸道飛沫傳播", "(B) 感染到小孩子可能造成無症狀性感染", "(C) 與人類疱疹病毒第六型同屬同一個病毒亞科", "(D) 有疫苗可以加以預防"],
        correctAnswer: "B", // (A) 主要是唾液，非糞口。(C) EBV是Gamma, HHV6是Beta。(D) 無疫苗。小孩子感染通常無症狀。
        userNote: ""
    },
    {
        id: "112-final-49",
        source: "112-微免期末 (M65)",
        relatedPathogen: "general_virology",
        type: "virology",
        question: "下列何者病毒引起的主要臨床表徵是因其會造成潛伏感染，感染並潛藏在感覺神經元細胞內所致? \n① HSV-1 \n② Poliovirus \n③ VZV \n④ JC virus \n⑤ Rabies virus",
        options: ["(A) 1, 2, 5", "(B) 2, 4, 5", "(C) 2, 3, 5", "(D) 1, 3"],
        correctAnswer: "D", // 只有 Herpes (1, 3) 潛伏在感覺神經節。Rabies 是急性感染，不潛伏。Poliovirus 不潛伏。JC 潛伏在腎臟/淋巴。
        userNote: ""
    },
    {
        id: "112-final-50",
        source: "112-微免期末 (M65)",
        relatedPathogen: "general_virology",
        type: "epidemiology",
        question: "到開發中國家旅遊可能會因為吃到不乾淨的食物而被感染，請問下列哪些病毒可以藉由糞口傳播? \n① Poliovirus \n② VZV \n③ Adenovirus \n④ Parvovirus B19 \n⑤ Norovirus",
        options: ["(A) 1, 3, 5", "(B) 1, 3, 4, 5", "(C) 2, 3, 4", "(D) 1, 4, 5"],
        correctAnswer: "A", // 1(腸), 3(腺-部分型別), 5(諾羅) 皆糞口。VZV飛沫。B19飛沫/血液。
        userNote: ""
    }
];
