# Data Science, AI & Machine Learning — App

एक पूरा offline course — Data Science, Python, SQL, Machine Learning, और
AI/Deep Learning + Ethics — हिंदी में समझाया गया, technical terms English में।

इसे Windows Desktop App, असली `.exe`, और Mobile App — तीनों तरीकों से चलाया
जा सकता है।

---

## ⚠️ एक ईमानदार बात (Important note)

इस Package में **कोई pre-compiled `.exe` या `.apk` नहीं है**, क्योंकि यह
मुझे एक ऐसे sandbox environment में बनाना पड़ा जिसमें Windows OS नहीं है और
Internet access भी नहीं है (Android/Windows build tools download करने के
लिए यह ज़रूरी होते हैं)। असली compiled binary बनाने का काम असली OS पर ही
हो सकता है।

इसीलिए मैंने `.exe` बनाने के लिए एक **automatic Build script** (`Build-EXE.bat`)
दिया है — इसे अपने Windows PC पर एक बार चलाएंगे (सिर्फ Python + Internet
चाहिए), और यह खुद एक असली `DS-AI-ML-Course.exe` बना देगा। और Mobile के लिए,
इसी App को Phone के Browser से "Install" किया जा सकता है — जो असली Android
App जैसा ही Icon और Experience देता है, बिना किसी APK के।

---

## 1️⃣ Windows Desktop App (App जैसा, बिना install किए)

`Start-App.bat` पर double-click करें → local server शुरू होगा → Browser
अपने आप खुलेगा → address bar के पास **⊕ Install** icon पर click करें →
अब यह Desktop, Start Menu और Taskbar में एक अलग App जैसा दिखेगा, Offline
भी काम करेगा।

## 2️⃣ असली `.exe` फ़ाइल बनाना

1. अपने Windows PC पर [python.org](https://python.org) से Python install
   करें (Install करते वक़्त **"Add python.exe to PATH"** ज़रूर check करें) —
   अगर Python पहले से है तो यह Step छोड़ दें।
2. इस folder में **`Build-EXE.bat`** पर double-click करें।
3. 30-60 सेकंड में यह अपने आप PyInstaller install करके
   **`DS-AI-ML-Course.exe`** बना देगा (इसी folder में)।
4. अब उस `.exe` पर double-click करते ही App चल जाएगा — दोबारा Python या
   Internet की ज़रूरत नहीं पड़ेगी। इसे कहीं भी copy करके चला सकते हैं
   (बाकी files — icon-*.png, index.html, आदि — उसी folder में साथ रखें
   या नहीं भी, `.exe` के अंदर वो सब already bundled हैं)।

## 3️⃣ Mobile App (Android/iPhone)

1. पहले Windows PC पर `Start-App.bat` चलाएं (या बनाई हुई `DS-AI-ML-Course.exe`)।
2. Terminal window में आपको एक ऐसा address दिखेगा:
   `Mobile/Phone se (same WiFi par): http://192.168.x.x:8843/`
3. अपने Phone को **उसी WiFi Network** से जोड़ें, Browser (Chrome) खोलें,
   और वही address type करें।
4. Chrome Menu (⋮) में **"Add to Home Screen"** या **"Install App"** दबाएं।
5. अब App आपके Phone के Home Screen पर एक असली Icon के साथ दिखेगा, अपनी
   window में खुलेगा (बिना Browser bar के) — बिल्कुल Play Store App जैसा।

> अगर Mobile वाला Address terminal में नहीं दिखे, तो `Serve.ps1` को
> Right-click → **"Run as administrator"** करके चलाएं (LAN Access के लिए
> Windows को कभी-कभी Admin permission चाहिए होती है)।

## 4️⃣ बिना Install किए, तुरंत चलाने का तरीका

सीधे **`DS-AI-ML-Course.html`** पर double-click करें — एक single
self-contained file, Browser tab में खुल जाएगा (Install/Certificate की
सुविधा नहीं, बाकी सब वैसे ही काम करता है)।

---

## Features

- **6 Modules, 24 Lessons**: Data Science Basics · Python · Machine Learning ·
  AI & Deep Learning · SQL · Model Deployment & AI Ethics
- हर lesson में content + Key Points + Quiz
- **Progress Tracking** (Browser Storage में save)
- Dashboard पर Neural-Network-style progress visual
- **🎮 Gamification** — हर lesson/quiz पर **XP**, XP के आधार पर **Level**
  (शुरुआती → सीखने वाला → Explorer → Pro → Master), रोज़ाना use करने पर
  **Streak 🔥**, और हर Module पूरा करने पर **Badge 🏅**
- **Certificate** — सभी lessons complete करने पर Print/PDF certificate
- Desktop App + Mobile App दोनों के रूप में Installable
- पूरी तरह Mobile-responsive

## Files

| File | काम |
|---|---|
| `Start-App.bat` | Desktop App install + Mobile के लिए local server शुरू करता है |
| `Build-EXE.bat` | असली `DS-AI-ML-Course.exe` बनाता है (एक बार Python चाहिए) |
| `launcher.py` | `.exe` के अंदर चलने वाला Python source |
| `Serve.ps1` | `Start-App.bat` के पीछे चलने वाला server (Windows built-in) |
| `manifest.json`, `sw.js`, `icon-*.png` | App को Installable बनाने वाली files |
| `index.html`, `style.css`, `data.js`, `app.js` | मुख्य App code |
| `DS-AI-ML-Course.html` | बिना Install किए चलाने वाला single-file version |
| `Start-Course.bat` | उसी single-file को सीधे Browser में खोलने वाला shortcut |

## नया Content जोड़ना (Extending)

`data.js` खोलें और `COURSE.modules` array में नया module/lesson जोड़ें —
बाकी सब अपने आप update हो जाएगा। बदलाव के बाद `Build-EXE.bat` दोबारा
चलाकर नई `.exe` बना सकते हैं।
