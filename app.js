const $ = (selector) => document.querySelector(selector);

const siteCopy = {
  hi: {
    "Site language":"साइट की भाषा", "WORKSPACE":"कार्यस्थान", "CONTENT STUDIO":"कंटेंट स्टूडियो", "Content studio":"कंटेंट स्टूडियो", "Brand profile":"ब्रांड प्रोफ़ाइल", "Sample library":"नमूना संग्रह", "Local workspace":"स्थानीय कार्यस्थान", "Four audience types · saved voices":"चार दर्शक प्रकार · सहेजी गई आवाज़ें", "Voice profiles":"आवाज़ प्रोफ़ाइल", "NGO · Business · Creator · Product":"गैर-लाभकारी · व्यवसाय · क्रिएटर · उत्पाद", "READY":"तैयार", "Skip setup":"सेटअप छोड़ें", "MAKE EVERY WORD SOUND LIKE YOU":"हर शब्द को अपनी आवाज़ दें", "Find your voice.":"अपनी आवाज़ खोजें।", "Keep it yours.":"इसे अपनी पहचान बनाए रखें।", "One idea, shaped by the way your brand already speaks.":"एक विचार, आपकी ब्रांड की अपनी बोलचाल में।", "CONTENT":"कंटेंट", "VOICE":"आवाज़", "STUDIO":"स्टूडियो", "YOUR IDEA":"आपका विचार", "Shape the draft":"ड्राफ़्ट तैयार करें", "SPEAK OR TYPE · ENGLISH · हिन्दी · ಕನ್ನಡ":"बोलें या लिखें · English · हिन्दी · ಕನ್ನಡ", "Type your idea below, or use Speak to dictate it.":"अपना विचार नीचे लिखें या बोलकर दर्ज करें।", "Speak":"बोलें", "Stop & add text":"रोकें और टेक्स्ट जोड़ें", "Clear last":"आख़िरी मिटाएँ", "What do you want to say?":"आप क्या कहना चाहते हैं?", "Speech language · choose what you’re speaking":"बोली जाने वाली भाषा चुनें", "Auto-detect · slower":"अपने-आप पहचानें · धीमा", "English":"English", "Hindi":"हिन्दी", "Kannada":"ಕನ್ನಡ", "Kannada · faster":"ಕನ್ನಡ · तेज़", "Voice quality":"पहचान की गुणवत्ता", "Judge accuracy · recommended":"बेहतर पहचान · सुझाया गया", "Fast live":"तेज़", "Live brief checklist":"ब्रीफ़ की सूची", "Mapped from your words":"आपके शब्दों से निकाला गया", "Platform":"प्लेटफ़ॉर्म", "Write in":"इस भाषा में लिखें", "Draft length":"ड्राफ़्ट की लंबाई", "20 words":"20 शब्द", "300 words":"300 शब्द", "Audience, campaign goal and voice":"दर्शक, अभियान का लक्ष्य और आवाज़", "More controls":"और विकल्प", "Optional keyword":"वैकल्पिक कीवर्ड", "Keyword context":"कीवर्ड का संदर्भ", "GOOGLE TRENDS · PAST 12 MONTHS":"GOOGLE TRENDS · पिछले 12 महीने", "Search ideas for this brief":"इस ब्रीफ़ के लिए खोज सुझाव", "Find ideas":"सुझाव खोजें", "Region":"क्षेत्र", "India":"भारत", "United States":"संयुक्त राज्य", "United Kingdom":"यूनाइटेड किंगडम", "Canada":"कनाडा", "Australia":"ऑस्ट्रेलिया", "Singapore":"सिंगापुर", "United Arab Emirates":"संयुक्त अरब अमीरात", "Use your keyword, or your idea if no keyword is set.":"कीवर्ड चुनें; न हो तो आपका विचार इस्तेमाल होगा।", "Search interest is relative, not exact search volume or a promise of reach.":"खोज रुचि तुलनात्मक है; यह सटीक खोज संख्या या पहुँच की गारंटी नहीं है।", "Audience":"दर्शक", "Creator type":"क्रिएटर का प्रकार", "NGO":"गैर-लाभकारी संस्था", "Business":"व्यवसाय", "Influencer / creator":"इन्फ्लुएंसर / क्रिएटर", "Product / brand":"उत्पाद / ब्रांड", "Scenario":"परिस्थिति", "Campaign intent":"अभियान का उद्देश्य", "Inform":"जानकारी देना", "Educate":"शिक्षित करना", "Inspire":"प्रेरित करना", "Build trust":"भरोसा बनाना", "Drive action":"कार्रवाई के लिए प्रेरित करना", "What should this post help achieve?":"इस पोस्ट से क्या हासिल होना चाहिए?", "Optional":"वैकल्पिक", "Brand knowledge & style rules":"ब्रांड की जानकारी और लेखन नियम", "Source story, transcript, and approved facts":"स्रोत कहानी, प्रतिलेख और स्वीकृत तथ्य", "Writing rules":"लेखन के नियम", "Discovery optimization":"खोज के लिए सुधार", "Social + SEO":"सोशल + SEO", "Answer engine (AEO)":"उत्तर इंजन (AEO)", "Generative search (GEO)":"जनरेटिव खोज (GEO)", "SEO + AEO + GEO":"SEO + AEO + GEO", "Voice formality":"औपचारिकता", "Conversational":"बातचीत जैसा", "Balanced":"संतुलित", "Polished":"परिष्कृत", "Energy":"ऊर्जा", "Calm":"शांत", "Steady":"संतुलित", "High energy":"ऊर्जावान", "Generate draft":"ड्राफ़्ट बनाएँ", "OPTIONAL VOICE":"वैकल्पिक आवाज़", "Your voice":"आपकी आवाज़", "OPTIONAL VOICE GUIDANCE":"वैकल्पिक आवाज़ मार्गदर्शन", "Tune your voice profile":"अपनी आवाज़ प्रोफ़ाइल सेट करें", "Speak or type the post idea above. Add examples here only if you want a closer match to your writing style.":"पोस्ट का विचार ऊपर बोलें या लिखें। अपनी शैली से बेहतर मेल के लिए उदाहरण जोड़ें।", "More voice options":"आवाज़ के और विकल्प", "Voice or style guidance":"आवाज़ या शैली का मार्गदर्शन", "Or paste posts you wrote":"या अपनी लिखी पोस्ट चिपकाएँ", "Starting tone":"शुरुआती लहजा", "Warm and approachable":"सौम्य और सहज", "Bold and playful":"बेझिझक और चंचल", "Expert and precise":"जानकार और सटीक", "Minimal and direct":"संक्षिप्त और सीधा", "Witty and conversational":"हाज़िरजवाब और बातचीत जैसा", "Claims or terms to avoid (optional)":"बचने वाले दावे या शब्द (वैकल्पिक)", "Analyze examples":"उदाहरणों का विश्लेषण करें", "Voice profiles learn from your examples and preferences.":"आवाज़ प्रोफ़ाइल आपके उदाहरणों और पसंद से सीखती है।", "Saved voices":"सहेजी आवाज़ें", "Choose a saved voice":"सहेजी आवाज़ चुनें", "Profile name":"प्रोफ़ाइल का नाम", "Save voice":"आवाज़ सहेजें", "Delete selected":"चुनी हुई मिटाएँ", "VOICE ANALYSIS":"आवाज़ का विश्लेषण", "Voice analysis and example posts":"आवाज़ का विश्लेषण और उदाहरण पोस्ट", "SOUNDS LIKE":"ऐसा सुनाई देता है", "DO MORE OF":"और करें", "SKIP":"छोड़ें", "View the sample posts":"नमूना पोस्ट देखें", "YOUR DRAFT":"आपका ड्राफ़्ट", "Review and edit":"देखें और संपादित करें", "VOICE ADAPTED":"आवाज़ के अनुसार", "personal profile":"व्यक्तिगत प्रोफ़ाइल", "Rewrite":"फिर से लिखें", "Improve clarity":"स्पष्टता सुधारें", "Expand":"बढ़ाएँ", "Shorten":"संक्षिप्त करें", "Add CTA":"CTA जोड़ें", "EDITABLE · YOUR BRAND VOICE":"संपादन योग्य · आपकी ब्रांड आवाज़", "Make an edit in the adapted draft, then use it as direction for another pass.":"ड्राफ़्ट में बदलाव करें और उसी दिशा में नया रूप बनाएँ।", "Regenerate using my edits":"मेरे बदलावों से फिर बनाएँ", "Voice is a pattern, not a template.":"आवाज़ एक शैली है, तय साँचा नहीं।", "Use the draft as a starting point. Your edits make it yours.":"ड्राफ़्ट से शुरुआत करें; आपके बदलाव इसे आपका बनाते हैं।", "VOICEPRINT QUALITY CHECK":"VOICEPRINT गुणवत्ता जाँच", "Why this draft works":"यह ड्राफ़्ट क्यों काम करता है", "Generate a draft to score voice, platform fit, keyword context, clarity, and safety.":"आवाज़, प्लेटफ़ॉर्म मेल, कीवर्ड संदर्भ, स्पष्टता और सुरक्षा का आकलन करने के लिए ड्राफ़्ट बनाएँ।", "Transparent rubric · no fabricated engagement predictions":"पारदर्शी मानदंड · सहभागिता के मनगढ़ंत अनुमान नहीं", "ONE FINAL APPROVAL PER POST":"हर पोस्ट के लिए एक अंतिम मंज़ूरी", "Publish this draft":"यह ड्राफ़्ट प्रकाशित करें", "Choose a content format, generate and review your draft, then approve it to publish.":"फ़ॉर्मैट चुनें, ड्राफ़्ट बनाएँ और जाँचें, फिर प्रकाशित करने की मंज़ूरी दें।", "Review the draft, then approve it to publish.":"ड्राफ़्ट जाँचें और प्रकाशित करने की मंज़ूरी दें।", "Media URL · optional":"मीडिया URL · वैकल्पिक", "Approve & publish now ↗":"मंज़ूरी दें और प्रकाशित करें ↗", "Nothing is published until you approve the draft.":"आपकी मंज़ूरी के बिना कुछ प्रकाशित नहीं होगा।", "ACCOUNT CONNECTIONS":"खाता कनेक्शन", "Connect accounts to import posts":"पोस्ट लाने के लिए खाते जोड़ें", "Bring your own posts into your voice profile by connecting the accounts you use.":"अपने खाते जोड़कर लिखी पोस्ट को आवाज़ प्रोफ़ाइल में लाएँ।", "PERFORMANCE":"प्रदर्शन", "Account performance":"खाते का प्रदर्शन", "Refresh results":"नतीजे ताज़ा करें", "Review the metrics recorded for your published drafts.":"प्रकाशित ड्राफ़्ट के दर्ज आँकड़े देखें।", "No performance data yet.":"अभी प्रदर्शन का डेटा नहीं है।", "Save edited draft":"संपादित ड्राफ़्ट सहेजें", "Drafts are saved locally after generation.":"ड्राफ़्ट बनने के बाद डिवाइस पर सहेजे जाते हैं।", "CAMPAIGN WORKSPACE":"अभियान कार्यस्थान", "One brief. Three channels.":"एक ब्रीफ़। तीन चैनल।", "Build campaign pack":"अभियान सामग्री बनाएँ", "Instagram caption":"Instagram कैप्शन", "Copy version ↗":"कॉपी करें ↗", "CONTENT STUDIO":"कंटेंट स्टूडियो", "ONE IDEA. YOUR VOICE.":"एक विचार। आपकी आवाज़।", "Help with voice profiles and drafts.":"आवाज़ प्रोफ़ाइल और ड्राफ़्ट में सहायता।", "Type your idea here, or use Speak above…":"अपना विचार लिखें या ऊपर बोलें…", "Add a phrase only if this post needs one":"ज़रूरत हो तभी कोई वाक्यांश जोड़ें", "Explain what it means for this post":"इस पोस्ट में इसका अर्थ बताएँ", "Who are you speaking to?":"आप किससे बात कर रहे हैं?", "Who are you creating for?":"आप किसके लिए बना रहे हैं?", "Pick the closest fit. You can refine the audience in your draft.":"सबसे उपयुक्त विकल्प चुनें। ड्राफ़्ट में दर्शक बदल सकते हैं।", "Who is this for?":"यह किसके लिए है?", "You can change this for any draft.":"इसे हर ड्राफ़्ट के लिए बदल सकते हैं।", "Start with your public profile.":"अपनी सार्वजनिक प्रोफ़ाइल से शुरू करें।", "Add posts you wrote to help shape your voice profile. Choose only your own posts, or skip this and start fresh.":"आवाज़ प्रोफ़ाइल बनाने के लिए अपनी लिखी पोस्ट जोड़ें। केवल अपनी पोस्ट चुनें या छोड़कर शुरू करें।", "Public profile URL":"सार्वजनिक प्रोफ़ाइल URL", "Import posts":"पोस्ट लाएँ", "No profile link? Continue and start fresh.":"प्रोफ़ाइल लिंक नहीं है? आगे बढ़ें और नए सिरे से शुरू करें।", "Where and how should it sound?":"यह कहाँ और कैसी सुनाई दे?", "First platform":"पहला प्लेटफ़ॉर्म", "Draft language":"ड्राफ़्ट की भाषा", "You can change these later.":"इन्हें बाद में बदल सकते हैं।", "Say it once. We’ll map the details.":"एक बार बोलें। हम जानकारी भर देंगे।", "Speech stays on this computer. Kannada and Hindi use KrishiDisha’s local IndicConformer. Kannada is preselected; choose the language you’re speaking. Kannada uses Judge accuracy by default; Fast live is used for English and Hindi.":"आवाज़ इसी कंप्यूटर पर रहती है। हिंदी और ಕನ್ನಡ के लिए स्थानीय IndicConformer इस्तेमाल होता है। बोली जाने वाली भाषा चुनें। कन्नड़ के लिए Judge accuracy डिफ़ॉल्ट है; English और हिंदी के लिए Fast live है।", "Voice is optional. You can type or dictate your idea here.":"आवाज़ वैकल्पिक है। यहाँ विचार लिखें या बोलकर बताएँ।", "Open my studio →":"मेरा स्टूडियो खोलें →", "No map. No rush. Just the long way home.":"कोई नक्शा नहीं। कोई जल्दबाज़ी नहीं। बस घर का लंबा रास्ता।"
  },
  kn: {
    "Site language":"ತಾಣದ ಭಾಷೆ", "WORKSPACE":"ಕಾರ್ಯಸ್ಥಳ", "CONTENT STUDIO":"ವಿಷಯ ಸ್ಟುಡಿಯೋ", "Content studio":"ವಿಷಯ ಸ್ಟುಡಿಯೋ", "Brand profile":"ಬ್ರ್ಯಾಂಡ್ ಪ್ರೊಫೈಲ್", "Sample library":"ಮಾದರಿ ಸಂಗ್ರಹ", "Local workspace":"ಸ್ಥಳೀಯ ಕಾರ್ಯಸ್ಥಳ", "Four audience types · saved voices":"ನಾಲ್ಕು ಪ್ರೇಕ್ಷಕ ವರ್ಗಗಳು · ಉಳಿಸಿದ ಧ್ವನಿಗಳು", "Voice profiles":"ಧ್ವನಿ ಪ್ರೊಫೈಲ್‌ಗಳು", "NGO · Business · Creator · Product":"NGO · ವ್ಯವಹಾರ · ಸೃಷ್ಟಿಕರ್ತ · ಉತ್ಪನ್ನ", "READY":"ಸಿದ್ಧ", "Skip setup":"ಹೊಂದಾಣಿಕೆ ಬಿಟ್ಟುಬಿಡಿ", "MAKE EVERY WORD SOUND LIKE YOU":"ಪ್ರತಿ ಪದವೂ ನಿಮ್ಮಂತೆಯೇ ಕೇಳಿಸಲಿ", "Find your voice.":"ನಿಮ್ಮ ಧ್ವನಿಯನ್ನು ಕಂಡುಕೊಳ್ಳಿ.", "Keep it yours.":"ಅದನ್ನು ನಿಮ್ಮದಾಗಿಯೇ ಇರಿಸಿ.", "One idea, shaped by the way your brand already speaks.":"ನಿಮ್ಮ ಬ್ರ್ಯಾಂಡ್‌ನ ಮಾತಿನ ಶೈಲಿಯಲ್ಲಿ ರೂಪುಗೊಂಡ ಒಂದು ಆಲೋಚನೆ.", "CONTENT":"ವಿಷಯ", "VOICE":"ಧ್ವನಿ", "STUDIO":"ಸ್ಟುಡಿಯೋ", "YOUR IDEA":"ನಿಮ್ಮ ಆಲೋಚನೆ", "Shape the draft":"ಕರಡು ರೂಪಿಸಿ", "SPEAK OR TYPE · ENGLISH · हिन्दी · ಕನ್ನಡ":"ಮಾತನಾಡಿ ಅಥವಾ ಟೈಪ್ ಮಾಡಿ · English · हिन्दी · ಕನ್ನಡ", "Type your idea below, or use Speak to dictate it.":"ನಿಮ್ಮ ಆಲೋಚನೆಯನ್ನು ಕೆಳಗೆ ಟೈಪ್ ಮಾಡಿ ಅಥವಾ ಮಾತನಾಡಿ.", "Speak":"ಮಾತನಾಡಿ", "Stop & add text":"ನಿಲ್ಲಿಸಿ ಮತ್ತು ಪಠ್ಯ ಸೇರಿಸಿ", "Clear last":"ಕೊನೆಯದನ್ನು ತೆರವುಗೊಳಿಸಿ", "What do you want to say?":"ನೀವು ಏನು ಹೇಳಲು ಬಯಸುತ್ತೀರಿ?", "Speech language · choose what you’re speaking":"ಮಾತನಾಡುವ ಭಾಷೆ · ನೀವು ಮಾತನಾಡುವ ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ", "Auto-detect · slower":"ಸ್ವಯಂ ಪತ್ತೆ · ನಿಧಾನ", "English":"English", "Hindi":"हिन्दी", "Kannada":"ಕನ್ನಡ", "Kannada · faster":"ಕನ್ನಡ · ವೇಗ", "Voice quality":"ಧ್ವನಿ ಗುಣಮಟ್ಟ", "Judge accuracy · recommended":"ನಿಖರತೆ · ಶಿಫಾರಸು", "Fast live":"ವೇಗದ ಆಯ್ಕೆ", "Live brief checklist":"ಬ್ರೀಫ್ ಪರಿಶೀಲನಾ ಪಟ್ಟಿ", "Mapped from your words":"ನಿಮ್ಮ ಮಾತಿನಿಂದ ಗುರುತಿಸಲಾಗಿದೆ", "Platform":"ವೇದಿಕೆ", "Write in":"ಬರೆಯುವ ಭಾಷೆ", "Draft length":"ಕರಡು ಉದ್ದ", "20 words":"20 ಪದಗಳು", "300 words":"300 ಪದಗಳು", "Audience, campaign goal and voice":"ಪ್ರೇಕ್ಷಕರು, ಅಭಿಯಾನದ ಗುರಿ ಮತ್ತು ಧ್ವನಿ", "More controls":"ಹೆಚ್ಚಿನ ಆಯ್ಕೆಗಳು", "Optional keyword":"ಐಚ್ಛಿಕ ಕೀವರ್ಡ್", "Keyword context":"ಕೀವರ್ಡ್ ಸಂದರ್ಭ", "GOOGLE TRENDS · PAST 12 MONTHS":"GOOGLE TRENDS · ಕಳೆದ 12 ತಿಂಗಳು", "Search ideas for this brief":"ಈ ಬ್ರೀಫ್‌ಗೆ ಹುಡುಕಾಟ ಸಲಹೆಗಳು", "Find ideas":"ಸಲಹೆ ಹುಡುಕಿ", "Region":"ಪ್ರದೇಶ", "India":"ಭಾರತ", "United States":"ಅಮೆರಿಕ ಸಂಯುಕ್ತ ಸಂಸ್ಥಾನ", "United Kingdom":"ಯುನೈಟೆಡ್ ಕಿಂಗ್‌ಡಮ್", "Canada":"ಕೆನಡಾ", "Australia":"ಆಸ್ಟ್ರೇಲಿಯಾ", "Singapore":"ಸಿಂಗಾಪುರ", "United Arab Emirates":"ಸಂಯುಕ್ತ ಅರಬ್ ಎಮಿರೇಟ್ಸ್", "Use your keyword, or your idea if no keyword is set.":"ಕೀವರ್ಡ್ ಬಳಸಿ; ಇಲ್ಲದಿದ್ದರೆ ನಿಮ್ಮ ಆಲೋಚನೆಯೇ ಬಳಕೆಯಾಗುತ್ತದೆ.", "Search interest is relative, not exact search volume or a promise of reach.":"ಹುಡುಕಾಟದ ಆಸಕ್ತಿ ಹೋಲಿಕೆಗೆ ಮಾತ್ರ; ಇದು ನಿಖರ ಹುಡುಕಾಟ ಸಂಖ್ಯೆ ಅಥವಾ ತಲುಪುವಿಕೆಯ ಭರವಸೆ ಅಲ್ಲ.", "Audience":"ಪ್ರೇಕ್ಷಕರು", "Creator type":"ಸೃಷ್ಟಿಕರ್ತರ ವಿಧ", "NGO":"NGO", "Business":"ವ್ಯವಹಾರ", "Influencer / creator":"ಪ್ರಭಾವಿ / ಸೃಷ್ಟಿಕರ್ತ", "Product / brand":"ಉತ್ಪನ್ನ / ಬ್ರ್ಯಾಂಡ್", "Scenario":"ಸಂದರ್ಭ", "Campaign intent":"ಅಭಿಯಾನದ ಉದ್ದೇಶ", "Inform":"ತಿಳಿಸಿ", "Educate":"ಶಿಕ್ಷಿಸಿ", "Inspire":"ಪ್ರೇರೇಪಿಸಿ", "Build trust":"ನಂಬಿಕೆ ಬೆಳೆಸಿ", "Drive action":"ಕ್ರಮಕ್ಕೆ ಪ್ರೇರೇಪಿಸಿ", "What should this post help achieve?":"ಈ ಪೋಸ್ಟ್ ಏನನ್ನು ಸಾಧಿಸಲು ಸಹಾಯ ಮಾಡಬೇಕು?", "Optional":"ಐಚ್ಛಿಕ", "Brand knowledge & style rules":"ಬ್ರ್ಯಾಂಡ್ ಮಾಹಿತಿ ಮತ್ತು ಶೈಲಿ ನಿಯಮಗಳು", "Source story, transcript, and approved facts":"ಮೂಲ ಕಥೆ, ಮಾತಿನ ಲಿಪ್ಯಂತರ ಮತ್ತು ಅನುಮೋದಿತ ಸಂಗತಿಗಳು", "Writing rules":"ಬರವಣಿಗೆ ನಿಯಮಗಳು", "Discovery optimization":"ಹುಡುಕಾಟ ಸುಧಾರಣೆ", "Social + SEO":"ಸಾಮಾಜಿಕ + SEO", "Answer engine (AEO)":"ಉತ್ತರ ಎಂಜಿನ್ (AEO)", "Generative search (GEO)":"ಜನರೇಟಿವ್ ಹುಡುಕಾಟ (GEO)", "SEO + AEO + GEO":"SEO + AEO + GEO", "Voice formality":"ಧ್ವನಿಯ ಔಪಚಾರಿಕತೆ", "Conversational":"ಸಂಭಾಷಣಾತ್ಮಕ", "Balanced":"ಸಮತೋಲನ", "Polished":"ಪರಿಷ್ಕೃತ", "Energy":"ಚೈತನ್ಯ", "Calm":"ಶಾಂತ", "Steady":"ಸ್ಥಿರ", "High energy":"ಹೆಚ್ಚಿನ ಚೈತನ್ಯ", "Generate draft":"ಕರಡು ರಚಿಸಿ", "OPTIONAL VOICE":"ಐಚ್ಛಿಕ ಧ್ವನಿ", "Your voice":"ನಿಮ್ಮ ಧ್ವನಿ", "OPTIONAL VOICE GUIDANCE":"ಐಚ್ಛಿಕ ಧ್ವನಿ ಮಾರ್ಗದರ್ಶನ", "Tune your voice profile":"ನಿಮ್ಮ ಧ್ವನಿ ಪ್ರೊಫೈಲ್ ಹೊಂದಿಸಿ", "Speak or type the post idea above. Add examples here only if you want a closer match to your writing style.":"ಪೋಸ್ಟ್ ಆಲೋಚನೆಯನ್ನು ಮೇಲೆ ಮಾತನಾಡಿ ಅಥವಾ ಟೈಪ್ ಮಾಡಿ. ನಿಮ್ಮ ಬರವಣಿಗೆ ಶೈಲಿಗೆ ಹೊಂದಿಸಲು ಉದಾಹರಣೆಗಳನ್ನು ಸೇರಿಸಿ.", "More voice options":"ಹೆಚ್ಚಿನ ಧ್ವನಿ ಆಯ್ಕೆಗಳು", "Voice or style guidance":"ಧ್ವನಿ ಅಥವಾ ಶೈಲಿ ಮಾರ್ಗದರ್ಶನ", "Or paste posts you wrote":"ಅಥವಾ ನೀವು ಬರೆದ ಪೋಸ್ಟ್‌ಗಳನ್ನು ಅಂಟಿಸಿ", "Starting tone":"ಆರಂಭಿಕ ಧಾಟಿ", "Warm and approachable":"ಆತ್ಮೀಯ ಮತ್ತು ಸರಳ", "Bold and playful":"ಧೈರ್ಯಶಾಲಿ ಮತ್ತು ಉಲ್ಲಾಸಭರಿತ", "Expert and precise":"ತಜ್ಞ ಮತ್ತು ನಿಖರ", "Minimal and direct":"ಸಂಕ್ಷಿಪ್ತ ಮತ್ತು ನೇರ", "Witty and conversational":"ಚತುರ ಮತ್ತು ಸಂಭಾಷಣಾತ್ಮಕ", "Claims or terms to avoid (optional)":"ತಪ್ಪಿಸಬೇಕಾದ ಹೇಳಿಕೆಗಳು ಅಥವಾ ಪದಗಳು (ಐಚ್ಛಿಕ)", "Analyze examples":"ಉದಾಹರಣೆಗಳನ್ನು ವಿಶ್ಲೇಷಿಸಿ", "Voice profiles learn from your examples and preferences.":"ನಿಮ್ಮ ಉದಾಹರಣೆಗಳು ಮತ್ತು ಆಯ್ಕೆಗಳಿಂದ ಧ್ವನಿ ಪ್ರೊಫೈಲ್ ಕಲಿಯುತ್ತದೆ.", "Saved voices":"ಉಳಿಸಿದ ಧ್ವನಿಗಳು", "Choose a saved voice":"ಉಳಿಸಿದ ಧ್ವನಿ ಆಯ್ಕೆಮಾಡಿ", "Profile name":"ಪ್ರೊಫೈಲ್ ಹೆಸರು", "Save voice":"ಧ್ವನಿ ಉಳಿಸಿ", "Delete selected":"ಆಯ್ದದ್ದನ್ನು ಅಳಿಸಿ", "Voice analysis and example posts":"ಧ್ವನಿ ವಿಶ್ಲೇಷಣೆ ಮತ್ತು ಉದಾಹರಣೆ ಪೋಸ್ಟ್‌ಗಳು", "SOUNDS LIKE":"ಧ್ವನಿಯ ಗುಣ", "DO MORE OF":"ಹೆಚ್ಚು ಮಾಡಿ", "SKIP":"ಬಿಡಿ", "View the sample posts":"ಮಾದರಿ ಪೋಸ್ಟ್‌ಗಳನ್ನು ನೋಡಿ", "YOUR DRAFT":"ನಿಮ್ಮ ಕರಡು", "Review and edit":"ಪರಿಶೀಲಿಸಿ ಮತ್ತು ತಿದ್ದುಪಡಿ ಮಾಡಿ", "VOICE ADAPTED":"ಧ್ವನಿಗೆ ಹೊಂದಿಸಲಾಗಿದೆ", "personal profile":"ವೈಯಕ್ತಿಕ ಪ್ರೊಫೈಲ್", "Rewrite":"ಮರುಬರೆಯಿರಿ", "Improve clarity":"ಸ್ಪಷ್ಟತೆ ಸುಧಾರಿಸಿ", "Expand":"ವಿಸ್ತರಿಸಿ", "Shorten":"ಚಿಕ್ಕದಾಗಿಸಿ", "Add CTA":"CTA ಸೇರಿಸಿ", "EDITABLE · YOUR BRAND VOICE":"ತಿದ್ದಬಹುದಾದದು · ನಿಮ್ಮ ಬ್ರ್ಯಾಂಡ್ ಧ್ವನಿ", "Make an edit in the adapted draft, then use it as direction for another pass.":"ಹೊಂದಿಸಿದ ಕರಡನ್ನು ತಿದ್ದು, ಮುಂದಿನ ರೂಪಕ್ಕೆ ದಿಕ್ಕಾಗಿ ಬಳಸಿ.", "Regenerate using my edits":"ನನ್ನ ತಿದ್ದುಪಡಿಗಳೊಂದಿಗೆ ಮತ್ತೆ ರಚಿಸಿ", "Voice is a pattern, not a template.":"ಧ್ವನಿ ಒಂದು ಶೈಲಿ; ಸಿದ್ಧ ಮಾದರಿ ಅಲ್ಲ.", "Use the draft as a starting point. Your edits make it yours.":"ಕರಡಿನಿಂದ ಆರಂಭಿಸಿ. ನಿಮ್ಮ ತಿದ್ದುಪಡಿಗಳು ಅದನ್ನು ನಿಮ್ಮದಾಗಿಸುತ್ತವೆ.", "VOICEPRINT QUALITY CHECK":"VOICEPRINT ಗುಣಮಟ್ಟ ಪರಿಶೀಲನೆ", "Why this draft works":"ಈ ಕರಡು ಏಕೆ ಪರಿಣಾಮಕಾರಿ", "Generate a draft to score voice, platform fit, keyword context, clarity, and safety.":"ಧ್ವನಿ, ವೇದಿಕೆಯ ಹೊಂದಾಣಿಕೆ, ಕೀವರ್ಡ್ ಸಂದರ್ಭ, ಸ್ಪಷ್ಟತೆ ಮತ್ತು ಸುರಕ್ಷತೆಯನ್ನು ಅಳೆಯಲು ಕರಡು ರಚಿಸಿ.", "Transparent rubric · no fabricated engagement predictions":"ಪಾರದರ್ಶಕ ಮಾನದಂಡ · ಕಲ್ಪಿತ ಪ್ರತಿಕ್ರಿಯೆ ಅಂದಾಜುಗಳಿಲ್ಲ", "ONE FINAL APPROVAL PER POST":"ಪ್ರತಿ ಪೋಸ್ಟ್‌ಗೆ ಒಂದು ಅಂತಿಮ ಅನುಮೋದನೆ", "Publish this draft":"ಈ ಕರಡನ್ನು ಪ್ರಕಟಿಸಿ", "Choose a content format, generate and review your draft, then approve it to publish.":"ವಿಷಯದ ರೂಪ ಆಯ್ಕೆಮಾಡಿ, ಕರಡು ರಚಿಸಿ ಪರಿಶೀಲಿಸಿ, ನಂತರ ಪ್ರಕಟಿಸಲು ಅನುಮೋದಿಸಿ.", "Review the draft, then approve it to publish.":"ಕರಡನ್ನು ಪರಿಶೀಲಿಸಿ, ಪ್ರಕಟಿಸಲು ಅನುಮೋದಿಸಿ.", "Media URL · optional":"ಮಾಧ್ಯಮ URL · ಐಚ್ಛಿಕ", "Approve & publish now ↗":"ಅನುಮೋದಿಸಿ ಈಗ ಪ್ರಕಟಿಸಿ ↗", "Nothing is published until you approve the draft.":"ನೀವು ಅನುಮೋದಿಸುವವರೆಗೆ ಏನೂ ಪ್ರಕಟವಾಗುವುದಿಲ್ಲ.", "ACCOUNT CONNECTIONS":"ಖಾತೆ ಸಂಪರ್ಕಗಳು", "Connect accounts to import posts":"ಪೋಸ್ಟ್ ತರಲು ಖಾತೆಗಳನ್ನು ಸಂಪರ್ಕಿಸಿ", "Bring your own posts into your voice profile by connecting the accounts you use.":"ನೀವು ಬಳಸುವ ಖಾತೆಗಳನ್ನು ಸಂಪರ್ಕಿಸಿ, ನಿಮ್ಮ ಪೋಸ್ಟ್‌ಗಳನ್ನು ಧ್ವನಿ ಪ್ರೊಫೈಲ್‌ಗೆ ಸೇರಿಸಿ.", "PERFORMANCE":"ಕಾರ್ಯಕ್ಷಮತೆ", "Account performance":"ಖಾತೆಯ ಕಾರ್ಯಕ್ಷಮತೆ", "Refresh results":"ಫಲಿತಾಂಶಗಳನ್ನು ನವೀಕರಿಸಿ", "Review the metrics recorded for your published drafts.":"ಪ್ರಕಟಿಸಿದ ಕರಡುಗಳ ದಾಖಲಾಗಿರುವ ಅಳತೆಗಳನ್ನು ಪರಿಶೀಲಿಸಿ.", "No performance data yet.":"ಇನ್ನೂ ಕಾರ್ಯಕ್ಷಮತೆಯ ಮಾಹಿತಿ ಇಲ್ಲ.", "Save edited draft":"ತಿದ್ದಿದ ಕರಡು ಉಳಿಸಿ", "Drafts are saved locally after generation.":"ರಚಿಸಿದ ನಂತರ ಕರಡುಗಳು ಈ ಸಾಧನದಲ್ಲೇ ಉಳಿಯುತ್ತವೆ.", "CAMPAIGN WORKSPACE":"ಅಭಿಯಾನ ಕಾರ್ಯಸ್ಥಳ", "One brief. Three channels.":"ಒಂದು ಬ್ರೀಫ್. ಮೂರು ಚಾನಲ್‌ಗಳು.", "Build campaign pack":"ಅಭಿಯಾನ ಪ್ಯಾಕ್ ರಚಿಸಿ", "Instagram caption":"Instagram ಶೀರ್ಷಿಕೆ", "Copy version ↗":"ಪ್ರತಿಯನ್ನು ನಕಲಿಸಿ ↗", "ONE IDEA. YOUR VOICE.":"ಒಂದು ಆಲೋಚನೆ. ನಿಮ್ಮ ಧ್ವನಿ.", "Help with voice profiles and drafts.":"ಧ್ವನಿ ಪ್ರೊಫೈಲ್ ಮತ್ತು ಕರಡುಗಳಿಗೆ ಸಹಾಯ.", "Type your idea here, or use Speak above…":"ನಿಮ್ಮ ಆಲೋಚನೆ ಇಲ್ಲಿ ಟೈಪ್ ಮಾಡಿ ಅಥವಾ ಮೇಲೆ ಮಾತನಾಡಿ…", "Add a phrase only if this post needs one":"ಈ ಪೋಸ್ಟ್‌ಗೆ ಬೇಕಾದರೆ ಮಾತ್ರ ಪದಗುಚ್ಛ ಸೇರಿಸಿ", "Explain what it means for this post":"ಈ ಪೋಸ್ಟ್‌ಗೆ ಅದರ ಅರ್ಥ ತಿಳಿಸಿ", "Who are you speaking to?":"ನೀವು ಯಾರೊಂದಿಗೆ ಮಾತನಾಡುತ್ತಿದ್ದೀರಿ?", "Who are you creating for?":"ನೀವು ಯಾರಿಗಾಗಿ ರಚಿಸುತ್ತಿದ್ದೀರಿ?", "Pick the closest fit. You can refine the audience in your draft.":"ಹತ್ತಿರದ ಆಯ್ಕೆ ಆರಿಸಿ. ಕರಡಿನಲ್ಲಿ ಪ್ರೇಕ್ಷಕರನ್ನು ತಿದ್ದಬಹುದು.", "Who is this for?":"ಇದು ಯಾರಿಗಾಗಿ?", "You can change this for any draft.":"ಯಾವುದೇ ಕರಡಿಗೆ ಇದನ್ನು ಬದಲಿಸಬಹುದು.", "Start with your public profile.":"ನಿಮ್ಮ ಸಾರ್ವಜನಿಕ ಪ್ರೊಫೈಲ್‌ನಿಂದ ಆರಂಭಿಸಿ.", "Add posts you wrote to help shape your voice profile. Choose only your own posts, or skip this and start fresh.":"ಧ್ವನಿ ಪ್ರೊಫೈಲ್ ರೂಪಿಸಲು ನೀವು ಬರೆದ ಪೋಸ್ಟ್ ಸೇರಿಸಿ. ನಿಮ್ಮ ಪೋಸ್ಟ್‌ಗಳನ್ನಷ್ಟೇ ಆಯ್ಕೆಮಾಡಿ ಅಥವಾ ಬಿಟ್ಟು ಹೊಸದಾಗಿ ಆರಂಭಿಸಿ.", "Public profile URL":"ಸಾರ್ವಜನಿಕ ಪ್ರೊಫೈಲ್ URL", "Import posts":"ಪೋಸ್ಟ್‌ಗಳನ್ನು ಆಮದುಮಾಡಿ", "No profile link? Continue and start fresh.":"ಪ್ರೊಫೈಲ್ ಲಿಂಕ್ ಇಲ್ಲವೇ? ಮುಂದುವರಿದು ಹೊಸದಾಗಿ ಆರಂಭಿಸಿ.", "Where and how should it sound?":"ಇದು ಎಲ್ಲಿ ಮತ್ತು ಹೇಗೆ ಕೇಳಿಸಬೇಕು?", "First platform":"ಮೊದಲ ವೇದಿಕೆ", "Draft language":"ಕರಡು ಭಾಷೆ", "You can change these later.":"ಇವುಗಳನ್ನು ನಂತರ ಬದಲಿಸಬಹುದು.", "Say it once. We’ll map the details.":"ಒಮ್ಮೆ ಹೇಳಿ. ವಿವರಗಳನ್ನು ನಾವು ಗುರುತಿಸುತ್ತೇವೆ.", "Speech stays on this computer. Kannada and Hindi use KrishiDisha’s local IndicConformer. Kannada is preselected; choose the language you’re speaking. Kannada uses Judge accuracy by default; Fast live is used for English and Hindi.":"ಧ್ವನಿ ಈ ಕಂಪ್ಯೂಟರಿನಲ್ಲೇ ಇರುತ್ತದೆ. ಕನ್ನಡ ಮತ್ತು ಹಿಂದಿಗೆ ಸ್ಥಳೀಯ IndicConformer ಬಳಸಲಾಗುತ್ತದೆ. ಕನ್ನಡ ಮೊದಲೇ ಆಯ್ಕೆಯಾಗಿದೆ; ನೀವು ಮಾತನಾಡುವ ಭಾಷೆ ಆಯ್ಕೆಮಾಡಿ. ಕನ್ನಡಕ್ಕೆ Judge accuracy ಪೂರ್ವನಿಯೋಜಿತ; English ಮತ್ತು ಹಿಂದಿಗೆ Fast live.", "Voice is optional. You can type or dictate your idea here.":"ಧ್ವನಿ ಐಚ್ಛಿಕ. ಇಲ್ಲಿ ಆಲೋಚನೆಯನ್ನು ಟೈಪ್ ಮಾಡಿ ಅಥವಾ ಹೇಳಿ.", "Open my studio →":"ನನ್ನ ಸ್ಟುಡಿಯೋ ತೆರೆಯಿರಿ →"
  }
};
Object.assign(siteCopy.hi, {"← Back":"← पीछे","Continue →":"जारी रखें →","Listening…":"सुन रहा है…","Transcribing your recording…":"रिकॉर्डिंग को टेक्स्ट में बदल रहे हैं…","Fetching profile posts from the selected platform API…":"चुने हुए प्लेटफ़ॉर्म से पोस्ट लाई जा रही हैं…","Paste a public profile URL first.":"पहले सार्वजनिक प्रोफ़ाइल URL डालें।","Select at least one post first.":"पहले कम से कम एक पोस्ट चुनें।","Searching Google Trends…":"Google Trends में खोज रहे हैं…","No related searches found for this brief.":"इस ब्रीफ़ के लिए संबंधित खोजें नहीं मिलीं।","View trend":"ट्रेंड देखें","Add keyword":"कीवर्ड जोड़ें","Captured":"दर्ज","Needed":"ज़रूरी","Not mentioned · optional":"उल्लेख नहीं · वैकल्पिक","Add one idea to generate a post":"पोस्ट बनाने के लिए एक विचार जोड़ें","Publishing…":"प्रकाशित हो रहा है…","Published successfully.":"सफलतापूर्वक प्रकाशित हुआ।","Saved voice deleted.":"सहेजी गई आवाज़ मिटा दी गई।","No performance data yet.":"अभी प्रदर्शन का डेटा नहीं है।","← Back":"← पीछे","Could not finish this draft yet.":"ड्राफ़्ट अभी पूरा नहीं हो सका।","Your words remain in the brief.":"आपके शब्द ब्रीफ़ में सुरक्षित हैं।","Removed the latest spoken text. Your other idea text is unchanged.":"आख़िरी बोला हुआ टेक्स्ट हटाया। बाकी विचार जस का तस है।","Post idea":"पोस्ट का विचार","Campaign goal":"अभियान का लक्ष्य","Approved facts":"स्वीकृत तथ्य","Voice style":"आवाज़ की शैली","Keywords":"कीवर्ड"});
Object.assign(siteCopy.kn, {"← Back":"← ಹಿಂದೆ","Continue →":"ಮುಂದುವರಿಸಿ →","Listening…":"ಆಲಿಸಲಾಗುತ್ತಿದೆ…","Transcribing your recording…":"ನಿಮ್ಮ ರೆಕಾರ್ಡಿಂಗ್ ಪಠ್ಯವಾಗುತ್ತಿದೆ…","Fetching profile posts from the selected platform API…":"ಆಯ್ದ ವೇದಿಕೆಯಿಂದ ಪೋಸ್ಟ್‌ಗಳನ್ನು ಪಡೆಯಲಾಗುತ್ತಿದೆ…","Paste a public profile URL first.":"ಮೊದಲು ಸಾರ್ವಜನಿಕ ಪ್ರೊಫೈಲ್ URL ಅಂಟಿಸಿ.","Select at least one post first.":"ಮೊದಲು ಕನಿಷ್ಠ ಒಂದು ಪೋಸ್ಟ್ ಆಯ್ಕೆಮಾಡಿ.","Searching Google Trends…":"Google Trends ಹುಡುಕಲಾಗುತ್ತಿದೆ…","No related searches found for this brief.":"ಈ ಬ್ರೀಫ್‌ಗೆ ಸಂಬಂಧಿಸಿದ ಹುಡುಕಾಟಗಳು ಸಿಗಲಿಲ್ಲ.","View trend":"ಟ್ರೆಂಡ್ ನೋಡಿ","Add keyword":"ಕೀವರ್ಡ್ ಸೇರಿಸಿ","Captured":"ದಾಖಲಿಸಲಾಗಿದೆ","Needed":"ಅಗತ್ಯ","Not mentioned · optional":"ಹೇಳಿಲ್ಲ · ಐಚ್ಛಿಕ","Add one idea to generate a post":"ಪೋಸ್ಟ್ ರಚಿಸಲು ಒಂದು ಆಲೋಚನೆ ಸೇರಿಸಿ","Publishing…":"ಪ್ರಕಟಿಸಲಾಗುತ್ತಿದೆ…","Published successfully.":"ಯಶಸ್ವಿಯಾಗಿ ಪ್ರಕಟಿಸಲಾಗಿದೆ.","Saved voice deleted.":"ಉಳಿಸಿದ ಧ್ವನಿ ಅಳಿಸಲಾಗಿದೆ.","No performance data yet.":"ಇನ್ನೂ ಕಾರ್ಯಕ್ಷಮತೆಯ ಮಾಹಿತಿ ಇಲ್ಲ.","Could not finish this draft yet.":"ಈ ಕರಡನ್ನು ಈಗ ಪೂರ್ಣಗೊಳಿಸಲಾಗಲಿಲ್ಲ.","Your words remain in the brief.":"ನಿಮ್ಮ ಮಾತುಗಳು ಬ್ರೀಫ್‌ನಲ್ಲೇ ಉಳಿದಿವೆ.","Removed the latest spoken text. Your other idea text is unchanged.":"ಕೊನೆಯದಾಗಿ ಮಾತನಾಡಿದ ಪಠ್ಯವನ್ನು ತೆಗೆದುಹಾಕಲಾಗಿದೆ. ಉಳಿದ ಆಲೋಚನೆ ಬದಲಾಗಿಲ್ಲ.","Post idea":"ಪೋಸ್ಟ್ ಆಲೋಚನೆ","Campaign goal":"ಅಭಿಯಾನದ ಗುರಿ","Approved facts":"ಅನುಮೋದಿತ ಸಂಗತಿಗಳು","Voice style":"ಧ್ವನಿ ಶೈಲಿ","Keywords":"ಕೀವರ್ಡ್‌ಗಳು"});
Object.assign(siteCopy.hi, {"Main navigation":"मुख्य नेविगेशन","Pehchaan home":"Pehchaan होम","Clear the latest spoken transcript":"आख़िरी बोले गए प्रतिलेख को मिटाएँ","Edit the adapted draft":"अनुकूलित ड्राफ़्ट संपादित करें","Campaign channel assets":"अभियान चैनल सामग्री","Campaign channel draft":"अभियान चैनल ड्राफ़्ट","Draft editing actions":"ड्राफ़्ट संपादन विकल्प","Add verified facts or context only if needed.":"ज़रूरत हो तभी सत्यापित तथ्य या संदर्भ जोड़ें।","Optional: what should this post help achieve?":"वैकल्पिक: इस पोस्ट से क्या हासिल करना है?","Paste one post per paragraph.":"हर अनुच्छेद में एक पोस्ट चिपकाएँ।","Words to use or avoid, formatting, or claims to exclude…":"इस्तेमाल या बचाव के शब्द, फ़ॉर्मैट या हटाने वाले दावे…","Your draft will appear here after you generate it.":"ड्राफ़्ट बनाने के बाद वह यहाँ दिखेगा।","e.g. BGSCET Kannada":"उदा. BGSCET Kannada","e.g. friendly, direct, and grounded in our community":"उदा. मित्रवत, स्पष्ट और समुदाय से जुड़ा हुआ","e.g. guaranteed results":"उदा. पक्के नतीजे","Optional: what should this post help achieve?":"वैकल्पिक: इस पोस्ट से क्या हासिल करना है?"});
Object.assign(siteCopy.kn, {"Main navigation":"ಮುಖ್ಯ ನ್ಯಾವಿಗೇಶನ್","Pehchaan home":"Pehchaan ಮುಖಪುಟ","Clear the latest spoken transcript":"ಕೊನೆಯ ಮಾತಿನ ಲಿಪ್ಯಂತರ ತೆರವುಗೊಳಿಸಿ","Edit the adapted draft":"ಹೊಂದಿಸಿದ ಕರಡನ್ನು ತಿದ್ದಿ","Campaign channel assets":"ಅಭಿಯಾನ ಚಾನಲ್ ವಿಷಯಗಳು","Campaign channel draft":"ಅಭಿಯಾನ ಚಾನಲ್ ಕರಡು","Draft editing actions":"ಕರಡು ತಿದ್ದುಪಡಿ ಆಯ್ಕೆಗಳು","Add verified facts or context only if needed.":"ಅಗತ್ಯವಿದ್ದರೆ ಮಾತ್ರ ಪರಿಶೀಲಿಸಿದ ಸಂಗತಿಗಳು ಅಥವಾ ಸಂದರ್ಭ ಸೇರಿಸಿ.","Optional: what should this post help achieve?":"ಐಚ್ಛಿಕ: ಈ ಪೋಸ್ಟ್ ಏನನ್ನು ಸಾಧಿಸಬೇಕು?","Paste one post per paragraph.":"ಪ್ರತಿ ಪ್ಯಾರಾಗ್ರಾಫ್‌ಗೆ ಒಂದು ಪೋಸ್ಟ್ ಅಂಟಿಸಿ.","Words to use or avoid, formatting, or claims to exclude…":"ಬಳಸಬೇಕಾದ ಅಥವಾ ತಪ್ಪಿಸಬೇಕಾದ ಪದಗಳು, ವಿನ್ಯಾಸ ಅಥವಾ ಹೊರಗಿಡಬೇಕಾದ ಹೇಳಿಕೆಗಳು…","Your draft will appear here after you generate it.":"ಕರಡು ರಚಿಸಿದ ನಂತರ ಇಲ್ಲಿ ಕಾಣಿಸುತ್ತದೆ.","e.g. BGSCET Kannada":"ಉದಾ. BGSCET Kannada","e.g. friendly, direct, and grounded in our community":"ಉದಾ. ಸ್ನೇಹಪರ, ನೇರ ಮತ್ತು ಸಮುದಾಯಕ್ಕೆ ಹತ್ತಿರವಾದ","e.g. guaranteed results":"ಉದಾ. ಖಚಿತ ಫಲಿತಾಂಶಗಳು"});
Object.assign(siteCopy.hi, {"Purpose / next step":"उद्देश्य / अगला कदम","Names, dates, facts, keywords":"नाम, तारीख़, तथ्य, कीवर्ड","Cause, community, action":"मुद्दा, समुदाय, कार्रवाई","Services, expertise, trust":"सेवाएँ, विशेषज्ञता, भरोसा","Personality, stories, community":"व्यक्तित्व, कहानियाँ, समुदाय","Benefits, proof, discovery":"फ़ायदे, प्रमाण, खोज","Listening… Speak naturally in English, Hindi, or Kannada. Recording stops at 28 seconds.":"स्वाभाविक रूप से English, हिन्दी या ಕನ್ನಡ में बोलें। रिकॉर्डिंग 28 सेकंड में रुक जाएगी।","Microphone access was blocked. Allow it in the browser address bar, then try again.":"माइक्रोफ़ोन की अनुमति बंद है। ब्राउज़र में अनुमति देकर फिर कोशिश करें।","Could not start the microphone. You can type the brief instead.":"माइक्रोफ़ोन शुरू नहीं हुआ। आप ब्रीफ़ टाइप कर सकते हैं।","Could not transcribe the recording.":"रिकॉर्डिंग का प्रतिलेख नहीं बन सका।","Local STT returned the wrong script for Kannada; no transcript was added. Choose the spoken language and retry.":"स्थानीय पहचान ने Kannada के लिए गलत लिपि दी; कोई प्रतिलेख नहीं जोड़ा। बोली जाने वाली भाषा चुनकर फिर कोशिश करें।","Auto-detect could not identify English, Hindi, or Kannada. Choose the spoken language and retry; no transcript was added.":"भाषा की पहचान नहीं हुई। बोली जाने वाली भाषा चुनें और फिर कोशिश करें; कोई प्रतिलेख नहीं जोड़ा गया।","Review and correct the transcript before continuing":"आगे बढ़ने से पहले प्रतिलेख जाँचें और सुधारें","backup was unclear; please correct the transcript before continuing":"बैकअप भी स्पष्ट नहीं था; आगे बढ़ने से पहले प्रतिलेख सुधारें","Kannada script transliteration; review transcript":"सिर्फ़ कन्नड़ लिपि में बदला गया है; शब्दों को ध्यान से जाँचें"});
Object.assign(siteCopy.kn, {"Purpose / next step":"ಉದ್ದೇಶ / ಮುಂದಿನ ಹೆಜ್ಜೆ","Names, dates, facts, keywords":"ಹೆಸರುಗಳು, ದಿನಾಂಕಗಳು, ಸಂಗತಿಗಳು, ಕೀವರ್ಡ್‌ಗಳು","Cause, community, action":"ಕಾರಣ, ಸಮುದಾಯ, ಕ್ರಮ","Services, expertise, trust":"ಸೇವೆಗಳು, ಪರಿಣತಿ, ನಂಬಿಕೆ","Personality, stories, community":"ವ್ಯಕ್ತಿತ್ವ, ಕಥೆಗಳು, ಸಮುದಾಯ","Benefits, proof, discovery":"ಪ್ರಯೋಜನಗಳು, ಸಾಕ್ಷ್ಯ, ಅನ್ವೇಷಣೆ","Listening… Speak naturally in English, Hindi, or Kannada. Recording stops at 28 seconds.":"English, ಹಿಂದಿ ಅಥವಾ ಕನ್ನಡದಲ್ಲಿ ಸಹಜವಾಗಿ ಮಾತನಾಡಿ. 28 ಸೆಕೆಂಡುಗಳಲ್ಲಿ ರೆಕಾರ್ಡಿಂಗ್ ನಿಲ್ಲುತ್ತದೆ.","Microphone access was blocked. Allow it in the browser address bar, then try again.":"ಮೈಕ್ರೊಫೋನ್ ಅನುಮತಿ ನಿರಾಕರಿಸಲಾಗಿದೆ. ಬ್ರೌಸರ್‌ನಲ್ಲಿ ಅನುಮತಿಸಿ ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.","Could not start the microphone. You can type the brief instead.":"ಮೈಕ್ರೊಫೋನ್ ಆರಂಭವಾಗಲಿಲ್ಲ. ಬ್ರೀಫ್ ಅನ್ನು ಟೈಪ್ ಮಾಡಬಹುದು.","Could not transcribe the recording.":"ರೆಕಾರ್ಡಿಂಗ್ ಲಿಪ್ಯಂತರವಾಗಲಿಲ್ಲ.","Local STT returned the wrong script for Kannada; no transcript was added. Choose the spoken language and retry.":"ಸ್ಥಳೀಯ ಗುರುತಿಸುವಿಕೆ ಕನ್ನಡಕ್ಕೆ ತಪ್ಪು ಲಿಪಿ ನೀಡಿದೆ; ಲಿಪ್ಯಂತರ ಸೇರಿಸಲಿಲ್ಲ. ಮಾತನಾಡುವ ಭಾಷೆ ಆಯ್ಕೆಮಾಡಿ ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.","Auto-detect could not identify English, Hindi, or Kannada. Choose the spoken language and retry; no transcript was added.":"ಭಾಷೆಯನ್ನು ಗುರುತಿಸಲಾಗಲಿಲ್ಲ. ಮಾತನಾಡುವ ಭಾಷೆ ಆಯ್ಕೆಮಾಡಿ ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ; ಲಿಪ್ಯಂತರ ಸೇರಿಸಲಿಲ್ಲ.","Review and correct the transcript before continuing":"ಮುಂದುವರಿಯುವ ಮೊದಲು ಲಿಪ್ಯಂತರ ಪರಿಶೀಲಿಸಿ ತಿದ್ದಿ","backup was unclear; please correct the transcript before continuing":"ಬ್ಯಾಕಪ್ ಕೂಡ ಸ್ಪಷ್ಟವಾಗಿಲ್ಲ; ಮುಂದುವರಿಯುವ ಮೊದಲು ಲಿಪ್ಯಂತರ ತಿದ್ದಿ","Kannada script transliteration; review transcript":"ಇದು ಕನ್ನಡ ಲಿಪಿಗೆ ಮಾತ್ರ ಬದಲಿಸಲಾಗಿದೆ; ಪದಗಳನ್ನು ಎಚ್ಚರಿಕೆಯಿಂದ ಪರಿಶೀಲಿಸಿ"});
Object.assign(siteCopy.hi, {"Raise awareness":"जागरूकता बढ़ाएँ","Explain the issue and why local attention matters.":"मुद्दा और स्थानीय ध्यान की अहमियत समझाएँ।","Fundraising appeal":"धन जुटाने की अपील","State the need, intended use, and clear donation action.":"ज़रूरत, धन का उपयोग और दान का स्पष्ट तरीका बताएँ।","Volunteer recruitment":"स्वयंसेवक जोड़ें","Show the role, time commitment, and how to join.":"भूमिका, समय की प्रतिबद्धता और जुड़ने का तरीका बताएँ।","Impact update":"प्रभाव की जानकारी","Share verified progress and what remains to be done.":"सत्यापित प्रगति और बाकी काम साझा करें।","Community event":"सामुदायिक कार्यक्रम","Invite people with essential event details.":"ज़रूरी कार्यक्रम विवरण के साथ लोगों को आमंत्रित करें।","Myth clarification":"भ्रम दूर करें","Correct misinformation calmly with sourced facts.":"स्रोत वाले तथ्यों से ग़लत जानकारी शांतिपूर्वक सुधारें।","Community story":"समुदाय की कहानी","Center a consented participant story without exploiting it.":"सहमति से मिली सहभागी की कहानी को सम्मान से प्रस्तुत करें।","Advocacy action":"जनहित की कार्रवाई","Explain a policy issue and a specific civic action.":"नीति के मुद्दे और नागरिक कार्रवाई को स्पष्ट करें।","Service launch":"सेवा की शुरुआत","Introduce the offer, audience, and practical value.":"सेवा, दर्शक और उसका व्यावहारिक लाभ बताएँ।","Customer result":"ग्राहक का नतीजा","Tell a permissioned customer story with verified evidence.":"अनुमति और सत्यापित प्रमाण के साथ ग्राहक की कहानी बताएँ।","Expert insight":"विशेषज्ञ की राय","Share one useful point of view backed by experience.":"अनुभव पर आधारित एक उपयोगी नज़रिया साझा करें।","Offer or promotion":"ऑफ़र या प्रचार","State terms and eligibility clearly without pressure.":"शर्तें और पात्रता साफ़ बताएँ, दबाव न बनाएँ।","Webinar or event":"वेबिनार या कार्यक्रम","Give the audience a reason to attend and key details.":"शामिल होने की वजह और ज़रूरी विवरण बताएँ।","Answer a customer question":"ग्राहक के सवाल का जवाब","Answer directly, then explain the next step.":"सीधा जवाब दें, फिर अगला कदम बताएँ।","Trust building":"भरोसा बनाएँ","Show process, people, or proof without unsupported claims.":"बिना अप्रमाणित दावों के प्रक्रिया, लोगों या प्रमाण को दिखाएँ।","Hiring announcement":"भर्ती की सूचना","Describe the role, team, and application path.":"भूमिका, टीम और आवेदन का तरीका बताएँ।","How-to lesson":"कैसे करें","Deliver a practical tip in an easy-to-follow sequence.":"आसान क्रम में एक काम की सलाह दें।","Personal story":"निजी कहानी","Share a relevant moment with a clear takeaway.":"एक प्रासंगिक अनुभव और उसका स्पष्ट निष्कर्ष साझा करें।","Product review":"उत्पाद समीक्षा","Separate firsthand experience from claims and sponsorship.":"अपने अनुभव को दावों और प्रायोजन से अलग रखें।","Collaboration":"साझेदारी","Introduce collaborators and the value for both audiences.":"सहयोगियों और दोनों दर्शकों के लाभ बताएँ।","Series episode":"श्रृंखला की कड़ी","Hook into the series and give this episode its own point.":"श्रृंखला से जोड़ें और इस कड़ी का अलग मुद्दा रखें।","Community question":"समुदाय से सवाल","Invite a focused response without engagement bait.":"बिना बनावटी जुड़ाव के एक केंद्रित जवाब माँगें।","Creator announcement":"क्रिएटर की घोषणा","Share what is changing and what followers can expect.":"क्या बदल रहा है और फ़ॉलोअर क्या उम्मीद रखें, बताएँ।","Sponsored content":"प्रायोजित सामग्री","Clearly disclose sponsorship and keep the creator's honest voice.":"प्रायोजन साफ़ बताएँ और क्रिएटर की ईमानदार आवाज़ बनाए रखें।","Product launch":"उत्पाद लॉन्च","Explain what is new, who it serves, and where to learn more.":"क्या नया है, यह किसके लिए है और अधिक जानकारी कहाँ मिलेगी, बताएँ।","Feature spotlight":"ख़ास सुविधा","Show one feature through a concrete use case.":"एक ठोस उदाहरण से एक सुविधा दिखाएँ।","Use case":"उपयोग का उदाहरण","Describe a real situation and how the product fits.":"वास्तविक स्थिति और उसमें उत्पाद की भूमिका बताएँ।","Product comparison":"उत्पाद की तुलना","Compare fairly using verifiable, relevant criteria.":"जाँचने योग्य और प्रासंगिक मानदंडों से निष्पक्ष तुलना करें।","Behind the product":"उत्पाद के पीछे","Explain design, sourcing, or making with substantiated details.":"डिज़ाइन, स्रोत या निर्माण के बारे में प्रमाणित विवरण दें।","Seasonal campaign":"मौसमी अभियान","Connect the product to a timely need without false urgency.":"बिना झूठी जल्दबाज़ी के उत्पाद को मौसमी ज़रूरत से जोड़ें।","Product FAQ":"उत्पाद के आम सवाल","Answer a likely buyer question accurately.":"खरीदार के संभावित सवाल का सटीक जवाब दें।","Customer testimonial":"ग्राहक की प्रतिक्रिया","Use approved customer feedback and preserve its meaning.":"स्वीकृत ग्राहक प्रतिक्रिया का अर्थ जस का तस रखें।","Profile import available":"प्रोफ़ाइल से पोस्ट लाना उपलब्ध है","Connect account to import posts":"पोस्ट लाने के लिए खाता जोड़ें","Ready to connect":"कनेक्ट करने के लिए तैयार","Connected":"कनेक्ट है","Import posts":"पोस्ट लाएँ","Disconnect":"डिस्कनेक्ट करें","Could not reach the local connection service.":"स्थानीय कनेक्शन सेवा तक पहुँचा नहीं जा सका।"});
Object.assign(siteCopy.kn, {"Raise awareness":"ಜಾಗೃತಿ ಮೂಡಿಸಿ","Explain the issue and why local attention matters.":"ಸಮಸ್ಯೆ ಮತ್ತು ಸ್ಥಳೀಯ ಗಮನದ ಮಹತ್ವ ತಿಳಿಸಿ.","Fundraising appeal":"ನಿಧಿ ಸಂಗ್ರಹದ ಮನವಿ","State the need, intended use, and clear donation action.":"ಅಗತ್ಯ, ನಿಧಿಯ ಬಳಕೆ ಮತ್ತು ದೇಣಿಗೆಯ ವಿಧಾನ ತಿಳಿಸಿ.","Volunteer recruitment":"ಸ್ವಯಂಸೇವಕರನ್ನು ಆಹ್ವಾನಿಸಿ","Show the role, time commitment, and how to join.":"ಪಾತ್ರ, ಸಮಯದ ಬದ್ಧತೆ ಮತ್ತು ಸೇರುವ ವಿಧಾನ ತಿಳಿಸಿ.","Impact update":"ಪರಿಣಾಮದ ಮಾಹಿತಿ","Share verified progress and what remains to be done.":"ಪರಿಶೀಲಿಸಿದ ಪ್ರಗತಿ ಮತ್ತು ಬಾಕಿ ಕೆಲಸ ಹಂಚಿಕೊಳ್ಳಿ.","Community event":"ಸಮುದಾಯ ಕಾರ್ಯಕ್ರಮ","Invite people with essential event details.":"ಅಗತ್ಯ ಕಾರ್ಯಕ್ರಮದ ವಿವರಗಳೊಂದಿಗೆ ಜನರನ್ನು ಆಹ್ವಾನಿಸಿ.","Myth clarification":"ತಪ್ಪು ಕಲ್ಪನೆ ಸ್ಪಷ್ಟಪಡಿಸಿ","Correct misinformation calmly with sourced facts.":"ಆಧಾರಿತ ಸಂಗತಿಗಳಿಂದ ತಪ್ಪುಮಾಹಿತಿಯನ್ನು ಶಾಂತವಾಗಿ ಸರಿಪಡಿಸಿ.","Community story":"ಸಮುದಾಯದ ಕಥೆ","Center a consented participant story without exploiting it.":"ಒಪ್ಪಿಗೆಯೊಂದಿಗೆ ಪಡೆದ ವ್ಯಕ್ತಿಯ ಕಥೆಯನ್ನು ಗೌರವದಿಂದ ಹೇಳಿ.","Advocacy action":"ಸಾರ್ವಜನಿಕ ಹಿತದ ಕ್ರಮ","Explain a policy issue and a specific civic action.":"ನೀತಿ ಸಮಸ್ಯೆ ಮತ್ತು ನಿರ್ದಿಷ್ಟ ನಾಗರಿಕ ಕ್ರಮ ತಿಳಿಸಿ.","Service launch":"ಸೇವೆಯ ಆರಂಭ","Introduce the offer, audience, and practical value.":"ಸೇವೆ, ಪ್ರೇಕ್ಷಕರು ಮತ್ತು ಅದರ ಪ್ರಾಯೋಗಿಕ ಮೌಲ್ಯ ತಿಳಿಸಿ.","Customer result":"ಗ್ರಾಹಕರ ಫಲಿತಾಂಶ","Tell a permissioned customer story with verified evidence.":"ಅನುಮತಿ ಮತ್ತು ಪರಿಶೀಲಿಸಿದ ಸಾಕ್ಷ್ಯದೊಂದಿಗೆ ಗ್ರಾಹಕರ ಕಥೆ ತಿಳಿಸಿ.","Expert insight":"ತಜ್ಞರ ಒಳನೋಟ","Share one useful point of view backed by experience.":"ಅನುಭವದ ಆಧಾರದ ಒಂದು ಉಪಯುಕ್ತ ದೃಷ್ಟಿಕೋನ ಹಂಚಿಕೊಳ್ಳಿ.","Offer or promotion":"ಆಫರ್ ಅಥವಾ ಪ್ರಚಾರ","State terms and eligibility clearly without pressure.":"ಒತ್ತಡವಿಲ್ಲದೆ ಷರತ್ತು ಮತ್ತು ಅರ್ಹತೆ ಸ್ಪಷ್ಟಪಡಿಸಿ.","Webinar or event":"ವೆಬಿನಾರ್ ಅಥವಾ ಕಾರ್ಯಕ್ರಮ","Give the audience a reason to attend and key details.":"ಭಾಗವಹಿಸುವ ಕಾರಣ ಮತ್ತು ಮುಖ್ಯ ವಿವರ ನೀಡಿ.","Answer a customer question":"ಗ್ರಾಹಕರ ಪ್ರಶ್ನೆಗೆ ಉತ್ತರ","Answer directly, then explain the next step.":"ನೇರವಾಗಿ ಉತ್ತರಿಸಿ, ನಂತರ ಮುಂದಿನ ಹೆಜ್ಜೆ ತಿಳಿಸಿ.","Trust building":"ನಂಬಿಕೆ ಬೆಳೆಸಿ","Show process, people, or proof without unsupported claims.":"ಆಧಾರರಹಿತ ಹೇಳಿಕೆಗಳಿಲ್ಲದೆ ಪ್ರಕ್ರಿಯೆ, ಜನರು ಅಥವಾ ಸಾಕ್ಷ್ಯ ತೋರಿಸಿ.","Hiring announcement":"ನೇಮಕಾತಿ ಪ್ರಕಟಣೆ","Describe the role, team, and application path.":"ಹುದ್ದೆ, ತಂಡ ಮತ್ತು ಅರ್ಜಿ ಸಲ್ಲಿಸುವ ವಿಧಾನ ತಿಳಿಸಿ.","How-to lesson":"ಹೇಗೆ ಮಾಡುವುದು","Deliver a practical tip in an easy-to-follow sequence.":"ಸುಲಭವಾಗಿ ಅನುಸರಿಸಬಹುದಾದ ಕ್ರಮದಲ್ಲಿ ಉಪಯುಕ್ತ ಸಲಹೆ ನೀಡಿ.","Personal story":"ವೈಯಕ್ತಿಕ ಕಥೆ","Share a relevant moment with a clear takeaway.":"ಸಂಬಂಧಿತ ಅನುಭವ ಮತ್ತು ಸ್ಪಷ್ಟ ಕಲಿಕೆ ಹಂಚಿಕೊಳ್ಳಿ.","Product review":"ಉತ್ಪನ್ನ ವಿಮರ್ಶೆ","Separate firsthand experience from claims and sponsorship.":"ನೇರ ಅನುಭವವನ್ನು ಹೇಳಿಕೆ ಮತ್ತು ಪ್ರಾಯೋಜಕತ್ವದಿಂದ ಪ್ರತ್ಯೇಕಿಸಿ.","Collaboration":"ಸಹಯೋಗ","Introduce collaborators and the value for both audiences.":"ಸಹಯೋಗಿಗಳನ್ನು ಮತ್ತು ಎರಡೂ ಪ್ರೇಕ್ಷಕರಿಗಿರುವ ಮೌಲ್ಯ ತಿಳಿಸಿ.","Series episode":"ಸರಣಿಯ ಕಂತು","Hook into the series and give this episode its own point.":"ಸರಣಿಗೆ ಜೋಡಿಸಿ, ಈ ಕಂತಿನದೇ ಆದ ಅಂಶ ತಿಳಿಸಿ.","Community question":"ಸಮುದಾಯದ ಪ್ರಶ್ನೆ","Invite a focused response without engagement bait.":"ಕೃತಕ ಆಕರ್ಷಣೆಯಿಲ್ಲದೆ ನಿರ್ದಿಷ್ಟ ಪ್ರತಿಕ್ರಿಯೆ ಕೇಳಿ.","Creator announcement":"ಸೃಷ್ಟಿಕರ್ತರ ಪ್ರಕಟಣೆ","Share what is changing and what followers can expect.":"ಏನು ಬದಲಾಗುತ್ತಿದೆ ಮತ್ತು ಅನುಯಾಯಿಗಳು ಏನು ನಿರೀಕ್ಷಿಸಬಹುದು ತಿಳಿಸಿ.","Sponsored content":"ಪ್ರಾಯೋಜಿತ ವಿಷಯ","Clearly disclose sponsorship and keep the creator's honest voice.":"ಪ್ರಾಯೋಜಕತ್ವವನ್ನು ಸ್ಪಷ್ಟಪಡಿಸಿ, ಸೃಷ್ಟಿಕರ್ತರ ನೈಜ ಧ್ವನಿ ಉಳಿಸಿ.","Product launch":"ಉತ್ಪನ್ನ ಬಿಡುಗಡೆ","Explain what is new, who it serves, and where to learn more.":"ಹೊಸದೇನು, ಇದು ಯಾರಿಗೆ ಉಪಯುಕ್ತ ಮತ್ತು ಹೆಚ್ಚಿನ ಮಾಹಿತಿ ಎಲ್ಲಿ ಸಿಗುತ್ತದೆ ತಿಳಿಸಿ.","Feature spotlight":"ವೈಶಿಷ್ಟ್ಯದ ಪರಿಚಯ","Show one feature through a concrete use case.":"ನೈಜ ಬಳಕೆಯ ಉದಾಹರಣೆಯಿಂದ ಒಂದು ವೈಶಿಷ್ಟ್ಯ ತೋರಿಸಿ.","Use case":"ಬಳಕೆಯ ಉದಾಹರಣೆ","Describe a real situation and how the product fits.":"ನೈಜ ಸಂದರ್ಭ ಮತ್ತು ಅದಕ್ಕೆ ಉತ್ಪನ್ನ ಹೇಗೆ ಹೊಂದುತ್ತದೆ ವಿವರಿಸಿ.","Product comparison":"ಉತ್ಪನ್ನ ಹೋಲಿಕೆ","Compare fairly using verifiable, relevant criteria.":"ಪರಿಶೀಲಿಸಬಹುದಾದ ಸಂಬಂಧಿತ ಮಾನದಂಡಗಳಿಂದ ನ್ಯಾಯಯುತವಾಗಿ ಹೋಲಿಸಿ.","Behind the product":"ಉತ್ಪನ್ನದ ಹಿಂದಿನ ಕಥೆ","Explain design, sourcing, or making with substantiated details.":"ವಿನ್ಯಾಸ, ಮೂಲ ಅಥವಾ ತಯಾರಿಕೆಯ ಬಗ್ಗೆ ದೃಢ ವಿವರ ನೀಡಿ.","Seasonal campaign":"ಋತುಮಾನ ಅಭಿಯಾನ","Connect the product to a timely need without false urgency.":"ಸುಳ್ಳು ಆತುರವಿಲ್ಲದೆ ಉತ್ಪನ್ನವನ್ನು ಋತುಮಾನದ ಅಗತ್ಯಕ್ಕೆ ಜೋಡಿಸಿ.","Product FAQ":"ಉತ್ಪನ್ನದ ಸಾಮಾನ್ಯ ಪ್ರಶ್ನೆಗಳು","Answer a likely buyer question accurately.":"ಖರೀದಿದಾರರ ಸಾಧ್ಯ ಪ್ರಶ್ನೆಗೆ ನಿಖರವಾಗಿ ಉತ್ತರಿಸಿ.","Customer testimonial":"ಗ್ರಾಹಕರ ಅಭಿಪ್ರಾಯ","Use approved customer feedback and preserve its meaning.":"ಅನುಮೋದಿತ ಗ್ರಾಹಕ ಪ್ರತಿಕ್ರಿಯೆಯ ಅರ್ಥ ಬದಲಿಸದೆ ಬಳಸಿ.","Profile import available":"ಪ್ರೊಫೈಲ್ ಪೋಸ್ಟ್‌ಗಳನ್ನು ತರಬಹುದು","Connect account to import posts":"ಪೋಸ್ಟ್ ತರಲು ಖಾತೆ ಸಂಪರ್ಕಿಸಿ","Ready to connect":"ಸಂಪರ್ಕಿಸಲು ಸಿದ್ಧ","Connected":"ಸಂಪರ್ಕಗೊಂಡಿದೆ","Import posts":"ಪೋಸ್ಟ್‌ಗಳನ್ನು ಆಮದುಮಾಡಿ","Disconnect":"ಸಂಪರ್ಕ ಕಡಿತಗೊಳಿಸಿ","Could not reach the local connection service.":"ಸ್ಥಳೀಯ ಸಂಪರ್ಕ ಸೇವೆಯನ್ನು ತಲುಪಲಾಗಲಿಲ್ಲ."});
Object.assign(siteCopy.hi, {"Your voice profile":"आपकी आवाज़ प्रोफ़ाइल","WORDS / SENTENCE":"शब्द / वाक्य","HASHTAGS / POST":"हैशटैग / पोस्ट","POSTS WITH A QUESTION":"सवाल वाली पोस्ट","NO POST HISTORY":"पोस्ट इतिहास नहीं","SETTINGS CHANGED · REGENERATE TO APPLY":"सेटिंग बदली · लागू करने के लिए फिर बनाएँ","ADD AN IDEA TO START":"शुरू करने के लिए विचार जोड़ें","READY TO CREATE YOUR DRAFT":"ड्राफ़्ट बनाने के लिए तैयार","ADD YOUR IDEA FIRST":"पहले अपना विचार जोड़ें","MAPPING YOUR BRIEF INTO THE CONTROLS…":"आपके ब्रीफ़ से विकल्प भर रहे हैं…","WORKING ON YOUR EDIT…":"आपका बदलाव लागू हो रहा है…","WORKING ON YOUR DRAFT…":"ड्राफ़्ट बनाया जा रहा है…","DRAFT READY":"ड्राफ़्ट तैयार","Target not reached; review the actual count.":"लक्ष्य पूरा नहीं हुआ; वास्तविक शब्द संख्या जाँचें।","ADD AN EDIT FIRST":"पहले कोई बदलाव करें","WORD PREVIEW":"शब्दों का पूर्वावलोकन","WORD TARGET":"शब्द लक्ष्य","Add a name to save this voice.":"आवाज़ सहेजने के लिए नाम दें।","Paste at least one authored post, or start with preferences.":"अपनी लिखी कम से कम एक पोस्ट डालें या पसंद से शुरू करें।","Describe your style or add preferred or avoided words first.":"पहले अपनी शैली बताएँ या पसंद/बचाव वाले शब्द जोड़ें।","Building your voice profile…":"आवाज़ प्रोफ़ाइल बनाई जा रही है…","Profile ready. Save it to reuse this voice.":"प्रोफ़ाइल तैयार है। इस आवाज़ को दोबारा इस्तेमाल करने के लिए सहेजें।","Fetching profile posts from the selected platform API…":"चुने प्लेटफ़ॉर्म से पोस्ट ला रहे हैं…","No posts returned by the profile API.":"प्रोफ़ाइल से कोई पोस्ट नहीं मिली।","Open source ↗":"स्रोत खोलें ↗","Search unavailable. Continue without search.":"खोज उपलब्ध नहीं है। खोज के बिना जारी रखें।","No posts returned by the profile API. Continue with a recording or voice description.":"प्रोफ़ाइल से पोस्ट नहीं मिली। रिकॉर्डिंग या आवाज़ विवरण से जारी रखें।","Select only posts you wrote.":"केवल अपनी लिखी पोस्ट चुनें।","Public post excerpt":"सार्वजनिक पोस्ट का अंश","Your voice profile":"आपकी आवाज़ प्रोफ़ाइल","Add an idea or keyword first.":"पहले विचार या कीवर्ड जोड़ें।","Looking for related searches…":"संबंधित खोजें ढूँढ रहे हैं…","No related searches came back. Try a shorter or more specific keyword.":"कोई संबंधित खोज नहीं मिली। छोटा या अधिक खास कीवर्ड आज़माएँ।","Please try again.":"फिर कोशिश करें।","Could not load search suggestions.":"खोज सुझाव लोड नहीं हुए।","Auto-detect could not identify English, Hindi, or Kannada.":"भाषा की पहचान नहीं हो सकी।","Provider post history unavailable":"प्लेटफ़ॉर्म की पोस्ट जानकारी उपलब्ध नहीं है","No authored post text was returned. You can paste examples manually.":"आपकी लिखी पोस्ट का टेक्स्ट नहीं मिला। उदाहरण खुद चिपका सकते हैं।","Requesting provider-reported metrics for published drafts…":"प्रकाशित ड्राफ़्ट के आँकड़े माँगे जा रहे हैं…","Performance data is unavailable.":"प्रदर्शन का डेटा उपलब्ध नहीं है।","Add a name to save this voice.":"आवाज़ सहेजने के लिए नाम दें।","Voice profile saved locally.":"आवाज़ प्रोफ़ाइल डिवाइस पर सहेजी गई।","Could not save this profile.":"यह प्रोफ़ाइल सहेजी नहीं जा सकी।","Add the platform developer app credentials and approved OAuth scopes to the server environment first.":"पहले सर्वर में प्लेटफ़ॉर्म ऐप की जानकारी और स्वीकृत OAuth अनुमतियाँ जोड़ें।","Platform connection status is unavailable.":"प्लेटफ़ॉर्म कनेक्शन की स्थिति उपलब्ध नहीं है।","Connection state updated.":"कनेक्शन की स्थिति अपडेट हुई।","No provider-reported observations yet. Connect a supported account and sync metrics when the official API is configured.":"अभी प्लेटफ़ॉर्म के आँकड़े नहीं हैं। आधिकारिक API तैयार होने पर समर्थित खाता जोड़ें और आँकड़े सिंक करें।","Requesting provider-reported metrics for published drafts…":"प्रकाशित ड्राफ़्ट के आँकड़े माँगे जा रहे हैं…","Metric sync failed":"आँकड़े सिंक नहीं हुए","Provider metric sync failed.":"प्लेटफ़ॉर्म के आँकड़े सिंक नहीं हुए।","Add a name to save this voice.":"आवाज़ सहेजने के लिए नाम दें।","Delete the saved voice":"सहेजी गई आवाज़ मिटाएँ","Could not publish this draft. Please try again.":"ड्राफ़्ट प्रकाशित नहीं हुआ। फिर कोशिश करें।","Save a draft for the selected content format before publishing.":"प्रकाशित करने से पहले चुने फ़ॉर्मैट का ड्राफ़्ट सहेजें।","Your existing text is unchanged; please try again.":"आपका मौजूदा टेक्स्ट नहीं बदला; फिर कोशिश करें।","Ready to publish after your approval.":"आपकी मंज़ूरी के बाद प्रकाशित करने के लिए तैयार।","Publishing is temporarily unavailable.":"प्रकाशन अभी उपलब्ध नहीं है।"});
Object.assign(siteCopy.kn, {"Your voice profile":"ನಿಮ್ಮ ಧ್ವನಿ ಪ್ರೊಫೈಲ್","WORDS / SENTENCE":"ಪದಗಳು / ವಾಕ್ಯ","HASHTAGS / POST":"ಹ್ಯಾಷ್‌ಟ್ಯಾಗ್‌ಗಳು / ಪೋಸ್ಟ್","POSTS WITH A QUESTION":"ಪ್ರಶ್ನೆಯಿರುವ ಪೋಸ್ಟ್‌ಗಳು","NO POST HISTORY":"ಪೋಸ್ಟ್ ಇತಿಹಾಸವಿಲ್ಲ","SETTINGS CHANGED · REGENERATE TO APPLY":"ಸೆಟ್ಟಿಂಗ್ ಬದಲಾಗಿದೆ · ಅನ್ವಯಿಸಲು ಮತ್ತೆ ರಚಿಸಿ","ADD AN IDEA TO START":"ಆರಂಭಿಸಲು ಆಲೋಚನೆ ಸೇರಿಸಿ","READY TO CREATE YOUR DRAFT":"ಕರಡು ರಚಿಸಲು ಸಿದ್ಧ","ADD YOUR IDEA FIRST":"ಮೊದಲು ನಿಮ್ಮ ಆಲೋಚನೆ ಸೇರಿಸಿ","MAPPING YOUR BRIEF INTO THE CONTROLS…":"ನಿಮ್ಮ ಬ್ರೀಫ್‌ನಿಂದ ಆಯ್ಕೆಗಳನ್ನು ತುಂಬಲಾಗುತ್ತಿದೆ…","WORKING ON YOUR EDIT…":"ನಿಮ್ಮ ತಿದ್ದುಪಡಿ ಅನ್ವಯಿಸಲಾಗುತ್ತಿದೆ…","WORKING ON YOUR DRAFT…":"ಕರಡು ರಚಿಸಲಾಗುತ್ತಿದೆ…","DRAFT READY":"ಕರಡು ಸಿದ್ಧ","Target not reached; review the actual count.":"ಗುರಿ ತಲುಪಿಲ್ಲ; ನಿಜವಾದ ಪದ ಎಣಿಕೆ ಪರಿಶೀಲಿಸಿ.","ADD AN EDIT FIRST":"ಮೊದಲು ತಿದ್ದುಪಡಿ ಮಾಡಿ","WORD PREVIEW":"ಪದಗಳ ಮುನ್ನೋಟ","WORD TARGET":"ಪದಗಳ ಗುರಿ","Add a name to save this voice.":"ಧ್ವನಿ ಉಳಿಸಲು ಹೆಸರನ್ನು ಸೇರಿಸಿ.","Paste at least one authored post, or start with preferences.":"ನೀವು ಬರೆದ ಕನಿಷ್ಠ ಒಂದು ಪೋಸ್ಟ್ ಅಂಟಿಸಿ ಅಥವಾ ನಿಮ್ಮ ಆಯ್ಕೆಗಳಿಂದ ಆರಂಭಿಸಿ.","Describe your style or add preferred or avoided words first.":"ಮೊದಲು ನಿಮ್ಮ ಶೈಲಿ ವಿವರಿಸಿ ಅಥವಾ ಇಷ್ಟ/ತಪ್ಪಿಸಬೇಕಾದ ಪದ ಸೇರಿಸಿ.","Building your voice profile…":"ಧ್ವನಿ ಪ್ರೊಫೈಲ್ ರೂಪಿಸಲಾಗುತ್ತಿದೆ…","Profile ready. Save it to reuse this voice.":"ಪ್ರೊಫೈಲ್ ಸಿದ್ಧ. ಈ ಧ್ವನಿಯನ್ನು ಮತ್ತೆ ಬಳಸಲು ಉಳಿಸಿ.","Fetching profile posts from the selected platform API…":"ಆಯ್ದ ವೇದಿಕೆಯಿಂದ ಪೋಸ್ಟ್‌ಗಳನ್ನು ತರಲಾಗುತ್ತಿದೆ…","No posts returned by the profile API.":"ಪ್ರೊಫೈಲ್‌ನಿಂದ ಪೋಸ್ಟ್‌ಗಳು ಬಂದಿಲ್ಲ.","Open source ↗":"ಮೂಲ ತೆರೆಯಿರಿ ↗","Search unavailable. Continue without search.":"ಹುಡುಕಾಟ ಲಭ್ಯವಿಲ್ಲ. ಹುಡುಕಾಟವಿಲ್ಲದೆ ಮುಂದುವರಿಯಿರಿ.","Select only posts you wrote.":"ನೀವು ಬರೆದ ಪೋಸ್ಟ್‌ಗಳನ್ನಷ್ಟೇ ಆಯ್ಕೆಮಾಡಿ.","Public post excerpt":"ಸಾರ್ವಜನಿಕ ಪೋಸ್ಟ್‌ನ ಭಾಗ","Add an idea or keyword first.":"ಮೊದಲು ಆಲೋಚನೆ ಅಥವಾ ಕೀವರ್ಡ್ ಸೇರಿಸಿ.","Looking for related searches…":"ಸಂಬಂಧಿತ ಹುಡುಕಾಟಗಳನ್ನು ಹುಡುಕಲಾಗುತ್ತಿದೆ…","No related searches came back. Try a shorter or more specific keyword.":"ಸಂಬಂಧಿತ ಹುಡುಕಾಟ ಸಿಗಲಿಲ್ಲ. ಚಿಕ್ಕ ಅಥವಾ ನಿರ್ದಿಷ್ಟ ಕೀವರ್ಡ್ ಪ್ರಯತ್ನಿಸಿ.","Could not load search suggestions.":"ಹುಡುಕಾಟ ಸಲಹೆಗಳನ್ನು ಲೋಡ್ ಮಾಡಲಾಗಲಿಲ್ಲ.","Provider post history unavailable":"ವೇದಿಕೆಯ ಪೋಸ್ಟ್ ಇತಿಹಾಸ ಲಭ್ಯವಿಲ್ಲ","No authored post text was returned. You can paste examples manually.":"ನೀವು ಬರೆದ ಪೋಸ್ಟ್ ಪಠ್ಯ ಸಿಗಲಿಲ್ಲ. ಉದಾಹರಣೆಗಳನ್ನು ನೀವೇ ಅಂಟಿಸಬಹುದು.","Requesting provider-reported metrics for published drafts…":"ಪ್ರಕಟಿಸಿದ ಕರಡುಗಳ ಅಳತೆಗಳನ್ನು ಕೇಳಲಾಗುತ್ತಿದೆ…","Performance data is unavailable.":"ಕಾರ್ಯಕ್ಷಮತೆಯ ಮಾಹಿತಿ ಲಭ್ಯವಿಲ್ಲ.","Voice profile saved locally.":"ಧ್ವನಿ ಪ್ರೊಫೈಲ್ ಸಾಧನದಲ್ಲಿ ಉಳಿಸಲಾಗಿದೆ.","Could not save this profile.":"ಈ ಪ್ರೊಫೈಲ್ ಉಳಿಸಲಾಗಲಿಲ್ಲ.","Add the platform developer app credentials and approved OAuth scopes to the server environment first.":"ಮೊದಲು ವೇದಿಕೆಯ ಆ್ಯಪ್ ವಿವರಗಳು ಮತ್ತು ಅನುಮೋದಿತ OAuth ಅನುಮತಿಗಳನ್ನು ಸರ್ವರ್‌ಗೆ ಸೇರಿಸಿ.","Platform connection status is unavailable.":"ವೇದಿಕೆಯ ಸಂಪರ್ಕ ಸ್ಥಿತಿ ಲಭ್ಯವಿಲ್ಲ.","Connection state updated.":"ಸಂಪರ್ಕ ಸ್ಥಿತಿ ನವೀಕರಿಸಲಾಗಿದೆ.","No provider-reported observations yet. Connect a supported account and sync metrics when the official API is configured.":"ವೇದಿಕೆಯ ಅಳತೆಗಳು ಇನ್ನೂ ಇಲ್ಲ. ಅಧಿಕೃತ API ಸಿದ್ಧವಾದಾಗ ಬೆಂಬಲಿತ ಖಾತೆ ಸಂಪರ್ಕಿಸಿ.","Metric sync failed":"ಅಳತೆ ಸಿಂಕ್ ವಿಫಲವಾಗಿದೆ","Provider metric sync failed.":"ವೇದಿಕೆಯ ಅಳತೆ ಸಿಂಕ್ ವಿಫಲವಾಗಿದೆ.","Could not publish this draft. Please try again.":"ಈ ಕರಡು ಪ್ರಕಟಿಸಲಾಗಲಿಲ್ಲ. ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.","Save a draft for the selected content format before publishing.":"ಪ್ರಕಟಿಸುವ ಮೊದಲು ಆಯ್ದ ರೂಪದ ಕರಡನ್ನು ಉಳಿಸಿ.","Your existing text is unchanged; please try again.":"ನಿಮ್ಮ ಈಗಿನ ಪಠ್ಯ ಬದಲಾಗಿಲ್ಲ; ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.","Ready to publish after your approval.":"ನಿಮ್ಮ ಅನುಮೋದನೆಯ ನಂತರ ಪ್ರಕಟಿಸಲು ಸಿದ್ಧ.","Publishing is temporarily unavailable.":"ಪ್ರಕಟಣೆ ತಾತ್ಕಾಲಿಕವಾಗಿ ಲಭ್ಯವಿಲ್ಲ."});
let activeSiteLanguage = localStorage.getItem("voiceprint-site-language") || "en";
const originalTextNodes = new WeakMap();
const renderedTextNodes = new WeakMap();
const originalAttributes = new WeakMap();
const renderedAttributes = new WeakMap();
function translateCopy(source) {
  const dictionary = siteCopy[activeSiteLanguage];
  if (!dictionary || !source) return source;
  if (dictionary[source]) return dictionary[source];
  let result = source;
  for (const [english, translated] of Object.entries(dictionary).sort((a, b) => b[0].length - a[0].length)) {
    if (!english || english.length < 4 || english === source) continue;
    result = result.replaceAll(english, translated);
  }
  return result;
}
function translatePage(root = document) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  let node;
  while ((node = walker.nextNode())) {
    if (!node.nodeValue.trim()) continue;
    const rendered = renderedTextNodes.get(node);
    if (rendered !== node.nodeValue) originalTextNodes.set(node, node.nodeValue);
    const original = originalTextNodes.get(node) || node.nodeValue;
    const leading = original.match(/^\s*/)?.[0] || "";
    const trailing = original.match(/\s*$/)?.[0] || "";
    const body = original.slice(leading.length, original.length - trailing.length || undefined);
    const localized = leading + translateCopy(body) + trailing;
    if (node.nodeValue !== localized) node.nodeValue = localized;
    renderedTextNodes.set(node, localized);
  }
  const elements = root.nodeType === Node.ELEMENT_NODE ? [root, ...root.querySelectorAll("*")] : [...root.querySelectorAll("*")];
  for (const element of elements) {
    if (element.tagName === "OPTION" && ["campaign-language", "output-language"].includes(element.parentElement?.id) && !element.hasAttribute("value")) {
      element.value = element.textContent.trim();
    }
    for (const name of ["placeholder", "title", "aria-label"]) {
      if (!element.hasAttribute(name)) continue;
      let originals = originalAttributes.get(element);
      if (!originals) { originals = {}; originalAttributes.set(element, originals); }
      let rendered = renderedAttributes.get(element);
      if (!rendered) { rendered = {}; renderedAttributes.set(element, rendered); }
      const current = element.getAttribute(name);
      if (rendered[name] !== current) originals[name] = current;
      const localized = translateCopy(originals[name] || current);
      if (current !== localized) element.setAttribute(name, localized);
      rendered[name] = localized;
    }
  }
  document.documentElement.lang = activeSiteLanguage;
  const title = "Pehchaan — posts that sound like you";
  const localizedTitle = activeSiteLanguage === "hi" ? "Pehchaan — आपकी जैसी लगने वाली पोस्ट" : activeSiteLanguage === "kn" ? "Pehchaan — ನಿಮ್ಮಂತೆಯೇ ಕೇಳಿಸುವ ಪೋಸ್ಟ್‌ಗಳು" : title;
  if (document.title !== localizedTitle) document.title = localizedTitle;
}
function setSiteLanguage(language) {
  activeSiteLanguage = ["en", "hi", "kn"].includes(language) ? language : "en";
  localStorage.setItem("voiceprint-site-language", activeSiteLanguage);
  translatePage();
}
const siteLanguageObserver = new MutationObserver(records => {
  for (const record of records) {
    if (record.type === "characterData") translatePage(record.target.parentElement || document);
    else for (const added of record.addedNodes) {
      if (added.nodeType === Node.ELEMENT_NODE) translatePage(added);
      else if (added.nodeType === Node.TEXT_NODE) translatePage(added.parentElement || document);
    }
  }
});
siteLanguageObserver.observe(document.documentElement, {subtree: true, childList: true, characterData: true});

