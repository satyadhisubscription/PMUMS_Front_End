import React from 'react';
import {
  Box,
  Container,
  Typography,
  Paper
} from '@mui/material';

const Niyamawali = () => {
  return (
    <Container maxWidth="md" sx={{ py: 1 }}>
      <Paper elevation={3} sx={{ overflow: 'hidden', bgcolor: '#f8f9fa' }}>
        {/* Header */}
        <Box sx={{ textAlign: 'center', py: 1, bgcolor: '#FFFFFF' }}>
          <Typography variant="h4" sx={{ 
            fontWeight: 'bold',
            color: '#1a237e',
            fontFamily: 'Poppins'
          }}>
            नियमावली
          </Typography>
        </Box>

        {/* Blue Header Section */}
        <Box sx={{ 
          bgcolor: '#1a237e', 
          color: 'white', 
          py: 2, 
          px: 3,
          textAlign: 'center'
        }}>
          <Typography variant="h6" sx={{ 
            fontWeight: 600,
            fontFamily: 'Poppins'
          }}>
            PMUMS के नियम
          </Typography>
        </Box>

        {/* Date Section
        <Box sx={{ p: 3, bgcolor: '#e8f4fd' }}>
          <Typography variant="body2" sx={{ 
            color: '#1a237e',
            fontFamily: 'Poppins',
            mb: 1
          }}>
            नियमावली लागू दिनांक
          </Typography>
          <Typography variant="body2" sx={{ 
            fontWeight: 600,
            color: '#1a237e',
            fontFamily: 'Poppins'
          }}>
            29/12/25
          </Typography>
        </Box> */}

        {/* Content Section */}
        <Box sx={{ p: 2, bgcolor: '#FFFFFF' }}>
          {/* Main Title */}
          <Typography variant="h6" sx={{ 
            fontWeight: 'bold',
            color: '#1a237e',
            mb: 3,
            fontFamily: 'Poppins'
          }}>
            महत्वपूर्ण नियम
          </Typography>

          {/* Section 1 - कर्मचारी कल्याण कोष */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="subtitle1" sx={{ 
              fontWeight: 'bold',
              color: '#1a237e',
              mb: 2,
              fontFamily: 'Poppins'
            }}>
              कर्मचारी कल्याण कोष – नियमावली
            </Typography>
            <Typography variant="subtitle2" sx={{ 
              fontWeight: 'bold',
              color: '#d32f2f',
              mb: 2,
              fontFamily: 'Poppins'
            }}>
              (सदस्यता हेतु अनिवार्य नियम)
            </Typography>
            
            {/* 1. सदस्यता की पात्रता */}
            <Typography variant="subtitle2" sx={{ 
              fontWeight: 'bold',
              color: '#1a237e',
              mb: 1,
              fontFamily: 'Poppins'
            }}>
              1. सदस्यता की पात्रता
            </Typography>
            <Typography variant="body2" sx={{ 
              lineHeight: 1.8,
              mb: 2,
              textAlign: 'justify',
              fontFamily: 'Poppins',
              color: '#333'
            }}>
              कर्मचारी कल्याण कोष योजना की सदस्यता केवल मध्यप्रदेश राज्य के शिक्षा विभाग एवं जनजातीय कार्य विभाग के शासकीय कर्मचारियों के लिए मान्य होगी।
            </Typography>
            <Typography variant="body2" sx={{ 
              lineHeight: 1.8,
              mb: 2,
              textAlign: 'justify',
              fontFamily: 'Poppins',
              color: '#333'
            }}>
              प्रारम्भ में यह योजना समस्त विभागों के लिए लागू की गई थी, किंतु अगस्त 2025 से इसे केवल शिक्षा विभाग एवं जनजातीय कार्य विभाग तक सीमित किया गया है।
            </Typography>
            <Typography variant="body2" sx={{ 
              lineHeight: 1.8,
              mb: 2,
              textAlign: 'justify',
              fontFamily: 'Poppins',
              color: '#333'
            }}>
              अतः अगस्त 2025 से पूर्व अन्य विभागों के जिन कर्मचारियों ने सदस्यता ग्रहण की थी तथा जो योजना के नियमानुसार नियमित सहयोग करते आ रहे हैं, वे इस योजना में पात्र बने रहेंगे।
            </Typography>
            <Typography variant="body2" sx={{ 
              lineHeight: 1.8,
              mb: 3,
              textAlign: 'justify',
              fontFamily: 'Poppins',
              color: '#333'
            }}>
              इस योजना की सदस्यता पूर्णतः निःशुल्क रहेगी।
            </Typography>

            {/* 2. योजना का उद्देश्य */}
            <Typography variant="subtitle2" sx={{ 
              fontWeight: 'bold',
              color: '#1a237e',
              mb: 1,
              fontFamily: 'Poppins'
            }}>
              2. योजना का उद्देश्य
            </Typography>
            <Typography variant="body2" sx={{ 
              lineHeight: 1.8,
              mb: 3,
              textAlign: 'justify',
              fontFamily: 'Poppins',
              color: '#333'
            }}>
              किसी शिक्षक अथवा सदस्य की आकस्मिक एवं दुःखद मृत्यु होने की स्थिति में, उसके नामिनी के खाते में निर्धारित सहयोग राशि जमा करना सभी सदस्यों के लिए अनिवार्य होगा।
            </Typography>

            {/* 3. योजना का प्रारम्भ */}
            <Typography variant="subtitle2" sx={{ 
              fontWeight: 'bold',
              color: '#1a237e',
              mb: 1,
              fontFamily: 'Poppins'
            }}>
              3. योजना का प्रारम्भ
            </Typography>
            <Typography variant="body2" sx={{ 
              lineHeight: 1.8,
              mb: 2,
              textAlign: 'justify',
              fontFamily: 'Poppins',
              color: '#333'
            }}>
              कर्मचारी कल्याण कोष योजना का प्रारम्भ दो लाख रुपये की सहयोग राशि से किया जा रहा है। सदस्यों की संख्या में वृद्धि होने के साथ-साथ सहयोग राशि में भी समय-समय पर वृद्धि की जाती रहेगी। यदि एक ही माह में एक से अधिक शिक्षक अथवा सदस्य का निधन होता है, तो ऐसी स्थिति में सदस्यता दिनांक की वरिष्ठता के आधार पर सहयोग हेतु अपील की जाएगी।
            </Typography>
            <Typography variant="body2" sx={{ 
              lineHeight: 1.8,
              mb: 1,
              textAlign: 'justify',
              fontFamily: 'Poppins',
              color: '#d32f2f',
              fontWeight: 'bold'
            }}>
              (संशोधित नियम)
            </Typography>
            <Typography variant="body2" sx={{ 
              lineHeight: 1.8,
              mb: 3,
              textAlign: 'justify',
              fontFamily: 'Poppins',
              color: '#333'
            }}>
              यदि एक ही माह में एक से अधिक शिक्षक अथवा सदस्य का निधन होता है, तो मृत्यु दिनांक के आधार पर वरिष्ठता निर्धारित की जाएगी तथा उसी क्रम में सहयोग हेतु अपील की जाएगी।
            </Typography>

            {/* 4. लॉकिंग पीरियड संबंधी नियम */}
            <Typography variant="subtitle2" sx={{ 
              fontWeight: 'bold',
              color: '#1a237e',
              mb: 1,
              fontFamily: 'Poppins'
            }}>
              4. लॉकिंग पीरियड संबंधी नियम
            </Typography>
            <Typography variant="body2" sx={{ 
              lineHeight: 1.8,
              mb: 2,
              textAlign: 'justify',
              fontFamily: 'Poppins',
              color: '#333'
            }}>
              इस योजना के अंतर्गत लॉकिंग पीरियड तीन माह का निर्धारित किया गया है।
            </Typography>
            <Typography variant="body2" sx={{ 
              lineHeight: 1.8,
              mb: 2,
              textAlign: 'justify',
              fontFamily: 'Poppins',
              color: '#333'
            }}>
              • यदि किसी सदस्य की मृत्यु उसकी सदस्यता दिनांक से तीन माह पश्चात होती है, तो उसके नामिनी के सहयोग हेतु अपील की जाएगी।
            </Typography>
            <Typography variant="body2" sx={{ 
              lineHeight: 1.8,
              mb: 2,
              textAlign: 'justify',
              fontFamily: 'Poppins',
              color: '#333'
            }}>
              • यदि किसी सदस्य की मृत्यु सदस्यता दिनांक से तीन माह के भीतर हो जाती है और लॉकिंग पीरियड पूर्ण नहीं होता है, तो ऐसी स्थिति में उसके नामिनी के लिए किसी भी प्रकार की सहयोग अपील नहीं की जाएगी।
            </Typography>
            <Typography variant="body2" sx={{ 
              lineHeight: 1.8,
              mb: 3,
              textAlign: 'justify',
              fontFamily: 'Poppins',
              color: '#d32f2f'
            }}>
              (योजना के दुरुपयोग को रोकने हेतु यह नियम अनिवार्य है।)
            </Typography>

            {/* 5. सहयोग चूक संबंधी नियम */}
            <Typography variant="subtitle2" sx={{ 
              fontWeight: 'bold',
              color: '#1a237e',
              mb: 1,
              fontFamily: 'Poppins'
            }}>
              5. सहयोग चूक (Missed Contribution) संबंधी नियम
            </Typography>
            <Typography variant="body2" sx={{ 
              lineHeight: 1.8,
              mb: 2,
              textAlign: 'justify',
              fontFamily: 'Poppins',
              color: '#333'
            }}>
              यदि कोई सदस्य लगातार तीन सहयोग पूर्ण कर चुका है और उसके पश्चात किसी कारणवश अगला सहयोग नहीं कर पाता है, तथा उसी अंतराल में उसकी मृत्यु हो जाती है, तो ऐसी स्थिति में भी उसके नामिनी के सहयोग हेतु अपील की जाएगी।
            </Typography>
            <Typography variant="body2" sx={{ 
              lineHeight: 1.8,
              mb: 3,
              textAlign: 'justify',
              fontFamily: 'Poppins',
              color: '#333'
            }}>
              किन्तु यदि कोई सदस्य लगातार दो सहयोग नहीं करता है, तो उसकी सदस्यता अमान्य मानी जाएगी तथा उसकी मृत्यु की स्थिति में उसके नामिनी के लिए कोई अपील नहीं की जाएगी।
            </Typography>

            {/* 6. पुनः सदस्यता के नियम */}
            <Typography variant="subtitle2" sx={{ 
              fontWeight: 'bold',
              color: '#1a237e',
              mb: 1,
              fontFamily: 'Poppins'
            }}>
              6. पुनः सदस्यता के नियम
            </Typography>
            <Typography variant="body2" sx={{ 
              lineHeight: 1.8,
              mb: 2,
              textAlign: 'justify',
              fontFamily: 'Poppins',
              color: '#333'
            }}>
              यदि कोई सदस्य लगातार दो या उससे अधिक सहयोग नहीं करने के कारण अपात्र हो जाता है और पुनः योजना में शामिल होना चाहता है, तो उसे पुनः लगातार तीन सहयोग पूर्ण करना अनिवार्य होगा।
            </Typography>
            <Typography variant="body2" sx={{ 
              lineHeight: 1.8,
              mb: 2,
              textAlign: 'justify',
              fontFamily: 'Poppins',
              color: '#333'
            }}>
              लगातार तीन सहयोग पूर्ण होने के पश्चात ही उसकी सदस्यता पुनः मान्य मानी जाएगी।
            </Typography>
            <Typography variant="body2" sx={{ 
              lineHeight: 1.8,
              mb: 3,
              textAlign: 'justify',
              fontFamily: 'Poppins',
              color: '#333'
            }}>
              पुनः लॉकिंग पीरियड पूर्ण होने से पूर्व मृत्यु की स्थिति में नामिनी हेतु कोई सहयोग अपील नहीं की जाएगी।
            </Typography>

            {/* 7. अपात्रता संबंधी नियम */}
            <Typography variant="subtitle2" sx={{ 
              fontWeight: 'bold',
              color: '#1a237e',
              mb: 1,
              fontFamily: 'Poppins'
            }}>
              7. अपात्रता संबंधी नियम
            </Typography>
            <Typography variant="body2" sx={{ 
              lineHeight: 1.8,
              mb: 2,
              textAlign: 'justify',
              fontFamily: 'Poppins',
              color: '#333'
            }}>
              • यदि किसी दिवंगत सदस्य के नामिनी के लिए सहयोग किए जाने का स्क्रीनशॉट फर्जी पाया जाता है, तो संबंधित सदस्य की सदस्यता तत्काल अमान्य कर दी जाएगी।
            </Typography>
            <Typography variant="body2" sx={{ 
              lineHeight: 1.8,
              mb: 2,
              textAlign: 'justify',
              fontFamily: 'Poppins',
              color: '#333'
            }}>
              • यदि कोई सदस्य योजना से जुड़ने के पश्चात दिवंगत सदस्यों के नामिनी को सहयोग नहीं करता है, तो उसकी सदस्यता भी अमान्य मानी जाएगी।
            </Typography>
            <Typography variant="body2" sx={{ 
              lineHeight: 1.8,
              mb: 3,
              textAlign: 'justify',
              fontFamily: 'Poppins',
              color: '#333'
            }}>
              • लॉकिंग पीरियड पूर्ण न होने की स्थिति में किसी भी प्रकार के सहयोग हेतु अपील नहीं की जाएगी।
            </Typography>

            {/* 8. आत्महत्या, अपराध एवं विवादित प्रकरण */}
            <Typography variant="subtitle2" sx={{ 
              fontWeight: 'bold',
              color: '#1a237e',
              mb: 1,
              fontFamily: 'Poppins'
            }}>
              8. आत्महत्या, अपराध एवं विवादित प्रकरण
            </Typography>
            <Typography variant="body2" sx={{ 
              lineHeight: 1.8,
              mb: 2,
              textAlign: 'justify',
              fontFamily: 'Poppins',
              color: '#333'
            }}>
              • आत्महत्या अथवा किसी भी विवादित परिस्थिति में सामान्यतः सहयोग हेतु कोई अपील नहीं की जाएगी।
            </Typography>
            <Typography variant="body2" sx={{ 
              lineHeight: 1.8,
              mb: 2,
              textAlign: 'justify',
              fontFamily: 'Poppins',
              color: '#333'
            }}>
              • हत्या एवं बलात्कार जैसे जघन्य अपराधों में मुख्य आरोपी को इस योजना का कोई लाभ नहीं दिया जाएगा।
            </Typography>
            <Typography variant="body2" sx={{ 
              lineHeight: 1.8,
              mb: 1,
              textAlign: 'justify',
              fontFamily: 'Poppins',
              color: '#d32f2f',
              fontWeight: 'bold'
            }}>
              (संशोधित नियम)
            </Typography>
            <Typography variant="body2" sx={{ 
              lineHeight: 1.8,
              mb: 3,
              textAlign: 'justify',
              fontFamily: 'Poppins',
              color: '#333'
            }}>
              हालांकि मानवीय दृष्टिकोण से आत्महत्या अथवा विवादित प्रकरणों को संबंधित जिले के सदस्यों के समक्ष प्रस्तुत किया जाएगा तथा परिस्थितियों के आधार पर जिले के सदस्यों द्वारा लिया गया निर्णय अंतिम एवं मान्य होगा।
            </Typography>

            {/* 9. सेवा निवृत्ति संबंधी नियम */}
            <Typography variant="subtitle2" sx={{ 
              fontWeight: 'bold',
              color: '#1a237e',
              mb: 1,
              fontFamily: 'Poppins'
            }}>
              9. सेवा निवृत्ति संबंधी नियम
            </Typography>
            <Typography variant="body2" sx={{ 
              lineHeight: 1.8,
              mb: 2,
              textAlign: 'justify',
              fontFamily: 'Poppins',
              color: '#333'
            }}>
              सेवा निवृत्त कर्मचारी इस योजना में शामिल नहीं होंगे।
            </Typography>
            <Typography variant="body2" sx={{ 
              lineHeight: 1.8,
              mb: 2,
              textAlign: 'justify',
              fontFamily: 'Poppins',
              color: '#333'
            }}>
              केवल सेवा अवधि के दौरान ही सहयोग हेतु अपील की जाएगी।
            </Typography>
            <Typography variant="body2" sx={{ 
              lineHeight: 1.8,
              mb: 3,
              textAlign: 'justify',
              fontFamily: 'Poppins',
              color: '#333'
            }}>
              सेवा निवृत्ति के पश्चात सदस्यता स्वतः समाप्त मानी जाएगी।
            </Typography>

            {/* 10. जिलों की भूमिका */}
            <Typography variant="subtitle2" sx={{ 
              fontWeight: 'bold',
              color: '#1a237e',
              mb: 1,
              fontFamily: 'Poppins'
            }}>
              10. जिलों की भूमिका
            </Typography>
            <Typography variant="body2" sx={{ 
              lineHeight: 1.8,
              mb: 2,
              textAlign: 'justify',
              fontFamily: 'Poppins',
              color: '#333'
            }}>
              आत्महत्या, नामिनी संबंधी विवाद अथवा अन्य किसी भी विवादित परिस्थिति के निराकरण हेतु उस जिले के सदस्यों से सहयोग लिया जाएगा, जिस जिले का सदस्य दिवंगत हुआ है।
            </Typography>
            <Typography variant="body2" sx={{ 
              lineHeight: 1.8,
              mb: 2,
              textAlign: 'justify',
              fontFamily: 'Poppins',
              color: '#333'
            }}>
              इसके अतिरिक्त, दिवंगत सदस्य के परिजनों को:
            </Typography>
            <Typography variant="body2" sx={{ 
              lineHeight: 1.8,
              mb: 2,
              textAlign: 'justify',
              fontFamily: 'Poppins',
              color: '#333'
            }}>
              • अनुकंपा नियुक्ति<br/>
              • अन्य दावे<br/>
              • प्रशासनिक प्रक्रियाओं
            </Typography>
            <Typography variant="body2" sx={{ 
              lineHeight: 1.8,
              mb: 3,
              textAlign: 'justify',
              fontFamily: 'Poppins',
              color: '#333'
            }}>
              में जिले के सदस्य नैतिक एवं मार्गदर्शक सहयोग प्रदान करेंगे।
            </Typography>

            {/* 11. अंतिम निर्देश */}
            <Typography variant="subtitle2" sx={{ 
              fontWeight: 'bold',
              color: '#1a237e',
              mb: 1,
              fontFamily: 'Poppins'
            }}>
              11. अंतिम निर्देश
            </Typography>
            <Typography variant="body2" sx={{ 
              lineHeight: 1.8,
              mb: 3,
              textAlign: 'justify',
              fontFamily: 'Poppins',
              color: '#333'
            }}>
              सभी सदस्यों से यह अपेक्षा की जाती है कि कर्मचारी कल्याण कोष के किसी भी सदस्य के दिवंगत होने की स्थिति में उसके नामिनी का सहयोग नियमों के अनुरूप अनिवार्य रूप से किया जाए।
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default Niyamawali;