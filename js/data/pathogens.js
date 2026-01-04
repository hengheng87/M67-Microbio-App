export const pathogenData = {
const pathogenData = {
            'dna_pap_poly': {
                category: 'DNA Viruses',
                title: "乳突瘤與多瘤病毒科 (Papilloma & Polyoma)",
                family: "Papillomaviridae / Polyomaviridae",
                color: "blue",
                tags: { genome: "dsDNA (Circular)", envelope: "Naked", disease: "Warts, Cancer, PML" },
                quickFacts: [
                    { label: "基因體", val: "Circular dsDNA, Naked", src: "Lec" },
                    { label: "HPV癌化", val: "<span class='exam-target'>E6(p53), E7(Rb)</span>", src: "Gb p.13" },
                    { label: "診斷", val: "Koilocytes (HPV), Decoy cells (BK)", src: "Txt" },
                    { label: "疫苗", val: "Gardasil 9 (L1 VLP)", src: "Gb p.14" }
                ],
                sections: [
                    {
                        title: "HPV 致癌機制 (Oncogenesis)",
                        content: `
                            <p><strong>高風險型 (High-risk Types)：</strong>HPV 16, 18, 31, 33。<br>致癌關鍵在於病毒 DNA 整合入宿主染色體，導致 E2 基因破壞，進而使 E6 與 E7 過度表現。<span class="bg-source-gb source-tag text-blue-800">[Gb] 1119 p.13</span></p>
                            <ul>
                                <li><strong>E6 蛋白：</strong>結合並降解宿主的 <span class='exam-target'>p53</span> (腫瘤抑制蛋白)，抑制細胞凋亡 (Apoptosis)。</li>
                                <li><strong>E7 蛋白：</strong>結合宿主的 <span class='exam-target'>Rb (Retinoblastoma)</span> 蛋白，使其釋放 <span class='exam-target'>E2F</span> 轉錄因子，強迫細胞進入 S phase (細胞分裂)。</li>
                            </ul>
                        `
                    },
                    {
                        title: "HPV 臨床表現與診斷",
                        content: `
                            <ul>
                                <li><strong>皮膚疣 (Cutaneous Warts)：</strong>HPV 1-4。尋常疣、蹠疣。</li>
                                <li><strong>尖銳濕疣 (Genital Warts / 菜花)：</strong><span class='exam-target'>HPV 6, 11</span> (低風險型)。良性，不致癌。</li>
                                <li><strong>子宮頸癌 (Cervical Cancer)：</strong><span class='exam-target'>HPV 16, 18</span> (高風險型)。佔 70% 病例。</li>
                                <li><strong>診斷：</strong>Pap smear (抹片) 可見 <span class='exam-target'>Koilocytes (空泡細胞)</span>：核周圍有空暈 (Perinuclear halo)、核皺縮。<span class="bg-source-txt source-tag text-green-800">[Txt]</span></li>
                                <li><strong>預防：</strong>Gardasil 9 (九價疫苗)。主要成份為 L1 Capsid 形成的 <span class='exam-target'>VLP (Virus-like particle)</span>。</li>
                            </ul>
                        `
                    },
                    {
                        title: "多瘤病毒科 (Polyomaviridae)",
                        content: `
                            <p>主要感染免疫低下者 (如 AIDS, 器官移植患者)。潛伏於腎臟。</p>
                            <ul>
                                <li><strong>JC Virus：</strong>引起 <span class='exam-target'>PML (進行性多灶性白質腦病)</span>。破壞寡樹突膠質細胞 (Oligodendrocytes)，導致中樞神經脫髓鞘。症狀：失智、運動失調。<span class="bg-source-gb source-tag text-blue-800">[Gb] p.15</span></li>
                                <li><strong>BK Virus：</strong>在腎臟移植患者中再活化，導致腎病變 (BK nephropathy) 或骨髓移植患者的 <span class='exam-target'>出血性膀胱炎 (Hemorrhagic cystitis)</span>。</li>
                                <li><strong>診斷 (BKV)：</strong>尿液細胞學檢查可見 <span class='exam-target'>Decoy cells</span> (含有病毒包涵體的上皮細胞)。</li>
                            </ul>
                        `
                    }
                ]
            },
            'dna_parvo': {
                category: 'DNA Viruses',
                title: "小病毒科 (Parvoviridae)",
                family: "Parvoviridae",
                color: "blue",
                tags: { genome: "ssDNA (Linear)", envelope: "Naked", disease: "傳染性紅斑, 胎兒水腫" },
                quickFacts: [
                    { label: "基因體", val: "唯一的 <span class='exam-target'>ssDNA</span>", src: "Gb 1210 p.3" },
                    { label: "受體", val: "P antigen (紅血球前驅)", src: "Lec" },
                    { label: "大小", val: "最小的 DNA 病毒 (18-26nm)", src: "Txt" },
                    { label: "複製", val: "需分裂旺盛細胞 (S phase)", src: "Gb p.4" }
                ],
                sections: [
                    {
                        title: "病毒特性與複製 (Structure & Replication)",
                        content: `
                            <p><strong>結構：</strong>極小 (18-26nm)，二十面體，無套膜。是<span class='exam-target'>唯一單股 DNA (ssDNA)</span> 的動物病毒。基因體兩端有 <span class='exam-target'>Inverted Terminal Repeats (ITR)</span> 形成髮夾結構 (Hairpin loop) 作為複製引子。<span class="bg-source-gb source-tag text-blue-800">[Gb] 1210 p.3</span></p>
                            <p><strong>複製依賴性：</strong></p>
                            <ul>
                                <li><strong>B19 Virus：</strong>自主複製，但高度依賴宿主細胞處於 <span class='exam-target'>S phase (有絲分裂活躍期)</span> 才有足夠酵素。</li>
                                <li><strong>AAV (Adeno-Associated Virus)：</strong>缺陷病毒 (Defective)，必須有 <span class='exam-target'>Helper virus</span> (如 Adenovirus, HSV) 共感染提供協助才能複製，否則只能潛伏。<span class="bg-source-lec source-tag text-pink-800">[Lec]</span></li>
                            </ul>
                            <p><strong>細胞受體：</strong><span class='exam-target'>P antigen (Globoside)</span>，主要表現於紅血球前驅細胞 (Erythroid precursors)。</p>
                        `
                    },
                    {
                        title: "B19 Virus 臨床疾病 (Clinical)",
                        content: `
                            <p><strong>雙相病程 (Biphasic course)：</strong><span class="bg-source-gb source-tag text-blue-800">[Gb] p.6</span></p>
                            <ul>
                                <li><strong>初期 (Viremia phase)：</strong>傳染力強。類似流感症狀、發燒。病毒血症導致紅血球生成暫停。</li>
                                <li><strong>後期 (Immune mediated)：</strong>出現抗體 (IgM-IgG complex)。皮疹、關節痛。此時<span class='exam-target'>已無傳染力</span> (不需隔離)。</li>
                            </ul>
                            <hr class="my-2 border-gray-200">
                            <p><strong>主要症候群：</strong></p>
                            <ul>
                                <li><strong>傳染性紅斑 (Erythema infectiosum / Fifth disease)：</strong>
                                    <br>兒童常見。臉頰出現 <span class='exam-target'>Slapped cheek (被打耳光)</span> 紅疹 (口周蒼白)，接著軀幹出現蕾絲狀紅疹 (Lacy rash)。<span class="bg-source-txt source-tag text-green-800">[Txt]</span>
                                </li>
                                <li><strong>再生不良性貧血危象 (Transient Aplastic Crisis)：</strong>
                                    <br>發生於慢性溶血性貧血患者 (如鐮刀型貧血)。病毒破壞紅血球前驅細胞，導致血紅素急降 (Severe reticulocytopenia)。
                                </li>
                                <li><strong>胎兒水腫 (Hydrops fetalis)：</strong>
                                    <br>孕婦感染經胎盤傳給胎兒。病毒攻擊胎兒紅血球 → 嚴重貧血 → 高輸出性心衰竭 → 全身水腫。<span class="bg-source-clin source-tag text-yellow-800">[Clin]</span>
                                </li>
                                <li><strong>關節病變 (Arthropathy)：</strong>成人感染常見 (尤其是女性)，手指、手腕、膝蓋對稱性關節痛。</li>
                            </ul>
                        `
                    },
                    {
                        title: "診斷與治療",
                        content: `
                            <ul>
                                <li><strong>診斷：</strong>特異性 <span class='exam-target'>IgM</span> (近期感染)。PCR 偵測病毒 DNA (尤其在 Aplastic crisis 或免疫不全者，因抗體可能不足)。</li>
                                <li><strong>治療：</strong>無特效抗病毒藥。支持性療法。
                                    <br>免疫不全持續感染者可給予 <span class='exam-target'>IVIG (靜脈注射免疫球蛋白)</span> 以中和病毒。
                                </li>
                                <li><strong>預防：</strong>無人類疫苗。(貓狗有 Parvo 疫苗，但不感染人)。</li>
                            </ul>
                        `
                    }
                ]
            },
            'dna_herpes': { 
                category: 'DNA Viruses', 
                title: "皰疹病毒科 (Herpesviridae)", 
                family: "Herpesviridae", 
                color: "blue", 
                tags: { genome: "dsDNA (Linear)", envelope: "Enveloped", disease: "Latent Infections" }, 
                quickFacts: [
                    { label: "潛伏", val: "終身潛伏 (Latency)", src: "Lec" }, 
                    { label: "結構", val: "Tegument (被膜) proteins", src: "Txt" },
                    { label: "藥物", val: "<span class='exam-target'>Acyclovir</span> (需病毒 TK 酵素)", src: "Gb p.13" },
                    { label: "診斷", val: "Tzanck smear, 融合細胞", src: "Gb p.12" }
                ], 
                sections: [
                    { 
                        title: "總論：結構與亞科分類", 
                        content: `
                            <p><strong>結構特性：</strong>大型、有套膜、dsDNA。獨特結構為 <span class='exam-target'>Tegument (被膜)</span>，位於蛋白衣與套膜之間，含有病毒蛋白與酵素 (如 VP16, vhs)。<span class="bg-source-gb source-tag text-blue-800">[Gb] 1127 p.9</span></p>
                            <p><strong>共同特性：</strong>皆能建立<span class='exam-target'>潛伏感染 (Latency)</span>，並在免疫低下或壓力時復發 (Recurrence)。</p>
                            <table class="w-full text-sm border border-gray-200 mt-2">
                                <tr class="bg-gray-100"><th class="p-2">亞科 (Subfamily)</th><th class="p-2">成員</th><th class="p-2">潛伏位置 (Latency)</th><th class="p-2">特性</th></tr>
                                <tr><td><strong>Alpha</strong></td><td>HSV-1, HSV-2, VZV</td><td><span class='exam-target'>神經節 (Sensory Ganglia)</span></td><td>生長快、細胞溶解 (Cytolytic)</td></tr>
                                <tr><td><strong>Beta</strong></td><td>CMV, HHV-6, HHV-7</td><td>分泌腺、腎、淋巴球</td><td>生長慢、<span class='exam-target'>細胞腫大 (Cytomegalic)</span></td></tr>
                                <tr><td><strong>Gamma</strong></td><td>EBV, HHV-8</td><td><span class='exam-target'>淋巴組織 (B cells)</span></td><td>淋巴增生 (Lymphoproliferative)</td></tr>
                            </table>
                        ` 
                    },
                    { 
                        title: "Alpha: HSV-1 & HSV-2 (單純皰疹)", 
                        content: `
                            <ul>
                                <li><strong>傳播與區分：</strong>
                                    <ul class="list-[circle] pl-4 text-gray-500 text-xs mt-1">
                                        <li>HSV-1：唾液傳播。"Above the waist" (口唇皰疹, Gingivostomatitis)。潛伏於 <span class='exam-target'>三叉神經節 (Trigeminal ganglia)</span>。</li>
                                        <li>HSV-2：性行為傳播。"Below the waist" (生殖器皰疹)。潛伏於 <span class='exam-target'>薦神經節 (Sacral ganglia)</span>。<span class="bg-source-lec source-tag text-pink-800">[Lec]</span></li>
                                    </ul>
                                </li>
                                <li><strong>關鍵疾病：</strong>
                                    <br>1. <strong>皰疹性腦炎 (Herpes Encephalitis)：</strong>HSV-1 引起。破壞 <span class='exam-target'>顳葉 (Temporal lobe)</span>。高致死率。
                                    <br>2. <strong>皰疹性指頭炎 (Herpetic whitlow)：</strong>手指感染，常見於牙醫或護理人員。<span class="bg-source-gb source-tag text-blue-800">[Gb] p.16</span>
                                    <br>3. <strong>角膜炎 (Keratoconjunctivitis)：</strong>導致失明常見原因。
                                </li>
                                <li><strong>診斷：</strong>
                                    <br>Tzanck smear (刮取水泡基部)：可見 <span class='exam-target'>Multinucleated giant cells (多核巨細胞)</span> 與 <span class='exam-target'>Cowdry type A</span> 核內包涵體。<span class="bg-source-txt source-tag text-green-800">[Txt]</span>
                                </li>
                                <li><strong>治療：</strong><span class='exam-target'>Acyclovir</span>。需經由病毒的 <span class='exam-target'>Thymidine kinase (TK)</span> 磷酸化才能活化，因此只殺被感染細胞 (Selective toxicity)。</li>
                            </ul>
                        ` 
                    },
                    { 
                        title: "Alpha: VZV (水痘-帶狀皰疹)", 
                        content: `
                            <ul>
                                <li><strong>水痘 (Chickenpox / Varicella)：</strong>
                                    <br>原發感染。飛沫傳染 (極強)。
                                    <br>皮疹特徵：<span class='exam-target'>Asynchronous (不同時期病灶同時存在)</span>，涵蓋斑疹、丘疹、水泡、結痂。形容為 <span class='exam-target'>"Dewdrop on a rose petal" (玫瑰花瓣上的露珠)</span>。<span class="bg-source-txt source-tag text-green-800">[Txt]</span>
                                </li>
                                <li><strong>帶狀皰疹 (Shingles / Zoster)：</strong>
                                    <br>復發感染。潛伏於背根神經節 (Dorsal root ganglia)。
                                    <br>皮疹沿 <span class='exam-target'>皮節 (Dermatome)</span> 分布，單側，劇痛 (Postherpetic neuralgia)。
                                </li>
                                <li><strong>併發症：</strong><span class='exam-target'>Reye Syndrome (雷氏症候群)</span>：兒童感染 VZV 或 Influenza 時，若服用 <span class='exam-target'>Aspirin (Salicylates)</span>，會導致急性腦病變與肝臟脂肪變性。<span class="bg-source-gb source-tag text-blue-800">[Gb] p.21</span></li>
                            </ul>
                        ` 
                    },
                    { 
                        title: "Gamma: EBV (HHV-4)", 
                        content: `
                            <p><strong>目標細胞：</strong>經由 <span class='exam-target'>CD21 (CR2)</span> 受體感染 B 細胞。</p>
                            <ul>
                                <li><strong>傳染性單核球增多症 (Infectious Mononucleosis)：</strong>
                                    <br>俗稱 "Kissing disease" (唾液傳播)。
                                    <br>三合症：發燒、淋巴結腫大、咽喉炎。伴隨肝脾腫大 (Splenomegaly)。
                                    <br>血液抹片：可見 <span class='exam-target'>Downy cells</span> (Atypical lymphocytes，其實是活化的 <span class='exam-target'>Cytotoxic T cells</span> 正在攻擊被感染的 B cells)。<span class="bg-source-gb source-tag text-blue-800">[Gb] p.23</span>
                                </li>
                                <li><strong>診斷：</strong><span class='exam-target'>Heterophile antibody (+)</span> (異嗜性抗體/Monospot test)。(區分 CMV 的關鍵)。</li>
                                <li><strong>相關癌症：</strong>
                                    <br>1. <span class='exam-target'>Burkitt lymphoma</span>：非洲兒童，下顎腫瘤。與 c-myc translocation t(8;14) 有關。
                                    <br>2. <span class='exam-target'>Nasopharyngeal carcinoma (鼻咽癌)</span>：亞洲/中國南方常見。
                                    <br>3. Oral hairy leukoplakia (口腔髮狀白斑)：AIDS 患者常見。
                                </li>
                            </ul>
                        ` 
                    },
                    { 
                        title: "Beta: CMV (HHV-5) 與其他", 
                        content: `
                            <p><strong>Cytomegalovirus (CMV)：</strong></p>
                            <ul>
                                <li><strong>特性：</strong>感染單核球。生長緩慢。<span class='exam-target'>Heterophile antibody (-)</span>。</li>
                                <li><strong>先天性感染 (Congenital)：</strong>經胎盤傳染 (TORCH 之一)。症狀：<span class='exam-target'>Blueberry muffin rash (藍莓瑪芬疹)</span>、耳聾、腦室周圍鈣化。<span class="bg-source-lec source-tag text-pink-800">[Lec]</span></li>
                                <li><strong>免疫低下 (AIDS/移植)：</strong>造成間質性肺炎、視網膜炎 (Retinitis, 披薩狀眼底)、結腸炎。</li>
                                <li><strong>診斷：</strong><span class='exam-target'>Owl's eye inclusion</span> (貓頭鷹眼核內包涵體)。<span class="bg-source-gb source-tag text-blue-800">[Gb] p.28</span></li>
                            </ul>
                            <p><strong>HHV-6 & HHV-7：</strong>引起 <span class='exam-target'>Roseola infantum (嬰兒玫瑰疹/Exanthem subitum)</span>。特徵：高燒 3-5 天，退燒後出現紅疹 (先燒後疹)。</p>
                            <p><strong>HHV-8：</strong>引起 <span class='exam-target'>Kaposi's sarcoma (卡波西氏肉瘤)</span>，AIDS 定義疾病，血管內皮腫瘤。</p>
                        ` 
                    },
                    { 
                        title: "Zoonosis: Herpes B Virus", 
                        content: `
                            <ul>
                                <li><strong>宿主：</strong>亞洲獼猴 (Macaque)。</li>
                                <li><strong>人類感染：</strong>被猴子咬傷或抓傷。</li>
                                <li><strong>後果：</strong>病毒沿神經上行，導致 <span class='exam-target'>致命性腦炎 (Fatal Encephalitis)</span>。未治療致死率 >70%。<span class="bg-source-gb source-tag text-blue-800">[Gb] p.29</span></li>
                            </ul>
                        ` 
                    }
                ] 
            },

            'dna_adeno': {
                category: 'DNA Viruses',
                title: "腺病毒 (Adenoviridae)",
                family: "Adenoviridae",
                color: "blue",
                tags: { genome: "dsDNA (Linear)", envelope: "Naked", disease: "咽喉結膜熱, 出血性膀胱炎" },
                quickFacts: [
                    { label: "結構", val: "Fiber (吸附), Penton (毒性)", src: "Lec" },
                    { label: "疫苗", val: "Type 4, 7 (僅軍人)", src: "Gb p.20" },
                    { label: "診斷", val: "嗜鹼性核內包涵體", src: "Gb p.20" },
                    { label: "傳播", val: "飛沫, 糞口, 接觸 (泳池)", src: "Txt" }
                ],
                sections: [
                    {
                        title: "結構與特性",
                        content: `
                            <p><strong>結構：</strong>無套膜，二十面體。最顯著特徵是頂點有 <span class='exam-target'>Fiber (纖維突起)</span>，負責吸附細胞表面的 CAR 受體，並具有血球凝集素 (Hemagglutinin) 功能。<span class="bg-source-gb source-tag text-blue-800">[Gb] 1119 p.17</span></p>
                            <p><strong>Penton base：</strong>五角形基座，具有細胞毒性 (Toxic to cells)。</p>
                        `
                    },
                    {
                        title: "重要臨床症候群",
                        content: `
                            <ul>
                                <li><strong>咽喉結膜熱 (Pharyngoconjunctival fever)：</strong>
                                    <br>由 <span class='exam-target'>Type 3, 7</span> 引起。特徵：發燒 + 咽喉炎 + 結膜炎 (紅眼)。
                                    <br>關鍵字：<strong>游泳池結膜炎 (Swimming pool conjunctivitis)</strong>，常因共用毛巾或水源汙染傳播。<span class="bg-source-lec source-tag text-pink-800">[Lec]</span>
                                </li>
                                <li><strong>急性呼吸道疾病 (ARD)：</strong>
                                    <br>由 <span class='exam-target'>Type 4, 7</span> 引起。常見於<strong>新兵訓練中心</strong> (擁擠壓力大)。
                                    <br>預防：美軍使用口服活毒疫苗 (Live oral vaccine)，針對 Type 4, 7。<span class="bg-source-gb source-tag text-blue-800">[Gb] p.20</span>
                                </li>
                                <li><strong>流行性角膜結膜炎 (Epidemic Keratoconjunctivitis)：</strong>
                                    <br>由 Type 8, 19, 37 引起。具高度傳染性，角膜受損可能影響視力。
                                </li>
                                <li><strong>出血性膀胱炎 (Hemorrhagic cystitis)：</strong>
                                    <br>由 <span class='exam-target'>Type 11, 21</span> 引起。常見於男童，出現血尿 (Hematuria)、頻尿。<span class="bg-source-gb source-tag text-blue-800">[Gb] p.20</span>
                                </li>
                                <li><strong>腸胃炎：</strong>Type 40, 41 (無法在一般細胞培養，需用快篩)。嬰幼兒腹瀉主要原因之一 (僅次於輪狀病毒)。</li>
                            </ul>
                        `
                    },
                    {
                        title: "診斷",
                        content: `
                            <p>細胞培養可見 <span class='exam-target'>Basophilic intranuclear inclusion bodies</span> (嗜鹼性核內包涵體)。<span class="bg-source-gb source-tag text-blue-800">[Gb] p.20</span></p>
                            <p>與 CM V (Owl's eye) 或 HSV (Cowdry type A) 的嗜酸性 (Acidophilic) 包涵體不同，需注意區分。</p>
                        `
                    }
                ]
            },
            'dna_pox': {
                category: 'DNA Viruses',
                title: "痘病毒科 (Poxviridae) [Updated]",
                family: "Poxviridae",
                color: "blue",
                tags: { genome: "dsDNA (Linear)", envelope: "Complex", disease: "Smallpox, Molluscum" },
                quickFacts: [
                    { label: "複製", val: "<span class='exam-target'>細胞質</span> (唯一DNA病毒)", src: "Gb p.24" },
                    { label: "形狀", val: "Brick-shaped (磚塊狀)", src: "Txt" },
                    { label: "包涵體", val: "Guarnieri bodies (B型)", src: "Lec" },
                    { label: "天花", val: "Eradicated (1980)", src: "Gb" }
                ],
                sections: [
                    {
                        title: "結構與獨特複製機制",
                        content: `
                            <p><strong>最大最複雜：</strong>外型呈磚塊狀 (Brick-shaped) 或卵圓形。構造包含核心、側體 (Lateral bodies) 與雙層膜。<span class="bg-source-gb source-tag text-blue-800">[Gb] 1203 p.23</span></p>
                            <p><strong>複製場所：</strong>它是<strong>唯一在 <span class='exam-target'>細胞質 (Cytoplasm)</span> 複製</strong>的 DNA 病毒。</p>
                            <ul>
                                <li>原因：病毒本身攜帶所有複製所需的酵素，包括 <span class='exam-target'>DNA-dependent RNA polymerase</span>，不依賴宿主細胞核的酵素。<span class="bg-source-lec source-tag text-pink-800">[Lec]</span></li>
                                <li>包涵體：在細胞質內形成嗜酸性包涵體，稱為 <span class='exam-target'>Guarnieri bodies</span>。</li>
                            </ul>
                        `
                    },
                    {
                        title: "重要疾病",
                        content: `
                            <ul>
                                <li><strong>天花 (Smallpox / Variola)：</strong>
                                    <br>已於 1980 年由 WHO 宣布根除。
                                    <br>成功根除原因：只有人類宿主 (No animal reservoir)、只有一種血清型 (Stable)、疫苗有效、感染後症狀明顯 (無無症狀帶原)。
                                    <br>皮疹特徵：<strong>Synchronous</strong> (同一部位的皮疹處於同一發展階段)，與水痘 (Asynchronous) 不同。<span class="bg-source-txt source-tag text-green-800">[Txt]</span>
                                </li>
                                <li><strong>傳染性軟疣 (Molluscum contagiosum)：</strong>
                                    <br>傳播：接觸傳染 (角力選手、性接觸、共用毛巾)。
                                    <br>病灶：<span class='exam-target'>Umbilicated papules (中央有臍狀凹陷的丘疹)</span>，擠壓可見白色乳酪狀物質 (Molluscum bodies)。無痛。<span class="bg-source-gb source-tag text-blue-800">[Gb] p.25</span>
                                </li>
                                <li><strong>羊痘 (Orf)：</strong>人畜共通 (Zoonosis)。接觸羊隻口鼻結痂傷口感染。<span class="bg-source-gb source-tag text-blue-800">[Gb] p.26</span></li>
                                <li><strong>猴痘 (Mpox)：</strong>人畜共通 (嚙齒類、靈長類)。淋巴結腫大 (Lymphadenopathy) 為其與天花區別之特徵。</li>
                            </ul>
                        `
                    }
                ]
            },
            'rna_retro': {
                category: 'RNA Viruses',
                title: "反轉錄病毒 (Retroviridae)",
                family: "Retroviridae",
                color: "red",
                tags: { genome: "+ssRNA (Diploid)", envelope: "Enveloped", disease: "AIDS, Leukemia" },
                quickFacts: [
                    { label: "基因體", val: "Diploid (雙套)", src: "Gb p.4" },
                    { label: "酵素", val: "RT, Integrase, Protease", src: "Lec" },
                    { label: "受體", val: "CD4 + CCR5/CXCR4", src: "Gb p.6" },
                    { label: "AIDS", val: "CD4 < 200", src: "Gb p.14" }
                ],
                sections: [
                    {
                        title: "病毒結構與基因",
                        content: `
                            <p><strong>基因體：</strong>具套膜，含有<strong>兩條相同</strong>的 +ssRNA (<span class='exam-target'>Diploid / 雙套</span>)。<span class="bg-source-gb source-tag text-blue-800">[Gb] 1203 p.4</span></p>
                            <p><strong>關鍵基因 (Gag-Pol-Env)：</strong></p>
                            <ul>
                                <li><strong>Gag：</strong>編碼核心蛋白 (p24 capsid, p17 matrix)。<strong>p24</strong> 抗原常用於早期診斷。</li>
                                <li><strong>Pol：</strong>編碼酵素。
                                    <ul class="list-[circle] pl-4 text-xs text-gray-500">
                                        <li><span class='exam-target'>Reverse Transcriptase (RT)</span>：RNA -> DNA。易突變 (無校對功能)。</li>
                                        <li><span class='exam-target'>Integrase</span>：將病毒 DNA 插入宿主染色體 (Provirus)。</li>
                                        <li>Protease：切割蛋白前驅物，藥物標靶。</li>
                                    </ul>
                                </li>
                                <li><strong>Env：</strong>編碼套膜醣蛋白 (gp160 -> gp120 + gp41)。
                                    <ul class="list-[circle] pl-4 text-xs text-gray-500">
                                        <li><span class='exam-target'>gp120</span> (Surface)：負責<strong>吸附</strong> (Attachment)，結合 CD4 與 Co-receptor。</li>
                                        <li><span class='exam-target'>gp41</span> (Transmembrane)：負責<strong>融合</strong> (Fusion) 與穿透。</li>
                                    </ul>
                                </li>
                            </ul>
                        `
                    },
                    {
                        title: "HIV 致病機轉與 AIDS",
                        content: `
                            <p><strong>細胞受體：</strong></p>
                            <ul>
                                <li>主受體：<span class='exam-target'>CD4</span> (T cells, Macrophages, Dendritic cells)。</li>
                                <li>共同受體 (Co-receptors)：
                                    <br>1. <strong>CCR5</strong> (R5 tropic)：初期感染為主 (Macrophage-tropic)。
                                    <br>2. <strong>CXCR4</strong> (X4 tropic)：晚期感染為主 (T cell-tropic)，導致 T 細胞快速崩解。<span class="bg-source-gb source-tag text-blue-800">[Gb] p.6</span>
                                </li>
                            </ul>
                            <p><strong>AIDS 定義：</strong>HIV 抗體陽性 且 CD4 T cell < <span class='exam-target'>200/μl</span> (正常 800-1200) 或出現伺機性感染 (如 PCP 肺炎, Kaposi sarcoma, 念珠菌)。<span class="bg-source-gb source-tag text-blue-800">[Gb] p.14</span></p>
                        `
                    },
                    {
                        title: "HTLV-1 (人類 T 細胞白血病病毒)",
                        content: `
                            <p><strong>疾病：</strong></p>
                            <ul>
                                <li><strong>ATLL (成人 T 細胞白血病)：</strong>潛伏期長 (20-30年)。
                                    <br>特徵：血液抹片可見 <span class='exam-target'>Flower cells</span> (花狀核 T 細胞)。伴隨高血鈣 (Hypercalcemia)。<span class="bg-source-lec source-tag text-pink-800">[Lec]</span>
                                </li>
                                <li><strong>HAM/TSP (熱帶痙攣性下身輕癱)：</strong>神經去髓鞘疾病，導致下肢無力。</li>
                            </ul>
                            <p><strong>傳染：</strong>母乳、性行為、血液。</p>
                        `
                    }
                ]
            },

            'rna_rhabdo': { 
                category: 'RNA Viruses', 
                title: "桿狀病毒科 (Rhabdoviridae)", 
                family: "Rhabdoviridae", 
                color: "red", 
                tags: { genome: "-ssRNA (Non-segmented)", envelope: "Enveloped", disease: "Rabies (狂犬病)" }, 
                quickFacts: [
                    { label: "形狀", val: "<span class='exam-target'>Bullet-shaped (子彈型)</span>", src: "Lec" }, 
                    { label: "包涵體", val: "<span class='exam-target'>Negri bodies (內基小體)</span>", src: "Gb p.30" }, 
                    { label: "傳播", val: "Zoonosis (Bite, Saliva)", src: "Txt" },
                    { label: "致死率", val: "發病後近乎 100%", src: "Clin" }
                ], 
                sections: [
                    { 
                        title: "結構與特性", 
                        content: `
                            <p><strong>結構：</strong>含有套膜，形狀如<span class='exam-target'>子彈 (Bullet-shaped)</span>，大小約 75x180 nm。<span class="bg-source-lec source-tag text-pink-800">[Lec] 1127</span></p>
                            <p><strong>基因體：</strong>單股負鏈 RNA (-ssRNA)，編碼 5 種蛋白：</p>
                            <ul>
                                <li><strong>G (Glycoprotein)：</strong>表面棘蛋白，負責吸附受體 <span class='exam-target'>AchR (Acetylcholine Receptor)</span> 或 NCAM。誘發中和抗體。</li>
                                <li><strong>N (Nucleoprotein)：</strong>保護 RNA，形成核蛋白衣。是 <span class='exam-target'>Negri bodies</span> 的主要成分。</li>
                                <li><strong>L (Large protein)：</strong>RNA 聚合酶 (Polymerase)。</li>
                                <li><strong>M (Matrix) & P (Phosphoprotein)。</strong></li>
                            </ul>
                        ` 
                    },
                    { 
                        title: "致病機轉 (Pathogenesis)", 
                        content: `
                            <p>病毒具有<strong>嗜神經性 (Neurotropism)</strong>，不會造成細胞溶解 (Non-cytolytic)，隱藏於神經系統中逃避免疫。</p>
                            <ol class="list-decimal pl-4 space-y-1">
                                <li><strong>Inoculation：</strong>被帶原動物 (瘋狗、蝙蝠、浣熊) 咬傷，病毒隨唾液進入傷口。</li>
                                <li><strong>Incubation：</strong>在局部肌肉細胞 (Muscle) 緩慢複製。潛伏期長短取決於<span class='exam-target'>傷口與腦部的距離</span> (距離越近、病毒量越多，潛伏期越短)。<span class="bg-source-gb source-tag text-blue-800">[Gb] 1127 p.6</span></li>
                                <li><strong>Transport：</strong>結合神經肌肉接合處 (NMJ) 的 <span class='exam-target'>Ach 受體</span>，進入周邊神經。</li>
                                <li><strong>Replication：</strong>經由<span class='exam-target'>逆行性軸突運輸 (Retrograde Axonal Transport)</span> 快速抵達背根神經節 (DRG) 與脊髓，最後進入大腦。</li>
                                <li><strong>Dissemination：</strong>在中樞神經大量複製後，沿著傳出神經 (Efferent nerves) 擴散至全身，特別是<span class='exam-target'>唾液腺 (Salivary glands)</span> (以利傳播)。</li>
                            </ol>
                        ` 
                    },
                    { 
                        title: "臨床分期 (Clinical Phases)", 
                        content: `
                            <ul>
                                <li><strong>前驅期 (Prodromal)：</strong>發燒、頭痛、倦怠。特徵症狀：<span class='exam-target'>傷口周圍感覺異常 (Paresthesia/Tingling)</span>，如蟲爬感。</li>
                                <li><strong>神經症狀期 (Neurologic)：</strong>
                                    <ul class="list-[circle] pl-4 text-gray-500 text-xs mt-1">
                                        <li><strong>狂躁型 (Furious)：</strong>典型症狀。焦躁、幻覺、<span class='exam-target'>恐水症 (Hydrophobia)</span> (喝水引起咽喉痙攣)、恐風症 (Aerophobia)。</li>
                                        <li><strong>麻痺型 (Paralytic)：</strong>較少見，上行性麻痺 (類似 GBS)。</li>
                                    </ul>
                                </li>
                                <li><strong>昏迷與死亡：</strong>一旦出現神經症狀，幾乎 100% 死亡 (呼吸衰竭)。</li>
                            </ul>
                        ` 
                    },
                    { 
                        title: "診斷與治療 (Dx & Rx)", 
                        content: `
                            <p><strong>診斷：</strong></p>
                            <ul>
                                <li><strong>Negri bodies (內基小體)：</strong>海馬迴 (Hippocampus) 或小腦 Purkinje cells 內的<span class='exam-target'>細胞質嗜酸性包涵體 (Cytoplasmic acidophilic inclusion)</span>。</li>
                                <li><strong>RT-PCR / IF：</strong>檢測唾液或<span class='exam-target'>後頸部皮膚切片 (Nape skin biopsy)</span> (檢測毛囊周圍神經)。</li>
                            </ul>
                            <p><strong>暴露後預防 (Post-Exposure Prophylaxis, PEP)：</strong>被咬後必須立即執行！<span class="bg-source-txt source-tag text-green-800">[Txt]</span></p>
                            <ol class="list-decimal pl-4 space-y-1">
                                <li><strong>傷口處理：</strong>立即用肥皂水大量沖洗 15 分鐘。</li>
                                <li><strong>被動免疫：</strong><span class='exam-target'>HRIG (人類狂犬病免疫球蛋白)</span>。浸潤注射於傷口周圍，中和病毒。</li>
                                <li><strong>主動免疫：</strong><span class='exam-target'>HDCV (死毒疫苗)</span>。施打 4-5 劑 (Day 0, 3, 7, 14)。</li>
                            </ol>
                        ` 
                    }
                ] 
            },
            
            'rna_picorna': {
                category: 'RNA Viruses',
                title: "微小 RNA 病毒科 (Picornaviridae",
                family: "Picornaviridae",
                color: "red",
                tags: { genome: "+ssRNA (Infectious)", envelope: "Naked", disease: "Polio, HFMD, Cold" },
                quickFacts: [
                    { label: "基因體", val: "+ssRNA (可直接轉譯)", src: "Gb p.8" },
                    { label: "耐酸性", val: "Entero (O), Rhino (X)", src: "Lec" },
                    { label: "Polio疫苗", val: "Salk (死/IgG), Sabin (活/IgA)", src: "Gb p.14" },
                    { label: "重症", val: "EV71 (腦幹腦炎)", src: "Gb p.17" }
                ],
                sections: [
                    {
                        title: "總論與結構 (Structure & Properties)",
                        content: `
                            <p><strong>結構：</strong>
                            <br>極小 (Pico-RNA)，無套膜 (Naked)，二十面體。基因體為單股正鏈 RNA (+ssRNA)，末端有 <strong>VPg</strong> 蛋白 (取代 Cap) 與 Poly-A tail。<span class="bg-source-gb source-tag text-blue-800">[Gb] 1210 p.8</span></p>
                            <ul>
                                <li><strong>裸露基因感染力：</strong>純化的 +ssRNA 具有感染力 (Infectious)，注入細胞即可轉譯出病毒蛋白。</li>
                                <li><strong>多蛋白前驅物 (Polyprotein)：</strong>RNA 轉譯成一條巨大的 Polyprotein，再由病毒蛋白酶 (Protease 2A, 3C) 切割成功能性蛋白。</li>
                                <li><strong>分類與耐酸性：</strong>
                                    <table class="w-full text-sm border border-gray-200 mt-1">
                                        <tr class="bg-gray-100"><th>屬 (Genus)</th><th>代表病毒</th><th>耐酸性 (pH 3)</th><th>最佳生長溫度</th></tr>
                                        <tr><td><strong>Enterovirus</strong></td><td>Polio, Coxsackie, EV71</td><td><span class='exam-target'>Resistant (耐酸)</span></td><td>37°C (腸道)</td></tr>
                                        <tr><td><strong>Rhinovirus</strong></td><td>Common cold</td><td><span class='exam-target'>Labile (不耐酸)</span></td><td>33°C (鼻腔)</td></tr>
                                        <tr><td><strong>Hepatovirus</strong></td><td>Hepatitis A (HAV)</td><td>Resistant (耐酸)</td><td>37°C (肝臟)</td></tr>
                                    </table>
                                </li>
                            </ul>
                        `
                    },
                    {
                        title: "小兒麻痺病毒 (Poliovirus)",
                        content: `
                            <p><strong>致病機轉：</strong>糞口傳染。病毒在口咽與腸道淋巴組織 (Peyer's patch) 複製 -> 病毒血症 -> 侵犯中樞神經。
                            <br>目標：破壞脊髓前角運動神經元 (<span class='exam-target'>Anterior horn cells</span>) -> 導致<strong>弛緩性麻痺 (Flaccid paralysis)</strong>。<span class="bg-source-lec source-tag text-pink-800">[Lec]</span></p>
                            <p><strong>疫苗比較 (必考)：</strong><span class="bg-source-gb source-tag text-blue-800">[Gb] p.14</span></p>
                            <table class="w-full text-sm border border-gray-200 mt-1">
                                <tr class="bg-gray-100"><th>特性</th><th>Salk (IPV)</th><th>Sabin (OPV)</th></tr>
                                <tr><td><strong>類型</strong></td><td>去活化死毒 (Killed)</td><td>活性減毒 (Live attenuated)</td></tr>
                                <tr><td><strong>給予方式</strong></td><td>注射 (Injection)</td><td>口服 (Oral)</td></tr>
                                <tr><td><strong>免疫反應</strong></td><td>血清 IgG (預防病毒血症)</td><td>血清 IgG + <span class='exam-target'>黏膜 IgA</span> (腸道免疫)</td></tr>
                                <tr><td><strong>群體免疫</strong></td><td>無 (仍可排出病毒)</td><td>有 (病毒會隨糞便排出傳給他人)</td></tr>
                                <tr><td><strong>風險</strong></td><td>安全</td><td>極低機率回復毒性 (VAPP)</td></tr>
                            </table>
                        `
                    },
                    {
                        title: "克沙奇與腸病毒 (Coxsackie & Enterovirus)",
                        content: `
                            <p><strong>Coxsackievirus (克沙奇病毒)：</strong></p>
                            <ul>
                                <li><strong>Group A (皮膚黏膜)：</strong>
                                    <ul class="list-[circle] pl-4 text-xs text-gray-500">
                                        <li><strong>皰疹性咽峽炎 (Herpangina)：</strong>發燒、喉嚨痛。<span class='exam-target'>軟顎 (Soft palate)</span> 與懸雍垂出現水泡潰瘍。</li>
                                        <li><strong>手足口病 (Hand-Foot-Mouth Disease)：</strong>口腔、手掌、腳底出現水泡疹。</li>
                                    </ul>
                                </li>
                                <li><strong>Group B (心臟肌肉)：</strong>
                                    <ul class="list-[circle] pl-4 text-xs text-gray-500">
                                        <li><strong>流行性胸痛 (Pleurodynia)：</strong>又稱 Bornholm disease (Devil's grip)，肋間肌劇痛。</li>
                                        <li><strong>心肌炎 (Myocarditis)：</strong>新生兒或成人致死性心衰竭。<span class="bg-source-gb source-tag text-blue-800">[Gb] p.16</span></li>
                                    </ul>
                                </li>
                            </ul>
                            <hr class="my-2 border-gray-200">
                            <p><strong>Enterovirus 71 (腸病毒 71 型)：</strong></p>
                            <ul>
                                <li>除引起手足口病外，易併發重症：<span class='exam-target'>腦幹腦炎 (Brainstem encephalitis)</span> 與神經性肺水腫 (Neurogenic pulmonary edema)，致死率高。<span class="bg-source-lec source-tag text-pink-800">[Lec]</span></li>
                            </ul>
                            <p><strong>Enterovirus D68：</strong>引起嚴重呼吸道疾病與急性無力脊髓炎 (AFM，類似 Polio)。</p>
                        `
                    },
                    {
                        title: "鼻病毒 (Rhinovirus)",
                        content: `
                            <ul>
                                <li><strong>疾病：</strong>普通感冒 (Common cold) 最常見病原 (佔50%)。</li>
                                <li><strong>特性：</strong>
                                    <br>1. <span class='exam-target'>Acid labile (不耐酸)</span>：無法通過胃酸，故不感染腸道。
                                    <br>2. 嗜冷性：最佳生長溫度 <span class='exam-target'>33°C</span> (鼻腔溫度)。
                                </li>
                                <li><strong>受體：</strong>90% 血清型結合 <span class='exam-target'>ICAM-1</span> 分子。<span class="bg-source-gb source-tag text-blue-800">[Gb] p.19</span></li>
                                <li><strong>免疫：</strong>血清型超過 100 種，感染後免疫力短暫，故會反覆感冒。</li>
                            </ul>
                        `
                    }
                ]
            },
            'rna_ortho': {
                category: 'RNA Viruses',
                title: "正黏液病毒科 (Orthomyxoviridae)",
                family: "Orthomyxoviridae",
                color: "red",
                tags: { genome: "-ssRNA (8 Segments)", envelope: "Enveloped", disease: "Influenza (流感)" },
                quickFacts: [
                    { label: "基因體", val: "<span class='exam-target'>8 Segments</span> (分節)", src: "Gb p.3" },
                    { label: "複製", val: "細胞核 (RNA病毒例外)", src: "Lec" },
                    { label: "變異", val: "Shift (大/A型), Drift (小)", src: "Gb p.10" },
                    { label: "藥物", val: "Oseltamivir (抑制NA)", src: "Txt" }
                ],
                sections: [
                    {
                        title: "病毒結構與表面蛋白",
                        content: `
                            <p><strong>基因體：</strong>具有套膜。基因體為<strong>分節 (Segmented)</strong> 的負股 RNA (-ssRNA)。



[Image of Influenza virus structure]


                            <br>Influenza A & B 具有 <span class='exam-target'>8 個片段</span> (C 型為 7 個)。這種分節特性是發生<strong>基因重組 (Reassortment)</strong> 的基礎。<span class="bg-source-gb source-tag text-blue-800">[Gb] 1217 p.3</span></p>
                            <p><strong>關鍵表面醣蛋白 (Spikes)：</strong></p>
                            <ul>
                                <li><strong>HA (Hemagglutinin, 血球凝集素)：</strong>
                                    <br>功能：1. <strong>吸附</strong>：結合細胞表面的 <span class='exam-target'>Sialic acid (唾液酸)</span> 受體。 2. <strong>融合</strong>：在酸性核內體中促進膜融合。 3. 凝集紅血球。
                                    <br>重點：是中和抗體 (Neutralizing Ab) 的主要標的。<span class="bg-source-lec source-tag text-pink-800">[Lec]</span>
                                </li>
                                <li><strong>NA (Neuraminidase, 神經胺酸酶)：</strong>
                                    <br>功能：<strong>切割</strong> Sialic acid，幫助新病毒從細胞<strong>釋出 (Release)</strong>，並液化黏液防止病毒被困住。
                                    <br>重點：抗病毒藥物 (Tamiflu) 的作用標靶。
                                </li>
                                <li><strong>M2 Protein (Ion channel)：</strong>
                                    <br>功能：形成離子通道，將質子 ($H^+$) 打入病毒內部，酸化導致<strong>脫殼 (Uncoating)</strong>。
                                    <br>重點：僅 A 型流感有 (B 型無)。藥物 Amantadine 的標靶。
                                </li>
                            </ul>
                        `
                    },
                    {
                        title: "獨特複製機制與抗原變異",
                        content: `
                            <p><strong>複製場所：</strong>



[Image of Influenza replication cycle]


                            <br>它是少數在<strong><span class='exam-target'>細胞核 (Nucleus)</span></strong> 內進行複製的 RNA 病毒 (另一個是 Retrovirus)。
                            <br>原因：病毒 RNA 聚合酶需要搶奪宿主 mRNA 的 5' Cap 作為引子 (Cap snatching)。<span class="bg-source-gb source-tag text-blue-800">[Gb] p.6</span></p>
                            <hr class="my-2 border-gray-200">
                            <p><strong>抗原變異 (Antigenic Variation) - 必考比較：</strong></p>
                            <table class="w-full text-sm border border-gray-200 mt-1">
                                <tr class="bg-gray-100"><th>特性</th><th>Antigenic Drift (抗原移位)</th><th>Antigenic Shift (抗原轉移)</th></tr>
                                <tr><td><strong>機制</strong></td><td>點突變 (Point mutation)</td><td><span class='exam-target'>基因重組 (Reassortment)</span></td></tr>
                                <tr><td><strong>幅度</strong></td><td>小變異 (Minor change)</td><td>大變異 (Major change)</td></tr>
                                <tr><td><strong>發生頻率</strong></td><td>每年發生</td><td>偶爾發生 (10-20年)</td></tr>
                                <tr><td><strong>流行規模</strong></td><td><strong>Epidemic (局部流行)</strong></td><td><strong>Pandemic (世界大流行)</strong></td></tr>
                                <tr><td><strong>病毒型別</strong></td><td>A 型 & B 型</td><td><span class='exam-target'>僅 A 型</span> (因有動物宿主)</td></tr>
                            </table>
                            <p><strong>命名規則：</strong>型別/宿主/分離地點/編號/年份 (HN亞型)。例如：A/Duck/Alberta/35/76 (H1N1)。</p>
                        `
                    },
                    {
                        title: "臨床併發症與雷氏症候群",
                        content: `
                            <ul>
                                <li><strong>流感症狀：</strong>突發高燒、嚴重肌肉痠痛 (Myalgia)、乾咳。與一般感冒 (Rhinovirus) 的漸進式症狀不同。</li>
                                <li><strong>肺炎 (Pneumonia)：</strong>主要死因。
                                    <br>1. 原發性病毒肺炎。
                                    <br>2. <strong>繼發性細菌肺炎 (Secondary bacterial pneumonia)</strong>：病毒破壞纖毛上皮後，細菌趁虛而入。常見菌種：<span class='exam-target'>S. pneumoniae, S. aureus, H. influenzae</span>。<span class="bg-source-gb source-tag text-blue-800">[Gb] p.13</span>
                                </li>
                                <li><strong>Reye Syndrome (雷氏症候群)：</strong>
                                    <br>兒童感染流感 (或水痘) 時，若服用 <span class='exam-target'>Aspirin (水楊酸類)</span> 退燒，可能引發急性腦病變 (Encephalopathy) 與<strong>肝臟脂肪變性 (Fatty liver degeneration)</strong>。致死率高。<span class="bg-source-lec source-tag text-pink-800">[Lec]</span>
                                </li>
                            </ul>
                        `
                    },
                    {
                        title: "治療與預防",
                        content: `
                            <ul>
                                <li><strong>藥物：</strong>
                                    <br>1. <strong>M2 抑制劑 (Amantadine, Rimantadine)：</strong>抑制脫殼。僅對 <span class='exam-target'>A 型</span> 有效 (但抗藥性高，少用)。
                                    <br>2. <strong>NA 抑制劑 (Oseltamivir/Tamiflu, Zanamivir)：</strong>抑制病毒釋出。對 <span class='exam-target'>A、B 型</span> 皆有效。需在發病 48 小時內服用。<span class="bg-source-gb source-tag text-blue-800">[Gb] p.17</span>
                                    <br>3. <strong>Baloxavir (Xofluza)：</strong>抑制 Cap-dependent endonuclease (抑制複製)。
                                </li>
                                <li><strong>疫苗：</strong>
                                    <br>1. <strong>Inactivated (死毒)：</strong>注射。含預測的 H1N1, H3N2 及 B 型株 (Trivalent/Quadrivalent)。
                                    <br>2. <strong>Live attenuated (減毒)：</strong>鼻噴劑 (Nasal spray)。對溫度敏感 (Cold-adapted)，僅在鼻咽複製。
                                </li>
                            </ul>
                        `
                    }
                ]
            },
            'rna_paramyxo': {
                category: 'RNA Viruses',
                title: "副黏液病毒科 (Paramyxoviridae)",
                family: "Paramyxoviridae",
                color: "red",
                tags: { genome: "-ssRNA (Non-segmented)", envelope: "Enveloped", disease: "Measles, Mumps, Croup" },
                quickFacts: [
                    { label: "病理特徵", val: "<span class='exam-target'>Syncytia (細胞融合)</span>", src: "Lec" },
                    { label: "麻疹診斷", val: "Koplik spots, 3C", src: "Gb p.20" },
                    { label: "RSV", val: "嬰兒細支氣管炎首兇", src: "Gb p.25" },
                    { label: "Croup", val: "Parainfluenza (哮吼)", src: "Txt" }
                ],
                sections: [
                    {
                        title: "結構與分類 (Structure & Classification)",
                        content: `
                            <p><strong>結構：</strong>具有套膜。基因體為<strong>不分節 (Non-segmented)</strong> 的負股 RNA。與流感病毒不同，它在<strong>細胞質</strong>複製，且不會發生基因重組 (No reassortment)。<span class="bg-source-gb source-tag text-blue-800">[Gb] 1217 p.18</span></p>
                            <p><strong>重要蛋白：</strong></p>
                            <ul>
                                <li><strong>F (Fusion) protein：</strong>所有副黏液病毒皆有。
                                    <br>功能：促進病毒套膜與細胞膜融合，並導致感染細胞互相融合形成 <span class='exam-target'>Syncytia (多核巨細胞)</span>。這是此科病毒的標誌性病理特徵。
                                </li>
                                <li><strong>H / HN / G protein：</strong>負責吸附 (Attachment)。不同屬有不同組合 (考點！)：
                                    <table class="w-full text-sm border border-gray-200 mt-1">
                                        <tr class="bg-gray-100"><th>病毒屬</th><th>代表病毒</th><th>吸附蛋白</th><th>特性</th></tr>
                                        <tr><td>Morbillivirus</td><td>Measles (麻疹)</td><td><strong>H</strong> (Hemagglutinin)</td><td>有 HA，<span class='exam-target'>無 NA</span></td></tr>
                                        <tr><td>Paramyxovirus</td><td>Mumps, Parainfluenza</td><td><strong>HN</strong></td><td>有 HA 也有 NA</td></tr>
                                        <tr><td>Pneumovirus</td><td>RSV (呼吸道融合)</td><td><strong>G</strong> (Glycoprotein)</td><td><span class='exam-target'>無 HA 也無 NA</span></td></tr>
                                    </table>
                                </li>
                            </ul>
                        `
                    },
                    {
                        title: "麻疹病毒 (Measles Virus)",
                        content: `
                            <ul>
                                <li><strong>傳染力：</strong>極強 (R0=12-18)，飛沫傳染。只有人類宿主。</li>
                                <li><strong>臨床病程 (CCC + P)：</strong>
                                    <br>1. 前驅期：高燒 + <span class='exam-target'>3C (Cough, Coryza, Conjunctivitis)</span>。
                                    <br>2. <span class='exam-target'>Koplik spots</span>：口腔頰黏膜出現中心灰白的紅斑 (如撒鹽粒)。具診斷價值 (Pathognomonic)，出疹前 1-2 天出現。<span class="bg-source-gb source-tag text-blue-800">[Gb] p.21</span>
                                    <br>3. 皮疹 (Rash)：由耳後開始，向下擴散至軀幹四肢 (Maculopapular)。此時 T 細胞正在攻擊病毒 (免疫致病)。
                                </li>
                                <li><strong>併發症：</strong>
                                    <br>1. 肺炎 (Pneumonia)：巨細胞肺炎 (Giant cell pneumonia)。
                                    <br>2. <span class='exam-target'>SSPE (亞急性硬化性全腦炎)</span>：極罕見遲發性併發症 (感染後 7-10 年)。病毒變異持續潛伏於腦部，導致退化死亡。
                                </li>
                                <li><strong>預防：</strong>MMR 疫苗 (活性減毒)，1 歲時施打。</li>
                            </ul>
                        `
                    },
                    {
                        title: "腮腺炎與副流感 (Mumps & Parainfluenza)",
                        content: `
                            <p><strong>Mumps Virus (腮腺炎病毒)：</strong></p>
                            <ul>
                                <li>只有一種血清型。飛沫傳染。</li>
                                <li>症狀：雙側 <span class='exam-target'>Parotitis (腮腺腫大)</span>。</li>
                                <li>併發症：<span class='exam-target'>Orchitis (睪丸炎)</span> (青春期後男性，可能導致不孕)、腦膜炎、胰臟炎。<span class="bg-source-lec source-tag text-pink-800">[Lec]</span></li>
                            </ul>
                            <hr class="my-2 border-gray-200">
                            <p><strong>Parainfluenza Virus (副流感病毒)：</strong></p>
                            <ul>
                                <li>主要感染兒童。</li>
                                <li>關鍵疾病：<span class='exam-target'>Croup (哮吼 / Laryngotracheobronchitis)</span>。
                                    <br>特徵：聲帶水腫導致 <span class='exam-target'>Barking cough (狗吠式咳嗽)</span>，X光可見 <span class='exam-target'>Steeple sign (尖塔徵象)</span>。<span class="bg-source-gb source-tag text-blue-800">[Gb] p.29</span>
                                </li>
                            </ul>
                        `
                    },
                    {
                        title: "呼吸道融合病毒 (RSV)",
                        content: `
                            <ul>
                                <li><strong>重要性：</strong><span class='exam-target'>1 歲以下嬰兒</span>嚴重下呼吸道感染 (細支氣管炎/肺炎) 的首要病原。<span class="bg-source-gb source-tag text-blue-800">[Gb] p.25</span></li>
                                <li><strong>特性：</strong>不具 HA 與 NA。主要靠 F protein 造成細胞融合 (Syncytia)。</li>
                                <li><strong>治療與預防：</strong>
                                    <br>治療：Ribavirin (吸入式，僅用於重症)。
                                    <br>預防：<span class='exam-target'>Palivizumab</span> (單株抗體，對抗 F protein)，給予早產兒被動免疫。
                                </li>
                            </ul>
                        `
                    },
                    {
                        title: "人畜共通：Nipah & Hendra",
                        content: `
                            <p>新興傳染病 (Emerging diseases)，致死率高。</p>
                            <ul>
                                <li><strong>Hendra virus：</strong>宿主為果蝠 (Fruit bat)。經由馬傳給人。</li>
                                <li><strong>Nipah virus (立百病毒)：</strong>宿主為果蝠。經由<span class='exam-target'>豬</span>作為增幅宿主 (Amplifying host) 傳給人。引起嚴重腦炎。<span class="bg-source-lec source-tag text-pink-800">[Lec]</span></li>
                            </ul>
                        `
                    }
                ]
            },
            'rna_arbo': {
                category: 'RNA Viruses',
                title: "蟲媒與出血熱病毒 (Arboviruses & Hemorrhagic Fevers)",
                family: "Flaviviridae / Togaviridae / Bunyavirales / Filoviridae",
                color: "red",
                tags: { genome: "RNA (Mixed)", envelope: "Enveloped", disease: "Encephalitis, Hemorrhagic Fever" },
                quickFacts: [
                    { label: "登革熱", val: "<span class='exam-target'>ADE (抗體依賴性增強)</span>", src: "Gb 1224 p.33" },
                    { label: "日本腦炎", val: "病媒:三斑家蚊, 增幅:豬", src: "Lec" },
                    { label: "茲卡病毒", val: "小頭症 (Microcephaly)", src: "Txt" },
                    { label: "漢他病毒", val: "嚙齒類傳播 (無病媒蚊)", src: "Gb 1231 p.11" },
                    { label: "伊波拉", val: "致死率 90%, 蝙蝠", src: "Gb 1231 p.16" }
                ],
                sections: [
                    {
                        title: "總論：蟲媒病毒 (Arboviruses)",
                        content: `
                            <p><strong>定義：</strong>需經由節肢動物 (Arthropod-borne) 叮咬傳播的病毒。</p>
                            <ul>
                                <li><strong>主要病媒 (Vectors)：</strong>
                                    <ul class="list-[circle] pl-4 text-gray-500 text-xs mt-1">
                                        <li><span class='exam-target'>Aedes (斑蚊)</span>：埃及斑蚊 (A. aegypti)、白線斑蚊 (A. albopictus)。傳播登革熱、茲卡、黃熱病、屈公病。白天吸血。</li>
                                        <li><span class='exam-target'>Culex (家蚊)</span>：三斑家蚊 (C. tritaeniorhynchus)。傳播日本腦炎。黃昏/晚上吸血。</li>
                                    </ul>
                                </li>
                                <li><strong>宿主概念：</strong>
                                    <ul class="list-[circle] pl-4 text-gray-500 text-xs mt-1">
                                        <li><strong>增幅宿主 (Amplifying host)：</strong>病毒在體內大量複製，蚊子吸血後可帶毒 (如：豬之於日本腦炎)。</li>
                                        <li><strong>終端宿主 (Dead-end host)：</strong>病毒量低，蚊子吸血後無法傳播 (如：人、馬之於日本腦炎)。</li>
                                    </ul>
                                </li>
                            </ul>
                        `
                    },
                    {
                        title: "黃病毒科 (Flaviviridae)",
                        content: `
                            <p><strong>特性：</strong>+ssRNA，有套膜。與 Togavirus 不同處在於其結構蛋白基因位於 5' 端 (Togavirus 在 3' 端)。<span class="bg-source-gb source-tag text-blue-800">[Gb] 1224 p.29</span></p>
                            <hr class="my-2 border-gray-200">
                            <p><strong>1. 登革熱 (Dengue Fever)：</strong></p>
                            <ul>
                                <li><strong>病徵：</strong>斷骨熱 (Breakbone fever)、後眼窩痛、皮疹。</li>
                                <li><strong>出血熱機制 (DHF/DSS)：</strong><span class='exam-target'>Antibody-Dependent Enhancement (ADE)</span>。
                                    <br>若感染過某一型 (共4型)，體內產生的抗體對其他型別<strong>不具中和力 (Non-neutralizing)</strong>，反而會促進病毒進入 <span class='exam-target'>Monocytes/Macrophages</span> (經由 Fc receptor)，導致病毒量暴增與細胞激素風暴 (Cytokine storm)。<span class="bg-source-lec source-tag text-pink-800">[Lec]</span>
                                </li>
                                <li><strong>診斷：</strong><span class='exam-target'>Tourniquet test (止血帶試驗)</span> 陽性 (出現出血點)。NS1 抗原快篩。</li>
                            </ul>
                            <p><strong>2. 日本腦炎 (Japanese Encephalitis, JE)：</strong></p>
                            <ul>
                                <li><strong>傳播：</strong><span class='exam-target'>三斑家蚊</span>。水田/豬舍為高風險區。</li>
                                <li><strong>宿主：</strong><span class='exam-target'>豬 (Pig)</span> 是最重要的增幅宿主。人類是終端宿主 (不會人傳人)。</li>
                                <li><strong>疫苗：</strong>活性減毒疫苗 (Live attenuated) 或不活化疫苗。幼兒常規施打。</li>
                            </ul>
                            <p><strong>3. 茲卡病毒 (Zika Virus)：</strong></p>
                            <ul>
                                <li><strong>併發症：</strong>孕婦感染導致胎兒 <span class='exam-target'>Microcephaly (小頭症)</span>。成人可能引發 GBS (格林-巴利症候群)。</li>
                                <li><strong>傳播：</strong>除蚊子外，亦可透過 <span class='exam-target'>性行為 (Sexual contact)</span> 與垂直感染傳播。</li>
                            </ul>
                            <p><strong>4. 黃熱病 (Yellow Fever)：</strong></p>
                            <ul>
                                <li><strong>症狀：</strong>肝臟受損導致 <span class='exam-target'>Jaundice (黃疸)</span>、黑色嘔吐物 (Black vomit)。</li>
                                <li><strong>病理：</strong>肝臟切片可見 <span class='exam-target'>Councilman bodies</span> (嗜酸性壞死小體)。<span class="bg-source-gb source-tag text-blue-800">[Gb] 1231 p.6</span></li>
                                <li><strong>疫苗：</strong>17D live attenuated vaccine (活性減毒)。</li>
                            </ul>
                        `
                    },
                    {
                        title: "布尼亞病毒目 (Bunyavirales) - Hantavirus",
                        content: `
                            <p><strong>漢他病毒 (Hantavirus)：</strong> <span class="bg-source-gb source-tag text-blue-800">[Gb] 1231 p.11</span></p>
                            <ul>
                                <li><strong>非蟲媒：</strong>雖然分類在 Bunyavirales，但主要透過 <span class='exam-target'>嚙齒類 (Rodents)</span> 的排泄物 (尿、糞) 經由<strong>氣溶膠 (Aerosol)</strong> 吸入傳播。</li>
                                <li><strong>兩大症候群：</strong>
                                    <table class="w-full text-sm border border-gray-200 mt-1">
                                        <tr class="bg-gray-100"><th>疾病</th><th>病毒株</th><th>主要症狀</th></tr>
                                        <tr><td><strong>HFRS</strong> (腎綜合徵出血熱)</td><td>Hantaan virus</td><td>發燒、出血、<span class='exam-target'>腎衰竭</span> (亞洲/歐洲)</td></tr>
                                        <tr><td><strong>HPS</strong> (漢他病毒肺症候群)</td><td>Sin Nombre virus</td><td>快速惡化的呼吸衰竭、<span class='exam-target'>肺水腫</span> (美洲)</td></tr>
                                    </table>
                                </li>
                                <li><strong>基因體：</strong>-ssRNA，<span class='exam-target'>3 Segments (S, M, L)</span>。</li>
                            </ul>
                        `
                    },
                    {
                        title: "絲狀與沙狀病毒 (Filo & Arena)",
                        content: `
                            <p><strong>絲狀病毒科 (Filoviridae)：</strong></p>
                            <ul>
                                <li><strong>伊波拉 (Ebola) & 馬堡 (Marburg)：</strong>
                                    <br>外型呈長絲狀，末端捲曲如 <span class='exam-target'>Shepherd's crook (羊號角/U型)</span>。<span class="bg-source-txt source-tag text-green-800">[Txt]</span>
                                    <br>宿主：<span class='exam-target'>果蝠 (Fruit bats)</span>。
                                    <br>傳染：直接接觸體液 (高度傳染性)。院內感染常見。
                                    <br>病理：嚴重出血熱，致死率極高 (可達 90%)。
                                </li>
                            </ul>
                            <hr class="my-2 border-gray-200">
                            <p><strong>沙狀病毒科 (Arenaviridae)：</strong></p>
                            <ul>
                                <li><strong>Lassa Fever (拉薩熱)：</strong>西非流行，鼠類傳播。</li>
                                <li><strong>LCMV (淋巴球性脈絡叢腦膜炎病毒)：</strong>流感狀或無菌性腦膜炎。</li>
                                <li><strong>特徵：</strong>電子顯微鏡下可見病毒顆粒內含有宿主的 <span class='exam-target'>Ribosomes (核糖體)</span>，外觀如沙粒 (Sandy appearance)。<span class="bg-source-gb source-tag text-blue-800">[Gb] 1231 p.13</span></li>
                            </ul>
                        `
                    }
                ]
            },
            'rna_reo': {
                category: 'RNA Viruses',
                title: "呼腸孤病毒科 (Reoviridae) [Updated]",
                family: "Reoviridae",
                color: "red",
                tags: { genome: "dsRNA (Segmented)", envelope: "Naked", disease: "Gastroenteritis" },
                quickFacts: [
                    { label: "基因體", val: "雙股 <span class='exam-target'>dsRNA</span> (分節)", src: "Gb p.21" },
                    { label: "結構", val: "雙層/三層蛋白衣 (車輪狀)", src: "Lec" },
                    { label: "毒素", val: "<span class='exam-target'>NSP4</span> (病毒性腸毒素)", src: "Gb p.24" },
                    { label: "疫苗", val: "口服活毒 (Rotarix/RotaTeq)", src: "Txt" }
                ],
                sections: [
                    {
                        title: "結構與獨特基因體 (Structure & Genome)",
                        content: `
                            <p><strong>名稱由來：</strong><strong>R</strong>espiratory <strong>E</strong>nteric <strong>O</strong>rphan virus (呼吸道、腸道、孤兒病毒)。</p>
                            <ul>
                                <li><strong>基因體：</strong>最具鑑別度的特徵！
                                    <br>1. <strong><span class='exam-target'>dsRNA (雙股 RNA)</span></strong>：動物病毒中唯一具雙股 RNA 的家族。
                                    <br>2. <strong>分節 (Segmented)</strong>：Rotavirus 有 <span class='exam-target'>11 個片段</span> (類似流感，可發生基因重組 Reassortment)。<span class="bg-source-gb source-tag text-blue-800">[Gb] 1210 p.21</span>
                                </li>
                                <li><strong>蛋白衣：</strong>無套膜。具有<strong>雙層或三層</strong>蛋白衣 (Double/Triple-layered capsid)，使其在環境中極穩定 (耐酸、耐膽汁)，適合糞口傳播。</li>
                                <li><strong>複製：</strong>在<strong>細胞質</strong>進行 (形成 Viroplasm)。因為宿主細胞沒有處理 dsRNA 的酵素，病毒必須自帶 <span class='exam-target'>RNA-dependent RNA polymerase</span>。</li>
                            </ul>
                        `
                    },
                    {
                        title: "輪狀病毒 (Rotavirus)",
                        content: `
                            <p><strong>外型：</strong>電子顯微鏡下呈<strong>車輪狀 (Wheel-like)</strong>，拉丁文 Rota = Wheel。<span class="bg-source-lec source-tag text-pink-800">[Lec]</span></p>
                            <p><strong>臨床重要性：</strong>全球 <span class='exam-target'>嬰幼兒 (6個月-2歲)</span> 嚴重脫水性腹瀉的首要原因。秋冬流行 (Winter vomiting disease)。</p>
                            <ul>
                                <li><strong>致病機轉 (Pathogenesis)：</strong>
                                    <br>1. 破壞小腸絨毛細胞 (Villi blunting) -> 吸收不良。
                                    <br>2. <strong><span class='exam-target'>NSP4 Protein</span></strong>：關鍵考點！
                                    <br>它是第一種被發現的<strong>病毒性腸毒素 (Viral Enterotoxin)</strong>。能刺激細胞釋放 <span class='exam-target'>Calcium (鈣離子)</span>，導致水分與電解質大量外流 (水瀉)。<span class="bg-source-gb source-tag text-blue-800">[Gb] p.24</span>
                                </li>
                                <li><strong>症狀：</strong>嘔吐、水瀉 (非血便)、發燒。嚴重者導致脫水休克。</li>
                            </ul>
                        `
                    },
                    {
                        title: "診斷、治療與疫苗",
                        content: `
                            <ul>
                                <li><strong>診斷：</strong>
                                    <br>1. <strong>抗原快篩 (Ag detection)：</strong>檢測糞便中的病毒抗原 (最常用)。
                                    <br>2. 電子顯微鏡 (EM)：看車輪狀外觀。
                                </li>
                                <li><strong>疫苗 (必考)：</strong>皆為<strong>口服活性減毒疫苗 (Live attenuated oral vaccine)</strong>。<span class="bg-source-txt source-tag text-green-800">[Txt]</span>
                                    <table class="w-full text-sm border border-gray-200 mt-1">
                                        <tr class="bg-gray-100"><th>疫苗</th><th>成份</th><th>劑數</th></tr>
                                        <tr><td><strong>RotaTeq</strong> (五價)</td><td>人牛重組 (Human-Bovine reassortant)</td><td>3 劑</td></tr>
                                        <tr><td><strong>Rotarix</strong> (單價)</td><td>人類減毒株 (Human strain)</td><td>2 劑</td></tr>
                                    </table>
                                    <p class="text-xs text-gray-500 mt-1"><strong>副作用：</strong>極低機率可能引起 <span class='exam-target'>腸套疊 (Intussusception)</span> (早期疫苗 Rotashield 因此下架，新一代疫苗相對安全)。</p>
                                </li>
                            </ul>
                        `
                    },
                    {
                        title: "其他成員：科羅拉多壁蝨熱",
                        content: `
                            <p><strong>Coltivirus (科羅拉多壁蝨熱病毒)：</strong></p>
                            <ul>
                                <li>歸類為 <strong>Arbovirus (蟲媒病毒)</strong>。</li>
                                <li>媒介：<span class='exam-target'>Wood tick (壁蝨/蜱)</span>。</li>
                                <li>症狀：雙相發燒 (Saddleback fever)、肌肉痛。感染紅血球前驅細胞。</li>
                            </ul>
                        `
                    }
                ]
            },
            'hepatitis': { 
                category: 'Hepatitis Viruses', 
                title: "病毒性肝炎總論 (Viral Hepatitis)", 
                family: "Mixed Families", 
                color: "yellow", 
                tags: { genome: "Mixed (DNA/RNA)", envelope: "Mixed", disease: "Hepatitis, Cirrhosis, HCC" }, 
                quickFacts: [
                    { label: "B肝帶原", val: "<span class='exam-target'>HBsAg (+) > 6個月</span>", src: "Gb 1224 p.12" }, 
                    { label: "C肝慢性化", val: "高達 85% (易肝硬化/肝癌)", src: "Gb 1224 p.17" },
                    { label: "孕婦致死", val: "E型肝炎 (HEV) 20%", src: "Txt" },
                    { label: "缺陷病毒", val: "HDV (需 HBsAg 包裹)", src: "Lec" },
                    { label: "DNA病毒", val: "僅 <span class='exam-target'>HBV</span> (其餘皆RNA)", src: "Gb p.3" }
                ], 
                sections: [
                    { 
                        title: "肝炎病毒總表比較 (Comparison)", 
                        content: `
                            <table class="w-full text-sm border border-gray-200 mb-2">
                                <tr class="bg-gray-100"><th>特徵</th><th>HAV (A型)</th><th>HBV (B型)</th><th>HCV (C型)</th><th>HDV (D型)</th><th>HEV (E型)</th></tr>
                                <tr><td><strong>病毒科別</strong></td><td>Picornaviridae<br>(微小RNA)</td><td><span class='exam-target'>Hepadnaviridae</span><br>(肝DNA)</td><td>Flaviviridae<br>(黃病毒)</td><td>Deltavirus<br>(類病毒)</td><td>Hepeviridae<br>(E肝病毒)</td></tr>
                                <tr><td><strong>基因體</strong></td><td>ssRNA (+)</td><td><span class='exam-target'>dsDNA (Partial)</span></td><td>ssRNA (+)</td><td>ssRNA (-) circular</td><td>ssRNA (+)</td></tr>
                                <tr><td><strong>傳染途徑</strong></td><td><span class='exam-target'>Fecal-oral</span><br>(糞口)</td><td>Parenteral/Sexual<br>(體液/血液)</td><td>Parenteral<br>(血液為主)</td><td>Parenteral<br>(體液)</td><td><span class='exam-target'>Fecal-oral</span><br>(糞口)</td></tr>
                                <tr><td><strong>慢性化</strong></td><td>無 (No)</td><td>有 (5-10%)<br>新生兒 90%</td><td><span class='exam-target'>極高 (80-85%)</span></td><td>有 (高)</td><td>無 (No)</td></tr>
                                <tr><td><strong>癌症關聯</strong></td><td>無</td><td><span class='exam-target'>HCC (肝細胞癌)</span></td><td><span class='exam-target'>HCC (肝細胞癌)</span></td><td>無</td><td>無</td></tr>
                                <tr><td><strong>疫苗</strong></td><td>有 (死毒)</td><td>有 (HBsAg)</td><td>無 (變異太快)</td><td>防 HBV 即可</td><td>有 (中國)</td></tr>
                            </table>
                            <p class="text-xs text-gray-500 mt-1">* <strong>口訣：</strong> "Vowels affect the bowels" (母音 A, E 傷腸胃/糞口傳染)。<span class="bg-source-gb source-tag text-blue-800">[Gb] 1224 p.3</span></p>
                        ` 
                    },
                    { 
                        title: "A 型肝炎 (HAV) & E 型肝炎 (HEV)", 
                        content: `
                            <p><strong>A 型肝炎 (Infectious Hepatitis)：</strong></p>
                            <ul>
                                <li><strong>特性：</strong>Picornaviridae。無套膜 (Naked)，耐酸耐熱，環境生存力強。</li>
                                <li><strong>傳染：</strong>糞口傳染。生食受汙染貝類 (Shellfish/Clams)。</li>
                                <li><strong>診斷：</strong>急性期測 <span class='exam-target'>Anti-HAV IgM</span>。終身免疫測 Anti-HAV IgG。<span class="bg-source-gb source-tag text-blue-800">[Gb] p.7</span></li>
                                <li><strong>預防：</strong>衛生條件、煮熟食物。疫苗 (Inactivated) 建議 1 歲以上施打。</li>
                            </ul>
                            <hr class="my-2 border-gray-200">
                            <p><strong>E 型肝炎 (Enteric Non-A Non-B)：</strong></p>
                            <ul>
                                <li><strong>特性：</strong>Hepeviridae。類似 Calicivirus。無套膜。</li>
                                <li><strong>危險群：</strong><span class='exam-target'>孕婦 (Pregnant women)</span> 感染死亡率高達 20% (Fulminant hepatitis)。<span class="bg-source-txt source-tag text-green-800">[Txt]</span></li>
                                <li><strong>人畜共通：</strong>豬可能是保毒宿主。</li>
                            </ul>
                        ` 
                    },
                    { 
                        title: "B 型肝炎 (HBV) - 結構與複製", 
                        content: `
                            <p><strong>結構 (Dane Particle)：</strong>42nm 完整病毒顆粒。</p>
                            <ul>
                                <li><strong>HBsAg (表面抗原)：</strong>位於套膜。具 L, M, S 三種形式。會形成不具感染力的球形或管狀顆粒釋放到血液中 (Decoy)，數量遠多於完整病毒。<span class="bg-source-lec source-tag text-pink-800">[Lec]</span></li>
                                <li><strong>HBcAg (核心抗原)：</strong>位於二十面體蛋白衣 (Capsid)。血液中測不到 (被套膜包住)。</li>
                                <li><strong>HBeAg (e 抗原)：</strong>與 HBcAg 來自同一基因，但經切割後分泌至血液。代表<span class='exam-target'>病毒複製活躍 (High infectivity)</span>。</li>
                            </ul>
                            <p><strong>獨特複製機制：</strong></p>
                            <ul>
                                <li>雖為 DNA 病毒，但複製過程需經過 <strong>RNA 中間產物 (Pregenomic RNA)</strong>，利用病毒自帶的 <span class='exam-target'>Reverse Transcriptase (反轉錄酶)</span> 將 RNA 反轉錄回 DNA。<span class="bg-source-gb source-tag text-blue-800">[Gb] p.10</span></li>
                                <li>基因體為 <strong>Partial dsDNA</strong> (部分雙股，一長一短)。</li>
                            </ul>
                        ` 
                    },
                    { 
                        title: "B 型肝炎 - 血清學診斷 (Serology) [必考]", 
                        content: `
                            <table class="w-full text-sm border border-gray-200 mt-2">
                                <tr class="bg-gray-100"><th>情境</th><th>HBsAg</th><th>Anti-HBs</th><th>Anti-HBc IgM</th><th>Anti-HBc IgG</th><th>HBeAg</th></tr>
                                <tr><td><strong>急性感染期<br>(Acute)</strong></td><td><span class="text-red-600 font-bold">+</span></td><td>-</td><td><span class="text-red-600 font-bold">+</span></td><td>-</td><td>+ (高傳染)</td></tr>
                                <tr><td><strong>窗空期<br>(Window period)</strong></td><td><span class='exam-target'>-</span></td><td><span class='exam-target'>-</span></td><td><span class="text-red-600 font-bold">+</span></td><td>-</td><td>+/-</td></tr>
                                <tr><td><strong>過去感染已痊癒<br>(Past/Resolved)</strong></td><td>-</td><td><span class="text-green-600 font-bold">+</span></td><td>-</td><td><span class="text-green-600 font-bold">+</span></td><td>-</td></tr>
                                <tr><td><strong>疫苗接種<br>(Vaccinated)</strong></td><td>-</td><td><span class="text-green-600 font-bold">+</span></td><td>-</td><td><span class='exam-target'>-</span></td><td>-</td></tr>
                                <tr><td><strong>慢性帶原<br>(Chronic Carrier)</strong></td><td><span class="text-red-600 font-bold">+</span> (>6mo)</td><td>-</td><td>-</td><td><span class="text-green-600 font-bold">+</span></td><td>+/-</td></tr>
                            </table>
                            <p class="mt-2 text-xs text-gray-600">
                                <strong>關鍵判讀：</strong><br>
                                1. <span class='exam-target'>Window period</span>：HBsAg 消失但 Anti-HBs 尚未出現，此時唯一的感染指標是 <strong>Anti-HBc IgM</strong>。<br>
                                2. <strong>疫苗 vs 感染：</strong>區別在於 <span class='exam-target'>Anti-HBc (核心抗體)</span>。感染過會有 Anti-HBc (+)，打疫苗只有 Anti-HBs (+)。<span class="bg-source-gb source-tag text-blue-800">[Gb] p.13</span>
                            </p>
                        ` 
                    },
                    { 
                        title: "C 型肝炎 (HCV) & G 型肝炎 (HGV)", 
                        content: `
                            <p><strong>C 型肝炎 (HCV)：</strong></p>
                            <ul>
                                <li><strong>高變異性：</strong>RdRp (RNA聚合酶) 缺乏校正功能 (No proofreading)，產生 Quasispecies (準種)，導致免疫系統難以清除，亦<strong>無疫苗</strong>。<span class="bg-source-gb source-tag text-blue-800">[Gb] p.17</span></li>
                                <li><strong>臨床：</strong>主要經由輸血、針頭傳染。症狀輕微，但 <span class='exam-target'>85% 轉為慢性</span>，是肝硬化與肝癌的主因之一。</li>
                                <li><strong>治療：</strong>DAAs (直接抗病毒藥物)，如 Sofosbuvir (Sovaldi)，治癒率高。</li>
                            </ul>
                            <p><strong>G 型肝炎 (HGV / GBV-C)：</strong></p>
                            <ul>
                                <li>Flaviviridae。經血液傳染。</li>
                                <li>常與 B 肝或 C 肝<strong>共同感染 (Co-infection)</strong>。</li>
                                <li>目前無證據顯示會造成嚴重肝病 (No fulminant hepatitis)。有趣的是，HIV 患者若共感染 HGV，生存率反而較高 (可能干擾 HIV 複製)。<span class="bg-source-gb source-tag text-blue-800">[Gb] p.21</span></li>
                            </ul>
                        ` 
                    },
                    { 
                        title: "D 型肝炎 (HDV) - 缺陷病毒", 
                        content: `
                            <p><strong>特性：</strong>Deltavirus。圓形 ssRNA(-)。</p>
                            <ul>
                                <li><strong>缺陷 (Defective)：</strong>無法獨立複製，必須借用 <span class='exam-target'>HBV 的 HBsAg</span> 作為其外套膜才能組裝釋出。<span class="bg-source-lec source-tag text-pink-800">[Lec]</span></li>
                                <li><strong>感染模式：</strong>
                                    <br>1. <strong>Co-infection (同時感染)：</strong>HBV + HDV 一起感染。通常預後較好 (90% 痊癒)。
                                    <br>2. <strong>Super-infection (重疊感染)：</strong>慢性 B 肝帶原者 (HBsAg+) 後來又感染 HDV。後果嚴重，易引發 <span class='exam-target'>猛爆性肝炎 (Fulminant hepatitis)</span>。<span class="bg-source-gb source-tag text-blue-800">[Gb] p.19</span>
                                </li>
                            </ul>
                        ` 
                    }
                ] 
            },
            'myco_intro': {
                category: 'Medical Mycology',
                title: "醫用黴菌學總論 (General Mycology)",
                family: "Fungi (Eukaryotes)",
                color: "green",
                tags: { genome: "DNA/RNA (Eukaryotic)", envelope: "Cell Wall (Chitin)", disease: "Mycoses" },
                quickFacts: [
                    { label: "細胞膜", val: "含 <span class='exam-target'>Ergosterol</span> (藥物標的)", src: "Gb 1231 p.22" },
                    { label: "細胞壁", val: "含 Chitin, Glucan (無 Peptidoglycan)", src: "Lec" },
                    { label: "雙相性", val: "Mold in Cold, Yeast in Beast", src: "Gb 1231 p.25" },
                    { label: "染色", val: "LPCB (藍色), KOH (溶解組織)", src: "Txt" }
                ],
                sections: [
                    {
                        title: "真菌生物學特性 (Biological Properties)",
                        content: `
                            <p><strong>基本特性：</strong>真核生物 (Eukaryotes)，具有細胞核 (Nucleus)、核膜與胞器 (粒線體、ER)。</p>
                            <table class="w-full text-sm border border-gray-200 mt-2 mb-2">
                                <tr class="bg-gray-100"><th>比較項目</th><th>細菌 (Bacteria)</th><th>真菌 (Fungi)</th></tr>
                                <tr><td><strong>細胞核</strong></td><td>無 (Prokaryote)</td><td>有 (Eukaryote)</td></tr>
                                <tr><td><strong>細胞膜</strong></td><td>無固醇 (黴漿菌除外)</td><td>含 <span class='exam-target'>Ergosterol (麥角固醇)</span></td></tr>
                                <tr><td><strong>細胞壁</strong></td><td>Peptidoglycan (胜肽聚醣)</td><td><span class='exam-target'>Chitin (幾丁質)</span>、Glucan (葡聚醣)、Mannan</td></tr>
                                <tr><td><strong>抗生素敏感度</strong></td><td>對 Antibiotics 敏感</td><td>對 Antibiotics <strong>無效</strong> (需用 Antifungals)</td></tr>
                            </table>
                            <p class="text-xs text-gray-500"><strong>考點：</strong>因為真菌是真核生物，與人類細胞相似，故抗黴菌藥物的選擇性毒性 (Selective toxicity) 較難達成，副作用通常較大。</p>
                        `
                    },
                    {
                        title: "型態學 (Morphology) & 雙相性",
                        content: `
                            <p><strong>兩大基本型態：</strong></p>
                            <ul>
                                <li><strong>酵母菌 (Yeast)：</strong>
                                    <br>單細胞 (Unicellular)。圓形或橢圓形。
                                    <br>繁殖：<span class='exam-target'>Budding (出芽生殖)</span>。若芽體不脫落連接成串，稱為<strong>偽菌絲 (Pseudohyphae)</strong> (如：Candida)。
                                    <br>菌落：類似細菌，乳狀/黏液狀 (Creamy/Mucoid)。
                                </li>
                                <li><strong>黴菌 (Mold)：</strong>
                                    <br>多細胞 (Multicellular)，絲狀。
                                    <br>基本單位：<strong>菌絲 (Hyphae)</strong>。菌絲交織成<strong>菌絲體 (Mycelium)</strong>。
                                    <br>菌絲分類：
                                    <ul class="list-[circle] pl-4 text-xs text-gray-500">
                                        <li><span class='exam-target'>Septate (有隔膜)</span>：如 Aspergillus (分隔規律)。</li>
                                        <li><span class='exam-target'>Aseptate / Coenocytic (無隔膜)</span>：如 Mucor (毛黴菌)，細胞質相通。</li>
                                    </ul>
                                </li>
                            </ul>
                            <hr class="my-2 border-gray-200">
                            <p><strong>雙相性真菌 (Dimorphic Fungi) [必考]：</strong></p>
                            <p>能隨<strong>溫度</strong>改變型態的真菌 (Thermal dimorphism)。通常是全身性致病菌 (Systemic mycoses)。</p>
                            <ul>
                                <li><strong>25°C (室溫/環境)：</strong>以 <span class='exam-target'>Mold (黴菌/菌絲)</span> 型態存在。(口訣：<strong>Mold in Cold</strong>)</li>
                                <li><strong>37°C (體溫/宿主)：</strong>以 <span class='exam-target'>Yeast (酵母菌)</span> 型態存在。(口訣：<strong>Yeast in Beast</strong>)</li>
                                <li>代表菌：Histoplasma, Blastomyces, Coccidioides, Sporothrix, Paracoccidioides。<span class="bg-source-gb source-tag text-blue-800">[Gb] p.25</span></li>
                            </ul>
                        `
                    },
                    {
                        title: "繁殖與孢子 (Reproduction & Spores)",
                        content: `
                            <p>主要依據<strong>無性孢子 (Asexual spores)</strong> 進行鑑定。</p>
                            <ul>
                                <li><strong>分生孢子 (Conidia)：</strong>裸露於菌絲末端，未被包裹。
                                    <ul class="list-[circle] pl-4 text-xs text-gray-500 mt-1">
                                        <li><strong>Blastoconidia (芽生孢子)：</strong>出芽形成 (如 Candida, Cryptococcus)。</li>
                                        <li><strong>Arthroconidia (關節孢子)：</strong>菌絲斷裂形成 (如 <span class='exam-target'>Coccidioides</span>)。</li>
                                        <li><strong>Chlamydoconidia (厚壁孢子)：</strong>環境惡劣時形成，壁厚 (如 Candida albicans)。</li>
                                        <li><strong>Micro/Macroconidia (大/小分生孢子)：</strong>皮膚癬菌 (Dermatophytes) 的鑑別特徵。</li>
                                    </ul>
                                </li>
                                <li><strong>孢子囊孢子 (Sporangiospores)：</strong>
                                    <br>被包裹在<strong>孢子囊 (Sporangium)</strong> 內。
                                    <br>特徵：屬於 <span class='exam-target'>Zygomycetes (接合菌綱)</span>，如 Rhizopus, Mucor。<span class="bg-source-lec source-tag text-pink-800">[Lec]</span>
                                </li>
                            </ul>
                        `
                    },
                    {
                        title: "實驗室診斷 (Laboratory Diagnosis)",
                        content: `
                            <ul>
                                <li><strong>直接鏡檢 (Direct Exam)：</strong>
                                    <ul class="list-[circle] pl-4 text-xs text-gray-500 mt-1">
                                        <li><span class='exam-target'>10-20% KOH (氫氧化鉀)</span>：溶解皮膚角質與組織細胞，讓黴菌菌絲顯露出來。(黴菌壁耐鹼)。</li>
                                        <li><span class='exam-target'>India Ink (墨汁染色)</span>：觀察 <strong>Cryptococcus (隱球菌)</strong> 的厚<span class='exam-target'>莢膜 (Capsule)</span> (背景黑，菌體亮)。</li>
                                        <li><strong>Lactophenol Cotton Blue (LPCB, 乳酸酚棉藍)</strong>：最常用染色劑。酚殺菌、乳酸防腐、棉藍將細胞壁染成<strong>藍色</strong>。</li>
                                    </ul>
                                </li>
                                <li><strong>培養 (Culture)：</strong>
                                    <br><span class='exam-target'>SDA (Sabouraud Dextrose Agar)</span>：沙保羅氏培養基。
                                    <br>特性：低 pH 值 (5.0-5.6) 抑制細菌生長，適合黴菌。
                                </li>
                                <li><strong>特殊檢查：</strong>
                                    <br><strong>Wood's Lamp (伍氏燈/UV)</strong>：照射頭癬患部，Microsporum 會發出螢光。
                                    <br><strong>Germ tube test (芽管試驗)</strong>：<span class='exam-target'>Candida albicans</span> 在血清中 37°C 培養 2-3 小時會長出芽管 (區分其他念珠菌)。<span class="bg-source-gb source-tag text-blue-800">[Gb] p.74</span>
                                </li>
                            </ul>
                        `
                    }
                ]
            },
            'myco_pharma': {
                category: 'Medical Mycology',
                title: "抗黴菌藥物學 (Antifungal Agents)",
                family: "Pharmacology",
                color: "green",
                tags: { genome: "Therapy", envelope: "Inhibitors", disease: "Treatment" },
                quickFacts: [
                    { label: "Polyenes", val: "結合 Ergosterol (<span class='exam-target'>打洞</span>)", src: "Gb 1231 p.75" },
                    { label: "Azoles", val: "抑制 Ergosterol <span class='exam-target'>合成</span>", src: "Lec" },
                    { label: "Echinocandins", val: "抑制細胞壁 (<span class='exam-target'>β-glucan</span>)", src: "Txt" },
                    { label: "Flucytosine", val: "抑制 DNA/RNA (類似 5-FU)", src: "Gb" }
                ],
                sections: [
                    {
                        title: "作用機轉總覽 (Mechanism of Action)",
                        content: `
                            <p>由於真菌是真核生物，與人類細胞相似，因此藥物設計主要針對真菌特有而人類沒有的結構：</p>
                            <ul>
                                <li><strong>細胞膜 (Cell Membrane)：</strong>針對 <span class='exam-target'>Ergosterol (麥角固醇)</span>。人類細胞膜是 Cholesterol，差異性毒性來自對 Ergosterol 親和力較高。</li>
                                <li><strong>細胞壁 (Cell Wall)：</strong>針對 <span class='exam-target'>Beta-1,3-glucan (β-葡聚醣)</span>。人類細胞無細胞壁，故此類藥物毒性最低。</li>
                                <li><strong>核酸合成 (DNA/RNA)：</strong>利用酵素轉換差異 (如 5-FC 轉為 5-FU)。</li>
                            </ul>
                        `
                    },
                    {
                        title: "1. 影響細胞膜穩定性：Polyenes (多烯類)",
                        content: `
                            <p><strong>機制：</strong>直接與細胞膜上的 <span class='exam-target'>Ergosterol 結合</span>，形成孔洞 (Pores)，导致鉀離子與內容物流失，造成細胞死亡 (Fungicidal)。</p>
                            <ul>
                                <li><strong>Amphotericin B (兩性黴素 B)：</strong>
                                    <br>地位：廣效性，抗黴菌治療的<strong>黃金標準 (Gold standard)</strong>，專治嚴重全身性感染。
                                    <br>副作用：極大。
                                    <ul class="list-[circle] pl-4 text-xs text-gray-500">
                                        <li><span class='exam-target'>Nephrotoxicity (腎毒性)</span>：最嚴重副作用。</li>
                                        <li>Infusion reaction：發燒、寒顫 (Shake and Bake)。</li>
                                        <li>改用脂質體劑型 (Liposomal AmB) 可降低腎毒性。<span class="bg-source-gb source-tag text-blue-800">[Gb] p.75</span></li>
                                    </ul>
                                </li>
                                <li><strong>Nystatin (制黴菌素)：</strong>
                                    <br>毒性太強無法注射。僅限<strong>局部使用 (Topical)</strong>，如治療口腔念珠菌 (鵝口瘡) 或陰道念珠菌感染。<span class="bg-source-txt source-tag text-green-800">[Txt]</span>
                                </li>
                            </ul>
                        `
                    },
                    {
                        title: "2. 抑制細胞膜合成：Azoles (阿唑類) & Allylamines",
                        content: `
                            <p><strong>Azoles 機制：</strong>抑制 <span class='exam-target'>14-α-demethylase</span> (P450 酵素)，阻斷 Lanosterol 轉變為 Ergosterol，導致有毒中間產物堆積。</p>
                            <ul>
                                <li><strong>Fluconazole：</strong>
                                    <br>水溶性佳，可穿透 <span class='exam-target'>BBB (血腦障壁)</span>。
                                    <br>首選：<span class='exam-target'>隱球菌腦膜炎 (Cryptococcal meningitis)</span>、念珠菌感染。
                                </li>
                                <li><strong>Voriconazole：</strong>
                                    <br>廣效。首選：<span class='exam-target'>Aspergillus (麴菌)</span> 感染。<span class="bg-source-lec source-tag text-pink-800">[Lec]</span>
                                    <br>副作用：視覺障礙 (Visual disturbance)。
                                </li>
                                <li><strong>Itraconazole：</strong>
                                    <br>治療雙相性黴菌 (如 Histoplasma, Sporothrix/玫瑰園丁病) 的首選。
                                </li>
                                <li><strong>Ketoconazole：</strong>早期藥物，因抑制人類睪固酮合成 (造成男性女乳症) 與肝毒性，現主要用於局部 (洗髮精治療皮屑芽孢菌)。</li>
                            </ul>
                            <hr class="my-2 border-gray-200">
                            <p><strong>Allylamines (艾利胺類) - Terbinafine：</strong></p>
                            <ul>
                                <li>機制：抑制 <span class='exam-target'>Squalene epoxidase</span> (Ergosterol 合成早期酵素)。</li>
                                <li>應用：專治<strong>皮膚癬菌 (Dermatophytes)</strong>，如香港腳、灰指甲 (蓄積在角質層)。</li>
                            </ul>
                        `
                    },
                    {
                        title: "3. 抑制細胞壁與核酸：Echinocandins & 5-FC",
                        content: `
                            <p><strong>Echinocandins (棘白菌素)：</strong></p>
                            <ul>
                                <li>藥物：<strong>Caspofungin</strong>, Micafungin。</li>
                                <li>機制：抑制 <span class='exam-target'>β-(1,3)-D-glucan synthase</span>，阻斷細胞壁合成。</li>
                                <li>應用：對念珠菌 (含抗藥性株) 與麴菌有效。對隱球菌無效 (因隱球菌細胞壁主要是 α-glucan 且有莢膜)。<span class="bg-source-gb source-tag text-blue-800">[Gb] p.76</span></li>
                            </ul>
                            <hr class="my-2 border-gray-200">
                            <p><strong>Flucytosine (5-FC)：</strong></p>
                            <ul>
                                <li>機制：進入黴菌細胞後，被 <strong>Cytosine deaminase</strong> 轉化為 <span class='exam-target'>5-FU</span>，抑制 DNA/RNA 合成。人類細胞無此酵素，故無毒性。</li>
                                <li>應用：單獨使用易產生抗藥性。常與 <span class='exam-target'>Amphotericin B</span> 併用治療隱球菌腦膜炎 (加強效果並減少 Ampho B 用量)。</li>
                            </ul>
                            <hr class="my-2 border-gray-200">
                            <p><strong>Griseofulvin：</strong></p>
                            <ul>
                                <li>機制：抑制 <span class='exam-target'>Microtubules (微管)</span> 功能，阻斷有絲分裂。</li>
                                <li>特性：<strong>Keratinophilic (親角質性)</strong>，沉積在新生成的皮膚/指甲，治療表淺癬菌 (需長期服用)。</li>
                            </ul>
                        `
                    }
                ]
            },
            
           // --- 1. 淺表皮黴菌 ---
            'myco_superficial': {
                category: 'Medical Mycology',
                title: "淺表皮黴菌 (Superficial Mycoses)",
                family: "Malassezia / Hortaea / Trichosporon",
                color: "green",
                tags: { genome: "Yeast/Mold", envelope: "Chitin", disease: "Tinea versicolor" },
                quickFacts: [
                    { label: "汗斑", val: "Malassezia furfur", src: "Gb 1231 p.28" },
                    { label: "鏡檢", val: "<span class='exam-target'>義大利麵肉丸</span>", src: "Lec" },
                    { label: "特性", val: "嗜脂性 (Lipophilic)", src: "Txt" },
                    { label: "症狀", val: "色素過多或脫失 (無免疫反應)", src: "Gb" }
                ],
                sections: [
                    {
                        title: "Malassezia furfur (皮屑芽孢菌)",
                        content: `
                            <p><strong>疾病：</strong>汗斑 / 變色糠疹 (Pityriasis versicolor)。</p>
                            <ul>
                                <li><strong>特性：</strong>
                                    <br>1. 正常人體皮膚共生菌 (Commensal)。
                                    <br>2. <span class='exam-target'>Lipophilic (嗜脂性)</span>：生長需要長鏈脂肪酸，故好發於皮脂腺豐富處 (背部、胸部)。
                                </li>
                                <li><strong>臨床症狀：</strong>
                                    <br>皮膚出現邊界明顯的斑塊。可能為過度色素沉著 (Hyper-) 或色素脫失 (Hypo-pigmentation)。
                                    <br>機制：黴菌會代謝出 Azelaic acid，干擾黑色素生成。通常<strong>不癢、無發炎反應</strong> (只感染角質層最外層)。
                                </li>
                                <li><strong>診斷 (必考)：</strong>
                                    <br>KOH 鏡檢可見 <span class='exam-target'>"Spaghetti and Meatballs" (義大利麵加肉丸)</span> 外觀。
                                    <br>意即：短菌絲 (Short hyphae) + 圓形芽孢 (Round yeast cells)。<span class="bg-source-gb source-tag text-blue-800">[Gb] 1231 p.28</span>
                                </li>
                            </ul>
                        `
                    },
                    {
                        title: "其他淺表黴菌",
                        content: `
                            <ul>
                                <li><strong>Tinea nigra (黑癬)：</strong>
                                    <br>由 <em>Hortaea werneckii</em> 引起。手掌出現黑色斑塊 (像沾到硝酸銀)。
                                </li>
                                <li><strong>Black Piedra (黑毛結節癬)：</strong>
                                    <br>由 <em>Piedraia hortae</em> 引起。頭髮上有黑色硬結節。
                                </li>
                                <li><strong>White Piedra (白毛結節癬)：</strong>
                                    <br>由 <em>Trichosporon</em> 引起。毛髮上有白色軟結節。
                                </li>
                            </ul>
                        `
                    }
                ]
            },

            // --- 2. 皮膚黴菌 ---
            'myco_cutaneous': {
                category: 'Medical Mycology',
                title: "皮膚/表皮黴菌 (Dermatophytes)",
                family: "Trichophyton / Microsporum / Epidermophyton",
                color: "green",
                tags: { genome: "Mold (Septate)", envelope: "Chitin", disease: "Ringworm (Tinea)" },
                quickFacts: [
                    { label: "營養", val: "<span class='exam-target'>Keratinophilic (嗜角質)</span>", src: "Lec" },
                    { label: "伍氏燈", val: "Microsporum (發螢光)", src: "Gb p.30" },
                    { label: "顯微鏡", val: "大/小分生孢子 (Macro/Micro)", src: "Txt" },
                    { label: "反應", val: "ID reaction (過敏)", src: "Gb p.31" }
                ],
                sections: [
                    {
                        title: "三大屬分類與鑑別 (Genera)",
                        content: `
                            <p><strong>特性：</strong>分泌 <strong>Keratinase (角質酶)</strong>，分解並利用皮膚、毛髮、指甲的角質蛋白。統稱「癬 (Tinea / Ringworm)」。</p>
                            <table class="w-full text-sm border border-gray-200 mt-2">
                                <tr class="bg-gray-100"><th>屬名 (Genus)</th><th>感染部位</th><th>鑑別特徵 (Macroconidia)</th></tr>
                                <tr><td><strong>Microsporum</strong><br>(小孢子菌屬)</td><td>毛髮、皮膚<br>(不侵犯指甲)</td><td><span class='exam-target'>紡錘狀 (Spindle)</span><br>表面粗糙 (Rough)</td></tr>
                                <tr><td><strong>Epidermophyton</strong><br>(表皮癬菌屬)</td><td>皮膚、指甲<br>(不侵犯毛髮)</td><td><span class='exam-target'>棒狀 (Club-shaped)</span><br>像雪人，無小分生孢子</td></tr>
                                <tr><td><strong>Trichophyton</strong><br>(毛癬菌屬)</td><td>毛髮、皮膚、指甲<br>(<strong>全部侵犯</strong>)</td><td>鉛筆狀 (Pencil) / 雪茄狀<br>主要看微小孢子 (Microconidia)</td></tr>
                            </table>
                            <p class="text-xs text-gray-500 mt-1">* <span class='exam-target'>T. rubrum</span> 是引起香港腳與灰指甲最常見的菌種。<span class="bg-source-gb source-tag text-blue-800">[Gb] p.29</span></p>
                        `
                    },
                    {
                        title: "臨床特徵與診斷",
                        content: `
                            <ul>
                                <li><strong>疾病命名：</strong>依部位命名。
                                    <ul class="list-[circle] pl-4 text-xs text-gray-500">
                                        <li>Tinea capitis (頭癬)、Tinea pedis (足癬/香港腳)、Tinea corporis (體癬/金錢癬)、Tinea unguium (甲癬/灰指甲)。</li>
                                    </ul>
                                </li>
                                <li><strong>Wood's Lamp (伍氏燈)：</strong>
                                    <br>使用 UV 光照射。<strong>Microsporum</strong> 感染的頭髮會發出 <span class='exam-target'>亮綠色螢光 (Bright green)</span>。Trichophyton 則大多不發光。
                                </li>
                                <li><strong>ID Reaction (皮癬菌疹)：</strong>
                                    <br>感染部位以外的皮膚出現水泡或皮疹。這是宿主對黴菌抗原產生的<strong>過敏反應 (Hypersensitivity)</strong>，病灶處<span class='exam-target'>無黴菌存在</span>。<span class="bg-source-lec source-tag text-pink-800">[Lec]</span>
                                </li>
                            </ul>
                        `
                    }
                ]
            },

            // --- 3. 皮下黴菌 ---
            'myco_subcutaneous': {
                category: 'Medical Mycology',
                title: "皮下黴菌 (Subcutaneous Mycoses)",
                family: "Sporothrix / Fonsecaea",
                color: "green",
                tags: { genome: "Dimorphic / Mold", envelope: "Chitin", disease: "Sporotrichosis" },
                quickFacts: [
                    { label: "傳染", val: "外傷植入 (Traumatic implantation)", src: "Txt" },
                    { label: "申克氏", val: "玫瑰園丁病 (Rose gardener)", src: "Gb p.33" },
                    { label: "雙相性", val: "Sporothrix 是雙相性", src: "Lec" },
                    { label: "治療", val: "Itraconazole / KI", src: "Gb" }
                ],
                sections: [
                    {
                        title: "Sporothrix schenckii (申克氏孢子絲菌)",
                        content: `
                            <ul>
                                <li><strong>別名：</strong><span class='exam-target'>Rose Gardener's Disease (玫瑰園丁病)</span>。</li>
                                <li><strong>傳染途徑：</strong>經由帶刺植物 (如玫瑰、芒草) 刺傷皮膚，將孢子植入皮下組織。</li>
                                <li><strong>型態 (Dimorphic)：</strong>
                                    <br>1. 25°C (環境)：黴菌型，分生孢子呈<strong>雛菊狀 (Daisy-like)</strong> 排列。
                                    <br>2. 37°C (組織)：酵母菌型，呈<strong>雪茄狀 (Cigar-shaped)</strong>。<span class="bg-source-gb source-tag text-blue-800">[Gb] 1231 p.33</span>
                                </li>
                                <li><strong>臨床症狀：</strong>
                                    <br>淋巴皮膚型 (Lymphocutaneous)。沿著淋巴管出現一串無痛性的皮下結節或潰瘍 (Ascending lymphangitis)。
                                </li>
                                <li><strong>治療：</strong>Itraconazole 或口服 <span class='exam-target'>Potassium Iodide (KI, 碘化鉀)</span> (飽和溶液)。</li>
                            </ul>
                        `
                    },
                    {
                        title: "Chromoblastomycosis (產色黴菌病)",
                        content: `
                            <ul>
                                <li><strong>特徵：</strong>致病菌為黑色黴菌 (Dematiaceous fungi)，產生黑色素。</li>
                                <li><strong>病理：</strong>組織切片可見 <span class='exam-target'>Sclerotic bodies (硬化小體)</span>，外觀像銅幣 (Copper pennies)，中間有十字分隔。</li>
                                <li><strong>症狀：</strong>下肢疣狀增生 (Cauliflower-like)。</li>
                            </ul>
                        `
                    }
                ]
            },

            // --- 4. 全身性黴菌 ---
            'myco_systemic': {
                category: 'Medical Mycology',
                title: "全身性黴菌 (Systemic Mycoses)",
                family: "Histo / Blasto / Coccidio / Paracoccidio",
                color: "green",
                tags: { genome: "Dimorphic", envelope: "Chitin", disease: "Pneumonia" },
                quickFacts: [
                    { label: "特性", val: "皆為 <span class='exam-target'>Dimorphic (雙相性)</span>", src: "Gb p.35" },
                    { label: "傳染", val: "吸入孢子 (Inhalation)", src: "Lec" },
                    { label: "Histo", val: "鳥糞/蝙蝠, 胞內寄生", src: "Txt" },
                    { label: "Coccidio", val: "Spherule (球體), 沙漠熱", src: "Gb p.37" }
                ],
                sections: [
                    {
                        title: "共通特性 (General Features)",
                        content: `
                            <p>所有全身性致病黴菌皆具備以下特徵：</p>
                            <ol class="list-decimal pl-4 space-y-1">
                                <li><strong>Dimorphic (雙相性)：</strong>環境是黴菌，吸入肺部 (37°C) 轉為酵母菌。</li>
                                <li><strong>感染途徑：</strong>吸入 (Inhalation) 孢子引起肺部感染，類似結核病 (TB)。</li>
                                <li><strong>非人傳人：</strong>來自環境土壤。</li>
                            </ol>
                        `
                    },
                    {
                        title: "1. Histoplasma capsulatum (組織胞漿菌)",
                        content: `
                            <ul>
                                <li><strong>流行病學：</strong>美國俄亥俄河/密西西比河谷。富含氮的土壤 (<strong>鳥糞、蝙蝠糞</strong>聚集地，如雞舍、洞穴)。</li>
                                <li><strong>鏡檢特徵：</strong>
                                    <br>是唯一<strong><span class='exam-target'>Intracellular (細胞內寄生)</span></strong> 的酵母菌。
                                    <br>存在於 <span class='exam-target'>Macrophages (巨噬細胞)</span> 內，呈微小橢圓形。
                                </li>
                                <li><strong>症狀：</strong>多為無症狀。免疫力低者可導致擴散性感染 (肝脾腫大)。<span class="bg-source-gb source-tag text-blue-800">[Gb] p.36</span></li>
                            </ul>
                        `
                    },
                    {
                        title: "2. Blastomyces dermatitidis (皮炎芽生菌)",
                        content: `
                            <ul>
                                <li><strong>流行病學：</strong>北美東部、五大湖區。腐爛木頭。</li>
                                <li><strong>鏡檢特徵：</strong>
                                    <br>大型酵母菌，細胞壁厚。
                                    <br>特徵：<span class='exam-target'>Broad-based budding (寬底出芽)</span>。芽體與母細胞連接處很寬 (像雪人)。
                                </li>
                            </ul>
                        `
                    },
                    {
                        title: "3. Coccidioides immitis (球黴菌)",
                        content: `
                            <ul>
                                <li><strong>流行病學：</strong>美國西南部 (加州/亞利桑那) <strong>沙漠地區</strong>。又稱 <span class='exam-target'>San Joaquin Valley Fever (山谷熱)</span>。地震或沙塵暴後易流行。</li>
                                <li><strong>鏡檢特徵 (例外)：</strong>
                                    <br>環境中：形成桶狀的 <strong>Arthroconidia (關節孢子)</strong> (傳染力極強)。
                                    <br>組織中：不形成酵母菌，而是形成巨大的 <span class='exam-target'>Spherule (球體)</span>，內含許多 Endospores (內孢子)。<span class="bg-source-lec source-tag text-pink-800">[Lec]</span>
                                </li>
                            </ul>
                        `
                    },
                    {
                        title: "4. Paracoccidioides brasiliensis",
                        content: `
                            <ul>
                                <li><strong>流行病學：</strong>中南美洲 (巴西)。</li>
                                <li><strong>鏡檢特徵：</strong>
                                    <br>多重出芽 (Multiple budding)。外觀如 <span class='exam-target'>Mariner's wheel (船舵 / 舵輪)</span> 或 Mickey mouse head。
                                </li>
                            </ul>
                        `
                    }
                ]
            },

            // --- 5. 伺機性黴菌 ---
            'myco_opportunistic': {
                category: 'Medical Mycology',
                title: "伺機性黴菌 (Opportunistic Mycoses)",
                family: "Candida / Cryptococcus / Aspergillus",
                color: "green",
                tags: { genome: "Yeast/Mold", envelope: "Varies", disease: "Immunocompromised" },
                quickFacts: [
                    { label: "念珠菌", val: "<span class='exam-target'>Germ tube (+)</span>, 偽菌絲", src: "Gb p.39" },
                    { label: "隱球菌", val: "厚莢膜, <span class='exam-target'>India Ink</span>", src: "Gb p.40" },
                    { label: "麴菌", val: "45°銳角分支, 分隔菌絲", src: "Lec" },
                    { label: "PCP", val: "愛滋肺炎, <span class='exam-target'>TMP-SMX</span>", src: "Txt" }
                ],
                sections: [
                    {
                        title: "Candida albicans (白色念珠菌)",
                        content: `
                            <ul>
                                <li><strong>特性：</strong>人體正常菌叢 (口、腸、陰道)。內源性感染。</li>
                                <li><strong>型態：</strong>多型性。
                                    <br>一般狀態：酵母菌 (Yeast)。
                                    <br>侵入組織時：形成 <span class='exam-target'>Pseudohyphae (偽菌絲)</span> 與真菌絲。
                                </li>
                                <li><strong>鑑定 (必考)：</strong><span class='exam-target'>Germ tube test (+)</span>。在血清中 37°C 培養會長出芽管。其他念珠菌為 (-)。</li>
                                <li><strong>疾病：</strong>鵝口瘡 (Thrush)、尿布疹、陰道炎 (豆腐渣分泌物)、食道炎 (AIDS定義疾病)。</li>
                            </ul>
                        `
                    },
                    {
                        title: "Cryptococcus neoformans (新型隱球菌)",
                        content: `
                            <ul>
                                <li><strong>來源：</strong>土壤、<span class='exam-target'>Pigeon droppings (鴿糞)</span>。吸入感染。</li>
                                <li><strong>毒力因子：</strong>
                                    <br>1. <span class='exam-target'>Capsule (多醣體莢膜)</span>：抗吞噬。
                                    <br>2. Melanin (黑色素)。
                                </li>
                                <li><strong>疾病：</strong><span class='exam-target'>Meningitis (腦膜炎)</span>。常見於 AIDS 患者 (最常見致死原因之一)。</li>
                                <li><strong>診斷：</strong>
                                    <br>1. <span class='exam-target'>India Ink stain (墨汁染色)</span>：腦脊髓液 (CSF) 鏡檢，背景黑，莢膜亮。
                                    <br>2. CrAg (抗原快篩)：測莢膜抗原。
                                </li>
                            </ul>
                        `
                    },
                    {
                        title: "Aspergillus fumigatus (薰煙麴菌)",
                        content: `
                            <ul>
                                <li><strong>型態：</strong>黴菌 (Mold)。具有 <span class='exam-target'>Septate hyphae (有隔膜菌絲)</span>。
                                    <br>特徵：菌絲呈 <span class='exam-target'>45° Acute angle branching (銳角分支)</span> (V字型)。<span class="bg-source-gb source-tag text-blue-800">[Gb] 1231 p.41</span>
                                </li>
                                <li><strong>疾病：</strong>
                                    <br>1. ABPA (過敏性支氣管肺麴菌病)：氣喘患者，IgE 升高。
                                    <br>2. Aspergilloma (黴菌球/Fungus ball)：生長在舊的肺結核空腔 (TB cavity) 中。
                                    <br>3. Invasive aspergillosis：免疫不全者，血管侵犯。
                                </li>
                                <li><strong>毒素：</strong>A. flavus 產生 <span class='exam-target'>Aflatoxin (黃麴毒素)</span>，導致肝細胞癌 (HCC)。</li>
                            </ul>
                        `
                    },
                    {
                        title: "Pneumocystis jirovecii (肺囊蟲)",
                        content: `
                            <ul>
                                <li><strong>分類：</strong>基因像黴菌，但細胞膜含 <span class='exam-target'>Cholesterol</span> (而非 Ergosterol)，故 Azoles 類藥物無效！</li>
                                <li><strong>疾病：</strong>PCP (Pneumocystis pneumonia)。<span class='exam-target'>AIDS 患者 (CD4 < 200)</span> 最常見的伺機性感染。
                                    <br>X光呈瀰漫性間質性肺炎 (Ground-glass / 毛玻璃狀)。
                                </li>
                                <li><strong>診斷：</strong>無法培養。支氣管沖洗液 (BAL) 做 <span class='exam-target'>Silver stain (銀染色)</span>，可見凹陷的囊體 (Cysts)。</li>
                                <li><strong>治療：</strong>首選 <span class='exam-target'>TMP-SMX</span> (Baktar)。</li>
                            </ul>
                        `
                    },
                    {
                        title: "Mucormycosis (毛黴菌病)",
                        content: `
                            <ul>
                                <li><strong>菌種：</strong>Rhizopus, Mucor (接合菌)。</li>
                                <li><strong>型態：</strong><span class='exam-target'>Aseptate (無隔膜)</span>，菌絲呈 <span class='exam-target'>90° Right angle branching (直角分支)</span>，寬大緞帶狀。</li>
                                <li><strong>高危險群：</strong><span class='exam-target'>Diabetic Ketoacidosis (DKA, 糖尿病酮酸中毒)</span> 患者。</li>
                                <li><strong>病程：</strong>Rhinocerebral (鼻腦型)。侵犯血管，導致黑色壞死 (Black eschar)，致死率極高。</li>
                            </ul>
                        `
                    }
                ]
            },
            'prion': {
                category: 'Prions',
                title: "普利昂蛋白 (Prions) [Updated]",
                family: "Proteinaceous Infectious Particle",
                color: "purple",
                tags: { genome: "Protein Only (No Nucleic Acid)", envelope: "N/A", disease: "CJD, Kuru, BSE" },
                quickFacts: [
                    { label: "致病元", val: "僅蛋白質 (無DNA/RNA)", src: "Lec" },
                    { label: "結構", val: "PrP<sup>Sc</sup> (<span class='exam-target'>Beta-sheet</span>)", src: "Gb p.5" },
                    { label: "病理", val: "<span class='exam-target'>Spongiform (海綿狀)</span>", src: "Txt" },
                    { label: "抗性", val: "極強 (耐熱/耐輻射/耐福馬林)", src: "Gb p.7" }
                ],
                sections: [
                    {
                        title: "結構與致病機轉 (Structure & Pathogenesis)",
                        content: `
                            <p><strong>定義：</strong>由 Stanley Prusiner 發現。是一種<strong>不含核酸 (No DNA/RNA)</strong> 的傳染性蛋白粒子。<span class="bg-source-lec source-tag text-pink-800">[Lec]</span></p>
                            <table class="w-full text-sm border border-gray-200 mt-2 mb-2">
                                <tr class="bg-gray-100"><th>特性</th><th>PrP<sup>C</sup> (正常)</th><th>PrP<sup>Sc</sup> (致病/Scrapie)</th></tr>
                                <tr><td><strong>結構</strong></td><td><span class='exam-target'>Alpha-helix</span> (螺旋)</td><td><span class='exam-target'>Beta-sheet</span> (板塊)</td></tr>
                                <tr><td><strong>蛋白酶敏感度</strong></td><td>Sensitive (易被分解)</td><td><span class='exam-target'>Resistant</span> (抗性/K區)</td></tr>
                                <tr><td><strong>溶解度</strong></td><td>Soluble (可溶)</td><td>Insoluble (不溶/形成沉澱)</td></tr>
                                <tr><td><strong>細胞位置</strong></td><td>細胞膜表面 (GIP anchor)</td><td>細胞質空泡 / 堆積</td></tr>
                            </table>
                            <p><strong>致病機轉：</strong><br>
                            致病型 <strong>PrP<sup>Sc</sup></strong> 接觸正常型 <strong>PrP<sup>C</sup></strong> 後，像「模板」一樣誘導正常蛋白發生<strong>構型改變 (Conformational change)</strong>，從 Alpha-helix 轉變為 Beta-sheet。大量錯誤折疊的蛋白堆積形成 <span class='exam-target'>Amyloid plaques (類澱粉斑塊)</span>，導致神經細胞死亡與空泡化。<span class="bg-source-gb source-tag text-blue-800">[Gb] p.5</span></p>
                            <p><strong>免疫反應：</strong><br>
                            因為 PrP 是宿主自身的蛋白，所以感染後<strong><span class='exam-target'>不會產生發炎反應 (No Inflammation)</span></strong>，亦<strong>無抗體 (No Antibody)</strong> 產生。</p>
                        `
                    },
                    {
                        title: "臨床疾病 (Clinical Diseases)",
                        content: `
                            <p>統稱為 <strong>傳染性海綿狀腦病變 (TSE)</strong>。特徵：潛伏期極長 (數年~數十年)、進行性痴呆 (Dementia)、運動失調 (Ataxia)、震顫 (Myoclonus)，最終死亡。<span class="bg-source-txt source-tag text-green-800">[Txt]</span></p>
                            <ul>
                               
				 <li><strong>Kuru (庫魯病)：</strong>
                                    <br>發現於新幾內亞 Fore 族。透過 <span class='exam-target'>Cannibalism (食人習俗)</span> 傳播，婦女與兒童吃死者腦部而感染。特徵為顫抖 (Shivering)。<span class="bg-source-lec source-tag text-pink-800">[Lec]</span>
                                </li>
                                <li><strong>CJD (庫賈氏症)：</strong>
                                    <ul class="list-[circle] pl-4 text-xs text-gray-500 mt-1">
                                        <li><strong>Sporadic (散發型)：</strong>最常見 (85%)，不明原因體細胞突變。</li>
                                        <li><strong>Iatrogenic (醫源型)：</strong>經由汙染的手術器械、角膜移植、或早期的 <span class='exam-target'>HGH (人類生長激素)</span> 注射感染。<span class="bg-source-gb source-tag text-blue-800">[Gb] p.4</span></li>
                                        <li><strong>Familial (家族型)：</strong>fCJD，遺傳性基因突變。</li>
                                    </ul>
                                </li>
                                <li><strong>vCJD (新型庫賈氏症)：</strong>
                                    <br>與 <span class='exam-target'>BSE (狂牛症)</span> 有關。食用受感染牛肉引起。發病年齡較輕 (平均 28 歲)，早期多為<strong>精神症狀</strong> (憂鬱、焦慮)，不同於典型 CJD 的早期失智。<span class="bg-source-gb source-tag text-blue-800">[Gb] p.6</span>
                                </li>
                                <li><strong>其他：</strong>GSS (運動失調為主)、FFI (致死性家族失眠症，視丘病變)。</li>
                            </ul>
                        `
                    },
                    {
                        title: "診斷與消毒 (Diagnosis & Control)",
                        content: `
                            <ul>
                                <li><strong>診斷：</strong>
                                    <br>1. 腦波圖 (EEG)。
                                    <br>2. 腦脊髓液 (CSF) 檢測 <span class='exam-target'>14-3-3 protein</span> (神經破壞標記)。
                                    <br>3. <span class='exam-target'>RT-QuIC</span> (即時震動誘導轉化)：高靈敏度偵測微量 PrP<sup>Sc</sup>。
                                    <br>4. 確診需靠腦部切片：可見 <span class='exam-target'>Spongiform change (海綿狀空泡)</span> 與 Amyloid plaques。<span class="bg-source-gb source-tag text-blue-800">[Gb] p.7</span>
                                </li>
                                <li><strong>消毒抗性 (Disinfection)：</strong>
                                    <br>Prions 對物理化學消毒劑具極強抗性！
                                    <br><i class="fas fa-exclamation-triangle text-red-500"></i> <strong>無效：</strong>福馬林 (Formalin)、紫外線 (UV)、酒精、一般高壓滅菌。
                                    <br><i class="fas fa-check-circle text-green-500"></i> <strong>有效：</strong>需使用 <span class='exam-target'>1N NaOH</span> 浸泡 + 高壓蒸氣滅菌 (Autoclave at 132°C for 1 hour)。<span class="bg-source-lec source-tag text-pink-800">[Lec]</span>
                                </li>
                            </ul>
                        `
                    }
                ]
            }
        };
};