const brands = {
  streetwear: {
    name: "Northstar Supply", handle: "northstarsupply", avatar: "N", platform: "instagram",
    description: "Independent streetwear. Unfiltered, playful, community-first.",
    summary: "A little grit, a lot of heart. Northstar talks like the friend who found the good spot first and brought everyone along.",
    tone: "Direct · playful · streetwise", dos: "Talk to the community. Keep it punchy.", donts: "Skip corporate speak and fake hype.",
    samples: ["No map. No rush. Just the long way home.  #NorthstarSupply", "The city looks better when you take the side streets. You know the ones. ", "Small batch. Big plans. The new utility overshirt is here. What are you pairing it with?  #BuiltForTheInBetween", "Same crew, new uniform. Appreciate everyone who showed up for the pop-up. You made it feel like home. ", "Weather said stay in. We said one more lap.  #KeepMoving", "Good clothes get stories. Tag us in yours. #NorthstarOnTheMove "],
  },
  saas: {
    name: "SignalDesk", handle: "signaldesk", avatar: "S", platform: "linkedin",
    description: "B2B SaaS for customer teams. Clear, useful, quietly confident.",
    summary: "SignalDesk makes complex work feel manageable. The voice is thoughtful and specific, with the customer’s day always in view.",
    tone: "Clear · useful · quietly confident", dos: "Lead with an insight. Make the benefit concrete.", donts: "Avoid buzzwords and unsupported claims.",
    samples: ["The best customer handoff is the one your customer never has to think about. We made a small change to help teams get there.", "A faster response is good. A response with the right context is better. Here is how support teams can close that gap.", "We spoke with 18 customer leaders about the signals they trust. One pattern kept coming up: context beats volume.", "New in SignalDesk: shared account notes. Your team can pick up the conversation without asking the customer to start over.", "Good operations are often invisible. This week, we are sharing a look at the workflows that keep customer teams aligned.", "A product update should solve a real Tuesday problem. This one helps teams see what needs attention before it becomes urgent."],
  }
};
let previousScenario = "streetwear";
let campaignAssets = {};
let voiceMode = "fresh";
let customVoiceProfile = null;
let creatorCategory = "product";
let importedSamplePosts = null;
let outputLanguage = "English";
let setupStep = 1;
let setupAnswers = {};
let scenarioCatalog = {};
let voiceProfiles = [];
let workflowPublishAvailable = false;
let currentCampaignId = null;
let currentDraftId = null;
let currentDraftPlatform = null;
let currentCampaignSignature = "";
let hasApiDraft = false;
let wordTargetTimer = null;
let lastQuality = {};
let selectedVoiceProfileId = null;
let currentVideoAssetId = null;
let generatedImagePrompt = "";
let trendSuggestions = [];
let ideaRecorder = null;
const manuallyChosenControls = new Set();
let lastBriefMapSignature = "";
let ideaRecorderStream = null;
let ideaRecorderChunks = [];
let ideaRecorderStopTimer = null;
let latestSpeechInsertion = "";
let browserSpeechRecognition = null;
let browserSpeechDraft = "";
let browserSpeechFinal = "";

