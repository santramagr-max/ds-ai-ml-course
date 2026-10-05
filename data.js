// ============================================================
// COURSE DATA — Data Science, AI & Machine Learning
// Hindi primary explanations, English technical terms kept as-is
// ============================================================

const COURSE = {
  title: "Data Science, AI & Machine Learning",
  subtitle: "पूरा कोर्स — हिंदी में सीखें",
  modules: [
    {
      id: "m1",
      num: 1,
      title: "Data Science की बुनियादी बातें",
      icon: "M1",
      lessons: [
        {
          id: "1.1",
          title: "Data Science क्या है?",
          minutes: 8,
          content: [
            "Data Science एक ऐसा field है जिसमें हम बड़ी मात्रा में मौजूद Data से मतलब की बातें (insights) निकालते हैं, ताकि उनके आधार पर सही फैसले लिए जा सकें। इसमें Statistics, Programming और Domain Knowledge — तीनों का मेल होता है।",
            "एक Data Scientist का काम होता है Data इकट्ठा करना (collection), उसे साफ करना (cleaning), उसे समझना (analysis), और फिर उससे कोई Pattern या Prediction निकालना। यही Pattern कंपनियों को बेहतर Business Decisions लेने में मदद करते हैं।",
            "उदाहरण के लिए, Netflix आपकी Watch History के Data का इस्तेमाल करके यह Predict करता है कि आपको कौन-सी Movie पसंद आ सकती है। यही Data Science का असली Power है — Raw Data को Actionable Insight में बदलना।"
          ],
          keyPoints: [
            "Data Science = Statistics + Programming + Domain Knowledge",
            "मुख्य Steps: Collection → Cleaning → Analysis → Insight",
            "Real-world उदाहरण: Netflix, Amazon Recommendations, Google Maps"
          ],
          quiz: [
            {
              q: "Data Science में सबसे पहला Step कौन-सा होता है?",
              options: ["Model बनाना", "Data Collection", "Deployment", "Report लिखना"],
              answer: 1
            },
            {
              q: "Data Science किन तीन चीज़ों का मेल है?",
              options: [
                "Statistics, Programming, Domain Knowledge",
                "Marketing, Sales, Finance",
                "Hardware, Software, Network",
                "Design, Testing, Deployment"
              ],
              answer: 0
            }
          ]
        },
        {
          id: "1.2",
          title: "Data के प्रकार (Types of Data)",
          minutes: 7,
          content: [
            "Data मुख्य रूप से दो प्रकार का होता है — Structured Data और Unstructured Data। Structured Data वह होता है जो एक तय Format में होता है, जैसे Excel Sheet या Database की Table (rows और columns में)।",
            "Unstructured Data का कोई तय Format नहीं होता — जैसे Images, Videos, Audio Files, या Social Media के Text Posts। आजकल दुनिया का लगभग 80% Data Unstructured होता है, इसलिए इसे समझना एक बड़ी Challenge है।",
            "इसके अलावा Data को Categorical (जैसे Male/Female, Red/Blue) और Numerical (जैसे Age, Salary) में भी बांटा जाता है। Numerical Data आगे Discrete (गिनने वाला) और Continuous (मापने वाला) में divide होता है।"
          ],
          keyPoints: [
            "Structured Data: Rows-Columns में (Excel, SQL Database)",
            "Unstructured Data: Images, Video, Text, Audio",
            "Categorical vs Numerical Data का अंतर समझना ज़रूरी है"
          ],
          quiz: [
            {
              q: "एक Excel Sheet में मौजूद Data किस प्रकार का Data है?",
              options: ["Unstructured", "Structured", "Semi-structured", "Invalid"],
              answer: 1
            },
            {
              q: "Age और Salary जैसा Data किस Category में आता है?",
              options: ["Categorical", "Unstructured", "Numerical", "Boolean"],
              answer: 2
            }
          ]
        },
        {
          id: "1.3",
          title: "Statistics की बुनियादी बातें",
          minutes: 9,
          content: [
            "Statistics, Data Science की नींव (foundation) है। इसमें हम Data को समझने के लिए कुछ Basic Measures का इस्तेमाल करते हैं — जैसे Mean (औसत), Median (बीच की value), और Mode (सबसे ज़्यादा बार आने वाली value)।",
            "इसके अलावा Standard Deviation और Variance यह बताते हैं कि Data कितना फैला हुआ (spread) है — यानी सारी values Average के आस-पास हैं या बहुत दूर-दूर हैं।",
            "Probability भी Statistics का एक अहम हिस्सा है, जो यह बताती है कि कोई Event होने की संभावना कितनी है। Machine Learning के बहुत से Algorithms इसी Probability के सिद्धांत पर काम करते हैं।"
          ],
          keyPoints: [
            "Mean, Median, Mode — Data का केंद्र बताते हैं",
            "Standard Deviation — Data का फैलाव (spread) बताता है",
            "Probability, ML Algorithms की नींव है"
          ],
          quiz: [
            {
              q: "किसी Data Set की सबसे ज़्यादा बार आने वाली Value क्या कहलाती है?",
              options: ["Mean", "Median", "Mode", "Range"],
              answer: 2
            },
            {
              q: "Data कितना फैला हुआ है, यह किससे पता चलता है?",
              options: ["Mode", "Standard Deviation", "Median", "Sum"],
              answer: 1
            }
          ]
        },
        {
          id: "1.4",
          title: "Data Cleaning और EDA",
          minutes: 10,
          content: [
            "असली दुनिया का Data कभी भी Perfect नहीं होता — इसमें Missing Values, Duplicate Rows, और गलत Entries होती हैं। Data Cleaning वह Process है जिसमें हम इन गलतियों को ठीक करते हैं ताकि Analysis सही हो।",
            "Exploratory Data Analysis (EDA) वह Step है जहाँ हम Data को Visualize और Summarize करके यह समझते हैं कि उसमें कौन-से Patterns, Trends या Outliers छुपे हैं। इसके लिए Graphs, Histograms और Correlation जैसे Tools इस्तेमाल होते हैं।",
            "एक अच्छा Data Scientist अपने 60-70% समय सिर्फ Data Cleaning और EDA में ही लगाता है — क्योंकि 'Garbage In, Garbage Out': अगर Data गलत है, तो Model भी गलत ही Predict करेगा।"
          ],
          keyPoints: [
            "Data Cleaning: Missing Values, Duplicates ठीक करना",
            "EDA: Data को Visualize करके Pattern ढूंढना",
            "'Garbage In, Garbage Out' — साफ Data ही सही Result देता है"
          ],
          quiz: [
            {
              q: "एक Data Scientist अपना सबसे ज़्यादा समय किसमें लगाता है?",
              options: ["Model Deployment", "Data Cleaning और EDA", "Report Design", "Meeting"],
              answer: 1
            },
            {
              q: "'Garbage In, Garbage Out' का क्या मतलब है?",
              options: [
                "गलत Data से सही Result मिलता है",
                "गलत Data से गलत Result मिलता है",
                "Data की क्वालिटी मायने नहीं रखती",
                "यह एक Programming Error है"
              ],
              answer: 1
            }
          ]
        }
      ]
    },
    {
      id: "m2",
      num: 2,
      title: "Python for Data Science",
      icon: "M2",
      lessons: [
        {
          id: "2.1",
          title: "Python से परिचय",
          minutes: 8,
          content: [
            "Python, Data Science की दुनिया में सबसे ज़्यादा इस्तेमाल होने वाली Programming Language है। इसकी सरल Syntax और बड़ी Community की वजह से Beginners के लिए भी इसे सीखना आसान है।",
            "Data Science में हम मुख्य रूप से कुछ खास Libraries इस्तेमाल करते हैं — NumPy (Numerical Computing के लिए), Pandas (Data Analysis के लिए), Matplotlib/Seaborn (Visualization के लिए), और Scikit-learn (Machine Learning के लिए)।",
            "Python को हम Jupyter Notebook में लिखते हैं, जहाँ Code को छोटे-छोटे Cells में चलाकर तुरंत Result देख सकते हैं — यह Data Exploration के लिए बहुत सुविधाजनक है।"
          ],
          keyPoints: [
            "Python — Data Science की No. 1 Language",
            "Main Libraries: NumPy, Pandas, Matplotlib, Scikit-learn",
            "Jupyter Notebook — Code लिखने और Test करने का Tool"
          ],
          quiz: [
            {
              q: "Data Analysis के लिए कौन-सी Python Library सबसे ज़्यादा इस्तेमाल होती है?",
              options: ["Pandas", "Django", "Flask", "React"],
              answer: 0
            },
            {
              q: "Python Code को Cells में चलाने वाला Tool कौन-सा है?",
              options: ["Excel", "Jupyter Notebook", "Photoshop", "PowerPoint"],
              answer: 1
            }
          ]
        },
        {
          id: "2.2",
          title: "NumPy और Arrays",
          minutes: 9,
          content: [
            "NumPy (Numerical Python), बड़ी संख्या में Numbers पर तेज़ी से Calculation करने के लिए बनी Library है। इसका मुख्य Object है 'Array', जो Python की सामान्य List से बहुत तेज़ और Memory-efficient होता है।",
            "NumPy Arrays पर हम सीधे Mathematical Operations कर सकते हैं — जैसे दो Arrays को जोड़ना, गुणा करना, या Average निकालना — बिना किसी Loop के, सिर्फ एक Line में।",
            "Machine Learning के लगभग हर Algorithm के पीछे किसी न किसी रूप में NumPy Arrays ही काम कर रहे होते हैं, क्योंकि Data को Numbers के रूप में ही Store और Process किया जाता है।"
          ],
          keyPoints: [
            "NumPy Array — तेज़ और Memory-efficient Data Structure",
            "बिना Loop के सीधे Mathematical Operations संभव",
            "हर ML Algorithm के पीछे NumPy काम करता है"
          ],
          quiz: [
            {
              q: "NumPy का मुख्य Data Structure क्या कहलाता है?",
              options: ["List", "Array", "Dictionary", "Tuple"],
              answer: 1
            },
            {
              q: "NumPy Arrays, Python की सामान्य List से कैसे अलग हैं?",
              options: [
                "धीमे होते हैं",
                "तेज़ और Memory-efficient होते हैं",
                "केवल Text Store करते हैं",
                "कोई अंतर नहीं है"
              ],
              answer: 1
            }
          ]
        },
        {
          id: "2.3",
          title: "Pandas से Data Analysis",
          minutes: 10,
          content: [
            "Pandas, Data को Table के रूप में Handle करने की सबसे लोकप्रिय Library है। इसका मुख्य Object 'DataFrame' कहलाता है — जो बिल्कुल Excel Sheet जैसा दिखता है, यानी Rows और Columns में।",
            "Pandas की मदद से हम CSV या Excel Files को सीधे Load कर सकते हैं, Missing Values ढूंढ सकते हैं, Columns Filter कर सकते हैं, और Group बनाकर Summary निकाल सकते हैं (जैसे 'हर City का Average Sales')।",
            "यह Library Data Cleaning और EDA दोनों के लिए बहुत ज़रूरी है — असल में ज़्यादातर Data Scientists का रोज़ का काम Pandas Code लिखने से ही शुरू होता है।"
          ],
          keyPoints: [
            "DataFrame — Pandas का मुख्य Table-like Structure",
            "CSV/Excel Files सीधे Load और Analyze हो सकती हैं",
            "GroupBy से City/Category-wise Summary मिलती है"
          ],
          quiz: [
            {
              q: "Pandas में Table जैसा Data रखने वाला Object क्या कहलाता है?",
              options: ["Array", "DataFrame", "List", "Vector"],
              answer: 1
            },
            {
              q: "'हर City का Average Sales' निकालने के लिए किस Feature का इस्तेमाल होता है?",
              options: ["Sorting", "GroupBy", "Printing", "Looping"],
              answer: 1
            }
          ]
        },
        {
          id: "2.4",
          title: "Data Visualization",
          minutes: 8,
          content: [
            "Data Visualization का मतलब है Data को Graphs और Charts के ज़रिए दिखाना, ताकि Patterns और Trends आसानी से समझ आ सकें। एक अच्छा Graph, हज़ारों Numbers से ज़्यादा असरदार हो सकता है।",
            "Python में Matplotlib सबसे Basic Visualization Library है, जबकि Seaborn उसके ऊपर बनी एक और खूबसूरत तथा आसान Library है, जिससे Bar Chart, Line Chart, Histogram, और Heatmap जैसे Graphs जल्दी बनाए जा सकते हैं।",
            "सही Chart चुनना भी ज़रूरी है — जैसे Trend दिखाने के लिए Line Chart, Comparison के लिए Bar Chart, और Distribution समझने के लिए Histogram इस्तेमाल होता है।"
          ],
          keyPoints: [
            "Matplotlib — Basic Graphs की Library",
            "Seaborn — खूबसूरत और आसान Statistical Graphs",
            "सही Chart का चुनाव: Line (Trend), Bar (Comparison), Histogram (Distribution)"
          ],
          quiz: [
            {
              q: "Time के साथ किसी Value का Trend दिखाने के लिए कौन-सा Chart सही है?",
              options: ["Bar Chart", "Line Chart", "Pie Chart", "Scatter Only"],
              answer: 1
            },
            {
              q: "Matplotlib के ऊपर बनी Advanced Visualization Library कौन-सी है?",
              options: ["Seaborn", "Pandas", "NumPy", "Scikit-learn"],
              answer: 0
            }
          ]
        }
      ]
    },
    {
      id: "m3",
      num: 3,
      title: "Machine Learning",
      icon: "M3",
      lessons: [
        {
          id: "3.1",
          title: "Machine Learning का परिचय",
          minutes: 9,
          content: [
            "Machine Learning (ML), Artificial Intelligence की एक Branch है जिसमें हम Computer को सीधे Rules बताने के बजाय, उसे Data से खुद सीखने देते हैं। जैसे-जैसे Computer ज़्यादा Data देखता है, उसकी Predictions उतनी ही बेहतर होती जाती हैं।",
            "ML के तीन मुख्य प्रकार हैं — Supervised Learning (जहाँ Labeled Data से सीखा जाता है), Unsupervised Learning (जहाँ बिना Labels के Patterns ढूंढे जाते हैं), और Reinforcement Learning (जहाँ Trial-and-Error से सीखा जाता है, जैसे कोई Game खेलना)।",
            "उदाहरण के लिए, Spam Email Detection एक Supervised Learning Problem है, जबकि Customer Segmentation (ग्राहकों को Groups में बाँटना) एक Unsupervised Learning Problem है।"
          ],
          keyPoints: [
            "ML = Data से खुद सीखने वाला System",
            "तीन प्रकार: Supervised, Unsupervised, Reinforcement Learning",
            "उदाहरण: Spam Detection (Supervised), Customer Segmentation (Unsupervised)"
          ],
          quiz: [
            {
              q: "Labeled Data से सीखने वाली ML को क्या कहते हैं?",
              options: ["Unsupervised Learning", "Supervised Learning", "Deep Learning", "Reinforcement Learning"],
              answer: 1
            },
            {
              q: "Spam Email Detection किस प्रकार की Problem है?",
              options: ["Unsupervised", "Reinforcement", "Supervised", "Clustering"],
              answer: 2
            }
          ]
        },
        {
          id: "3.2",
          title: "Supervised Learning: Regression",
          minutes: 10,
          content: [
            "Regression, Supervised Learning का वह प्रकार है जिसमें हम एक Continuous Number Predict करते हैं — जैसे किसी घर की Price, किसी Student का Marks, या कल का Temperature।",
            "सबसे सरल Algorithm है Linear Regression, जो Data में से एक ऐसी 'सीधी रेखा' (best-fit line) ढूंढता है जो सभी Points के सबसे करीब से गुज़रे। इस Line के ज़रिए ही नए Data Points के लिए Prediction की जाती है।",
            "Regression Model कितना अच्छा है, यह जांचने के लिए हम Error Metrics इस्तेमाल करते हैं, जैसे Mean Squared Error (MSE) — जो Actual और Predicted Value के बीच के अंतर को मापता है।"
          ],
          keyPoints: [
            "Regression — Continuous Value (जैसे Price) Predict करता है",
            "Linear Regression — Best-fit Line ढूंढने वाला Algorithm",
            "MSE जैसे Error Metrics से Model की Accuracy जांची जाती है"
          ],
          quiz: [
            {
              q: "घर की Price Predict करना किस प्रकार की Problem है?",
              options: ["Classification", "Regression", "Clustering", "Reinforcement"],
              answer: 1
            },
            {
              q: "Linear Regression क्या ढूंढता है?",
              options: ["Best-fit Line", "Random Cluster", "Decision Tree", "Image Filter"],
              answer: 0
            }
          ]
        },
        {
          id: "3.3",
          title: "Supervised Learning: Classification",
          minutes: 10,
          content: [
            "Classification, Regression से अलग है — इसमें हम एक Continuous Number नहीं, बल्कि एक Category या Class Predict करते हैं, जैसे Email 'Spam' है या 'Not Spam', या कोई Tumor 'Benign' है या 'Malignant'।",
            "इसके लिए कई Algorithms इस्तेमाल होते हैं — Logistic Regression, Decision Tree, Random Forest, और Support Vector Machine (SVM)। हर Algorithm का अपना तरीका है Data को अलग-अलग Classes में बांटने का।",
            "Classification Model की Accuracy जांचने के लिए हम Confusion Matrix का इस्तेमाल करते हैं, जो यह दिखाता है कि Model ने कितनी बार सही और कितनी बार गलत Prediction की।"
          ],
          keyPoints: [
            "Classification — Category/Class Predict करता है (Spam vs Not Spam)",
            "Common Algorithms: Logistic Regression, Decision Tree, Random Forest, SVM",
            "Confusion Matrix से सही/गलत Predictions का पता चलता है"
          ],
          quiz: [
            {
              q: "'Email Spam है या नहीं' — यह किस प्रकार की Problem है?",
              options: ["Regression", "Classification", "Clustering", "Dimensionality Reduction"],
              answer: 1
            },
            {
              q: "Model की सही/गलत Predictions दिखाने वाला Tool क्या है?",
              options: ["Confusion Matrix", "Linear Graph", "Histogram", "Pie Chart"],
              answer: 0
            }
          ]
        },
        {
          id: "3.4",
          title: "Unsupervised Learning: Clustering",
          minutes: 8,
          content: [
            "Unsupervised Learning में Data के पास कोई Label नहीं होता — Model को खुद ही Data में छुपे हुए Groups या Patterns ढूंढने होते हैं। इसका सबसे आम इस्तेमाल है Clustering।",
            "Clustering का मतलब है Data Points को ऐसे Groups (Clusters) में बांटना जहाँ एक Group के अंदर के Points आपस में मिलते-जुलते हों, लेकिन अलग-अलग Groups एक-दूसरे से अलग हों।",
            "सबसे लोकप्रिय Algorithm है K-Means, जो Data को K संख्या के Clusters में बांटता है। इसका इस्तेमाल Customer Segmentation, जैसे 'High Spenders' और 'Budget Shoppers' को अलग करने में होता है।"
          ],
          keyPoints: [
            "Unsupervised Learning — बिना Labels के सीखता है",
            "Clustering — मिलते-जुलते Data Points को Group करना",
            "K-Means — सबसे Popular Clustering Algorithm"
          ],
          quiz: [
            {
              q: "Clustering किस प्रकार की Learning है?",
              options: ["Supervised", "Unsupervised", "Reinforcement", "Deep Learning"],
              answer: 1
            },
            {
              q: "Customer Segmentation के लिए कौन-सा Algorithm सबसे Popular है?",
              options: ["K-Means", "Linear Regression", "Logistic Regression", "Decision Tree"],
              answer: 0
            }
          ]
        },
        {
          id: "3.5",
          title: "Model Evaluation",
          minutes: 9,
          content: [
            "कोई भी ML Model बनाने के बाद यह जांचना बहुत ज़रूरी है कि वह कितना अच्छा काम कर रहा है। इसके लिए हम Data को दो हिस्सों में बांटते हैं — Training Data (जिससे Model सीखता है) और Testing Data (जिस पर Model को टेस्ट किया जाता है)।",
            "Classification Models के लिए हम Accuracy, Precision, Recall, और F1-Score जैसे Metrics देखते हैं। सिर्फ Accuracy देखना कभी-कभी भ्रामक (misleading) हो सकता है, खासकर जब Data असंतुलित (imbalanced) हो।",
            "एक और आम समस्या है Overfitting — जब Model Training Data को इतना ज़्यादा 'रट' लेता है कि नए Data पर सही Prediction नहीं कर पाता। इससे बचने के लिए Cross-Validation जैसी Techniques इस्तेमाल होती हैं।"
          ],
          keyPoints: [
            "Data को Training और Testing हिस्सों में बांटा जाता है",
            "Metrics: Accuracy, Precision, Recall, F1-Score",
            "Overfitting से बचने के लिए Cross-Validation ज़रूरी है"
          ],
          quiz: [
            {
              q: "Model को सीखने के लिए दिया गया Data क्या कहलाता है?",
              options: ["Testing Data", "Training Data", "Validation Only", "Junk Data"],
              answer: 1
            },
            {
              q: "जब Model सिर्फ Training Data को 'रट' लेता है, उसे क्या कहते हैं?",
              options: ["Underfitting", "Overfitting", "Regression", "Clustering"],
              answer: 1
            }
          ]
        }
      ]
    },
    {
      id: "m4",
      num: 4,
      title: "Artificial Intelligence & Deep Learning",
      icon: "M4",
      lessons: [
        {
          id: "4.1",
          title: "AI का परिचय",
          minutes: 8,
          content: [
            "Artificial Intelligence (AI) वह Broad Field है जिसका लक्ष्य है Computers को इंसानों जैसी 'बुद्धिमत्ता' देना — जैसे सोचना, सीखना, समझना, और फैसले लेना। Machine Learning, AI का ही एक हिस्सा है।",
            "AI को हम मोटे तौर पर दो हिस्सों में बांट सकते हैं — Narrow AI (जो एक खास काम में माहिर होता है, जैसे Face Recognition या Chess खेलना) और General AI (जो इंसानों जैसी हर तरह की Intelligence रखता हो — जो अभी तक पूरी तरह हासिल नहीं हुआ है)।",
            "आजकल जो भी AI हम रोज़ इस्तेमाल करते हैं — जैसे Siri, Google Assistant, या ChatGPT — वे सब Narrow AI के उदाहरण हैं, चाहे वे कितने भी Powerful क्यों न लगें।"
          ],
          keyPoints: [
            "AI = इंसानों जैसी बुद्धिमत्ता देने की कोशिश",
            "ML, AI का ही एक हिस्सा (subset) है",
            "Narrow AI (आज मौजूद) vs General AI (अभी तक नहीं बना)"
          ],
          quiz: [
            {
              q: "Machine Learning का AI से क्या संबंध है?",
              options: ["ML, AI से बड़ा है", "ML, AI का हिस्सा है", "दोनों अलग हैं", "कोई संबंध नहीं"],
              answer: 1
            },
            {
              q: "Siri और ChatGPT किस Category के AI में आते हैं?",
              options: ["General AI", "Narrow AI", "Super AI", "Fictional AI"],
              answer: 1
            }
          ]
        },
        {
          id: "4.2",
          title: "Neural Networks",
          minutes: 10,
          content: [
            "Neural Network एक ऐसा Model है जो इंसानी दिमाग के Neurons से Inspire होकर बनाया गया है। इसमें कई 'Layers' होती हैं — Input Layer, एक या ज़्यादा Hidden Layers, और एक Output Layer।",
            "हर Layer में कई 'Nodes' (या Neurons) होते हैं, जो आपस में Connections के ज़रिए जुड़े होते हैं। हर Connection का एक 'Weight' होता है, जो यह तय करता है कि एक Neuron दूसरे को कितना Influence करेगा।",
            "Training के दौरान, Network बार-बार अपने Weights को Adjust करता है (एक Process जिसे Backpropagation कहते हैं) ताकि उसकी Predictions धीरे-धीरे सही होती जाएं।"
          ],
          keyPoints: [
            "Neural Network — इंसानी दिमाग से Inspired Model",
            "Layers: Input → Hidden → Output",
            "Backpropagation से Weights Adjust होते हैं"
          ],
          quiz: [
            {
              q: "Neural Network किससे Inspire होकर बनाया गया है?",
              options: ["Computer Chips", "इंसानी दिमाग", "Traffic Signal", "Calculator"],
              answer: 1
            },
            {
              q: "Weights को Adjust करने वाली Process क्या कहलाती है?",
              options: ["Clustering", "Backpropagation", "Regression", "Sorting"],
              answer: 1
            }
          ]
        },
        {
          id: "4.3",
          title: "Deep Learning और CNN",
          minutes: 9,
          content: [
            "Deep Learning, Neural Networks का ही एक Advanced Version है, जिसमें बहुत सारी Hidden Layers होती हैं ('Deep' शब्द इसी वजह से इस्तेमाल होता है)। ज़्यादा Layers होने से Model ज़्यादा Complex Patterns सीख पाता है।",
            "Images के काम के लिए एक खास तरह का Deep Learning Model इस्तेमाल होता है — Convolutional Neural Network (CNN)। यह Image में मौजूद Edges, Shapes, और Objects को पहचानने में माहिर होता है।",
            "CNN का इस्तेमाल आजकल Face Recognition, Self-Driving Cars, और Medical Image Analysis (जैसे X-Ray में बीमारी पहचानना) जैसी बहुत सी जगहों पर होता है।"
          ],
          keyPoints: [
            "Deep Learning = बहुत सारी Hidden Layers वाला Neural Network",
            "CNN — Images समझने के लिए खास बनाया गया Model",
            "Uses: Face Recognition, Self-Driving Cars, Medical Imaging"
          ],
          quiz: [
            {
              q: "Images को समझने के लिए कौन-सा Model सबसे उपयुक्त है?",
              options: ["Linear Regression", "CNN", "K-Means", "Decision Tree"],
              answer: 1
            },
            {
              q: "'Deep' Learning में 'Deep' शब्द किस वजह से इस्तेमाल होता है?",
              options: [
                "ज़्यादा Data की वजह से",
                "बहुत सारी Hidden Layers की वजह से",
                "तेज़ Speed की वजह से",
                "कम Memory Usage की वजह से"
              ],
              answer: 1
            }
          ]
        },
        {
          id: "4.4",
          title: "Natural Language Processing (NLP)",
          minutes: 9,
          content: [
            "Natural Language Processing (NLP), AI की वह Branch है जो Computers को इंसानी भाषा (जैसे Hindi या English) को समझने, Process करने, और Generate करने में सक्षम बनाती है।",
            "NLP के आम Applications में शामिल हैं — Language Translation (जैसे Google Translate), Sentiment Analysis (यह जानना कि कोई Review Positive है या Negative), और Chatbots।",
            "आजकल के सबसे Advanced NLP Models 'Large Language Models' (LLMs) कहलाते हैं — जैसे GPT और Claude — जो Transformer नाम की एक खास Architecture पर आधारित होते हैं, और बहुत बड़ी मात्रा में Text Data से Train किए जाते हैं।"
          ],
          keyPoints: [
            "NLP — Computer को इंसानी भाषा समझाने की Technology",
            "Applications: Translation, Sentiment Analysis, Chatbots",
            "LLMs (जैसे GPT, Claude) — Transformer Architecture पर आधारित"
          ],
          quiz: [
            {
              q: "Google Translate किस Technology का उदाहरण है?",
              options: ["Computer Vision", "NLP", "Clustering", "Regression"],
              answer: 1
            },
            {
              q: "आजकल के Advanced NLP Models किस Architecture पर आधारित होते हैं?",
              options: ["CNN", "K-Means", "Transformer", "Decision Tree"],
              answer: 2
            }
          ]
        }
      ]
    },
    {
      id: "m5",
      num: 5,
      title: "SQL for Data Science",
      icon: "M5",
      lessons: [
        {
          id: "5.1",
          title: "SQL और Database का परिचय",
          minutes: 8,
          content: [
            "SQL (Structured Query Language) वह भाषा है जिससे हम Databases से Data को Request, Filter, और Manage करते हैं। लगभग हर कंपनी का Data किसी न किसी Database में Tables के रूप में Store होता है।",
            "एक Database में कई Tables हो सकती हैं, और हर Table Rows (records) और Columns (fields) से बनी होती है — बिल्कुल Excel Sheet जैसी, लेकिन बहुत बड़े पैमाने पर और तेज़ी से Query होने वाली।",
            "Data Scientist के लिए SQL सीखना ज़रूरी है क्योंकि Model Training से पहले ज़्यादातर Data कंपनी के Database से SQL Query के ज़रिए ही निकाला जाता है।"
          ],
          keyPoints: [
            "SQL — Database से Data निकालने की Standard भाषा",
            "Database में Tables, Tables में Rows और Columns",
            "Real Data अक्सर SQL Query से ही मिलता है, Excel से नहीं"
          ],
          quiz: [
            {
              q: "SQL का इस्तेमाल किसलिए होता है?",
              options: ["Image Editing", "Database से Data निकालने के लिए", "Video Streaming", "Website Design"],
              answer: 1
            },
            {
              q: "एक Table किन दो चीज़ों से बनी होती है?",
              options: ["Rows और Columns", "Charts और Graphs", "Pixels और Frames", "Nodes और Edges"],
              answer: 0
            }
          ]
        },
        {
          id: "5.2",
          title: "SELECT और WHERE — Data Filter करना",
          minutes: 9,
          content: [
            "SQL में सबसे पहला और सबसे ज़्यादा इस्तेमाल होने वाला Command है SELECT, जिससे हम किसी Table से चुने हुए Columns को निकालते हैं — जैसे 'SELECT name, age FROM customers'।",
            "WHERE Clause से हम Condition के आधार पर Rows को Filter कर सकते हैं — जैसे 'WHERE age > 25' का मतलब है सिर्फ वही Customers दिखाओ जिनकी Age 25 से ज़्यादा है।",
            "ORDER BY से हम Result को किसी Column के हिसाब से Sort कर सकते हैं, और LIMIT से यह तय कर सकते हैं कि सिर्फ शुरुआती कितनी Rows चाहिए।"
          ],
          keyPoints: [
            "SELECT — चुने हुए Columns निकालने के लिए",
            "WHERE — Condition के आधार पर Rows Filter करने के लिए",
            "ORDER BY और LIMIT — Sorting और Result सीमित करने के लिए"
          ],
          quiz: [
            {
              q: "किसी Condition के आधार पर Rows Filter करने के लिए कौन-सा Clause इस्तेमाल होता है?",
              options: ["SELECT", "WHERE", "ORDER BY", "LIMIT"],
              answer: 1
            },
            {
              q: "Result को किसी Column के अनुसार Sort करने के लिए क्या इस्तेमाल होता है?",
              options: ["GROUP BY", "WHERE", "ORDER BY", "JOIN"],
              answer: 2
            }
          ]
        },
        {
          id: "5.3",
          title: "GROUP BY और Aggregate Functions",
          minutes: 8,
          content: [
            "Aggregate Functions जैसे COUNT, SUM, AVG, MIN, और MAX किसी Column पर Calculation करके एक ही Value लौटाते हैं — जैसे 'कुल कितने Customers हैं' या 'Average Order Value क्या है'।",
            "GROUP BY Clause से हम Data को किसी Column के आधार पर Groups में बांटकर, हर Group के लिए अलग-अलग Aggregate निकाल सकते हैं — जैसे 'हर City के लिए Total Sales'।",
            "यह Combination — GROUP BY के साथ Aggregate Functions — Business Reporting और Dashboard बनाने में सबसे ज़्यादा इस्तेमाल होता है।"
          ],
          keyPoints: [
            "Aggregate Functions: COUNT, SUM, AVG, MIN, MAX",
            "GROUP BY — Data को Categories में बांटकर Summary निकालना",
            "यह Combination Business Reports की नींव है"
          ],
          quiz: [
            {
              q: "'हर City का Total Sales' निकालने के लिए किस Clause की ज़रूरत होगी?",
              options: ["ORDER BY", "GROUP BY", "WHERE", "LIMIT"],
              answer: 1
            },
            {
              q: "इनमें से कौन-सा एक Aggregate Function नहीं है?",
              options: ["SUM", "AVG", "SELECT", "COUNT"],
              answer: 2
            }
          ]
        },
        {
          id: "5.4",
          title: "JOIN — कई Tables को जोड़ना",
          minutes: 9,
          content: [
            "असली Databases में Data एक ही Table में नहीं, बल्कि कई अलग-अलग Tables में फैला होता है — जैसे एक Table में Customers की जानकारी, और दूसरी Table में उनके Orders। JOIN से हम इन Tables को आपस में जोड़ते हैं।",
            "सबसे आम है INNER JOIN, जो सिर्फ वही Rows लौटाता है जो दोनों Tables में Match करती हैं। LEFT JOIN में पहली Table की सारी Rows आती हैं, चाहे दूसरी Table में Match मिले या नहीं।",
            "JOIN को समझना Data Scientist के लिए बहुत ज़रूरी Skill है, क्योंकि Real-world Analysis के लिए लगभग हमेशा कई Tables का Data जोड़ना पड़ता है।"
          ],
          keyPoints: [
            "JOIN — कई Tables का Data आपस में जोड़ने के लिए",
            "INNER JOIN — सिर्फ Matching Rows लौटाता है",
            "LEFT JOIN — पहली Table की सभी Rows, चाहे Match मिले या नहीं"
          ],
          quiz: [
            {
              q: "सिर्फ Matching Rows लौटाने वाला JOIN कौन-सा है?",
              options: ["LEFT JOIN", "INNER JOIN", "GROUP BY", "ORDER BY"],
              answer: 1
            },
            {
              q: "JOIN का इस्तेमाल कब करते हैं?",
              options: [
                "जब Data एक ही Table में हो",
                "जब कई Tables का Data जोड़ना हो",
                "जब Graph बनाना हो",
                "जब File Save करनी हो"
              ],
              answer: 1
            }
          ]
        }
      ]
    },
    {
      id: "m6",
      num: 6,
      title: "Model Deployment & AI Ethics",
      icon: "M6",
      lessons: [
        {
          id: "6.1",
          title: "Model Deployment क्या है?",
          minutes: 8,
          content: [
            "एक ML Model को Jupyter Notebook में बनाना सिर्फ आधा काम है — असली Value तब मिलती है जब वह Model Real Users तक पहुँचे। इसी Process को Model Deployment कहते हैं।",
            "आम तरीका है Model को एक API के रूप में Deploy करना (जैसे Flask या FastAPI का इस्तेमाल करके), ताकि कोई भी App उस API को Call करके तुरंत Prediction ले सके।",
            "Deployment के बाद भी काम खत्म नहीं होता — Model को लगातार Monitor करना पड़ता है, क्योंकि समय के साथ नया Data आने पर उसकी Accuracy घट सकती है, जिसे Model Drift कहते हैं।"
          ],
          keyPoints: [
            "Deployment — Model को Real Users तक पहुँचाने की Process",
            "आम तरीका: Model को API के रूप में Serve करना",
            "Model Drift — समय के साथ Accuracy घटने की समस्या"
          ],
          quiz: [
            {
              q: "Model को Real Users तक पहुँचाने की Process क्या कहलाती है?",
              options: ["Training", "Deployment", "Cleaning", "Labeling"],
              answer: 1
            },
            {
              q: "समय के साथ Model की Accuracy घटने की समस्या को क्या कहते हैं?",
              options: ["Overfitting", "Model Drift", "Underfitting", "Clustering"],
              answer: 1
            }
          ]
        },
        {
          id: "6.2",
          title: "AI में Bias और Fairness",
          minutes: 9,
          content: [
            "AI Model उतना ही अच्छा या बुरा होता है जितना उसे सिखाया गया Data। अगर Training Data में किसी Group के प्रति पहले से कोई पूर्वाग्रह (bias) मौजूद है, तो Model भी वही Bias सीख लेगा — इसे Algorithmic Bias कहते हैं।",
            "उदाहरण के लिए, अगर किसी Hiring Model को सिर्फ पुराने, असंतुलित Resume Data पर Train किया जाए, तो वह किसी खास Gender या Background के Candidates को अनुचित रूप से कम Score दे सकता है।",
            "इसीलिए Fairness Testing, Diverse Training Data, और Human Oversight — ये सभी एक ज़िम्मेदार (responsible) AI System बनाने के ज़रूरी हिस्से हैं।"
          ],
          keyPoints: [
            "Algorithmic Bias — Training Data के पूर्वाग्रह से आता है",
            "गलत Bias वाला Model अनुचित Decisions ले सकता है",
            "Fairness Testing और Diverse Data — Responsible AI की कुंजी"
          ],
          quiz: [
            {
              q: "Algorithmic Bias कहाँ से आता है?",
              options: ["Random Chance से", "Training Data के पूर्वाग्रह से", "Internet Speed से", "Hardware से"],
              answer: 1
            },
            {
              q: "Responsible AI बनाने के लिए क्या ज़रूरी है?",
              options: ["सिर्फ ज़्यादा Data", "Fairness Testing और Diverse Data", "तेज़ Internet", "बड़ा Screen"],
              answer: 1
            }
          ]
        },
        {
          id: "6.3",
          title: "Data Privacy और Responsible AI",
          minutes: 8,
          content: [
            "ML Models अक्सर लोगों की Personal Information पर Train होते हैं — जैसे Health Records, Financial Data, या Browsing History। इसलिए Data Privacy बनाए रखना एक Legal और Ethical दोनों तरह की ज़िम्मेदारी है।",
            "Techniques जैसे Data Anonymization (नाम, पहचान हटाना) और Differential Privacy का इस्तेमाल करके हम Model को बिना किसी व्यक्ति विशेष की पहचान उजागर किए Train कर सकते हैं।",
            "एक अच्छा Data Scientist हमेशा यह सोचता है — 'क्या यह Model किसी को नुकसान पहुँचा सकता है?' — और Explainability (Model का फैसला क्यों लिया, यह समझा पाना) को भी उतना ही महत्व देता है जितना Accuracy को।"
          ],
          keyPoints: [
            "Personal Data पर Train होने वाले Models की Privacy ज़रूरी है",
            "Anonymization और Differential Privacy — Privacy Protect करने की Techniques",
            "Explainability — Model का फैसला समझा पाना, जितना ज़रूरी है Accuracy जितना"
          ],
          quiz: [
            {
              q: "नाम और पहचान हटाकर Data को सुरक्षित बनाने की Technique क्या कहलाती है?",
              options: ["Overfitting", "Anonymization", "Clustering", "Regression"],
              answer: 1
            },
            {
              q: "Model का फैसला क्यों लिया गया, यह समझ पाने की क्षमता क्या कहलाती है?",
              options: ["Explainability", "Bias", "Drift", "Aggregation"],
              answer: 0
            }
          ]
        }
      ]
    }
  ]
};