const sentencePattern = /[^.!?]+[.!?]+|[^.!?]+$/g;
const wordPattern = /[\p{L}\p{N}\p{M}]+(?:['’][\p{L}\p{N}\p{M}]+)*/gu;
const hashtagPattern = /#[\p{L}\p{N}_]+/gu;
const supportedLanguages = ["English","Hindi","Kannada","Hinglish","Kanglish"];
function words(text) { return text.match(wordPattern) || []; }
function platformName(value){return ({instagram:"Instagram",linkedin:"LinkedIn",x:"X"})[value]||value;}
function getStats(posts) {
  let lens = [], tags = 0, questions = 0;
  for (const post of posts) { const ss = post.match(sentencePattern) || []; lens.push(...ss.map(s => words(s).length).filter(Boolean)); tags += (post.match(hashtagPattern) || []).length; if (post.includes("?")) questions++; }
  return { sentenceLength: lens.length ? lens.reduce((a,b)=>a+b,0)/lens.length : 0, hashtags: posts.length ? tags/posts.length : 0, questionRatio: posts.length ? questions/posts.length*100 : 0 };
}
function escapeHtml(s) { return String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c])); }
function currentBrand() { return brands[$("#scenario").value]; }
function renderProfile(key) {
  const b=brands[key];
  const samplePosts=voiceMode==="posts"?samplePostInput():voiceMode==="fresh"?[]:b.samples;
  const m=samplePosts.length?getStats(samplePosts):null;
  let localProfile=b;
  if(voiceMode==="fresh"){
    const description=$("#voice-description").value.trim(), avoid=$("#avoid-words").value.trim();
    localProfile={summary:description||"No voice guidance yet. Add a recording or posts if you want the draft to match an established voice.",tone:$("#voice-tone").value,dos:"Use the source examples and recording as voice guidance.",donts:avoid?`Avoid these terms: ${avoid}.`:"Do not invent facts."};
  }else if(voiceMode==="posts"){
    localProfile={summary:samplePosts.length?"Your profile will be based on the writing samples you provide.":"Paste one or more of your posts to build a profile.",tone:"Tone is waiting for your sample posts.",dos:"Add favorite words if you want them used naturally.",donts:"Add terms or claims you want to avoid."};
  }
  const p=customVoiceProfile||localProfile;
  $("#profile-title").textContent=voiceMode==="demo"?b.name:"Your voice profile"; $("#profile-summary").textContent=p.summary||b.summary; if($("#scenario-description"))$("#scenario-description").textContent=b.description;
  $("#tone-notes").textContent=p.tone||b.tone; $("#dos-notes").textContent=p.dos||b.dos; $("#donts-notes").textContent=p.donts||b.donts;
  $("#adapted-brand-title").textContent=voiceMode==="demo"?b.name:"Your voice"; $("#adapted-handle").textContent=voiceMode==="demo"?b.handle:"personal profile"; $("#brand-avatar").textContent=voiceMode==="demo"?b.avatar:"Y";
  $("#metrics-grid").innerHTML=m?[[m.sentenceLength.toFixed(1),"WORDS / SENTENCE"],[m.hashtags.toFixed(1),"HASHTAGS / POST"],[`${Math.round(m.questionRatio)}%`,"POSTS WITH A QUESTION"]].map(([v,l])=>`<div class="metric"><strong>${v}</strong><span>${l}</span></div>`).join(""):[["—","NO POST HISTORY"],["—","NO POST HISTORY"],["—","NO POST HISTORY"]].map(([v,l])=>`<div class="metric"><strong>${v}</strong><span>${l}</span></div>`).join("");
  $("#library").hidden=voiceMode==="fresh";
  if(voiceMode==="posts")$("#library summary").firstChild.textContent=`View ${samplePosts.length||"your"} sample posts behind this profile `;
  $("#sample-list").innerHTML=samplePosts.map(s=>`<li>${escapeHtml(s)}</li>`).join("");
}
function samplePostInput(){return importedSamplePosts || $("#sample-posts-input").value.split(/\n\s*\n/).map(s=>s.trim()).filter(Boolean).slice(0,10);}
function values() { creatorCategory=$("#campaign-category").value;outputLanguage=$("#campaign-language").value;return { brand_id:$("#scenario").value||"streetwear", profile_id:selectedVoiceProfileId, category:creatorCategory, scenario_id:$("#scenario-id").value, campaign_intent:$("#campaign-intent").value, target_words:+$("#target-words").value, energy:+$("#energy").value, language:outputLanguage, optimization:$("#optimization").value, keywords:$("#campaign-keywords").value.trim(), keyword_context:$("#keyword-context").value.trim(), topic:$("#topic").value.trim(), platform:$("#platform").value, length:"medium", formality:+$("#formality").value, audience:$("#audience").value.trim(), campaign_name:"", campaign_goal:$("#campaign-goal").value.trim(), knowledge:$("#brand-knowledge").value.trim(), style_guide:$("#style-guide").value.trim(), voice_mode:voiceMode, sample_posts:voiceMode==="posts"?samplePostInput():[], voice_description:$("#voice-description").value.trim(), voice_tone:$("#voice-tone").value, favorite_words:"", avoid_words:$("#avoid-words").value.trim() }; }
function cleanSubject(topic) { return topic.trim().replace(/[.!?]+$/,"" ) || "Our latest update"; }
function formalityStyle(value, saas) {
  if(value<30) return saas?"plain-spoken":"casual";
  if(value<70) return saas?"clear and warm":"confident and relaxed";
  return saas?"polished and precise":"considered and refined";
}
function buildDraft(v, adapted=true, editSeed="") {
  const b=brands[v.brand_id], saas=v.brand_id==="saas", subject=cleanSubject(v.topic), formal=v.formality>=68, veryFormal=v.formality>=82;
  const campaign=v.campaign_name ? `${v.campaign_name}: ` : "";
  const knowledge=v.knowledge ? v.knowledge.split(/[.!?\n]/).map(s=>s.trim()).filter(Boolean).slice(0,2).join(". ") : "";
  const goal=v.campaign_goal || "";
  const audience=v.audience || "";
  const factual=knowledge ? `${knowledge.replace(/[.!?]+$/g,"")}.` : "";
  let opening, body, close;
  if(!adapted) {
    opening=veryFormal?"We are pleased to announce":"Here’s the update";
    body=`${subject}. ${factual||"Explore the latest details and see what is new."}`;
    close=/instagram/.test(v.platform)?"Take a look today.":"Learn more today.";
  } else if(saas) {
    opening=veryFormal?"A clearer way forward for customer teams.":formal?"A practical update for customer teams.":"A small update, built around a real workday.";
    body=editSeed || `${campaign}${subject}. ${factual || `We focused on making the next step clearer for ${audience}.`} ${formal?`The aim is simple: ${goal.toLowerCase().replace(/[.!?]+$/g,"")}.`:`Less time coordinating, more time helping customers.`}`;
    close=v.platform==="x"?"What would make this workflow clearer?":"See what changed, and tell us what would make your workflow clearer.";
  } else {
    opening=veryFormal?"A clear story, with the details that matter.":formal?"A thoughtful update for your audience.":"Here’s what matters.";
    body=editSeed || `${campaign}${subject}.${factual?` ${factual}`:""}${audience?` For ${audience}.`:""}${goal?` The goal is to ${goal.toLowerCase().replace(/[.!?]+$/g,"")}.`:""}`;
    close="What would you add?";
  }
  if(adapted&&v.voice_mode==="fresh"){
    const tone=(v.voice_tone||v.voice_description||"").toLowerCase();
    if(/witty|playful/.test(tone))opening="A little less ordinary. A lot more you.";
    else if(/expert|precise/.test(tone))opening="A clear update, with the details that matter.";
    else if(/minimal|direct/.test(tone))opening="Here is what is new.";
    else if(/warm|approachable/.test(tone))opening="A note from us, for you.";
  }
  if(v.length==="short") { body=body.split(/(?<=[.!?])\s+/).slice(0,1).join(" "); close=""; }
  if(v.length==="long") body += saas?" We shaped this around the moments that slow customer teams down, so the next handoff has more useful context.":" Add a relevant detail from the brief, explain why it matters to the audience, and make the next step clear.";
  if(v.platform==="x" && words(`${opening} ${body} ${close}`).length>45) body=body.split(/(?<=[.!?])\s+/).slice(0,2).join(" ");
  let text=[opening,body,close].filter(Boolean).join("\n\n");
  if(adapted && !saas && v.platform==="instagram") text += "";
  if(adapted && saas && v.platform==="linkedin" && v.length!=="short") text += "\n\nLess noise. Better conversations.";
  if(adapted&&v.platform==="tiktok")text=`${opening} ${body.split(".")[0]}.\n\n#ForYou #BehindTheBrand`;
  if(adapted&&v.platform==="threads")text=[opening,body,close].filter(Boolean).join(" ");
  if(adapted&&v.platform==="facebook")text=[opening,body,close].filter(Boolean).join("\n\n");
  if(adapted&&v.platform==="youtube_shorts")text=`${opening}\n\n${body}\n\nWatch the short for the full story.`;
  if(adapted&&v.platform==="pinterest")text=`${subject}: ${body}`;
  const favorite=(v.favorite_words||"").split(",").map(s=>s.trim()).find(Boolean);
  if(adapted&&favorite&&!text.toLowerCase().includes(favorite.toLowerCase()))text+=`\n\nKeep the feel of “${favorite}” in every detail.`;
  if(adapted&&v.keywords){const keyword=v.keywords.split(/,|\n/).map(x=>x.trim()).find(Boolean);if(keyword&&!text.toLocaleLowerCase().includes(keyword.toLocaleLowerCase()))text+=`\n\n${keyword}${v.keyword_context?` — ${v.keyword_context.trim().replace(/[.!?]+$/g,"")}.`:"."}`;}
  if(adapted&&["aeo","all"].includes(v.optimization)&&v.knowledge&&!text.toLocaleLowerCase().includes(v.knowledge.toLocaleLowerCase()))text+=`\n\n${v.knowledge}`;
  if(adapted&&["geo","all"].includes(v.optimization)&&v.knowledge&&!text.toLocaleLowerCase().includes(v.knowledge.toLocaleLowerCase()))text+=`\n\nContext: ${v.knowledge}`;
  if(adapted&&v.keywords){const keyword=v.keywords.split(/,|\n/).map(x=>x.trim()).find(Boolean);if(keyword&&!text.toLocaleLowerCase().includes(keyword.toLocaleLowerCase()))text+=`\n\n${keyword}${v.keyword_context?` — ${v.keyword_context.trim().replace(/[.!?]+$/g,"")}.`:"."}`;}
  if(adapted&&v.avoid_words)for(const term of v.avoid_words.split(",").map(s=>s.trim()).filter(s=>s.length>2))text=text.replace(new RegExp(term.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"ig"),"").replace(/[ \t]{2,}/g," ");
  if(adapted && v.style_guide) { const avoid=(v.style_guide.match(/(?:avoid|never|skip|don't|do not)\s+([^.;\n]+)/i)||[])[1]; if(avoid) for(const term of avoid.split(/,|\band\b/i).map(s=>s.trim()).filter(s=>s.length>2)) text=text.replace(new RegExp(term.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"ig"),"").replace(/\s{2,}/g," "); }
  if(adapted && v.formality>=70) {
    text=text.replace("Built for the long way round and everything in between.","Designed for everyday wear, from the usual route to the unexpected turn.")
      .replace("What piece are you claiming first?","Explore the collection and find the piece that feels like you.")
      .replace("tell us what would make your workflow clearer.","share which workflow improvements would be most useful.");
  } else if(adapted && v.formality<30) {
    text=text.replace("We focused on making", "We built this to make").replace("See what changed, and tell us", "Take a look and tell us");
  }
  if(v.platform==="instagram" && v.length!=="short" && adapted && !saas) text=text.replace(/\n\n/g,"\n\n");
  if(adapted&&v.platform==="x"&&text.length>280)text=`${text.slice(0,277).replace(/\s+\S*$/,"" )}…`;
  return text;
}
function syncWordLimit(){const slider=$("#target-words"),platform=$("#platform").value;slider.max=platform==="x"?35:300;if(+slider.value>+slider.max)slider.value=slider.max;$("#target-words-label").textContent=`${slider.value} words`;$("#target-words-max").textContent=`${slider.max} words`;const chars={x:280,instagram:2200,linkedin:3000}[platform];$("#length-hint").textContent=`Changing this updates the main draft. Build the campaign pack again to apply it to all three versions. X is capped at 35 words.${chars?` ${platformName(platform)} also has a ${chars.toLocaleString()}-character post limit.`:""}`;}
function updateCounts() { const target=+$("#target-words").value;const count=words($("#adapted-output").value).length;$("#adapted-words").textContent=hasApiDraft?`${count} / ${target} WORDS`:`${count} WORD PREVIEW · ${target} WORD TARGET`; }
function generateLocal(options={}) {
  const v=values(); $("#adapted-platform").textContent=platformName(v.platform).toUpperCase();
  if(hasApiDraft){updateCounts();$("#draft-status-text").textContent="SETTINGS CHANGED · REGENERATE TO APPLY";return;}
  if(!v.topic){$("#adapted-output").value="";updateCounts();$("#draft-status-text").textContent="ADD AN IDEA TO START";return;}
  $("#adapted-output").value="";updateCounts();$("#draft-status-text").textContent="READY TO CREATE YOUR DRAFT";
}
async function generateFromApi(options={}) {
  if(options.targetWords){const max=+$("#target-words").max;$("#target-words").value=Math.min(max,Math.max(20,options.targetWords));$("#target-words-label").textContent=`${$("#target-words").value} words`;}
  let input=values();
  if(!input.topic){$("#draft-status-text").textContent="ADD YOUR IDEA FIRST";$("#topic").focus();return;}
  generatedImagePrompt="";
  if(input.topic.length>=8){$("#draft-status-text").textContent="MAPPING YOUR BRIEF INTO THE CONTROLS…";await mapBriefToFields(input.topic,input.language);input=values();}
  if(options.instruction){$("#draft-status-text").textContent="WORKING ON YOUR EDIT…";}
  else generateLocal(options);
  if(!options.instruction)$("#draft-status-text").textContent="WORKING ON YOUR DRAFT…";
  try {
    const response=await fetch("/api/generate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...input,edit_seed:options.editSeed||"",edit_instruction:options.instruction||""})});
    const result=await response.json();if(!response.ok) throw new Error(result.error||"Generation unavailable");
    if(result.mode!=="sarvam")throw new Error("The writing service did not return a draft. Please try again.");
    if(typeof result.adapted!=="string") throw new Error("Invalid API result");
    if(result.target_words!==input.target_words){$("#target-words").value=result.target_words;$("#target-words-label").textContent=`${result.target_words} words`;}
    hasApiDraft=true; $("#adapted-output").value=result.adapted; generatedImagePrompt=result.image_prompt||""; updateCounts();
    input.target_words=result.target_words;const requestValues=input;resetPublishApproval();$("#draft-status-text").textContent=`DRAFT READY · ${result.word_count}/${result.target_words} WORDS${result.target_met?"":` · ${result.constraint_note||"Target not reached; review the actual count."}`}`;$("#api-status-label").textContent="READY";await scoreDraft(result.adapted,requestValues);await saveCampaignAndDraft(result.adapted,requestValues);
  } catch (error) { $("#draft-status-text").textContent=error?.message||"Could not finish this draft yet. Your existing text is unchanged; please try again.";$("#quality-total").innerHTML="—<small>/100</small>"; }
}
async function scoreDraft(text,v){try{const r=await fetch("/api/score",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({profile:{sample_posts:v.sample_posts},output:text,platform:v.platform,language:v.language,category:v.category,scenario_id:v.scenario_id,target_words:v.target_words,keywords:v.keywords,keyword_context:v.keyword_context,avoid_words:v.avoid_words,optimization:v.optimization})});const d=await r.json();if(!r.ok)return;lastQuality=d;$("#quality-total").innerHTML=`${d.score}<small>/100</small>`;const names={voice_fit:"VOICE FIT",audience_scenario_fit:"AUDIENCE + SCENARIO",platform_fit:"PLATFORM FIT",keyword_context:"KEYWORD + CONTEXT",clarity:"CLARITY",brand_safety:"BRAND SAFETY",discovery_readiness:"DISCOVERY",language_fit:"LANGUAGE + SCRIPT",word_count_fit:"WORD COUNT"};$("#quality-breakdown").innerHTML=Object.entries(d.dimensions).map(([k,n])=>`<div><strong>${n}</strong><span>${names[k]}</span></div>`).join("")+(d.suggestions?.length?`<ul class="quality-suggestions">${d.suggestions.map(s=>`<li>${escapeHtml(s)}</li>`).join("")}</ul>`:'<p class="quality-suggestions">No improvement flags from the current rubric.</p>');}catch{}}
async function saveCampaignAndDraft(content,v){
  const signature=JSON.stringify([v.category,v.scenario_id,v.topic,v.keywords,v.keyword_context,v.campaign_goal,v.knowledge,v.language]);
  if(signature!==currentCampaignSignature){
    const campaign={profile_id:v.profile_id,category:v.category,scenario_id:v.scenario_id,name:v.topic||"Untitled draft",brief:[v.topic,v.campaign_goal,v.knowledge].filter(Boolean).join("\n\n"),keywords:v.keywords,keyword_context:v.keyword_context,settings:{platform:v.platform,language:v.language,target_words:v.target_words,formality:v.formality,energy:v.energy,intent:v.campaign_intent}};
    const cr=await fetch("/api/campaigns",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(campaign)});const cd=await cr.json();if(!cr.ok)throw new Error(cd.error||"Campaign save failed");currentCampaignId=cd.id;currentCampaignSignature=signature;
  }
    const dr=await fetch("/api/drafts",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({campaign_id:currentCampaignId,platform:v.platform,language:v.language,content,quality:lastQuality})});const dd=await dr.json();if(!dr.ok)throw new Error(dd.error||"Draft save failed");currentDraftId=dd.id;currentDraftPlatform=v.platform;$("#draft-save-status").textContent="Saved locally · "+platformName(v.platform);syncPublishAvailability();
}
async function persistEditedDraft(){const content=$("#adapted-output").value.trim();if(!content)return false;try{if(currentDraftId){const r=await fetch(`/api/drafts/${currentDraftId}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({content})});if(!r.ok)throw new Error();}else await saveCampaignAndDraft(content,values());$("#draft-save-status").textContent="Edited draft saved locally.";return true;}catch{$("#draft-save-status").textContent="Could not save the edited draft.";return false;}}
function syncPublishFields(){syncPublishAvailability();}
function syncPublishAvailability(){const platform=$("#platform").value,ready=Boolean(workflowPublishAvailable&&currentDraftId&&currentDraftPlatform===platform),target=$("#publish-target"),button=$("#approve-publish");if(target)target.textContent=workflowPublishAvailable?"Ready to publish after your approval.":"Publishing is temporarily unavailable.";button.textContent="Approve & publish now ↗";button.disabled=!ready;button.title="";}
function resetPublishApproval(){syncPublishAvailability();}
async function analyzeProfile(key) {
  try { const r=await fetch("/api/analyze",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({brand_id:key,sample_posts:brands[key].samples})}); if(!r.ok)return; const d=await r.json();
    if(d.profile){$("#profile-summary").textContent=d.profile.summary||brands[key].summary;$("#tone-notes").textContent=d.profile.tone||brands[key].tone;$("#dos-notes").textContent=d.profile.dos||brands[key].dos;$("#donts-notes").textContent=d.profile.donts||brands[key].donts;}
    if(d.metrics){const m=d.metrics;$("#metrics-grid").innerHTML=[[m.average_sentence_length,"WORDS / SENTENCE"],[m.average_hashtags_per_post,"HASHTAGS / POST"],[`${m.question_ratio_percent}%`,"POSTS WITH A QUESTION"]].map(([v,l])=>`<div class="metric"><strong>${escapeHtml(v)}</strong><span>${l}</span></div>`).join("");}
  } catch { /* Local profile remains available. */ }
}
function setVoiceMode(mode){voiceMode=mode;customVoiceProfile=null;$("#voice-source-badge").textContent=mode==="posts"?"YOUR POSTS":"YOUR VOICE";renderProfile($("#scenario").value);generateLocal();}
async function buildVoiceProfile(){const v=values();if(voiceMode==="posts"&&!v.sample_posts.length){$("#voice-analysis-status").textContent="Paste at least one authored post, or start with preferences.";return;}if(voiceMode==="fresh"&&!v.voice_description&&!v.favorite_words&&!v.avoid_words&&!v.voice_tone){$("#voice-analysis-status").textContent="Describe your style or add preferred or avoided words first.";return;}$("#voice-analysis-status").textContent="Building your voice profile…";try{const r=await fetch("/api/analyze",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...v,brand_id:v.brand_id})});const d=await r.json();if(!r.ok)throw new Error(d.error||"Profile analysis unavailable");customVoiceProfile={...d.profile};const metrics=d.metrics||{};if(d.metrics)$("#metrics-grid").innerHTML=[[metrics.average_sentence_length,"WORDS / SENTENCE"],[metrics.average_hashtags_per_post,"HASHTAGS / POST"],[`${metrics.question_ratio_percent}%`,"POSTS WITH A QUESTION"]].map(([x,l])=>`<div class="metric"><strong>${escapeHtml(x)}</strong><span>${l}</span></div>`).join("");$("#voice-analysis-status").textContent=d.mode==="ai"?"AI-assisted profile ready. Review and edit its traits.":"Profile ready. Save it to reuse this voice.";$("#api-status-label").textContent=d.mode==="ai"?"AI CONNECTED":"LOCAL MODE";renderProfile(v.brand_id);generateLocal();}catch(e){$("#voice-analysis-status").textContent=e.message||"Could not build the profile. Your inputs are still available.";}}
async function discoverPublicPosts(){
  const urls=$("#profile-url").value.split(/\n|,/).map(x=>x.trim()).filter(Boolean);
  $("#discover-status").textContent="Fetching profile posts from the selected platform API…";
  $("#discover-results").innerHTML="";
  if(!urls.length){$("#discover-status").textContent="Paste a public profile URL first.";return;}
  try{
    const r=await fetch("/api/discover",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({profile_urls:urls})});
    const d=await r.json();if(!r.ok)throw new Error(d.error||"Search unavailable");
    const results=d.results||[];window.discoveredPosts=results;
    const failures=(d.failures||[]).map(x=>`${platformName(x.platform)}: ${x.error}`).join(" · ");
    if(!results.length){$("#discover-status").textContent=`No posts returned by the profile API.${failures?` ${failures}`:""} Continue with a recording or voice description.`;return;}
    $("#discover-status").textContent=`${results.length} posts from the selected profile API. Select only posts you wrote.${failures?` ${failures}`:""}`;
    $("#discover-results").innerHTML=results.map((x,i)=>`<label class="discover-item"><input type="checkbox" data-result-index="${i}"><span><strong>${escapeHtml(x.platform||"").toUpperCase()} · ${escapeHtml(x.title||"Public post excerpt")}</strong><span>${escapeHtml(x.snippet||"")}</span><a href="${escapeHtml(x.link||"#")}" target="_blank" rel="noopener">Open source ↗</a></span></label>`).join("");
  }catch(e){$("#discover-status").textContent=e.message||"Search unavailable. Continue without search.";}
}
function useSelectedProfilePosts(){
  const selected=[...document.querySelectorAll("[data-result-index]:checked")].map(x=>window.discoveredPosts?.[+x.dataset.resultIndex]).filter(x=>x?.snippet?.trim());
  if(!selected.length){$("#discover-status").textContent="Select at least one post first.";return;}
  importedSamplePosts=selected.map(x=>x.snippet.trim()).slice(0,10);$("#sample-posts-input").value=importedSamplePosts.join("\n\n");
  voiceMode="posts";$("#voice-source-badge").textContent="YOUR POSTS";$("#discover-status").textContent=`${importedSamplePosts.length} selected posts are ready as separate examples.`;
  renderProfile($("#scenario").value);generateLocal();
}
async function startIdeaRecording(){
  if(!navigator.mediaDevices?.getUserMedia||!window.MediaRecorder){$("#speech-status").textContent="Live recording is unavailable in this browser. Type the brief instead.";return;}
  try{
    ideaRecorderStream=await navigator.mediaDevices.getUserMedia({audio:true});ideaRecorderChunks=[];
    const mimeType=["audio/webm;codecs=opus","audio/webm","audio/mp4"].find(type=>MediaRecorder.isTypeSupported?.(type));
    ideaRecorder=new MediaRecorder(ideaRecorderStream,mimeType?{mimeType}:undefined);
    browserSpeechDraft="";browserSpeechFinal="";startBrowserSpeechDraft();
    ideaRecorder.ondataavailable=event=>{if(event.data?.size)ideaRecorderChunks.push(event.data);};
    ideaRecorder.onstop=async()=>{ideaRecorderStream?.getTracks().forEach(track=>track.stop());ideaRecorderStream=null;const blob=new Blob(ideaRecorderChunks,{type:ideaRecorder?.mimeType||"audio/webm"});await stopBrowserSpeechDraft();ideaRecorder=null;transcribeIdeaAudio(blob);};
    ideaRecorder.start(350);ideaRecorderStopTimer=setTimeout(()=>stopIdeaRecording(),28000);$("#start-recording").hidden=true;$("#stop-recording").hidden=false;$("#speech-status").textContent="Listening… Speak naturally in English, Hindi, or Kannada. Recording stops at 28 seconds.";
  }catch(error){stopBrowserSpeechDraft();ideaRecorderStream?.getTracks().forEach(track=>track.stop());ideaRecorderStream=null;$("#speech-status").textContent=error.name==="NotAllowedError"?"Microphone access was blocked. Allow it in the browser address bar, then try again.":"Could not start the microphone. You can type the brief instead.";}
}
function stopIdeaRecording(){if(ideaRecorder?.state==="recording"){clearTimeout(ideaRecorderStopTimer);ideaRecorder.stop();$("#stop-recording").disabled=true;$("#speech-status").textContent="Transcribing your recording…";}}
function startBrowserSpeechDraft(){
  const Recognition=window.SpeechRecognition||window.webkitSpeechRecognition;if(!Recognition)return;
  try{
    const recognition=new Recognition();browserSpeechRecognition=recognition;
    const language=speechLanguageForTranscription();if(!["kn","hi","en"].includes(language)){browserSpeechRecognition=null;return;}recognition.lang=language==="kn"?"kn-IN":language==="hi"?"hi-IN":"en-IN";
    recognition.interimResults=true;recognition.continuous=true;
    recognition.onresult=event=>{const results=[...event.results];browserSpeechDraft=results.map(result=>result[0]?.transcript||"").join(" ").trim();const finalText=results.filter(result=>result.isFinal).map(result=>result[0]?.transcript||"").join(" ").trim();if(finalText)browserSpeechFinal=finalText;};
    recognition.onerror=()=>{};recognition.onend=()=>{if(browserSpeechRecognition===recognition)browserSpeechRecognition=null;};recognition.start();
  }catch{browserSpeechRecognition=null;}
}
function stopBrowserSpeechDraft(){
  const recognition=browserSpeechRecognition;browserSpeechRecognition=null;if(!recognition)return Promise.resolve();
  return new Promise(resolve=>{let finished=false;const finish=()=>{if(finished)return;finished=true;clearTimeout(timer);resolve();};const previousEnd=recognition.onend;const timer=setTimeout(finish,1500);recognition.onend=event=>{previousEnd?.(event);finish();};try{recognition.stop();}catch{finish();}});
}
function chooseIdeaTranscript(local){
  const localText=String(local?.text||"").trim(),browserText=String(browserSpeechFinal||browserSpeechDraft||"").trim(),language=local?.language||speechLanguageForTranscription();
  const flags=new Set(local?.quality_flags||[]),hardFlags=["empty_transcript","very_short_transcript","repeated_words","indic_language_ascii_only","kannada_script_missing","hindi_script_missing","malformed_kannada_vowel_sequence"];
  const browserHasScript=language==="kn"?/[ಀ-೿]/.test(browserText):language==="hi"?/[ऀ-ॿ]/.test(browserText):Boolean(browserText);
  if(browserText&&browserHasScript&&(!localText||local?.fallback_attempted||hardFlags.some(flag=>flags.has(flag))))return {text:browserText,source:"browser fallback"};
  return {text:localText,source:"local model"};
}
function clearLatestSpeech(){
  if(!latestSpeechInsertion)return;
  const topic=$("#topic"),index=topic.value.lastIndexOf(latestSpeechInsertion);
  if(index<0){latestSpeechInsertion="";$("#clear-latest-speech").disabled=true;$("#speech-status").textContent="The last transcript was already edited or removed.";return;}
  topic.value=topic.value.slice(0,index)+topic.value.slice(index+latestSpeechInsertion.length);
  latestSpeechInsertion="";$("#clear-latest-speech").disabled=true;
  topic.dispatchEvent(new Event("input",{bubbles:true}));
  $("#speech-status").textContent="Removed the latest spoken text. Your other idea text is unchanged.";
}
async function addIdeaTranscript(chosen,data={},spokenLanguage="auto"){
  if(!chosen?.text)return false;
  const topic=$("#topic"),prior=topic.value,separator=prior&&!prior.endsWith("\n")?"\n":"";
  latestSpeechInsertion=separator+chosen.text;topic.value=prior+latestSpeechInsertion;$("#clear-latest-speech").disabled=false;
  const detected=detectWritingLanguage(data.language||spokenLanguage,chosen.text);outputLanguage=detected;$("#campaign-language").value=detected;if(setupStep>=3)setupAnswers.language=detected;if($("#output-language"))$("#output-language").value=detected;
  const recognizer=chosen.source==="browser fallback"?"browser speech fallback":data.engine?.includes("IndicConformer")?"local IndicConformer":`local Whisper ${data.model||""}`.trim();
  const fallback=data.fallback_from_provider?" · local accuracy fallback":"";
  const transliterationWarning=data.quality_flags?.includes("transliterated_from_devanagari")?` · ${translateCopy("Kannada script transliteration; review transcript")}`:"";
  const fallbackWarning=data.fallback_attempted?` · ${translateCopy("backup was unclear; please correct the transcript before continuing")}`:transliterationWarning;
  const elapsed=data.processing_ms?` · ${(data.processing_ms/1000).toFixed(1)}s`:"";
  voiceMode="fresh";renderBriefChecklist();generateLocal();$("#speech-status").textContent=`${detected} detected · ${recognizer}${fallback}${elapsed}${fallbackWarning} · transcript added. Mapping audience, purpose, facts, and keywords…`;
  await mapBriefToFields($("#topic").value,detected);return true;
}
async function transcribeIdeaAudio(blob){
  const spokenLanguage=speechLanguageForTranscription();
  try{
    const ext=blob.type.includes("mp4")?"m4a":"webm",form=new FormData();form.append("file",blob,`voice-brief.${ext}`);
    form.append("language",spokenLanguage);form.append("provider","auto");
    form.append("mode",$("#speech-quality")?.value||"fast");
    const response=await fetch("/api/voice/transcribe",{method:"POST",body:form}),data=await response.json();if(!response.ok)throw new Error(data.error||"Transcription failed.");
    const chosen=chooseIdeaTranscript(data);if(await addIdeaTranscript(chosen,data,spokenLanguage))return;
    throw new Error("No clear speech was recognized. Please try again.");
  }catch(error){
    const browser=chooseIdeaTranscript({text:"",language:spokenLanguage,fallback_attempted:true,quality_flags:["local_stt_failed"]});
    if(await addIdeaTranscript(browser,{},spokenLanguage))return;
    $("#speech-status").textContent=error.message||"Could not transcribe the recording.";
  }
  finally{$("#start-recording").hidden=false;$("#stop-recording").hidden=true;$("#stop-recording").disabled=false;}
}
function speechLanguageForTranscription(){
  // Speech language is independent from the language selected for the generated draft.
  // In particular, never force English transcription just because the draft defaults to English.
  return $("#speech-language")?.value||"auto";
}
function syncSpeechQualityForLanguage(){
  const language=speechLanguageForTranscription(),quality=$("#speech-quality"),fastOption=quality?.querySelector('option[value="fast"]');
  if(!quality||!fastOption)return;
  const kannada=language==="kn";
  fastOption.disabled=kannada;
  quality.value=kannada?"judge":"fast";
}
async function mapBriefToFields(source,language=outputLanguage){
  const text=String(source||"").trim();if(text.length<8){renderBriefChecklist();return;}
  const signature=`${language}\u0000${text}`;if(signature===lastBriefMapSignature){renderBriefChecklist();return;}
  try{
    const response=await fetch("/api/brief-map",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text,language})});const data=await response.json();if(!response.ok)throw new Error(data.error||"Brief mapping unavailable.");
    const fields=[["audience","#audience"],["campaign_goal","#campaign-goal"],["approved_facts","#brand-knowledge"],["keyword_context","#keyword-context"],["voice_style","#voice-description"],["style_rules","#style-guide"]];
    for(const [key,selector] of fields)if(data[key]&&!$(selector).value.trim())$(selector).value=data[key];
    if(Array.isArray(data.keywords)&&data.keywords.length&&!$("#campaign-keywords").value.trim())$("#campaign-keywords").value=data.keywords.join(", ");
    let category=creatorCategory;
    if(data.campaign_category&&!manuallyChosenControls.has("category")&&[...$("#campaign-category").options].some(option=>option.value===data.campaign_category)){
      category=data.campaign_category;creatorCategory=category;$("#campaign-category").value=category;
    }
    await loadScenarios(category,manuallyChosenControls.has("scenario")?$("#scenario-id").value:data.scenario_id);
    if(data.campaign_intent&&!manuallyChosenControls.has("intent")&&[...$("#campaign-intent").options].some(option=>option.value===data.campaign_intent))$("#campaign-intent").value=data.campaign_intent;
    if(data.platform&&!manuallyChosenControls.has("platform")&&[...$("#platform").options].some(option=>option.value===data.platform))$("#platform").value=data.platform;
    if(data.voice_tone&&!manuallyChosenControls.has("tone")&&[...$("#voice-tone").options].some(option=>option.value===data.voice_tone))$("#voice-tone").value=data.voice_tone;
    if(data.optimization&&!manuallyChosenControls.has("optimization")&&[...$("#optimization").options].some(option=>option.value===data.optimization))$("#optimization").value=data.optimization;
    if(Number.isInteger(data.target_words)&&data.target_words>=20&&!manuallyChosenControls.has("target_words"))$("#target-words").value=Math.max(20,Math.min(300,Math.round(data.target_words/5)*5));
    if(Number.isInteger(data.formality)&&!manuallyChosenControls.has("formality"))$("#formality").value=data.formality;
    if(Number.isInteger(data.energy)&&!manuallyChosenControls.has("energy"))$("#energy").value=data.energy;
    $("#formality-label").textContent=$("#formality").value<30?"Conversational":$("#formality").value<68?"Balanced":"Polished";
    $("#energy-label").textContent=$("#energy").value<30?"Calm":$("#energy").value<70?"Steady":"Energetic";
    syncWordLimit();syncPublishFields();
    renderBriefChecklist();generateLocal();
    const mappedLabels=[...fields.filter(([key,selector])=>data[key]&&$(selector).value.trim()).map(([,selector])=>({"#audience":"audience","#campaign-goal":"goal","#brand-knowledge":"facts","#keyword-context":"keyword context","#voice-description":"voice guidance","#style-guide":"writing rules"}[selector])),...(data.keywords?.length?["keywords"]:[]),...(data.campaign_category?["creator type","scenario"]:[]),...(data.campaign_intent?["intent"]:[]),...(data.platform?["platform"]:[]),...(data.voice_tone?["tone"]:[]),...(data.optimization?["search optimization"]:[]),...(data.target_words?["length"]:[]),...(Number.isInteger(data.formality)?["formality"]:[]),...(Number.isInteger(data.energy)?["energy"]:[])];
    $("#speech-status").textContent=data.mapped?`${language} brief mapped${mappedLabels.length?`: ${[...new Set(mappedLabels)].join(", ")}`:""}. Review the captured controls below; you can edit every field.`:"Transcript added. The writing model is unavailable for automatic field mapping, so your words remain in the brief.";
    lastBriefMapSignature=signature;
  }catch(error){renderBriefChecklist();$("#speech-status").textContent=`Transcript added; automatic mapping failed: ${error.message||"service unavailable"}`;}
}
async function findTrendIdeas(){
  const button=$("#find-trends"),status=$("#trends-status"),results=$("#trend-suggestions");
  const keyword=$("#campaign-keywords").value.trim();
  const idea=$("#topic").value.trim();
  const query=(keyword||idea).slice(0,160).trim();
  if(!query){status.textContent="Add an idea or keyword first.";results.hidden=true;return;}
  button.disabled=true;status.textContent="Looking for related searches…";results.hidden=true;
  try{
    const response=await fetch("/api/trends",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query,region:$("#trend-region").value,language:$("#campaign-language").value})});
    const data=await response.json();if(!response.ok)throw new Error(data.error||"Search suggestions are unavailable right now.");
    trendSuggestions=Array.isArray(data.suggestions)?data.suggestions:[];
    status.textContent=`Based on “${data.query}” · ${data.region_name} · ${data.date_range}`;
    if(!trendSuggestions.length){results.innerHTML='<p class="trends-empty">No related searches came back. Try a shorter or more specific keyword.</p>';results.hidden=false;return;}
    results.innerHTML=trendSuggestions.map((item,index)=>`<div class="trend-suggestion"><div class="trend-suggestion-copy"><strong>${escapeHtml(item.phrase)}</strong><small>${escapeHtml(item.kind)}${item.value?` · ${escapeHtml(item.value)}`:""}</small></div><div class="trend-suggestion-actions">${item.link?`<a href="${escapeHtml(item.link)}" target="_blank" rel="noopener noreferrer">View trend</a>`:""}<button type="button" data-use-trend="${index}">Add keyword</button></div></div>`).join("");
    results.hidden=false;
    results.querySelectorAll("[data-use-trend]").forEach(button=>button.addEventListener("click",()=>{
      const selected=trendSuggestions[Number(button.dataset.useTrend)]?.phrase;if(!selected)return;
      const existing=$("#campaign-keywords").value.split(",").map(value=>value.trim()).filter(Boolean);
      if(!existing.some(value=>value.toLocaleLowerCase()===selected.toLocaleLowerCase()))existing.push(selected);
      $("#campaign-keywords").value=existing.join(", ");generateLocal();renderBriefChecklist();
      status.textContent=`Added “${selected}” to your keyword field.`;
    }));
  }catch(error){status.textContent=error.message||"Could not load search suggestions. Please try again.";}
  finally{button.disabled=false;}
}
function renderBriefChecklist(){
  const entries=[
    ["Post idea",$("#topic").value.trim(),true],
    ["Audience",$("#audience").value.trim(),false],
    ["Purpose / next step",$("#campaign-goal").value.trim(),false],
    ["Names, dates, facts, keywords",[$("#brand-knowledge").value,$("#campaign-keywords").value].filter(Boolean).join(" · ").trim(),false],
  ];
  $("#brief-checklist-items").innerHTML=entries.map(([label,value,required])=>`<li class="${value?"is-captured":"is-missing"}"><span class="brief-check-icon" aria-hidden="true">${value?"✓":"·"}</span><span><strong>${label}</strong><small>${value?escapeHtml(value.length>100?value.slice(0,97)+"…":value):required?"Add one idea to generate a post":"Not mentioned · optional"}</small></span><em>${value?"Captured":required?"Needed":"Optional"}</em></li>`).join("");
}
async function loadScenarios(category, selected=""){
  try{if(!Object.keys(scenarioCatalog).length){const r=await fetch("/api/scenarios");scenarioCatalog=await r.json();}}
  catch{scenarioCatalog={};}
  const list=scenarioCatalog[category]||[];$("#scenario-id").innerHTML=list.map(x=>`<option value="${escapeHtml(x.id)}">${escapeHtml(x.name)} · ${escapeHtml(x.description)}</option>`).join("");
  if(selected&&list.some(x=>x.id===selected))$("#scenario-id").value=selected;
}
async function loadVoiceProfiles(){
  try{const r=await fetch("/api/voice-profiles");const d=await r.json();voiceProfiles=d.profiles||[];
    const select=$("#saved-voice-select");select.innerHTML='<option value="">Choose a saved voice</option>'+voiceProfiles.map(p=>`<option value="${escapeHtml(p.id)}">${escapeHtml(p.name)} · ${escapeHtml(p.language||"English")}</option>`).join("");
    $("#delete-voice-profile").disabled=!selectedVoiceProfileId;
  }catch{}
}
function detectWritingLanguage(whisperLanguage,text){
  if(/[\u0C80-\u0CFF]/u.test(text))return "Kannada";
  if(/[\u0900-\u097F]/u.test(text))return "Hindi";
  const tokens=new Set((text.toLowerCase().match(/[\p{L}\p{M}]+/gu)||[]));
  const kannadaCues=["ide","idu","inda","nanna","nimma","beku","alla","agide","maadi","ivattu","yenu","namma","swalpa"];
  const hindiCues=["hai","hain","hoon","aap","mera","meri","kaise","kya","nahi","mein","hum","aur","ko"];
  if(kannadaCues.filter(x=>tokens.has(x)).length>=2)return "Kanglish";
  if(hindiCues.filter(x=>tokens.has(x)).length>=2)return "Hinglish";
  const code=String(whisperLanguage||"").toLowerCase();
  if(code.startsWith("kn"))return "Kannada";
  if(code.startsWith("hi"))return "Hindi";
  return code.startsWith("en")?"English":"English";
}
async function saveVoiceProfile(){
  const name=$("#voice-profile-name").value.trim(),v=values();if(!name){$("#voice-analysis-status").textContent="Add a name to save this voice.";$("#voice-profile-name").focus();return;}
  const payload={name,category:v.category,summary:customVoiceProfile?.summary||v.voice_description,tone:customVoiceProfile?.tone||v.voice_tone,favorite_words:"",avoid_words:v.avoid_words,sample_posts:samplePostInput(),language:v.language};
  try{const endpoint=selectedVoiceProfileId?`/api/voice-profiles/${selectedVoiceProfileId}`:"/api/voice-profiles";const r=await fetch(endpoint,{method:selectedVoiceProfileId?"PATCH":"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(payload)});const d=await r.json();if(!r.ok)throw new Error(d.error);selectedVoiceProfileId=d.id||selectedVoiceProfileId;$("#voice-analysis-status").textContent="Voice profile saved locally.";await loadVoiceProfiles();$("#saved-voice-select").value=selectedVoiceProfileId;$("#delete-voice-profile").disabled=false;}
  catch(e){$("#voice-analysis-status").textContent=e.message||"Could not save this profile.";}
}
async function deleteVoiceProfile(){if(!selectedVoiceProfileId)return;const p=voiceProfiles.find(x=>x.id===selectedVoiceProfileId);if(!p||!window.confirm(`Delete the saved voice “${p.name}”?`))return;try{const r=await fetch(`/api/voice-profiles/${selectedVoiceProfileId}`,{method:"DELETE"}),d=await r.json();if(!r.ok)throw new Error(d.error);selectedVoiceProfileId=null;customVoiceProfile=null;$("#voice-profile-name").value="";$("#saved-voice-select").value="";$("#delete-voice-profile").disabled=true;$("#voice-analysis-status").textContent="Saved voice deleted.";await loadVoiceProfiles();renderProfile($("#scenario").value);generateLocal();}catch(e){$("#voice-analysis-status").textContent=e.message||"Could not delete this profile.";}}
function applyVoiceProfile(id){const p=voiceProfiles.find(x=>x.id===id);if(!p)return;selectedVoiceProfileId=p.id;creatorCategory=p.category;$("#campaign-category").value=p.category;$("#voice-profile-name").value=p.name;$("#voice-description").value=p.summary||"";$("#voice-tone").value=p.tone||"warm and approachable";$("#avoid-words").value=p.avoid_words||"";if(p.language&&supportedLanguages.includes(p.language))$("#campaign-language").value=p.language;outputLanguage=$("#campaign-language").value;if(p.sample_posts?.length){voiceMode="posts";importedSamplePosts=p.sample_posts;$("#sample-posts-input").value=p.sample_posts.join("\n\n");}else{voiceMode="fresh";importedSamplePosts=null;$("#sample-posts-input").value="";}$("#voice-source-badge").textContent=voiceMode==="posts"?"YOUR POSTS":"YOUR VOICE";customVoiceProfile={summary:p.summary,tone:p.tone,dos:"Follow the saved voice profile.",donts:p.avoid_words?`Avoid: ${p.avoid_words}`:""};$("#delete-voice-profile").disabled=false;loadScenarios(creatorCategory);renderProfile($("#scenario").value);generateLocal();}
function setScenario() {
  const key=$("#scenario").value; if(!brands[key])return;
  const saas=key==="saas";$("#platform").value=brands[key].platform;$("#formality").value=saas?68:24;$("#energy").value=saas?38:65;
  $("#formality-label").textContent=saas?"Polished":"Casual";$("#energy-label").textContent=saas?"Steady":"Energetic";
  customVoiceProfile=null;renderProfile(key);generateLocal();if(voiceMode==="demo")analyzeProfile(key);
}
async function editDraft(action) {
  const text=$("#adapted-output").value.trim();if(!text)return;
  const labels={rewrite:"Rewrite",clarify:"Improve clarity",expand:"Expand",shorten:"Shorten",cta:"Add CTA"};
  const instructions={
    rewrite:"Rewrite the supplied draft with a fresh, stronger structure and opening. Preserve the user's intent, language, voice, verified facts, platform format, and requested word target. Do not copy the draft sentence by sentence.",
    clarify:"Improve clarity and natural flow. Prefer concrete, short sentences, remove ambiguity and repetition, and preserve all supplied facts, language, voice, platform format, and requested word target.",
    expand:"Expand the draft with useful detail grounded in the spoken brief, audience, and approved facts. Do not invent information or repeat points. Reach the selected word target within the platform character limit.",
    shorten:"Make the draft substantially shorter while preserving its main message, voice, and all essential verified facts. Aim for the adjusted word target.",
    cta:"Add one natural, specific call to action that fits the post and audience. Do not add a link, offer, or promise that the user did not provide. Preserve language, voice, facts, and target length."
  };
  if(!instructions[action])return;
  const button=document.querySelector(`[data-edit="${action}"]`),actual=words(text).length,max=+$("#target-words").max;
  let targetWords=+$("#target-words").value;
  if(action==="shorten")targetWords=Math.max(20,Math.min(targetWords,Math.round(actual*.7)));
  if(action==="expand")targetWords=Math.min(max,Math.max(targetWords,Math.min(max,actual+Math.max(30,Math.round(actual*.5)))));
  if(button)button.disabled=true;$("#draft-status-text").textContent=`Applying ${labels[action].toLowerCase()} with your brief…`;
  try{await generateFromApi({editSeed:text,instruction:instructions[action],label:labels[action],targetWords});}
  finally{if(button)button.disabled=false;}
}
function captureSetupStep(){
  if(setupStep===1){
    setupAnswers.profileUrl=$("#profile-url")?.value||setupAnswers.profileUrl||"";
    setupAnswers.discoverStatus=$("#discover-status")?.textContent||"";
    setupAnswers.discoverHtml=$("#discover-results")?.innerHTML||setupAnswers.discoverHtml||"";
    const selected=[...document.querySelectorAll("[data-result-index]:checked")].map(x=>window.discoveredPosts?.[+x.dataset.resultIndex]).filter(x=>x?.snippet?.trim());
    setupAnswers.selectedIndexes=[...document.querySelectorAll("[data-result-index]:checked")].map(x=>+x.dataset.resultIndex);
    setupAnswers.posts=selected.map(x=>x.snippet.trim()).slice(0,10);
    if(setupAnswers.posts.length){importedSamplePosts=setupAnswers.posts;voiceMode="posts";}else{importedSamplePosts=null;voiceMode="fresh";}
  }else if(setupStep===2){
    setupAnswers.category=$("#setup-category")?.value||creatorCategory;
    setupAnswers.audience=$("#setup-audience")?.value||"";
    setupAnswers.brandInfo="";
  }else if(setupStep===3){
    setupAnswers.platform=$("#setup-platform")?.value||"instagram";
    setupAnswers.language=$("#output-language")?.value||"English";
  }
}
function finishSetup(){
  captureSetupStep();const panel=$("#brief-voice-panel"),slot=$("#brief-voice-slot");
  const languagePicker=$("#site-language")?.closest(".site-language-picker");
  if(languagePicker)document.querySelector(".topbar-right")?.prepend(languagePicker);
  if(panel&&slot&&!slot.contains(panel))slot.append(panel);
  if(setupAnswers.category){creatorCategory=setupAnswers.category;$("#campaign-category").value=creatorCategory;}
  if(setupAnswers.audience!==undefined)$("#audience").value=setupAnswers.audience;
  if(setupAnswers.brandInfo!==undefined)$("#brand-knowledge").value=setupAnswers.brandInfo;
  if(setupAnswers.platform)$("#platform").value=setupAnswers.platform;
  if(setupAnswers.language){outputLanguage=setupAnswers.language;$("#campaign-language").value=outputLanguage;}
  if(setupAnswers.posts?.length){importedSamplePosts=setupAnswers.posts;$("#sample-posts-input").value=setupAnswers.posts.join("\n\n");voiceMode="posts";}
  else{importedSamplePosts=null;$("#sample-posts-input").value="";voiceMode="fresh";}
  $("#creator-setup").hidden=true;document.body.classList.remove("is-setup");syncWordLimit();syncPublishFields();
  loadScenarios(creatorCategory);renderProfile($("#scenario").value);generateLocal();
  if(setupAnswers.posts?.length)buildVoiceProfile();
}
function showSetupStep(step){
  captureSetupStep();
  if(setupStep===4&&step!==4){const panel=$("#brief-voice-panel"),slot=$("#brief-voice-slot");if(panel&&slot&&!slot.contains(panel))slot.append(panel);}
  setupStep=step;const labels=["FIND YOUR POSTS","YOUR WORK","CHANNEL + LANGUAGE","VOICE MESSAGE"];
  $("#setup-step-label").textContent=`0${step} / 04 · ${labels[step-1]}`;
  document.querySelectorAll(".setup-step-bars i").forEach((bar,index)=>bar.classList.toggle("is-active",index<step));
  const shell=$("#setup-question");shell.classList.remove("question-reenter");void shell.offsetWidth;shell.classList.add("question-reenter");
  const back=step>1?'<button id="setup-back" class="setup-back" type="button">← Back</button>':'';
  const actions=(hint,label="Continue →")=>`<div class="setup-actions"><span>${hint}</span><div class="setup-action-buttons">${back}<button id="setup-next" type="button">${label}</button></div></div>`;
  if(step===1){
    shell.innerHTML=`<h2 id="setup-title">Start with your public profile.</h2><p class="setup-subtitle">Add posts you wrote to help shape your voice profile. Choose only your own posts, or skip this and start fresh.</p><label class="field-label" for="profile-url">Public profile URL</label><input id="profile-url" class="text-input" type="url" placeholder="https://www.instagram.com/yourbrand/" value="${escapeHtml(setupAnswers.profileUrl||"")}"><button id="discover-posts" class="secondary-action" type="button">Import posts</button><p id="discover-status" class="input-hint" aria-live="polite">${escapeHtml(setupAnswers.discoverStatus||"")}</p><div id="discover-results" class="discover-results">${setupAnswers.discoverHtml||""}</div>${actions("No profile link? Continue and start fresh.")}`;
    $("#discover-posts").onclick=discoverPublicPosts;
    setupAnswers.selectedIndexes?.forEach(i=>{const box=shell.querySelector(`[data-result-index="${i}"]`);if(box)box.checked=true;});
  }else if(step===2){
    const categories=[["ngo","NGO","Cause, community, action"],["business","Business","Services, expertise, trust"],["creator","Creator","Personality, stories, community"],["product","Product / brand","Benefits, proof, discovery"]];
    shell.innerHTML=`<h2 id="setup-title">Who are you creating for?</h2><p class="setup-subtitle">Pick the closest fit. You can refine the audience in your draft.</p><div class="creator-types" role="group" aria-label="Creator type">${categories.map(([id,name,desc],i)=>`<button type="button" data-category="${id}" aria-pressed="${(setupAnswers.category||creatorCategory)===id}"><span>${i+1}</span><strong>${name}</strong><small>${desc}</small></button>`).join("")}</div><label class="field-label" for="setup-audience">Who is this for? <span class="optional-note">Optional</span></label><input id="setup-audience" class="text-input" placeholder="e.g. local families, college students" value="${escapeHtml(setupAnswers.audience||"")}">${actions("You can change this for any draft.")}`;
    shell.querySelectorAll("[data-category]").forEach(b=>b.onclick=()=>{creatorCategory=b.dataset.category;setupAnswers.category=creatorCategory;manuallyChosenControls.add("category");shell.querySelectorAll("[data-category]").forEach(x=>x.setAttribute("aria-pressed",String(x===b)));});
  }else if(step===3){
    shell.innerHTML=`<h2 id="setup-title">Where and how should it sound?</h2><p class="setup-subtitle">Choose the first platform and writing style. A voice recording can detect English, Hindi, or Kannada and update this automatically.</p><div class="setup-controls"><label>First platform<select id="setup-platform"><option value="instagram">Instagram</option><option value="linkedin">LinkedIn</option><option value="x">X</option></select></label><label>Draft language<select id="output-language"><option>English</option><option>Hindi</option><option>Kannada</option><option>Hinglish</option><option>Kanglish</option></select></label></div>${actions("You can change these later.")}`;
    $("#setup-platform").value=setupAnswers.platform||$("#platform").value;$("#output-language").value=setupAnswers.language||outputLanguage;
    $("#setup-platform").addEventListener("change",()=>manuallyChosenControls.add("platform"));
  }else{
    const panel=$("#brief-voice-panel");
    shell.innerHTML=`<h2 id="setup-title">Say it once. We’ll map the details.</h2><p class="setup-subtitle">Speech stays on this computer. Kannada and Hindi use KrishiDisha’s local IndicConformer. Kannada is preselected; choose the language you’re speaking. Kannada uses Judge accuracy by default; Fast live is used for English and Hindi.</p><div id="setup-voice-slot"></div>${actions("Voice is optional. You can type or dictate your idea here.","Open my studio →")}`;
    if(setupAnswers.language)outputLanguage=setupAnswers.language;
    $("#campaign-language").value=outputLanguage;
    $("#setup-voice-slot").append(panel);
  }
  if(step>1)$("#setup-back").onclick=()=>showSetupStep(step-1);
  $("#setup-next").onclick=()=>{captureSetupStep();if(step<4)showSetupStep(step+1);else finishSetup();};
}
async function buildCampaignPack(){
  const v=values();if(!v.topic){$("#draft-status-text").textContent="ADD YOUR IDEA FIRST";$("#topic").focus();return;}campaignAssets={};const button=$("#campaign-pack-generate");button.disabled=true;button.textContent="Building three versions…";try{for(const p of ["instagram","linkedin","x"]){try{const targetWords=p==="x"?Math.min(35,v.target_words):v.target_words;const r=await fetch("/api/generate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...v,platform:p,target_words:targetWords})});const d=await r.json();if(!r.ok)throw new Error(d.error);campaignAssets[p]=d.adapted;}catch(e){campaignAssets[p]=`Could not generate this version: ${e.message||"generation service unavailable"}`;}}}finally{button.disabled=false;button.innerHTML='Build campaign pack <span>↗</span>';}
  $("#campaign-pack-results").hidden=false;showAsset("instagram");$("#campaign-pack-results").scrollIntoView({behavior:"smooth",block:"nearest"});
}
function showAsset(platform){campaignAssets[platform]??=buildDraft({...values(),platform},true);$("#asset-output").value=campaignAssets[platform];const name=platformName(platform);$("#asset-title").textContent=`${name} ${platform==="instagram"?"caption":platform==="pinterest"?"pin description":platform==="youtube_shorts"?"description":"post"}`;const target=platform==="x"?Math.min(35,+$("#target-words").value):+$("#target-words").value;$("#asset-count").textContent=`${words(campaignAssets[platform]).length} / ${target} words${platform==="x"?" · X limit":""}`;document.querySelectorAll("[data-platform]").forEach(b=>b.setAttribute("aria-selected",String(b.dataset.platform===platform)));}

$("#site-language").value=activeSiteLanguage;
$("#site-language").addEventListener("change",e=>setSiteLanguage(e.target.value));
setSiteLanguage(activeSiteLanguage);
syncSpeechQualityForLanguage();
$("#speech-language").addEventListener("change",syncSpeechQualityForLanguage);
$("#scenario").addEventListener("change",setScenario);
$("#analyze-voice").addEventListener("click",buildVoiceProfile);
$("#start-recording").addEventListener("click",startIdeaRecording);
$("#stop-recording").addEventListener("click",stopIdeaRecording);
$("#clear-latest-speech").addEventListener("click",clearLatestSpeech);

$("#generate-button").addEventListener("click",()=>generateFromApi());
$("#regenerate-edits").addEventListener("click",()=>{const editSeed=$("#adapted-output").value.trim();if(!editSeed){$("#draft-status-text").textContent="ADD AN EDIT FIRST";return;}generateFromApi({editSeed});});
for(const selector of ["#topic","#audience","#campaign-goal","#brand-knowledge","#style-guide","#avoid-words","#voice-description","#campaign-keywords","#keyword-context"]) $(selector).addEventListener("input",()=>{generateLocal();renderBriefChecklist();});
$("#voice-tone").addEventListener("change",generateLocal);
$("#sample-posts-input").addEventListener("input",()=>{importedSamplePosts=null;if($("#sample-posts-input").value.trim())voiceMode="posts";renderProfile($("#scenario").value);generateLocal();});
for(const selector of ["#platform","#audience","#campaign-category","#campaign-language","#optimization","#scenario-id","#campaign-intent"]) $(selector).addEventListener("change",()=>{if(selector==="#campaign-category"){creatorCategory=$(selector).value;manuallyChosenControls.add("category");loadScenarios(creatorCategory);}if(selector==="#campaign-intent")manuallyChosenControls.add("intent");if(selector==="#scenario-id")manuallyChosenControls.add("scenario");if(selector==="#optimization")manuallyChosenControls.add("optimization");if(selector==="#platform"){manuallyChosenControls.add("platform");syncWordLimit();syncPublishFields();resetPublishApproval();}if(selector==="#campaign-language")outputLanguage=$(selector).value;generateLocal();});
$("#voice-tone").addEventListener("change",()=>manuallyChosenControls.add("tone"));
$("#formality").addEventListener("input",e=>{manuallyChosenControls.add("formality");$("#formality-label").textContent=e.target.value<30?"Conversational":e.target.value<68?"Balanced":"Polished";generateLocal();});
$("#energy").addEventListener("input",e=>{manuallyChosenControls.add("energy");$("#energy-label").textContent=e.target.value<30?"Calm":e.target.value<70?"Steady":"Energetic";generateLocal();});
$("#target-words").addEventListener("input",e=>{manuallyChosenControls.add("target_words");$("#target-words-label").textContent=`${e.target.value} words`;if(hasApiDraft&&values().topic){clearTimeout(wordTargetTimer);$("#draft-status-text").textContent="WORD TARGET CHANGED · UPDATING";wordTargetTimer=setTimeout(()=>generateFromApi(),850);}else generateLocal();});
$("#adapted-output").addEventListener("input",()=>{updateCounts();resetPublishApproval();});
$("#adapted-output").addEventListener("change",persistEditedDraft);
$("#save-draft").addEventListener("click",persistEditedDraft);
$("#save-voice-profile").addEventListener("click",saveVoiceProfile);
$("#delete-voice-profile").addEventListener("click",deleteVoiceProfile);
$("#saved-voice-select").addEventListener("change",e=>applyVoiceProfile(e.target.value));
for(const selector of ["#publish-media-url"]) $(selector).addEventListener("input",resetPublishApproval),$(selector).addEventListener("change",resetPublishApproval);
document.querySelectorAll("[data-edit]").forEach(b=>b.addEventListener("click",()=>editDraft(b.dataset.edit)));
$("#campaign-pack-generate").addEventListener("click",buildCampaignPack);
$("#find-trends").addEventListener("click",findTrendIdeas);
document.querySelectorAll("[data-platform]").forEach(b=>b.addEventListener("click",()=>showAsset(b.dataset.platform)));
$("#asset-output").addEventListener("input",e=>{const active=document.querySelector('[data-platform][aria-selected="true"]')?.dataset.platform;if(active){campaignAssets[active]=e.target.value;const target=active==="x"?Math.min(35,+$("#target-words").value):+$("#target-words").value;$("#asset-count").textContent=`${words(e.target.value).length} / ${target} words${active==="x"?" · X limit":""}`;}});
$("#copy-asset").addEventListener("click",async()=>{try{await navigator.clipboard.writeText($("#asset-output").value);$("#copy-asset").textContent="Copied ";setTimeout(()=>$("#copy-asset").textContent="Copy version ↗",1500);}catch{$("#asset-output").select();document.execCommand("copy");}});
$("#approve-publish").addEventListener("click",async()=>{if(!currentDraftId||currentDraftPlatform!==values().platform){$("#publish-status").textContent="Save a draft for the selected content format before publishing.";return;}if(!await persistEditedDraft())return;$("#approve-publish").disabled=true;$("#publish-status").textContent="Publishing…";try{const r=await fetch(`/api/drafts/${currentDraftId}/publish`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({approved:true,approved_content:$("#adapted-output").value.trim(),image_prompt:generatedImagePrompt})});const d=await r.json();if(!r.ok)throw new Error(d.error||"Could not publish this draft. Please try again.");$("#publish-status").textContent="Published successfully.";currentDraftId=null;currentDraftPlatform=null;generatedImagePrompt="";syncPublishAvailability();}catch(e){$("#publish-status").textContent=e.message||"Could not publish this draft. Please try again.";syncPublishAvailability();}});
$("#setup-dismiss").addEventListener("click",finishSetup);
document.body.classList.add("is-setup");showSetupStep(1);
renderProfile("streetwear");renderBriefChecklist();generateLocal();loadScenarios("product");loadVoiceProfiles();
fetch("/api/health").then(r=>r.ok?r.json():null).then(s=>{if(s){workflowPublishAvailable=Boolean(s.workflow_publishing);$("#api-status-label").textContent="READY";syncPublishAvailability();}}).catch(()=>{});
const oauthParams=new URLSearchParams(location.search);if(oauthParams.get("connected")){$("#publish-status").textContent=`${platformName(oauthParams.get("connected"))} account connected through OAuth.`;history.replaceState(null,"",location.pathname);}else if(oauthParams.get("oauth_error")){$("#publish-status").textContent=`${platformName(oauthParams.get("oauth_error"))} connection did not complete. Check provider credentials, redirect URI, scopes, and review status.`;history.replaceState(null,"",location.pathname);}
